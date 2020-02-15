import React from 'react';
import { shallow, mount } from 'enzyme';
import ModifiersList from '../';
import ModifierItem from '../modifier-item';
import Link from '../../link';
import Icon from '../../icon';

describe('<ModifiersList', () => {
  const items = [
    { name: 'testModifier - 1', type: 'text', price: 123 },
    { name: 'testModifier - 2', type: 'text', price: 233 },
  ];
  it('should renders correctly without props', () => {
    const wrapper = shallow(<ModifiersList />);
    expect(wrapper.find(Link)).toHaveLength(0);
    expect(wrapper.find(Icon)).toHaveLength(0);
    expect(wrapper.find(ModifierItem)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  it('should renders correctly with correct props', () => {
    const wrapper = shallow(
      <ModifiersList
        items={items}
        currencyGrapheme='$'
      />
    );
    expect(wrapper.find(ModifierItem)).toHaveLength(2);
    expect(wrapper.find(ModifierItem).at(0).props()).toEqual({
      ...items[0],
      currencyGrapheme: '$',
    });
    expect(wrapper.find(ModifierItem).at(1).props()).toEqual({
      ...items[1],
      currencyGrapheme: '$',
    });
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correct with sizesTableUrl', () => {
    const wrapper = mount(
      <ModifiersList
        sizesTableUrl='test.ru/123'
      />
    );
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).text()).toEqual('Таблица размеров');
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should pass custom props to correct blocks', () => {
    const wrapper = shallow(
      <ModifiersList
        items={items}
        sizesTableUrl='test.ru/123'
        wrapperProps={{
          className: 'wrapper-test-class',
          id: 4,
        }}
        itemsContainerProps={{
          className: 'items-container-test-class',
        }}
      />
    );

    const wrapperElement = wrapper.find('.wrapper-test-class');
    expect(wrapperElement.prop('id')).toEqual(4);
    expect(wrapperElement.find(Link)).toHaveLength(1);
    expect(wrapperElement.find(ModifierItem)).toHaveLength(2);

    const itemsContainerElement = wrapper.find('.items-container-test-class');
    expect(itemsContainerElement.find(Link)).toHaveLength(0);
    expect(itemsContainerElement.find(ModifierItem)).toHaveLength(2);
    expect(wrapper).toMatchSnapshot();
  });
});
