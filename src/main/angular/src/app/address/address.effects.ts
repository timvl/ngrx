import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import 'rxjs/add/operator/withLatestFrom';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {
  CreateAddressRequestAction, CreateAddressResponseAction, CREATE_ADDRESS_REQUEST, CREATE_ADDRESS_RESPONSE, LoadAddressesRequestAction, LOAD_ADDRESSES_REQUEST,
  LoadAddressesResponseAction
} from './address.actions';
import {AddressService} from './address-service/address.service';
import {of} from 'rxjs/observable/of';

@Injectable()
export class AddressEffects {

  constructor(private actions$: Actions, private addressService: AddressService) {
  }

  @Effect()
  createAddressRequest$: Observable<Action> = this.actions$
    .ofType<CreateAddressRequestAction>(CREATE_ADDRESS_REQUEST)
    .switchMap((action) => {
      return this.addressService.createAddress(action.address)
        .map(response => new CreateAddressResponseAction(response));
    });

  @Effect()
  createAddressResponse$: Observable<Action> = this.actions$
    .ofType<CreateAddressResponseAction>(CREATE_ADDRESS_RESPONSE)
    .switchMap((action) => of(new LoadAddressesRequestAction()));

  @Effect()
  loadAddressesRequest$: Observable<Action> = this.actions$
    .ofType<LoadAddressesRequestAction>(LOAD_ADDRESSES_REQUEST)
    .switchMap((action) => {
      return this.addressService.getAddresses()
        .map(response => new LoadAddressesResponseAction(response));
    });
}
