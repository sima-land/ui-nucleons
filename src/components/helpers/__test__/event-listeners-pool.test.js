import EventListenersPool from '../event-listeners-pool';

describe('EventListenersPool()', () => {
  it('should throw error when first argument is not event target', () => {
    expect(() => {
      EventListenersPool(null);
    }).toThrow(
      TypeError('First argument should implements "addEventListener" method')
    );
    expect(() => {
      EventListenersPool(document.createElement('div'), 'click');
    }).not.toThrow();
  });
  it('should throw error when second argument is not non empty string', () => {
    expect(() => {
      EventListenersPool(document.createElement('div'), '');
    }).toThrow(TypeError('Second argument must be a non empty string'));
    expect(() => {
      EventListenersPool(document.createElement('div'), null);
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

    const pool = EventListenersPool(div, 'click', true);

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
});
