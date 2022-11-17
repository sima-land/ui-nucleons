import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import React, { createRef, Ref, useImperativeHandle, useRef } from 'react';
import { CustomScrollbar, HandleFullScroll, getViewport } from '..';

describe('CustomScrollbar', () => {
  it('should handle onFullScroll/fullScrollThreshold', () => {
    const spy = jest.fn();

    const wrapper = mount(<CustomScrollbar onFullScroll={spy} fullScrollThreshold={120} />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('HandleFullScroll', () => {
  it('should handle event', () => {
    const spy = jest.fn();
    const handler = HandleFullScroll(spy, 10);

    expect(spy).toHaveBeenCalledTimes(0);

    handler({
      target: {
        __proto__: Element.prototype,
        clientHeight: 100,
        scrollTop: 0,
        scrollHeight: 1000,
      },
    } as any);

    expect(spy).toHaveBeenCalledTimes(0);

    handler({
      target: {
        __proto__: Element.prototype,
        clientHeight: 100,
        scrollTop: 900,
        scrollHeight: 1000,
      },
    } as any);

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle undefined', () => {
    const spy = jest.fn();
    const handler = HandleFullScroll(spy);

    expect(spy).toHaveBeenCalledTimes(0);

    handler(undefined);

    expect(spy).toHaveBeenCalledTimes(0);
  });
});

describe('getViewport', () => {
  it('should works', () => {
    function TestComponent({ viewportRef }: { viewportRef: Ref<HTMLElement | null> }) {
      const ref = useRef<OverlayScrollbarsComponent>(null);

      useImperativeHandle(viewportRef, () => getViewport(ref.current));

      return (
        <CustomScrollbar osComponentRef={ref}>
          <h1>Hello, world!</h1>
        </CustomScrollbar>
      );
    }

    const viewportRef = createRef<HTMLElement>();
    render(<TestComponent viewportRef={viewportRef} />);

    expect(viewportRef.current instanceof HTMLElement).toBe(true);
  });

  it('should return null', () => {
    expect(getViewport(null)).toBe(null);
    expect(getViewport(undefined)).toBe(null);
  });
});
