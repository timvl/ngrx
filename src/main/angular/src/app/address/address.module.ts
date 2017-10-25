import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { CreateAddressComponent } from './create-address/create-address.component';
import { AddressOverviewTableComponent } from './address-overview-table/address-overview-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AddressOverviewComponent,
    CreateAddressComponent,
    AddressOverviewTableComponent
  ],
  exports: [
    AddressOverviewComponent
  ]
})
export class AddressModule { }
