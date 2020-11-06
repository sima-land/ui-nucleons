import React, { useRef } from 'react';
import { times } from 'lodash';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './dot-nav.scss';

const itemSize = 14;
const maxWidth = itemSize * 5;

const cx = classnames.bind(classes);

/**
 * Компонент точек навигации для каруселей и слайдеров.
 * @param {Object} props Свойства.
 * @param {number} props.current Индекс выбранной точки.
 * @param {number} props.total Количество точек.
 * @param {Function} props.onSelect Сработает при выборе точки.
 * @return {ReactElement} Компонент точек навигации.
 */
const DotNav = ({ current = 0, total = 1, onSelect }) => {
  const withShift = total > 4;

  const shift = useShift(current, total);
  const correction = withShift ? itemSize : (maxWidth - (itemSize * total)) / 2;

  return (
    <div className={cx('wrapper')}>
      {times(total).map(index => {
        const position = index - shift + 1;

        return (
          <div
            key={index}
            style={{
              left: `${correction + ((index - shift) * itemSize)}px`,
            }}
            onClick={() => onSelect && onSelect(index)}
            className={cx(
              'item',
              index === current && 'current',
              withShift && (position <= 0 || position >= 4) && 'distant'
            )}
          />
        );
      })}
    </div>
  );
};

DotNav.propTypes = {
  /**
   * Индекс выбранной точки.
   */
  current: PropTypes.number,

  /**
   * Количество точек.
   */
  total: PropTypes.number,

  /**
   * Сработает при выборе точки.
   */
  onSelect: PropTypes.func,
};

/**
 * Определяет необходимое для точек навигации смещение.
 * @param {number} current Индекс выбранной точки.
 * @param {number} total Количество точек.
 * @return {number} Смещение.
 */
const useShift = (current, total) => {
  const shiftRef = useRef(0);
  const prevCurrentRef = useRef(0);

  if (total > 4) {
    const currentPos = current - shiftRef.current;
    const prevCurrent = prevCurrentRef.current;
    const prevCurrentPos = prevCurrent - shiftRef.current;

    let newShift = shiftRef.current;

    if (currentPos > 2) {
      const correction = Math.max(prevCurrentPos, 2) + shiftRef.current - prevCurrent;
      newShift += current - prevCurrent - correction;
    } else if (currentPos < 0) {
      const correction = Math.min(prevCurrentPos, 0) + shiftRef.current - prevCurrent;
      newShift -= prevCurrent - current + correction;
    }

    shiftRef.current = newShift;
  }

  prevCurrentRef.current = current;

  return shiftRef.current;
};

export default DotNav;
