import React from 'react';
import { mount } from 'enzyme';
import MobileLayout from '../';

describe('<MobileLayout />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <MobileLayout />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle Layout props', () => {
    const wrapper = mount(
      <MobileLayout>
        <div>Foo</div>
        <div>Bar</div>
        <div>Baz</div>
      </MobileLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
