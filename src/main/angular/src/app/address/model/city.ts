export interface City {
  zip: string;
  city: string;
}

export class CityImpl implements City {
  zip: string;
  city: string;

  constructor(zip: string, city: string) {
    this.zip = zip;
    this.city = city;
  }
}
