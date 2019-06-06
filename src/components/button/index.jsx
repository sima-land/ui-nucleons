import * as React from 'react';
import { createButtonStyle } from './create-button-style';
import { buildURL } from '../helpers/build-url';
import Type from 'prop-types';

/**
 * Отрисовка компонента Button.
 * @param {string} [type] Тип компонента.
 * @param {Object} [buttonParams] Параметры компонента.
 * @param {*} [children] Содержимое.
 * @return {ReactElement} Компонент кнопки.
 */
export const renderButton = ({ type, buttonParams = {}, children }) => {
  let result;
  switch (type) {
    case 'link':
      result = <a {...buttonParams}>{children}</a>;
      break;
    case 'container':
      result = <div {...buttonParams} role='button'>{children}</div>;
      break;
    case 'button':
    default:
      result = <button {...buttonParams}>{children}</button>;
  }
  return result;
};

/**
 * Компонент кнопки.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое.
 * @param {string} [props.className] Пользовательские классы.
 * @param {string} [props.color='clean'] Цвет.
 * @param {string} [props.shape='pill'] Форма.
 * @param {boolean} [props.withShadow=false] С тенью.
 * @param {boolean} [props.isFocused=false] В фокусе.
 * @param {boolean} [props.isDisabled] Отключена.
 * @param {string} [props.url] Исходный URL.
 * @param {Object} [props.urlParams] Пользовательские параметры.
 * @param {string} [props.anchor] Якорь.
 * @param {Function} [props.saveRef] Функция для сохранения ссылки на HTMLElement.
 * @param {string} [props.type='button'] Тип компонента.
 * @param {Object} params Остальные параметры.
 * @param {Function} [props.onClick] Функция, вызываемая при клике.
 * @param {Function} [props.onMouseEnter] Функция, вызываемая при наведении.
 * @param {Function} [props.onMouseLeave] Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент кнопки.
 */
const Button = ({
  children,
  className,
  color = 'clean',
  shape = 'pill',
  withShadow = false,
  isFocused = false,
  isDisabled = false,
  url,
  urlParams,
  anchor,
  saveRef,
  type = 'button',
  ...params
}) => {
  const buttonClasses = createButtonStyle({ className, color, shape, withShadow, isFocused });
  let buttonParams = { ...params, className: buttonClasses, ref: saveRef, disabled: isDisabled };
  if (url) {
    const href = buildURL({ url, urlParams, anchor });
    buttonParams = {
      ...buttonParams,
      href,
    };
  }
  return renderButton({ type, buttonParams, children });
};

Button.propTypes = {
  /**
   * Содержимое компонента.
   */
  children: Type.any,
  /**
   * Пользовательские классы.
   */
  className: Type.string,
  /**
   * Цвет.
   */
  color: Type.oneOf(['clean', 'white', 'blue']),
  /**
   * Форма.
   */
  shape: Type.oneOf(['square', 'rounded', 'pill', 'circle']),
  /**
   * С тенью.
   */
  withShadow: Type.bool,
  /**
   * В фокусе.
   */
  isFocused: Type.bool,
  /**
   * Отключена ли кнопка.
   */
  isDisabled: Type.bool,
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
   * Функция для сохранения ссылки на HTMLElement.
   */
  saveRef: Type.func,
  /**
   * Тип компонента.
   */
  type: Type.oneOf(['link', 'container', 'button']),
  /**
   * Функция, вызываемая при клике
   */
  onClick: Type.func,
  /**
   * Функция, вызываемая при наведении
   */
  onMouseEnter: Type.func,
  /**
   * Функция, вызываемая при покидании области кнопки
   */
  onMouseLeave: Type.func,
};

export default Button;
