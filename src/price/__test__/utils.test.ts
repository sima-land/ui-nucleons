import { formatPrice } from '../utils';

describe('formatPrice', () => {
  it('should works', () => {
    ([
      [0, '0 $'],
      [0.1, '0,10 $'],
      [0.15, '0,15 $'],
      [1000, '1 000 $'],
      [2000.5, '2 000,50 $'],
      [3000.56, '3 000,56 $'],
      [4000.567, '4 000,57 $'],
      [1234567, '1 234 567 $'],
      [1234567.8, '1 234 567,80 $'],
      [1234567.89, '1 234 567,89 $'],
    ] as const)
      .map(([a, b]) => [a, b.replace(/\s/g, '\u2009')])
      .forEach(([value, result]) => {
        expect(formatPrice(value, '$')).toBe(result);
      });
  });
});
