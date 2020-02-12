import React from 'react';
import { mount } from 'enzyme';
import ModifiersList from '../';
import ModifierItem from '../modifier-item';

describe('<ModifiersList', () => {
  it('should renders correctly without props', () => {
    const wrapper = mount(<ModifiersList />);
    expect(wrapper.find(ModifierItem)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  it('should renders correctly with correct props', () => {
    const items = [
      { name: 'testModifier - 1', type: 'text', price: 123 },
      { name: 'testModifier - 2', type: 'text', price: 233 },
    ];
    const wrapper = mount(
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
});
