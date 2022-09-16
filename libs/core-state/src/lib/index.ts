import { Params } from '@angular/router';
import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import * as fromKickers from './kickers/kickers.reducer';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

// ---------------------------------------
// Core State and Reducers
// ---------------------------------------

export interface AppState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
  [fromKickers.KICKERS_FEATURE_KEY]: fromKickers.KickersState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: fromRouter.routerReducer,
  [fromKickers.KICKERS_FEATURE_KEY]: fromKickers.kickersReducer,
};
