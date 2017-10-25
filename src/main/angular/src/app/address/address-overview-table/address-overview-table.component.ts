import {Component, Input, OnInit} from '@angular/core';
import {Address} from '../model/address';

@Component({
  selector: 'app-address-overview-table',
  template: `
    <clr-datagrid>
      <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
      <clr-dg-column [clrDgField]="'street'">Street</clr-dg-column>
      <clr-dg-column [clrDgField]="'number'">Number</clr-dg-column>
      <clr-dg-column [clrDgField]="'city.zip'">Zip</clr-dg-column>
      <clr-dg-column [clrDgField]="'city.city'" >City</clr-dg-column>
      <clr-dg-row *clrDgItems="let address of addresses">
        <clr-dg-cell>{{address.name}}</clr-dg-cell>
        <clr-dg-cell>{{address.street}}</clr-dg-cell>
        <clr-dg-cell>{{address.number}}</clr-dg-cell>
        <clr-dg-cell>{{address.city.zip}}</clr-dg-cell>
        <clr-dg-cell>{{address.city.city}}</clr-dg-cell>
      </clr-dg-row>

      <clr-dg-footer>{{addresses?.length}} Addresses</clr-dg-footer>
    </clr-datagrid>
  `,
  styles: []
})
export class AddressOverviewTableComponent {
  @Input() addresses: Array<Address>;
}
