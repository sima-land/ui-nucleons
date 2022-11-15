import React, { Children, cloneElement, isValidElement, useContext } from 'react';
import { Link, LinkProps } from '../link';
import { CleanButtonSize } from './types';
import { CleanGroupSizeContext } from './utils';
import classnames from 'classnames/bind';
import styles from './clean-buttons.module.scss';

export interface CleanButtonProps extends LinkProps {
  asLink?: boolean;

  /** Размер (высота). */
  size?: CleanButtonSize;
}

export interface CleanGroupProps {
  /** Размер (высота). */
  size?: CleanButtonSize;

  /** Содержимое. */
  children?: React.ReactNode;
}

const cx = classnames.bind(styles);

/**
 * Компонент группы прозрачных кнопок.
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
 * Компонент прозрачной кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
export function CleanButton({
  size = 's',
  href,
  asLink = Boolean(href),
  ...restProps
}: CleanButtonProps) {
  return (
    <Link pseudo={!asLink} className={cx('button', `size-${size}`)} href={href} {...restProps} />
  );
}

/**
 * @deprecated Нужно использовать `import { CleanGroup, CleanButton }`.
 */
export const Clean = {
  Group: CleanGroup,
  Button: CleanButton,
};
