import { useFloating } from '@floating-ui/react';
import { useDropdownFloatingStyle, useDismissByWheel } from '../utils';
import { act, fireEvent, render } from '@testing-library/react';
import { ResizeObserverContext } from '../../context';
import { ResizeObserverMock } from '../../test-utils';
import { createRef, useRef } from 'react';

describe('useDropdownFloatingStyle', () => {
  const TestComponent = () => {
    const floating = useFloating();
    const style = useDropdownFloatingStyle(floating);

    return (
      <>
        <div data-testid='reference' ref={floating.refs.setReference}>
          Hello
        </div>

        <div data-testid='floating' ref={floating.refs.setFloating} style={style}>
          World
        </div>
      </>
    );
  };

  it('should return styles and handle reference element resize', async () => {
    const observers = ResizeObserverMock.createRegistry();

    const { getByTestId, findByTestId } = render(
      <ResizeObserverContext.Provider value={{ createResizeObserver: observers.getObserver }}>
        <TestComponent />
      </ResizeObserverContext.Provider>,
    );

    expect(getByTestId('floating').style.getPropertyValue('--opener-width')).toBe('0px');

    act(() => {
      const reference = getByTestId('reference');

      reference.getBoundingClientRect = () =>
        ({
          x: 0,
          y: 0,
          width: 320,
          height: 240,
          top: 0,
          right: 320,
          bottom: 240,
          left: 0,
        }) as DOMRect;

      observers.simulateEntryChange({ target: reference });
    });

    const floatingElement = await findByTestId('floating');
    expect(floatingElement.style.getPropertyValue('--opener-width')).toBe('320px');
  });
});

describe('useDismissByWheel', () => {
  it('should listen wheel event', () => {
    const spy = jest.fn();
    const wheelRef = createRef<HTMLDivElement>();

    const TestComponent = ({ onDismiss }: { onDismiss: VoidFunction }) => {
      const ref = useRef<HTMLDivElement>(null);

      useDismissByWheel(ref, onDismiss);

      return <div ref={ref}></div>;
    };

    render(
      <>
        <div ref={wheelRef}>Wheel target</div>
        <TestComponent onDismiss={spy} />
      </>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      fireEvent.wheel(wheelRef.current as HTMLElement);
    });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not listen wheel event when ref is empty', () => {
    const spy = jest.fn();
    const wheelRef = createRef<HTMLDivElement>();

    const TestComponent = ({ onDismiss }: { onDismiss: VoidFunction }) => {
      const ref = useRef<HTMLDivElement>(null);

      useDismissByWheel(ref, onDismiss);

      return <div></div>;
    };

    render(
      <>
        <div ref={wheelRef}>Wheel target</div>
        <TestComponent onDismiss={spy} />
      </>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    act(() => {
      fireEvent.wheel(wheelRef.current as HTMLElement);
    });
    expect(spy).toHaveBeenCalledTimes(0);
  });
});
