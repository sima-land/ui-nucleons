import { createDOMRectReadOnly } from '../create-dom-rect-read-only';

describe('createDOMRectReadOnly', () => {
  it('should return rect without arguments', () => {
    const result = createDOMRectReadOnly();

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
    const result = createDOMRectReadOnly(10, 20, 30, 40);

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
