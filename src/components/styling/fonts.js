import { ClassGetter } from './utils';
import classes from './fonts.scss';

export const SIZES = new Set(
  [12, 14, 16, 20, 24, 28, 32, 48, 64, 80]
);

export const WEIGHTS = new Set(
  [400, 500, 600, 700]
);

const isValidSize = SIZES.has.bind(SIZES);

const isValidWeight = WEIGHTS.has.bind(WEIGHTS);

export const size = ClassGetter(classes, isValidSize, 'size-');

export const lineHeight = ClassGetter(classes, isValidSize, 'line-height-');

export const weight = ClassGetter(classes, isValidWeight, 'weight-');
