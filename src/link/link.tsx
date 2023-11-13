import type { LinkProps } from './types';
import { forwardRef, ReactNode } from 'react';
import { getNoIndex } from '../helpers/get-no-index';
import classnames from 'classnames/bind';
import styles from './link.module.scss';

const cx = classnames.bind(styles);

/**
 * Возвращает объект со свойствами, формирующими содержимое.
 * @param children Содержимое линка.
 * @param noIndex Флаг запрета индексации.
 * @return Объект со свойствами, формирующими содержимое.
 */
const getContentProps = (children: ReactNode, noIndex?: boolean) =>
  noIndex ? { dangerouslySetInnerHTML: getNoIndex(children) } : { children };

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
    noIndex = false,
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
      {...getContentProps(children, noIndex)}
    />
  );
});
