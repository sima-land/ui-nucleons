import { isTouchDevice } from '../is-touch-device';

describe('isTouchDevice()"', () => {
  it('return correctly when window.ontouchstart is undefined', () => {
    expect(isTouchDevice()).toBeFalsy();
  });

  it('return correctly when window.ontouchstart is defined', () => {
    window.ontouchstart = null;
    expect(isTouchDevice()).toBeTruthy();
  });

  it ('return correctly when window is undefined', () => {
    jest.spyOn(global, 'window', 'get').mockImplementation(() => undefined);
    expect(window).toBeUndefined();
    expect(isTouchDevice()).toBeFalsy();
  });
});
