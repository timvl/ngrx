import {RouterStateSerializer} from '@ngrx/router-store';
import {RouterStateUrl} from './router-state-url';
import {RouterStateSnapshot} from '@angular/router';

export class CustomRouterStateSerializer implements RouterStateSerializer<RouterStateUrl> {
  serialize(routerState: RouterStateSnapshot): RouterStateUrl {
    const {url} = routerState;
    const queryParams = routerState.root.queryParams;
    const params = routerState.root.firstChild ? routerState.root.firstChild.params : null;

    return {url, queryParams, params};
  }
}
