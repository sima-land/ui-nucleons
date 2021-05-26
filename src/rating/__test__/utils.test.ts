import { StarType } from '../types';
import { getStars } from '../utils';

describe('getStars', () => {
  const demo = (list: StarType[]) => list.map(item => {
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
  }).join(' ');

  it('should works', () => {
    expect(demo(getStars(0.1, 5))).toBe('[_ __ __ __ __');
    expect(demo(getStars(0.2, 5))).toBe('[_ __ __ __ __');
    expect(demo(getStars(0.6, 5))).toBe('[] __ __ __ __');
    expect(demo(getStars(1.2, 5))).toBe('[] [_ __ __ __');
    expect(demo(getStars(1.8, 5))).toBe('[] [] __ __ __');
    expect(demo(getStars(2.1, 5))).toBe('[] [] [_ __ __');
    expect(demo(getStars(3.2, 5))).toBe('[] [] [] [_ __');
    expect(demo(getStars(3.6, 5))).toBe('[] [] [] [] __');
    expect(demo(getStars(4.4, 5))).toBe('[] [] [] [] [_');
  });

  it('should works with pretty numbers', () => {
    expect(demo(getStars(0.0, 5))).toBe('__ __ __ __ __');
    expect(demo(getStars(1.0, 5))).toBe('[] __ __ __ __');
    expect(demo(getStars(1.5, 5))).toBe('[] [_ __ __ __');
    expect(demo(getStars(2.0, 5))).toBe('[] [] __ __ __');
    expect(demo(getStars(2.5, 5))).toBe('[] [] [_ __ __');
    expect(demo(getStars(3.0, 5))).toBe('[] [] [] __ __');
    expect(demo(getStars(3.5, 5))).toBe('[] [] [] [_ __');
    expect(demo(getStars(4.0, 5))).toBe('[] [] [] [] __');
    expect(demo(getStars(4.5, 5))).toBe('[] [] [] [] [_');
    expect(demo(getStars(5.0, 5))).toBe('[] [] [] [] []');
  });
});
