import { createTakeContentRef } from '../screen-layout';

describe('createTakeContentRef()', () => {
  it('should save data to refs', () => {
    const onFullScroll = jest.fn();
    const elementRef = { current: null };
    const unsubscribeRef = { current: null } as any;
    const element = document.createElement('div');

    const takeContentRef = createTakeContentRef({
      elementRef,
      unsubscribeRef,
      onFullScroll,
      fullScrollThreshold: 100,
    });

    expect(onFullScroll).toHaveBeenCalledTimes(0);

    takeContentRef(element);

    expect(elementRef.current).toBe(element);
    expect(onFullScroll).toHaveBeenCalledTimes(0);

    element.dispatchEvent(new Event('scroll'));

    expect(onFullScroll).toHaveBeenCalledTimes(1);

    unsubscribeRef.current();
    element.dispatchEvent(new Event('scroll'));

    expect(onFullScroll).toHaveBeenCalledTimes(1);
  });

  it('should handle element update', () => {
    const onFullScroll = jest.fn();
    const elementRef = { current: {} } as any;
    const oldUnsubscribe = jest.fn();
    const unsubscribeRef = { current: oldUnsubscribe };
    const element = document.createElement('div');

    const takeContentRef = createTakeContentRef({
      elementRef,
      unsubscribeRef,
      onFullScroll,
    });

    expect(onFullScroll).toHaveBeenCalledTimes(0);
    expect(oldUnsubscribe).toHaveBeenCalledTimes(0);

    takeContentRef(element);

    expect(elementRef.current).toBe(element);
    expect(oldUnsubscribe).toHaveBeenCalledTimes(1);
    expect(onFullScroll).toHaveBeenCalledTimes(0);

    element.dispatchEvent(new Event('scroll'));

    expect(onFullScroll).toHaveBeenCalledTimes(1);

    unsubscribeRef.current();
    element.dispatchEvent(new Event('scroll'));

    expect(onFullScroll).toHaveBeenCalledTimes(1);
  });

  it('should not resubscribe on second call wit same ref', () => {
    const onFullScroll = jest.fn();
    const elementRef = { current: {} } as any;
    const oldUnsubscribe = jest.fn();
    const unsubscribeRef = { current: oldUnsubscribe };
    const element = document.createElement('div');

    const takeContentRef = createTakeContentRef({
      elementRef,
      unsubscribeRef,
      onFullScroll,
    });

    // first
    takeContentRef(element);

    const firstUnsubscribe = unsubscribeRef.current;

    expect(elementRef.current).toBe(element);

    // second
    takeContentRef(element);

    expect(elementRef.current).toBe(element);
    expect(unsubscribeRef.current).toBe(firstUnsubscribe);
  });
});
