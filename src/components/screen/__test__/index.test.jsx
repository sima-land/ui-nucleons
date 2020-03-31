import React from 'react';
import Icon from '../../icon';
import { mount } from 'enzyme';
import Screen from '../index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { useInfiniteScroll } from '../../hooks';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    disableBodyScroll: jest.fn(original.disableBodyScroll),
    enableBodyScroll: jest.fn(original.enableBodyScroll),
  };
});

jest.mock('../../hooks', () => {
  const original = jest.requireActual('../../hooks');

  return {
    ...original,
    __esModule: true,
    useInfiniteScroll: jest.fn(original.useInfiniteScroll),
  };
});

describe('<Screen />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Screen />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(0);

    const wrapper = mount(
      <Screen
        title='Test title'
        subtitle='Test subtitle'
        onBack={spy}
        onClose={otherSpy}
        withBackButton
        withCloseButton
        children='Test content'
        footer='Test footer'
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(disableBodyScroll).toHaveBeenCalledTimes(1);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Icon).filterWhere(el => el.prop('className').includes('button-back')).prop('onClick')();
    expect(spy).toHaveBeenCalledTimes(1);

    expect(otherSpy).toHaveBeenCalledTimes(0);
    wrapper.find(Icon).filterWhere(el => el.prop('className').includes('button-close')).prop('onClick')();
    expect(otherSpy).toHaveBeenCalledTimes(1);

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should handle "onFullScroll" prop', () => {
    const spyScroll = jest.fn();
    expect(useInfiniteScroll).toHaveBeenCalledTimes(0);
    mount(
      <Screen
        onFullScroll={spyScroll}
      />
    );
    expect(useInfiniteScroll).toHaveBeenCalledTimes(2);
    expect(useInfiniteScroll.mock.calls[0][1]).toEqual({
      onFullScroll: spyScroll,
      threshold: 320,
    });
  });

  it('should handle "loading/loadingOverlayProps" props', () => {
    const wrapper = mount(
      <Screen
        loading
        loadingOverlayProps={{ spinnerProps: { size: 'medium' } }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
