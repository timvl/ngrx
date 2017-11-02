import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule, StoreDevtoolsOptions} from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from './app.reducers';
import {environment} from '../environments/environment';
import {CustomRouterStateSerializer} from './shared/custom-router-state-serializer';
import {AddressModule} from './address/address.module';
import {ClarityModule} from 'clarity-angular';
import {HttpClientModule} from '@angular/common/http';
import {RouterEffects} from './shared/router.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument(<StoreDevtoolsOptions>{maxAge: 25}) : [],
    StoreRouterConnectingModule,
    EffectsModule.forRoot([RouterEffects]),
    AddressModule,
    ClarityModule,
    HttpClientModule,
  ],
  providers: [
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
