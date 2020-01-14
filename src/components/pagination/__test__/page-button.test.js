import React from 'react';
import { mount } from 'enzyme';
import { PageButton } from '../page-button';

describe('<PageButton />', () => {
  it('should render without props', () => {
    const wrapper = mount(
      <PageButton />
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle "selected" prop', () => {
    const wrapper = mount(
      <PageButton selected />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ selected: false });
    expect(wrapper).toMatchSnapshot();
  });
  it('should handle regular button props', () => {
    const spy = jest.fn();
    const wrapper = mount(
      <PageButton disabled onClick={spy} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
