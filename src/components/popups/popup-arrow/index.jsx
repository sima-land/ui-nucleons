import React from 'react';
import Type from 'prop-types';
import { createArrowStyles } from './create-arrow-styles';

/**
 * Стрелка-треугольник.
 * @param {Object} props Свойства компонента.
 * @param {Object} [props.position] Координаты позиционирования.
 * @param {...*} [restProps] Остальные свойства.
 * @return {ReactElement} Стрелка-треугольник.
 */
const PopupArrow = ({ position = {}, ...restProps }) =>
  <span className={createArrowStyles(restProps)} style={position} />;

PopupArrow.propTypes = {
  /**
   * Направление стрелки.
   */
  direction: Type.oneOf(['top', 'bottom']),
  /**
   * Дополнительный класс.
   */
  className: Type.string,
  /**
   * Отображать тень.
   */
  shadow: Type.bool,
  /**
   * Цвет.
   */
  color: Type.oneOf(['white', 'blue', 'dark-blue', 'deep-blue']),
  /**
   * Координаты позиционирования.
   */
  position: Type.object,
};

export default PopupArrow;
