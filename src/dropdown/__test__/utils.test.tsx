import { useFloating } from '@floating-ui/react';
import { useDropdownFloatingStyle } from '../utils';
import { act, render } from '@testing-library/react';
import { ResizeObserverContext } from '../../context';

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

  it('should return styles and handle reference element resize', () => {
    let callback: null | ResizeObserverCallback = null;

    const createResizeObserver = (fn: ResizeObserverCallback) => {
      callback = fn;

      const observer = {
        observe: jest.fn(),
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      } as ResizeObserver;

      return observer;
    };

    const { getByTestId } = render(
      <ResizeObserverContext.Provider value={{ createResizeObserver }}>
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

      callback?.([], {} as any);
    });

    expect(getByTestId('floating').style.getPropertyValue('--opener-width')).toBe('320px');
  });
});
