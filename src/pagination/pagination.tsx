import { Fragment, MouseEventHandler, useCallback, useMemo, useRef } from 'react';
import type {
  GetPaginationItemProps,
  PaginationButton,
  PaginationItemProps,
  PaginationProps,
} from './types';
import { getPaginationItems } from './utils';
import { PaginationItem } from './pagination-item';
import LeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right';
import classNames from 'classnames/bind';
import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

/**
 * Кнопки навигации по страницам.
 * @param props Свойства.
 * @return Элемент.
 */
export function Pagination({
  current = 1,
  total = 1,
  onChange,
  getItems = getPaginationItems,
  renderItem = renderPaginationItem,
}: PaginationProps) {
  const items = useMemo(() => getItems({ current, total }), [current, total]);

  const onChangeRef = useRef(onChange);
  onChangeRef.current = onChange;

  const getItemProps = useCallback(
    (
      item: PaginationButton,
      index: number,
      userProps?: PaginationItemProps,
    ): PaginationItemProps => {
      // eslint-disable-next-line require-jsdoc
      const handleClick: MouseEventHandler<HTMLAnchorElement> = event => {
        if (item.value !== current) {
          onChangeRef.current?.(event, item);
        }

        userProps?.onClick?.(event);
      };

      if (item.type === 'page') {
        let rounds: PaginationItemProps['rounds'];

        if (index === 0 || items[index - 1].type === 'prev') {
          rounds = 'left';
        } else if (index === items.length - 1 || items[index + 1].type === 'next') {
          rounds = 'right';
        }

        return {
          rounds,
          checked: item.value === current,
          'aria-label': `Перейти на страницу ${item.value}`,
          children: item.value,
          ...userProps,
          onClick: handleClick,
          className: cx('page', userProps?.className),
        };
      }

      if (item.type === 'prev') {
        return {
          rounds: 'all',
          disabled: current <= 1,
          'aria-label': 'Предыдущая страница',
          children: <LeftSVG fill='currentColor' />,
          ...userProps,
          onClick: handleClick,
          className: cx('prev', userProps?.className),
        };
      }

      if (item.type === 'more') {
        return {
          'aria-label': `Перейти на страницу ${item.value}`,
          children: '…',
          ...userProps,
          onClick: handleClick,
          className: cx('page', userProps?.className),
        };
      }

      if (item.type === 'next') {
        return {
          rounds: 'all',
          disabled: current >= total,
          'aria-label': 'Следующая страница',
          children: <RightSVG fill='currentColor' />,
          ...userProps,
          onClick: handleClick,
          className: cx('next', userProps?.className),
        };
      }

      return {};
    },
    [current, total, items],
  );

  return (
    <div className={cx('root')} role='navigation' aria-label='Навигация по страницам'>
      {items.map((item, index) => (
        <Fragment key={index}>
          {renderItem(item, userProps => getItemProps(item, index, userProps))}
        </Fragment>
      ))}
    </div>
  );
}

/**
 * Рендер кнопки по умолчанию.
 * @param button Данные кнопки.
 * @param getProps Вернет свойства для PaginationItem.
 * @return Элемент.
 */
function renderPaginationItem(button: PaginationButton, getProps: GetPaginationItemProps) {
  return <PaginationItem {...getProps()} />;
}