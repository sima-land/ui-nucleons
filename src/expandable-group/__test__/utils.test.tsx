import React, { useEffect, useRef } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useViewState, defineViewState, ViewState } from '../utils';

describe('useViewState', () => {
  const TestComponent = ({ takeViewState }: { takeViewState?: (state: ViewState) => void }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const openerRef = useRef<HTMLButtonElement>(null);
    const viewState = useViewState(containerRef, openerRef);

    useEffect(() => {
      takeViewState?.(viewState);
    }, [viewState]);

    return (
      <div ref={containerRef}>
        <button>Foo</button>
        <button>Bar</button>
        <button>Baz</button>
        <button ref={openerRef}>Opener</button>
      </div>
    );
  };

  it('should reset state on resize', () => {
    const spy = jest.fn();

    render(<TestComponent takeViewState={spy} />);
    expect(spy).toBeCalledTimes(2);

    fireEvent.resize(window);
    expect(spy).toBeCalledTimes(4);
  });
});

describe('defineViewState', () => {
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

  it('one item is hidden', () => {
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

    const viewState = defineViewState({ current: container }, { current: opener });

    expect(viewState.phase).toBe('ready');
    expect(viewState.lastVisibleIndex).toBe(3);
  });
});
