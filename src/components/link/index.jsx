import React from 'react';
import {
  createLinkStyle,
  createLinkTextStyle,
  createExternalStyle,
} from './create-link-style';
import { buildURL } from '../helpers/build-url';
import Type from 'prop-types';
import Icon from '../icon';
import externalIcon from '../icons/external.svg';

export const LINK_TARGETS = ['_blank', '_self'];

/**
 * Компонент ссылки.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {string} [props.className] Пользовательские классы.
 * @param {string} [props.url] Исходный URL.
 * @param {Object} [props.urlParams] Пользовательские параметры.
 * @param {string} [props.anchor] Якорь.
 * @param {string} [props.target] В новую или текущую вкладку откроется ссылка.
 * @param {Function} [props.saveRef] Функция для сохранения текущего Url-a.
 * @param {string} [props.color='blue'] Цвет.
 * @param {boolean} [props.underlined] Подчеркивание.
 * @param {boolean} [props.pseudo] Псевдоссылка.
 * @param {boolean} [props.inline] Свойство inline.
 * @param {boolean} [props.disableHoverEffect] Не реагировать при наведении на компонент.
 * @param {boolean} [props.external=false] Является ли ссылкой на внешний ресурс.
 * @param {boolean} [props.withIcon=external] Является ли ссылкой на внешний ресурс.
 * @param {Object} params Остальные параметры.
 * @param {Function} [props.onClick] Функция, вызываемая при клике.
 * @param {Function} [props.onMouseEnter] Функция, вызываемая при наведении.
 * @param {Function} [props.onMouseLeave] Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент ссылки.
 */
const Link = ({
  children,
  className,
  url,
  urlParams,
  anchor,
  target,
  saveRef,
  color = 'blue',
  underlined,
  pseudo,
  inline,
  disableHoverEffect,
  external = false,
  withIcon = external,
  ...params
}) => {
  let linkParams = params;
  if (!pseudo) {
    const defaultTarget = external ? '_blank' : '_self';
    target = target && LINK_TARGETS.includes(target) ? target : defaultTarget;
    const href = buildURL({ url, urlParams, anchor, external });
    linkParams = { ...params, href, target };
  }

  const underlineType = pseudo ? 'dashed' : 'solid';
  const linkClasses = createLinkStyle({ className, disableHoverEffect, inline });
  const textClasses = createLinkTextStyle({ color, underlineType: underlined && underlineType, external });
  const externalClasses = createExternalStyle(color);
  return (
    <a
      {...linkParams}
      ref={saveRef}
      className={linkClasses}
    >
      <span className={textClasses}>{children}</span>
      {withIcon && (
        <span className={externalClasses}>
          <Icon icon={externalIcon} size={16} inline />
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
  color: Type.oneOf(['black', 'dark-blue', 'blue', 'red', 'gray', 'white']),
  /**
   * Подчеркивание.
   */
  underlined: Type.bool,
  /**
   * Псевдо-ссылка.
   */
  pseudo: Type.bool,
  /**
   * Свойство inline.
   */
  inline: Type.bool,
  /**
   * Не реагировать при наведении на компонент.
   */
  disableHoverEffect: Type.bool,
  /**
   * Является ли ссылкой на внешний ресурс.
   */
  external: Type.bool,
  /**
   *  C иконкой.
   */
  withIcon: Type.bool,
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


