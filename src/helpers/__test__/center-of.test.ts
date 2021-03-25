import Point from '../point';
import centerOf from '../center-of';

describe('centerOf()', () => {
  it('should works properly', () => {
    expect(centerOf({
      top: 0,
      left: 10,
      bottom: 10,
      right: 0,
    } as ClientRect)).toEqual(Point(5, 5));
  });
});
