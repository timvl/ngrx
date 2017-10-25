import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Address} from '../model/address';
import {Observable} from 'rxjs/Observable';
import {PagedResponse} from '../model/paged-response';

@Injectable()
export class AddressService {

  constructor(private http: HttpClient) {
  }

  public createAddress(address: Address): Observable<Address> {
    return this.http.post('/api/address', address);
  }

  public getAddresses(): Observable<PagedResponse<Address>> {
    return this.http.get('/api/address').map(response => {
      return new PagedResponse<Address>(response['page'], response['_embedded']['address']);
    });
  }

}
