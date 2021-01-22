import React from 'react';
import prop from 'lodash/fp/prop';
import classnames from 'classnames/bind';
import classes from './box.scss';
import Type from 'prop-types';
import * as Spacing from '../styling/sizes';
import { bgColor as getBgColorClass } from '../styling/colors';
import { COLORS } from '../constants';

const cx = classnames.bind(classes);

const getDangerousStyle = prop('__style');

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
 * Возвращает компонент блока, реализующего оформление в соответствии с дизайн-системой.
 * @param {Object} props Свойства.
 * @param {string} [props.element='div'] Элемент, который будет использован как блок.
 * @param {*} [props.children] Содержимое блока.
 * @param {'block'|'none'|'flex'|'inline'|'inline-block'} [props.display] Значение css-свойства "display".
 * @param {'shrink'|'grow'|'none'} [props.flex] Формирует значение css-свойства "flex".
 * @param {boolean} [props.wrap] Формирует значение css-свойства "flex-wrap".
 * @param {'row'|'column'} [props.direction] Значение css-свойства "direction".
 * @param {'start'|'end'|'center'|'baseline'|'stretch'} [props.alignItems] Значение свойства "alignItems".
 * @param {'start'|'end'|'center'|'between'|'around'} [props.justifyContent] Значение свойства "justifyContent".
 * @param {{ __style: Object }} [props.dangerouslySetInlineStyle] Объект для указания inline-стилей.
 * @param {number} [props.margin] Внешние отступы.
 * @param {number} [props.marginTop] Внешний отступ сверху.
 * @param {number} [props.marginRight] Внешний отступ справа.
 * @param {number} [props.marginBottom] Внешний отступ снизу.
 * @param {number} [props.marginLeft] Внешний отступ слева.
 * @param {number} [props.marginX] Внешний отступ по вертикали.
 * @param {number} [props.marginY] Внешний отступ по горизонтали.
 * @param {number} [props.padding] Внутренние отступы.
 * @param {number} [props.paddingTop] Внутренний отступ сверху.
 * @param {number} [props.paddingRight] Внутренний отступ справа.
 * @param {number} [props.paddingBottom] Внутренний отступ снизу.
 * @param {number} [props.paddingLeft] Внутренний отступ слева.
 * @param {number} [props.paddingX] Внутренний отступ по вертикали.
 * @param {number} [props.paddingY] Внутренний отступ по горизонтали.
 * @param {string} [props.color] Название цвета из дизайн-системы.
 * @return {ReactElement} Блок.
 */
const Box = ({
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
    style={getDangerousStyle(dangerouslySetInlineStyle)}
    className={cx(
      DISPLAY.has(display) && `display-${display}`,
      FLEX.has(flex) && `flex-${flex}`,
      DIRECTION.has(direction) && `direction-${direction}`,
      ALIGN_ITEMS.has(alignItems) && `align-items-${alignItems}`,
      JUSTIFY_CONTENT.has(justifyContent) && `justify-content-${justifyContent}`,
      COLORS.has(color) && getBgColorClass(color),
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
 * @param {Object} props Свойства.
 * @param {number} [props.margin] Значение свойства margin в шагах (4px).
 * @param {number} [props.marginTop] Значение свойства margin-top в шагах (4px).
 * @param {number} [props.marginBottom] Значение свойства margin-bottom в шагах (4px).
 * @param {number} [props.marginLeft] Значение свойства margin-left в шагах (4px).
 * @param {number} [props.marginRight] Значение свойства margin-right в шагах (4px).
 * @param {number} [props.marginX] Значение свойства margin-x в шагах (4px).
 * @param {number} [props.marginY] Значение свойства margin-y в шагах (4px).
 * @return {string} Строка с классами.
 */
const getMarginClasses = ({
  margin,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  marginX,
  marginY,
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
 * @param {Object} props Свойства.
 * @param {number} [props.padding] Значение свойства padding в шагах (4px).
 * @param {number} [props.paddingTop] Значение свойства padding-top в шагах (4px).
 * @param {number} [props.paddingBottom] Значение свойства padding-bottom в шагах (4px).
 * @param {number} [props.paddingLeft] Значение свойства padding-left в шагах (4px).
 * @param {number} [props.paddingRight] Значение свойства padding-right в шагах (4px).
 * @param {number} [props.paddingX] Значение свойства padding-x в шагах (4px).
 * @param {number} [props.paddingY] Значение свойства padding-y в шагах (4px).
 * @return {string} Строка с классами.
 */
const getPaddingClasses = ({
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  paddingX,
  paddingY,
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

/**
 * Проверяет тип свойства на соответствие шагу.
 * @param {*} props Свойства.
 * @param {*} propName Имя проверяемого свойства.
 * @param {*} componentName Имя компонента.
 * @return {Error|undefined} Ошибка в случае не прохождения проверки.
 */
const checkStepType = (props, propName, componentName) => {
  if (!Spacing.isMargin(props[propName]) && props[propName] !== undefined) {
    return new Error(
      `Invalid "${propName}" value in <${componentName} />, value must be in range (-8, 32)`
    );
  }
};

/**
 * Проверяет тип свойства на соответствие положительному или нулевому шагу.
 * @param {*} props Свойства.
 * @param {*} propName Имя проверяемого свойства.
 * @param {*} componentName Имя компонента.
 * @return {Error|undefined} Ошибка в случае не прохождения проверки.
 */
const checkPositiveStepType = (props, propName, componentName) => {
  if (!Spacing.isPadding(props[propName]) && props[propName] !== undefined) {
    return new Error(
      `Invalid "${propName}" value in <${componentName} />, value must be in range (0, 32)`
    );
  }
};

Box.propTypes = {
  /**
   * Имя элемента-контейнера.
   */
  element: Type.string,

  /**
   * Содержимое блока.
   */
  children: Type.any,

  /**
   * Значение CSS-свойства display.
   */
  display: Type.oneOf(Array.from(DISPLAY)),

  /**
   * Значение CSS-свойства "flex".
   */
  flex: Type.oneOf(Array.from(FLEX)),

  /**
   * Формирует значение CSS-свойства "flex-wrap".
   */
  wrap: Type.bool,

  /**
   * Значение CSS-свойства "flex-direction".
   */
  direction: Type.oneOf(Array.from(DIRECTION)),

  /**
   * Значение CSS-свойства "align-items".
   */
  alignItems: Type.oneOf(Array.from(ALIGN_ITEMS)),

  /**
   * Значение CSS-свойства "justify-content".
   */
  justifyContent: Type.oneOf(Array.from(JUSTIFY_CONTENT)),

  /**
   * Свойство для задания inline-стилей.
   */
  dangerouslySetInlineStyle: Type.shape({
    __style: Type.object,
  }),

  /**
   * Значение CSS-свойства "margin" (в единицах измерения дизайн системы).
   */
  margin: checkStepType,

  /**
   * Значение CSS-свойства "margin-top" (в единицах измерения дизайн системы).
   */
  marginTop: checkStepType,

  /**
   * Значение CSS-свойства "margin-right" (в единицах измерения дизайн системы).
   */
  marginRight: checkStepType,

  /**
   * Значение CSS-свойства "margin-bottom" (в единицах измерения дизайн системы).
   */
  marginBottom: checkStepType,

  /**
   * Значение CSS-свойства "margin-left" (в единицах измерения дизайн системы).
   */
  marginLeft: checkStepType,

  /**
   * Значение CSS-свойства "margin" по вертикали (в единицах измерения дизайн системы).
   */
  marginX: checkStepType,

  /**
   * Значение CSS-свойства "margin" по горизонтали (в единицах измерения дизайн системы).
   */
  marginY: checkStepType,

  /**
   * Значение CSS-свойства "padding" (в единицах измерения дизайн системы).
   */
  padding: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding-top" (в единицах измерения дизайн системы).
   */
  paddingTop: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding-right" (в единицах измерения дизайн системы).
   */
  paddingRight: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding-bottom" (в единицах измерения дизайн системы).
   */
  paddingBottom: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding-left" (в единицах измерения дизайн системы).
   */
  paddingLeft: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding" по вертикали(в единицах измерения дизайн системы).
   */
  paddingX: checkPositiveStepType,

  /**
   * Значение CSS-свойства "padding" по горизонтали (в единицах измерения дизайн системы).
   */
  paddingY: checkPositiveStepType,

  /**
   * Имя цвета в дизайн-системе.
   */
  color: Type.oneOf([...COLORS.keys()]),
};

export default Box;
