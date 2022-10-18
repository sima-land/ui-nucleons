import React, { createRef, MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Textarea } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/placeholder';
import { COLORS } from '../../colors';

describe('Textarea', () => {
  it('should render default value', () => {
    const { getByTestId } = render(<Textarea defaultValue='Hello' />);

    expect(getByTestId('textarea:textarea-element').textContent).toBe('Hello');
  });

  it('should render value', () => {
    const { getByTestId } = render(<Textarea value='World' onChange={jest.fn()} />);

    expect(getByTestId('textarea:textarea-element').textContent).toBe('World');
  });

  it('should render caption', () => {
    const { getByTestId } = render(<Textarea caption='Some caption here' />);

    expect(getByTestId('field:caption').textContent).toBe('Some caption here');
  });

  it('should render start adornment', () => {
    const { queryAllByTestId } = render(
      <Textarea adornmentStart={<PlaceholderSVG data-testid='icon-start' />} />,
    );

    expect(queryAllByTestId('field:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('icon-start')).toHaveLength(1);
  });

  it('should render end adornment', () => {
    const { queryAllByTestId } = render(
      <Textarea adornmentEnd={<PlaceholderSVG data-testid='icon-end' />} />,
    );

    expect(queryAllByTestId('field:adornment-end')).toHaveLength(1);
    expect(queryAllByTestId('icon-end')).toHaveLength(1);
  });

  it('should handle "textareaRef" prop', () => {
    const ref = createRef<HTMLTextAreaElement>();

    expect(ref.current).toBe(null);
    render(<Textarea textareaRef={ref} />);
    expect(ref.current instanceof HTMLTextAreaElement).toBe(true);
  });

  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();
    const { getByTestId } = render(<Textarea onBlur={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.blur(getByTestId('textarea:textarea-element'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should focus textarea when mousedown event fired on block', () => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn();

    const { getByTestId } = render(
      <Textarea textareaRef={textareaRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    textareaRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toBeCalledTimes(0);
    expect(focusSpy).toBeCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field:block'));

    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(focusSpy).toBeCalledTimes(1);
  });

  it('should not focus input when mousedown event fired on block and prevented', () => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn((e: MouseEvent) => e.preventDefault());

    const { getByTestId } = render(
      <Textarea textareaRef={textareaRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    textareaRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toBeCalledTimes(0);
    expect(focusSpy).toBeCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field:block'));

    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(focusSpy).toBeCalledTimes(0);
  });

  it('should properly set "--placeholder-color" variable', () => {
    const { getByTestId, rerender } = render(<Textarea failed disabled={false} />);

    function placeholderColor() {
      return getByTestId('base-input:root').style.getPropertyValue('--placeholder-color');
    }

    expect(placeholderColor()).toBe(COLORS.get('additional-deep-red'));

    rerender(<Textarea failed={false} disabled />);

    expect(placeholderColor()).toBe(COLORS.get('basic-gray24'));

    rerender(<Textarea failed={false} disabled={false} />);

    expect(placeholderColor()).toBe(COLORS.get('basic-gray38'));
  });

  it('should update filled state when "input" event fired on textarea element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Textarea onInput={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.input(getByTestId('textarea:textarea-element'), { target: { value: 'New value' } });
    expect(spy).toBeCalledTimes(1);
  });

  it('should update filled state when "change" event fired on textarea element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Textarea onChange={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.change(getByTestId('textarea:textarea-element'), { target: { value: 'New value' } });
    expect(spy).toBeCalledTimes(1);
  });
});