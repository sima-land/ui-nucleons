import { useRef } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { useIsTouchDevice, useInfiniteScroll, useOutsideClick } from '../index';

describe('useInfiniteScroll()', () => {
  const TestComponent = ({
    withList = true,
    onFullScroll,
  }: {
    withList?: boolean;
    onFullScroll?: () => void;
  }) => {
    const listRef = useRef() as React.MutableRefObject<HTMLUListElement>;

    useInfiniteScroll(listRef, {
      onFullScroll,
    });

    return (
      <>
        {withList && (
          <ul className='test-list' ref={listRef}>
            Test list
          </ul>
        )}
      </>
    );
  };

  it('should works properly', () => {
    const spy = jest.fn();

    const { container } = render(<TestComponent onFullScroll={spy} />);

    const listEl = container.querySelector('.test-list') as HTMLUListElement;
    expect(spy).toHaveBeenCalledTimes(0);

    // with full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 100, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);

    // with not full scroll
    Object.defineProperty(listEl, 'scrollTop', { value: 200, configurable: true });
    Object.defineProperty(listEl, 'clientHeight', { value: 100, configurable: true });
    Object.defineProperty(listEl, 'scrollHeight', { value: 400, configurable: true });
    listEl.dispatchEvent(new Event('scroll'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should works without ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    (HTMLUListElement.prototype.addEventListener as unknown as jest.Mock).mockClear();

    render(<TestComponent withList={false} />);

    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(0);
  });

  it('should works with ref.current', () => {
    jest.spyOn(HTMLUListElement.prototype, 'addEventListener');
    (HTMLUListElement.prototype.addEventListener as unknown as jest.Mock).mockClear();

    render(<TestComponent withList />);

    expect(HTMLUListElement.prototype.addEventListener).toHaveBeenCalledTimes(1);
  });

  it('should works without onFullScroll', () => {
    const { container } = render(<TestComponent withList />);

    const listEl = (container as HTMLDivElement).querySelector('.test-list') as HTMLUListElement;

    expect(() => {
      listEl.dispatchEvent(new Event('scroll'));
    }).not.toThrow();
  });

  it('should unsubscribe on unmount', () => {
    const { container, unmount } = render(<TestComponent />);

    let listElement: HTMLUListElement | null = null;

    act(() => {
      listElement = container.querySelector('.test-list') as HTMLUListElement;
      listElement && jest.spyOn(listElement, 'removeEventListener');
    });

    unmount();

    expect((listElement as unknown as HTMLUListElement).removeEventListener).toHaveBeenCalledTimes(
      1,
    );
  });
});

describe('useIsTouchDevice', () => {
  const TestComponent = () => {
    const touch = useIsTouchDevice();

    return <>{touch && <span>Visible on touch</span>}</>;
  };

  it('should works with touch', () => {
    // simulate touch device
    window.ontouchstart = undefined;

    const { container } = render(<TestComponent />);

    expect(container.querySelector('span')?.textContent).toBe('Visible on touch');
  });
});

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
