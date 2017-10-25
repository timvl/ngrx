import {Component} from '@angular/core';
import {createAddressLoading, getAddresses} from '../address.reducer';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../app.reducers';
import {Address} from '../model/address';
import {CreateAddressRequestAction} from '../address.actions';

@Component({
  selector: 'app-address-overview',
  template: `
    <app-create-address 
      [loading]="createAddressLoading$ | async" 
      (createAddress)="createAddress($event)"></app-create-address>
    
    <app-address-overview-table 
      [addresses]="addresses$ | async"></app-address-overview-table>
  `,
  styles: []
})
export class AddressOverviewComponent {
  addresses$: Observable<Array<Address>>;
  createAddressLoading$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.addresses$ = this.store.select(getAddresses);
    this.createAddressLoading$ = this.store.select(createAddressLoading);
  }

  createAddress(address: Address) {
    this.store.dispatch(new CreateAddressRequestAction(address));
  }
}
