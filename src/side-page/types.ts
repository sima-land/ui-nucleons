import type { HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';
import type { ModalOverlayProps } from '../modal-overlay';
import type { WithPageScrollLock } from '../_internal/page-scroll-lock';

export interface SidePageProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Ширина. */
  size?: 's' | 'm' | 'unset';

  /** Будет вызвана при закрытии. */
  onClose?: () => void;

  /** Свойства компонента ModalOverlay. */
  overlayProps?: ModalOverlayProps;
}

export interface SidePageBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    WithTestId,
    WithPageScrollLock {
  rootRef?: Ref<HTMLDivElement>;
}
