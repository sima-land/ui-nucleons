import React from 'react';
import Tabs from '../';
import { shallow } from 'enzyme';


describe('<TabsGroup />', () => {
  let selectableTabs;
  const items = [
      'item 1',
      'item 2',
      'item 3',
    ],
    renderItemMock = jest.fn(item => (<span>{item}</span>)),
    isSelectedItemMock = jest.fn(item => item === 'item 2');

  it('renders correctly without params', () => {
    selectableTabs = shallow(
      <Tabs />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
  it('calls renderItem, isSelectedItem and onSelect properly', () => {
    const onSelectItemMock = jest.fn();
    selectableTabs = shallow(
      <Tabs
        items={items}
        renderItem={renderItemMock}
        isSelectedItem={isSelectedItemMock}
        onSelectItem={onSelectItemMock}
      />
    );
    expect(renderItemMock).toHaveBeenCalledTimes(3);
    expect(renderItemMock.mock.calls[0][0]).toEqual(items[0]);
    expect(renderItemMock.mock.calls[1][0]).toEqual(items[1]);
    expect(renderItemMock.mock.calls[2][0]).toEqual(items[2]);

    expect(isSelectedItemMock).toHaveBeenCalledTimes(3);
    expect(isSelectedItemMock.mock.calls[0][0]).toEqual(items[0]);
    expect(isSelectedItemMock.mock.calls[1][0]).toEqual(items[1]);
    expect(isSelectedItemMock.mock.calls[2][0]).toEqual(items[2]);

    selectableTabs.find('.tab-item').at(1).simulate('click');
    expect(onSelectItemMock).toHaveBeenCalledTimes(1);
    expect(onSelectItemMock).toHaveBeenCalledWith('item 3');
  });
  it('renders correctly', () => {
    selectableTabs = shallow(
      <Tabs
        items={items}
        renderItem={renderItemMock}
        isSelectedItem={isSelectedItemMock}
      />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
  it('renders correctly with customClasses', () => {
    selectableTabs = shallow(
      <Tabs
        items={items}
        renderItem={renderItemMock}
        isSelectedItem={isSelectedItemMock}
        customClasses={{
          itemsList: 'test-items-list',
          item: 'test-item',
          selectedItem: 'test-selected-item',
        }}
      />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
});
