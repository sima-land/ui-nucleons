import type { HTMLAttributes, Ref } from 'react';
import type { Breakpoint } from '../types';

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  /** Список точек остановки на которых необходимо отключить ограничение ширины. */
  disabledOn?: Breakpoint[];

  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}
