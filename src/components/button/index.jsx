import * as React from 'react';
import { createButtonStyle } from './create-button-style';
import Type from 'prop-types';

/**
 * Отрисовка компонента Button.
 * @param {string} [appearance] Тип представления компонента.
 * @param {Object} [buttonParams] Параметры компонента.
 * @param {*} [children] Содержимое.
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
 * @param {Function} [props.saveRef] Функция для сохранения ссылки на HTMLElement.
 * @param {string} [props.appearance='button'] Тип представления компонента.
 * @param {...*} restProps Остальные параметры.
 * @param {string} [props.href] Ссылка.
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
  saveRef,
  appearance = 'button',
  ...restProps
}) => {
  const buttonClasses = createButtonStyle({ className, color, shape, withShadow, isFocused });
  const buttonParams = {
    ...restProps,
    className: buttonClasses,
    ref: saveRef,
    disabled: isDisabled,
  };
  return (
    <React.Fragment>
      {renderButton({ appearance, buttonParams, children })}
    </React.Fragment>
  );
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
   * Функция для сохранения ссылки на HTMLElement.
   */
  saveRef: Type.func,
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

export default Button;
