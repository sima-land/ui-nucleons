import React, { useRef } from 'react';
import { render } from '@testing-library/react';
import { useExpandable, defineViewState } from '../utils';

function createElement({ x = 0, y = 0, width = 0, height = 0 }: DOMRectInit = {}): HTMLElement {
  const element = document.createElement('div');

  const rect: DOMRect = {
    x,
    y,
    width,
    height,
    get top() {
      return y;
    },
    get right() {
      return x + width;
    },
    get left() {
      return x;
    },
    get bottom() {
      return y + height;
    },
    toJSON() {
      return JSON.stringify(rect);
    },
  };

  jest.spyOn(element, 'getBoundingClientRect').mockImplementation(() => rect);

  return element;
}

describe('useExpandable', () => {
  it('should do nothing when expanded && container is undefined', () => {
    function TestComponent() {
      const wrapperRef = useRef<HTMLElement>(null);
      const containerRef = useRef<HTMLElement>(null);
      const openerRef = useRef<HTMLElement>(null);

      useExpandable({
        gap: 10,
        expanded: true,
        wrapperRef,
        containerRef,
        openerRef,
      });

      return <>Hello</>;
    }

    expect(() => {
      render(<TestComponent />);
    }).not.toThrow();
  });

  it('should hide items depends on view state', () => {
    const wrapper = createElement({
      width: 300,
      height: 100,
    });

    const container = createElement({
      width: 300,
      height: 100,
    });

    // строка 1
    const item1 = createElement({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    const item2 = createElement({
      x: 100,
      y: 0,
      width: 100,
      height: 100,
    });
    const item3 = createElement({
      x: 200,
      y: 0,
      width: 100,
      height: 100,
    });

    // строка 2
    const item4 = createElement({
      x: 0,
      y: 100,
      width: 100,
      height: 100,
    });
    const opener = createElement({
      x: 0,
      y: 200,
      width: 100,
      height: 100,
    });

    container.append(item1, item2, item3, item4, opener);

    function TestComponent() {
      const wrapperRef = useRef<HTMLElement>(wrapper);
      const containerRef = useRef<HTMLElement>(container);
      const openerRef = useRef<HTMLElement>(opener);

      useExpandable({
        gap: 0,
        expanded: false,
        wrapperRef,
        containerRef,
        openerRef,
      });

      return <>World</>;
    }

    render(<TestComponent />);

    expect(item1.classList.contains('hidden')).toBe(false);
    expect(item2.classList.contains('hidden')).toBe(false);
    expect(item3.classList.contains('hidden')).toBe(false);
    expect(item4.classList.contains('hidden')).toBe(true);
    expect(opener.classList.contains('hidden')).toBe(false);
  });
});

describe('defineViewState', () => {
  it('one item is hidden', () => {
    const wrapper = createElement({
      width: 300,
      height: 100,
    });

    // строка 1
    const item1 = createElement({
      x: 0,
      y: 0,
      width: 100,
      height: 100,
    });
    const item2 = createElement({
      x: 100,
      y: 0,
      width: 100,
      height: 100,
    });
    const item3 = createElement({
      x: 200,
      y: 0,
      width: 100,
      height: 100,
    });

    // строка 2
    const item4 = createElement({
      x: 0,
      y: 100,
      width: 100,
      height: 100,
    });
    const opener = createElement({
      x: 0,
      y: 200,
      width: 100,
      height: 100,
    });

    wrapper.append(item1, item2, item3, item4, opener);

    const viewState = defineViewState(wrapper, [item1, item2, item3, item4], opener, 0);

    expect(viewState.lastVisibleIndex).toBe(3);
  });

  it('should not compute when last visible is not found', () => {
    const container = document.createElement('div');
    const opener = document.createElement('div');

    container.append(opener);

    const viewState = defineViewState(container, [], opener, 0);

    expect(viewState.lastVisibleIndex).toBe(-1);
  });
});
