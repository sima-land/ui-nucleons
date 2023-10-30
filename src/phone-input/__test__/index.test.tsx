import { ChangeEvent, createRef } from 'react';
import {
  createEvent,
  fireEvent,
  getAllByTestId,
  getByTestId,
  queryAllByTestId,
  render,
} from '@testing-library/react';
import { PhoneInput } from '..';
import { MaskData } from '../../masked-input';
import userEvent from '@testing-library/user-event';

describe('PhoneInput', () => {
  it('render input with opener and russia mask by default', () => {
    const { container } = render(<PhoneInput value='' onChange={jest.fn()} />);

    expect(queryAllByTestId(container, 'phone-input')).toHaveLength(1);
    expect(queryAllByTestId(container, 'phone-input:menu-opener')).toHaveLength(1);
    expect(getByTestId<HTMLInputElement>(container, 'base-input:field').value).toBe('+7 (');
    expect(getByTestId(container, 'rest-placeholder-shift').textContent).toBe('+7 (');
    expect(getByTestId(container, 'rest-placeholder').textContent).toBe('___) ___-__-__');
    expect(getByTestId(container, 'field-block:label').textContent).toBe('Телефон');
  });

  it('handle "defaultValue" prop properly', () => {
    const expected = '+7 (999) 888-77-66';

    const { container, rerender } = render(<PhoneInput defaultValue='79998887766' />);
    expect(getByTestId<HTMLInputElement>(container, 'base-input:field').value).toBe(expected);

    rerender(<PhoneInput defaultValue='71112223344' />);
    expect(getByTestId<HTMLInputElement>(container, 'base-input:field').value).toBe(expected);
  });

  it('open/close menu by opener click', () => {
    const { baseElement, container } = render(<PhoneInput value='' onChange={jest.fn()} />);

    expect(queryAllByTestId(container, 'phone-input')).toHaveLength(1);
    expect(queryAllByTestId(container, 'phone-input:menu-opener')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });

  it('reset value and change mask by select item from menu', () => {
    const onChange = jest.fn((event: ChangeEvent, data: MaskData) => void [event, data]);

    const { baseElement, container } = render(
      <PhoneInput defaultValue='998-22-333-4444' onChange={onChange} />,
    );

    // open menu
    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(13);
    expect(onChange).toHaveBeenCalledTimes(0);

    // select georgia
    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[6]);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][1].value).toBe('+995 (');
    expect(onChange.mock.calls[0][1].cleanValue).toBe('995');
  });

  it('field must be looks like focused when opener focused or menu opened', async () => {
    const user = userEvent.setup();
    const { baseElement, container } = render(<PhoneInput defaultValue='998-22-333-4444' />);
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(false);

    // focus on input by click
    await user.click(getByTestId(container, 'base-input:field'));
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(true);

    // focus on previous element
    await user.keyboard('{Shift>}[Tab]{/Shift}');
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(false);

    // focus on input
    await user.keyboard('[Tab]');
    expect(document.activeElement).toBe(getByTestId(container, 'base-input:field'));

    // focus on menu opener
    await user.keyboard('[Tab]');
    expect(document.activeElement).toBe(getByTestId(container, 'phone-input:menu-opener'));
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(true);

    // focus on next element after menu opener
    await user.keyboard('[Tab]');
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(false);

    // click on menu opener
    await user.click(getByTestId(container, 'phone-input:menu-opener'));
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(true);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // blur on menu
    fireEvent.blur(getByTestId(baseElement, 'dropdown'));
    expect(getByTestId(container, 'phone-input').classList.contains('focused')).toBe(false);
  });

  it('should not show rest placeholder for "other" variant', () => {
    const { container } = render(<PhoneInput defaultValue='1234567890' />);

    expect(getByTestId<HTMLInputElement>(container, 'base-input:field').value).toBe('1234567890');
    expect(queryAllByTestId(container, 'rest-placeholder-shift')).toHaveLength(0);
    expect(queryAllByTestId(container, 'rest-placeholder')).toHaveLength(0);
  });

  it('should handle "inputRef" prop', () => {
    const inputRef = createRef<HTMLInputElement>();
    expect(inputRef.current).toBe(null);

    const { container } = render(<PhoneInput inputRef={inputRef} />);
    expect(inputRef.current instanceof HTMLInputElement).toBe(true);
    expect(inputRef.current === getByTestId(container, 'base-input:field')).toBe(true);
  });

  it('should handle "blockRef" prop', () => {
    const blockRef = createRef<HTMLDivElement>();
    expect(blockRef.current).toBe(null);

    const { container } = render(<PhoneInput blockRef={blockRef} />);
    expect(blockRef.current instanceof HTMLDivElement).toBe(true);
    expect(blockRef.current === getByTestId(container, 'field-block:block')).toBe(true);
  });

  it('should prevent default of dropdown item mousedown event', () => {
    const { baseElement, container } = render(<PhoneInput />);

    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(13);

    const menuItem = getAllByTestId(baseElement, 'dropdown-item')[2];
    const event = createEvent.mouseDown(menuItem);
    fireEvent(menuItem, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('should handle change event of masked input properly', () => {
    const onChange = jest.fn();
    const { container } = render(<PhoneInput onChange={onChange} />);

    expect(onChange).toHaveBeenCalledTimes(0);
    fireEvent.focus(getByTestId(container, 'base-input:field'));
    fireEvent.change(getByTestId(container, 'base-input:field'), {
      target: { value: '79992225511' },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('should handle onMenuOpen/onMenuClose', () => {
    const openSpy = jest.fn();
    const closeSpy = jest.fn();

    const { container, baseElement } = render(
      <PhoneInput onMenuOpen={openSpy} onMenuClose={closeSpy} />,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(openSpy).toHaveBeenCalledTimes(0);
    expect(closeSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId(container, 'phone-input:menu-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });
});
