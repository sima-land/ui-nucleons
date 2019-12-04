import React, { forwardRef } from 'react';
import {
  createLinkStyle,
  createLinkTextStyle,
  createExternalStyle,
} from './create-link-style';
import Type from 'prop-types';
import Icon from '../icon';
import externalIcon from '../icons/external.svg';
import { getNoIndex } from '../helpers/get-no-index';

export const LINK_TARGETS = ['_blank', '_self'];

/**
 * Возвращает объект с контентом.
 * @param {boolean} disableIndexing Флаг запрета индексации.
 * @param {*} children Содержимое линка.
 * @return {Object} Объект с нужным пропом для вывода контента.
 */
export const getContent = (disableIndexing, children) =>
  disableIndexing ? { dangerouslySetInnerHTML: getNoIndex(children) } : { children };

/**
 * Компонент ссылки.
 * @param {Object} props Свойства компонента.
 * @param {boolean} props.disableIndexing=false Запрет индексации названия ссылки поисковиками.
 * @param {*} props.children Содержимое компонента.
 * @param {string} [props.className] Пользовательские классы.
 * @param {string} [props.target] В новую или текущую вкладку откроется ссылка.
 * @param {Object} ref Реф для DOM-элемента ссылки.
 * @param {string} [props.color='blue'] Цвет.
 * @param {boolean} [props.underlined] Подчеркивание.
 * @param {boolean} [props.pseudo] Псевдоссылка.
 * @param {boolean} [props.disableHoverEffect] Не реагировать при наведении на компонент.
 * @param {boolean} [props.external=false] Является ли ссылкой на внешний ресурс.
 * @param {boolean} [props.withIcon=false] С иконкой.
 * @param {...*} restProps Остальные параметры.
 * @param {string} [props.href] Ссылка.
 * @param {Function} [props.onClick] Функция, вызываемая при клике.
 * @param {Function} [props.onMouseEnter] Функция, вызываемая при наведении.
 * @param {Function} [props.onMouseLeave] Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент ссылки.
 */
const Link = forwardRef(({
  disableIndexing = false,
  children,
  className,
  target,
  color = 'blue',
  underlined,
  pseudo,
  disableHoverEffect,
  external = false,
  withIcon = external,
  ...restProps
}, ref) => {
  const linkParams = restProps;
  if (!pseudo) {
    const defaultTarget = external ? '_blank' : '_self';
    linkParams.target = target && LINK_TARGETS.includes(target) ? target : defaultTarget;
  }

  const underlineType = pseudo ? 'dashed' : 'solid';
  const linkClasses = createLinkStyle({ className, disableHoverEffect });
  const textClasses = createLinkTextStyle({
    color,
    underlineType: underlined && underlineType,
    external: withIcon,
  });
  const externalClasses = createExternalStyle(color);
  return (
    <a
      {...linkParams}
      ref={ref}
      className={linkClasses}
    >
      <span className={textClasses} {...getContent(disableIndexing, children)} />
      {withIcon && (
        <span className={externalClasses}>
          <Icon icon={externalIcon} size={16} inline />
        </span>
      )}
    </a>
  );
});

Link.displayName = 'Link';

Link.propTypes = {
  /**
   * Запрет индексации контента.
   */
  disableIndexing: Type.bool,

  /**
   * Содержимое компонента.
   */
  children: Type.any,

  /**
   * Пользовательские классы.
   */
  className: Type.string,

  /**
   * В новую или текущую вкладку откроется ссылка.
   */
  target: Type.oneOf(['_blank', '_self']),

  /**
   * Цвет.
   */
  color: Type.oneOf(['black', 'dark-blue', 'blue', 'red', 'gray', 'white', 'light-gray']),

  /**
   * Подчеркивание.
   */
  underlined: Type.bool,

  /**
   * Псевдо-ссылка.
   */
  pseudo: Type.bool,

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
   * Ссылка.
   */
  href: Type.string,

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
