import { it, expect, describe } from '@jest/globals';
import { getRelativePos } from '../get-relative-pos';

describe('getRelativePos()', () => {
  it('should return relative position', () => {
    const parent = {
      getBoundingClientRect: () => ({
        left: 20,
        top: 30,
      }),
    } as HTMLElement;

    const target = {
      getBoundingClientRect: () => ({
        left: 120,
        top: 210,
      }),
      parentElement: parent,
    } as HTMLElement;

    const otherElement = {
      getBoundingClientRect: () => ({
        left: 43,
        top: 86,
      }),
    } as HTMLElement;

    const noParentElement = {
      getBoundingClientRect: () => ({
        left: 55,
        top: 66,
      }),
    } as HTMLElement;

    expect(getRelativePos(target)).toEqual({ x: 100, y: 180 });
    expect(getRelativePos(target, parent)).toEqual({ x: 100, y: 180 });
    expect(getRelativePos(target, otherElement)).toEqual({ x: 77, y: 124 });
    expect(getRelativePos(noParentElement)).toEqual({ x: 55, y: 66 });
  });
});
