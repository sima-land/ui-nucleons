import React, { useState } from 'react';
import { Rating } from '..';
import range from 'lodash/range';
import styles from './custom-rating.scss';

const values = range(0, 5, 0.5);

export default {
  title: 'Rating',
  component: Rating,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
  <>
    {values.map(value => (
      <div key={value} style={{ display: 'flex', marginBottom: 16 }}>
        <div style={{ width: 48 }}>{value}</div>
        <Rating value={value} />
      </div>
    ))}
  </>
);

export const WithHover = () => (
  <>
    {values.map(value => (
      <div key={value}>
        <Rating
          value={value}
          withHover
        />
      </div>
    ))
    }
  </>
);

export const CustomStarCountAndSize = () => (
  <>
    <Rating
      value={3.5}
      count={7}
      starSize={32}
      withHover
    />
  </>
);

export const CustomClasses = () => (
  <>
    <Rating
      value={1.5}
      starSize={32}
      classes={{
        rating: styles['doc-rating'],
        hoveredRating: styles['doc-rating-can-be-hovered'],
        star: styles['doc-rating-star'],
        emptyStar: styles['doc-empty-star'],
        halfStar: styles['doc-half-star'],
        fullStar: styles['doc-full-star'],
      }}
      withHover
    />
  </>
);

export const Select = () => {
  const [state, setState] = useState(2);

  return (
    <Rating
      starSize={36}
      value={state}
      onStarClick={count => setState(count)}
      withHover
    />
  );
};
