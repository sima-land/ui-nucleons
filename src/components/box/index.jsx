import React from 'react';
import allPass from 'lodash/fp/allPass';
import gte from 'lodash/fp/gte';
import prop from 'lodash/fp/prop';
import isInteger from 'lodash/isInteger';
import inRange from 'lodash/fp/inRange';
import __ from 'lodash/fp/placeholder';
import classnames from 'classnames/bind';
import classes from './box.scss';
import Type from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Определяет, является ли переданное значение шагом дизайн-системы.
 * Шаг - целое число от -12 до 12 (включая 0).
 * Один шаг равен 4 пикселям.
 */
const isStep = allPass(
  isInteger,
  inRange(-13, 13)
);

/**
 * Определяет, является ли переданное значение положительным или нулевым шагом.
 */
const isPositiveStep = allPass(
  isStep,
  gte(__, 0)
);

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
}) => (
  <Container
    style={getDangerousStyle(dangerouslySetInlineStyle)}
    className={cx([
      DISPLAY.has(display) && `display-${display}`,
      FLEX.has(flex) && `flex-${flex}`,
      DIRECTION.has(direction) && `direction-${direction}`,
      ALIGN_ITEMS.has(alignItems) && `align-items-${alignItems}`,
      JUSTIFY_CONTENT.has(justifyContent) && `justify-content-${justifyContent}`,
      wrap && 'flex-wrap',

      // margins
      isStep(margin) && `margin__${margin}`,
      isStep(marginTop) && `margin-top__${marginTop}`,
      isStep(marginRight) && `margin-right__${marginRight}`,
      isStep(marginBottom) && `margin-bottom__${marginBottom}`,
      isStep(marginLeft) && `margin-left__${marginLeft}`,
      isStep(marginX) && `margin-x__${marginX}`,
      isStep(marginY) && `margin-y__${marginY}`,

      // paddings
      isPositiveStep(padding) && `padding__${padding}`,
      isPositiveStep(paddingTop) && `padding-top__${paddingTop}`,
      isPositiveStep(paddingRight) && `padding-right__${paddingRight}`,
      isPositiveStep(paddingBottom) && `padding-bottom__${paddingBottom}`,
      isPositiveStep(paddingLeft) && `padding-left__${paddingLeft}`,
      isPositiveStep(paddingX) && `padding-x__${paddingX}`,
      isPositiveStep(paddingY) && `padding-y__${paddingY}`,
    ])}
    children={children}
  />
);

/**
 * Проверяет тип свойства на соответствие шагу.
 * @param {*} props Свойства.
 * @param {*} propName Имя проверяемого свойства.
 * @param {*} componentName Имя компонента.
 * @return {Error|undefined} Ошибка в случае не прохождения проверки.
 */
const checkStepType = (props, propName, componentName) => {
  if (!isStep(props[propName]) && props[propName] !== undefined) {
    return new Error(
      `Invalid "${propName}" prop value in component ${componentName}, value must be in range (-12, 12)`
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
  if (!isPositiveStep(props[propName]) && props[propName] !== undefined) {
    return new Error(
      `Invalid "${propName}" prop value in component ${componentName}, value must be in range (0, 12)`
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
};

export default Box;
