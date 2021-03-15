import React from 'react';
import classnames from 'classnames/bind';
import styles from './grid.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Ячейка сетки.
 * @param {Object} props Свойства.
 * @param {number} props.mxs Количество занимаемых колонок на диапазоне "mxs".
 * @param {number} props.ms Количество занимаемых колонок на диапазоне "ms".
 * @param {number} props.mm Количество занимаемых колонок на диапазоне "mm".
 * @param {number} props.ml Количество занимаемых колонок на диапазоне "ml".
 * @param {number} props.xs Количество занимаемых колонок на диапазоне "xs".
 * @param {number} props.s Количество занимаемых колонок на диапазоне "s".
 * @param {number} props.m Количество занимаемых колонок на диапазоне "m".
 * @param {number} props.l Количество занимаемых колонок на диапазоне "l".
 * @param {number} props.xl Количество занимаемых колонок на диапазоне "xl".
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.className] Класс.
 * @param {Object} props.style Стили.
 * @return {ReactElement} Компонент.
 */
const Item = ({
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
      [`col-size-mxs-${Math.max(3, mxs)}`]: mxs !== undefined,
      [`col-size-ms-${Math.max(3, ms)}`]: ms !== undefined,
      [`col-size-mm-${Math.max(3, mm)}`]: mm !== undefined,
      [`col-size-ml-${Math.max(3, ml)}`]: ml !== undefined,

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

Item.propTypes = {
  mxs: PropTypes.number,
  ms: PropTypes.number,
  mm: PropTypes.number,
  ml: PropTypes.number,
  xs: PropTypes.number,
  s: PropTypes.number,
  m: PropTypes.number,
  l: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

/**
 * Контейнера для формирования сетки.
 * @param {Object} props Свойства.
 * @param {0 | 16 | 32} [props.spacing=16] Расстояние между колонками.
 * @param {'start' | 'center' | 'end'} [props.align] Выравнивание колонок.
 * @param {*} [props.children] Ячейки.
 * @param {Object} [props.style] Стили.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Компонент.
 */
export const Grid = ({
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

Grid.propTypes = {
  spacing: PropTypes.oneOf([0, 16, 32]),
  align: PropTypes.oneOf(['start', 'center', 'end']),
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

Grid.Item = Item;
