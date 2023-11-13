import { Children, cloneElement, isValidElement, ReactNode, useContext } from 'react';
import { Link, LinkProps } from '../link';
import { CleanButtonSize } from './types';
import { CleanGroupSizeContext } from './utils';
import classnames from 'classnames/bind';
import styles from './clean-buttons.module.scss';

export type { CleanButtonSize };

export interface CleanButtonProps extends LinkProps {
  asLink?: boolean;

  /** Размер (высота). */
  size?: CleanButtonSize | 'unset';
}

export interface CleanGroupProps {
  /** Размер (высота). */
  size?: CleanButtonSize | 'unset';

  /** Содержимое. */
  children?: ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Группа прозрачных кнопок.
 * @param props Свойства.
 * @return Элемент.
 */
export function CleanGroup({ size: sizeFromProps, children }: CleanGroupProps) {
  const sizeFromContext = useContext(CleanGroupSizeContext);

  // значение из пропсов имеет приоритет
  const size = sizeFromProps || sizeFromContext;

  return (
    <div className={cx('group')}>
      {Children.toArray(children).map(item =>
        isValidElement<CleanButtonProps>(item) && item.type === CleanButton
          ? cloneElement(item, { size })
          : null,
      )}
    </div>
  );
}

/**
 * Прозрачная кнопка.
 * @param props Свойства.
 * @return Элемент.
 */
export function CleanButton({
  size = 's',
  href,
  asLink = Boolean(href),
  'data-testid': testId = 'clean-button',
  children,
  className,
  ...rest
}: CleanButtonProps) {
  return (
    <Link
      {...rest}
      className={cx('button', `size-${size}`, className)}
      pseudo={!asLink}
      href={href}
      data-testid={testId}
    >
      {children}
    </Link>
  );
}

/**
 * @deprecated Нужно использовать `import { CleanGroup, CleanButton }`.
 */
export const Clean = { Group: CleanGroup, Button: CleanButton };
