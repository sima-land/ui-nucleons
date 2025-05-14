import type { CSSProperties, SVGAttributes } from 'react';
import type { KNOWN_TYPES } from './file-icon';

export interface FileIconStyle extends CSSProperties {
  '--file-icon-primary-color'?: string;
}

export type FileIconType = (typeof KNOWN_TYPES)[number];

export interface FileIconProps extends Omit<SVGAttributes<SVGSVGElement>, 'type'> {
  /** Тип файла. */
  type?: FileIconType;

  /** Нужно ли выводить название типа. */
  typeDisplayed?: boolean;

  /** Стили. */
  style?: FileIconStyle;
}
