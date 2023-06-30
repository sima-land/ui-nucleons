import { createRef, MouseEvent } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Textarea } from '..';
import PlaceholderSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Placeholder';
import { COLORS } from '../../colors';

describe('Textarea', () => {
  it('should render default value', () => {
    const { getByTestId } = render(<Textarea defaultValue='Hello' />);

    expect(getByTestId('base-input:field').textContent).toBe('Hello');
  });

  it('should render value', () => {
    const { getByTestId } = render(<Textarea value='World' onChange={jest.fn()} />);

    expect(getByTestId('base-input:field').textContent).toBe('World');
  });

  it('should render caption', () => {
    const { getByTestId } = render(<Textarea caption='Some caption here' />);

    expect(getByTestId('field-block:caption').textContent).toBe('Some caption here');
  });

  it('should render start adornment', () => {
    const { queryAllByTestId } = render(
      <Textarea adornmentStart={<PlaceholderSVG data-testid='icon-start' />} />,
    );

    expect(queryAllByTestId('field-block:adornment-start')).toHaveLength(1);
    expect(queryAllByTestId('icon-start')).toHaveLength(1);
  });

  it('should render end adornment', () => {
    const { queryAllByTestId } = render(
      <Textarea adornmentEnd={<PlaceholderSVG data-testid='icon-end' />} />,
    );

    expect(queryAllByTestId('field-block:adornment-end')).toHaveLength(1);
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

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.blur(getByTestId('base-input:field'));
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should focus textarea when mousedown event fired on block', () => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn();

    const { getByTestId } = render(
      <Textarea textareaRef={textareaRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    textareaRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toHaveBeenCalledTimes(0);
    expect(focusSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field-block:block'));

    expect(mouseDownSpy).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenCalledTimes(1);
  });

  it('should not focus input when mousedown event fired on block and prevented', () => {
    const textareaRef = createRef<HTMLTextAreaElement>();
    const focusSpy = jest.fn();
    const mouseDownSpy = jest.fn((e: MouseEvent) => e.preventDefault());

    const { getByTestId } = render(
      <Textarea textareaRef={textareaRef} blockProps={{ onMouseDown: mouseDownSpy }} />,
    );

    textareaRef.current?.addEventListener('focus', focusSpy);
    expect(mouseDownSpy).toHaveBeenCalledTimes(0);
    expect(focusSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId('field-block:block'));

    expect(mouseDownSpy).toHaveBeenCalledTimes(1);
    expect(focusSpy).toHaveBeenCalledTimes(0);
  });

  it('should properly set "--placeholder-color" variable', () => {
    const { getByTestId, rerender } = render(<Textarea failed disabled={false} />);

    function placeholderColor() {
      return getByTestId('base-input').style.getPropertyValue('--placeholder-color');
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

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.input(getByTestId('base-input:field'), { target: { value: 'New value' } });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should update filled state when "change" event fired on textarea element', () => {
    const spy = jest.fn();

    const { getByTestId } = render(<Textarea onChange={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.change(getByTestId('base-input:field'), { target: { value: 'New value' } });
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should properly set "data-testid" to elements', () => {
    const { container, rerender } = render(<Textarea />);
    const find = (s: string) => container.querySelectorAll(s);

    expect(find('[data-testid="textarea"] textarea')).toHaveLength(1);
    expect(find('[data-testid="textarea"] [data-testid="base-input"] textarea')).toHaveLength(1);
    expect(find('[data-testid="textarea"] [data-testid="base-input:field"]')).toHaveLength(1);

    rerender(<Textarea data-testid='message' />);
    expect(find('[data-testid="message"] textarea')).toHaveLength(1);
    expect(find('[data-testid="message"] [data-testid="base-input"] textarea')).toHaveLength(1);
    expect(find('[data-testid="message"] [data-testid="base-input:field"]')).toHaveLength(1);
  });
});
