import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { KickersEntity } from './kickers.models';
import { KickersEffects } from './kickers.effects';
import { KickersFacade } from './kickers.facade';

import * as KickersSelectors from './kickers.selectors';
import * as KickersActions from './kickers.actions';
import {
  KICKERS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './kickers.reducer';

interface TestSchema {
  kickers: State;
}

describe('KickersFacade', () => {
  let facade: KickersFacade;
  let store: Store<TestSchema>;
  const createKickersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KickersEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(KICKERS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([KickersEffects]),
        ],
        providers: [KickersFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(KickersFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allKickers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(KickersActions.loadKickers());

        list = await readFirst(facade.allKickers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadKickersSuccess` to manually update list
     */
    it('allKickers$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allKickers$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.dispatch(
          KickersActions.loadKickersSuccess({
            kickers: [createKickersEntity('AAA'), createKickersEntity('BBB')],
          })
        );

        list = await readFirst(facade.allKickers$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
