import React from 'react';
import classnames from 'classnames/bind';
import styles from './grid.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Ячейка сетки.
 * @param {Object} props Свойства.
 * @param {number} [props.xxs] Кол-во ячеек в диапазоне "xxs-".
 * @param {number} [props.xs] Кол-во ячеек в диапазоне "xs-".
 * @param {number} [props.sm] Кол-во ячеек в диапазоне "sm-".
 * @param {number} [props.md] Кол-во ячеек в диапазоне "md-".
 * @param {number} [props.lg] Кол-во ячеек в диапазоне "lg-".
 * @param {number} [props.xl] Кол-во ячеек в диапазоне "xl-".
 * @param {number} [props.xxl] Кол-во ячеек в диапазоне "xxl-".
 * @param {number} [props.max] Кол-во ячеек в диапазоне "max-".
 * @param {*} [props.children] Содержимое.
 * @param {string} [props.className] Класс.
 * @param {Object} props.style Стили.
 * @return {ReactElement} Компонент.
 */
const Item = ({
  xxs,
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
  max,
  children,
  className,
  style,
}) => (
  <div
    className={cx('col', {
      // мобильная сетка на xs/xxs - имеет только 4 колонки
      [`col-size-xxs-${Math.max(3, xxs)}`]: xxs !== undefined,
      [`col-size-xs-${Math.max(3, xs)}`]: xs !== undefined,

      [`col-size-sm-${sm}`]: sm !== undefined,
      [`col-size-md-${md}`]: md !== undefined,
      [`col-size-lg-${lg}`]: lg !== undefined,
      [`col-size-xl-${xl}`]: xl !== undefined,
      [`col-size-xxl-${xxl}`]: xxl !== undefined,
      [`col-size-max-${max}`]: max !== undefined,
      className,
    })}
    style={style}
    children={children}
  />
);

const rangeType = PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

Item.displayName = 'Grid.Item';

Item.propTypes = {
  xxs: rangeType,
  xs: rangeType,
  sm: rangeType,
  md: rangeType,
  lg: rangeType,
  xl: rangeType,
  xxl: rangeType,
  max: rangeType,
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
