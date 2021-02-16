import React from 'react';
import { shallow } from 'enzyme';
import ModifierItem from '../';
import Text from '../../../text';
import Price from '../../../price';
import CheckSVG from '@dev-dep/ui-quarks/icons/24x24/Stroked/check';

describe('<ModifierItem', () => {
  const modifier = {
    name: 'modifier for test',
    color: '#451289',
    image: 'https://test.com/140.jpg?v=0',
    price: 745,
    currencyGrapheme: '$',
  };
  it('should render correctly without props', () => {
    const wrapper = shallow(<ModifierItem />);
    expect(wrapper.find('.adornment')).toHaveLength(0);
    expect(wrapper.find(Price)).toHaveLength(0);
    expect(wrapper.find(CheckSVG)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly default text type modifier', () => {
    const wrapper = shallow(<ModifierItem {...modifier} />);
    expect(wrapper.find('.adornment')).toHaveLength(0);
    expect(wrapper.find(Price).prop('className')).toEqual('price');
    expect(wrapper.find(CheckSVG)).toHaveLength(0);
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly image modifier', () => {
    const wrapper = shallow(<ModifierItem {...modifier} type='image' />);
    const image = wrapper.find('.adornment');
    expect(image).toHaveLength(1);
    expect(image.prop('src')).toEqual('https://test.com/140.jpg?v=0');
    expect(image.prop('alt')).toEqual('modifier for test');
    expect(image.prop('style')).toBeUndefined();
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly color modifier', () => {
    const wrapper = shallow(<ModifierItem {...modifier} type='color' />);
    const image = wrapper.find('.adornment');
    expect(image).toHaveLength(1);
    expect(image.prop('src')).toBeUndefined();
    expect(image.prop('alt')).toBeUndefined();
    expect(image.prop('style')).toEqual({ backgroundColor: '#451289' });
    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly with additionalText and selected', () => {
    const wrapper = shallow(
      <ModifierItem
        {...modifier}
        additionalText='В корзине 5 шт'
        selected
      />
    );
    expect(wrapper.find(Text).props()).toEqual({
      children: 'В корзине 5 шт',
      color: 'gray38',
      size: 12,
      lineHeight: 16,
    });
    expect(wrapper.find(Price).prop('className')).toEqual('price additional');
    expect(wrapper.find(CheckSVG)).toHaveLength(1);
    expect(wrapper).toMatchSnapshot();
  });
  it('should calls onClick correctly', () => {
    const onClick = jest.fn();
    const wrapper = shallow(
      <ModifierItem
        {...modifier}
        onClick={onClick}
      />
    );
    expect(onClick).not.toHaveBeenCalled();
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
