import type { CSSProperties, ReactNode } from 'react';
import type { WithTestId } from '../types';

export interface AvatarStyle extends CSSProperties {
  '--avatar-size'?: string;
  '--avatar-color'?: string;
  '--avatar-color-opacity'?: number | string;
  '--avatar-text-color'?: string;
}

export interface AvatarProps extends WithTestId {
  /** Класс. */
  className?: string;

  /** Изображение. */
  src?: string;

  /** Стили. */
  style?: AvatarStyle;

  /** Содержимое. */
  children?: ReactNode;
}
