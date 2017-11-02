import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Address} from '../model/address';

@Component({
  selector: 'app-address-overview-table',
  template: `
    <clr-datagrid [clrDgLoading]="loading">
      <clr-dg-column [clrDgField]="'name'">Name</clr-dg-column>
      <clr-dg-column [clrDgField]="'street'">Street</clr-dg-column>
      <clr-dg-column [clrDgField]="'number'">Number</clr-dg-column>
      <clr-dg-column [clrDgField]="'city.zip'">Zip</clr-dg-column>
      <clr-dg-column [clrDgField]="'city.city'" >City</clr-dg-column>
      <clr-dg-row *clrDgItems="let address of addresses" [clrDgItem]="address">
        <clr-dg-cell>{{address.name}}</clr-dg-cell>
        <clr-dg-cell>{{address.street}}</clr-dg-cell>
        <clr-dg-cell>{{address.number}}</clr-dg-cell>
        <clr-dg-cell>{{address.city.zip}}</clr-dg-cell>
        <clr-dg-cell>{{address.city.city}}</clr-dg-cell>
        <clr-dg-action-overflow>
          <button class="action-item" (click)="selectAddress.emit(address)">Detail</button>
        </clr-dg-action-overflow>
      </clr-dg-row>
      <clr-dg-footer>{{addresses?.length}} Addresses</clr-dg-footer>
    </clr-datagrid>
  `,
  styles: []
})
export class AddressOverviewTableComponent {
  @Input() addresses: Array<Address>;
  @Input() loading: boolean;
  @Output() selectAddress = new EventEmitter<Address>();
}
