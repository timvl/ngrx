import * as fromRoot from '../app.reducers';
import * as actions from './address.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {Address} from './model/address';

export interface State extends fromRoot.State {
  addresses: AddressState;
}

export const reducers = {
  addresses: addressReducer
};

export interface AddressState {
  'addresses': Array<Address>;
}

const initialState: AddressState = {
  addresses: []
};

export function addressReducer(state = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.CREATE_ADDRESS:
      return {
        ...state,
        addresses: [...state.addresses, action.address]
      };
    default:
      return state;
  }
}

export const getAddressFeatureState = createFeatureSelector<State>('addresses');

export const getAddresses = createSelector(getAddressFeatureState, state => state ? state.addresses.addresses : false);

