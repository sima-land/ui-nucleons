import { has } from 'lodash';
import { COLORS, Token } from '../colors';
import classnames from 'classnames/bind';
import styles from './spinner.module.scss';

/**
 * @deprecated Следует использовать 's' | 'm' | 'l'.
 */
type SpinnerLegacySize = 'small' | 'medium' | 'large';

export type SpinnerSize = 's' | 'm' | 'l';

export interface SpinnerProps {
  /** Размер. */
  size?: SpinnerSize | SpinnerLegacySize;

  /** Цвет. */
  color?: Token;

  /** Класс. */
  className?: string;

  /** Стили. */
  style?: React.CSSProperties;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string | null;
}

const cx = classnames.bind(styles);

export const DIAMETERS: Record<SpinnerSize | SpinnerLegacySize, number> = {
  s: 20,
  m: 48,
  l: 80,

  // legacy, @todo удалить со временем:
  small: 20,
  medium: 48,
  large: 80,
} as const;

const DEFAULT_COLOR: Token = 'basic-blue';

/**
 * Компонент спиннера.
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
  const readySize: SpinnerSize | SpinnerLegacySize = has(DIAMETERS, size) ? size : 'm';
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
  const diameter = DIAMETERS[size];
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
