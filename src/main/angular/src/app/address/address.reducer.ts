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
  'loadingCreate': boolean;
  'loadingAddresses': boolean
}

const initialState: AddressState = {
  addresses: [],
  loadingCreate: false,
  loadingAddresses: false
};

export function addressReducer(state = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.CREATE_ADDRESS_REQUEST:
      return {
        ...state,
        loadingCreate: true
      };
    case actions.CREATE_ADDRESS_RESPONSE:
      return {
        ...state,
        loadingCreate: false,
      };
    case actions.LOAD_ADDRESSES_REQUEST:
      return {
        ...state,
        loadingAddresses: true
      };
    case actions.LOAD_ADDRESSES_RESPONSE:
      return {
        ...state,
        loadingAddresses: false,
        addresses: action.response.content
      };
    default:
      return state;
  }
}

export const getAddressFeatureState = createFeatureSelector<State>('addresses');

export const getAddresses = createSelector(getAddressFeatureState, state => state ? state.addresses.addresses : false);

export const createAddressLoading = createSelector(getAddressFeatureState, state => state ? state.addresses.loadingCreate : false);

export const loadingAddresses = createSelector(getAddressFeatureState, state => state ? state.addresses.loadingAddresses : false);

