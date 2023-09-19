import { MouseEventHandler, ReactNode } from 'react';
import CrossSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Cross';
import classnames from 'classnames/bind';
import styles from './chips-item.module.scss';

export interface ChipsItemProps {
  href?: string;
  children?: ReactNode;
  withCross?: boolean;
  target?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  checked?: boolean;
}

const cx = classnames.bind(styles);

/**
 * Элемент списка "чипсов".
 * @param props Свойства.
 * @return Элемент.
 * @deprecated Теперь можно использовать Chip из "@sima-land/ui-nucleons/chip".
 */
export function ChipsItem({ href, children, withCross, target, onClick, checked }: ChipsItemProps) {
  return (
    <a
      href={href}
      role={href ? undefined : 'button'}
      className={cx('root', { checked })}
      target={target}
      onClick={onClick}
      data-testid='chips:item'
    >
      <span className={styles.text}>{children}</span>
      {withCross && <CrossSVG className={cx('cross-svg')} />}
    </a>
  );
}
