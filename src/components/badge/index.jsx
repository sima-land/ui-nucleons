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
import T from 'lodash/stubTrue';
import Timer from '../timer';
import rename from '../helpers/rename';

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
 * @param {boolean} props.isIconOnly Нужно ли выводить только иконку.
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
      containerProps.className
    )}
    style={isIconOnly
      ? containerProps.style
      : {
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
 * @param {number} index Индекс.
 * @return {ReactElement} Компонент.
 */
export const renderField = (field, index) => {
  const { Component, ...props } = resolveFieldComponent(field);
  return <Component {...props} key={index} />;
};

const typeEq = propEq('type');

/**
 * Возвращает преобразованный объект с контентным полем шильдика.
 * @param {Object} field Данные контентного поля шильдика.
 * @return {Object} Преобразованные данные.
 */
const resolveFieldComponent = cond([
  [typeEq('icon'), pipe(
    pick(['value', 'title']),
    assoc('Component', 'img'),
    rename('value', 'src'),
    rename('title', 'alt')
  )],
  [typeEq('timer'), pipe(
    pick(['value']),
    assoc('Component', props => (
      <time>
        <Timer {...props} />
      </time>
    )),
    rename('value', 'date')
  )],
  [T, pipe(
    pick(['value']),
    assoc('Component', 'span'),
    rename('value', 'children')
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
