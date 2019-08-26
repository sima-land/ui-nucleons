import styles from './grid.scss';
import classNames from 'classnames';

/**
 * Функция создания классов контейнера сетки.
 * @param {string} [externalClass] Пользовательский класс.
 * @param {'start'|'end'|'center'|'around'|'between'} [justify='start'] Горизонтальное выравнивание.
 * @param {'start'|'end'|'center'|'around'|'between'} [alignItems='stretch'] Выравнивание по вертикальной оси.
 * @param {boolean} [wrap=false] Разрешить перенос контента внутри контейнера на новую строку.
 * @param {boolean} [withoutGutters=false] Без отступов между колонками.
 * @return {string} Классы контейнера сетки.
 */
export const makeRowClasses = ({
  externalClass,
  justify = 'start',
  alignItems = 'stretch',
  wrap = false,
  withoutGutters = false,
}) =>
  classNames(
    styles.row,
    wrap ? styles.wrap : '',
    styles[`items-${alignItems}`],
    styles[`justify-${justify}`],
    withoutGutters ? '' : styles['with-gutters'],
    externalClass,
  );

/**
 * Функция создания классов колонки сетки.
 * @param {string} [externalClass] Пользовательский класс.
 * @param {'auto'|number} [desktop='auto'] Ширину скольких колонок должна занять колонка на десктопной версии.
 * @param {'auto'|number} [mobile='auto'] Ширину скольких колонок должна занять колонка в мобильной версии.
 * @return {string} Классы колонки сетки.
 */
export const makeColClasses = ({
  externalClass,
  desktop = 'auto',
  mobile = 'auto',
}) =>
  classNames(
    styles.col,
    styles[`lg-${desktop}-12`],
    styles[`md-${mobile}-8`],
    externalClass,
  );
