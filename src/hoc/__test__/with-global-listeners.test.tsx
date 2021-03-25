import React from 'react';
import withGlobalListeners from '../with-global-listeners';
import { mount } from 'enzyme';

describe('withGlobalListeners', () => {
  const TestSpan = () => <span>Тестовый компонент</span>;

  it('should match snapshot', () => {
    const TestComponent = withGlobalListeners(TestSpan);
    const wrapper = mount(<TestComponent />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should create component with correct name', () => {
    const TestComponent = withGlobalListeners(TestSpan);
    expect(TestComponent.displayName).toBe('withGlobalListeners(TestSpan)');
  });
  it('should pass add listener function to props', () => {
    const TestComponent = withGlobalListeners(TestSpan);
    const wrapper = mount(<TestComponent />);
    expect(typeof wrapper.find(TestSpan).prop('addGlobalListener')).toBe('function');
  });
  it('should pass add listener function to props with custom key', () => {
    const TestComponent = withGlobalListeners(TestSpan, { addListenerPropKey: 'testKey' });
    const wrapper = mount(<TestComponent />);
    expect(typeof wrapper.find(TestSpan).prop('testKey')).toBe('function');
  });
  it('listener function should works properly', () => {
    const spy = jest.fn();
    const anotherSpy = jest.fn();
    const TestComponent = withGlobalListeners(TestSpan);
    const wrapper = mount(<TestComponent />);
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
    expect(window.addEventListener).toHaveBeenCalledTimes(0);

    const unsubscribeSpy = (wrapper.find(TestSpan).prop('addGlobalListener') as any)('click', spy);
    expect(window.addEventListener).toHaveBeenCalledTimes(1);

    const unsubscribeAnotherSpy = (wrapper.find(TestSpan).prop('addGlobalListener') as any)('click', anotherSpy);
    expect(window.addEventListener).toHaveBeenCalledTimes(1);

    window.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledTimes(1);
    expect(anotherSpy).toHaveBeenCalledTimes(1);

    unsubscribeSpy();
    expect(window.removeEventListener).toHaveBeenCalledTimes(0);

    unsubscribeAnotherSpy();
    expect(window.removeEventListener).toHaveBeenCalledTimes(1);
  });
  it('should translate props to wrapped component', () => {
    const TestComponent = withGlobalListeners(TestSpan);
    const wrapper = mount(
      <TestComponent
        testProp='a'
        anotherTestProp='b'
      />
    );
    expect(wrapper.find(TestSpan).prop('testProp')).toBe('a');
    expect(wrapper.find(TestSpan).prop('anotherTestProp')).toBe('b');
  });
});
