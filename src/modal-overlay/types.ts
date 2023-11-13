import type { HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';

export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;
}
