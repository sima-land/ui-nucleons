import { useContext } from 'react';
import { fireEvent, render, getByTestId, queryAllByTestId, act } from '@testing-library/react';
import { Select } from '../select';
import { DropdownItem } from '../../dropdown-item';
import { SelectContext } from '../utils';
import userEvent from '@testing-library/user-event';
import { SelectTextButton } from '../parts/text-button';
import { SelectFieldBlock } from '../parts/field-block';

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
      <Select opener={<SelectTextButton />}>
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
      <Select opener={<SelectTextButton />}>
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
      const { setOpenerElement, setMenuOpen } = useContext(SelectContext);

      return (
        <div
          ref={setOpenerElement}
          tabIndex={0}
          role='combobox'
          data-testid='custom-opener'
          onKeyDown={event => {
            if (event.code === 'Enter') {
              setMenuOpen(true);
            }
          }}
          onMouseDown={() => {
            setMenuOpen(a => !a);
          }}
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
      <Select opener={<SelectFieldBlock />} disabled={false}>
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
      <Select opener={<SelectFieldBlock />} disabled>
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
      <Select opener={<SelectFieldBlock />} disabled={false}>
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
      <Select opener={<SelectFieldBlock />} disabled>
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
    fireEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[0]);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(getByTestId(container, 'field-block:block').textContent).toBe('First');
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

  it('should hide menu when wheel event fired outside a menu', async () => {
    const { baseElement } = render(
      <Select>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    act(() => {
      const event = new WheelEvent('wheel');

      Object.defineProperty(event, 'target', { value: document.body });

      fireEvent(window, event);
    });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });

  it('should NOT hide menu when wheel event fired on a menu', async () => {
    const { baseElement } = render(
      <Select>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    act(() => {
      const event = new WheelEvent('wheel');

      Object.defineProperty(event, 'target', { value: getByTestId(baseElement, 'dropdown') });

      fireEvent(window, event);
    });
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
  });

  it('should handle onMenuOpen/onMenuClose', () => {
    const openSpy = jest.fn();
    const closeSpy = jest.fn();

    const { container, baseElement } = render(
      <Select onMenuOpen={openSpy} onMenuClose={closeSpy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(openSpy).toHaveBeenCalledTimes(0);
    expect(closeSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledTimes(0);

    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(closeSpy).toHaveBeenCalledTimes(1);
  });

  it('should provide setCurrentValue to context that accept functions', () => {
    const CustomOpener = () => {
      const {
        //
        setAnchorElement,
        setOpenerElement,
        currentValue,
        setCurrentValue,
      } = useContext(SelectContext);

      const reset = () => {
        setCurrentValue(() => '');
      };

      return (
        <div ref={setAnchorElement}>
          <div ref={setOpenerElement}>{currentValue}</div>

          <div data-testid='reset' onClick={reset}>
            Reset
          </div>
        </div>
      );
    };

    const { container } = render(
      <Select opener={<CustomOpener />} defaultValue='Bar'>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    expect(container.textContent).toContain('Bar');
    fireEvent.click(getByTestId(container, 'reset'));
    expect(container.textContent).not.toContain('Bar');
  });

  it('should not call onValueChange when it is not changed actually', async () => {
    const spy = jest.fn();

    const { container, baseElement } = render(
      <Select defaultValue='Bar' onValueChange={spy}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(0);

    // select first option
    await userEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[0]!);
    expect(container.textContent).toContain('Foo');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);

    // open menu again
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Foo');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(1);

    // select first option again
    await userEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[0]!);
    expect(container.textContent).toContain('Foo');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle non DropdownItem children', async () => {
    const { container, baseElement } = render(
      <Select defaultValue='Bar'>
        <DropdownItem>Foo</DropdownItem>
        <div>Hello</div>
        <DropdownItem>Bar</DropdownItem>
        <div>World</div>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(getByTestId(baseElement, 'dropdown').textContent).toBe('FooHelloBarWorldBaz');
  });

  it('should handle click by disabled item', async () => {
    const { container, baseElement } = render(
      <Select defaultValue='Bar'>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem disabled>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    // click by disabled
    await userEvent.click(queryAllByTestId(baseElement, 'dropdown-item')[1]);
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
    expect(container.textContent).toContain('Bar');
  });

  it('menu should handle click outside opener/menu and closes', async () => {
    const { container, baseElement } = render(
      <Select defaultValue='Bar' dropdownProps={{ tabIndex: undefined }}>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    // click outside opener/menu
    await userEvent.click(document.body);
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });

  it('menu should not closes by focus on element inside menu', async () => {
    const { container, baseElement } = render(
      <Select defaultValue='Bar' dropdownProps={{ tabIndex: undefined }}>
        <div tabIndex={0} data-testid='focusable'>
          focusable
        </div>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    // focus on element inside menu
    fireEvent.blur(getByTestId(baseElement, 'dropdown'), {
      relatedTarget: getByTestId(baseElement, 'focusable'),
    });
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);
  });

  it('should use children from option as value when value is not defined', async () => {
    const { container, baseElement } = render(
      <Select defaultValue='Foo'>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Select>,
    );

    // initial state
    expect(container.textContent).toContain('Foo');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);

    // open menu
    await userEvent.click(getByTestId(baseElement, 'field-block:block'));
    expect(container.textContent).toContain('Foo');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(1);

    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'ArrowDown' });
    fireEvent.keyDown(getByTestId(baseElement, 'dropdown'), { code: 'Enter' });
    expect(container.textContent).toContain('Bar');
    expect(queryAllByTestId(baseElement, 'dropdown')).toHaveLength(0);
  });
});
