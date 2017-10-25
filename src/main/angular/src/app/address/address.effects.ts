import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import 'rxjs/add/operator/withLatestFrom';

@Injectable()
export class AddressEffects {

  constructor(private actions$: Actions) {
  }
}
