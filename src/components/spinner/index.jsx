import React from 'react';
import has from 'lodash/has';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import { COLORS } from '../constants';
import classes from './spinner.scss';

const cx = classnames.bind(classes);

export const DIAMETERS = Object.freeze({
  small: 20,
  medium: 48,
  large: 80,
});

const DEFAULT_COLOR = 'brand-blue';
const AVAILABLE_COLORS = ['brand-blue', 'white'];

/**
 * Компонент спиннера.
 * @param {Object} props Свойства компонента.
 * @param {'small'|'medium'|'large'} props.size Размер.
 * @param {string} props.className CSS-класс элемента-обертки.
 * @param {Object} props.style Стили элемента-обертки.
 * @param {'brand-blue' | 'white'} props.color Цвет.
 * @return {ReactElement} Компонент.
 */
export const Spinner = ({
  size = 'medium',
  color = DEFAULT_COLOR,
  className,
  style,
}) => {
  const readySize = has(DIAMETERS, size) ? size : 'medium';
  const readyColor = AVAILABLE_COLORS.includes(color) ? color : DEFAULT_COLOR;
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={className} style={style}>
      <svg
        className={cx('spinner', `size-${readySize}`)}
        viewBox={`0 0 ${diameter} ${diameter}`}
        width={diameter}
        height={diameter}
        stroke={COLORS.get(readyColor)}
      >
        <circle
          className={cx('circle')}
          cx={radius}
          cy={radius}
          r={radius - 1} // учет обводки
        />
      </svg>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  color: PropTypes.oneOf(AVAILABLE_COLORS),
  className: PropTypes.string,
  style: PropTypes.object,
};
