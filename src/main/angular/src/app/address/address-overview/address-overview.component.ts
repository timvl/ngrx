import {Component} from '@angular/core';
import {getAddressTest} from '../address.reducer';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {State} from '../../app.reducers';
import {CreateAddressAction} from '../address.actions';

@Component({
  selector: 'app-address-overview',
  template: `
    <app-create-address></app-create-address>
    <app-address-overview-table></app-address-overview-table>
  `,
  styles: []
})
export class AddressOverviewComponent {
  test$: Observable<boolean>;

  constructor(private store: Store<State>) {
    this.test$ = this.store.select(getAddressTest);
    this.test$.subscribe(result => {
      console.log(result);
    });

    this.store.dispatch(new CreateAddressAction());
  }


}
