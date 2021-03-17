import React from 'react';
import Rating from '..';
import { mount } from 'enzyme';

describe('<Rating />', () => {
  it('renders correctly without params', () => {
    const wrapper = mount(<Rating value={0} />);

    expect(wrapper.find('.rating')).toHaveLength(1);
    expect(wrapper.find('.rating').hasClass('rating-can-be-hovered')).toBeFalsy();

    expect(wrapper.find('svg.rating-star')).toHaveLength(5);
    expect(wrapper.find('svg.empty-star')).toHaveLength(5);
    expect(wrapper.find('svg.empty-star').first().prop('width')).toEqual(16);
    expect(wrapper.find('svg.empty-star').first().prop('height')).toEqual(16);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle props', () => {
    const wrapper = mount(
      <Rating
        value={2.5}
        count={7}
        starSize={32}
        withHover
      />
    );

    expect(wrapper.find('.rating')).toHaveLength(1);
    expect(wrapper.find('.rating').hasClass('rating-can-be-hovered')).toBeTruthy();

    expect(wrapper.find('svg.rating-star')).toHaveLength(7);
    expect(wrapper.find('svg.empty-star')).toHaveLength(4);
    expect(wrapper.find('svg.empty-star').first().prop('width')).toEqual(32);
    expect(wrapper.find('svg.empty-star').first().prop('height')).toEqual(32);
    expect(wrapper.find('svg.half-star')).toHaveLength(1);
    expect(wrapper.find('svg.half-star').prop('width')).toEqual(32);
    expect(wrapper.find('svg.half-star').prop('height')).toEqual(32);
    expect(wrapper.find('svg.full-star')).toHaveLength(2);
    expect(wrapper.find('svg.full-star').first().prop('width')).toEqual(32);
    expect(wrapper.find('svg.full-star').first().prop('height')).toEqual(32);

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly with custom classes', () => {
    const wrapper = mount(
      <Rating
        value={1.4}
        withHover
        classes={{
          rating: 'test-rating',
          hoveredRating: 'test-hovered',
          star: 'test-star',
          emptyStar: 'test-empty',
          halfStar: 'test-half',
          fullStar: 'test-full',
        }}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('calls onStarClick correctly', () => {
    const onClickFn = jest.fn();
    const wrapper = mount(
      <Rating
        value={0}
        onStarClick={onClickFn}
      />
    );

    expect(wrapper.find('svg.rating-star')).toHaveLength(5);
    wrapper.find('.rating-star').first().simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(1);
    expect(onClickFn).toHaveBeenCalledWith(5);

    wrapper.find('svg.rating-star').at(2).simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(2);
    expect(onClickFn.mock.calls[1][0]).toEqual(3);

    wrapper.find('svg.rating-star').at(4).simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(3);
    expect(onClickFn.mock.calls[2][0]).toEqual(1);
  });
});
