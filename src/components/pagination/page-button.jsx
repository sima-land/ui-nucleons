import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './pagination.scss';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент кнопки страницы по умолчанию. Поддерживаются свойства элемента button.
 * @param {Object} props Свойства.
 * @param {boolean} props.selected Выбрана ли кнопка.
 * @return {ReactElement} Компонент кнопки по умолчанию.
 */
export const PageButton = ({
  selected,
  ...restProps
}) => (
  <button
    {...restProps}
    className={cx('page-button', selected && 'selected')}
  />
);

PageButton.propTypes = {
  /**
   * Тип кнопки или номер.
   */
  content: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['prev', 'next', 'more']),
  ]),

  /**
   * Выбрана ли кнопка.
   */
  selected: PropTypes.bool,
};
