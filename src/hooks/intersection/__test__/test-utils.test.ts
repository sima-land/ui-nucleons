import { IntersectionMock, FakeIntersectionObserver, createFakeEntry } from '../test-utils';

describe('IntersectionMock', () => {
  const originalIntersectionObserver = window.IntersectionObserver;

  it('apply() should replace window.IntersectionObserver', () => {
    const mock = new IntersectionMock();

    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);

    mock.apply();
    expect(window.IntersectionObserver).not.toBe(originalIntersectionObserver);

    mock.restore();
  });

  it('apply() should throw error', () => {
    const mock = new IntersectionMock();

    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);

    mock.apply();
    expect(window.IntersectionObserver).not.toBe(originalIntersectionObserver);

    expect(() => {
      mock.apply();
    }).toThrow(Error('Already mocked'));

    mock.restore();
  });

  it('restore() should return window.IntersectionObserver', () => {
    const mock = new IntersectionMock();

    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);

    mock.apply();
    expect(window.IntersectionObserver).not.toBe(originalIntersectionObserver);

    mock.restore();
    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);
  });

  it('restore() should throw error', () => {
    const mock = new IntersectionMock();

    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);

    mock.apply();
    expect(window.IntersectionObserver).not.toBe(originalIntersectionObserver);

    mock.restore();
    expect(window.IntersectionObserver).toBe(originalIntersectionObserver);

    expect(() => {
      mock.restore();
    }).toThrow(Error('Not mocked'));
  });

  it('changeElementState() should notice only suitable observers', () => {
    const mock = new IntersectionMock();

    mock.apply();

    const spy1 = jest.fn();
    const spy2 = jest.fn();

    const observer1 = new IntersectionObserver(spy1);
    const observer2 = new IntersectionObserver(spy2);

    const element1 = document.createElement('div');
    const element2 = document.createElement('div');

    observer1.observe(element1);
    observer2.observe(element2);

    expect(spy1).toBeCalledTimes(0);
    expect(spy2).toBeCalledTimes(0);

    mock.changeElementState({
      target: element1,
      isIntersecting: true,
      intersectionRatio: 0,
    });

    expect(spy1).toBeCalledTimes(1);
    expect(spy2).toBeCalledTimes(0);

    mock.restore();
  });
});

describe('FakeIntersectionObserver', () => {
  it('constructor() should handle array as threshold', () => {
    const observer = new FakeIntersectionObserver(jest.fn(), {
      threshold: [0.2, 0.4],
    });

    expect(observer.thresholds).toEqual([0.2, 0.4]);
  });

  it('constructor should handle number as threshold', () => {
    const observer = new FakeIntersectionObserver(jest.fn(), {
      threshold: 0.5,
    });

    expect(observer.thresholds).toEqual([0.5]);
  });

  it('unobserve() should filter saved elements', () => {
    const observer = new FakeIntersectionObserver(jest.fn());
    const element = document.createElement('div');

    observer.observe(element);
    expect(observer._elements).toContain(element);

    observer.unobserve(element);
    expect(observer._elements).not.toContain(element);
  });

  it('takeRecords() should return empty array', () => {
    const observer = new FakeIntersectionObserver(jest.fn());
    const element = document.createElement('div');

    observer.observe(element);
    expect(observer.takeRecords()).toEqual([]);
  });
});

describe('createFakeEntry', () => {
  it('should return object with entry shape', () => {
    const target = document.createElement('div');

    const entry = createFakeEntry({
      target,
      isIntersecting: true,
      intersectionRatio: 0.5,
    });

    expect(typeof entry.time === 'number').toBe(true);
    expect(entry.target).toBe(target);

    // not implemented
    expect(entry.rootBounds).toBe(null);
    expect(entry.boundingClientRect).toBe(null);
    expect(entry.intersectionRect).toBe(null);
  });
});
