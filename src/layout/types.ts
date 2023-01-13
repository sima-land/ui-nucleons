import { HTMLAttributes } from 'react';
import { Breakpoint } from '../types';

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  /** Список точек остановки на которых необходимо отключить ограничение ширины. */
  disabledOn?: Breakpoint[];
}
