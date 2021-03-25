import React from 'react';
import has from 'lodash/has';
import classnames from 'classnames/bind';
import { COLORS } from '../colors';
import classes from './spinner.scss';

type Color = 'brand-blue' | 'white'

type Size = 'small' | 'medium' | 'large'

export interface Props {
  size?: Size
  color?: Color
  className?: string
  style?: React.CSSProperties
}

const cx = classnames.bind(classes);

export const DIAMETERS: Record<Size, number> = {
  small: 20,
  medium: 48,
  large: 80,
} as const;

const DEFAULT_COLOR: Color = 'brand-blue';

const AVAILABLE_COLORS: Color[] = ['brand-blue', 'white'];

/**
 * Компонент спиннера.
 * @param props Свойства компонента.
 * @param props.size Размер.
 * @param props.color Цвет.
 * @return {ReactElement} Компонент.
 */
export const Spinner: React.FC<Props> = ({
  size = 'medium',
  color = DEFAULT_COLOR,
  className,
  style,
}) => {
  const readySize: Size = has(DIAMETERS, size) ? size : 'medium';
  const readyColor = AVAILABLE_COLORS.includes(color) ? color : DEFAULT_COLOR;
  const diameter = DIAMETERS[readySize];
  const radius = diameter / 2;

  return (
    <div className={className} style={style}>
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
};
