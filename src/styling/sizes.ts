import { ClassGetter } from './utils';
import classes from './sizes.module.scss';

/**
 * Проверяет, является ли значение шагом дизайн-системы для внешних отступов.
 * @deprecated
 * @param value Значение.
 * @return Результат.
 */
export const isMargin = (value: any) => Number.isInteger(value) && value >= -8 && value <= 32;

/**
 * Проверяет, является ли значение шагом дизайн-системы для внутренних отступов.
 * @deprecated
 * @param value Значение.
 * @return Результат.
 */
export const isPadding = (value: any) => Number.isInteger(value) && value >= 0 && value <= 32;

/** @deprecated */
export const marginTop = ClassGetter(classes, isMargin, 'M-t__');

/** @deprecated */
export const marginRight = ClassGetter(classes, isMargin, 'M-r__');

/** @deprecated */
export const marginBottom = ClassGetter(classes, isMargin, 'M-b__');

/** @deprecated */
export const marginLeft = ClassGetter(classes, isMargin, 'M-l__');

/** @deprecated */
export const paddingTop = ClassGetter(classes, isPadding, 'P-t__');

/** @deprecated */
export const paddingRight = ClassGetter(classes, isPadding, 'P-r__');

/** @deprecated */
export const paddingBottom = ClassGetter(classes, isPadding, 'P-b__');

/** @deprecated */
export const paddingLeft = ClassGetter(classes, isPadding, 'P-l__');
