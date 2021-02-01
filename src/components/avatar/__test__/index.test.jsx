import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { Avatar } from '../index';
import UpSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/Arrows/up';

describe('<Avatar />', () => {
  it('should renders without props', () => {
    const wrapper = mount(
      <Avatar />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Avatar
        size={40}
        imageUrl='www.images.com'
        color='brand-blue'
        textColor='white'
        title='Hello World'
        icon={UpSVG}
        bgColor='additional-teal'
        bgOpacity={0.48}
        style={{ clipPath: 'url(#fake-id)' }}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ monogram: 'WH' });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ color: '#f0f' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without image', () => {
    const wrapper = mount(
      <Avatar
        size={40}
        title='Hello World'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without image and title', () => {
    const wrapper = mount(
      <Avatar size={64} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle wrong size', () => {
    const wrapper = mount(
      <Avatar
        size={49.92}
        title='Jason'
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle image error', () => {
    const wrapper = mount(
      <Avatar
        size={49.92}
        title='John Doe'
        imageUrl='https://www.images.com/random/'
      />
    );

    expect(wrapper.find('img')).toHaveLength(1);

    act(() => {
      Simulate.error(wrapper.find('img').getDOMNode());
    });
    wrapper.update();

    expect(wrapper.find('img')).toHaveLength(0);
  });
});
