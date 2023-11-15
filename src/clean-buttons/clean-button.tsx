import type { CleanButtonProps } from './types';
import { useContext } from 'react';
import { Link } from '../link';
import { CleanButtonContext } from './utils';
import classNames from 'classnames/bind';
import styles from './clean-button.module.scss';

const cx = classNames.bind(styles);

/**
 * Прозрачная кнопка.
 * @param props Свойства.
 * @return Элемент.
 */
export function CleanButton({
  size: sizeProp,
  href,
  asLink = Boolean(href),
  children,
  className,
  'data-testid': testId = 'clean-button',
  ...rest
}: CleanButtonProps) {
  const context = useContext(CleanButtonContext);

  const size = sizeProp ?? context.size ?? 's';

  return (
    <Link
      {...rest}
      className={cx('button', `size-${size}`, className, context.className)}
      pseudo={!asLink}
      href={href}
      data-testid={testId}
    >
      {children}
    </Link>
  );
}
