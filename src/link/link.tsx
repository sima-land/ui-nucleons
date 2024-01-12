import type { LinkProps } from './types';
import { forwardRef } from 'react';
import classnames from 'classnames/bind';
import styles from './link.module.scss';

const cx = classnames.bind(styles);

/**
 * Ссылка.
 * @param props Свойства компонента. Поддерживаются свойства span/a.
 * @param ref Реф для DOM-элемента ссылки.
 * @return Элемент.
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  {
    children,
    className,
    color = 'basic-blue',
    disabled,
    pseudo,
    role,
    tabIndex,
    underline,
    'data-testid': testId = 'anchor',
    ...restProps
  },
  ref,
) {
  const baseProps = pseudo
    ? {
        role: role || 'button',
        tabIndex: disabled ? undefined : tabIndex || 0,
      }
    : { role, tabIndex };

  return (
    <a
      {...baseProps}
      {...restProps}
      data-testid={testId}
      ref={ref}
      className={cx('link', className, color, { disabled, underline })}
    >
      {children}
    </a>
  );
});
