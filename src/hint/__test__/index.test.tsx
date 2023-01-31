import React, { createRef, useState } from 'react';
import { act, render } from '@testing-library/react';
import {
  HintView,
  Hint,
  hintFloatingConfig,
  useHintFloating,
  useHintFloatingStyle,
  getArrowFloatingStyle,
  useHintOnHover,
  useHintOnClick,
  useTempHintState,
} from '..';
import { useFloating } from '@floating-ui/react';
import { arrowSquareSize } from '../hint-view';
import userEvent from '@testing-library/user-event';

describe('HintView', () => {
  it('should render content', () => {
    const { queryAllByTestId, getByTestId } = render(<HintView>Hello, its hint view</HintView>);

    expect(queryAllByTestId('hint')).toHaveLength(1);
    expect(getByTestId('hint').textContent).toBe('Hello, its hint view');
  });

  it('should handle "className" prop', () => {
    const { getByTestId } = render(
      <HintView className='some-class'>Hello, its hint view</HintView>,
    );

    expect(getByTestId('hint').classList.contains('root')).toBe(true);
    expect(getByTestId('hint').classList.contains('some-class')).toBe(true);
  });

  it('should handle "hintRef" prop', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(<HintView hintRef={ref}>Hello, its hint view</HintView>);

    expect(getByTestId('hint')).toBe(ref.current);
  });

  it('should handle "data-testid" prop', () => {
    const { queryAllByTestId } = render(
      <HintView data-testid='some-hint'>Hello, its hint view</HintView>,
    );

    expect(queryAllByTestId('hint')).toHaveLength(0);
    expect(queryAllByTestId('some-hint')).toHaveLength(1);
  });

  it('should render arrow', () => {
    const arrowRef = createRef<HTMLDivElement>();

    const { container } = render(
      <HintView>
        Some text
        <HintView.Arrow arrowRef={arrowRef} />
      </HintView>,
    );

    expect(container.querySelectorAll('.arrow')).toHaveLength(1);
    expect(container.querySelector('.arrow')).not.toBe(null);
    expect(container.querySelector('.arrow')).toBe(arrowRef.current);
  });
});

describe('Hint', () => {
  it('should renders hint in portal only when "open" is truthy', () => {
    const { container, baseElement, rerender } = render(<Hint>Hello, its hint!</Hint>);
    expect(container.textContent).toBe('');
    expect(baseElement.textContent).toBe('');

    rerender(<Hint open={false}>Hello, its hint!</Hint>);
    expect(container.textContent).toBe('');
    expect(baseElement.textContent).toBe('');

    rerender(<Hint open>Hello, its hint!</Hint>);
    expect(container.textContent).toBe('');
    expect(baseElement.textContent).toBe('Hello, its hint!');
  });
});

describe('hintFloatingConfig', () => {
  it('should return valid config for useFloating()', () => {
    const TestComponent = () => {
      const config = hintFloatingConfig();
      const { refs, strategy, x, y } = useFloating(config);

      return (
        <>
          <div ref={refs.setReference}>Opener</div>
          <div
            data-testid='test-hint'
            ref={refs.setFloating}
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
            }}
          >
            Hint
          </div>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('test-hint').style.position).toBe('absolute');
    expect(getByTestId('test-hint').style.top).toBe('0px');
    expect(getByTestId('test-hint').style.left).toBe('0px');
  });
});

describe('useHintFloating', () => {
  it('should return extended result of useFloating', () => {
    const TestComponent = () => {
      const { refs, strategy, x, y } = useHintFloating();
      const hintStyle = { position: strategy, top: y ?? 0, left: x ?? 0 };

      return (
        <>
          <div ref={refs.setReference}>Opener</div>

          <div ref={refs.setFloating} style={hintStyle} data-testid='test-hint'>
            Hint
            <div ref={refs.setArrow} data-testid='test-arrow' />
          </div>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('test-hint').style.position).toBe('absolute');
    expect(getByTestId('test-hint').style.top).toBe('0px');
    expect(getByTestId('test-hint').style.left).toBe('0px');
  });
});

describe('useHintFloatingStyle', () => {
  it('should return styles', () => {
    const TestComponent = () => {
      const { refs, ...floating } = useHintFloating();
      const hintStyle = useHintFloatingStyle({
        ...floating,
        middlewareData: {
          ...floating.middlewareData,
          arrow: {
            ...floating.middlewareData.arrow,
            centerOffset: 0,
            x: 10,
            y: 10,
          },
        },
      });

      return (
        <>
          <div ref={refs.setReference}>Opener</div>

          <div ref={refs.setFloating} style={hintStyle} data-testid='test-hint'>
            Hint
            <div ref={refs.setArrow} data-testid='test-arrow' />
          </div>
        </>
      );
    };

    const { getByTestId } = render(<TestComponent />);
    const hint = getByTestId('test-hint');

    expect(hint.style.getPropertyValue('--hint-arrow-left')).toBe('10px');
    expect(hint.style.getPropertyValue('--hint-arrow-bottom')).toBe(`${-arrowSquareSize / 2}px`);
  });
});

describe('getArrowFloatingStyle', () => {
  it('should handle undefined arrow middleware data', () => {
    const style = getArrowFloatingStyle({
      placement: 'top',
      middlewareData: {},
    });

    expect(style).toStrictEqual({});
  });

  it('should handle not ready arrow middleware data', () => {
    const style = getArrowFloatingStyle({
      placement: 'top',
      middlewareData: {
        arrow: {
          x: undefined,
          y: undefined,
          centerOffset: 0,
        },
      },
    });

    expect(style).toStrictEqual({
      left: '',
      bottom: `${-arrowSquareSize / 2}px`,
    });
  });

  it('should handle top-based placement', () => {
    const style = getArrowFloatingStyle({
      placement: 'top',
      middlewareData: {
        arrow: {
          x: 20,
          y: 30,
          centerOffset: 0,
        },
      },
    });

    expect(style).toEqual({
      left: '20px',
      bottom: `${-arrowSquareSize / 2}px`,
    });
  });

  it('should handle right-based placement', () => {
    const style = getArrowFloatingStyle({
      placement: 'right-end',
      middlewareData: {
        arrow: {
          x: 20,
          y: 30,
          centerOffset: 0,
        },
      },
    });

    expect(style).toEqual({
      top: '30px',
      left: `${-arrowSquareSize / 2}px`,
    });
  });

  it('should handle bottom-based placement', () => {
    const style = getArrowFloatingStyle({
      placement: 'bottom-end',
      middlewareData: {
        arrow: {
          x: 50,
          y: 70,
          centerOffset: 0,
        },
      },
    });

    expect(style).toEqual({
      left: '50px',
      top: `${-arrowSquareSize / 2}px`,
    });
  });

  it('should handle left-based placement', () => {
    const style = getArrowFloatingStyle({
      placement: 'left-start',
      middlewareData: {
        arrow: {
          x: 23,
          y: 34,
          centerOffset: 0,
        },
      },
    });

    expect(style).toEqual({
      top: '34px',
      right: `${-arrowSquareSize / 2}px`,
    });
  });
});

describe('useHintOnHover', () => {
  const TestComponent = () => {
    const [open, setOpen] = useState(false);
    const { refs, ...floating } = useFloating({ open, onOpenChange: setOpen });
    const { getReferenceProps, getFloatingProps } = useHintOnHover(floating);

    return (
      <>
        <div ref={refs.setReference} {...getReferenceProps()} data-testid='my-opener'>
          Opener
        </div>

        {open && (
          <div ref={refs.setFloating} {...getFloatingProps()} data-testid='my-hint'>
            Hint
          </div>
        )}
      </>
    );
  };

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('should show/close hint on hover', async () => {
    const user = userEvent.setup({ delay: null });

    const { getByTestId, queryAllByTestId } = render(<TestComponent />);
    expect(queryAllByTestId('my-hint')).toHaveLength(0);

    await user.hover(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    await user.unhover(getByTestId('my-opener'));
    act(() => void jest.advanceTimersByTime(200));
    expect(queryAllByTestId('my-hint')).toHaveLength(0);
  });
});

describe('useHintOnClick', () => {
  const TestComponent = () => {
    const [open, setOpen] = useState(false);
    const { refs, ...floating } = useFloating({ open, onOpenChange: setOpen });
    const { getReferenceProps, getFloatingProps } = useHintOnClick(floating);

    return (
      <>
        <div ref={refs.setReference} {...getReferenceProps()} data-testid='my-opener'>
          Opener
        </div>

        {open && (
          <div ref={refs.setFloating} {...getFloatingProps()} data-testid='my-hint'>
            Hint
          </div>
        )}
      </>
    );
  };

  it('should show/close hint on click', async () => {
    const user = userEvent.setup();
    const { getByTestId, queryAllByTestId } = render(<TestComponent />);

    expect(queryAllByTestId('my-hint')).toHaveLength(0);
    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);
    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(0);
  });
});

describe('useTempHintState', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  const TestComponent = () => {
    const [open, toggle] = useTempHintState(false);

    return (
      <>
        <div data-testid='my-opener' onClick={() => toggle(true)}>
          Show Info
        </div>

        {open && <div data-testid='my-hint'>Some info hint</div>}
      </>
    );
  };

  it('should reset state by timeout', async () => {
    const user = userEvent.setup({ delay: null });
    const { getByTestId, queryAllByTestId } = render(<TestComponent />);

    expect(queryAllByTestId('my-hint')).toHaveLength(0);
    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    act(() => void jest.advanceTimersByTime(2500));
    expect(queryAllByTestId('my-hint')).toHaveLength(0);
  });

  it('should reset timer when state changes or dispatcher called', async () => {
    const user = userEvent.setup({ delay: null });
    const { getByTestId, queryAllByTestId } = render(<TestComponent />);

    expect(queryAllByTestId('my-hint')).toHaveLength(0);
    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    act(() => void jest.advanceTimersByTime(1900));
    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    act(() => void jest.advanceTimersByTime(1900));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    act(() => void jest.advanceTimersByTime(200));
    expect(queryAllByTestId('my-hint')).toHaveLength(0);
  });

  it('should handle function as a value', async () => {
    const SomeTest = () => {
      const [open, toggle] = useTempHintState(false);

      return (
        <>
          <div data-testid='my-opener' onClick={() => toggle(o => !o)}>
            Show Info
          </div>

          {open && <div data-testid='my-hint'>Some info hint</div>}
        </>
      );
    };

    const user = userEvent.setup({ delay: null });
    const { getByTestId, queryAllByTestId } = render(<SomeTest />);
    expect(queryAllByTestId('my-hint')).toHaveLength(0);

    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(1);

    await user.click(getByTestId('my-opener'));
    expect(queryAllByTestId('my-hint')).toHaveLength(0);
  });
});
