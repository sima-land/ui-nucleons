import { it, expect, describe } from '@jest/globals';
import { formatPrice, formatFractional } from '../utils';

describe('formatPrice', () => {
  it('should works', () => {
    (
      [
        [NaN, '0 $'],
        [0, '0 $'],
        [0.1, '0,10 $'],
        [0.15, '0,15 $'],
        [0.0002, '0,0002 $'],
        [0.0000097, '0,0001 $'],
        [1000, '1 000 $'],
        [2000.5, '2 000,50 $'],
        [3000.56, '3 000,56 $'],
        [4000.567, '4 000,57 $'],
        [4000.56732, '4 000,57 $'],
        [1234567, '1 234 567 $'],
        [1234567.8, '1 234 567,80 $'],
        [1234567.89, '1 234 567,89 $'],
        [7.99, '7,99 $'],
        [7.998, '8,00 $'],
      ] as const
    )
      .map(([a, b]) => [a, b.replace(/\s/g, '\u2009')])
      .forEach(([value, result]) => {
        expect(formatPrice(value, '$')).toBe(result);
      });
  });
});

describe('formatFractional', () => {
  it('should works according to guides', () => {
    (
      [
        [NaN, ''],
        [0, ''],
        [0.1, '10'],
        [0.15, '15'],
        [0.0002, '0002'],
        [0.0000097, '0001'],
        [1000, ''],
        [2000.5, '50'],
        [3000.56, '56'],
        [4000.567, '57'],
        [4000.56732, '57'],
        [1234567, ''],
        [1234567.8, '80'],
        [1234567.89, '89'],
      ] as const
    ).forEach(([a, b]) => {
      expect(formatFractional(a)).toBe(b);
    });
  });
});
