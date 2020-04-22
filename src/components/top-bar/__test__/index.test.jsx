import React from 'react';
import { mount } from 'enzyme';
import TopBar from '../index';
import { sizes, shortTitles, allIcons, startIcons, endIcons } from '../__test__/props.jsx';

describe('<TopBar />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <TopBar />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with title and subtitle', () => {
    const wrapper = mount(
      <TopBar {...shortTitles} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "size" prop', () => {
    const wrapper = mount(
      <TopBar {...shortTitles} />
    );

    sizes.forEach(size => {
      wrapper.setProps({ size });
      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should renders with start icon', () => {
    const wrapper = mount(
      <TopBar
        startIcon={allIcons.startIcon}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icon', () => {
    const wrapper = mount(
      <TopBar
        endIcon={allIcons.endIcon}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with start icons', () => {
    const wrapper = mount(
      <TopBar
        {...startIcons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with end icons', () => {
    const wrapper = mount(
      <TopBar
        {...endIcons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should renders with all icons', () => {
    const wrapper = mount(
      <TopBar
        {...allIcons}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
