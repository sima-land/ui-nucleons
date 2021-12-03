import React from 'react';
import classnames from 'classnames/bind';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/cross';
import styles from './chips.module.scss';

export interface ChipsItemProps {
  href?: string;
  children?: React.ReactNode;
  withCross?: boolean;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  checked?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Элемент списка "чипсов".
 * @param props Свойства.
 * @return Элемент.
 */
export const ChipsItem = ({
  href,
  children,
  withCross,
  target,
  onClick,
  checked,
}: ChipsItemProps) => (
  <a
    href={href}
    role={href ? undefined : 'button'}
    className={cx('item', { checked })}
    target={target}
    onClick={onClick}
    data-testid='chips:item'
  >
    <span className={styles.text}>{children}</span>
    {withCross && <CrossSVG className={cx('cross-svg')} />}
  </a>
);
