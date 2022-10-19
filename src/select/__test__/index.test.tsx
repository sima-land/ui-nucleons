import React, { useContext } from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Select } from '..';
import { DropdownItem } from '../../dropdown-item';
import { SelectOpenerProps } from '../types';
import { SelectContext } from '../utils';

describe('Select', () => {
  it('should handle mouse control on opener - FieldBlock', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Select>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('field')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    // opener click
    fireEvent.mouseDown(getByTestId('field:block'));
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('field')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    // opener click again
    fireEvent.mouseDown(getByTestId('field:block'));
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('field')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
  });

  it('should handle mouse control on opener - TextButton', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Select opener='text-button'>
        <DropdownItem value='1'>Foo</DropdownItem>
        <DropdownItem value='2'>Bar</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('text-button')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    // opener click
    fireEvent.mouseDown(getByTestId('text-button'));
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('text-button')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(2);

    // opener click again
    fireEvent.mouseDown(getByTestId('text-button'));
    expect(queryAllByTestId('select')).toHaveLength(1);
    expect(queryAllByTestId('text-button')).toHaveLength(1);
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
  });

  it('should handle keyboard control on opener - FieldBlock', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Select>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    // opener focus
    fireEvent.focus(getByTestId('field:block'));
    expect(queryAllByTestId('dropdown')).toHaveLength(0);

    // opener enter keydown
    fireEvent.keyDown(getByTestId('field:block'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(1);

    // menu blur
    fireEvent.blur(getByTestId('dropdown'));
    expect(queryAllByTestId('dropdown')).toHaveLength(0);

    // opener focus + enter keydown
    fireEvent.focus(getByTestId('field:block'));
    fireEvent.keyDown(getByTestId('field:block'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(1);

    // opener enter keydown again
    fireEvent.keyDown(getByTestId('field:block'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
  });

  it('should handle keyboard control on opener - TextButton', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Select opener='text-button'>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    // initial state
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    // opener focus
    fireEvent.focus(getByTestId('text-button'));
    expect(queryAllByTestId('dropdown')).toHaveLength(0);

    // opener enter keydown
    fireEvent.keyDown(getByTestId('text-button'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(1);

    // menu blur
    fireEvent.blur(getByTestId('dropdown'));
    expect(queryAllByTestId('dropdown')).toHaveLength(0);

    // opener focus + enter keydown
    fireEvent.focus(getByTestId('text-button'));
    fireEvent.keyDown(getByTestId('text-button'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(1);

    // opener enter keydown again
    fireEvent.keyDown(getByTestId('text-button'), { key: 'Enter' });
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
  });

  it('should render loading state', () => {
    const { queryAllByTestId, getByTestId } = render(
      <Select loading>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('spinner')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId('field:block'));
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('spinner')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
  });

  it('should handle menu keyboard control', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Select onChange={spy}>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    // show menu
    fireEvent.mouseDown(getByTestId('field:block'));
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    // make options active: 1, 2, 3, 1, 3, 2
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowDown' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowDown' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowDown' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowDown' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowUp' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'ArrowUp' });
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'Enter' });
    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ value: '2' });
  });

  it('should handle menu mouse control', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Select onChange={spy}>
        <DropdownItem value='1'>One</DropdownItem>
        <DropdownItem value='2'>Two</DropdownItem>
        <DropdownItem value='3'>Three</DropdownItem>
      </Select>,
    );

    expect(spy).toBeCalledTimes(0);
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);

    fireEvent.mouseDown(getByTestId('field:block'));
    expect(spy).toBeCalledTimes(0);
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    fireEvent.click(queryAllByTestId('dropdown-item')[1]);
    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ value: '2' });
    expect(queryAllByTestId('dropdown')).toHaveLength(0);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(0);
  });

  it('should handle options without defined value', () => {
    const spy = jest.fn();

    const { queryAllByTestId, getByTestId } = render(
      <Select onChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // open menu
    fireEvent.mouseDown(getByTestId('field:block'));
    expect(spy).toBeCalledTimes(0);
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    // click on third option
    fireEvent.click(queryAllByTestId('dropdown-item')[2]);
    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ value: 'Baz' });
  });

  it('should handle blur on opener', () => {
    const { getByTestId } = render(
      <Select>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    fireEvent.focus(getByTestId('field:block'));

    expect(() => {
      fireEvent.blur(getByTestId('field:block'));
    }).not.toThrow();
  });

  it('should handle menu enter keydown without active options', () => {
    const spy = jest.fn();

    const { getByTestId, queryAllByTestId } = render(
      <Select onChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // show menu
    fireEvent.mouseDown(getByTestId('field:block'));
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    // enter without active options
    fireEvent.keyDown(getByTestId('dropdown'), { key: 'Enter' });
    expect(spy).toBeCalledTimes(0);
  });

  it('should handle custom opener', () => {
    const spy = jest.fn();

    function CustomOpener({
      openerRef,
      onFocus,
      onBlur,
      onKeyDown,
      onMouseDown,
    }: SelectOpenerProps) {
      return (
        <div
          ref={openerRef as any}
          tabIndex={0}
          role='combobox'
          data-testid='custom-opener'
          {...{
            onFocus,
            onBlur,
            onKeyDown,
            onMouseDown,
          }}
        >
          My Opener
        </div>
      );
    }

    const { getByTestId, queryAllByTestId } = render(
      <Select opener={CustomOpener} onChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // show menu
    fireEvent.mouseDown(getByTestId('custom-opener'));
    expect(queryAllByTestId('dropdown')).toHaveLength(1);
    expect(queryAllByTestId('dropdown-item')).toHaveLength(3);

    // click on third option
    fireEvent.click(queryAllByTestId('dropdown-item')[2]);
    expect(spy).toBeCalledTimes(1);
    expect(spy.mock.calls[0][0]).toEqual({ value: 'Baz' });
  });
});

describe('SelectContext', () => {
  it('should provide defaults', () => {
    function TestComponent() {
      const { setDropdownProps } = useContext(SelectContext);

      return (
        <div data-testid='test-component' onClick={() => setDropdownProps({ id: 'some-id' })}>
          Hello
        </div>
      );
    }

    const { getByTestId } = render(<TestComponent />);

    expect(() => {
      fireEvent.click(getByTestId('test-component'));
    }).not.toThrow();
  });
});
