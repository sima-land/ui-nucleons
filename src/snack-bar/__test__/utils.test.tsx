import { act, fireEvent, render } from '@testing-library/react';
import { SnackBarEndIcon, SnackBarSubtitle, SnackBarTitle } from '../slots';
import { SnackBar } from '../snack-bar';
import { useSnackBarPositioning } from '../utils';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';
import { useRef, useState } from 'react';
import { SnackbarContextProvider } from '../context';

const findSnackBar = (container: HTMLElement, className: string = '.animated') =>
  container.querySelector<HTMLDivElement>(className);
const getSnackBarStyleProperty = (
  container: HTMLElement,
  name: string,
  className: string = '.animated',
) => findSnackBar(container, className)?.style?.getPropertyValue(name);
const swipe = (
  target: HTMLElement | null,
  start: { clientX: number; clientY: number },
  end: { clientX: number; clientY: number },
) => {
  if (target) {
    fireEvent.touchStart(target, {
      changedTouches: [start],
    });
    fireEvent.touchEnd(target, {
      changedTouches: [end],
    });
  }
};

describe('useSnackBarPositioning', () => {
  const mockBoundingRectValue = (value: Partial<DOMRect>) => {
    (HTMLDivElement.prototype.getBoundingClientRect as jest.Mock).mockReturnValue(value);
  };

  const TestComponent = () => {
    const [shown, setShown] = useState(false);
    const { state, snackBarProps } = useSnackBarPositioning({
      shown,
      onClose: () => {
        setShown(false);
      },
    });

    return (
      <>
        <button onClick={() => setShown(true)}>Show!</button>

        <div data-testid='outside-click-trigger'>Outside click!</div>

        {state.isMounted && (
          <SnackBar {...snackBarProps}>
            <SnackBarTitle>Title</SnackBarTitle>
            <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
            <SnackBarEndIcon icon={<PlaceholderSVG />} />
          </SnackBar>
        )}
      </>
    );
  };

  beforeAll(() => {
    jest.useFakeTimers();
    jest.spyOn(HTMLDivElement.prototype, 'getBoundingClientRect');
  });

  afterAll(() => {
    jest.useRealTimers();
  });
  it('should show, position Snackbar and close automatically', () => {
    const { container, getByRole, getByTestId } = render(<TestComponent />);
    expect(container.textContent).toBe('Show!Outside click!');
    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));
    expect(container.textContent).toBe('Show!Outside click!TitleSubtitle');

    act(() => {
      jest.advanceTimersByTime(200);
    });

    fireEvent.click(getByTestId('outside-click-trigger'));

    act(() => {
      jest.advanceTimersByTime(100);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    act(() => {
      jest.advanceTimersByTime(4300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual('');
  });

  it('should position Snackbar relative to fixed (sticky in fixed position) element', () => {
    mockBoundingRectValue({
      bottom: 668,
      height: 100,
      top: 568,
    });

    const TestRelaveComponent = () => {
      const [shown, setShown] = useState(false);
      const relatedRef = useRef<HTMLDivElement>(null);
      const { state, snackBarProps } = useSnackBarPositioning({
        shown,
        onClose: jest.fn(),
        relatedRef,
      });

      return (
        <>
          <button onClick={() => setShown(true)}>Show!</button>

          <div
            ref={relatedRef}
            style={{ position: 'fixed', bottom: '100px', height: '100px' }}
          ></div>

          {state.isMounted && (
            <SnackBar {...snackBarProps}>
              <SnackBarTitle>Title</SnackBarTitle>
              <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
              <SnackBarEndIcon icon={<PlaceholderSVG />} />
            </SnackBar>
          )}
        </>
      );
    };
    const { container, getByRole } = render(<TestRelaveComponent />);

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(200px + var(--snackbar-bottom-gap, 12px))',
    );
  });

  it('shouldn`t position Snackbar relative to sticky element not in fixed position', () => {
    mockBoundingRectValue({
      bottom: 568,
      height: 100,
      top: 568,
    });

    const TestRelativeComponent = () => {
      const [shown, setShown] = useState(false);
      const relatedRef = useRef<HTMLDivElement>(null);
      const { state, snackBarProps } = useSnackBarPositioning({
        shown,
        onClose: jest.fn(),
        relatedRef,
      });

      return (
        <>
          <button onClick={() => setShown(true)}>Show!</button>

          <div
            ref={relatedRef}
            style={{ position: 'fixed', bottom: '100px', height: '100px' }}
          ></div>

          {state.isMounted && (
            <SnackBar {...snackBarProps}>
              <SnackBarTitle>Title</SnackBarTitle>
              <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
              <SnackBarEndIcon icon={<PlaceholderSVG />} />
            </SnackBar>
          )}
        </>
      );
    };
    const { container, getByRole } = render(<TestRelativeComponent />);

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );
  });

  it('should close Snackbar on swipe to right', () => {
    mockBoundingRectValue({
      left: 100,
      height: 60,
      width: 110,
    });
    const { container, getByRole } = render(<TestComponent />);

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    swipe(findSnackBar(container), { clientX: 0, clientY: 0 }, { clientX: 100, clientY: 0 });

    act(() => {
      jest.advanceTimersByTime(5);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-left')).toEqual(
      'calc(100vw - 100px + 100%)',
    );

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-left')).not.toBeDefined();
    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();
  });

  it('should close Snackbar on swipe to left', () => {
    const { container, getByRole } = render(<TestComponent />);

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    swipe(findSnackBar(container), { clientX: 100, clientY: 0 }, { clientX: 10, clientY: 0 });

    act(() => {
      jest.advanceTimersByTime(5);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-left')).toEqual('-100%');

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-left')).not.toBeDefined();
    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();
  });

  it('should close Snackbar on swipe to top', () => {
    const { container, getByRole } = render(<TestComponent />);

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    swipe(findSnackBar(container), { clientX: 0, clientY: 100 }, { clientX: 0, clientY: 10 });

    act(() => {
      jest.advanceTimersByTime(5);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(100vh - calc(0px + var(--snackbar-bottom-gap, 12px)) + 60px)',
    );

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();
  });

  it('should close Snackbar on swipe to bottom', () => {
    const { container, getByRole } = render(<TestComponent />);

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    swipe(findSnackBar(container), { clientX: 0, clientY: 10 }, { clientX: 0, clientY: 100 });

    act(() => {
      jest.advanceTimersByTime(5);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual('');

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();
  });

  it('shouldn`t close Snackbar on swipe if swipe distance < 50px', () => {
    const { container, getByRole } = render(<TestComponent />);

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).not.toBeDefined();

    fireEvent.click(getByRole('button', { name: 'Show!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    swipe(findSnackBar(container), { clientX: 0, clientY: 0 }, { clientX: 40, clientY: 0 });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-left')).toEqual('');
    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );
  });

  it(`should hide Snackbar by changing opacity on show another Snackbar`, () => {
    const TestHideComponent = () => {
      const [firstShown, setFirstShown] = useState(false);
      const onCloseFirst = () => {
        setFirstShown(false);
      };
      const { state: firstState, snackBarProps: firstSnackBarProps } = useSnackBarPositioning({
        shown: firstShown,
        onClose: onCloseFirst,
        props: {
          className: 'first',
        },
      });

      const [secondShown, setSecondShown] = useState(false);
      const onCloseSecond = () => {
        setSecondShown(false);
      };
      const { state: secondState, snackBarProps: secondSnackBarProps } = useSnackBarPositioning({
        shown: secondShown,
        onClose: onCloseSecond,
        props: {
          className: 'second',
        },
      });

      return (
        <>
          <button onClick={() => setFirstShown(true)}>Show first!</button>
          <button onClick={() => setSecondShown(true)}>Show second!</button>
          <div data-testid='outside-click-trigger'></div>

          {firstState.isMounted && (
            <SnackBar {...firstSnackBarProps}>
              <SnackBarTitle>Title</SnackBarTitle>
              <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
              <SnackBarEndIcon icon={<PlaceholderSVG />} onClick={onCloseFirst} />
            </SnackBar>
          )}

          {secondState.isMounted && (
            <SnackBar {...secondSnackBarProps}>
              <SnackBarTitle>Title</SnackBarTitle>
              <SnackBarSubtitle>Subtitle</SnackBarSubtitle>
              <SnackBarEndIcon
                data-testId='second-snackbar-close-button'
                icon={<PlaceholderSVG />}
                onClick={onCloseSecond}
              />
            </SnackBar>
          )}
        </>
      );
    };

    const { container, getByTestId, getByRole } = render(
      <SnackbarContextProvider>
        <TestHideComponent />
      </SnackbarContextProvider>,
    );

    fireEvent.click(getByRole('button', { name: 'Show first!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom', '.first')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    fireEvent.click(getByRole('button', { name: 'Show second!' }));

    expect(getSnackBarStyleProperty(container, 'opacity', '.first')).toEqual('0');

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom', '.first')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom', '.second')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );

    fireEvent.click(getByTestId('second-snackbar-close-button'));

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom', '.second')).toEqual(
      '',
    );

    act(() => {
      jest.advanceTimersByTime(600);
    });

    fireEvent.click(getByRole('button', { name: 'Show second!' }));

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(getSnackBarStyleProperty(container, '--snackbar-position-bottom', '.second')).toEqual(
      'calc(0px + var(--snackbar-bottom-gap, 12px))',
    );
  });
});
