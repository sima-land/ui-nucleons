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
 * @param {boolean} props.disabled Отключен ли элемент.
 * @param {boolean} props.noHover Нужно ли отключить эффект при наведении.
 * @return {ReactElement} Элемент выпадающего списка.
 */
export const DropdownItem = ({
  size = 'm',
  children,
  className,
  disabled,
  noHover,
  ...restProps
}) => (
  <div
    {...restProps}
    className={cx(
      'root',
      `size-${size}`,
      disabled && 'disabled',
      noHover && 'no-hover',
      className
    )}
  >
    {children}
  </div>
);

DropdownItem.propTypes = {
  size: PropTypes.oneOf(['s', 'm', 'l', 'xl']),
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  noHover: PropTypes.bool,
};
