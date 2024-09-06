import { createRef } from 'react';
import { fireEvent, getByTestId, queryAllByTestId, render } from '@testing-library/react';
import { SelectTextButton } from '../text-button';
import { Select } from '../../select';
import { DropdownItem } from '../../../dropdown-item';

describe('SelectTextButton', () => {
  it('should handle onMouseDown properly', () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select opener={<SelectTextButton onMouseDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not open menu by mousedown when disabled', () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select disabled opener={<SelectTextButton onMouseDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should not open menu by mousedown when event already prevented', () => {
    const spy = jest.fn(event => event.preventDefault());

    const { container, baseElement } = render(
      <Select opener={<SelectTextButton onMouseDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle onKeyDown properly', () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select opener={<SelectTextButton onKeyDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.keyDown(getByTestId(container, 'text-button'), { code: 'Enter' });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not open menu on keydown when disabled', () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select disabled opener={<SelectTextButton onKeyDown={spy} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    fireEvent.keyDown(getByTestId(container, 'text-button'), { code: 'Enter' });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle children prop', () => {
    const { container, rerender } = render(
      <Select value='Foo' opener={<SelectTextButton />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );
    expect(getByTestId(container, 'text-button').textContent).toBe('Foo');

    rerender(
      <Select value='Foo' opener={<SelectTextButton>Hello, world</SelectTextButton>}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );
    expect(getByTestId(container, 'text-button').textContent).toBe('Hello, world');
  });

  it('should handle ref prop', () => {
    const ref = createRef<HTMLButtonElement>();

    const { container } = render(
      <Select opener={<SelectTextButton buttonRef={ref} />}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    expect(ref.current instanceof HTMLButtonElement).toBe(true);
    expect(ref.current === getByTestId(container, 'text-button')).toBe(true);
  });
});
