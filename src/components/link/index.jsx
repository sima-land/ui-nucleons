import React, { forwardRef } from 'react';
import PropsTypes from 'prop-types';
import { getNoIndex } from '../helpers/get-no-index';
import { color as getColorClass } from '../styling/colors';
import classNames from 'classnames/bind';
import styles from './link.scss';
import { COLORS } from '../constants';

const cx = classNames.bind(styles);

/**
 * Возвращает объект со свойствами, формирующими содержимое.
 * @param {*} children Содержимое линка.
 * @param {boolean} noIndex Флаг запрета индексации.
 * @return {Object} Объект со свойствами, формирующими содержимое..
 */
const getContentProps = (children, noIndex) => noIndex
  ? { dangerouslySetInnerHTML: getNoIndex(children) }
  : { children };

/**
 * Компонент ссылки.
 * @param {Object} props Свойства компонента. Поддерживаются свойства span/a.
 * @param {boolean} [props.noIndex=false] Запрет индексации названия ссылки поисковиками.
 * @param {*} props.children Содержимое компонента.
 * @param {string} [props.className] Пользовательские классы.
 * @param {string} [props.color='brand-blue'] Цвет.
 * @param {boolean} [props.pseudo] Нужно ли выводить не ссылочный элемент span, стилизованный под ссылку.
 * @param {number} [props.role] Атрибут "role".
 * @param {number} [props.tabIndex] Атрибут "tabindex".
 * @param {Object} ref Реф для DOM-элемента ссылки.
 * @return {ReactElement} Компонент ссылки.
 */
const Link = forwardRef(function Link ({
  children,
  className,
  color = 'brand-blue',
  noIndex = false,
  pseudo,
  role,
  tabIndex,
  ...restProps
}, ref) {
  const baseProps = pseudo
    ? { role: role || 'button', tabIndex: tabIndex || 0 }
    : { role, tabIndex };

  return (
    <a
      {...baseProps}
      {...restProps}
      ref={ref}
      className={cx(
        'link',
        className,
        getColorClass(color),
      )}
      {...getContentProps(children, noIndex)}
    />
  );
});

Link.propTypes = {
  /**
   * Запрет индексации контента.
   */
  noIndex: PropsTypes.bool,

  /**
   * Содержимое компонента.
   */
  children: PropsTypes.any,

  /**
   * Пользовательские классы.
   */
  className: PropsTypes.string,

  /**
   * Цвет.
   */
  color: PropsTypes.oneOf([...COLORS.keys()]),

  /**
   * Нужно ли выводить не ссылочный элемент span, стилизованный под ссылку.
   */
  pseudo: PropsTypes.bool,

  /**
   * Атрибут "role".
   */
  role: PropsTypes.string,

  /**
   * Атрибут "tabindex".
   */
  tabIndex: PropsTypes.number,
};

export default Link;
