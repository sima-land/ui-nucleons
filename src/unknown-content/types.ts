import type { HTMLAttributes, ReactNode } from 'react';

export interface UnknownContentProps extends HTMLAttributes<HTMLDivElement> {
  /** Строка с html-версткой. */
  markup?: string;

  /** Содержимое. */
  children?: ReactNode;
}
