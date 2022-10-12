import React from 'react';
import { has } from 'lodash';
import { COLORS, Token } from '../colors';
import classnames from 'classnames/bind';
import styles from './spinner.module.scss';

type SpinnerColor = Extract<Token, 'basic-blue' | 'basic-white'>;

type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  /** Размер. */
  size?: SpinnerSize;

  /** Цвет. */
  color?: SpinnerColor;

  /** Класс. */
  className?: string;

  /** Стили. */
  style?: React.CSSProperties;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(styles);

export const DIAMETERS: Record<SpinnerSize, number> = {
  small: 20,
  medium: 48,
  large: 80,
} as const;

const DEFAULT_COLOR: SpinnerColor = 'basic-blue';

const AVAILABLE_COLORS: SpinnerColor[] = ['basic-blue', 'basic-white'];

/**
 * Компонент спиннера.
 * @param props Свойства.
 * @return Элемент.
 */
export function Spinner({
  size = 'medium',
  color = DEFAULT_COLOR,
  className,
  style,
  'data-testid': testId = 'spinner',
}: SpinnerProps) {
  const readySize: SpinnerSize = has(DIAMETERS, size) ? size : 'medium';
  const readyColor = AVAILABLE_COLORS.includes(color) ? color : DEFAULT_COLOR;
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={className} style={style} data-testid={testId}>
      <svg
        className={cx('spinner', `size-${readySize}`)}
        viewBox={`0 0 ${diameter} ${diameter}`}
        width={diameter}
        height={diameter}
        stroke={COLORS.get(readyColor)}
      >
        <circle
          className={cx('circle')}
          cx={radius}
          cy={radius}
          r={radius - 1} // учет обводки
        />
      </svg>
    </div>
  );
}
