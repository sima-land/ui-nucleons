import React from 'react';
import { Tabs } from '..';
import { mount } from 'enzyme';

describe('<Tabs />', () => {
  const items = ['item 1', 'item 2', 'item 3'];
  const getItemNameMock = jest.fn(item => item);
  const isSelectedItemMock = jest.fn(item => item === 'item 2');

  it('renders correctly without params', () => {
    const wrapper = mount(<Tabs />);
    expect(wrapper).toMatchSnapshot();
  });

  it('calls getItemName, isSelectedItem and onSelect properly', () => {
    const onSelectItemMock = jest.fn();
    const wrapper = mount(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        onSelectItem={onSelectItemMock}
      />,
    );
    expect(getItemNameMock).toHaveBeenCalledTimes(3);
    expect(getItemNameMock.mock.calls[0][0]).toEqual(items[0]);
    expect(getItemNameMock.mock.calls[1][0]).toEqual(items[1]);
    expect(getItemNameMock.mock.calls[2][0]).toEqual(items[2]);

    expect(isSelectedItemMock).toHaveBeenCalledTimes(3);
    expect(isSelectedItemMock.mock.calls[0][0]).toEqual(items[0]);
    expect(isSelectedItemMock.mock.calls[1][0]).toEqual(items[1]);
    expect(isSelectedItemMock.mock.calls[2][0]).toEqual(items[2]);

    wrapper.find('.tab-item').at(2).simulate('click');
    expect(onSelectItemMock).toHaveBeenCalledTimes(1);
    expect(onSelectItemMock).toHaveBeenCalledWith('item 3');

    expect(wrapper).toMatchSnapshot();
  });

  it('calls status getters', function () {
    const wrapper = mount(
      <Tabs
        items={[
          { name: 'item 1', selected: true },
          { name: 'item 2' },
          { name: 'item 3', blocked: true },
        ]}
        getItemName={({ name }) => name}
        isSelectedItem={({ selected }) => selected}
        isDisabledItem={({ blocked }) => blocked}
      />,
    );

    const tabs = wrapper.find('.tab-item');
    expect(tabs.at(0).hasClass('selected')).toBeTruthy();
    expect(tabs.at(2).hasClass('disabled')).toBeTruthy();
  });

  it('renders correctly with round type and small gap', () => {
    const wrapper = mount(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        view='round'
        gapSize='s'
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with text type, underline and stretch', () => {
    const wrapper = mount(
      <Tabs
        items={items}
        getItemName={getItemNameMock}
        isSelectedItem={isSelectedItemMock}
        underline
        stretch
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle onSelect missing', () => {
    const spy = jest.fn();

    const wrapper = mount(<Tabs items={items} onSelectItem={spy} />);

    expect(spy).toBeCalledTimes(0);

    wrapper.find('.tab-item').at(2).simulate('click');
    expect(spy).toBeCalledTimes(1);

    wrapper.setProps({ onSelectItem: undefined });
    wrapper.find('.tab-item').at(2).simulate('click');
    expect(spy).toBeCalledTimes(1);
  });
});
