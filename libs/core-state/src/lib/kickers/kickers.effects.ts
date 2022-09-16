import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch, pessimisticUpdate } from '@nrwl/angular';
import { map } from 'rxjs/operators';
import * as fromKickers from './kickers.reducer';
import * as KickersActions from './kickers.actions';
import { Kicker } from '@kicker-angular/api-interfaces';
import { KickersService } from '@kicker-angular/core-data';

@Injectable()
export class KickersEffects {
  loadKickers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KickersActions.loadKickers),
      fetch({
        run: (action) =>
          this.kickersService
            .all()
            .pipe(
              map((kickers: Kicker[]) =>
                KickersActions.loadKickersSuccess({ kickers })
              )
            ),
        onError: (action, error) =>
          KickersActions.loadKickersFailure({ error }),
      })
    )
  );

  loadKicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KickersActions.loadKicker),
      fetch({
        run: (action) =>
          this.kickersService
            .find(action.kickerId)
            .pipe(
              map((kicker: Kicker) =>
                KickersActions.loadKickerSuccess({ kicker })
              )
            ),
        onError: (action, error) => KickersActions.loadKickerFailure({ error }),
      })
    )
  );

  createKicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KickersActions.createKicker),
      pessimisticUpdate({
        run: (action) =>
          this.kickersService
            .create(action.kicker)
            .pipe(
              map((kicker: Kicker) =>
                KickersActions.createKickerSuccess({ kicker })
              )
            ),
        onError: (action, error) =>
          KickersActions.createKickerFailure({ error }),
      })
    )
  );

  updateKicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KickersActions.updateKicker),
      pessimisticUpdate({
        run: (action) =>
          this.kickersService
            .update(action.kicker)
            .pipe(
              map((kicker: Kicker) =>
                KickersActions.updateKickerSuccess({ kicker })
              )
            ),
        onError: (action, error) =>
          KickersActions.updateKickerFailure({ error }),
      })
    )
  );

  deleteKicker$ = createEffect(() =>
    this.actions$.pipe(
      ofType(KickersActions.deleteKicker),
      pessimisticUpdate({
        run: (action) =>
          this.kickersService
            .delete(action.kicker)
            .pipe(
              map((kicker: Kicker) =>
                KickersActions.deleteKickerSuccess({ kicker })
              )
            ),
        onError: (action, error) =>
          KickersActions.deleteKickerFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private kickersService: KickersService
  ) {}
}
