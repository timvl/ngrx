import {Action} from '@ngrx/store';
import {Address} from './model/address';

export const CREATE_ADDRESS = '[Address] Create Address';

export class CreateAddressAction implements Action {
  readonly type = CREATE_ADDRESS;

  constructor(public address: Address) {
  }
}

export type Actions = CreateAddressAction;
