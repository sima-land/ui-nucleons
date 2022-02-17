import React from 'react';
import { act, Simulate } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { render } from '@testing-library/react';
import { Avatar } from '../index';

describe('<Avatar />', () => {
  it('should renders without props', () => {
    const wrapper = mount(<Avatar />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Avatar
        size={40}
        imageUrl='www.images.com'
        textColor='basic-white'
        title='Hello World'
        bgColor='additional-teal'
        style={{ clipPath: 'url(#fake-id)' }}
      />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ monogram: 'WH' });

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ color: '#f0f' });

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without image', () => {
    const wrapper = mount(<Avatar size={40} title='Hello World' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without image and title', () => {
    const wrapper = mount(<Avatar size={64} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle wrong size', () => {
    const wrapper = mount(<Avatar size={49.92} title='Jason' />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle image error', () => {
    const wrapper = mount(
      <Avatar size={49.92} title='John Doe' imageUrl='https://www.images.com/random/' />,
    );

    expect(wrapper.find('img')).toHaveLength(1);

    act(() => {
      Simulate.error(wrapper.find('img').getDOMNode());
    });
    wrapper.update();

    expect(wrapper.find('img')).toHaveLength(0);
  });

  it('should handle imageUrl change', () => {
    const wrapper = mount(
      <Avatar size={49.92} title='John Doe' imageUrl='https://www.images.com/random/' />,
    );

    expect(wrapper.find('img')).toHaveLength(1);

    wrapper.setProps({ imageUrl: 'https://www.images.com/other/' });

    expect(wrapper.find('img')).toHaveLength(1);
  });

  it('should handle "data-testid"', async function () {
    const { queryAllByTestId } = render(<Avatar size={40} data-testid='specific-avatar' />);

    expect(queryAllByTestId('avatar')).toHaveLength(0);
    expect(queryAllByTestId('specific-avatar')).toHaveLength(1);
  });
});
