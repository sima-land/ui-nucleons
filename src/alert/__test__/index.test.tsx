import React from 'react';
import { mount } from 'enzyme';
import { Alert } from '..';
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    enableBodyScroll: jest.fn(original.enableBodyScroll),
    disableBodyScroll: jest.fn(original.disableBodyScroll),
  };
});

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
        inPortal={false}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should disable/enable body scroll', () => {
    expect(disableBodyScroll).toBeCalledTimes(0);
    expect(enableBodyScroll).toBeCalledTimes(0);

    const wrapper = mount(
      <Alert
        withScrollDisable
      />
    );

    expect(disableBodyScroll).toBeCalledTimes(1);
    expect(enableBodyScroll).toBeCalledTimes(0);

    wrapper.unmount();

    expect(disableBodyScroll).toBeCalledTimes(1);
    expect(enableBodyScroll).toBeCalledTimes(1);
  });
});
