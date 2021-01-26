import React from 'react';
import { shallow } from 'enzyme';
import Box from '../index';
import { bgColor } from '../../styling/colors';

describe('<Box />', () => {
  it('should render without props', () => {
    const wrapper = shallow(
      <Box />
    );
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should handle "element" prop', () => {
    const wrapper = shallow(
      <Box element='section' />
    );
    expect(wrapper.find('div')).toHaveLength(0);
    expect(wrapper.find('section')).toHaveLength(1);

    wrapper.setProps({ element: undefined });
    expect(wrapper.find('div')).toHaveLength(1);
    expect(wrapper.find('section')).toHaveLength(0);
  });
  it('should handle "children" prop', () => {
    const wrapper = shallow(
      <Box>Test</Box>
    );
    expect(wrapper.find('div').text()).toBe('Test');
  });
  it('should handle "margin*" props', () => {
    const wrapper = shallow(
      <Box
        margin={1}
        marginTop={2}
        marginRight={3}
        marginBottom={4}
        marginLeft={5}
      />
    );
    expect(wrapper.find('div').prop('className')).toBe(
      'M-t__2 M-r__3 M-b__4 M-l__5'
    );

    wrapper.setProps({
      margin: null,
      marginTop: null,
      marginRight: null,
      marginBottom: null,
      marginLeft: null,
      marginX: -6,
      marginY: -7,
    });
    expect(wrapper.find('div').prop('className')).toBe(
      'M-l__-6 M-r__-6 M-t__-7 M-b__-7'
    );

    wrapper.setProps({
      margin: 8,
      marginTop: undefined,
      marginRight: undefined,
      marginBottom: undefined,
      marginLeft: undefined,
      marginX: undefined,
      marginY: undefined,
    });
    expect(wrapper.find('div').prop('className')).toBe(
      'M-t__8 M-b__8 M-l__8 M-r__8'
    );
  });
  it('should handle "padding*" props', () => {
    const wrapper = shallow(
      <Box
        padding={1}
        paddingTop={2}
        paddingRight={3}
        paddingBottom={4}
        paddingLeft={5}
      />
    );
    expect(wrapper.find('div').prop('className')).toBe(
      'P-t__2 P-r__3 P-b__4 P-l__5'
    );

    wrapper.setProps({
      padding: null,
      paddingTop: null,
      paddingRight: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingX: -6,
      paddingY: -7,
    });
    expect(wrapper.find('div').prop('className')).toBe('');

    wrapper.setProps({
      padding: null,
      paddingTop: null,
      paddingRight: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingX: 3,
      paddingY: 2,
    });
    expect(wrapper.find('div').prop('className')).toBe(
      'P-l__3 P-r__3 P-t__2 P-b__2'
    );

    wrapper.setProps({
      padding: 8,
      paddingTop: undefined,
      paddingRight: undefined,
      paddingBottom: undefined,
      paddingLeft: undefined,
      paddingX: undefined,
      paddingY: undefined,
    });
    expect(wrapper.find('div').prop('className')).toBe(
      'P-t__8 P-b__8 P-l__8 P-r__8'
    );
  });
  it('should handle "display" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    const validValues = [
      'block',
      'none',
      'flex',
      'inline',
      'inline-block',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ display: value });
      expect(wrapper.find('div').prop('className')).toContain(`display-${value}`);
    });
    wrapper.setProps({ display: 'invalid' });
    expect(wrapper.find('div').prop('className')).not.toContain('display-invalid');
  });
  it('should handle "flex" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    const validValues = [
      'shrink',
      'grow',
      'none',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ flex: value });
      expect(wrapper.find('div').prop('className')).toContain(`flex-${value}`);
    });
    wrapper.setProps({ flex: 'invalid' });
    expect(wrapper.find('div').prop('className')).not.toContain('flex-invalid');
  });
  it('should handle "wrap" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    expect(wrapper.find('div').prop('className')).not.toContain('flex-wrap');
    wrapper.setProps({ wrap: true });
    expect(wrapper.find('div').prop('className')).toContain('flex-wrap');
  });
  it('should handle "direction" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    const validValues = [
      'row',
      'column',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ direction: value });
      expect(wrapper.find('div').prop('className')).toContain(`direction-${value}`);
    });
    wrapper.setProps({ direction: 'invalid' });
    expect(wrapper.find('div').prop('className')).not.toContain('direction-invalid');
  });
  it('should handle "alignItems" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    const validValues = [
      'start',
      'end',
      'center',
      'baseline',
      'stretch',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ alignItems: value });
      expect(wrapper.find('div').prop('className')).toContain(`align-items-${value}`);
    });
    wrapper.setProps({ alignItems: 'invalid' });
    expect(wrapper.find('div').prop('className')).not.toContain('align-items-invalid');
  });
  it('should handle "justifyContent" prop', () => {
    const wrapper = shallow(
      <Box />
    );
    const validValues = [
      'start',
      'end',
      'center',
      'between',
      'around',
    ];
    validValues.forEach(value => {
      wrapper.setProps({ justifyContent: value });
      expect(wrapper.find('div').prop('className')).toContain(`justify-content-${value}`);
    });
    wrapper.setProps({ justifyContent: 'invalid' });
    expect(wrapper.find('div').prop('className')).not.toContain('justify-content-invalid');
  });
  it('should handle "color" prop', () => {
    const wrapper = shallow(
      <Box color='additional-red' />
    );

    expect(wrapper.find('div').prop('className')).toContain(bgColor('additional-red'));
  });
});
