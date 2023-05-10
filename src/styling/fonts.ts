import { ClassGetter } from './utils';
import classes from './fonts.module.scss';

export type Size = 12 | 14 | 16 | 20 | 24 | 32 | 48 | 64;

export type LineHeight = 16 | 20 | 24 | 28 | 32 | 40 | 60 | 80;

export type Weight = 400 | 600 | 700;

export const SIZES = new Set<Size>([12, 14, 16, 20, 24, 32, 48, 64]);

export const LINE_HEIGHTS = new Set<LineHeight>([16, 20, 24, 28, 32, 40, 60, 80]);

export const WEIGHTS = new Set<Weight>([400, 600, 700]);

/** @deprecated */
export const size = ClassGetter(classes, SIZES.has.bind(SIZES), 'size-');

/** @deprecated */
export const lineHeight = ClassGetter(classes, LINE_HEIGHTS.has.bind(LINE_HEIGHTS), 'line-height-');

/** @deprecated */
export const weight = ClassGetter(classes, WEIGHTS.has.bind(WEIGHTS), 'weight-');
