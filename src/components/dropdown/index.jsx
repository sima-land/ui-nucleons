import React, { forwardRef } from 'react';
import { BoxShadow } from '../styling/shadows';
import styles from './dropdown.scss';
import classnames from 'classnames/bind';
import { MediumRounds } from '../styling/shapes';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Компонент выпадающего контента.
 * @param {*} props.children Содержимое.
 * @param {boolean} [props.withShadow=true] Нужна ли тень.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Компонент.
 */
export const Dropdown = forwardRef(function Dropdown ({
  children,
  withShadow = true,
  className,
  ...restProps
}, ref) {
  return (
    <div
      {...restProps}
      ref={ref}
      className={cx(
        'root',
        'invisible-scroll',
        withShadow && BoxShadow.z4,
        MediumRounds.all,
        className
      )}
    >
      {children}
    </div>
  );
});

Dropdown.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.node,

  /**
   * Нужна ли тень.
   */
  withShadow: PropTypes.bool,

  /**
   * Класс.
   */
  className: PropTypes.string,
};
