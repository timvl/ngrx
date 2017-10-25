import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Address} from '../model/address';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) {
  }

  public createAddress(address: Address): Observable<Address> {
    return this.http.post('/api/address', address);
  }

}
