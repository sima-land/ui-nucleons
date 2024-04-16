import { Fragment, MouseEventHandler, useCallback, useMemo, useRef } from 'react';
import type {
  GetPaginationItemProps,
  PaginationButton,
  PaginationItemProps,
  PaginationProps,
} from './types';
import { getPaginationItems, validatePaginationState } from './utils';
import { PaginationItem } from './pagination-item';
import LeftSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandLeft';
import RightSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/ArrowExpandRight';
import classNames from 'classnames/bind';
import styles from './pagination.m.scss';

const cx = classNames.bind(styles);

/**
 * Кнопки навигации по страницам.
 * @param props Свойства.
 * @return Элемент.
 */
export function Pagination({
  rootRef,
  current: currentProp,
  total: totalProp,
  onPageChange,
  getItems = getPaginationItems,
  renderItem = renderPaginationItem,
  className,
  ...restProps
}: PaginationProps) {
  const { current, total } = useMemo(
    () => validatePaginationState({ current: currentProp, total: totalProp }),
    [currentProp, totalProp],
  );
  const items = useMemo(() => getItems({ current, total }), [current, total, getItems]);

  const onChangeRef = useRef(onPageChange);
  onChangeRef.current = onPageChange;

  const getItemProps = useCallback(
    (
      item: PaginationButton,
      index: number,
      userProps: PaginationItemProps = {},
    ): PaginationItemProps => {
      // eslint-disable-next-line require-jsdoc
      const onClick: MouseEventHandler<HTMLAnchorElement> = event => {
        if (item.value !== current) {
          onChangeRef.current?.(event, item);
        }

        userProps.onClick?.(event);
      };

      if (item.type === 'page') {
        let rounds: PaginationItemProps['rounds'];

        if (index === 0 || items[index - 1].type === 'prev') {
          rounds = total === 1 ? 'all' : 'left';
        } else if (index === items.length - 1 || items[index + 1].type === 'next') {
          rounds = 'right';
        }

        return {
          rounds,
          checked: item.value === current,
          'aria-label': `Перейти на страницу ${item.value}`,
          children: item.value,
          ...userProps,
          onClick,
          className: cx('page', userProps.className, item.value > 999 && 'large'),
        };
      }

      if (item.type === 'prev') {
        return {
          rounds: 'all',
          disabled: current <= 1,
          'aria-label': 'Предыдущая страница',
          children: <LeftSVG fill='currentColor' />,
          ...userProps,
          onClick,
          className: cx('prev', userProps.className),
        };
      }

      if (item.type === 'more') {
        return {
          'aria-label': `Перейти на страницу ${item.value}`,
          children: '…',
          ...userProps,
          onClick,
          className: cx('page', userProps.className),
        };
      }

      if (item.type === 'next') {
        return {
          rounds: 'all',
          disabled: current >= total,
          'aria-label': 'Следующая страница',
          children: <RightSVG fill='currentColor' />,
          ...userProps,
          onClick,
          className: cx('next', userProps.className),
        };
      }

      return {};
    },
    [current, total, items],
  );

  return (
    <div
      ref={rootRef}
      className={cx('root', className)}
      role='navigation'
      aria-label='Навигация по страницам'
      {...restProps}
    >
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
