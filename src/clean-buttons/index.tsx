import React, { Children, cloneElement } from 'react';
import classnames from 'classnames/bind';
import classes from './clean-buttons.scss';
import { Link, Props as LinkProps } from '../link';

type Size = 's' | 'm';

export interface ButtonProps extends Omit<LinkProps, 'size'> {
  asLink?: boolean
  size?: Size
}

export interface Props {

  /** Содержимое. */
  children?: React.ReactElement<ButtonProps> | React.ReactElement<ButtonProps>[]

  /** Размер. */
  size?: Size
}

const cx = classnames.bind(classes);

/**
 * Компонент группы прозрачных кнопок.
 * @param props Свойства.
 * @return Элемент.
 */
const CleanGroup: React.FC<Props> = ({ children, size = 'm' }) => (
  <div className={cx('clean-group')}>
    {Children.map(
      Array.isArray(children) ? children : [children],
      item => item && item.type === CleanButton
        ? cloneElement(item, { size })
        : item
    )}
  </div>
);

/**
 * Компонент прозрачной кнопки.
 * @param props Свойства. Поддерживаются свойства элементов button/a (зависит от того, передан ли asLink).
 * @param props.children Содержимое.
 * @param props.size Размер.
 * @param props.href Адрес ссылки.
 * @param props.asLink Нужно ли выводить кнопку как ссылку.
 * @return Элемент.
 */
const CleanButton = ({
  size = 'm',
  href,
  asLink = Boolean(href),
  ...restProps
}: ButtonProps) => (
  <Link
    pseudo={asLink}
    className={cx('clean-button', `size-${size}`)}
    href={href}
    {...restProps}
  />
);

export const Clean = {
  Group: CleanGroup,
  Button: CleanButton,
};
