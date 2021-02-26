import React from 'react';
import Tabs from '../';
import { shallow } from 'enzyme';

describe('<Tabs />', () => {
  let selectableTabs;
  const items = [
    'item 1',
    'item 2',
    'item 3',
  ];
  const getItemNameMock = jest.fn(item => item);
  const isSelectedItemMock = jest.fn(item => item === 'item 2');

  it('renders correctly without params', () => {
    selectableTabs = shallow(
      <Tabs />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
  it('calls getItemName, isSelectedItem and onSelect properly', () => {
    const onSelectItemMock = jest.fn();
    selectableTabs = shallow(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        onSelectItem={onSelectItemMock}
      />
    );
    expect(getItemNameMock).toHaveBeenCalledTimes(3);
    expect(getItemNameMock.mock.calls[0][0]).toEqual(items[0]);
    expect(getItemNameMock.mock.calls[1][0]).toEqual(items[1]);
    expect(getItemNameMock.mock.calls[2][0]).toEqual(items[2]);

    expect(isSelectedItemMock).toHaveBeenCalledTimes(3);
    expect(isSelectedItemMock.mock.calls[0][0]).toEqual(items[0]);
    expect(isSelectedItemMock.mock.calls[1][0]).toEqual(items[1]);
    expect(isSelectedItemMock.mock.calls[2][0]).toEqual(items[2]);

    selectableTabs.find('.tab-item').at(2).simulate('click');
    expect(onSelectItemMock).toHaveBeenCalledTimes(1);
    expect(onSelectItemMock).toHaveBeenCalledWith('item 3');

    expect(selectableTabs).toMatchSnapshot();
  });
  it('calls status getters', function () {
    selectableTabs = shallow(
      <Tabs
        items={[
          { name: 'item 1', selected: true },
          { name: 'item 2' },
          { name: 'item 3', blocked: true },
        ]}
        getItemName={({ name }) => name}
        isSelectedItem={({ selected }) => selected}
        isDisabledItem={({ blocked }) => blocked}
      />
    );

    const tabs = selectableTabs.find('.tab-item');
    expect(tabs.at(0).hasClass('selected')).toBeTruthy();
    expect(tabs.at(2).hasClass('disabled')).toBeTruthy();
  });
  it('renders correctly with round type and small gap', () => {
    selectableTabs = shallow(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        type='round'
        gapSize='s'
      />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
  it('renders correctly with text type, underline and stretch', () => {
    selectableTabs = shallow(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        underline
        stretch
      />
    );
    expect(selectableTabs).toMatchSnapshot();
  });
});
