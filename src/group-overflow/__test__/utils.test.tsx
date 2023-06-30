import { useEffect, useRef } from 'react';
import { act, render } from '@testing-library/react';
import { useItemsHide } from '../utils';

describe('useHideStart', () => {
  it('should do nothing when ref is empty', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);

      useItemsHide(ref, el => el.parentElement);

      return <div>Hi</div>;
    };

    const spy = jest.spyOn(window, 'ResizeObserver');

    expect(window.ResizeObserver).toHaveBeenCalledTimes(0);
    render(<TestComponent />);
    expect(window.ResizeObserver).toHaveBeenCalledTimes(0);

    spy.mockReset();
    spy.mockRestore();
  });

  it('should do nothing when parent is not defined', () => {
    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);

      useItemsHide(ref, () => null);

      return <div ref={ref}>Hi</div>;
    };

    const spy = jest.spyOn(window, 'ResizeObserver');

    expect(window.ResizeObserver).toHaveBeenCalledTimes(0);
    render(<TestComponent />);
    expect(window.ResizeObserver).toHaveBeenCalledTimes(0);

    spy.mockReset();
    spy.mockRestore();
  });

  it('should observe parent resize', () => {
    const states: string[] = [];

    const TestComponent = () => {
      const ref = useRef<HTMLDivElement>(null);

      const { state } = useItemsHide(ref, el => el.parentElement);

      useEffect(() => {
        states.push(state);
      }, [state]);

      return (
        <div data-testid='greeting' ref={ref}>
          Hi
        </div>
      );
    };

    const spy = jest.spyOn(ResizeObserver.prototype, 'observe');

    expect(ResizeObserver.prototype.observe).toHaveBeenCalledTimes(0);
    const { getByTestId } = render(<TestComponent />);
    expect(ResizeObserver.prototype.observe).toHaveBeenCalledTimes(1);

    states.length = 0;
    act(() => {
      getByTestId('greeting').parentElement?.dispatchEvent(new Event('test:resize'));
    });
    expect(states).toEqual(['initial', 'hidden', 'hidden+more']);

    spy.mockReset();
    spy.mockRestore();
  });
});
