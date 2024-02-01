import { it, expect, describe } from '@jest/globals';
import { getFractionDepth } from '../get-fraction-depth';

describe('getFractionDepth()', () => {
  it('should works correctly', () => {
    expect(getFractionDepth()).toEqual(0);
    expect(getFractionDepth(NaN)).toEqual(0);
    expect(getFractionDepth(0)).toEqual(0);
    expect(getFractionDepth(1)).toEqual(0);
    expect(getFractionDepth(123)).toEqual(0);
    expect(getFractionDepth(0.1)).toEqual(1);
    expect(getFractionDepth(0.12)).toEqual(2);
    expect(getFractionDepth(0.123456789)).toEqual(9);
  });
});
