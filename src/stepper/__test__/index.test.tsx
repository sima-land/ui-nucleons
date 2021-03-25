import React from 'react';
import { mount } from 'enzyme';
import { act, Simulate } from 'react-dom/test-utils';
import { Stepper } from '..';

describe('<Stepper />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Stepper />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle input props', () => {
    const focusSpy = jest.fn();
    const blurSpy = jest.fn();

    const wrapper = mount(
      <Stepper
        defaultValue={123}
        disabled
        onFocus={focusSpy}
        onBlur={blurSpy}
      />
    );

    expect(blurSpy).toBeCalledTimes(0);
    expect(focusSpy).toBeCalledTimes(0);

    act(() => {
      Simulate.focus(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();

    expect(focusSpy).toBeCalledTimes(1);
    expect(blurSpy).toBeCalledTimes(0);

    act(() => {
      Simulate.blur(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();

    expect(focusSpy).toBeCalledTimes(1);
    expect(blurSpy).toBeCalledTimes(1);
  });

  it('should handle "onFocus" missing', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Stepper
        onFocus={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.focus(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();
    expect(spy).toBeCalledTimes(1);

    wrapper.setProps({ onFocus: undefined });

    act(() => {
      Simulate.focus(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "onBlur" missing', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <Stepper
        onBlur={spy}
      />
    );

    expect(spy).toBeCalledTimes(0);

    act(() => {
      Simulate.blur(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();
    expect(spy).toBeCalledTimes(1);

    wrapper.setProps({ onBlur: undefined });

    act(() => {
      Simulate.blur(wrapper.find('[data-testid="stepper:input"]').getDOMNode());
    });
    wrapper.update();
    expect(spy).toBeCalledTimes(1);
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(
      <Stepper />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ size: 'm' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ size: 'm' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onAdd/onSubtract/canAdd/canSubtract" props', () => {
    const subtractSpy = jest.fn();
    const addSpy = jest.fn();

    const wrapper = mount(
      <Stepper
        onSubtract={subtractSpy}
        onAdd={addSpy}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(subtractSpy).toHaveBeenCalledTimes(0);
    expect(addSpy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('[data-testid="stepper:minus"]').first().simulate('click');
    });
    wrapper.update();

    expect(subtractSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('[data-testid="stepper:plus"]').last().simulate('click');
    });
    wrapper.update();

    expect(subtractSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(1);

    // hide buttons
    act(() => {
      wrapper.setProps({ canAdd: false, canSubtract: false });
    });
    wrapper.update();

    wrapper.find('[data-testid="stepper:minus"]').first().simulate('click');
    expect(subtractSpy).toHaveBeenCalledTimes(1);

    wrapper.find('[data-testid="stepper:plus"]').last().simulate('click');
    expect(addSpy).toHaveBeenCalledTimes(1);
  });
});
