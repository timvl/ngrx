import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import {State} from '../../app.reducers';
import {getAddresses} from '../address.reducer';
import {Observable} from 'rxjs/Observable';
import {Address} from '../model/address';

@Component({
  selector: 'app-address-detail',
  template: `
    <p>
      address-detail works for id {{id}}!
    </p>
  `,
  styles: []
})
export class AddressDetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }
}
