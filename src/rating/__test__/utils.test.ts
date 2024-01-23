import { it, expect, describe } from '@jest/globals';
import { getStars } from '../utils';

describe('getStars', () => {
  const demo = (n: number) =>
    getStars(n, 5)
      .map(item => {
        switch (item) {
          case 'empty':
            return '__';
          case 'half':
            return '[_';
          case 'full':
            return '[]';
          default:
            return '__';
        }
      })
      .join(' ');

  it('should works', () => {
    expect(demo(0.1)).toBe('__ __ __ __ __');
    expect(demo(0.2)).toBe('__ __ __ __ __');

    expect(demo(0.6)).toBe('[_ __ __ __ __');
    expect(demo(0.7)).toBe('[_ __ __ __ __');

    expect(demo(0.8)).toBe('[] __ __ __ __');
    expect(demo(1.2)).toBe('[] __ __ __ __');

    expect(demo(1.4)).toBe('[] [_ __ __ __');
    expect(demo(1.6)).toBe('[] [_ __ __ __');

    expect(demo(1.8)).toBe('[] [] __ __ __');
    expect(demo(2.1)).toBe('[] [] __ __ __');

    expect(demo(2.3)).toBe('[] [] [_ __ __');
    expect(demo(2.7)).toBe('[] [] [_ __ __');

    expect(demo(3.2)).toBe('[] [] [] __ __');
    expect(demo(3.24)).toBe('[] [] [] __ __');

    expect(demo(3.4)).toBe('[] [] [] [_ __');
    expect(demo(3.6)).toBe('[] [] [] [_ __');

    expect(demo(4.4)).toBe('[] [] [] [] [_');
    expect(demo(4.6)).toBe('[] [] [] [] [_');
    expect(demo(4.7)).toBe('[] [] [] [] [_');

    expect(demo(4.8)).toBe('[] [] [] [] []');
  });

  it('should works with pretty numbers', () => {
    expect(demo(0.0)).toBe('__ __ __ __ __');
    expect(demo(1.0)).toBe('[] __ __ __ __');
    expect(demo(1.5)).toBe('[] [_ __ __ __');
    expect(demo(2.0)).toBe('[] [] __ __ __');
    expect(demo(2.5)).toBe('[] [] [_ __ __');
    expect(demo(3.0)).toBe('[] [] [] __ __');
    expect(demo(3.5)).toBe('[] [] [] [_ __');
    expect(demo(4.0)).toBe('[] [] [] [] __');
    expect(demo(4.5)).toBe('[] [] [] [] [_');
    expect(demo(5.0)).toBe('[] [] [] [] []');
  });
});
