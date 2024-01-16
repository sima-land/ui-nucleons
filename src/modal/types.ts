import type { CSSProperties, HTMLAttributes, ReactNode, Ref } from 'react';
import type { WithTestId } from '../types';
import type { ModalOverlayProps } from '../modal-overlay';
import type { WithPageScrollLock } from '../_internal/page-scroll-lock';

export type ModalSize = 's' | 'm' | 'l' | 'xl' | 'fullscreen';

export interface ModalStyle extends CSSProperties {
  '--modal-width'?: string;
  '--modal-height'?: string;
  '--modal-max-height'?: string;
  '--modal-min-height'?: string;
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

  /** Нужно ли применять стили для flex-раскладки. */
  flexLayout?: boolean;
}

export interface ModalBodyProps
  extends HTMLAttributes<HTMLDivElement>,
    WithPageScrollLock,
    WithTestId {
  /** Реф корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Реф внутреннего элемента с прокруткой. */
  viewportRef?: Ref<HTMLDivElement>;

  /** Свойства внутреннего элемента с прокруткой. */
  viewportProps?: HTMLAttributes<HTMLDivElement>;
}
