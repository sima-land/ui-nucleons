import * as React from 'react';
import createButtonStyle from './create-button-style';
import Type from 'prop-types';

/**
 * Компонент кнопки.
 * @param {Object} props Свойства компонента.
 * @param {*} props.children Содержимое.
 * @param {string} props.className Пользовательские классы.
 * @param {Object} props.cssParams Стилевые параметры.
 * @param {string} props.cssParams.color Цвет.
 * @param {string} props.cssParams.shape Форма.
 * @param {boolean} props.cssParams.withShadow Тень.
 * @param {boolean} props.cssParams.isFocused Фокус.
 * @param {Object} params Остальные параметры.
 * @param {boolean} props.disabled Отключена.
 * @param {Function} props.onClick Функция, вызываемая при клике.
 * @param {Function} props.onMouseEnter Функция, вызываемая при наведении.
 * @param {Function} props.onMouseLeave Функция, вызываемая при покидании области кнопки.
 * @return {ReactElement} Компонент кнопки.
 */
const Button = ({
  children,
  className,
  cssParams,
  ...params
}) => {
  const buttonClasses = createButtonStyle({ ...cssParams, className });
  return (
    <button
      {...params}
      className={buttonClasses}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /**
   * Содержимое компонента
   */
  children: Type.any,
  /**
   * Пользовательские классы
   */
  className: Type.string,
  /**
   * Стилевые параметры
   */
  cssParams: Type.shape({
    /**
     * Цвет
     */
    color: Type.string,
    /**
     * Форма
     */
    shape: Type.string,
    /**
     * Тень
     */
    withShadow: Type.bool,
    /**
     * Фокус
     */
    isFocused: Type.bool,
  }),
  /**
   * Отключена ли кнопка
   */
  disabled: Type.bool,
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
