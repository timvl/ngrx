package be.tvl.address;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

@Configuration
public class RestConfig {

    @Bean
    @Primary
    public RepositoryRestConfiguration repositoryRestConfiguration(final RepositoryRestConfiguration repositoryRestConfiguration) {
        return repositoryRestConfiguration.exposeIdsFor(Address.class);
    }
}