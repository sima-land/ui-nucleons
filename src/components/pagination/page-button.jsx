import React from 'react';
import PropTypes from 'prop-types';
import { cx } from './utils';

/**
 * Возвращает компонент кнопки страницы по умолчанию. Поддерживаются свойства элемента button.
 * @param {Object} props Свойства.
 * @param {boolean} props.selected Выбрана ли кнопка.
 * @param {string} [props.className] CSS-класс.
 * @param {'all'|'none'|'left'|'right'} [props.rounded='all'] С какой стороны делать скругления.
 * @return {ReactElement} Компонент кнопки по умолчанию.
 */
export const PageButton = ({
  selected,
  rounded = 'all',
  className,
  ...restProps
}) => (
  <button
    {...restProps}
    className={cx(
      'page-button',
      selected && 'selected',
      rounded === 'all' && 'rounds-all',
      rounded === 'left' && 'rounds-left',
      rounded === 'right' && 'rounds-right',
      className
    )}
  />
);

PageButton.propTypes = {
  /**
   * Выбрана ли кнопка.
   */
  selected: PropTypes.bool,

  /**
   * CSS-класс.
   */
  className: PropTypes.string,

  /**
   * С какой стороны делать скругления.
   */
  rounded: PropTypes.oneOf(['all', 'none', 'left', 'right']),
};
