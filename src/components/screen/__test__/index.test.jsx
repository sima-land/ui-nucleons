import React from 'react';
import Icon from '../../icon';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Screen, { createTakeScrollableElement } from '../index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ScreenLayout } from '../screen-layout';

jest.mock('body-scroll-lock', () => {
  const original = jest.requireActual('body-scroll-lock');

  return {
    ...original,
    __esModule: true,
    disableBodyScroll: jest.fn(original.disableBodyScroll),
    enableBodyScroll: jest.fn(original.enableBodyScroll),
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

    const wrapper = mount(
      <Screen
        onFullScroll={spyScroll}
      />
    );

    expect(spyScroll).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(ScreenLayout).find('.content').getDOMNode().dispatchEvent(new Event('scroll'));
    });

    expect(spyScroll).toHaveBeenCalledTimes(1);
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

describe('createTakeScrollableElement()', () => {
  it('result should save element to ref and disable body scroll', () => {
    const elementRef = { current: null };
    const fakeElement = document.createElement('div');

    const takeRootElement = createTakeScrollableElement(elementRef);

    expect(elementRef.current).toBe(null);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(0);

    takeRootElement(fakeElement);

    expect(elementRef.current).toBe(fakeElement);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
  });
  it('result should enable body scroll', () => {
    const elementRef = { current: { old: true } };
    const fakeElement = document.createElement('div');

    const takeRootElement = createTakeScrollableElement(elementRef);

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(0);

    takeRootElement(fakeElement);

    expect(elementRef.current).toBe(fakeElement);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
  });
});
