import { forwardRef, memo } from 'react';
import classnames from 'classnames/bind';
import classes from './text.module.scss';
import { color as colorClass } from '../styling/colors';
import {
  size as sizeClass,
  lineHeight as lineHeightClass,
  weight as weightClass,
  Size,
  LineHeight,
  Weight,
} from '../styling/fonts';
import { Token } from '../colors';

type Align = 'left' | 'center' | 'right' | 'justify';

export interface TextProps {
  /** Направление. */
  align?: Align;

  /** Содержимое. */
  children?: React.ReactNode;

  /** Ключ цвета из дизайн системы. */
  color?: Token;

  /** Элемент, который будет использован как обертка. */
  element?:
    | string
    | React.ComponentType<
        {
          className: string;
          style: React.CSSProperties;
          children?: React.ReactNode;
        } & React.RefAttributes<any>
      >;

  /** Межстрочный интервал. */
  lineHeight?: LineHeight;

  /** Нужно ли добавить стиль "white-space: nowrap". */
  nowrap?: boolean;

  /** Размер. */
  size?: Size;

  /** Нужно ли обрезать текст многоточием в одну строку. */
  truncate?: boolean | number;

  /** Начертание. */
  weight?: Weight;
}

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
 * Компонент для стилизации текста.
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
