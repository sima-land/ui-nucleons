import React from 'react';
import { shallow } from 'enzyme';
import Box from '../index';
import classes from '../box.scss';

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
    expect(wrapper.find('div').prop('className')).toContain(classes.margin__1);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-top__2']);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-right__3']);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-bottom__4']);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-left__5']);

    wrapper.setProps({
      margin: null,
      marginTop: null,
      marginRight: null,
      marginBottom: null,
      marginLeft: null,
      marginX: -6,
      marginY: -7,
    });
    expect(wrapper.find('div').prop('className')).not.toContain(classes.margin__1);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['margin-top__2']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['margin-right__3']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['margin-bottom__4']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['margin-left__5']);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-x__-6']);
    expect(wrapper.find('div').prop('className')).toContain(classes['margin-y__-7']);
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
    expect(wrapper.find('div').prop('className')).toContain(classes.padding__1);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-top__2']);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-right__3']);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-bottom__4']);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-left__5']);

    wrapper.setProps({
      padding: null,
      paddingTop: null,
      paddingRight: null,
      paddingBottom: null,
      paddingLeft: null,
      paddingX: -6,
      paddingY: -7,
    });
    expect(wrapper.find('div').prop('className')).not.toContain(classes.padding__1);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['padding-top__2']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['padding-right__3']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['padding-bottom__4']);
    expect(wrapper.find('div').prop('className')).not.toContain(classes['padding-left__5']);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-x__-6']);
    expect(wrapper.find('div').prop('className')).toContain(classes['padding-y__-7']);
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
});
