import { MouseEventHandler } from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import { useExactClick, useVisualViewportPlacement } from '../utils';

describe('useExactClick', () => {
  const TestComponent = ({
    onClick,
    onExactClick,
    onMouseDown,
    onMouseUp,
  }: {
    onClick?: VoidFunction;
    onExactClick?: VoidFunction;
    onMouseDown?: MouseEventHandler;
    onMouseUp?: MouseEventHandler;
  }) => {
    const bind = useExactClick(onExactClick, {
      onMouseDown,
      onMouseUp,
    });

    return (
      <div {...bind} data-testid='test-parent' onClick={onClick}>
        <div data-testid='test-child'>Hello</div>
      </div>
    );
  };

  it('should works properly', () => {
    const clickSpy = jest.fn();
    const exactClickSpy = jest.fn();

    const { getByTestId } = render(
      <TestComponent onClick={clickSpy} onExactClick={exactClickSpy} />,
    );

    // not main mouse button
    expect(exactClickSpy).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 1, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-parent'), { button: 1, bubbles: true });
    expect(exactClickSpy).toHaveBeenCalledTimes(0);

    // native click by child
    expect(clickSpy).toHaveBeenCalledTimes(0);
    expect(exactClickSpy).toHaveBeenCalledTimes(0);
    fireEvent.click(getByTestId('test-child'), { button: 0, bubbles: true });
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(exactClickSpy).toHaveBeenCalledTimes(0);

    // mousedown by parent + mouseup bu child
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(exactClickSpy).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 0, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-child'), { button: 0, bubbles: true });
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(exactClickSpy).toHaveBeenCalledTimes(0);

    // exact click
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(exactClickSpy).toHaveBeenCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 0, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-parent'), { button: 0, bubbles: true });
    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(exactClickSpy).toHaveBeenCalledTimes(1);
  });

  it('should handle mousedown/mouseup handlers', () => {
    const mouseDownSpy = jest.fn();
    const mouseUpSpy = jest.fn();

    const { getByTestId } = render(
      <TestComponent onMouseDown={mouseDownSpy} onMouseUp={mouseUpSpy} />,
    );

    expect(mouseDownSpy).toHaveBeenCalledTimes(0);
    expect(mouseUpSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId('test-parent'));
    expect(mouseDownSpy).toHaveBeenCalledTimes(1);
    expect(mouseUpSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseUp(getByTestId('test-parent'));
    expect(mouseDownSpy).toHaveBeenCalledTimes(1);
    expect(mouseUpSpy).toHaveBeenCalledTimes(1);
  });
});

describe('useVisualViewportPlacement', () => {
  const TestComponent = () => {
    const props = useVisualViewportPlacement();

    return (
      <div {...props} data-testid='test-target'>
        Hello
      </div>
    );
  };

  const temp = window.visualViewport;

  beforeEach(() => {
    window.visualViewport = {
      width: 800,
      height: 600,
      offsetTop: 10,
      offsetLeft: 20,
      scale: 1,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    } as any;
  });

  afterEach(() => {
    window.visualViewport = temp;
  });

  it('should return styles and updates styles on window/visualViewport events', () => {
    const { container, getByTestId, unmount } = render(<TestComponent />);

    expect(container.textContent).toBe('Hello');
    expect(getByTestId('test-target').style.top).toBe('10px');
    expect(getByTestId('test-target').style.left).toBe('20px');
    expect(getByTestId('test-target').style.width).toBe('800px');
    expect(getByTestId('test-target').style.height).toBe('600px');

    (window.visualViewport as any).width = 100;
    (window.visualViewport as any).height = 100;
    (window.visualViewport as any).offsetTop = 0;
    (window.visualViewport as any).offsetLeft = 0;

    act(() => {
      (window.visualViewport?.addEventListener as jest.Mock).mock.calls[0][1](new Event('resize'));
    });
    expect(getByTestId('test-target').style.top).toBe('0px');
    expect(getByTestId('test-target').style.left).toBe('0px');
    expect(getByTestId('test-target').style.width).toBe('100px');
    expect(getByTestId('test-target').style.height).toBe('100px');

    unmount();
  });

  it('should ignore offset when scale is not 1', () => {
    (window.visualViewport as any).width = 300;
    (window.visualViewport as any).height = 200;
    (window.visualViewport as any).offsetTop = 14;
    (window.visualViewport as any).offsetLeft = 49;
    (window.visualViewport as any).scale = 2;
    const { container, getByTestId } = render(<TestComponent />);

    expect(container.textContent).toBe('Hello');
    expect(getByTestId('test-target').style.top).toBe('0px');
    expect(getByTestId('test-target').style.left).toBe('0px');
    expect(getByTestId('test-target').style.width).toBe('600px');
    expect(getByTestId('test-target').style.height).toBe('400px');
  });

  it('should do nothing when visualViewport is null', () => {
    window.visualViewport = null;

    const { container, getByTestId } = render(<TestComponent />);

    expect(container.textContent).toBe('Hello');
    expect(getByTestId('test-target').style.top).toBe('');
    expect(getByTestId('test-target').style.left).toBe('');
    expect(getByTestId('test-target').style.width).toBe('');
    expect(getByTestId('test-target').style.height).toBe('');
  });
});
