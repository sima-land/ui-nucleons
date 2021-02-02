import React from 'react';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './chips.scss';

const cx = classnames.bind(styles);

/**
 * Список "чипсов".
 * @param {Object} props Свойства.
 * @param {Array<{ href, children }>} props.items Элементы списка.
 * @param {Function} [props.onItemClick] Сработает при клике на элемент.
 * @param {Function} [props.isItemChecked] Определит, отмечен ли переданный элемент.
 * @param {string} [props.className] Класс.
 * @return {ReactElement} Компонент.
 */
export const Chips = ({
  items,
  onItemClick,
  isItemChecked,
  className,
  ...restProps
}) => (
  <div {...restProps} className={cx('list', className)}>
    {items.map(
      (item, index) => (
        <a
          {...item}
          key={index}
          className={cx(
            'item',
            isItemChecked?.(item, index) && 'checked'
          )}
          onClick={e => {
            onItemClick?.(item, e);
          }}
        />
      )
    )}
  </div>
);

Chips.propTypes = {
  items: PropTypes.array,
  onItemClick: PropTypes.func,
  isItemChecked: PropTypes.func,
  className: PropTypes.string,
};
