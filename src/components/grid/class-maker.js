import styles from './grid.scss';
import classNames from 'classnames';

/**
 * Функция создания классов контенера сетки.
 * @param {string} [externalClass] Пользовательский класс.
 * @param {'start'|'end'|'center'|'around'|'between'} [justify] Горизонтальное выравнивание.
 * @param {'zero'|'s'|'m'|'l'} [gutter] Вертикальный отступ снизу.
 * @param {boolean} [wrap] Разрешить перенос контента внутри контейнера на новую строку.
 * @param {'start'|'end'|'center'|'around'|'between'} [alignItems] Выравнивание по вертикальной оси.
 * @return {string} Классы контейнера сетки.
 */
export const makeRowClasses = ({
  externalClass,
  justify = 'start',
  gutter = 'l',
  wrap,
  alignItems = 'stretch',
}) =>
  classNames(
    styles.row,
    externalClass,
    wrap ? styles.wrap : '',
    styles[`items-${alignItems}`],
    styles[`justify-${justify}`],
    styles[`row-gutter-${gutter}`],
  );

/**
 * Функция создания классов колонки сетки.
 * @param {string} [externalClass] Пользовательский класс.
 * @param {'start'|'end'|'center'|'around'|'between'} [justify] Горизонтальное выравнивание.
 * @param {'zero'|'s'|'m'|'l'} [gutter] Отступ между колонками.
 * @param {boolean} [wrap] Разрешить перенос контента внутри колонки на новую строку.
 * @param {'auto'|number} [width] Ширину скольки колонок должна занять колонка.
 * @param {'start'|'end'|'center'|'around'|'between'} [alignItems] Выравнивание по вертикальной оси.
 * @return {string} Классы колонки сетки.
 */
export const makeColClasses = ({
  externalClass,
  justify = 'start',
  gutter = 'l',
  width = 'auto',
  wrap,
  alignItems = 'stretch',
}) =>
  classNames(
    styles.col,
    externalClass,
    wrap ? styles.wrap : '',
    styles[`items-${alignItems}`],
    styles[`justify-${justify}`],
    styles[`col-gutter-${gutter}`],
    styles[`width-${width}`],
  );
