import { ClassGetter } from './utils';
import { COLORS, Token } from '../colors';
import classes from './colors.module.scss';

const isColorKey = COLORS.has.bind(COLORS);

/** @deprecated */
export const color = ClassGetter<Token>(classes, isColorKey, 'color__');

/** @deprecated */
export const hoverColor = ClassGetter<Token>(classes, isColorKey, 'hover-color__');

/** @deprecated */
export const bgColor = ClassGetter<Token>(classes, isColorKey, 'bg-color__');

/** @deprecated */
export const stroke = ClassGetter<Token>(classes, isColorKey, 'stroke__');

/** @deprecated */
export const fill = ClassGetter<Token>(classes, isColorKey, 'fill__');
