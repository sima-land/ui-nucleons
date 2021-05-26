import React from 'react';
import { Rating } from '..';
import { mount } from 'enzyme';

describe('<Rating />', () => {
  it('renders correctly without params', () => {
    const wrapper = mount(
      <Rating value={3.4} className='test-class' />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
