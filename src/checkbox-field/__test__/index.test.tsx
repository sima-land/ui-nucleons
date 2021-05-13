import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from '../../checkbox';
import { CheckboxField } from '..';
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
    wrapper.update();
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

  it('should match snapshot', () => {
    const wrapper = mount(
      <CheckboxField
        label='Test label'
        error='Test error'
        info='Test info'
        checked
        disabled
        onChange={() => void 0}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
