import React from 'react';
import { mount } from 'enzyme';
import LoadingOverlay from '../index';

describe('<LoadingOverlay />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <LoadingOverlay />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <LoadingOverlay
        style={{ borderRadius: 12 }}
        className='test-class'
        spinnerProps={{ size: 'small' }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle "fill" prop', () => {
    const wrapper = mount(
      <LoadingOverlay fill />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
