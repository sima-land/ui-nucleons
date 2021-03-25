import React from 'react';
import { mount } from 'enzyme';
import TouchSlider from '..';

describe('<TouchSlider />', () => {
  it('should renders correctly', () => {
    const wrapper = mount(
      <TouchSlider>
        <div>Foo</div>
        <div>Bar</div>
        <div>Baz</div>
      </TouchSlider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
