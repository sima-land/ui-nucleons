import React from 'react';
import { Price } from '..';
import { mount } from 'enzyme';

describe('Price', () => {
  it('should renders correctly', () => {
    const wrapper = mount(<Price value='123.45' currencyGrapheme='₽' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Price
        value='1234567.89'
        currencyGrapheme='$'
        crossedOut
        graphemeBefore
        className='test-class'
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
