import { ResizeObserverMock } from '../resize-observer-mock';

describe('ResizeObserverMock', () => {
  it('should throw error when first argument is not a function', () => {
    expect(() => {
      const mock = new ResizeObserverMock(null as any);
      return mock;
    }).toThrow(new TypeError('ResizeObserverMock constructor: Argument 1 is not callable.'));

    expect(() => {
      const mock = new ResizeObserverMock(() => {});
      return mock;
    }).not.toThrow();
  });

  it('disconnect()', () => {
    const spy = jest.fn();
    const mock = new ResizeObserverMock(spy);

    expect(() => mock.disconnect()).not.toThrow();

    const target = document.createElement('div');
    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);

    mock.disconnect();

    expect(spy).toHaveBeenCalledTimes(1);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('observe()', () => {
    const spy = jest.fn();
    const mock = new ResizeObserverMock(spy);
    const target = document.createElement('div');

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(0);

    expect(() => mock.observe(target)).not.toThrow();

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('unobserve()', () => {
    const spy = jest.fn();
    const mock = new ResizeObserverMock(spy);
    const target = document.createElement('div');

    expect(() => mock.unobserve(target)).not.toThrow();

    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);

    mock.unobserve(target);

    expect(spy).toHaveBeenCalledTimes(1);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('simulateEntryChange', () => {
    const spy = jest.fn();
    const mock = new ResizeObserverMock(spy);
    const target = document.createElement('div');

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(0);

    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
