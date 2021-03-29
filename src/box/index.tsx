import React from 'react';
import classnames from 'classnames/bind';
import classes from './box.scss';
import * as Spacing from '../styling/sizes';
import { bgColor as getBgColorClass } from '../styling/colors';
import { COLORS, Token } from '../colors';

type CustomElement = { className: string, children?: React.ReactNode, style?: React.CSSProperties }
& React.RefAttributes<any>;

export interface Props {

  /** Значение свойства "alignItems". */
  alignItems?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'

  /** Содержимое блока. */
  children?: React.ReactNode

  /** Название цвета из дизайн-системы. */
  color?: Token

  /** Объект для указания inline-стилей. */
  dangerouslySetInlineStyle?: { __style: React.CSSProperties }

  /** Значение css-свойства "direction". */
  direction?: 'row' | 'column'

  /** Значение css-свойства "display". */
  display?: 'block' | 'none' | 'flex' | 'inline' | 'inline-block'

  /** Элемент, который будет использован как блок. */
  element?: string | React.ComponentType<CustomElement>

  /** Формирует значение css-свойства "flex". */
  flex?: 'shrink' | 'grow' | 'none'

  /** Значение свойства "justifyContent". */
  justifyContent?: 'start' | 'end' | 'center' | 'between' | 'around'

  /** Внешние отступы. */
  margin?: number

  /** Внешний отступ снизу. */
  marginBottom?: number

  /** Внешний отступ слева. */
  marginLeft?: number

  /** Внешний отступ справа. */
  marginRight?: number

  /** Внешний отступ сверху. */
  marginTop?: number

  /** Внешний отступ по вертикали. */
  marginX?: number

  /** Внешний отступ по горизонтали. */
  marginY?: number

  /** Внутренние отступы. */
  padding?: number

  /** Внутренний отступ снизу. */
  paddingBottom?: number

  /** Внутренний отступ слева. */
  paddingLeft?: number

  /** Внутренний отступ справа. */
  paddingRight?: number

  /** Внутренний отступ сверху. */
  paddingTop?: number

  /** Внутренний отступ по вертикали. */
  paddingX?: number

  /** Внутренний отступ по горизонтали. */
  paddingY?: number

  /** Формирует значение css-свойства "flex-wrap". */
  wrap?: boolean
}

const cx = classnames.bind(classes);

/**
 * Возможные значения свойства "display".
 * @enum {string}
 */
const DISPLAY = new Set([
  'block',
  'none',
  'flex',
  'inline',
  'inline-block',
]);

/**
 * Возможные значения свойства "flex".
 * @enum {string}
 */
const FLEX = new Set([
  'shrink',
  'grow',
  'none',
]);

/**
 * Возможные значения свойства "direction".
 * @enum {string}
 */
const DIRECTION = new Set([
  'row',
  'column',
]);

/**
 * Возможные значения свойства "alignItems".
 * @enum {string}
 */
const ALIGN_ITEMS = new Set([
  'start',
  'end',
  'center',
  'baseline',
  'stretch',
]);

/**
 * Возможные значения свойства "justifyContent".
 */
const JUSTIFY_CONTENT = new Set([
  'start',
  'end',
  'center',
  'between',
  'around',
]);

/**
 * Компонент блока, реализующего оформление в соответствии с дизайн-системой.
 * @param props Свойства.
 * @param props.alignItems Значение свойства "alignItems".
 * @param props.children Содержимое блока.
 * @param props.color Название цвета из дизайн-системы.
 * @param props.dangerouslySetInlineStyle Объект для указания inline-стилей.
 * @param props.direction Значение css-свойства "direction".
 * @param props.display Значение css-свойства "display".
 * @param props.element Элемент, который будет использован как блок.
 * @param props.flex Формирует значение css-свойства "flex".
 * @param props.justifyContent Значение свойства "justifyContent".
 * @param props.margin Внешние отступы.
 * @param props.marginBottom Внешний отступ снизу.
 * @param props.marginLeft Внешний отступ слева.
 * @param props.marginRight Внешний отступ справа.
 * @param props.marginTop Внешний отступ сверху.
 * @param props.marginX Внешний отступ по вертикали.
 * @param props.marginY Внешний отступ по горизонтали.
 * @param props.padding Внутренние отступы.
 * @param props.paddingBottom Внутренний отступ снизу.
 * @param props.paddingLeft Внутренний отступ слева.
 * @param props.paddingRight Внутренний отступ справа.
 * @param props.paddingTop Внутренний отступ сверху.
 * @param props.paddingX Внутренний отступ по вертикали.
 * @param props.paddingY Внутренний отступ по горизонтали.
 * @param props.wrap Формирует значение css-свойства "flex-wrap".
 * @return Элемент.
 */
const Box: React.FC<Props> = ({
  element: Container = 'div',
  children,
  display,
  flex,
  wrap,
  direction,
  alignItems,
  justifyContent,
  dangerouslySetInlineStyle,

  // margins
  margin,
  marginTop,
  marginRight,
  marginBottom,
  marginLeft,
  marginX,
  marginY,

  // paddings
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  paddingX,
  paddingY,

  // color
  color,
}) => (
  <Container
    style={dangerouslySetInlineStyle?.__style}
    className={cx(
      display && DISPLAY.has(display) && `display-${display}`,
      flex && FLEX.has(flex) && `flex-${flex}`,
      direction && DIRECTION.has(direction) && `direction-${direction}`,
      alignItems && ALIGN_ITEMS.has(alignItems) && `align-items-${alignItems}`,
      justifyContent && JUSTIFY_CONTENT.has(justifyContent) && `justify-content-${justifyContent}`,
      color && COLORS.has(color) && getBgColorClass(color),
      wrap && 'flex-wrap',

      // margins
      getMarginClasses({
        margin,
        marginTop,
        marginRight,
        marginBottom,
        marginLeft,
        marginX,
        marginY,
      }),

      // paddings
      getPaddingClasses({
        padding,
        paddingTop,
        paddingRight,
        paddingBottom,
        paddingLeft,
        paddingX,
        paddingY,
      })
    )}
    children={children}
  />
);

/**
 * Возвращает строку с CSS-классами для установки внешних отступов.
 * @param props Свойства.
 * @param props.margin Значение свойства margin в шагах (4px).
 * @param props.marginTop Значение свойства margin-top в шагах (4px).
 * @param props.marginBottom Значение свойства margin-bottom в шагах (4px).
 * @param props.marginLeft Значение свойства margin-left в шагах (4px).
 * @param props.marginRight Значение свойства margin-right в шагах (4px).
 * @param props.marginX Значение свойства margin-x в шагах (4px).
 * @param props.marginY Значение свойства margin-y в шагах (4px).
 * @return Строка с классами.
 */
const getMarginClasses = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
}: {
  margin?: number
  marginTop?: number
  marginBottom?: number
  marginLeft?: number
  marginRight?: number
  marginX?: number
  marginY?: number
}) => {
  const result = [];
  const isValid = Spacing.isMargin;

  const hasMargin = isValid(margin);
  const hasMarginX = isValid(marginX);
  const hasMarginY = isValid(marginY);
  const hasMarginTop = isValid(marginTop);
  const hasMarginBottom = isValid(marginBottom);
  const hasMarginLeft = isValid(marginLeft);
  const hasMarginRight = isValid(marginRight);

  hasMargin && result.push(
    !hasMarginTop && !hasMarginY && Spacing.marginTop(margin),
    !hasMarginBottom && !hasMarginY && Spacing.marginBottom(margin),

    !hasMarginLeft && !hasMarginX && Spacing.marginLeft(margin),
    !hasMarginRight && !hasMarginX && Spacing.marginRight(margin)
  );

  hasMarginX && result.push(
    !hasMarginLeft && Spacing.marginLeft(marginX),
    !hasMarginRight && Spacing.marginRight(marginX)
  );
  hasMarginY && result.push(
    !hasMarginTop && Spacing.marginTop(marginY),
    !hasMarginBottom && Spacing.marginBottom(marginY)
  );

  hasMarginTop && result.push(Spacing.marginTop(marginTop));
  hasMarginRight && result.push(Spacing.marginRight(marginRight));
  hasMarginBottom && result.push(Spacing.marginBottom(marginBottom));
  hasMarginLeft && result.push(Spacing.marginLeft(marginLeft));

  return result.filter(Boolean).join(' ');
};

/**
 * Возвращает строку с CSS-классами для установки внутренних отступов.
 * @param props Свойства.
 * @param props.padding Значение свойства padding в шагах (4px).
 * @param props.paddingTop Значение свойства padding-top в шагах (4px).
 * @param props.paddingBottom Значение свойства padding-bottom в шагах (4px).
 * @param props.paddingLeft Значение свойства padding-left в шагах (4px).
 * @param props.paddingRight Значение свойства padding-right в шагах (4px).
 * @param props.paddingX Значение свойства padding-x в шагах (4px).
 * @param props.paddingY Значение свойства padding-y в шагах (4px).
 * @return Строка с классами.
 */
const getPaddingClasses = ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
}: {
  padding?: number
  paddingTop?: number
  paddingBottom?: number
  paddingLeft?: number
  paddingRight?: number
  paddingX?: number
  paddingY?: number
}) => {
  const result = [];
  const isValid = Spacing.isPadding;

  const hasPadding = isValid(padding);
  const hasPaddingX = isValid(paddingX);
  const hasPaddingY = isValid(paddingY);
  const hasPaddingTop = isValid(paddingTop);
  const hasPaddingBottom = isValid(paddingBottom);
  const hasPaddingLeft = isValid(paddingLeft);
  const hasPaddingRight = isValid(paddingRight);

  hasPadding && result.push(
    !hasPaddingTop && !hasPaddingY && Spacing.paddingTop(padding),
    !hasPaddingBottom && !hasPaddingY && Spacing.paddingBottom(padding),

    !hasPaddingLeft && !hasPaddingX && Spacing.paddingLeft(padding),
    !hasPaddingRight && !hasPaddingX && Spacing.paddingRight(padding)
  );

  hasPaddingX && result.push(
    !hasPaddingLeft && Spacing.paddingLeft(paddingX),
    !hasPaddingRight && Spacing.paddingRight(paddingX)
  );
  hasPaddingY && result.push(
    !hasPaddingTop && Spacing.paddingTop(paddingY),
    !hasPaddingBottom && Spacing.paddingBottom(paddingY)
  );

  hasPaddingTop && result.push(Spacing.paddingTop(paddingTop));
  hasPaddingRight && result.push(Spacing.paddingRight(paddingRight));
  hasPaddingBottom && result.push(Spacing.paddingBottom(paddingBottom));
  hasPaddingLeft && result.push(Spacing.paddingLeft(paddingLeft));

  return result.filter(Boolean).join(' ');
};

export default Box;
