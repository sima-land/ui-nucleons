import React from 'react';
import classnames from 'classnames/bind';
import styles from './dropdown-item.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Компонент элемента выпадающего списка.
 * @param {Object} props Свойства.
 * @param {'s'|'m'|'l'|'xl'} [props.size='m'] Размер.
 * @param {*} props.children Содержимое.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Элемент выпадающего списка.
 */
export const DropdownItem = ({
  size = 'm',
  children,
  className,
  ...restProps
}) => (
  <div
    {...restProps}
    className={cx('root', `size-${size}`, className)}
  >
    {children}
  </div>
);

DropdownItem.propTypes = {
  /**
   * Размер.
   */
  size: PropTypes.oneOf(['s', 'm', 'l']),

  /**
   * Содержимое.
   */
  children: PropTypes.node,

  /**
   * Класс.
   */
  className: PropTypes.string,
};
