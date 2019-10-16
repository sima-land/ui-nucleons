import React, { memo } from 'react';
import classnames from 'classnames/bind';
import classes from './text.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Возможные значение свойства "size".
 */
export const SIZES = new Set(
  [12, 14, 16, 20, 24, 32, 48, 64, 80]
);

/**
 * Возможные значения свойства "color".
 */
export const COLORS = new Set([
  'red',
  'gray24',
  'gray38',
  'black',
]);

/**
 * Возможные значения свойства "weight".
 */
export const WEIGHTS = new Set([
  300,
  400,
  600,
  700,
  800,
]);

/**
 * Возможные значения свойства "align".
 */
export const ALIGNS = new Set([
  'left',
  'center',
  'right',
  'justify',
]);

/**
 * Возвращает элемент для стилизации текста.
 * @param {Object} props Свойства.
 * @param {string} [props.element='span'] Элемент, который будет использован как обертка.
 * @param {*} [props.children] Содержимое.
 * @param {'left'|'center'|'right'|'justify'} [props.align] Направление.
 * @param {12|14|16|20|24|32|48|64|80} [props.size] Размер.
 * @param {12|14|16|20|24|32|48|64|80} [props.lineHeight] Межстрочный интервал.
 * @param {'red'|'gray'|'gray24'|'gray38'|'black'} [props.color='black'] Цвет.
 * @param {300|400|600|700|800} [props.weight=400] Начертание.
 * @param {boolean} [props.italic] Нужно ли выводить текст наклонным.
 * @return {ReactElement} Элемент текста.
 */
const Text = ({
  element: Container = 'span',
  children,

  // не устанавливаем значения по умолчанию, чтобы компонент вел себя предсказуемо
  align,
  size,
  lineHeight,
  color,
  weight,
  italic,
}) => (
  <Container
    className={cx([
      SIZES.has(size) && `size-${size}`,
      SIZES.has(lineHeight) && `line-height-${lineHeight}`,
      COLORS.has(color) && `color-${color}`,
      WEIGHTS.has(weight) && `weight-${weight}`,
      ALIGNS.has(align) && `align-${align}`,
      italic && 'italic',
    ])}
    children={children}
  />
);

Text.propTypes = {
  /**
   * Имя элемента-контейнера.
   */
  element: PropTypes.string,

  /**
   * Направление.
   */
  align: PropTypes.oneOf(['left', 'right', 'center', 'justify']),

  /**
   * Размер в пикселях.
   */
  size: PropTypes.oneOf([12, 14, 16, 20, 24, 32, 48, 64, 80]),

  /**
   * Межстрочный интервал в пикселях.
   */
  lineHeight: PropTypes.oneOf([12, 14, 16, 20, 24, 32, 48, 64, 80]),

  /**
   * Имя цвета в дизайн-системе.
   */
  color: PropTypes.oneOf(['red', 'gray24', 'gray38', 'black']),

  /**
   * Начертание.
   */
  weight: PropTypes.oneOf([300, 400, 600, 700, 800]),

  /**
   * Нужно ли выводить текст наклонным.
   */
  italic: PropTypes.bool,

  /**
   * Содержимое.
   */
  children: PropTypes.any,
};

export default memo(Text);
