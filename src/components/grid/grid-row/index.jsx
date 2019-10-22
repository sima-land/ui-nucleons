import Type from 'prop-types';
import React from 'react';
import { makeRowClasses } from '../class-maker';
import GridEntity from '../grid-entity/';

export const COLUMNS_COUNTS = [8, 12];
export const COLUMNS_GUTTERS = ['lg', 'md', 'sm'];

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
 * @param {number} [props.lgColumns=12] Количество колонок в строке при экране > 960px.
 * @param {number} [props.mdColumns=8] Количество колонок в строке при экране <= 960px.
 * @param {'lg'|'md'|'sm'} [props.lgGutters='lg'] Размер отступов между столбцами при экране > 960px.
 * @param {'lg'|'md'|'sm'} [props.mdGutters='md'] Размер отступов между столбцами при экране 721-960px.
 * @param {'lg'|'md'|'sm'} [props.smGutters='sm'] Размер отступов между столбцами при экране <= 720px.
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

  /**
   * Количество колонок в строке при экране > 960px.
   */
  lgColumns: Type.oneOf(COLUMNS_COUNTS),

  /**
   * Количество колонок в строке при экране <= 960px.
   */
  mdColumns: Type.oneOf(COLUMNS_COUNTS),

  /**
   * Размер отступов между столбцами при экране > 960px.
   */
  lgGutters: Type.oneOf(COLUMNS_GUTTERS),

  /**
   * Размер отступов между столбцами при экране 721-960px.
   */
  mdGutters: Type.oneOf(COLUMNS_GUTTERS),

  /**
   * Размер отступов между столбцами при экране <= 720px.
   */
  smGutters: Type.oneOf(COLUMNS_GUTTERS),
};

export default GridRow;
