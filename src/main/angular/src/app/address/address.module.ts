import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {reducers} from './address.reducer';
import {AddressEffects} from './address.effects';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {AddressOverviewComponent} from './address-overview/address-overview.component';
import {CreateAddressComponent} from './create-address/create-address.component';
import {AddressOverviewTableComponent} from './address-overview-table/address-overview-table.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ClarityModule} from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('addresses', reducers),
    EffectsModule.forFeature([AddressEffects]),
    ClarityModule
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
export class AddressModule {
}
