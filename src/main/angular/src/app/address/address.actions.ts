import {Action} from '@ngrx/store';
import {Address} from './model/address';
import {PagedResponse} from './model/paged-response';

export const CREATE_ADDRESS_REQUEST = '[Address] Create Address Request';
export const CREATE_ADDRESS_RESPONSE = '[Address] Create Address Response';
export const LOAD_ADDRESSES_REQUEST = '[Address] Load Addresses Request';
export const LOAD_ADDRESSES_RESPONSE = '[Address] Load Addresses Response';

export class CreateAddressRequestAction implements Action {
  readonly type = CREATE_ADDRESS_REQUEST;

  constructor(public address: Address) {
  }
}

export class CreateAddressResponseAction implements Action {
  readonly type = CREATE_ADDRESS_RESPONSE;

  constructor(public address: Address) {
  }
}

export class LoadAddressesRequestAction implements Action {
  readonly type = LOAD_ADDRESSES_REQUEST;
}

export class LoadAddressesResponseAction implements Action {
  readonly type = LOAD_ADDRESSES_RESPONSE;

  constructor(public response: PagedResponse<Address>) {
  }
}

export type Actions = CreateAddressRequestAction | CreateAddressResponseAction | LoadAddressesRequestAction | LoadAddressesResponseAction;
