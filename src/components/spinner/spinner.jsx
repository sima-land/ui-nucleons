import React from 'react';
import has from 'lodash/has';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import classes from './spinner.scss';
import { stroke } from '../styling/colors';

const cx = classnames.bind(classes);

export const DIAMETERS = Object.freeze({
  small: 20,
  medium: 48,
  large: 80,
});

const DEFAULT_COLOR = 'brand-blue';
const COLORS = ['brand-blue', 'white'];

/**
 * Компонент спиннера.
 * @param {Object} props Свойства компонента.
 * @param {'small'|'medium'|'large'} props.size Размер.
 * @param {string} props.className CSS-класс элемента-обертки.
 * @param {Object} props.style Стили элемента-обертки.
 * @return {ReactElement} Компонент.
 */
export const Spinner = ({
  size = 'medium',
  color = DEFAULT_COLOR,
  className,
  style,
}) => {
  const readySize = has(DIAMETERS, size) ? size : 'medium';
  const readyColor = COLORS.includes(color) ? color : DEFAULT_COLOR;
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={className} style={style}>
      <svg
        className={cx('spinner', `size-${readySize}`)}
        viewBox={`0 0 ${diameter} ${diameter}`}
        width={diameter}
        height={diameter}
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
          className={cx('circle', stroke(readyColor))}
          cx={radius}
          cy={radius}
          r={radius - 1} // учет обводки
        />
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  /**
   * Размер.
   */
  size: PropTypes.string,

  /**
   * Цвет.
   */
  color: PropTypes.oneOf(COLORS),

  /**
   * CSS-класс элемента-обертки.
   */
  className: PropTypes.string,

  /**
   * Стили элемента-обертки.
   */
  style: PropTypes.object,
};
