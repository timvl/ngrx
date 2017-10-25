import {Action} from '@ngrx/store';
import {Address} from './model/address';

export const CREATE_ADDRESS_REQUEST = '[Address] Create Address Request';
export const CREATE_ADDRESS_RESPONSE = '[Address] Create Address Response';

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

export type Actions = CreateAddressRequestAction | CreateAddressResponseAction;
