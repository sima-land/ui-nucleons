import Type from 'prop-types';
import React from 'react';
import { makeRowClasses } from '../class-maker';
import GridEntity from '../grid-entity/';

/**
 * Строка сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.justify='start'] Выравнивание по горизонтальной оси.
 * @param {string} [props.alignItems='stretch'] Выравнивание по вертикальной оси.
 * @param {boolean} [props.wrap=false] Разрешить перенос контента на новую строку.
 * @param {boolean} [props.withoutGutters=false] Без отступов между колонками.
 * @return {ReactComponent} Строка сетки.
 */
const GridRow = props => <GridEntity createClasses={makeRowClasses} {...props} />;

GridRow.propTypes = {
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
   * Выравнивание по горизонтальной оси.
   */
  justify: Type.oneOf(['start', 'between', 'around', 'center', 'end']),
  /**
   * Выравнивание по вертикальной оси.
   */
  alignItems: Type.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
  /**
   * Разрешить перенос контента на новую строку.
   */
  wrap: Type.bool,
  /**
   * Без отступов между колонками.
   */
  withoutGutters: Type.bool,
};

export default GridRow;
