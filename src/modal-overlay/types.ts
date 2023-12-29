import type { HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';
import type { WithPageScrollLock } from '../_internal/page-scroll-lock';

export interface ModalOverlayProps
  extends HTMLAttributes<HTMLDivElement>,
    WithPageScrollLock,
    WithTestId {
  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}
