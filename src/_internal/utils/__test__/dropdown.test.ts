import { placeDropdown } from '../dropdown';
import { DEFAULTS, HEIGHTS } from '../../../text-field';

describe('placeDropdown', () => {
  it('should works properly without arguments', () => {
    expect(placeDropdown()).toEqual({
      style: {
        top: `${HEIGHTS[DEFAULTS.size]}px`,
      },
    });
  });

  it('should works properly with arguments', () => {
    expect(placeDropdown('s')).toEqual({
      style: {
        top: `${HEIGHTS.s}px`,
      },
    });
  });
});
