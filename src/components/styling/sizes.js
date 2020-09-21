import { ClassGetter } from './utils';
import classes from './sizes.scss';

/**
 * Проверяет, является ли значение шагом дизайн-системы для внешних отступов.
 * @param {*} value Значение.
 * @return {boolean} Результат.
 */
export const isMargin = value => Number.isInteger(value) && value >= -8 && value <= 32;

/**
 * Проверяет, является ли значение шагом дизайн-системы для внутренних отступов.
 * @param {*} value Значение.
 * @return {boolean} Результат.
 */
export const isPadding = value => Number.isInteger(value) && value >= 0 && value <= 32;

export const marginTop = ClassGetter(classes, isMargin, 'M-t__');
export const marginRight = ClassGetter(classes, isMargin, 'M-r__');
export const marginBottom = ClassGetter(classes, isMargin, 'M-b__');
export const marginLeft = ClassGetter(classes, isMargin, 'M-l__');

export const paddingTop = ClassGetter(classes, isPadding, 'P-t__');
export const paddingRight = ClassGetter(classes, isPadding, 'P-r__');
export const paddingBottom = ClassGetter(classes, isPadding, 'P-b__');
export const paddingLeft = ClassGetter(classes, isPadding, 'P-l__');
