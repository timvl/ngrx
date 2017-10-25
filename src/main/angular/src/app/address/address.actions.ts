import {Action} from '@ngrx/store';

export const CREATE_ADDRESS = '[Address] Create Address';

export class CreateAddressAction implements Action {
  readonly type = CREATE_ADDRESS;

  constructor() {
  }
}

export type Actions = CreateAddressAction;
