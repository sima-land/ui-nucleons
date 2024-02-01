import { it, expect, describe } from '@jest/globals';
import { maxIndexOf } from '../max-index-of';

describe('maxIndexOf()', () => {
  it('should works properly', () => {
    expect(maxIndexOf(null)).toBe(-1);
    expect(maxIndexOf(undefined)).toBe(-1);
    expect(maxIndexOf([])).toBe(0);
    expect(maxIndexOf([1])).toBe(0);
    expect(maxIndexOf([1, 2])).toBe(1);
    expect(maxIndexOf([1, 2, 3])).toBe(2);
  });
});
