import { Injectable } from '@angular/core';
import * as KickersActions from './kickers.actions';
import { select, Store, Action, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import { Kicker } from '@kicker-angular/api-interfaces';
import * as KickersSelectors from './kickers.selectors';

@Injectable()
export class KickersFacade {
  loaded$ = this.store.pipe(select(KickersSelectors.getKickersLoaded));
  allKickers$ = this.store.pipe(select(KickersSelectors.getAllKickers));
  selectedKicker$ = this.store.pipe(select(KickersSelectors.getSelectedKicker));

  mutations$ = this.actions$.pipe(
    filter(
      (action: Action) =>
        action.type === KickersActions.createKicker({} as any).type ||
        action.type === KickersActions.updateKicker({} as any).type ||
        action.type === KickersActions.deleteKicker({} as any).type
    )
  );

  constructor(private store: Store, private actions$: ActionsSubject) {}

  selectKicker(selectedId: string) {
    this.dispatch(KickersActions.selectKicker({ selectedId }));
  }

  loadKickers() {
    this.dispatch(KickersActions.loadKickers());
  }

  loadKicker(kickerId: string) {
    this.dispatch(KickersActions.loadKicker({ kickerId }));
  }

  saveKicker(kicker: Kicker) {
    if (kicker.id) {
      this.updateKicker(kicker);
    } else {
      this.createKicker(kicker);
    }
  }

  createKicker(kicker: Kicker) {
    this.dispatch(KickersActions.createKicker({ kicker }));
  }

  updateKicker(kicker: Kicker) {
    this.dispatch(KickersActions.updateKicker({ kicker }));
  }

  deleteKicker(kicker: Kicker) {
    this.dispatch(KickersActions.deleteKicker({ kicker }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
