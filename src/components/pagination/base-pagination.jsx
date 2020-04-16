import React from 'react';
import Icon from '../icon';
import { PageButton } from './page-button';
import { getPageButtons, cx } from './utils';
import allPass from 'lodash/fp/allPass';
import always from 'lodash/fp/always';
import cond from 'lodash/fp/cond';
import eq from 'lodash/fp/eq';
import has from 'lodash/has';
import isFunction from 'lodash/isFunction';
import noop from 'lodash/fp/noop';
import prop from 'lodash/fp/prop';
import propEq from 'lodash/fp/propEq';
import T from 'lodash/fp/T';
import { marginRight, marginLeft } from '../styling/sizes';
import PropTypes from 'prop-types';

import leftIcon from '../icons/stroke-arrow-left.svg';
import rightIcon from '../icons/stroke-arrow-right.svg';

const DEFAULTS = Object.freeze({
  // eslint-disable-next-line react/prop-types
  renderButton: ({ type, isFirst, isLast, ...restProps }, index) => (
    <PageButton
      key={index}
      rounded={resolveRounded({ type, isFirst, isLast })}
      className={getClassByType(type)}
      {...restProps}
    />
  ),
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
  prev: <Icon inline size={16} icon={leftIcon} />,
  next: <Icon inline size={16} icon={rightIcon} />,
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
        type: BUTTON_TYPES.prev,
        children: BUTTON_CONTENTS.prev,
        onClick: () => hasHandler && onButtonClick(current - 1),
      })}

      {pageButtons.map(({ content, value }, index) => renderButton({
        type: content === BUTTON_TYPES.more
          ? BUTTON_TYPES.more
          : undefined,
        isFirst: index === 0,
        isLast: index === pageButtons.length - 1,
        children: has(BUTTON_CONTENTS, content)
          ? BUTTON_CONTENTS[content]
          : content,
        selected: isButtonSelected(content),
        'aria-label': `Перейти на страницу ${value}`,
        onClick: () => hasHandler && onButtonClick(value),
      }, index))}

      {needNextButton({ current, total }) && renderButton({
        'aria-label': 'Вперед',
        type: BUTTON_TYPES.next,
        children: BUTTON_CONTENTS.next,
        onClick: () => hasHandler && onButtonClick(current + 1),
      })}
    </div>
  );
};

const resolveRounded = cond([
  [propEq('type', BUTTON_TYPES.prev), always('all')],
  [propEq('type', BUTTON_TYPES.next), always('all')],
  [allPass([prop('isFirst'), prop('isLast')]), always('all')],
  [prop('isFirst'), always('left')],
  [prop('isLast'), always('right')],
  [T, always('none')],
]);

const getClassByType = cond([
  [eq(BUTTON_TYPES.prev), always(marginRight(2))],
  [eq(BUTTON_TYPES.next), always(marginLeft(2))],
  [T, noop],
]);

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
