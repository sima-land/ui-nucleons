import { ClassGetter } from './utils';
import { COLORS, Token } from '../colors';
import classes from './colors.module.scss';

const isColorKey = COLORS.has.bind(COLORS);

export const color = ClassGetter<Token>(classes, isColorKey, 'color__');
export const hoverColor = ClassGetter<Token>(classes, isColorKey, 'hover-color__');
export const bgColor = ClassGetter<Token>(classes, isColorKey, 'bg-color__');
export const stroke = ClassGetter<Token>(classes, isColorKey, 'stroke__');
export const fill = ClassGetter<Token>(classes, isColorKey, 'fill__');
