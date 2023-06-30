import {
  render,
  fireEvent,
  createEvent,
  getByTestId,
  queryAllByTestId,
  getAllByTestId,
} from '@testing-library/react';
import { Autocomplete } from '..';

describe('Autocomplete', () => {
  const findMenuItems = (container: HTMLElement) => getAllByTestId(container, 'dropdown-item');

  const isCheckedItem = (item: HTMLElement) => item.classList.contains('checked');

  const focusOnField = (container: HTMLElement) => {
    fireEvent.focus(getByTestId(container, 'text-field:field'));
  };

  it('should renders correctly', () => {
    const items = [
      'U.S.',
      'France',
      'China',
      'Cambodia',
      'Chile',
      'Canada',
      'Poland',
      'Russia',
      'Belarus',
      'Ukraine',
    ];
    const renderItem = (item: string) => item.toUpperCase();

    const { container } = render(
      <Autocomplete value='Hello' items={items} renderItem={renderItem} />,
    );

    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:arrow-down')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:arrow-up')).toHaveLength(0);

    // with menu opened
    focusOnField(container);
    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(1);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(items.length);
    expect(queryAllByTestId(container, 'autocomplete:arrow-down')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:arrow-up')).toHaveLength(1);
  });

  it('should renders correctly with preset "filled-only-list"', () => {
    const items = ['Foo', 'Bar', 'Baz'];
    const renderItem = (item: string) => item.toUpperCase();

    const { container } = render(
      <Autocomplete
        value='Hello'
        items={items}
        renderItem={renderItem}
        preset='filled-only-list'
      />,
    );

    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:arrow-down')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:arrow-up')).toHaveLength(0);

    // with menu opened
    focusOnField(container);
    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(1);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(items.length);
    expect(queryAllByTestId(container, 'autocomplete:arrow-down')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:arrow-up')).toHaveLength(0);
  });

  it('should render loading state', () => {
    const items = ['Foo', 'Bar', 'Baz'];
    const renderItem = (item: string) => item.toUpperCase();

    const { container } = render(
      <Autocomplete
        value='Hello'
        items={items}
        renderItem={renderItem}
        preset='filled-only-list'
        loading
      />,
    );

    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:loading-area')).toHaveLength(0);

    // with menu opened
    focusOnField(container);
    expect(queryAllByTestId(container, 'autocomplete:field')).toHaveLength(1);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(1);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(0);
    expect(queryAllByTestId(container, 'autocomplete:loading-area')).toHaveLength(1);
  });

  it('should call preventDefault on menu item mouse down event', () => {
    const items = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];
    const { container } = render(<Autocomplete value='Hello' items={items} />);

    focusOnField(container);

    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(5);

    // prepare fake event
    const mouseDownEvent = createEvent.mouseDown(findMenuItems(container)[0]);

    expect(mouseDownEvent.defaultPrevented).toBe(false);
    fireEvent(findMenuItems(container)[0], mouseDownEvent);
    expect(mouseDownEvent.defaultPrevented).toBe(true);
  });

  it('should handle "renderItem" prop missing', () => {
    const items = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];
    const { container } = render(<Autocomplete value='Hello' items={items} />);

    focusOnField(container);
    getAllByTestId(container, 'dropdown-item').forEach((menuItem, index) => {
      expect(menuItem.textContent).toBe(items[index]);
    });
  });

  // @todo раньше фиксировалось тестами что должно показаться меню при change без focus, при новых проблемах разобраться
  it('should not open menu on change without focus', () => {
    const items = ['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee'];
    const spy = jest.fn();

    const { container } = render(<Autocomplete value='ffff' items={items} onChange={spy} />);

    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.change(getByTestId(container, 'text-field:field'), { target: { value: 'jjjj' } });

    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should handle "defaultValue" prop', () => {
    const { container } = render(
      <Autocomplete defaultValue='dddd' items={['aaaa', 'bbbb', 'cccc']} />,
    );

    expect(getByTestId<HTMLInputElement>(container, 'text-field:field').value).toBe('dddd');
  });

  it('should hide menu on field blur', () => {
    const { container } = render(
      <Autocomplete defaultValue='dddd' items={['aaaa', 'bbbb', 'cccc']} />,
    );

    fireEvent.focus(getByTestId(container, 'text-field:field'));
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(1);

    fireEvent.blur(getByTestId(container, 'text-field:field'));
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
  });

  it('should handle menu item click', () => {
    const spy = jest.fn();

    const { container } = render(
      <Autocomplete
        defaultValue='0000'
        items={['aaaa', 'bbbb', 'cccc', 'dddd', 'eeee', 'ffff']}
        onSelect={spy}
      />,
    );

    focusOnField(container);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(1);
    expect(queryAllByTestId(container, 'dropdown-item')).toHaveLength(6);
    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(getAllByTestId(container, 'dropdown-item')[4]);
    expect(queryAllByTestId(container, 'autocomplete:menu')).toHaveLength(0);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  describe('should handle field "keydown" event', () => {
    it('ArrowDown: no active item', () => {
      const spy = jest.fn();

      const { container } = render(
        <Autocomplete value='dddd' items={['aaaa', 'bbbb', 'cccc']} onKeyDown={spy} />,
      );

      focusOnField(container);
      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'ArrowDown' });
      expect(spy).toHaveBeenCalledTimes(1);
      expect(isCheckedItem(findMenuItems(container)[0])).toBe(true);
      expect(isCheckedItem(findMenuItems(container)[1])).toBe(false);
      expect(isCheckedItem(findMenuItems(container)[2])).toBe(false);
    });

    it('ArrowDown: with active item', () => {
      const { container } = render(<Autocomplete value='dddd' items={['aaaa', 'bbbb', 'cccc']} />);

      focusOnField(container);

      // second press
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'ArrowDown' });

      // second press
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'ArrowDown' });

      expect(isCheckedItem(findMenuItems(container)[0])).toBe(false);
      expect(isCheckedItem(findMenuItems(container)[1])).toBe(true);
      expect(isCheckedItem(findMenuItems(container)[2])).toBe(false);
    });

    it('ArrowUp', () => {
      const { container } = render(<Autocomplete value='dddd' items={['aaaa', 'bbbb', 'cccc']} />);

      focusOnField(container);
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'ArrowUp' });

      expect(isCheckedItem(findMenuItems(container)[0])).toBe(false);
      expect(isCheckedItem(findMenuItems(container)[1])).toBe(false);
      expect(isCheckedItem(findMenuItems(container)[2])).toBe(true);
    });

    it('Enter: no active item', () => {
      const spy = jest.fn();

      const { container } = render(
        <Autocomplete value='dddd' items={['aaaa', 'bbbb', 'cccc']} onSelect={spy} />,
      );

      focusOnField(container);
      expect(spy).toHaveBeenCalledTimes(0);

      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'Enter' });
      expect(spy).toHaveBeenCalledTimes(0);
    });

    it('Enter: with active item', () => {
      const spy = jest.fn();

      const { container } = render(
        <Autocomplete value='dddd' items={['aaaa', 'bbbb', 'cccc']} onSelect={spy} />,
      );

      // focus
      focusOnField(container);
      expect(spy).toHaveBeenCalledTimes(0);

      // mark first as active
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'ArrowDown' });
      expect(spy).toHaveBeenCalledTimes(0);

      // press enter
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'Enter' });
      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('Enter: no items', () => {
      const spy = jest.fn();

      const { container } = render(<Autocomplete value='dddd' items={undefined} onSelect={spy} />);

      // focus
      focusOnField(container);
      expect(spy).toHaveBeenCalledTimes(0);

      // press enter
      fireEvent.keyDown(getByTestId(container, 'text-field:field'), { key: 'Enter' });
      expect(spy).toHaveBeenCalledTimes(0);
    });
  });

  it('should handle onClick prop', () => {
    const spy = jest.fn();
    const { container } = render(<Autocomplete items={undefined} onClick={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);

    fireEvent.click(getByTestId(container, 'text-field:block'));

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
