import type { CSSProperties, SVGAttributes } from 'react';

export interface FileIconStyle extends CSSProperties {
  '--file-icon-primary-color'?: string;
}

export interface FileIconProps extends Omit<SVGAttributes<SVGSVGElement>, 'type'> {
  /** Тип файла. */
  type?: string;

  /** Нужно ли выводить название или иконку типа. */
  isTypeVisible?: boolean;

  /** Стили. */
  style?: FileIconStyle;
}
