import {
  render,
  getByTestId,
  queryAllByTestId,
  fireEvent,
  createEvent,
  act,
} from '@testing-library/react';
import { DropdownItem } from '../../dropdown-item';
import { Autocomplete } from '..';
import userEvent from '@testing-library/user-event';

class Helpers {
  private _container?: HTMLElement;
  private _baseElement?: HTMLElement;

  private get container(): HTMLElement {
    if (!this._container) {
      throw Error('container not found');
    }
    return this._container;
  }

  private get baseElement(): HTMLElement {
    if (!this._baseElement) {
      throw Error('baseElement not found');
    }
    return this._baseElement;
  }

  render(...args: Parameters<typeof render>): ReturnType<typeof render> {
    const { container, baseElement, ...rest } = render(...args);

    this.bind(container, baseElement);

    return { container, baseElement, ...rest };
  }

  bind(container: HTMLElement, baseElement: HTMLElement) {
    this._container = container;
    this._baseElement = baseElement;
  }

  findField() {
    return queryAllByTestId(this.container, 'input');
  }

  findMenu() {
    return queryAllByTestId(this.baseElement, 'dropdown');
  }

  findMenuItems() {
    return queryAllByTestId(this.baseElement, 'dropdown-item');
  }

  getInput(): HTMLInputElement {
    return getByTestId(this.container, 'base-input:field');
  }
}

describe('Autocomplete', () => {
  const helpers = new Helpers();

  it('should be empty when value and defaultValue not defined', () => {
    helpers.render(<Autocomplete />);

    expect(helpers.getInput().value).toBe('');
  });

  it('should toggle menu on input focus/blur', async () => {
    helpers.render(
      <Autocomplete defaultValue='Ba'>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    // focus on input
    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(2);

    // input on input
    fireEvent.input(helpers.getInput(), { target: { value: 'Foo' } });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(1);

    // blur on input
    fireEvent.blur(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
  });

  it('should show dropdown when field is empty', () => {
    helpers.render(
      <Autocomplete defaultValue=''>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    // focus on input
    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
  });

  it('should handle dropdown item click', () => {
    helpers.render(
      <Autocomplete defaultValue=''>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    // focus on input
    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);

    // click on second item
    fireEvent.click(helpers.findMenuItems()[1]);
    expect(helpers.getInput().value).toBe('Bar');
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
  });

  it('should handle keydown properly', () => {
    const spy = jest.fn();

    helpers.render(
      <Autocomplete defaultValue='' baseInputProps={{ onKeyDown: spy }}>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(0);

    // Enter
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
    expect(spy).toHaveBeenCalledTimes(1);

    // Enter again (for close)
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(2);

    // Enter again (for open)
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
    expect(spy).toHaveBeenCalledTimes(3);

    // Escape
    fireEvent.keyDown(helpers.getInput(), { code: 'Escape' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(4);

    // Enter again (for open)
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
    expect(spy).toHaveBeenCalledTimes(5);

    // move through the list by arrows: 1, 2, 3, 1, 2, 1, 3, 2
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowUp' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowUp' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowUp' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
    expect(spy).toHaveBeenCalledTimes(13);

    // Enter for select item and close menu
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.getInput().value).toBe('Second');
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(14);

    // ArrowDown to open menu
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(15);

    // Escape
    fireEvent.keyDown(helpers.getInput(), { code: 'Escape' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(16);

    // ArrowUp to open menu
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowUp' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(1);
    expect(spy).toHaveBeenCalledTimes(17);
  });

  it('should handle arrows when all items is disabled', () => {
    helpers.render(
      <Autocomplete defaultValue=''>
        <DropdownItem disabled>First</DropdownItem>
        <DropdownItem disabled>Second</DropdownItem>
        <DropdownItem disabled>Third</DropdownItem>
      </Autocomplete>,
    );

    // Enter
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);

    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowDown' });
    fireEvent.keyDown(helpers.getInput(), { code: 'ArrowUp' });
    fireEvent.keyDown(helpers.getInput(), { code: 'Enter' });
    expect(helpers.getInput().value).toBe('');
  });

  it('should handle field block mousedown', () => {
    const spy = jest.fn();

    const { container } = helpers.render(
      <Autocomplete defaultValue='' blockProps={{ onMouseDown: spy }}>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(spy).toHaveBeenCalledTimes(0);
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    const event = createEvent.mouseDown(getByTestId(container, 'field-block:block'));

    fireEvent(getByTestId(container, 'field-block:block'), event);
    expect(spy).toHaveBeenCalledTimes(1);
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
  });

  it('should handle dropdown item mousedown', () => {
    const { baseElement, container } = helpers.render(
      <Autocomplete defaultValue=''>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    // click for show menu
    fireEvent.mouseDown(getByTestId(container, 'field-block:block'));
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);

    // mouse down on second item
    const secondItem = queryAllByTestId(baseElement, 'dropdown-item')[1];
    const event = createEvent.mouseDown(secondItem);
    fireEvent(secondItem, event);
    expect(event.defaultPrevented).toBe(true);
  });

  it('should handle regular adornmentEnd', () => {
    const { container } = helpers.render(
      <Autocomplete value='Hi' adornmentEnd={<div data-testid='my-icon'>Icon</div>} />,
    );

    expect(queryAllByTestId(container, 'my-icon')).toHaveLength(1);
  });

  it('should show text "Не найдено" when there is no suitable suggestions', () => {
    helpers.render(
      <Autocomplete value='AAA'>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);

    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(1);
    expect(helpers.findMenuItems()[0].textContent).toBe('Не найдено');
  });

  it('should show spinner in menu when loading=true', () => {
    const { baseElement, rerender } = helpers.render(
      <Autocomplete value='' loading={false}>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(0);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'spinner')).toHaveLength(0);

    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);
    expect(queryAllByTestId(baseElement, 'spinner')).toHaveLength(0);

    rerender(
      <Autocomplete value='' loading>
        <DropdownItem>First</DropdownItem>
        <DropdownItem>Second</DropdownItem>
        <DropdownItem>Third</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(0);
    expect(queryAllByTestId(baseElement, 'spinner')).toHaveLength(1);
  });

  it('should set data-testid properly', () => {
    const { container, rerender } = helpers.render(
      <Autocomplete value=''>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );

    expect(helpers.findField()).toHaveLength(1);

    // focus
    fireEvent.focus(helpers.getInput());
    expect(helpers.findField()).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(3);

    rerender(
      <Autocomplete value='Ba' data-testid='some-autocomplete'>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );

    expect(queryAllByTestId(container, 'some-autocomplete')).toHaveLength(1);
    expect(helpers.findMenu()).toHaveLength(1);
    expect(helpers.findMenuItems()).toHaveLength(2);
  });

  it('should handle "onBlur" prop', () => {
    const spy = jest.fn();

    helpers.render(<Autocomplete onBlur={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.focus(helpers.getInput());
    expect(spy).toHaveBeenCalledTimes(0);
    fireEvent.blur(helpers.getInput());
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should hide menu when wheel event fired outside a menu', () => {
    helpers.render(
      <Autocomplete>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );
    expect(helpers.findMenu()).toHaveLength(0);

    fireEvent.focus(helpers.getInput());
    expect(helpers.findMenu()).toHaveLength(1);

    act(() => {
      const event = new WheelEvent('wheel');

      Object.defineProperty(event, 'target', { value: document.body });

      fireEvent(window, event);
    });
    expect(helpers.findMenu()).toHaveLength(0);
  });

  it('should NOT hide menu when wheel event fired on a menu', () => {
    helpers.render(
      <Autocomplete>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );
    expect(helpers.findMenu()).toHaveLength(0);

    fireEvent.focus(helpers.getInput());
    expect(helpers.findMenu()).toHaveLength(1);

    act(() => {
      const event = new WheelEvent('wheel');

      Object.defineProperty(event, 'target', { value: helpers.findMenu()[0] });

      fireEvent(window, event);
    });
    expect(helpers.findMenu()).toHaveLength(1);
  });

  it('should call preventDefault on mousedown event when activeElement is field', async () => {
    helpers.render(
      <Autocomplete>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );
    expect(helpers.findMenu()).toHaveLength(0);

    await userEvent.click(helpers.getInput());
    expect(helpers.findMenu()).toHaveLength(1);
    expect(document.activeElement === helpers.getInput()).toBe(true);

    const event = createEvent.mouseDown(helpers.findMenu()[0]);
    act(() => {
      fireEvent(helpers.findMenu()[0], event);
    });
    expect(event.defaultPrevented).toBe(true);
  });

  it('should NOT call preventDefault on mousedown event when activeElement is NOT field', () => {
    helpers.render(
      <Autocomplete>
        <DropdownItem>Foo</DropdownItem>
        <DropdownItem>Bar</DropdownItem>
        <DropdownItem>Baz</DropdownItem>
      </Autocomplete>,
    );
    expect(helpers.findMenu()).toHaveLength(0);

    fireEvent.focus(helpers.getInput());
    expect(helpers.findMenu()).toHaveLength(1);
    expect(document.activeElement !== helpers.getInput()).toBe(true);

    const event = createEvent.mouseDown(helpers.findMenu()[0]);
    act(() => {
      fireEvent(helpers.findMenu()[0], event);
    });
    expect(event.defaultPrevented).toBe(false);
  });
});
