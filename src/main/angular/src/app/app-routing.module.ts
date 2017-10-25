import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressOverviewComponent} from './address/address-overview/address-overview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'address/overview',
    pathMatch: 'full'
  },
  {
    path: 'address/overview',
    component: AddressOverviewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
