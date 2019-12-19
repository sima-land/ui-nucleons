import React from 'react';
import { mount, shallow } from 'enzyme';
import ModifierButton from '../modifier-button';
import classes from '../../modifiers.scss';

describe('<ModifierButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <ModifierButton />
    );
    expect(wrapper.find(`.${classes['modifier-button']}`)).toHaveLength(1);
  });
  it('should render count', () => {
    const wrapper = mount(
      <ModifierButton
        count={123}
      />
    );
    expect(wrapper.find(`.${classes.count}`)).toHaveLength(1);
    expect(wrapper.find(`.${classes.count}`).text()).toBe('123');
    wrapper.setProps({ count: undefined });
    expect(wrapper.find(`.${classes.count}`)).toHaveLength(0);
  });
  it('should render markdown and count', () => {
    const wrapper = mount(
      <ModifierButton
        count={666}
        isMarkdown
      />
    );
    expect(wrapper.find(`.${classes.count}`)).toHaveLength(1);
    expect(wrapper.find(`.${classes.count}`).text()).toBe('666(У)');
    wrapper.setProps({ count: undefined });
    expect(wrapper.find(`.${classes.count}`)).toHaveLength(0);
  });
  it('should handle "selected" properly', () => {
    const wrapper = mount(
      <ModifierButton
        selected
      />
    );
    expect(wrapper.find(`.${classes.content}`).prop('className')).toContain(classes.selected);
    wrapper.setProps({ selected: undefined });
    expect(wrapper.find(`.${classes.content}`).prop('className')).not.toContain(classes.selected);
  });
  it('should handle "color" properly', () => {
    const wrapper = mount(
      <ModifierButton
        color='#bada55'
      />
    );
    expect(wrapper.find(`.${classes.content}`).prop('style')).toEqual({ backgroundColor: '#bada55' });
    wrapper.setProps({ color: undefined });
    expect(wrapper.find(`.${classes.content}`).prop('style')).toBe(undefined);
  });
  it('should handle "type" and "content" properly', () => {
    const wrapper = mount(
      <ModifierButton
        type='text'
        content='Test content'
      />
    );
    expect(wrapper.find(`span.${classes.text}`)).toHaveLength(1);
    expect(wrapper.find(`img.${classes.image}`)).toHaveLength(0);
    expect(wrapper.find(`span.${classes.text}`).text()).toBe('Test content');
    wrapper.setProps({ type: 'image', image: 'www.abc.com' });
    expect(wrapper.find(`span.${classes.text}`)).toHaveLength(0);
    expect(wrapper.find(`img.${classes.image}`)).toHaveLength(1);
    expect(wrapper.find(`img.${classes.image}`).prop('src')).toBe('www.abc.com');
    wrapper.setProps({ type: undefined, content: undefined });
    expect(wrapper.find(`img.${classes.image}`)).toHaveLength(0);
  });
  it('should handle "className" properly', () => {
    const wrapper = mount(
      <ModifierButton
        className='test-class'
      />
    );
    expect(wrapper.find(`.${classes.content}`).prop('className')).toContain('test-class');
  });
  it('should not show title when type is color', () => {
    const wrapper = mount(
      <ModifierButton
        type='color'
        content='content'
      />
    );
    expect(wrapper.find(`span.${classes.text}`)).toHaveLength(0);
  });
  it('should handle "wrapperClassName" properly', () => {
    const wrapper = mount(
      <ModifierButton
        wrapperClassName='test-class'
      />
    );
    expect(wrapper.find(`.${classes['modifier-button']}`).prop('className')).toContain('test-class');
  });
  it('should match snapshot', () => {
    const spy = jest.fn();
    const wrapper = shallow(
      <ModifierButton
        ref={spy}
        className='test-class'
        content='Test content'
        type='text'
        onClick={() => {}}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
