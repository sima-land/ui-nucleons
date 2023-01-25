import React, { useContext } from 'react';
import { fireEvent, render, getByTestId, queryAllByTestId } from '@testing-library/react';
import { Select } from '..';
import { DropdownItem } from '../../dropdown-item';
import { SelectContext } from '../utils';
import userEvent from '@testing-library/user-event';

describe('Select', () => {
  it('should handle mouse control on opener - FieldBlock', () => {
    const { baseElement, container } = render(
      <Select>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId(container, 'field-block')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    // opener click
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(container, 'field-block')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // opener click again
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(container, 'field-block')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
  });

  it('should handle mouse control on opener - TextButton', () => {
    const { baseElement, container } = render(
      <Select opener={<Select.TextButton />}>
        <DropdownItem value='1'>Foo</DropdownItem>
        <DropdownItem value='2'>Bar</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId(container, 'text-button')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    // opener click
    fireEvent.mouseDown(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(container, 'text-button')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(2);

    // opener click again
    fireEvent.mouseDown(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(container, 'text-button')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
  });

  it('should handle keyboard control on opener - FieldBlock', async () => {
    const user = userEvent.setup();

    const { baseElement, container } = render(
      <Select>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(document.activeElement).not.toBe(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    // opener focus by keyboard
    await user.keyboard('[Tab]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'field-block:block'));

    // opener enter keydown
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // menu blur by escape
    await user.keyboard('[Escape]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'field-block:block'));

    // opener enter keydown
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // menu enter keydown
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'field-block:block'));
  });

  it('should handle keyboard control on opener - TextButton', async () => {
    const user = userEvent.setup();

    const { baseElement, container } = render(
      <Select opener={<Select.TextButton />}>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(document.activeElement).not.toBe(getByTestId(container, 'text-button'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    // opener focus
    await user.keyboard('[Tab]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'text-button'));

    // opener enter keydown
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // menu escape keydown
    await user.keyboard('[Escape]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'text-button'));

    // opener enter keydown
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // enter keydown again
    await user.keyboard('[Enter]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'text-button'));
  });

  it('should render loading state', () => {
    const { baseElement, container } = render(
      <Select loading>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'spinner')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'spinner')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
  });

  it('should handle menu keyboard control', () => {
    const spy = jest.fn();

    const { baseElement, container } = render(
      <Select onValueChange={spy}>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    // show menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // make options active: 1, 2, 3, 1, 3, 2
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowUp' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowUp' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'Enter' });
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual('2');
  });

  it('should handle menu mouse control', () => {
    const spy = jest.fn();

    const { baseElement, container } = render(
      <Select onValueChange={spy}>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[1]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual('2');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
  });

  it('should handle options without defined value', () => {
    const spy = jest.fn();

    const { baseElement, container } = render(
      <Select onValueChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // open menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(spy).toHaveBeenCalledTimes(0);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // click on third option
    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[2]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual('Baz');
  });

  it('should handle menu enter keydown without active options', () => {
    const spy = jest.fn();

    const { baseElement, container } = render(
      <Select onValueChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // show menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // enter without active options
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'Enter' });
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should handle custom opener', () => {
    const spy = jest.fn();

    function CustomOpener() {
      const binding = useContext(SelectContext);

      return (
        <div
          ref={binding.openerRef as any}
          tabIndex={0}
          role='combobox'
          data-testid='custom-opener'
          onKeyDown={binding.onKeyDown}
          onMouseDown={binding.onMouseDown}
        >
          My Opener
        </div>
      );
    }

    const { baseElement, container } = render(
      <Select opener={<CustomOpener />} onValueChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // show menu
    fireEvent.mouseDown(getByTestId(container, 'custom-opener'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // click on third option
    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[2]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual('Baz');
  });

  it('should hide menu when its shown and select becomes disabled', () => {
    const { baseElement, container, rerender } = render(
      <Select>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // open menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // rerender with disabled prop
    rerender(
      <Select disabled>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(0);
  });

  it('should handle ArrowUp/ArrowDown keydown for all disabled options', () => {
    const { baseElement, container } = render(
      <Select>
        <DropdownItem disabled>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem disabled>Baz</DropdownItem>
      </Select>,
    );

    // open menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(queryAllByTestId(baseElement, 'dropdown-item')).toHaveLength(3);

    // keydown
    expect(() => {
      fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
      fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowUp' });
    }).not.toThrow();
  });

  it('should handle mousedown when its disabled', () => {
    const { baseElement, container, rerender } = render(
      <Select opener={<Select.FieldBlock />} disabled={false}>
        <DropdownItem disabled>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem disabled>Baz</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // mousedown for open
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    // rerender as disabled
    rerender(
      <Select opener={<Select.FieldBlock />} disabled>
        <DropdownItem disabled>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem disabled>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // mousedown with disabled
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });

  it('should handle keydown when its disabled', () => {
    const { baseElement, container, rerender } = render(
      <Select opener={<Select.FieldBlock />} disabled={false}>
        <DropdownItem disabled>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem disabled>Baz</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // keyDown for open
    fireEvent.keyDown(getByTestId(container, 'field-block:block'), { code: 'Enter' });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    // rerender as disabled
    rerender(
      <Select opener={<Select.FieldBlock />} disabled>
        <DropdownItem disabled>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem disabled>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // keyDown with disabled
    fireEvent.keyDown(getByTestId(container, 'field-block:block'), { code: 'Enter' });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });

  it('should handle Tab keydown on dropdown properly', async () => {
    const user = userEvent.setup();

    const { baseElement, container } = render(
      <Select>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
      </Select>,
    );

    // open menu
    await user.pointer({
      keys: '[MouseLeft>]',
      target: getByTestId(container, 'field-block:block'),
    });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(document.activeElement).toBe(getByTestId(baseElement, 'dropdown'));

    // tab keydown
    await user.keyboard('[Tab]');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(document.activeElement).toBe(getByTestId(container, 'field-block:block'));
  });

  it('should handle "defaultValue" prop', () => {
    const spy = jest.fn();

    const { baseElement, container } = render(
      <Select defaultValue='Third' onValueChange={spy}>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Select>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(getByTestId(container, 'field-block:block').textContent).toBe('Third');

    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[2]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(getByTestId(container, 'field-block:block').textContent).toBe('Third');
  });

  it('should handle "renderValue" prop', () => {
    const { container } = render(
      <Select value='Second' renderValue={value => <b>selected: {value}</b>}>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Select>,
    );

    expect(getByTestId(container, 'field-block:block').textContent).toBe('selected: Second');
  });
});
