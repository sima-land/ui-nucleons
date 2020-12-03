import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './layout.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Экспериментальная версия обертки которая формирует ширину по Grid Layout.
 * @param {Object} props Свойства.
 * @param {string} [props.element='div'] Тип выводимого элемента например 'div', 'article' или 'main'.
 */
const Layout = forwardRef(function Layout ({
  children,
  className,
  element: Element = 'div',
  ...restProps
}, ref) {
  return (
    <Element
      {...restProps}
      ref={ref}
      className={cx('layout', className)}
    >
      {children}
    </Element>
  );
});

Layout.propTypes = {
  /**
   * Содержимое.
   */
  children: PropTypes.node,

  /**
   * Дополнительный css-класс.
   */
  className: PropTypes.string,

  /**
   * Тип выводимого элемента например 'div', 'article' или 'main'.
   */
  element: PropTypes.string,
};

export default Layout;
