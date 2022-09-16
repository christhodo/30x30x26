import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { KickersEffects } from './kickers.effects';
import * as KickersActions from './kickers.actions';

describe('KickersEffects', () => {
  let actions: Observable<any>;
  let effects: KickersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        KickersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(KickersEffects);
  });

  describe('loadKickers$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: KickersActions.loadKickers() });

      const expected = hot('-a-|', {
        a: KickersActions.loadKickersSuccess({ kickers: [] }),
      });

      expect(effects.loadKickers$).toBeObservable(expected);
    });
  });
});
