import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  KICKERS_FEATURE_KEY,
  KickersState,
  kickersAdapter,
} from './kickers.reducer';
import { Kicker } from '@kicker-angular/api-interfaces';

// Lookup the 'Kickers' feature state managed by NgRx
export const getKickersState = createFeatureSelector<KickersState>(
  KICKERS_FEATURE_KEY
);

const { selectAll, selectEntities } = kickersAdapter.getSelectors();

export const getKickersLoaded = createSelector(
  getKickersState,
  (state: KickersState) => state.loaded
);

export const getKickersError = createSelector(
  getKickersState,
  (state: KickersState) => state.error
);

export const getAllKickers = createSelector(
  getKickersState,
  (state: KickersState) => selectAll(state)
);

export const getKickersEntities = createSelector(
  getKickersState,
  (state: KickersState) => selectEntities(state)
);

export const getSelectedKickerId = createSelector(
  getKickersState,
  (state: KickersState) => state.selectedId
);

const emptyKicker: Kicker = {
  id: null,
  title: '',
  description: '',
};

export const getSelectedKicker = createSelector(
  getKickersEntities,
  getSelectedKickerId,
  (entities, selectedId) => {
    return selectedId ? entities[selectedId] : emptyKicker;
  }
);
