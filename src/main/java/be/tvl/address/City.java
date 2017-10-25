package be.tvl.address;

import javax.persistence.Embeddable;

@Embeddable
public class City {

    private String zip;
    private String city;

    public City() {
    }

    public String getZip() {
        return zip;
    }

    public String getCity() {
        return city;
    }
}
