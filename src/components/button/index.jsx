import React, { forwardRef } from 'react';
import { createButtonStyle } from './create-button-style';
import Type from 'prop-types';

/**
 * Отрисовка компонента Button.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.appearance] Тип представления компонента.
 * @param {Object} [props.buttonParams] Параметры компонента.
 * @param {*} [props.children] Содержимое.
 * @return {ReactElement} Компонент кнопки.
 */
export const renderButton = ({ appearance, buttonParams = {}, children }) => {
  let result;
  switch (appearance) {
    case 'link':
      result = <a {...buttonParams}>{children}</a>;
      break;
    case 'container':
      result = <div {...buttonParams} role='button'>{children}</div>;
      break;
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
 * @param {string} [props.appearance='button'] Тип представления компонента.
 * @param {...*} restProps Остальные параметры.
 * @param {string} [props.href] Ссылка.
 * @param {Function} [props.onClick] Функция, вызываемая при клике.
 * @param {Function} [props.onMouseEnter] Функция, вызываемая при наведении.
 * @param {Function} [props.onMouseLeave] Функция, вызываемая при покидании области кнопки.
 * @param {Object} ref Реф для DOM-элемента кнопки.
 * @return {ReactElement} Компонент кнопки.
 */
const Button = forwardRef(function Button ({
  children,
  className,
  color = 'clean',
  shape = 'pill',
  withShadow = false,
  isFocused = false,
  isDisabled = false,
  appearance = 'button',
  ...restProps
}, ref) {
  const buttonClasses = createButtonStyle({ className, color, shape, withShadow, isFocused });
  const buttonParams = {
    ref,
    className: buttonClasses,
    disabled: isDisabled,
    ...restProps,
  };
  return (
    <React.Fragment>
      {renderButton({ appearance, buttonParams, children })}
    </React.Fragment>
  );
});

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
   * Тип компонента.
   */
  appearance: Type.oneOf(['link', 'container', 'button']),

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

Button.displayName = 'Button';
export default Button;
