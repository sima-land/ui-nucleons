import React from 'react';
import has from 'lodash/has';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';

import classes from './spinner.scss';

const cx = classnames.bind(classes);

export const DIAMETERS = Object.freeze({
  small: 20,
  medium: 48,
  large: 80,
});

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
  className,
  style,
}) => {
  const readySize = has(DIAMETERS, size) ? size : 'medium';
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={className} style={style}>
      <svg
        className={cx('spinner', `size-${readySize}`)}
        viewBox={`0 0 ${diameter} ${diameter}`}
        xmlns='http://www.w3.org/2000/svg'
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
  /**
   * Размер.
   */
  size: PropTypes.string,

  /**
   * CSS-класс элемента-обертки.
   */
  className: PropTypes.string,

  /**
   * Стили элемента-обертки.
   */
  style: PropTypes.object,
};
