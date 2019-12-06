import Type from 'prop-types';
import React from 'react';
import { makeColClasses } from '../class-maker';
import GridEntity from '../grid-entity/';

/**
 * Колонка сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {*} [props.children] Содержимое.
 * @param {number} [props.desktop='auto'] Ширину скольких колонок должна занять колонка на десктопной версии.
 * @param {number} [props.mobile='auto'] Ширину скольких колонок должна занять колонка в мобильной версии.
 * @return {ReactElement} Колонка сетки.
 */
const GridCol = props => <GridEntity createClasses={makeColClasses} {...props} />;

GridCol.propTypes = {
  /**
   * HTML-tag.
   */
  tag: Type.string,

  /**
   * Дополнительный класс стилизации.
   */
  externalClass: Type.string,

  /**
   * Содержимое.
   */
  children: Type.any,

  /**
   * Ширину скольких колонок должна занять колонка в десктопной версии.
   * Значение "auto" - Элементы делят пространство поровну.
   */
  desktop: Type.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Ширину скольких колонок должна занять колонка в мобильной версии.
   * Значение "auto" - Элементы делят пространство поровну.
   */
  mobile: Type.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default GridCol;
