import React from 'react';
import { shallow, mount } from 'enzyme';
import omit from 'lodash/omit';
import ModifiersList from '../';
import ModifierItem from '../modifier-item';
import Link from '../../link/deprecated';
import StatementSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/statement';

describe('<ModifiersList />', () => {
  const items = [
    { name: 'testModifier - 1', type: 'text', price: 123 },
    { name: 'testModifier - 2', type: 'text', price: 233 },
  ];
  it('should renders correctly without props', () => {
    const wrapper = shallow(<ModifiersList />);
    expect(wrapper.find(Link)).toHaveLength(0);
    expect(wrapper.find(StatementSVG)).toHaveLength(0);
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
    expect(omit(
      wrapper.find(ModifierItem).at(0).props(),
      ['onClick']
    )).toEqual({
      ...items[0],
      currencyGrapheme: '$',
    });
    expect(omit(
      wrapper.find(ModifierItem).at(1).props(),
      ['onClick']
    )).toEqual({
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
    expect(wrapper.find(StatementSVG)).toHaveLength(1);
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
  it('should call onClickItem correctly on click ModifierItem', () => {
    const onItemClickFn = jest.fn();
    const wrapper = mount(
      <ModifiersList
        items={items}
        onItemClick={onItemClickFn}
      />
    );

    expect(onItemClickFn).not.toHaveBeenCalled();
    wrapper.find(ModifierItem).at(1).simulate('click');
    expect(onItemClickFn).toHaveBeenCalledTimes(1);
    expect(onItemClickFn).toHaveBeenCalledWith(items[1]);

    wrapper.find(ModifierItem).at(0).simulate('click');
    expect(onItemClickFn).toHaveBeenCalledTimes(2);
    expect(onItemClickFn).toHaveBeenNthCalledWith(2, items[0]);
  });
});
