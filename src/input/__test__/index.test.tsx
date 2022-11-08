import React, { createRef, MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Input } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/placeholder';
import { COLORS } from '../../colors';

describe('Input', () => {
  it('should render default value', () => {
    const { getByTestId } = render(<Input defaultValue='Hello' />);

    expect(getByTestId('base-input:field').getAttribute('value')).toBe('Hello');
  });

  it('should render value', () => {
    const { getByTestId } = render(<Input value='World' onChange={jest.fn()} />);

    expect(getByTestId('base-input:field').getAttribute('value')).toBe('World');
  });

  it('should render caption', () => {
    const { getByTestId } = render(<Input caption='Some caption here' />);

    expect(getByTestId('field:caption').textContent).toBe('Some caption here');
  });

  it('should render start adornment', () => {
    const { queryAllByTestId } = render(
      <Input adornmentStart={<PlaceholderSVG data-testid='icon-start' />} />,
    );

    expect(queryAllByTestId('field:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('icon-start')).toHaveLength(1);
  });

  it('should render end adornment', () => {
    const { queryAllByTestId } = render(
      <Input adornmentEnd={<PlaceholderSVG data-testid='icon-end' />} />,
    );

    expect(queryAllByTestId('field:adornment-end')).toHaveLength(1);
    expect(queryAllByTestId('icon-end')).toHaveLength(1);
  });

  it('should handle "inputRef" prop', () => {
    const ref = createRef<HTMLInputElement>();

    expect(ref.current).toBe(null);
    render(<Input inputRef={ref} />);
    expect(ref.current instanceof HTMLInputElement).toBe(true);
  });

  it('should handle "buttonProps.onClick" prop', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Input blockProps={{ onClick: spy }} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('field:block'));
    expect(spy).toBeCalledTimes(1);
  });

  it('should focus input when mousedown event fired on block', () => {
    const inputRef = createRef<HTMLInputElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn();

    const { getByTestId } = render(
      <Input inputRef={inputRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    inputRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toBeCalledTimes(0);
    expect(focusSpy).toBeCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field:block'));

    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(focusSpy).toBeCalledTimes(1);
  });

  it('should not focus input when mousedown event fired on block and prevented', () => {
    const inputRef = createRef<HTMLInputElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn((e: MouseEvent) => e.preventDefault());

    const { getByTestId } = render(
      <Input inputRef={inputRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    inputRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toBeCalledTimes(0);
    expect(focusSpy).toBeCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field:block'));

    expect(mouseDownSpy).toBeCalledTimes(1);
    expect(focusSpy).toBeCalledTimes(0);
  });

  it('should properly set "--placeholder-color" variable', () => {
    const { getByTestId, rerender } = render(<Input failed disabled={false} />);

    function placeholderColor() {
      return getByTestId('base-input').style.getPropertyValue('--placeholder-color');
    }

    expect(placeholderColor()).toBe(COLORS.get('additional-deep-red'));

    rerender(<Input failed={false} disabled />);

    expect(placeholderColor()).toBe(COLORS.get('basic-gray24'));

    rerender(<Input failed={false} disabled={false} />);

    expect(placeholderColor()).toBe(COLORS.get('basic-gray38'));
  });

  it('should handle "clearable" prop', () => {
    const spy = jest.fn();
    const { queryAllByTestId, getByTestId } = render(
      <Input defaultValue='Something' clearable onClear={spy} />,
    );

    expect(queryAllByTestId('input:clear-button')).toHaveLength(0);

    fireEvent.focus(getByTestId('base-input:field'));
    expect(queryAllByTestId('input:clear-button')).toHaveLength(1);

    fireEvent.blur(getByTestId('base-input:field'));
    expect(queryAllByTestId('input:clear-button')).toHaveLength(0);

    fireEvent.focus(getByTestId('base-input:field'));
    expect(spy).toBeCalledTimes(0);
    fireEvent.click(getByTestId('input:clear-button'), { bubbles: true });
    expect(spy).toBeCalledTimes(1);
  });

  it('should render clear icon depends on size', () => {
    const { rerender, getByTestId, queryAllByTestId } = render(
      <Input defaultValue='Something' clearable size='s' />,
    );
    fireEvent.focus(getByTestId('base-input:field'));
    expect(queryAllByTestId('input:clear-button')).toHaveLength(1);
    expect(getByTestId('input:clear-button')).toMatchSnapshot();

    rerender(<Input defaultValue='Something' clearable size='m' />);
    expect(queryAllByTestId('input:clear-button')).toHaveLength(1);
    expect(getByTestId('input:clear-button')).toMatchSnapshot();
  });

  it('should update filled state when "input" event fired on input element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Input onInput={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.input(getByTestId('base-input:field'), { target: { value: 'New value' } });
    expect(spy).toBeCalledTimes(1);
  });

  it('should update filled state when "change" event fired on input element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Input onChange={spy} />);

    expect(spy).toBeCalledTimes(0);
    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'New value' } });
    expect(spy).toBeCalledTimes(1);
  });

  it('should properly set "data-testid" to elements', () => {
    const { container, rerender } = render(<Input />);
    const find = (s: string) => container.querySelectorAll(s);

    expect(find('[data-testid="input"] input')).toHaveLength(1);
    expect(find('[data-testid="input"] [data-testid="base-input"] input')).toHaveLength(1);
    expect(find('[data-testid="input"] [data-testid="base-input:field"]')).toHaveLength(1);

    rerender(<Input data-testid='email' />);
    expect(find('[data-testid="email"] input')).toHaveLength(1);
    expect(find('[data-testid="email"] [data-testid="base-input"] input')).toHaveLength(1);
    expect(find('[data-testid="email"] [data-testid="base-input:field"]')).toHaveLength(1);
  });
});
