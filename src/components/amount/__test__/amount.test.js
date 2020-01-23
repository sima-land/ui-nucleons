import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import Amount from '../amount';
import Icon from '../../icon';

describe('<Amount />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <Amount />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle Input props', () => {
    const spy = jest.fn();
    const otherSpy = jest.fn();
    const anotherSpy = jest.fn();

    const wrapper = mount(
      <Amount
        defaultValue={123}
        disabled
        onChange={spy}
        onBlur={otherSpy}
        onKeyDown={anotherSpy}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "size" prop', () => {
    const wrapper = mount(
      <Amount />
    );

    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ size: 'medium' });
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "onAdd/onSubtract/canAdd/canSubtract" props', () => {
    const subtractSpy = jest.fn();
    const addSpy = jest.fn();

    const wrapper = mount(
      <Amount
        onSubtract={subtractSpy}
        onAdd={addSpy}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(subtractSpy).toHaveBeenCalledTimes(0);
    expect(addSpy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(Icon).first().simulate('click');
    });
    wrapper.update();
    expect(subtractSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find(Icon).last().simulate('click');
    });
    wrapper.update();

    expect(subtractSpy).toHaveBeenCalledTimes(1);
    expect(addSpy).toHaveBeenCalledTimes(1);

    // disable buttons
    act(() => {
      wrapper.setProps({ canAdd: false, canSubtract: false });
    });
    wrapper.update();

    wrapper.find(Icon).first().simulate('click');
    expect(subtractSpy).toHaveBeenCalledTimes(1);

    wrapper.find(Icon).last().simulate('click');
    expect(addSpy).toHaveBeenCalledTimes(1);
  });
  it('should handle "computeClasses" prop', () => {
    const wrapper = mount(
      <Amount
        computeClasses={defaults => ({
          ...defaults,
          root: 'custom-root',
          input: [defaults.input, 'extended-input'].join(' '),
        })}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
