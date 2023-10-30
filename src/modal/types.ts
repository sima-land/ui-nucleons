import type { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import type { WithTestId } from '../types';
import type { ModalOverlayProps } from '../modal-overlay';

export type ModalSize = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

export interface ModalStyle extends CSSProperties {
  '--modal-width'?: string;
  '--modal-height'?: string;
  '--modal-max-height'?: string;
  '--modal-border-radius'?: string;
  '--modal-overlay-padding'?: string;
}

export interface ModalProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Содержимое компонента. */
  children?: ReactNode;

  /** Размер окна. */
  size?: ModalSize | 'unset';

  /** Скругления углов. */
  rounds?: 's' | 'm' | 'unset';

  /** Стили. */
  style?: ModalStyle;

  /** Будет вызвана при закрытии окна. */
  onClose?: () => void;

  /** Свойства компонента ModalOverlay. */
  overlayProps?: ModalOverlayProps;
}
