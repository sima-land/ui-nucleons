import { act, fireEvent, render } from '@testing-library/react';
import { SidePageProps } from '../types';
import { getResponsiveSidePageProps, useSidePageTransition } from '../utils';
import { useState } from 'react';
import { SidePage } from '../side-page';
import { SidePageBody } from '../side-page-body';

describe('getResponsiveSidePageProps', () => {
  it('should return processed props', () => {
    const spy = jest.fn();

    const TestComponent = (props: SidePageProps) => {
      const resultProps = getResponsiveSidePageProps({
        size: 'm',
        ...props,
      });

      spy(resultProps);

      return <>Hello, world!</>;
    };

    const { rerender } = render(<TestComponent />);
    expect(spy).toHaveBeenCalledWith({
      size: 'unset',
      overlayProps: {
        className: 'size-m',
      },
    });

    rerender(<TestComponent overlayProps={{ className: 'custom' }} />);
    expect(spy).toHaveBeenCalledWith({
      size: 'unset',
      overlayProps: {
        className: 'size-m custom',
      },
    });
  });
});

describe('useSidePageTransition', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should return state & props', async () => {
    const TestComponent = () => {
      const [shown, setShown] = useState(false);
      const { state, sidePageProps } = useSidePageTransition({ shown });

      return (
        <>
          <button onClick={() => setShown(true)}>Show!</button>

          {state.isMounted && (
            <SidePage {...sidePageProps}>
              <SidePageBody>Hello, World!</SidePageBody>
              <button onClick={() => setShown(false)}>Hide!</button>
            </SidePage>
          )}
        </>
      );
    };

    const { container, getByRole } = render(<TestComponent />);
    expect(container.textContent).toBe('Show!');

    fireEvent.click(getByRole('button', { name: 'Show!' }));
    expect(container.textContent).toBe('Show!Hello, World!Hide!');

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(container.querySelectorAll('.entering')).toHaveLength(1);

    act(() => {
      jest.advanceTimersByTime(200);
    });

    expect(container.querySelectorAll('.entering')).toHaveLength(0);
  });

  it('should handle timeout not equals to 300', () => {
    const TestComponent = () => {
      const [shown, setShown] = useState(false);

      const { state, sidePageProps } = useSidePageTransition({
        shown,
        timeout: 500,
      });

      return (
        <>
          <button onClick={() => setShown(true)}>Show!</button>

          {state.isMounted && (
            <SidePage {...sidePageProps}>
              <SidePageBody>Hello, World!</SidePageBody>
              <button onClick={() => setShown(false)}>Hide!</button>
            </SidePage>
          )}
        </>
      );
    };

    const { container, getByRole, getByTestId } = render(<TestComponent />);
    expect(container.textContent).toBe('Show!');

    fireEvent.click(getByRole('button', { name: 'Show!' }));
    expect(container.textContent).toBe('Show!Hello, World!Hide!');

    const overlay = getByTestId('modal-overlay');
    expect(overlay.style.getPropertyValue('--side-page-transition-duration')).toBe('500ms');
  });
});
