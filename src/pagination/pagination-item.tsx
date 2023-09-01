import { PaginationItemProps } from './types';
import classNames from 'classnames/bind';
import styles from './pagination-item.module.scss';

const cx = classNames.bind(styles);

/**
 * Кнопка страницы.
 * @param props Свойства.
 * @return Элемент.
 */
export function PaginationItem({
  rootRef,
  checked,
  disabled,
  children,
  rounds,
  onClick,
  className,
  href,
  role = !href ? 'button' : undefined,
  ...rest
}: PaginationItemProps) {
  return (
    <a
      aria-disabled={disabled || undefined}
      aria-current={checked || undefined}
      {...rest}
      ref={rootRef}
      href={disabled ? undefined : href}
      role={role}
      className={cx('root', `rounds-${rounds}`, { checked, disabled }, className)}
      onClick={disabled ? undefined : onClick}
    >
      {children}
    </a>
  );
}
