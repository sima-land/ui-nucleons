import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './layout.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент формирующий Layout.
 * @param {string} specificClass Специальный класс.
 * @param {string} displayName Отображаемое имя компонента.
 * @return {import('react').ComponentType} Компонент.
 */
const createLayout = (specificClass, displayName) => {
  const Component = forwardRef(({
    children,
    className,
    element: Element = 'div',
    ...restProps
  }, ref) => (
    <Element
      {...restProps}
      ref={ref}
      className={cx('layout', specificClass, className)}
    >
      {children}
    </Element>
  ));

  Component.propTypes = {
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

  Component.displayName = displayName;

  return Component;
};

const DesktopLayout = createLayout('desktop', 'DesktopLayout');

const MobileLayout = createLayout('mobile', 'MobileLayout');

export { DesktopLayout, MobileLayout };
