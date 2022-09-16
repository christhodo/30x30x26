import { createAction, props } from '@ngrx/store';
import { Kicker } from '@kicker-angular/api-interfaces';

export const resetSelectedKicker = createAction(
  '[Kickers] Reset Selected Kicker'
);
export const resetKickers = createAction('[Kickers] Reset Kickers');

// select Kicker
export const selectKicker = createAction(
  '[Kickers] Select Kicker',
  props<{ selectedId: string }>()
);
// load Kicker
export const loadKickers = createAction('[Kickers] Load Kickers');

export const loadKickersSuccess = createAction(
  '[Kickers] Load Kickers Success',
  props<{ kickers: Kicker[] }>()
);

export const loadKickersFailure = createAction(
  '[Kickers] Load Kickers Failure',
  props<{ error: any }>()
);

// Load Kicker
export const loadKicker = createAction(
  '[Kickers] Load Kicker',
  props<{ kickerId: string }>()
);

export const loadKickerSuccess = createAction(
  '[Kickers] Load Kicker Success',
  props<{ kicker: Kicker }>()
);

export const loadKickerFailure = createAction(
  '[Kickers] Load Kicker Failure',
  props<{ error: any }>()
);

// Create Kicker
export const createKicker = createAction(
  '[Kickers] Create Kicker',
  props<{ kicker: Kicker }>()
);

export const createKickerSuccess = createAction(
  '[Kickers] Create Kicker Success',
  props<{ kicker: Kicker }>()
);

export const createKickerFailure = createAction(
  '[Kickers] Create Kicker Failure',
  props<{ error: any }>()
);

// Update Kicker
export const updateKicker = createAction(
  '[Kickers] Update Kicker',
  props<{ kicker: Kicker }>()
);

export const updateKickerSuccess = createAction(
  '[Kickers] Update Kicker Success',
  props<{ kicker: Kicker }>()
);

export const updateKickerFailure = createAction(
  '[Kickers] Update Kicker Failure',
  props<{ error: any }>()
);

// Delete Kicker
export const deleteKicker = createAction(
  '[Kickers] Delete Kicker',
  props<{ kicker: Kicker }>()
);

export const deleteKickerCancelled = createAction(
  '[Kickers] Delete Kicker Cancelled'
);

export const deleteKickerSuccess = createAction(
  '[Kickers] Delete Kicker Success',
  props<{ kicker: Kicker }>()
);

export const deleteKickerFailure = createAction(
  '[Kickers] Delete Kicker Failure',
  props<{ error: any }>()
);
