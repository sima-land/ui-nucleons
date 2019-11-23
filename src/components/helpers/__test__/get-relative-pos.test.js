import getRelativePos from '../get-relative-pos';

describe('getRelativePos()', () => {
  it('should return relative position', () => {
    const parent = {
      getBoundingClientRect: () => ({
        left: 20,
        top: 30,
      }),
    };
    const target = {
      getBoundingClientRect: () => ({
        left: 120,
        top: 210,
      }),
      parentElement: parent,
    };
    const otherElement = {
      getBoundingClientRect: () => ({
        left: 43,
        top: 86,
      }),
    };

    expect(getRelativePos(target)).toEqual({ x: 100, y: 180 });
    expect(getRelativePos(target, parent)).toEqual({ x: 100, y: 180 });
    expect(getRelativePos(target, otherElement)).toEqual({ x: 77, y: 124 });
  });
});

