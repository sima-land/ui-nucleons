import { getEventClientPos, isMainMouseButton, isTouchEvent } from '../events';
import Point from '../point';

describe('isTouchEvent', () => {
  it('should works properly', () => {
    expect(isTouchEvent(null)).toBe(false);
    expect(isTouchEvent(new Event('click'))).toBe(false);
    expect(isTouchEvent(new TouchEvent('touchstart'))).toBe(true);
  });
});

describe('isMainMouseButton', () => {
  it('should works properly', () => {
    expect(isMainMouseButton(null)).toBe(false);
    expect(isMainMouseButton(new Event('click'))).toBe(false);
    expect(isMainMouseButton(new MouseEvent('click', { button: 0 }))).toBe(true);
  });
});

describe('getEventClientPos', () => {
  it('should works properly', () => {
    expect(getEventClientPos(new MouseEvent('click', { clientX: 12, clientY: 23 }))).toEqual(
      Point(12, 23),
    );
    expect(
      getEventClientPos(
        new TouchEvent('click', { touches: [{ clientX: 34, clientY: 45 } as Touch] }),
      ),
    ).toEqual(Point(34, 45));
    expect(getEventClientPos(new TouchEvent('click', { touches: [] }))).toEqual(Point(0, 0));
  });
});
