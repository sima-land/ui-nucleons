import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Switch from '../index';

describe('<Switch />', () => {
  it('should work without props', () => {
    const wrapper = mount(
      <Switch />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "defaultChecked" prop', () => {
    const wrapper = mount(
      <Switch defaultChecked />
    );

    expect(wrapper.find('input').prop('checked')).toBe(true);

    act(() => {
      wrapper.find('input').prop('onChange')({ target: { checked: false } });
    });
    wrapper.update();

    expect(wrapper.find('input').prop('checked')).toBe(false);
  });
  it('should handle "checked" prop', () => {
    const wrapper = mount(
      <Switch checked />
    );

    expect(wrapper.find('input').prop('checked')).toBe(true);

    act(() => {
      wrapper.setProps({ checked: false });
    });
    wrapper.update();

    expect(wrapper.find('input').prop('checked')).toBe(false);
  });
  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <Switch onChange={spy} />
    );

    expect(spy).toHaveBeenCalledTimes(0);

    act(() => {
      wrapper.find('input').prop('onChange')({ target: { checked: false } });
    });
    wrapper.update();

    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should handle "inputRef" prop', () => {
    const testRef = React.createRef();
    const component = (
      <Switch inputRef={testRef} />
    );
    const container = document.createElement('div');

    act(() => {
      render(component, container);
    });

    expect(testRef.current).toBe(container.querySelector('input'));
  });
  it('should handle "computeClasses" prop', () => {
    const wrapper = mount(
      <Switch
        computeClasses={defaults => ({
          root: 'test-root',
          rootChecked: 'test-root-checked',
          track: ['test-track', defaults.track].join(' '),
          trackChecked: 'test-track-checked',
          circle: 'test-circle',
          circleChecked: 'test-circle-checked',
        })}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
