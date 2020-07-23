import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Avatar from '../index';

describe('<Avatar />', () => {
  let originalImage;

  beforeAll(() => {
    originalImage = global.Image;
    global.Image = class FakeImage {
      constructor () {
        setTimeout(() => {
          this.onload && this.onload();
        }, 500);
      }
    };
  });

  afterAll(() => {
    global.Image = originalImage;
  });

  jest.useFakeTimers();

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
        iconProps={{ size: 16 }}
        textProps={{ className: 'text-class' }}
        bgStyle={{ opacity: 0.4 }}
        clipStyle={{ clipPath: 'url(#fake-id)' }}
      />
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ monogram: 'WH' });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ color: '#f0f' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render image after it loaded', () => {
    const wrapper = mount(
      <Avatar
        title='John Doe'
        monogram='JD'
        imageUrl='https://test-cdn/'
      />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('image')).toHaveLength(0);

    act(() => {
      jest.runAllTimers();
      wrapper.update();
    });

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('image')).toHaveLength(1);
  });
});
