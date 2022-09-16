import { KickersEntity } from './kickers.models';
import { State, kickersAdapter, initialState } from './kickers.reducer';
import * as KickersSelectors from './kickers.selectors';

describe('Kickers Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getKickersId = (it) => it['id'];
  const createKickersEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as KickersEntity);

  let state;

  beforeEach(() => {
    state = {
      kickers: kickersAdapter.setAll(
        [
          createKickersEntity('PRODUCT-AAA'),
          createKickersEntity('PRODUCT-BBB'),
          createKickersEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Kickers Selectors', () => {
    it('getAllKickers() should return the list of Kickers', () => {
      const results = KickersSelectors.getAllKickers(state);
      const selId = getKickersId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = KickersSelectors.getSelected(state);
      const selId = getKickersId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getKickersLoaded() should return the current 'loaded' status", () => {
      const result = KickersSelectors.getKickersLoaded(state);

      expect(result).toBe(true);
    });

    it("getKickersError() should return the current 'error' state", () => {
      const result = KickersSelectors.getKickersError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
