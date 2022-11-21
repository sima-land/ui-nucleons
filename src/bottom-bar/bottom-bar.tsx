import React from 'react';
import { MediumRounds } from '../styling/shapes';
import { CleanGroupSizeContext } from '../clean-buttons/utils';
import { BottomBarProps, BottomBarSize } from './types';
import classNames from 'classnames/bind';
import styles from './bottom-bar.module.scss';

const cx = classNames.bind(styles);

// некоторым компонентам нужно знать конкретную высоту, делаем единый источник
export const BOTTOM_BAR_HEIGHT: Record<BottomBarSize, number> = {
  s: 64,
  m: 72,
  l: 80,
} as const;

// некоторым компонентам нужно знать значения по умолчанию, делаем единый источник
export const BOTTOM_BAR_DEFAULTS = {
  size: 'm',
} as const;

/**
 * Боттом бар.
 * @param props Свойства.
 * @return Элемент.
 */
export function BottomBar({
  size = BOTTOM_BAR_DEFAULTS.size,
  divided,
  children,
  className,
  'data-testid': testId = 'bottom-bar',
  ...rest
}: BottomBarProps) {
  const rooClassName = cx(
    'root',
    size !== 'unset' && `size-${size}`,
    { divided },
    MediumRounds.bottom,
    className,
  );

  return (
    // чтобы CleanButton автоматически брали размер, соответствующий размеру BottomBar
    <CleanGroupSizeContext.Provider value={size}>
      <div {...rest} className={rooClassName} data-testid={testId}>
        {children}
      </div>
    </CleanGroupSizeContext.Provider>
  );
}
