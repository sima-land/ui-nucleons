import { ClassGetter } from './utils';
import { COLORS } from '../constants';
import classes from './colors.scss';

const isColorKey = COLORS.has.bind(COLORS);

export const color = ClassGetter(classes, isColorKey, 'color__');
export const bgColor = ClassGetter(classes, isColorKey, 'bg-color__');
export const stroke = ClassGetter(classes, isColorKey, 'stroke__');
export const fill = ClassGetter(classes, isColorKey, 'fill__');
