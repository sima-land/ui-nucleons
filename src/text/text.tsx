import { forwardRef, memo } from 'react';
import { Align, TextProps } from './types';
import { color as colorClass } from '../styling/colors';
import {
  size as sizeClass,
  lineHeight as lineHeightClass,
  weight as weightClass,
  Size,
  LineHeight,
} from '../styling/fonts';
import classnames from 'classnames/bind';
import classes from './text.module.scss';

const cx = classnames.bind(classes);

export const defaultHeights: Readonly<Record<Size, LineHeight>> = {
  12: 16,
  14: 20,
  16: 24,
  20: 28,
  24: 32,
  32: 40,
  48: 60,
  64: 80,
};

export const ALIGNS = new Set<Align>(['left', 'center', 'right', 'justify']);

/**
 * Блок с возможностью быстрой стилизации текста по дизайн-гайдам.
 * @deprecated
 * @param props Свойства.
 * @return Элемент.
 */
export const Text = memo(
  forwardRef<any, TextProps>(function Text(
    {
      children,
      element: Container = 'span',
      size,

      // по гайдам дизайн-системы устанавливаем высоту по умолчанию
      lineHeight = size ? defaultHeights[size] : undefined,

      // не устанавливаем значения по умолчанию, чтобы компонент вел себя предсказуемо
      align,
      color,
      nowrap,
      truncate,
      weight,
    },
    ref,
  ) {
    const needLineClamp = typeof truncate === 'number' && truncate > 0;

    return (
      <Container
        ref={ref as any}
        className={cx([
          // styling
          size && sizeClass(size),
          lineHeight && lineHeightClass(lineHeight),
          color && colorClass(color),
          weight && weightClass(weight),

          // text
          align && ALIGNS.has(align) && `align-${align}`,
          nowrap && 'nowrap',
          truncate === true && 'truncate',
          needLineClamp && 'line-clamp',
        ])}
        style={needLineClamp ? { WebkitLineClamp: truncate } : {}}
        children={children}
      />
    );
  }),
);
