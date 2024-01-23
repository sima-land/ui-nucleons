import { it, expect, describe } from '@jest/globals';
import { isTouchDevice } from '../is-touch-device';

describe('isTouchDevice()"', () => {
  it('return correctly when window.ontouchstart is undefined', () => {
    expect(isTouchDevice()).toBe(false);
  });

  it('return correctly when window.ontouchstart is defined', () => {
    window.ontouchstart = null;
    expect(isTouchDevice()).toBeTruthy();
  });

  it('return correctly when window is undefined', () => {
    const w = (global as typeof global & { window: any }).window;

    Object.defineProperty(global as typeof global & { window: any }, 'window', {
      value: undefined,
    });

    expect(window).toBeUndefined();
    expect(isTouchDevice()).toBe(false);

    Object.defineProperty(global as typeof global & { window: any }, 'window', {
      value: w,
    });
  });
});
