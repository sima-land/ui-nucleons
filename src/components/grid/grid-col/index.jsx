import Type from 'prop-types';
import { makeColClasses } from '../class-maker';
import createGridEntity from '../create-grid-entity';

/**
 * Колонка сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {string} [props.gutter=l] Размер отступов.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.justify] Выравнивание по горизонтальной оси.
 * @param {number|'auto'} [props.width=auto] Ширину скольки колонок должна занять колонка.
 * @param {boolean} [props.wrap] Разрешить перенос контента на новую строку.
 * @param {string} [props.alignItems] Выравнивание по вертикальной оси.
 * @return {ReactComponent} Колонка сетки.
 */
const GridCol = props => createGridEntity(makeColClasses)(props);

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
   * Размер отступов.
   */
  gutter: Type.oneOf(['s', 'm', 'l', 'zero']),
  /**
   * Содержимое.
   */
  children: Type.any,
  /**
   * Ширину скольки колонок должна занять колонка.
   * auto - Элементы делят пространство поровну.
   */
  width: Type.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  /**
   * Выравнивание по горизонтальной оси.
   */
  justify: Type.oneOf(['start', 'between', 'around', 'center', 'end']),
  /**
   * Выравнивание по вертикальной оси.
   */
  alignItems: Type.oneOf(['start', 'between', 'around', 'center', 'end']),
  /**
   * Разрешить перенос контента на новую строку.
   */
  wrap: Type.bool,
};

export default GridCol;
