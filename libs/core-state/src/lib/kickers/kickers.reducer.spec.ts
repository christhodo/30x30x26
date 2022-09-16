import { KickersEntity } from './kickers.models';
import * as KickersActions from './kickers.actions';
import { State, initialState, reducer } from './kickers.reducer';

describe('Kickers Reducer', () => {
  const createKickersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KickersEntity);

  beforeEach(() => {});

  describe('valid Kickers actions', () => {
    it('loadKickersSuccess should return set the list of known Kickers', () => {
      const kickers = [
        createKickersEntity('PRODUCT-AAA'),
        createKickersEntity('PRODUCT-zzz'),
      ];
      const action = KickersActions.loadKickersSuccess({ kickers });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
