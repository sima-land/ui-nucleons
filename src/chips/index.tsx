import React from 'react';
import classnames from 'classnames/bind';
import CrossSVG from '@dev-dep/ui-quarks/icons/16x16/Stroked/cross';
import styles from './chips.scss';

interface ChipsItem {
  href?: string
  children?: React.ReactNode
  withCross?: boolean
  target?: string
  [x: string]: any
}

export interface Props extends React.HTMLAttributes<HTMLDivElement> {

  /** Элементы списка. */
  items: ChipsItem[]

  /** Сработает при клике на элемент. */
  onItemClick?: (item: ChipsItem, event: React.MouseEvent<HTMLAnchorElement>) => void

  /** Определит, отмечен ли переданный элемент. */
  isItemChecked?: (item: ChipsItem, index: number) => boolean

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

const cx = classnames.bind(styles);

/**
 * Список "чипсов".
 * @param props Свойства.
 * @return Элемент.
 */
export const Chips = ({
  items,
  onItemClick,
  isItemChecked,
  className,
  'data-testid': testId = 'chips',
  ...restProps
}: Props) => (
  <div {...restProps} className={cx('list', className)} data-testid={testId}>
    {items.map((item, index) => {
      const { href, target, children, withCross } = item;

      return (
        <a
          href={href}
          role={href ? undefined : 'button'}
          key={index}
          className={cx(
            'item',
            isItemChecked?.(item, index) && 'checked'
          )}
          target={target}
          onClick={e => onItemClick?.(item, e)}
          data-testid='chips:item'
        >
          {children}
          {withCross && (
            <CrossSVG className={cx('cross-svg')} />
          )}
        </a>
      );
    })}
  </div>
);
