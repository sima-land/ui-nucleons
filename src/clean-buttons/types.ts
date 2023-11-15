import type { ReactNode } from 'react';
import type { LinkProps } from '../link';

/**
 * Размер прозрачных кнопок (высота) по дизайн-гайдам.
 */
export type CleanButtonSize = 's' | 'm' | 'l';

export interface CleanGroupProps {
  /** Размер (высота). */
  size?: CleanButtonSize | 'unset';

  /** Содержимое. */
  children?: ReactNode;
}

export interface CleanButtonProps extends LinkProps {
  asLink?: boolean;

  /** Размер (высота). */
  size?: CleanButtonSize | 'unset';
}
