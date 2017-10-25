import {Component} from '@angular/core';
import {getAddresses} from '../address.reducer';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../app.reducers';
import {Address} from '../model/address';
import {CreateAddressAction} from '../address.actions';

@Component({
  selector: 'app-address-overview',
  template: `
    <app-create-address (createAddress)="createAddress($event)"></app-create-address>
    <app-address-overview-table [addresses]="addresses$ | async"></app-address-overview-table>
  `,
  styles: []
})
export class AddressOverviewComponent {
  addresses$: Observable<Array<Address>>;

  constructor(private store: Store<State>) {
    this.addresses$ = this.store.select(getAddresses);
  }

  createAddress(address: Address) {
    this.store.dispatch(new CreateAddressAction(address));
  }
}
