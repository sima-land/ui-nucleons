import * as React from 'react';
import createButtonStyle from './create-button-style';
import Type from 'prop-types';

/**
 * Компонент кнопки
 * @return {ReactElement} Компонент кнопки
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
