import { PageButton, PageButtonProps } from './page-button';
import { getPageButtons, cx } from './utils';
import { marginRight, marginLeft } from '../styling/sizes';
import LeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right';
import { FC, ReactNode } from 'react';

/** @deprecated */
interface RenderButtonProps extends PageButtonProps {
  type?: 'prev' | 'next' | 'more';
  isFirst?: boolean;
  isLast?: boolean;
  page?: number;
  selected?: boolean;
}

/** @deprecated */
export interface BasePaginationProps {
  total: number;
  current: number;
  onButtonClick?: (n: number) => void;
  isButtonSelected?: (n: string | number) => boolean;
  renderButton?: (p: RenderButtonProps, i?: number) => ReactNode;
  needPrevButton?: (data: { current: number; total: number }) => boolean;
  needNextButton?: (data: { current: number; total: number }) => boolean;
  calculateButtons?: typeof getPageButtons;
}

const DEFAULTS: Required<
  Omit<BasePaginationProps, 'total' | 'current' | 'onButtonClick' | 'isButtonSelected'>
> = {
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

/** @deprecated */
export const BUTTON_TYPES = {
  prev: 'prev',
  next: 'next',
  more: 'more',
} as const;

/** @deprecated */
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
 * @deprecated
 */
export const BasePagination: FC<BasePaginationProps> = ({
  total,
  current,
  onButtonClick,
  isButtonSelected = a => a === current,
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
      {needPrevButton({ current, total }) &&
        renderButton({
          'aria-label': 'Назад',
          type: BUTTON_TYPES.prev,
          children: BUTTON_CONTENTS.prev,
          onClick: () => onButtonClick && onButtonClick(current - 1),
          page: current - 1,
        })}

      {pageButtons.map(({ content, value }, index) =>
        renderButton(
          {
            type: content === BUTTON_TYPES.more ? BUTTON_TYPES.more : undefined,
            isFirst: index === 0,
            isLast: index === pageButtons.length - 1,
            children: Object.keys(BUTTON_CONTENTS).includes(content as any)
              ? (BUTTON_CONTENTS as any)[content]
              : content,
            selected: isButtonSelected(content),
            'aria-label': `Перейти на страницу ${value}`,
            onClick: () => onButtonClick && onButtonClick(value),
            page: value,
          },
          index,
        ),
      )}

      {needNextButton({ current, total }) &&
        renderButton({
          'aria-label': 'Вперед',
          type: BUTTON_TYPES.next,
          children: BUTTON_CONTENTS.next,
          onClick: () => onButtonClick && onButtonClick(current + 1),
          page: current + 1,
        })}
    </div>
  );
};

/** @inheritdoc */
function resolveRounded(data: {
  type?: string;
  isFirst?: boolean;
  isLast?: boolean;
}): PageButtonProps['rounded'] {
  switch (true) {
    case data.type === BUTTON_TYPES.prev:
      return 'all';
    case data.type === BUTTON_TYPES.next:
      return 'all';
    case Boolean(data.isFirst && data.isLast):
      return 'all';
    case Boolean(data.isFirst):
      return 'left';
    case Boolean(data.isLast):
      return 'right';
    default:
      return 'none';
  }
}

/** @inheritdoc */
function getClassByType(type: string | undefined | null) {
  switch (type) {
    case BUTTON_TYPES.prev:
      return marginRight(2);
    case BUTTON_TYPES.next:
      return marginLeft(2);
    default:
      undefined;
  }
}
