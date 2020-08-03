import React from 'react';
import { mount } from 'enzyme';
import Panel from '../';
import infoSVG from '../../icons/information.svg';

describe('<Panel />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <Panel />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Panel
        color='white'
        contentColor='service-error'
        inline
        icon={infoSVG}
        className='test-class'
        children='Hello, world!'
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({
      children: null,
      html: 'Lorem <i>ipsum</i> <b>dolor</b> sit.',
    });

    expect(wrapper).toMatchSnapshot();
  });
});
