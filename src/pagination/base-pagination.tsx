import React from 'react';
import { PageButton, PageButtonProps } from './page-button';
import { getPageButtons, cx } from './utils';
import { allPass, always, cond, eq, prop, propEq, T } from 'lodash/fp';
import { has } from 'lodash';
import { marginRight, marginLeft } from '../styling/sizes';
import LeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/left';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/right';

interface RenderButtonProps extends PageButtonProps {
  type?: 'prev' | 'next' | 'more'
  isFirst?: boolean
  isLast?: boolean
  page?: number
  selected?: boolean
}

export interface BasePaginationProps {
  total: number
  current: number
  onButtonClick?: (n: number) => void
  isButtonSelected?: (n: string | number) => boolean
  renderButton?: (p: RenderButtonProps, i?: number) => React.ReactNode
  needPrevButton?: (data: { current: number, total: number }) => boolean
  needNextButton?: (data: { current: number, total: number }) => boolean
  calculateButtons?: typeof getPageButtons
}

const DEFAULTS: Required<Omit<BasePaginationProps, 'total' | 'current' | 'onButtonClick' | 'isButtonSelected'>> = {
  renderButton: ({ type, isFirst, isLast, ...restProps }, index) => (
    <PageButton
      key={index}
      rounded={resolveRounded({ type, isFirst, isLast })}
      className={getClassByType(type) as any}
      {...restProps}
    />
  ),
  needPrevButton: ({ current }) => current > 1,
  needNextButton: ({ current, total }) => current < total,
  calculateButtons: getPageButtons,
} as const;

export const BUTTON_TYPES = {
  prev: 'prev',
  next: 'next',
  more: 'more',
} as const;

export const BUTTON_CONTENTS = {
  prev: <LeftSVG className={cx('icon')} />,
  next: <RightSVG className={cx('icon')} />,
  more: '...',
} as const;

/**
 * Возвращает базовый компонент списка кнопок навигации по страницам.
 * @param props Свойства.
 * @param props.total Номер последней страницы.
 * @param props.current Номер текущей страницы.
 * @param props.isButtonSelected Должна определить что кнопка выбрана.
 * @param props.onButtonClick Сработает при клике на кнопку.
 * @param props.renderButton Должна вернуть компонент кнопки.
 * @param props.needPrevButton Должна определить, нужно ла выводить кнопку "Вперед".
 * @param props.needNextButton Должна определить, нужно ла выводить кнопку "Назад".
 * @param props.calculateButtons Должна вернуть список кнопок (например ['prev', 1, 2, 3, 'next']).
 * @return Элемент.
 */
export const BasePagination: React.FC<BasePaginationProps> = ({
  total,
  current,
  onButtonClick,
  isButtonSelected = eq(current),
  renderButton = DEFAULTS.renderButton,
  needPrevButton = DEFAULTS.needPrevButton,
  needNextButton = DEFAULTS.needNextButton,
  calculateButtons = DEFAULTS.calculateButtons,
}) => {
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
        onClick: () => onButtonClick && onButtonClick(current - 1),
        page: current - 1,
      })}

      {pageButtons.map(({ content, value }, index) => renderButton({
        type: content === BUTTON_TYPES.more
          ? BUTTON_TYPES.more
          : undefined,
        isFirst: index === 0,
        isLast: index === pageButtons.length - 1,
        children: has(BUTTON_CONTENTS, content)
          ? (BUTTON_CONTENTS as any)[content]
          : content,
        selected: isButtonSelected(content),
        'aria-label': `Перейти на страницу ${value}`,
        onClick: () => onButtonClick && onButtonClick(value),
        page: value,
      }, index))}

      {needNextButton({ current, total }) && renderButton({
        'aria-label': 'Вперед',
        type: BUTTON_TYPES.next,
        children: BUTTON_CONTENTS.next,
        onClick: () => onButtonClick && onButtonClick(current + 1),
        page: current + 1,
      })}
    </div>
  );
};

const resolveRounded = cond<any, PageButtonProps['rounded']>([
  [propEq('type', BUTTON_TYPES.prev), always('all')],
  [propEq('type', BUTTON_TYPES.next), always('all')],
  [allPass([prop('isFirst'), prop('isLast')]), always('all')],
  [prop('isFirst'), always('left')],
  [prop('isLast'), always('right')],
  [T, always('none')],
]);

const getClassByType = cond<any, string | undefined | null>([
  [eq(BUTTON_TYPES.prev), always(marginRight(2))],
  [eq(BUTTON_TYPES.next), always(marginLeft(2))],
  [T, () => undefined],
]);
