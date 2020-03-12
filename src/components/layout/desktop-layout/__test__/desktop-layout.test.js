import React from 'react';
import { mount } from 'enzyme';
import DesktopLayout from '../';

describe('<DesktopLayout />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <DesktopLayout />
    );

    expect(wrapper).toMatchSnapshot();
  });
  it('should handle Layout props', () => {
    const wrapper = mount(
      <DesktopLayout>
        <div>Foo</div>
        <div>Bar</div>
        <div>Baz</div>
      </DesktopLayout>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
