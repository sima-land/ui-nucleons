import { ChipProps } from './types';
import classnames from 'classnames/bind';
import styles from './chip.module.scss';
import { ButtonHTMLAttributes } from 'react';

const cx = classnames.bind(styles);

/**
 * Чип.
 * @param props Свойства.
 * @return Элемент.
 */
export function Chip({
  href,
  children,
  target,
  onClick,
  checked,
  style,
  className,
  endAdornment,
  shape = 'square',
}: ChipProps) {
  const rootClassName = cx('root', checked && 'checked', `shape-${shape}`, className);

  return (
    <a
      style={style}
      href={href}
      role={href ? undefined : 'button'}
      className={rootClassName}
      target={target}
      onClick={onClick}
      data-testid='chip'
    >
      <span className={cx('main')}>{children}</span>
      {endAdornment && <span className={cx('end-adornment')}>{endAdornment}</span>}
    </a>
  );
}

/**
 * Кнопка в чипе.
 * @param props Свойства.
 * @return Элемент.
 */
export function ChipIconButton({
  children,
  className,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cx('icon-button', className)} {...restProps}>
      {children}
    </button>
  );
}
