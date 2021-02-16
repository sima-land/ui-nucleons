import React from 'react';
import Rating, { getStarClass } from '..';
import { shallow } from 'enzyme';

describe('<Rating />', () => {
  let rating;
  it('renders correctly without params', () => {
    rating = shallow(<Rating />);

    expect(rating.find('.rating')).toHaveLength(1);
    expect(rating.find('.rating').hasClass('rating-can-be-hovered')).toBeFalsy();

    expect(rating.find('.rating-star')).toHaveLength(5);
    expect(rating.find('.empty-star')).toHaveLength(5);
    expect(rating.find('.empty-star').first().prop('width')).toEqual(16);
    expect(rating.find('.empty-star').first().prop('height')).toEqual(16);

    expect(rating).toMatchSnapshot();
  });
  it('renders correctly with settings', () => {
    rating = shallow(
      <Rating
        value={2.5}
        count={7}
        starSizes={{
          regular: 7,
          big: 15,
        }}
        withBig
        withHover
      />
    );
    expect(rating.find('.rating')).toHaveLength(1);
    expect(rating.find('.rating').hasClass('rating-can-be-hovered')).toBeTruthy();

    expect(rating.find('.rating-star')).toHaveLength(7);
    expect(rating.find('.empty-star')).toHaveLength(4);
    expect(rating.find('.empty-star').first().prop('width')).toEqual(7);
    expect(rating.find('.empty-star').first().prop('height')).toEqual(7);
    expect(rating.find('.half-star')).toHaveLength(1);
    expect(rating.find('.half-star').prop('width')).toEqual(15);
    expect(rating.find('.half-star').prop('height')).toEqual(15);
    expect(rating.find('.full-star')).toHaveLength(2);
    expect(rating.find('.full-star').first().prop('width')).toEqual(7);
    expect(rating.find('.full-star').first().prop('height')).toEqual(7);

    expect(rating).toMatchSnapshot();
  });
  it('renders correctly with custom classes', () => {
    rating = shallow(
      <Rating
        value={1.4}
        withHover
        customClasses={{
          rating: 'test-rating',
          hoveredRating: 'test-hovered',
          star: 'test-star',
          emptyStar: 'test-empty',
          halfStar: 'test-half',
          fullStar: 'test-full',
        }}
      />
    );
    expect(rating).toMatchSnapshot();
  });
  it('calls onStarClick correctly', () => {
    const onClickFn = jest.fn();
    rating = shallow(
      <Rating
        onStarClick={onClickFn}
      />
    );
    expect(rating.find('.rating-star')).toHaveLength(5);
    rating.find('.rating-star').first().simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(1);
    expect(onClickFn).toHaveBeenCalledWith(5);

    rating.find('.rating-star').at(2).simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(2);
    expect(onClickFn.mock.calls[1][0]).toEqual(3);

    rating.find('.rating-star').at(4).simulate('click');
    expect(onClickFn).toHaveBeenCalledTimes(3);
    expect(onClickFn.mock.calls[2][0]).toEqual(1);
  });
});

describe('getStarClass()', () => {
  let starClass;
  const starsClasses = {
    star: 'rating-star',
    emptyStar: 'empty-star',
    halfStar: 'half-star',
    fullStar: 'full-star',
  };
  it('returns empty string if params have not been passed', () => {
    starClass = getStarClass({});
    expect(starClass).toEqual('');
  });
  it('returns classes for empty star properly', () => {
    starClass = getStarClass({ starsClasses, starIndex: 3 });
    expect(starClass).toEqual('rating-star empty-star');
    starClass = getStarClass({ starsClasses, value: 1, starIndex: 3 });
    expect(starClass).toEqual('rating-star empty-star');
  });
  it('returns classes for half star properly', () => {
    starClass = getStarClass({ starsClasses, value: 2.5, starIndex: 3 });
    expect(starClass).toEqual('rating-star half-star');
  });
  it('returns classes for full star properly', () => {
    starClass = getStarClass({ starsClasses, value: 5, starIndex: 3 });
    expect(starClass).toEqual('rating-star full-star');
    starClass = getStarClass({ starsClasses, value: 3, starIndex: 3 });
    expect(starClass).toEqual('rating-star full-star');
  });
});
