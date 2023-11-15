import type { SpinnerProps, SpinnerSize } from './types';
import { COLORS, Token } from '../colors';
import classNames from 'classnames/bind';
import styles from './spinner.module.scss';

const cx = classNames.bind(styles);

export const SPINNER_DIAMETER: Record<SpinnerSize, number> = {
  s: 20,
  m: 48,
  l: 80,
} as const;

const DEFAULT_COLOR: Token = 'basic-blue';

/**
 * Спиннер - визуальный индикатор загрузки.
 * @param props Свойства.
 * @return Элемент.
 */
export function Spinner({
  size = 'm',
  color = DEFAULT_COLOR,
  className,
  style,
  'data-testid': testId = 'spinner',
}: SpinnerProps) {
  const readySize: SpinnerSize = Object.keys(SPINNER_DIAMETER).includes(size) ? size : 'm';
  const readyColor = COLORS.has(color) ? color : DEFAULT_COLOR;

  return (
    <div className={className} style={style} data-testid={testId}>
      <SpinnerSVG size={readySize} color={readyColor} data-testid={null} />
    </div>
  );
}

/**
 * Спиннер.
 * Выделен в отдельный компонент для возможности использования без обертки в виде div.
 * @param props Свойства.
 * @return Элемент.
 */
export function SpinnerSVG({
  size = 'm',
  color = DEFAULT_COLOR,
  className,
  style,
  'data-testid': testId = 'spinner',
}: SpinnerProps) {
  const diameter = SPINNER_DIAMETER[size];
  const radius = diameter / 2;

  return (
    <svg
      style={style}
      className={cx('spinner', `size-${size}`, className)}
      viewBox={`0 0 ${diameter} ${diameter}`}
      width={diameter}
      height={diameter}
      stroke={COLORS.get(color)}
      data-testid={testId}
    >
      <circle
        className={cx('circle')}
        cx={radius}
        cy={radius}
        r={radius - 1} // учет обводки
      />
    </svg>
  );
}
