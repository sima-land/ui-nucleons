import { DOMRectReadOnlyMock } from '../dom-rect-read-only-mock';
import { describe, it, expect } from '@jest/globals';

describe('DOMRectReadOnlyMock', () => {
  it('should return rect without arguments', () => {
    const result = new DOMRectReadOnlyMock();

    expect(result).toEqual({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      toJSON: expect.any(Function),
    });

    expect(result.toJSON()).toEqual({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    });
  });

  it('should handle params', () => {
    const result = new DOMRectReadOnlyMock(10, 20, 30, 40);

    expect(result).toEqual({
      x: 10,
      y: 20,
      width: 30,
      height: 40,
      left: 10,
      top: 20,
      bottom: 60,
      right: 40,
      toJSON: expect.any(Function),
    });

    expect(result.toJSON()).toEqual({
      x: 10,
      y: 20,
      width: 30,
      height: 40,
      left: 10,
      top: 20,
      bottom: 60,
      right: 40,
    });
  });
});
