import EventListenersPool from '../event-listeners-pool';

describe('EventListenersPool()', () => {
  it('should throw error when second argument is not non empty string', () => {
    expect(() => {
      EventListenersPool(document.createElement('div'), '');
    }).toThrow(TypeError('Second argument must be a non empty string'));
    expect(() => {
      EventListenersPool(document.createElement('div'), 'click');
    }).not.toThrow();
  });
  it('should return object with specific structure', () => {
    const pool = EventListenersPool(document.createElement('div'), 'click');
    expect(typeof pool.getCount).toBe('function');
    expect(typeof pool.add).toBe('function');
  });
  it('getCount() should works properly', () => {
    const spy = jest.fn();
    const anotherSpy = jest.fn();
    const pool = EventListenersPool(document.createElement('div'), 'click');
    expect(pool.getCount()).toBe(0);
    pool.add(spy);
    expect(pool.getCount()).toBe(1);
    pool.add(anotherSpy);
    expect(pool.getCount()).toBe(2);
  });
  it('add() should works properly', () => {
    const div = document.createElement('div');

    const spy = jest.fn();
    const anotherSpy = jest.fn();

    const pool = EventListenersPool(div, 'click');

    const unsubscribeSpy = pool.add(spy);
    const unsubscribeAnotherSpy = pool.add(anotherSpy);

    expect(pool.getCount()).toBe(2);
    expect(spy).toHaveBeenCalledTimes(0);
    expect(anotherSpy).toHaveBeenCalledTimes(0);

    div.click();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(anotherSpy).toHaveBeenCalledTimes(1);

    unsubscribeSpy();
    div.click();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(anotherSpy).toHaveBeenCalledTimes(2);
    expect(pool.getCount()).toBe(1);

    unsubscribeAnotherSpy();
    div.click();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(anotherSpy).toHaveBeenCalledTimes(2);
    expect(pool.getCount()).toBe(0);
  });
  it('should call addEventListener and removeEvent listener on target', () => {
    const div = document.createElement('div');

    const spy = jest.fn();
    const anotherSpy = jest.fn();

    const pool = EventListenersPool(div, 'click');

    jest.spyOn(div, 'addEventListener');
    jest.spyOn(div, 'removeEventListener');
    expect(div.addEventListener).toHaveBeenCalledTimes(0);
    expect(div.removeEventListener).toHaveBeenCalledTimes(0);

    const unsubscribeSpy = pool.add(spy);
    expect(div.addEventListener).toHaveBeenCalledTimes(1);
    expect(div.removeEventListener).toHaveBeenCalledTimes(0);

    const unsubscribeAnotherSpy = pool.add(anotherSpy);
    expect(div.addEventListener).toHaveBeenCalledTimes(1);
    expect(div.removeEventListener).toHaveBeenCalledTimes(0);

    unsubscribeAnotherSpy();
    expect(div.addEventListener).toHaveBeenCalledTimes(1);
    expect(div.removeEventListener).toHaveBeenCalledTimes(0);

    unsubscribeSpy();
    expect(div.addEventListener).toHaveBeenCalledTimes(1);
    expect(div.removeEventListener).toHaveBeenCalledTimes(1);
  });
  it('should not call handler if it is added during the call process', () => {
    const div = document.createElement('div');
    const pool = EventListenersPool(div, 'click');

    const listener1 = jest.fn();
    const listener3 = jest.fn();
    const listener2 = jest.fn(() => pool.add(listener3));

    expect(listener1).toHaveBeenCalledTimes(0);
    expect(listener2).toHaveBeenCalledTimes(0);
    expect(listener3).toHaveBeenCalledTimes(0);

    pool.add(listener1);
    pool.add(listener2);

    div.dispatchEvent(new MouseEvent('click'));

    expect(listener1).toHaveBeenCalledTimes(1);
    expect(listener2).toHaveBeenCalledTimes(1);
    expect(listener3).toHaveBeenCalledTimes(0);

    div.dispatchEvent(new MouseEvent('click'));

    expect(listener1).toHaveBeenCalledTimes(2);
    expect(listener2).toHaveBeenCalledTimes(2);
    expect(listener3).toHaveBeenCalledTimes(1);
  });
});
