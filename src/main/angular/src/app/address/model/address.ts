import {City, CityImpl} from './city';

export interface Address {
  id: number;
  name: string;
  street: string;
  number: string;
  city: City;
}

export class AddressImpl implements Address {
  id: number;
  name: string;
  street: string;
  number: string;
  city: City;

  constructor(name: string, street: string, number: string, zip: string, city: string) {
    this.name = name;
    this.street = street;
    this.number = number;
    this.city = new CityImpl(zip, city);
  }
}
