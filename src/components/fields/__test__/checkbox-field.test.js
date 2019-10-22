import React from 'react';
import { mount } from 'enzyme';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Checkbox from '../checkbox-field';
import CheckboxField from '../checkbox-field';
import classes from '../checkbox-field.scss';

describe('<CheckboxField />', () => {
  it('should render without props', () => {
    const wrapper = mount(<CheckboxField />);
    expect(wrapper.find(Checkbox)).toHaveLength(1);
  });
  it('should handle "label" prop', () => {
    const wrapper = mount(
      <CheckboxField
        label='Test label'
      />
    );
    expect(wrapper.find(`.${classes.label}`)).toHaveLength(1);
    wrapper.setProps({ label: null });
    expect(wrapper.find(`.${classes.label}`)).toHaveLength(0);
  });
  it('should handle "error" prop', () => {
    const wrapper = mount(
      <CheckboxField
        error='Test error'
      />
    );
    expect(wrapper.find(`.${classes.error}`)).toHaveLength(1);
    wrapper.setProps({ error: null });
    expect(wrapper.find(`.${classes.error}`)).toHaveLength(0);
  });
  it('should handle "info" prop', () => {
    const wrapper = mount(
      <CheckboxField
        info='Test info'
      />
    );
    expect(wrapper.find(`.${classes.info}`)).toHaveLength(1);
    wrapper.setProps({ info: null });
    expect(wrapper.find(`.${classes.info}`)).toHaveLength(0);
  });
  it('should handle "checked" prop', () => {
    const wrapper = mount(
      <CheckboxField
        checked
      />
    );
    expect(wrapper.find(Checkbox).prop('checked')).toBe(true);
    wrapper.setProps({ checked: false });
    expect(wrapper.find(Checkbox).prop('checked')).toBe(false);
  });
  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <CheckboxField
        onChange={spy}
      />
    );
    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Checkbox).find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should fire "change" event on label click', () => {
    const container = document.createElement('div');
    const spy = jest.fn();

    document.body.appendChild(container);

    act(() => {
      render(<CheckboxField onChange={spy} />, container);
    });

    expect(spy).toHaveBeenCalledTimes(0);
    container.querySelector('label').dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledTimes(1);
  });
  it('should match snapshot', () => {
    const wrapper = mount(
      <CheckboxField
        label='Test label'
        error='Test error'
        info='Test info'
        checked
        disabled
        onChange={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
