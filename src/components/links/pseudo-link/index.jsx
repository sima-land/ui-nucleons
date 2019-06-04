import React from 'react';
import Icon from '../../icon/';
import arrowUp from '../../icons/arrow-up.svg';
import arrowDown from '../../icons/arrow-down.svg';
import { createLinkStyle, createLinkTextStyle } from '../create-link-style';
import Type from 'prop-types';

/**
 * Компонент псевдо-ссылки.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое компонента.
 * @param {string} props.className Пользовательские классы.
 * @param {Function} props.saveRef Функция для сохранения текущего Url-a.
 * @param {string} props.color Цвет.
 * @param {boolean} props.underlined Подчеркивание.
 * @param {boolean} props.inline Свойство inline.
 * @param {boolean} props.relative Относительное позиционирование.
 * @param {boolean} props.disableHoverEffect Не реагировать при наведении на компонент.
 * @param {boolean} props.withArrow Со стрелкой.
 * @param {boolean} props.upArrow Стрелка направленна вверх.
 * @param {Object} params Остальные параметры.
 * @param {Function} props.onClick Функция, вызываемая при клике.
 * @param {Function} props.onMouseEnter Функция, вызываемая при наведении.
 * @param {Function} props.onMouseLeave Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент псевдо-ссылки.
 */
const PseudoLink = ({
  children,
  className,
  saveRef,
  color,
  underlined,
  inline,
  relative,
  disableHoverEffect,
  withArrow,
  upArrow,
  ...params
}) => {
  const pseudoLinkClasses = createLinkStyle({ className, disableHoverEffect, inline, relative });
  const textClasses = createLinkTextStyle({ color, underlineType: underlined && 'dashed' });
  return (
    <span
      {...params}
      ref={saveRef}
      className={pseudoLinkClasses}
    >
      <span className={textClasses}>{children}</span>
      {withArrow && (
        <span className='icon-arrow'>
          <Icon icon={upArrow ? arrowUp : arrowDown} color='dark-blue' size={10} inline />
        </span>
      )}
    </span>
  );
};

PseudoLink.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,
  /**
   * Пользовательские классы.
   */
  className: Type.string,
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
   *  Со стрелкой.
   */
  withArrow: Type.bool,
  /**
   * Стрелка направленна вверх.
   */
  upArrow: Type.bool,
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

export default PseudoLink;
