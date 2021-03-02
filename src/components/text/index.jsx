import React, { memo } from 'react';
import classnames from 'classnames/bind';
import classes from './text.scss';
import PropTypes from 'prop-types';
import { color as getColorClass } from '../styling/colors';
import {
  size as getSize,
  lineHeight as getLineHeight,
  weight as getWeightClass,
} from '../styling/fonts';
import { COLORS } from '../colors';

const cx = classnames.bind(classes);

export const defaultHeights = {
  12: 16,
  14: 20,
  16: 24,
  20: 28,
  24: 32,
  32: 40,
  48: 60,
  64: 80,
};

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
 * @param {12|14|16|20|24|28|32|48|64|80} [props.size] Размер.
 * @param {12|14|16|20|24|28|32|48|64|80} [props.lineHeight] Межстрочный интервал.
 * @param {string} [props.color] Ключ цвета из дизайн системы.
 * @param {400|500|600|700} [props.weight] Начертание.
 * @param {boolean} [props.italic] Нужно ли выводить текст наклонным.
 * @param {boolean} [props.truncate] Нужно ли обрезать текст многоточием в одну строку.
 * @param {boolean} [props.nowrap] Нужно ли добавить стиль "white-space: nowrap".
 * @return {ReactElement} Элемент текста.
 */
const Text = ({
  children,
  element: Container = 'span',
  size,
  lineHeight = defaultHeights[size], // по гайдам дизайн-системы устанавливаем высоту по умолчанию

  // не устанавливаем значения по умолчанию, чтобы компонент вел себя предсказуемо
  align,
  color,
  italic,
  nowrap,
  truncate,
  weight,
}) => (
  <Container
    className={cx([
      getSize(size),
      getLineHeight(lineHeight),
      getColorClass(color),
      getWeightClass(weight),
      ALIGNS.has(align) && `align-${align}`,
      italic && 'italic',
      nowrap && 'nowrap',
      truncate && 'truncate',
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
  size: PropTypes.oneOf([12, 14, 16, 20, 24, 28, 32, 48, 64, 80]),

  /**
   * Межстрочный интервал в пикселях.
   */
  lineHeight: PropTypes.oneOf([12, 14, 16, 20, 24, 28, 32, 48, 64, 80]),

  /**
   * Имя цвета в дизайн-системе.
   */
  color: PropTypes.oneOf([...COLORS.keys()]),

  /**
   * Начертание.
   */
  weight: PropTypes.oneOf([400, 500, 600, 700]),

  /**
   * Нужно ли выводить текст наклонным.
   */
  italic: PropTypes.bool,

  /**
   * Содержимое.
   */
  children: PropTypes.any,

  /**
   * Нужно ли обрезать текст многоточием в одну строку.
   */
  truncate: PropTypes.bool,

  /**
   * Нужно ли добавить стиль "white-space: nowrap".
   */
  nowrap: PropTypes.bool,
};

export default memo(Text);
