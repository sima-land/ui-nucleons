import { subscribe } from '../media-query-list';

describe('subscribe', () => {
  it('should handle "addEventListener/removeEventListener" method missing', () => {
    const fakeMql = {
      matches: false,
      addListener: jest.fn(),
      removeListener: jest.fn(),
    };

    const spy = jest.fn();

    expect(fakeMql.addListener).toBeCalledTimes(0);
    expect(fakeMql.removeListener).toBeCalledTimes(0);

    const { unsubscribe } = subscribe(fakeMql as any, spy);

    expect(fakeMql.addListener).toBeCalledTimes(1);
    expect(fakeMql.removeListener).toBeCalledTimes(0);
    expect(fakeMql.addListener.mock.calls[0][0]).toBe(spy);

    unsubscribe();

    expect(fakeMql.addListener).toBeCalledTimes(1);
    expect(fakeMql.removeListener).toBeCalledTimes(1);
    expect(fakeMql.removeListener.mock.calls[0][0]).toBe(spy);
  });

  it('should handle event target method missing', () => {
    const fakeMql = {
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    };

    const spy = jest.fn();

    expect(fakeMql.addEventListener).toBeCalledTimes(0);
    expect(fakeMql.removeEventListener).toBeCalledTimes(0);

    const { unsubscribe } = subscribe(fakeMql as any, spy);

    expect(fakeMql.addEventListener).toBeCalledTimes(1);
    expect(fakeMql.removeEventListener).toBeCalledTimes(0);
    expect(fakeMql.addEventListener.mock.calls[0][0]).toBe('change');
    expect(fakeMql.addEventListener.mock.calls[0][1]).toBe(spy);

    unsubscribe();

    expect(fakeMql.addEventListener).toBeCalledTimes(1);
    expect(fakeMql.removeEventListener).toBeCalledTimes(1);
    expect(fakeMql.removeEventListener.mock.calls[0][0]).toBe('change');
    expect(fakeMql.removeEventListener.mock.calls[0][1]).toBe(spy);
  });

  it('should handle missing all methods', () => {
    const fakeMql = {
      matches: false,
    };

    expect(() => {
      const spy = jest.fn();
      const { unsubscribe } = subscribe(fakeMql as any, spy);

      unsubscribe();
    }).not.toThrow();
  });
});
