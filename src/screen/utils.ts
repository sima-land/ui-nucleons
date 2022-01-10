import { createContext } from 'react';
import { LoadingOverlayProps } from '../loading-overlay';

export interface ScreenInnerProps {
  /** Нужно ли выводить вместо содержимого состояние загрузки. */
  loading?: boolean;

  /** Свойства компонента LoadingOverlay. */
  loadingOverlayProps?: LoadingOverlayProps;

  /** Будет вызвана при полной прокрутке содержимого экрана. */
  onFullScroll?: () => void;

  /** Отступ от нижней границы содержимого экрана, после которого начинает срабатывать onFullScroll. */
  fullScrollThreshold?: number;
}

export const ScreenContext = createContext<ScreenInnerProps>({});
