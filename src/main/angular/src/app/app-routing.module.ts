import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddressOverviewComponent} from './address/address-overview/address-overview.component';
import {AddressDetailComponent} from './address/address-detail/address-detail.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'address/overview',
    pathMatch: 'full'
  },
  {
    path: 'address/overview',
    component: AddressOverviewComponent,
  },
  {
    path: 'address/detail/:id',
    component: AddressDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
