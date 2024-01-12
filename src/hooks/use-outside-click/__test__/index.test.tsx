import { useRef } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { useOutsideClick } from '..';

describe('useOutsideClick', () => {
  const TestComponent = ({ callback }: { callback: () => void }) => {
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick(ref, callback);

    return <div data-testid='target' ref={ref} />;
  };

  it('should works', () => {
    const spy = jest.fn();

    render(<TestComponent callback={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle array of refs', () => {
    const spy = jest.fn();

    const OtherTestComponent = ({ callback }: { callback: () => void }) => {
      const refA = useRef<HTMLDivElement>(null);
      const refB = useRef<HTMLDivElement>(null);

      useOutsideClick([refA, refB], callback);

      return (
        <>
          <div ref={refA} />
          <div ref={refB} />
        </>
      );
    };

    render(<OtherTestComponent callback={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      document.documentElement.dispatchEvent(new MouseEvent('click'));
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not call callback', () => {
    const spy = jest.fn();

    const { getByTestId } = render(
      <>
        <span data-testid='sibling'></span>
        <TestComponent callback={spy} />
      </>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('target'));
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('sibling'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
