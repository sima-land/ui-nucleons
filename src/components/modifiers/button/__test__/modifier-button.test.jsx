import React from 'react';
import { mount, shallow } from 'enzyme';
import ModifierButton from '..';

describe('<ModifierButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <ModifierButton />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render count', () => {
    const wrapper = mount(
      <ModifierButton
        count={12}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ count: undefined });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ count: 123 });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render markdown and count', () => {
    const wrapper = mount(
      <ModifierButton
        count={666}
        isMarkdown
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ count: undefined });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "selected" properly', () => {
    const wrapper = mount(
      <ModifierButton
        selected
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ selected: undefined });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "color" properly', () => {
    const wrapper = mount(
      <ModifierButton
        color='#bada55'
      />
    );
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ color: undefined });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "type" and "content" properly', () => {
    const wrapper = mount(
      <ModifierButton
        type='text'
        content='Test content'
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: 'image', image: 'www.abc.com' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ type: undefined, content: undefined });
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "className" properly', () => {
    const wrapper = mount(
      <ModifierButton
        className='test-class'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should not show title when type is color', () => {
    const wrapper = mount(
      <ModifierButton
        type='color'
        content='content'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "onClick" prop', () => {
    const spy = jest.fn();

    const wrapper = shallow(
      <ModifierButton
        className='test-class'
        content='Test content'
        type='text'
        onClick={spy}
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(spy).toBeCalledTimes(0);

    wrapper.find('.modifier-button').simulate('click');
    expect(spy).toBeCalledTimes(1);
  });
});
