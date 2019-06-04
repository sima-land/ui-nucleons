import React from 'react';
import {
  createLinkStyle,
  createLinkTextStyle,
  createExternalStyle,
} from '../create-link-style';
import { buildURL } from '../../helpers/build-url';
import Type from 'prop-types';
import Icon from '../../icon';
import externalIcon from '../../icons/external.svg';

export const LINK_TARGETS = ['_blank', '_self'];

/**
 * Компонент ссылки.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {string} props.className Пользовательские классы.
 * @param {string} props.url Исходный URL.
 * @param {Object} props.urlParams Пользовательские параметры.
 * @param {string} props.anchor Якорь.
 * @param {boolean} props.external Внешний ресурс.
 * @param {string} props.target В новую или текущую вкладку откроется ссылка.
 * @param {Function} props.saveRef Функция для сохранения текущего Url-a.
 * @param {string} props.color Цвет.
 * @param {boolean} props.underlined Подчеркивание.
 * @param {boolean} props.inline Свойство inline.
 * @param {boolean} props.relative Относительное позиционирование.
 * @param {boolean} props.disableHoverEffect Не реагировать при наведении на компонент.
 * @param {boolean} props.noIcon Без иконки.
 * @param {Object} params Остальные параметры.
 * @param {Function} props.onClick Функция, вызываемая при клике.
 * @param {Function} props.onMouseEnter Функция, вызываемая при наведении.
 * @param {Function} props.onMouseLeave Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент ссылки.
 */
const Link = ({
  children,
  className,
  url,
  urlParams,
  anchor,
  external,
  target,
  saveRef,
  color = 'blue',
  underlined,
  inline,
  relative,
  disableHoverEffect,
  noIcon,
  ...params
}) => {
  const defaultTarget = external ? '_blank' : '_self';
  target = LINK_TARGETS.includes(target) ? target : defaultTarget;
  const href = buildURL({ url, urlParams, anchor, external });

  const linkClasses = createLinkStyle({ className, disableHoverEffect, inline, relative });
  const textClasses = createLinkTextStyle({ color, underlineType: underlined && 'solid', external });
  const externalClasses = createExternalStyle(color);
  return (
    <a
      {...params}
      href={href}
      ref={saveRef}
      target={target}
      className={linkClasses}
    >
      <span className={textClasses}>{children}</span>
      {external && !noIcon && (
        <span className={externalClasses}>
          <Icon icon={externalIcon} size={16} inline/>
        </span>
      )}
    </a>
  );
};

Link.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,
  /**
   * Пользовательские классы.
   */
  className: Type.string,
  /**
   * Исходный URL.
   */
  url: Type.string,
  /**
   * Пользовательские параметры.
   */
  urlParams: Type.object,
  /**
   * Якорь.
   */
  anchor: Type.string,
  /**
   * Является ли внешним ресурсом.
   */
  external: Type.bool,
  /**
   * В новую или текущую вкладку откроется ссылка.
   */
  target: Type.oneOf(['_blank', '_self']),
  /**
   * Функция для сохранения текущего Url-a.
   */
  saveRef: Type.func,
  /**
   * Цвет.
   */
  color: Type.oneOf(['blue', 'white', 'black', 'red', 'gray', 'dark-blue']),
  /**
   * Подчеркивание.
   */
  underlined: Type.bool,
  /**
   * Свойство inline.
   */
  inline: Type.bool,
  /**
   *  Относительное позиционирование.
   */
  relative: Type.bool,
  /**
   * Не реагировать при наведении на компонент.
   */
  disableHoverEffect: Type.bool,
  /**
   *  Без иконки.
   */
  noIcon: Type.bool,
  /**
   * Функция, вызываемая при клике.
   */
  onClick: Type.func,
  /**
   * Функция, вызываемая при наведении.
   */
  onMouseEnter: Type.func,
  /**
   * Функция, вызываемая при покидании области кнопки.
   */
  onMouseLeave: Type.func,
};

export default Link;


