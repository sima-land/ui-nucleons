import React from 'react';
import { DropdownItem } from '..';
import { DropdownItemUtils, LoopedIterator } from '../utils';

describe('DropdownItemUtils', () => {
  it('DropdownItemUtils.is should return true when argument is menu item', () => {
    const menuItem = <DropdownItem>Hello</DropdownItem>;
    const notDropdownItemUtils = <div>Hello</div>;

    expect(DropdownItemUtils.is(menuItem)).toBe(true);
    expect(DropdownItemUtils.is(notDropdownItemUtils)).toBe(false);
  });

  it('DropdownItemUtils.getValue should return value properly', () => {
    expect(DropdownItemUtils.getValue(<DropdownItem>Hello</DropdownItem>)).toBe('Hello');
    expect(DropdownItemUtils.getValue(<DropdownItem value='World'>Hello</DropdownItem>)).toBe(
      'World',
    );
  });

  it('DropdownItemUtils.asLinkedList should return linked list with position', () => {
    const items = [
      <DropdownItem key={1} />,
      <DropdownItem key={2} disabled />,
      <DropdownItem key={3} />,
      <DropdownItem key={4} />,
      <DropdownItem key={5} />,
    ];

    const loopedIterator = DropdownItemUtils.asLoopedIterator(items, 2);

    expect(loopedIterator instanceof LoopedIterator).toBe(true);
  });
});

describe('LinkedList', () => {
  it('.next should return undefined when source is empty', () => {
    const list = new LoopedIterator([]);

    expect(list.next()).toBe(undefined);
  });

  it('.prev should return undefined when source is empty', () => {
    const list = new LoopedIterator([]);

    expect(list.prev()).toBe(undefined);
  });
});
