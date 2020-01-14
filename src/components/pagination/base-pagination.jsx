import React from 'react';
import { PageButton } from './page-button';
import { getPageButtons } from './utils';
import eq from 'lodash/fp/eq';
import has from 'lodash/has';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './pagination.scss';

const cx = classnames.bind(classes);

const DEFAULTS = Object.freeze({
  renderButton: (props, index) => <PageButton key={index} {...props} />,
  needPrevButton: ({ current }) => current > 1,
  needNextButton: ({ current, total }) => current < total,
  calculateButtons: getPageButtons,
});

export const BUTTON_TYPES = Object.freeze({
  prev: 'prev',
  next: 'next',
  more: 'more',
});

export const BUTTON_CONTENTS = Object.freeze({
  prev: '←',
  next: '→',
  more: '...',
});

/**
 * Возвращает базовый компонент списка кнопок навигации по страницам.
 * @param {Object} props Свойства.
 * @param {number} props.total Номер последней страницы.
 * @param {number} props.current Номер текущей страницы.
 * @param {Function} [props.isButtonSelected] Должна определить что кнопка выбрана.
 * @param {Function} [props.onButtonClick] Сработает при клике на кнопку.
 * @param {Function} [props.renderButton] Должна вернуть компонент кнопки.
 * @param {Function} [props.needPrevButton] Должна определить, нужно ла выводить кнопку "Вперед".
 * @param {Function} [props.needNextButton] Должна определить, нужно ла выводить кнопку "Назад".
 * @param {Function} [props.calculateButtons] Должна вернуть список кнопок (например ['prev', 1, 2, 3, 'next']).
 * @return {ReactElement} Базовый компонент базовой списка кнопок навигации по страницам.
 */
export const BasePagination = ({
  total,
  current,
  onButtonClick,
  isButtonSelected = eq(current),
  renderButton = DEFAULTS.renderButton,
  needPrevButton = DEFAULTS.needPrevButton,
  needNextButton = DEFAULTS.needNextButton,
  calculateButtons = DEFAULTS.calculateButtons,
}) => {
  const hasHandler = isFunction(onButtonClick);
  const pageButtons = calculateButtons({
    current,
    total,
    buttonKeys: BUTTON_TYPES,
  });

  return (
    <div className={cx('base-pagination-wrapper')}>
      {needPrevButton({ current, total }) && renderButton({
        'aria-label': 'Назад',
        children: BUTTON_CONTENTS.prev,
        onClick: () => hasHandler && onButtonClick(current - 1),
      })}
      {pageButtons.map((content, index) => renderButton({
        'aria-label': content === BUTTON_TYPES.more
          ? 'Выбрать страницу'
          : undefined,
        children: has(BUTTON_CONTENTS, content)
          ? BUTTON_CONTENTS[content]
          : content,
        selected: isButtonSelected(content),
        onClick: () => hasHandler && onButtonClick(content),
      }, index))}
      {needNextButton({ current, total }) && renderButton({
        'aria-label': 'Вперед',
        children: BUTTON_CONTENTS.next,
        onClick: () => hasHandler && onButtonClick(current + 1),
      })}
    </div>
  );
};

BasePagination.propTypes = {
  /**
   * Номер последней страницы.
   */
  total: PropTypes.number,

  /**
   * Номер текущей страницы.
   */
  current: PropTypes.number,

  /**
   * Должна определить что кнопка выбрана.
   */
  isButtonSelected: PropTypes.func,

  /**
   * Сработает при клике на кнопку.
   */
  onButtonClick: PropTypes.func,

  /**
   * Должна вернуть компонент кнопки.
   */
  renderButton: PropTypes.func,

  /**
   * Должна определить, нужно ла выводить кнопку "Вперед".
   */
  needPrevButton: PropTypes.func,

  /**
   * Должна определить, нужно ла выводить кнопку "Назад".
   */
  needNextButton: PropTypes.func,

  /**
   * Должна вернуть список кнопок (например ['prev', 1, 2, 3, 'next']).
   */
  calculateButtons: PropTypes.func,
};
