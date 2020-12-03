import React from 'react';
import { mount } from 'enzyme';
import BorderedLayout from '..';

describe('<BoBorderedLayoutrder />', () => {
  it('without props', () => {
    const wrapper = mount(
      <BorderedLayout>Hello, world</BorderedLayout>
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ top: true, bottom: false });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ top: false, bottom: true });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ top: true, bottom: true });
    expect(wrapper).toMatchSnapshot();
  });
});
