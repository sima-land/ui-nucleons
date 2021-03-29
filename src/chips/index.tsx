import React from 'react';
import classnames from 'classnames/bind';
import styles from './chips.scss';

interface ChipsItem {
  href?: string
  children?: React.ReactNode
  [x: string]: any
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

  /** Элементы списка. */
  items: ChipsItem[]

  /** Сработает при клике на элемент. */
  onItemClick?: (item: ChipsItem, event: React.MouseEvent<HTMLAnchorElement>) => void

  /** Определит, отмечен ли переданный элемент. */
  isItemChecked?: (item: ChipsItem, index: number) => boolean
}

const cx = classnames.bind(styles);

/**
 * Список "чипсов".
 * @param props Свойства.
 * @return Элемент.
 */
export const Chips: React.FC<Props> = ({
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
