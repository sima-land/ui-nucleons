import React from 'react';
import Icon from '../icon';
import star from '../icons/star.svg';
import styles from './rating.scss';
import Type from 'prop-types';
import isFunction from 'lodash/isFunction';
import range from 'lodash/range';
import classNames from 'classnames/bind';
import composeClasses from '../helpers/compose-classes';

const cx = classNames.bind(styles);
const DEFAULT_CLASSES = {
  rating: styles.rating,
  hoveredRating: styles['rating-can-be-hovered'],
  star: styles['rating-star'],
  emptyStar: styles['empty-star'],
  halfStar: styles['half-star'],
  fullStar: styles['full-star'],
};

/**
 * Функция для получения классов звезды.
 * @param {Object} params Параметры.
 * @param {number} params.starIndex Значение текущей звезды.
 * @param {number} [params.value] Значение рейтинга.
 * @param {Object} [params.starsClasses={}] Классы для звёзд.
 * @return {string} Классы звезды.
 */
export const getStarClass = ({ starIndex, value, starsClasses = {} }) => {
  const {
    star: starClasses,
    emptyStar: emptyStarClasses,
    halfStar: halfStarClasses,
    fullStar: fullStarClasses,
  } = starsClasses;

  let starClass = cx(starClasses, emptyStarClasses);
  if (value >= starIndex) {
    starClass = cx(starClasses, fullStarClasses);
  } else if (
    Math.ceil(value) === starIndex
    && Math.ceil(value) !== Math.floor(value)
  ) {
    starClass = cx(starClasses, halfStarClasses);
  }
  return starClass;
};

/**
 * Компонент рейтинга.
 * @param {Object} props Свойства компонента.
 * @param {number} [props.value] Значение рейтинга.
 * @param {number} [props.count=5] Общее количество звезд рейтинга.
 * @param {Object} [props.starSizes] Размеры звезд.
 * @param {number} [props.starSizes.regular=16] Обычная звезда.
 * @param {number} [props.starSizes.big=20] Увеличенная.
 * @param {boolean} [props.withBig] Увеличивать звезду со значением рейтинга.
 * @param {boolean} [props.withHover] С эффектом при наведении.
 * @param {Object} [props.customClasses={}] Пользовательские классы.
 * @param {Object} [props.customClasses.rating] Классы для блока рейтинга.
 * @param {Object} [props.customClasses.hoveredRating] Классы для блока рейтинга с эффектом наведения.
 * @param {Object} [props.customClasses.star] Классы для звезды.
 * @param {Object} [props.customClasses.emptyStar] Классы для пустой звезды.
 * @param {Object} [props.customClasses.halfStar] Классы для наполовину заполненной звезды.
 * @param {Object} [props.customClasses.fullStar] Классы для заполненной звезды.
 * @param {Function} [props.onStarClick] Функция, вызываемая при клике на звезду.
 * @return {ReactElement} Компонент рейтинга.
 */
const Rating = ({
  value,
  count = 5,
  starSizes = {
    regular: 16,
    big: 20,
  },
  withBig,
  withHover,
  customClasses = {},
  onStarClick,
}) => {
  const newClasses = composeClasses({ defaultClasses: DEFAULT_CLASSES, customClasses });
  const {
    rating: ratingClasses,
    hoveredRating: hoveredRatingClasses,
    ...starsClasses
  } = newClasses;
  const wrapperClasses = cx(ratingClasses, {
    [hoveredRatingClasses]: withHover,
  });
  const { regular, big } = starSizes;
  return (
    <div className={wrapperClasses}>
      {range(count, 0).map(starIndex => (
        <Icon
          icon={star}
          key={starIndex}
          className={getStarClass({ starIndex, value, starsClasses })}
          onClick={() => isFunction(onStarClick) && onStarClick(starIndex)}
          size={withBig && starIndex === Math.ceil(value) ? big : regular}
          inline
        />
      ))}
    </div>
  );
};

Rating.propTypes = {
  /**
   * Значение рейтинга.
   */
  value: Type.number,

  /**
   * Общее количество звезд рейтинга.
   */
  count: Type.number,

  /**
   * Размеры звезд.
   */
  starSizes: Type.shape({
    /**
     * Обычная звезда.
     */
    regular: Type.number,

    /**
     * Увеличенная.
     */
    big: Type.number,
  }),

  /**
   * Увеличивать звезду со значением рейтинга.
   */
  withBig: Type.bool,

  /**
   * С эффектом при наведении.
   */
  withHover: Type.bool,

  /**
   * Пользовательские классы.
   */
  customClasses: Type.shape({
    /**
     * Классы для блока рейтинга.
     */
    rating: Type.string,

    /**
     * Классы для блока рейтинга с эффектом наведения.
     */
    hoveredRating: Type.string,

    /**
     * Классы для звезды.
     */
    star: Type.string,

    /**
     * Классы для пустой звезды.
     */
    emptyStar: Type.string,

    /**
     * Классы для наполовину заполненной звезды.
     */
    half: Type.string,

    /**
     * Классы для заполненной звезды.
     */
    fullStar: Type.string,
  }),

  /**
   * Функция, вызываемая при клике на звезду.
   */
  onStarClick: Type.func,
};

export default Rating;
