import React from 'react';
import classes from './spinner.scss';
import classnames from 'classnames/bind';
import spinnerIcon from '../icons/spinner.svg';
import Icon from '../icon';
import Type from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Размеры иконок.
 * @type {Object}
 */
export const SIZES = Object.freeze({
  small: 20,
  medium: 48,
  big: 80,
});

/**
 * Компонент спиннера.
 * @param {Object} props Свойства компонента.
 * @param {'small'|'medium'|'big'} props.size Размер спиннера.
 * @param {string} props.className Дополнительный класс.
 * @return {ReactElement} Компонент.
 */
const Spinner = ({
  size = 'medium',
  className,
}) => (
  <div className={className}>
    <Icon
      icon={spinnerIcon}
      size={SIZES[size] || SIZES.medium}
      className={cx('icon')}
    />
  </div>
);

Spinner.propTypes = {
  /**
   * Размер спиннера.
   */
  size: Type.string,

  /**
   * Дополнительный класс.
   */
  className: Type.string,
};

export default Spinner;
