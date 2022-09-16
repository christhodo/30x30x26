import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as KickersActions from './kickers.actions';
import { Kicker } from '@kicker-angular/api-interfaces';

export const KICKERS_FEATURE_KEY = 'kickers';

export interface KickersState extends EntityState<Kicker> {
  selectedId?: string | number; // which Kickers record has been selected
  loaded: boolean; // has the Kickers list been loaded
  error?: string | null; // last known error (if any)
}

export interface KickersPartialState {
  readonly [KICKERS_FEATURE_KEY]: KickersState;
}

export const kickersAdapter: EntityAdapter<Kicker> = createEntityAdapter();

export const initialKickersState: KickersState = kickersAdapter.getInitialState(
  {
    // set initial required properties
    loaded: false,
  }
);

const onFailure = (state, { error }) => ({ ...state, error });

const _kickersReducer = createReducer(
  initialKickersState,
  on(KickersActions.selectKicker, (state, { selectedId }) =>
    Object.assign({}, state, { selectedId })
  ),
  on(KickersActions.resetSelectedKicker, (state) =>
    Object.assign({}, state, { selectedId: null })
  ),
  on(KickersActions.resetKickers, (state) => kickersAdapter.removeAll(state)),
  // Load kickers
  on(KickersActions.loadKickers, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(KickersActions.loadKickersSuccess, (state, { kickers }) =>
    kickersAdapter.setAll(kickers, { ...state, loaded: true })
  ),
  on(KickersActions.loadKickersFailure, onFailure),
  // Load kicker
  on(KickersActions.loadKicker, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(KickersActions.loadKickerSuccess, (state, { kicker }) =>
    kickersAdapter.upsertOne(kicker, { ...state, loaded: true })
  ),
  on(KickersActions.loadKickerFailure, onFailure),
  // Add kicker
  on(KickersActions.createKickerSuccess, (state, { kicker }) =>
    kickersAdapter.addOne(kicker, state)
  ),
  on(KickersActions.createKickerFailure, onFailure),
  // Update kicker
  on(KickersActions.updateKickerSuccess, (state, { kicker }) =>
    kickersAdapter.updateOne({ id: kicker.id, changes: kicker }, state)
  ),
  on(KickersActions.updateKickerFailure, onFailure),
  // Delete kicker
  on(KickersActions.deleteKickerSuccess, (state, { kicker }) =>
    kickersAdapter.removeOne(kicker.id, state)
  ),
  on(KickersActions.deleteKickerFailure, onFailure)
);

export function kickersReducer(
  state: KickersState | undefined,
  action: Action
) {
  return _kickersReducer(state, action);
}
