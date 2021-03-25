import React from 'react';
import classnames from 'classnames/bind';
import styles from './grid.scss';

type Align = 'start' | 'center' | 'end';

type Spacing = 0 | 16 | 32;

export interface Props {
  spacing?: Spacing
  align?: Align
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

interface ItemProps {
  mxs?: number
  ms?: number
  mm?: number
  ml?: number
  xs?: number
  s?: number
  m?: number
  l?: number
  xl?: number
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const cx = classnames.bind(styles);

/**
 * Ячейка сетки.
 * @param props Свойства.
 * @param props.mxs Количество занимаемых колонок на диапазоне "mxs".
 * @param props.ms Количество занимаемых колонок на диапазоне "ms".
 * @param props.mm Количество занимаемых колонок на диапазоне "mm".
 * @param props.ml Количество занимаемых колонок на диапазоне "ml".
 * @param props.xs Количество занимаемых колонок на диапазоне "xs".
 * @param props.s Количество занимаемых колонок на диапазоне "s".
 * @param props.m Количество занимаемых колонок на диапазоне "m".
 * @param props.l Количество занимаемых колонок на диапазоне "l".
 * @param props.xl Количество занимаемых колонок на диапазоне "xl".
 * @return Элемент.
 */
const Item: React.FC<ItemProps> = ({
  mxs,
  ms,
  mm,
  ml,
  xs,
  s,
  m,
  l,
  xl,
  children,
  className,
  style,
}) => (
  <div
    className={cx('col', {
      // мобильная сетка имеет только 4 колонки
      [`col-size-mxs-${Math.max(3, mxs as any)}`]: mxs !== undefined,
      [`col-size-ms-${Math.max(3, ms as any)}`]: ms !== undefined,
      [`col-size-mm-${Math.max(3, mm as any)}`]: mm !== undefined,
      [`col-size-ml-${Math.max(3, ml as any)}`]: ml !== undefined,

      // десктопная сетка
      [`col-size-xs-${xs}`]: xs !== undefined,
      [`col-size-s-${s}`]: s !== undefined,
      [`col-size-m-${m}`]: m !== undefined,
      [`col-size-l-${l}`]: l !== undefined,
      [`col-size-xl-${xl}`]: xl !== undefined,

      className,
    })}
    style={style}
    children={children}
  />
);

Item.displayName = 'Grid.Item';

export interface GridComponent extends React.FC<Props> {
  Item: typeof Item
}

/**
 * Контейнера для формирования сетки.
 * @param props Свойства.
 * @param props.spacing Расстояние между колонками.
 * @param props.align Выравнивание колонок.
 * @return Элемент.
 */
export const Grid: GridComponent = ({
  spacing = 16,
  align,
  children,
  style,
  className,
}) => (
  <div
    className={cx(
      'grid',
      `grid-spacing-${spacing}`,
      align && `grid-align-${align}`,
      className
    )}
    style={style}
    children={children}
  />
);

Grid.Item = Item;
