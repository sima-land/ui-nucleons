import type { HTMLAttributes, Ref } from 'react';
import type { WithPageScrollLock } from '../_internal/page-scroll-lock';
import type { WithTestId } from '../types';

export interface AlertProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Будет вызвана при закрытии окна нажатием на затемнение. */
  onClose?: VoidFunction;
}

export interface AlertBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    WithTestId,
    WithPageScrollLock {
  rootRef?: Ref<HTMLDivElement>;
}
