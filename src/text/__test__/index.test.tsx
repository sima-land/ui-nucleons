import React from 'react';
import { Text } from '../index';
import classes from '../text.module.scss';
import { shallow } from 'enzyme';
import { COLORS } from '../../colors';
import { LINE_HEIGHTS, SIZES } from '../../styling/fonts';

describe('<Text />', () => {
  it('should render without props', () => {
    const wrapper = shallow(
      <Text />
    );
    expect(wrapper.find('span')).toHaveLength(1);
  });
  it('should handle "element" prop', () => {
    const wrapper = shallow(
      <Text element='section' />
    );
    expect(wrapper.find('span')).toHaveLength(0);
    expect(wrapper.find('section')).toHaveLength(1);

    wrapper.setProps({ element: undefined });
    expect(wrapper.find('span')).toHaveLength(1);
    expect(wrapper.find('section')).toHaveLength(0);
  });
  it('should handle "children" prop', () => {
    const wrapper = shallow(
      <Text>Test</Text>
    );
    expect(wrapper.find('span').text()).toBe('Test');
  });
  it('should handle "size" prop', () => {
    const wrapper = shallow(
      <Text />
    );

    [...SIZES].forEach(value => {
      wrapper.setProps({ size: value });
      expect(wrapper.find('span').prop('className')).toContain(`size-${value}`);
    });

    wrapper.setProps({ size: 7 });
    expect(wrapper.find('span').prop('className')).not.toContain('size-7');
  });
  it('should handle "lineHeight" prop', () => {
    const wrapper = shallow(
      <Text />
    );

    [...LINE_HEIGHTS].forEach(value => {
      wrapper.setProps({ lineHeight: value });
      expect(wrapper.find('span').prop('className')).toContain(`line-height-${value}`);
    });

    wrapper.setProps({ size: 7 });
    expect(wrapper.find('span').prop('className')).not.toContain('line-height-7');
  });
  it('should handle "color" prop', () => {
    const wrapper = shallow(
      <Text />
    );
    const validValues = [...COLORS.keys()];
    validValues.forEach(value => {
      wrapper.setProps({ color: value });
      expect(wrapper.find('span').prop('className')).toContain(`color__${value}`);
    });
    wrapper.setProps({ size: 'invalid' });
    expect(wrapper.find('span').prop('className')).not.toContain('size-invalid');
  });
  it('should handle "weight" prop', () => {
    const wrapper = shallow(
      <Text />
    );
    const validValues = [
      400,
      500,
      600,
      700,
    ];
    validValues.forEach(value => {
      wrapper.setProps({ weight: value });
      expect(wrapper.find('span').prop('className')).toContain(`weight-${value}`);
    });
    wrapper.setProps({ weight: 'invalid' });
    expect(wrapper.find('span').prop('className')).not.toContain('weight-invalid');
  });
  it('should handle "align" prop', () => {
    const wrapper = shallow(
      <Text />
    );
    const validValues = [
      'center',
      'left',
      'right',
      'justify',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ align: value });
      expect(wrapper.find('span').prop('className')).toContain(`align-${value}`);
    });
  });
  it('should handle "italic" prop', () => {
    const wrapper = shallow(
      <Text />
    );
    expect(wrapper.find('span').prop('className')).not.toContain(classes.italic);
    wrapper.setProps({ italic: true });
    expect(wrapper.find('span').prop('className')).toContain(classes.italic);
  });
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Text
        color='additional-red'
        size={24}
        lineHeight={32}
        weight={600}
        children='Test red text'
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "truncate" prop', () => {
    const wrapper = shallow(
      <Text
        truncate
      />
    );
    expect(wrapper.find('span').prop('className')).toContain('truncate');
    wrapper.setProps({ truncate: false });
    expect(wrapper.find('span').prop('className')).not.toContain('truncate');
  });
  it('should handle "nowrap" prop', () => {
    const wrapper = shallow(
      <Text
        nowrap
      />
    );
    expect(wrapper.find('span').prop('className')).toContain('nowrap');
    wrapper.setProps({ nowrap: false });
    expect(wrapper.find('span').prop('className')).not.toContain('nowrap');
  });
});
