import React from 'react';
import { mount } from 'enzyme';
import { DropdownItem } from '..';

describe('DropdownItem', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <DropdownItem />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render as disabled', () => {
    const wrapper = mount(
      <DropdownItem disabled />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with no hover effect', () => {
    const wrapper = mount(
      <DropdownItem noHover />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <DropdownItem className='hello' role='test-role' size='l'>
        Hello, world!
      </DropdownItem>
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle size prop', () => {
    ['s', 'm', 'l', 'xl'].forEach(size => {
      const wrapper = mount(
        <DropdownItem size={size} />
      );

      expect(wrapper).toMatchSnapshot();
    });
  });
});
