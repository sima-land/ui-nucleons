import React from 'react';
import { storiesOf } from '@storybook/react';
import Rating from '../';
import range from 'lodash/range';
import styles from './rating.scss';

const container = {
  padding: '15px',
};

const values = range(0, 5, 0.5);

/**
 * Компонент рейтинга с выбором.
 * @return {ReactElement} Компонент.
 */
class SelectableRating extends React.Component {
  state = {
    rating: 2,
  };

  /**
   * Возвращает компонент рейтинга.
   * @return {ReactElement} Компонент.
   */
  render () {
    return <Rating value={this.state.rating} onStarClick={count => this.setState({ rating: count })} withHover />;
  }
}

storiesOf('Rating', module)
  .add('default', () => (
    <div style={container}>
      {values.map(value => (
        <div key={value}>
          <Rating
            value={value}
          />
        </div>
      ))
      }
    </div>
  ))
  .add('with big star', () => (
    <div style={container}>
      {values.map(value => (
        <div key={value}>
          <Rating
            value={value}
            withBig
          />
        </div>
      ))
      }
    </div>
  ))
  .add('with hover', () => (
    <div style={container}>
      {values.map(value => (
        <div key={value}>
          <Rating
            value={value}
            withHover
          />
        </div>
      ))
      }
    </div>
  ))
  .add('with custom stars count and size', () => (
    <div style={container}>
      <Rating
        value={3.5}
        count={7}
        starSizes={{
          regular: 10,
          big: 15,
        }}
        withBig
        withHover
      />
      <Rating
        value={1.5}
        count={3}
        starSizes={{
          regular: 25,
          big: 35,
        }}
        withBig
        withHover
      />
    </div>
  ))
  .add('with custom classes', () => (
    <div style={container}>
      <Rating
        value={1.5}
        customClasses={{
          rating: styles['doc-rating'],
          hoveredRating: styles['doc-rating-can-be-hovered'],
          star: styles['doc-rating-star'],
          emptyStar: styles['doc-empty-star'],
          halfStar: styles['doc-half-star'],
          fullStar: styles['doc-full-star'],
        }}
        withBig
        withHover
      />
    </div>
  ))
  .add('selectable', () => <SelectableRating />);
