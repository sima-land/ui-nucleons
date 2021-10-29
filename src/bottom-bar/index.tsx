import React from 'react';
import classNames from 'classnames/bind';
import styles from './bottom-bar.module.scss';
import { MediumRounds } from '../styling/shapes';

type BottomBarSize = 's' | 'm' | 'l';

export interface BottomBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Размер (высота). */
  size?: BottomBarSize;

  /** Нужна ли разделительная черта сверху. */
  divided?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classNames.bind(styles);

// некоторым компонентам нужно знать конкретную высоту, делаем единый источник
export const BOTTOM_BAR_HEIGHT: Record<BottomBarSize, number> = {
  s: 64,
  m: 72,
  l: 80,
} as const;

export const BOTTOM_BAR_DEFAULTS = {
  size: 'm',
} as const;

/**
 * Боттом бар.
 * @param props Свойства.
 * @return Элемент.
 */
export const BottomBar = ({
  size = BOTTOM_BAR_DEFAULTS.size,
  divided,
  children,
  className,
  style,
  'data-testid': testId = 'bottom-bar',
  ...rest
}: BottomBarProps) => (
  <div
    className={cx('root', { divided }, MediumRounds.bottom, className)}
    style={{ ...style, height: `${BOTTOM_BAR_HEIGHT[size]}px` }}
    {...rest}
    data-testid={testId}
  >
    {children}
  </div>
);
