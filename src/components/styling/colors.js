import classnames from 'classnames/bind';
import classes from './colors.scss';
import always from 'lodash/fp/always';
import concat from 'lodash/fp/concat';
import cond from 'lodash/fp/cond';
import pipe from 'lodash/fp/pipe';
import join from 'lodash/fp/join';
import T from 'lodash/fp/T';
import { COLORS } from '../constants';

/**
 * Получая название цвета, возвращает имя CSS-класса, добавляющего CSS-правило color со значением цвета.
 * @param {string} colorKey Название цвета.
 * @return {string} CSS-класс.
 */
export const colorClass = cond([
  [COLORS.has.bind(COLORS), pipe(
    concat('color__'),
    join(''),
    classnames.bind(classes)
  )],
  [T, always('')],
]);
