import React from 'react';
import { mount } from 'enzyme';
import { Alert } from '..';
import { useBodyScrollLock } from '../../_internal/body-scroll';

jest.mock('../../_internal/body-scroll', () => {
  const original = jest.requireActual('../../_internal/body-scroll');

  return {
    ...original,
    __esModule: true,
    useBodyScrollLock: jest.fn(original.useBodyScrollLock),
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
    expect(useBodyScrollLock).toBeCalledTimes(0);

    mount(
      <Alert
        withScrollDisable
      />
    );

    expect(useBodyScrollLock).toBeCalledTimes(1);
  });

  it('should do not use disable/enable body scrolling by default', () => {
    mount(
      <Alert />
    );

    expect((useBodyScrollLock as any).mock.calls[0][1]).toBe(false);
  });
});
