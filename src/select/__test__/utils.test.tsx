import { fireEvent, render } from '@testing-library/react';
import React, { useContext } from 'react';
import { DropdownItem } from '../../dropdown-item';
import { LinkedList, MenuItem, SelectContext } from '../utils';

describe('MenuItem', () => {
  it('MenuItem.is should return true when argument is menu item', () => {
    const menuItem = <DropdownItem>Hello</DropdownItem>;
    const notMenuItem = <div>Hello</div>;

    expect(MenuItem.is(menuItem)).toBe(true);
    expect(MenuItem.is(notMenuItem)).toBe(false);
  });

  it('MenuItem.getValue should return value properly', () => {
    expect(MenuItem.getValue(<DropdownItem>Hello</DropdownItem>)).toBe('Hello');
    expect(MenuItem.getValue(<DropdownItem value='World'>Hello</DropdownItem>)).toBe('World');
  });

  it('MenuItem.asLinkedList should return linked list with position', () => {
    const items = [
      <DropdownItem key={1} />,
      <DropdownItem key={2} disabled />,
      <DropdownItem key={3} />,
      <DropdownItem key={4} />,
      <DropdownItem key={5} />,
    ];

    const [linkedList, currentIndex] = MenuItem.asLinkedList(items, 2);

    expect(currentIndex).toBe(1);
    expect(linkedList instanceof LinkedList).toBe(true);
  });
});

describe('LinkedList', () => {
  it('.next should return undefined when source is empty', () => {
    const list = new LinkedList([]);

    expect(list.next(0)).toBe(undefined);
  });

  it('.prev should return undefined when source is empty', () => {
    const list = new LinkedList([]);

    expect(list.prev(0)).toBe(undefined);
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
