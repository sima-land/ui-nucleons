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

const isStep = allPass([
  Number.isInteger,
  gte(__, -8),
  lte(__, 32),
]);

const isPositiveStep = allPass([
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

export const marginTop = ClassGetter(isStep, 'margin-top__');

export const marginRight = ClassGetter(isStep, 'margin-right__');

export const marginBottom = ClassGetter(isStep, 'margin-bottom__');

export const marginLeft = ClassGetter(isStep, 'margin-left__');

export const paddingTop = ClassGetter(isPositiveStep, 'padding-top__');

export const paddingRight = ClassGetter(isPositiveStep, 'padding-right__');

export const paddingBottom = ClassGetter(isPositiveStep, 'padding-bottom__');

export const paddingLeft = ClassGetter(isPositiveStep, 'padding-left__');
