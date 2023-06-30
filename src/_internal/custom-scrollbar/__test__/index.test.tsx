import { render } from '@testing-library/react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import { createRef, Ref, useImperativeHandle, useRef } from 'react';
import { CustomScrollbar, useFullScroll, getViewport } from '..';

describe('useFullScroll', () => {
  const TestComponent = ({
    onFullScroll,
    fullScrollThreshold,
  }: {
    onFullScroll?: VoidFunction;
    fullScrollThreshold?: number;
  }) => {
    const onScroll = useFullScroll(onFullScroll, fullScrollThreshold);

    return (
      <div data-testid='target' onScroll={onScroll}>
        Hello
      </div>
    );
  };

  it('should handle callback and threshold', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<TestComponent onFullScroll={spy} fullScrollThreshold={10} />);

    const target = getByTestId('target');

    Object.defineProperties(target, {
      clientHeight: { value: 100, configurable: true },
      scrollTop: { value: 0, configurable: true },
      scrollHeight: { value: 1000, configurable: true },
    });
    target.dispatchEvent(new UIEvent('scroll'));

    expect(spy).toHaveBeenCalledTimes(0);

    Object.defineProperties(target, {
      clientHeight: { value: 100, configurable: true },
      scrollTop: { value: 900, configurable: true },
      scrollHeight: { value: 1000, configurable: true },
    });
    target.dispatchEvent(new UIEvent('scroll'));

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle undefined', () => {
    const { getByTestId } = render(
      <TestComponent onFullScroll={undefined} fullScrollThreshold={undefined} />,
    );
    const target = getByTestId('target');

    Object.defineProperties(target, {
      clientHeight: { value: 100, configurable: true },
      scrollTop: { value: 900, configurable: true },
      scrollHeight: { value: 1000, configurable: true },
    });
    expect(() => {
      target.dispatchEvent(new UIEvent('scroll'));
    }).not.toThrow();
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
