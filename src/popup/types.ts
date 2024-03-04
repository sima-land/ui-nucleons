import type { CSSProperties, HTMLAttributes, Ref } from 'react';
import type { WithTestId } from '../types';

export interface PopupStyle extends CSSProperties {
  '--popup-max-height'?: string;
  '--popup-padding'?: string;
  '--popup-content-padding'?: string;
  '--popup-background'?: string;
  '--popup-border-radius'?: string;
  '--popup-box-shadow'?: string;
}

// ВАЖНО: не используем интерфейс из библиотеки floating-ui а копируем его так как это деталь реализации
export type PopupPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'right-start'
  | 'top-start'
  | 'top-end'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end';

export interface PopupViewProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Сработает при клике на крестик. */
  onClose?: () => void;

  /** Реф корневого элемента. */
  popupRef?: Ref<HTMLDivElement>;

  /** Стили. */
  style?: PopupStyle;
}

export interface PopupProps extends Omit<PopupViewProps, 'onClose'> {
  /** Элемент для которого нужно показать Popup ил null. */
  showFor?: Element | null;

  /** Сработает при попытке закрыть Popup. */
  onDismiss?: () => void;

  /** Нужно ли выводить кнопку закрытия. */
  withCloseButton?: boolean;

  /** Расположение попапа относительно целевого элемента. */
  placement?: PopupPlacement;

  /** Отступ в пикселях от попапа до целевого элемента по оси. */
  offset?: number;
}

export interface PopupInnerProps extends PopupProps {
  showFor: Element;
}
