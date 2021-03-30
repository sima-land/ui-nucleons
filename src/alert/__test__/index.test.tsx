import React from 'react';
import { mount } from 'enzyme';
import { Alert } from '..';

describe('<Alert />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <Alert />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Alert
        title='Hello, world!'
        withNavBar
        withDivideNavBar={false}
        navBarProps={{ subtitle: 'Subtitle text' }}
        className='test-class'
        children='Main content'
        footer='Footer content'
        inLayer={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
