import type { ReactNode } from 'react';

export interface PortalProps {
  /** Вернет элемент, в который нужно вывести содержимое через портал. */
  defineRoot?: () => HTMLElement;

  /** Содержимое. */
  children?: ReactNode;
}
