import { render } from '@testing-library/react';
import { useRef } from 'react';
import { defineLastVisible, observeWidth, useObserveWidth } from '../utils';
import { setBoundingClientRect } from './utils';

describe('defineLastVisible', () => {
  it('should handle empty container', () => {
    const outer = document.createElement('div');
    const inner = document.createElement('div');
    const opener = document.createElement('div');

    const { lastVisibleIndex } = defineLastVisible({
      outer,
      inner,
      gap: 10,
      opener,
      openerWidth: 100,
    });

    expect(lastVisibleIndex).toBe(-1);
  });

  it('should handle container with only one element', () => {
    const outer = document.createElement('div');
    const inner = document.createElement('div');
    const item = document.createElement('div');
    const opener = document.createElement('div');

    inner.append(item);
    inner.append(opener);

    const { lastVisibleIndex } = defineLastVisible({
      outer,
      inner,
      gap: 10,
      opener,
      openerWidth: 100,
    });

    expect(lastVisibleIndex).toBe(-1);
  });

  it('should return index properly when need to hide elements', () => {
    const outer = document.createElement('div');
    const inner = document.createElement('div');

    const item1 = document.createElement('div');
    const item2 = document.createElement('div');
    const item3 = document.createElement('div');
    const item4 = document.createElement('div');
    const opener = document.createElement('div');

    inner.append(item1, item2, item3, item4, opener);

    setBoundingClientRect(outer, { width: 100, height: 30 });
    setBoundingClientRect(item1, { width: 30, height: 30, x: 0 });
    setBoundingClientRect(item2, { width: 30, height: 30, x: 30 });
    setBoundingClientRect(item3, { width: 30, height: 30, x: 60 });
    setBoundingClientRect(item4, { width: 30, height: 30, x: 0, y: 30 });
    setBoundingClientRect(opener, { width: 30, height: 30, x: 30, y: 30 });

    const { lastVisibleIndex } = defineLastVisible({
      outer,
      inner,
      gap: 0,
      opener,
      openerWidth: 30,
    });

    expect(lastVisibleIndex).toBe(1);
  });
});

describe('observeWidth', () => {
  it('should works properly', async () => {
    const element = document.createElement('div');
    const spy = jest.fn();

    setBoundingClientRect(element, { width: 100 });
    const unobserve = observeWidth(element, spy);

    expect(typeof unobserve === 'function').toBe(true);
    expect(spy).toHaveBeenCalledTimes(0);

    setBoundingClientRect(element, { width: 200 });
    element.dispatchEvent(new Event('test:resize'));

    await new Promise(requestAnimationFrame);
    expect(spy).toHaveBeenCalledTimes(1);

    setBoundingClientRect(element, { width: 200 });
    element.dispatchEvent(new Event('test:resize'));

    await new Promise(requestAnimationFrame);
    expect(spy).toHaveBeenCalledTimes(1);
  });
});

describe('useObserveWidth', () => {
  const spy = jest.fn();

  const TestComponent = ({ enable }: { enable: boolean }) => {
    const ref = useRef<HTMLDivElement>(null);
    useObserveWidth(
      {
        get current() {
          spy();
          return ref.current;
        },
      },
      () => void 0,
    );

    return <div ref={enable ? ref : undefined}>Hello</div>;
  };

  it('should not observe when ref is empty', () => {
    render(<TestComponent enable={false} />);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should observe when ref is not empty', () => {
    render(<TestComponent enable />);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
