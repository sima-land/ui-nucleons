import React, { Children, cloneElement, isValidElement, useContext } from 'react';
import classnames from 'classnames/bind';
import { Link, LinkProps } from '../link';
import styles from './clean-buttons.module.scss';
import { CleanButtonSize } from './types';
import { CleanGroupSizeContext } from './utils';

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
const CleanGroup: React.FC<CleanGroupProps> = ({ size: sizeFromProps, children }) => {
  const sizeFromContext = useContext(CleanGroupSizeContext);

  // значение из пропсов имеет приоритет
  const size = sizeFromProps || sizeFromContext;

  return (
    <div className={cx('group')}>
      {Children.toArray(children).map(item =>
        isValidElement(item) && item.type === CleanButton ? cloneElement(item, { size }) : null,
      )}
    </div>
  );
};

/**
 * Компонент прозрачной кнопки.
 * @param props Свойства.
 * @return Элемент.
 */
const CleanButton = ({
  size = 's',
  href,
  asLink = Boolean(href),
  ...restProps
}: CleanButtonProps) => (
  <Link pseudo={!asLink} className={cx('button', `size-${size}`)} href={href} {...restProps} />
);

export const Clean = {
  Group: CleanGroup,
  Button: CleanButton,
};
