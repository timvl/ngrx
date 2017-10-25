/*
 * Copyright 2016 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package be.tvl.address;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class AddressControllerTest {
    private static final String ADDRESS = "{\"name\": \"john doe\",\"street\": \"a street\",\"number\": \"1\",\"city\": {\"zip\": \"2400\",\"city\": \"Mol\"}}";

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private AddressRepository addressRepository;

    @Before
    public void deleteAllBeforeTests() throws Exception {
        addressRepository.deleteAll();
    }

    @Test
    public void shouldReturnRepositoryIndex() throws Exception {
        mockMvc.perform(get("/"))
                .andDo(print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$._links.address").exists());
    }

    @Test
    public void shouldCreateEntity() throws Exception {
        mockMvc.perform(post("/address")
                .content(ADDRESS))
                .andExpect(status().isCreated())
                .andExpect(header().string("Location", containsString("address/")));
    }


    @Test
    public void shouldRetrieveEntity() throws Exception {
        String location = createAddress();

        mockMvc.perform(get(location))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("john doe"))
                .andExpect(jsonPath("$.street").value("a street"));
    }

    @Test
    public void shouldQueryEntity() throws Exception {
        createAddress();

        mockMvc.perform(
                get("/address/search/findByName?name={name}", "john doe"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$._embedded.address[0].name").value("john doe"));
    }

    @Test
    public void shouldUpdateEntity() throws Exception {
        String location = createAddress();

        mockMvc.perform(put(location).content("{\"name\": \"jane doe\",\"street\": \"a street\",\"number\": \"1\",\"city\": {\"zip\": \"2400\",\"city\": \"Mol\"}}"))
                .andExpect(status().isNoContent());

        mockMvc.perform(get(location))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("jane doe"));
    }

    @Test
    public void shouldPartiallyUpdateEntity() throws Exception {
        String location = createAddress();

        mockMvc.perform(patch(location).content("{\"name\": \"jane doe\"}"))
                .andExpect(status().isNoContent());

        mockMvc.perform(get(location))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("jane doe"))
                .andExpect(jsonPath("$.street").value("a street"));
    }

    @Test
    public void shouldDeleteEntity() throws Exception {
        String location = createAddress();

        mockMvc.perform(delete(location))
                .andExpect(status().isNoContent());

        mockMvc.perform(get(location))
                .andExpect(status().isNotFound());
    }

    private String createAddress() throws Exception {
        MvcResult mvcResult = mockMvc.perform(post("/address")
                .content(ADDRESS))
                .andExpect(status().isCreated())
                .andReturn();

        return mvcResult
                .getResponse()
                .getHeader("Location");
    }
}