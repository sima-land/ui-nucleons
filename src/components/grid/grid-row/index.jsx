import Type from 'prop-types';
import { makeRowClasses } from '../class-maker';
import createGridEntity from '../create-grid-entity';

/**
 * Строка сетки.
 * @param {Object} props Свойства компонента.
 * @param {string} [props.tag=div] HTML-tag.
 * @param {string} [props.externalClass] Дополнительный класс стилизации.
 * @param {string} [props.gutter=l] Размер отступов.
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.justify] Выравнивание по горизонтальной оси.
 * @param {boolean} [props.wrap] Разрешить перенос контента на новую строку.
 * @param {string} [props.alignItems] Выравнивание по вертикальной оси.
 * @return {ReactComponent} Строка сетки.
 */
const GridRow = props => createGridEntity(makeRowClasses)(props);

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
   * Размер отступов.
   */
  gutter: Type.oneOf(['s', 'm', 'l', 'zero']),
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
  alignItems: Type.oneOf(['start', 'center', 'end']),
  /**
   * Разрешить перенос контента на новую строку.
   */
  wrap: Type.bool,
};

export default GridRow;
