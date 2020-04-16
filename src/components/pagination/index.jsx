import React from 'react';
import isFunction from 'lodash/isFunction';
import { BasePagination } from './base-pagination';
import PropTypes from 'prop-types';

/**
 * Возвращает компонент списка кнопок навигации по страницам.
 * @param {Object} props Свойства.
 * @param {number} props.total Номер последней страницы.
 * @param {number} props.current Номер текущей страницы.
 * @param {Function} props.onChange Сработает при выборе страницы.
 * @return {ReactElement} Компонент списка кнопок навигации по страницам.
 */
const Pagination = ({
  total,
  current,
  onChange,
}) => {
  const hasChangeHandler = isFunction(onChange);

  return (
    <BasePagination
      total={total}
      current={current}
      onButtonClick={content => {
        Number.isFinite(content)
          && hasChangeHandler
          && onChange({ value: content });
      }}
    />
  );
};

Pagination.propTypes = {
  /**
   * Номер последней страницы.
   */
  total: PropTypes.number,

  /**
   * Номер текущей страницы.
   */
  current: PropTypes.number,

  /**
   * Сработает при выборе страницы.
   */
  onChange: PropTypes.func,
};

export default Pagination;
