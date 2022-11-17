import React, { MouseEventHandler } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useExactClick } from '../utils';

function TestComponent({
  onClick,
  onExactClick,
  onMouseDown,
  onMouseUp,
}: {
  onClick?: VoidFunction;
  onExactClick?: VoidFunction;
  onMouseDown?: MouseEventHandler;
  onMouseUp?: MouseEventHandler;
}) {
  const bind = useExactClick(onExactClick, {
    onMouseDown,
    onMouseUp,
  });

  return (
    <div {...bind} data-testid='test-parent' onClick={onClick}>
      <div data-testid='test-child'>Hello</div>
    </div>
  );
}

describe('useExactClick', () => {
  it('should works properly', () => {
    const clickSpy = jest.fn();
    const exactClickSpy = jest.fn();

    const { getByTestId } = render(
      <TestComponent onClick={clickSpy} onExactClick={exactClickSpy} />,
    );

    // not main mouse button
    expect(exactClickSpy).toBeCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 1, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-parent'), { button: 1, bubbles: true });
    expect(exactClickSpy).toBeCalledTimes(0);

    // native click by child
    expect(clickSpy).toBeCalledTimes(0);
    expect(exactClickSpy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('test-child'), { button: 0, bubbles: true });
    expect(clickSpy).toBeCalledTimes(1);
    expect(exactClickSpy).toBeCalledTimes(0);

    // mousedown by parent + mouseup bu child
    expect(clickSpy).toBeCalledTimes(1);
    expect(exactClickSpy).toBeCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 0, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-child'), { button: 0, bubbles: true });
    expect(clickSpy).toBeCalledTimes(1);
    expect(exactClickSpy).toBeCalledTimes(0);

    // exact click
    expect(clickSpy).toBeCalledTimes(1);
    expect(exactClickSpy).toBeCalledTimes(0);
    fireEvent.mouseDown(getByTestId('test-parent'), { button: 0, bubbles: true });
    fireEvent.mouseUp(getByTestId('test-parent'), { button: 0, bubbles: true });
    expect(clickSpy).toBeCalledTimes(1);
    expect(exactClickSpy).toBeCalledTimes(1);
  });

  it('should handle mousedown/mouseup handlers', () => {
    const mouseDownSpy = jest.fn();
    const mouseUpSpy = jest.fn();

    const { getByTestId } = render(
      <TestComponent onMouseDown={mouseDownSpy} onMouseUp={mouseUpSpy} />,
    );

    expect(mouseDownSpy).toBeCalledTimes(0);
    expect(mouseUpSpy).toBeCalledTimes(0);

    fireEvent.mouseDown(getByTestId('test-parent'));
    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(mouseUpSpy).toBeCalledTimes(0);

    fireEvent.mouseUp(getByTestId('test-parent'));
    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(mouseUpSpy).toBeCalledTimes(1);
  });
});
