import React from 'react';
import NavBar from '../../nav-bar';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Screen, { takeScrollableElement, setRefValue } from '../index';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { ScreenLayout } from '../screen-layout';
import Layer from '../../layer';

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
    (wrapper.find(NavBar).prop('buttons') as any).start.onClick();
    expect(spy).toHaveBeenCalledTimes(1);

    expect(otherSpy).toHaveBeenCalledTimes(0);
    (wrapper.find(NavBar).prop('buttons') as any).end.onClick();
    expect(otherSpy).toHaveBeenCalledTimes(1);

    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    wrapper.unmount();
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('should renders without close button', () => {
    const wrapper = mount(
      <Screen
        title='Test title'
        subtitle='Test subtitle'
        onClose={undefined}
        withCloseButton={false}
        navBarProps={{
          buttons: {
            end: { text: 'cross replacer' },
          },
        }}
      />
    );

    expect(wrapper).toMatchSnapshot();
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

  it('should handle "loadingArea" prop', () => {
    const wrapper = mount(
      <Screen
        loading
        loadingArea='content'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});

describe('createTakeScrollableElement()', () => {
  it('result should save element to ref and disable body scroll', () => {
    const elementRef = { current: null };
    const fakeElement = document.createElement('div');

    takeScrollableElement(elementRef, fakeElement);

    expect(elementRef.current).toBe(fakeElement);
    expect(enableBodyScroll).toHaveBeenCalledTimes(0);
    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
  });

  it('result should enable body scroll', () => {
    const elementRef = { current: { old: true } };
    const fakeElement = document.createElement('div');

    takeScrollableElement(elementRef as any, fakeElement);

    expect(elementRef.current).toBe(fakeElement);
    expect(enableBodyScroll).toHaveBeenCalledTimes(1);
    expect(disableBodyScroll).toHaveBeenCalledTimes(1);
  });
});

describe('setRefElement()', () => {
  it('should call ref function with element', () => {
    const elementRef = jest.fn();
    const fakeElement = document.createElement('div');

    setRefValue(elementRef, fakeElement);

    expect(elementRef).toHaveBeenCalledWith(fakeElement);
  });
  it('should ref current element', () => {
    const elementRef = { current: null };
    const fakeElement = document.createElement('div');

    setRefValue(elementRef, fakeElement);

    expect(elementRef.current).toBe(fakeElement);
  });

  it('should render Layer', () => {
    const wrapper = mount(
      <Screen />
    );
    expect(wrapper.find(Layer)).toHaveLength(1);
  });

  it('should not render Layer', () => {
    const wrapper = mount(
      <Screen withLayer={false} />
    );

    expect(wrapper.find(Layer)).toHaveLength(0);
  });
});
