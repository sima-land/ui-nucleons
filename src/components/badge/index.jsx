import React from 'react';
import styles from './badge.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import cond from 'lodash/fp/cond';
import pipe from 'lodash/fp/pipe';
import assoc from 'lodash/fp/assoc';
import pick from 'lodash/fp/pick';
import propEq from 'lodash/fp/propEq';
import omit from 'lodash/fp/omit';
import curry from 'lodash/fp/curry';
import path from 'lodash/fp/path';
import identity from 'lodash/fp/identity';
import T from 'lodash/stubTrue';
import Timer from '../timer';
import rename from '../helpers/rename';
import { ReactSVG } from 'react-svg';
import isBrowser from '../helpers/is-browser';

const cx = classnames.bind(styles);

/**
 * Компонент шильдика.
 * @param {Object} props Свойства компонента.
 * @param {Object} props.containerProps Свойства для обертки компонента.
 * @param {string} props.title Текст при наведении.
 * @param {string} props.link URL.
 * @param {string} props.textColor Цвет текста.
 * @param {string} props.bgColor Цвет фона.
 * @param {string} props.strokeColor Цвет иконки.
 * @param {Array} props.fields Массив с контентыми полями для шильдика.
 * @return {ReactElement} Шильдик.
 */
export const Badge = ({
  containerProps = {},
  title,
  link,
  textColor: color = '#fff',
  bgColor: backgroundColor = '#000',
  strokeColor: fill = '#fff',
  fields = [],
  isIconOnly = false,
}) => (
  <span
    {...containerProps}
    className={cx(
      'container',
      { 'container-icon': isIconOnly },
      containerProps.className,
    )}
    style={{
      color,
      backgroundColor,
      fill,
      ...containerProps.style,
    }}
    title={title}
  >
    <span className={cx('content')}>
      {link
        ? (
          <a href={link} className={cx('link')}>
            {map(fields, renderField)}
          </a>
        )
        : map(fields, renderField)
      }
    </span>
  </span>
);

export default Badge;

/**
 * Возвращает компонент контентного поля шильдика.
 * @param {Object} field Поле с данными.
 * @param {number} [index] Индекс.
 * @return {ReactElement} Компонент.
 */
export const renderField = (field, index) => {
  const { Component, ...props } = resolveFieldComponent(field);
  return <Component {...props} key={index} />;
};

const typeEq = propEq('type');

/**
 * Устанавливает выбранные поля в свойство style.
 * @param {string|Array} propKeys Свойства поля.
 * @return {Function} Обработчик.
 */
const style = propKeys => cond([
  [path(propKeys), curry(source => assoc(
    'style',
    pick(propKeys, source),
    omit(propKeys, source)
  ))],
  [T, identity],
]);

/**
 * Обрабатывает свойства для таймера.
 */
const timeProps = curry(source => assoc(
  'timeProps',
  pick('style', style('color')(source)),
  omit('color', source)
));

/**
 * Возвращает преобразованный объект с контентным полем шильдика.
 * @param {Object} field Данные контентного поля шильдика.
 * @return {Object} Преобразованные данные.
 */
const resolveFieldComponent = cond([
  [typeEq('svg'), cond([
    [isBrowser, pipe(
      pick(['value', 'color']),
      assoc('Component', ReactSVG),
      rename('value', 'src'),
      assoc('wrapper', 'span'),
      assoc('fallback', 'img'),
      assoc('className', cx('icon')),
      style('color'),
    )],
    [T, pipe(
      assoc('Component', 'div'),
      assoc('className', cx('icon', 'empty'))
    )],
  ])],
  [typeEq('icon'), pipe(
    pick(['value', 'title']),
    assoc('Component', 'img'),
    assoc('className', cx('icon')),
    rename('value', 'src'),
    rename('title', 'alt'),
  )],
  [typeEq('timer'), pipe(
    pick(['value', 'format', 'textColor']),
    assoc('Component', Timer),
    assoc('className', cx('text')),
    rename('value', 'endTime'),
    rename('textColor', 'color'),
    cond([
      [path('color'), timeProps],
      [T, identity],
    ])
  )],
  [T, pipe(
    pick(['value', 'textColor']),
    assoc('Component', 'span'),
    assoc('className', cx('text')),
    rename('value', 'children'),
    rename('textColor', 'color'),
    style('color'),
  )],
]);

Badge.propTypes = {
  /**
   * Свойства шильдика.
   */
  containerProps: PropTypes.object,

  /**
   * Всплывающая подсказка.
   */
  title: PropTypes.string,

  /**
   * Ссылка.
   */
  link: PropTypes.string,

  /**
   * Цвет шрифта шильдика.
   */
  textColor: PropTypes.string,

  /**
   * Цвет фона шильдика.
   */
  bgColor: PropTypes.string,

  /**
   * Цвет икноки.
   */
  strokeColor: PropTypes.string,

  /**
   * Массив полей шильдика.
   */
  fields: PropTypes.array,

  /**
   * Признак наличия только одной иконки в массиве полей fields.
   */
  isIconOnly: PropTypes.bool,
};
