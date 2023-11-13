import type { HTMLAttributes, ReactNode } from 'react';

export type RenderTail = (data: { hiddenCount: number }) => ReactNode;

export interface GroupOverflowProps extends HTMLAttributes<HTMLDivElement> {
  /** Расстояние между элементами в пикселях. */
  gap?: number;

  /** Вернёт "замыкающий" элемент, который будет выведен по аналогии с многоточием для текста. */
  tail?: RenderTail;
}
