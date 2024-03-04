import type { ReactNode } from 'react';

export interface PortalProps {
  /** Вернет элемент, в который нужно вывести содержимое через портал. */
  defineRoot?: () => HTMLElement;

  /** Содержимое. */
  children?: ReactNode;

  /** Сработает после того как контент будет монтирован в DOM. */
  onMount?: VoidFunction;
}
