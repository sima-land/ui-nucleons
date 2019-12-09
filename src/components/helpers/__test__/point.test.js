import Point from '../point';

describe('Point', () => {
  it('should return object with coordinates', () => {
    expect(Point()).toEqual({ x: 0, y: 0 });
    expect(Point(1, 2)).toEqual({ x: 1, y: 2 });
  });
});
