import React, { forwardRef } from 'react';
import {
  createLinkStyle,
  createLinkTextStyle,
  createExternalStyle,
} from './create-link-style';
import Type from 'prop-types';
import Icon from '../icon';
import externalIcon from '../icons/external.svg';

export const LINK_TARGETS = ['_blank', '_self'];

/**
 * Компонент ссылки.
 * @param {Object} props Свойства компонента.
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
      <span className={textClasses}>{children}</span>
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
  /**
   * Реф для DOM-элемента ссылки
   */
  ref: Type.oneOfType([
    Type.func,
    Type.shape({ current: Type.instanceOf(Element) }),
  ]),
};

export default Link;
