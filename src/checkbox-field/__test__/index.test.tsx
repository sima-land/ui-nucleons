import React from 'react';
import { mount } from 'enzyme';
import { Checkbox } from '../../checkbox';
import { CheckboxField } from '..';

describe('<CheckboxField />', () => {
  it('should handle "label" prop', () => {
    const wrapper = mount(<CheckboxField label='Test label' />);

    expect(wrapper.find('[data-testid="checkbox-field:label"]')).toHaveLength(1);
  });

  it('should handle "failed" prop', () => {
    const wrapper = mount(<CheckboxField label='Hello!' failed />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "info" prop', () => {
    const wrapper = mount(<CheckboxField label='Hello!' info='Test info' />);

    expect(wrapper.find('.info')).toHaveLength(1);
    wrapper.setProps({ info: null });
    expect(wrapper.find('.info')).toHaveLength(0);
  });

  it('should handle "checked" prop', () => {
    const wrapper = mount(<CheckboxField label='Hello!' checked />);

    expect(wrapper.find(Checkbox).prop('checked')).toBe(true);
    wrapper.setProps({ checked: false });
    wrapper.update();
    expect(wrapper.find(Checkbox).prop('checked')).toBe(false);
  });

  it('should handle "onChange" prop', () => {
    const spy = jest.fn();
    const wrapper = mount(<CheckboxField label='Hello!' onChange={spy} />);

    expect(spy).toHaveBeenCalledTimes(0);
    wrapper.find(Checkbox).find('input').simulate('change');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    const wrapper = mount(
      <CheckboxField
        label='Test label'
        failed
        info='Test info'
        checked
        disabled
        onChange={() => void 0}
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "fieldView" prop', () => {
    const wrapper = mount(
      <CheckboxField
        label='Test label'
        failed
        info='Test info'
        checked
        disabled
        onChange={() => void 0}
        fieldView='toggle'
      />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
