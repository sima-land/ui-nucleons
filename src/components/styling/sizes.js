import allPass from 'lodash/fp/allPass';
import always from 'lodash/fp/always';
import concat from 'lodash/fp/concat';
import __ from 'lodash/fp/__';
import cond from 'lodash/fp/cond';
import gte from 'lodash/fp/gte';
import join from 'lodash/fp/join';
import lte from 'lodash/fp/lte';
import pipe from 'lodash/fp/pipe';
import T from 'lodash/fp/T';
import classnames from 'classnames/bind';

import classes from './sizes.scss';

export const isMargin = allPass([
  Number.isInteger,
  gte(__, -8),
  lte(__, 32),
]);

export const isPadding = allPass([
  Number.isInteger,
  gte(__, 0),
  lte(__, 32),
]);

/**
 * Фабрика геттеров CSS-классов.
 * @param {Function} checker Функция проверки ключа для класса.
 * @param {string} prefix Префикс имени класса.
 * @return {Function} Геттер CSS-класса.
 */
const ClassGetter = (checker, prefix) => cond([
  [checker, pipe([
    concat(prefix),
    join(''),
    classnames.bind(classes),
  ])],
  [T, always(null)],
]);

export const marginTop = ClassGetter(isMargin, 'margin-top__');

export const marginRight = ClassGetter(isMargin, 'margin-right__');

export const marginBottom = ClassGetter(isMargin, 'margin-bottom__');

export const marginLeft = ClassGetter(isMargin, 'margin-left__');

export const paddingTop = ClassGetter(isPadding, 'padding-top__');

export const paddingRight = ClassGetter(isPadding, 'padding-right__');

export const paddingBottom = ClassGetter(isPadding, 'padding-bottom__');

export const paddingLeft = ClassGetter(isPadding, 'padding-left__');
