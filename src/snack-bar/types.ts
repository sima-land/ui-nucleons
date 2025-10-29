import { HTMLAttributes, ReactNode, RefObject } from 'react';
import { WithTestId } from '../types';

export interface SnackBarProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Будет вызван при закрытии. */
  onClose?: VoidFunction;
  /** Будет вызван при мoнтировании. */
  onMount?: VoidFunction;
  /** Ссылки на элементы, которые открывают снекбар. */
  showFor?: RefObject<HTMLElement | undefined | null>[] | RefObject<HTMLElement | undefined | null>;
}

export interface SnackBarImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

export interface SnackBarIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}
