import * as fromRoot from '../app.reducers';
import * as actions from './address.actions';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface State extends fromRoot.State {
  addresses: AddressState;
}

export const reducers = {
  addresses: addressReducer
};

export interface AddressState {
  'test': boolean;
}

const initialState: AddressState = {
  test: false
};

export function addressReducer(state = initialState, action: actions.Actions) {
  switch (action.type) {
    case actions.CREATE_ADDRESS:
      return {
        ...state,
        test: true,
      };
    default:
      return state;
  }
}

export const getAddressFeatureState = createFeatureSelector<State>('addresses');

export const getAddressTest = createSelector(getAddressFeatureState, state => state ? state.addresses.test : false);

