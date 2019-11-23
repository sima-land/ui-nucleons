import boundsOf from '../bounds-of';

describe('boundsOf()', () => {
  it('should return null', () => {
    [
      1,
      false,
      null,
      undefined,
      {},
      [],
    ].forEach(value => {
      expect(boundsOf(value)).toBe(null);
    });
  });
  it('should return result of getBoundingClientRect() method', () => {
    const testRect = { testRect: true };
    expect(boundsOf({
      getBoundingClientRect: () => testRect,
    })).toBe(testRect);
  });
});
