import classnames from 'classnames/bind';
import always from 'lodash/fp/always';
import concat from 'lodash/fp/concat';
import cond from 'lodash/fp/cond';
import pipe from 'lodash/fp/pipe';
import join from 'lodash/fp/join';
import T from 'lodash/fp/T';
import { COLORS } from '../constants';

import classes from './colors.scss';

/**
 * Получая название цвета, возвращает имя CSS-класса, добавляющего CSS-правило color со значением цвета.
 * @param {string} colorKey Название цвета.
 * @return {string|null} CSS-класс.
 */
export const color = cond([
  [COLORS.has.bind(COLORS), pipe(
    concat('color__'),
    join(''),
    classnames.bind(classes)
  )],
  [T, always(null)],
]);

/**
 * Получая название цвета, возвращает имя CSS-класса, добавляющего CSS-правило background-color со значением цвета.
 * @param {string} colorKey Название цвета.
 * @return {string|null} CSS-класс.
 */
export const bgColor = cond([
  [COLORS.has.bind(COLORS), pipe(
    concat('background-color__'),
    join(''),
    classnames.bind(classes)
  )],
  [T, always(null)],
]);

/**
 * Получая название цвета, возвращает имя CSS-класса, добавляющего CSS-правило stroke со значением цвета.
 * @param {string} colorKey Название цвета.
 * @return {string|null} CSS-класс.
 */
export const stroke = cond([
  [COLORS.has.bind(COLORS), pipe(
    concat('stroke__'),
    join(''),
    classnames.bind(classes)
  )],
  [T, always(null)],
]);
