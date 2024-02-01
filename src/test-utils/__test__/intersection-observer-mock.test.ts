import { IntersectionObserverMock } from '../intersection-observer-mock';
import { describe, it, expect, jest } from '@jest/globals';

describe('IntersectionObserverMock', () => {
  it('should throw error when first argument is not a function', () => {
    expect(() => {
      const mock = new IntersectionObserverMock(null as any);
      return mock;
    }).toThrow(new TypeError('IntersectionObserverMock constructor: Argument 1 is not callable.'));

    expect(() => {
      const mock = new IntersectionObserverMock(() => {});
      return mock;
    }).not.toThrow();
  });

  it('should handle different variants of "threshold" option', () => {
    const fn = () => {};
    expect(new IntersectionObserverMock(fn, {}).thresholds).toEqual([
      //
      0,
    ]);

    expect(new IntersectionObserverMock(fn, { threshold: 0.2 }).thresholds).toEqual([
      //
      0.2,
    ]);

    expect(new IntersectionObserverMock(fn, { threshold: [0.1, 0.3, 0.5] }).thresholds).toEqual([
      //
      0.1, 0.3, 0.5,
    ]);
  });

  it('disconnect()', () => {
    const spy = jest.fn();
    const mock = new IntersectionObserverMock(spy);

    expect(() => mock.disconnect()).not.toThrow();

    const target = document.createElement('div');
    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);

    mock.disconnect();

    expect(spy).toHaveBeenCalledTimes(1);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('observe()', () => {
    const spy = jest.fn();
    const mock = new IntersectionObserverMock(spy);
    const target = document.createElement('div');

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    expect(() => mock.observe(target)).not.toThrow();

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('takeRecords()', () => {
    const spy = jest.fn();
    const mock = new IntersectionObserverMock(spy);

    expect(() => mock.takeRecords()).not.toThrow();
  });

  it('unobserve()', () => {
    const spy = jest.fn();
    const mock = new IntersectionObserverMock(spy);
    const target = document.createElement('div');

    expect(() => mock.unobserve(target)).not.toThrow();

    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);

    mock.unobserve(target);

    expect(spy).toHaveBeenCalledTimes(1);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('simulateEntryChange', () => {
    const spy = jest.fn();
    const mock = new IntersectionObserverMock(spy);
    const target = document.createElement('div');

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(0);

    mock.observe(target);

    expect(spy).toHaveBeenCalledTimes(0);
    mock.simulateEntryChange({ target, isIntersecting: true, intersectionRatio: 0 });
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
