import type { CSSProperties, MouseEventHandler, ReactNode, Ref } from 'react';
import type { WithTestId } from '../types';

export interface InfoTextProps extends WithTestId {
  /** Текст. */
  children?: ReactNode;

  /** Класс. */
  className?: string;

  /** Стили. */
  style?: CSSProperties;

  /** Ref элемента иконки. */
  iconRef?: Ref<HTMLButtonElement>;

  /** Нужно ли выводить иконку как "активную". */
  iconActive?: boolean;

  /** Сработает при клике на иконку. */
  onIconClick?: MouseEventHandler;
}
