import { HTMLAttributes, ReactNode } from 'react';
import { WithTestId } from '../types';

export interface SnackBarProps extends HTMLAttributes<HTMLDivElement>, WithTestId {
  /** Будет вызван при мoнтировании. */
  onMount?: VoidFunction;
}

export interface SnackBarImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
}

export interface SnackBarIconProps extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode;
}
