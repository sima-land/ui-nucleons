import { on } from '../on';

describe('on()', () => {
  it('should add event listener', () => {
    const spy = jest.fn();
    const div = document.createElement('div');

    const unsubscribe = on(div, 'click', spy);

    expect(spy).toHaveBeenCalledTimes(0);
    div.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);

    unsubscribe();
    div.dispatchEvent(new MouseEvent('click'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle multiple event names', () => {
    const testTarget = document.createElement('div');
    const spy = jest.fn();
    const unsubscribe = on(testTarget, 'mousedown mouseup', spy, false);

    expect(spy).toHaveBeenCalledTimes(0);

    testTarget.dispatchEvent(new MouseEvent('mousedown'));

    expect(spy).toHaveBeenCalledTimes(1);

    testTarget.dispatchEvent(new MouseEvent('mouseup'));

    expect(spy).toHaveBeenCalledTimes(2);

    unsubscribe();

    testTarget.dispatchEvent(new MouseEvent('mousedown'));
    testTarget.dispatchEvent(new MouseEvent('mouseup'));

    expect(spy).toHaveBeenCalledTimes(2);
  });
});
