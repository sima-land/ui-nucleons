import React, { Children, cloneElement } from 'react';
import classnames from 'classnames/bind';
import classes from './clean-buttons.scss';

type Size = 's' | 'm';

interface CustomButtonProps {
  asLink?: boolean
  size?: Size
}

export type ButtonProps = CustomButtonProps
& Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'size'>
& Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'size'>;

export interface Props {

  /** Содержимое. */
  children?: React.ReactElement<ButtonProps>[]

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
      children,
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
const CleanButton: React.FC<ButtonProps> = ({
  size = 'm',
  href,
  asLink = Boolean(href),
  ...restProps
}) => {
  const Container = asLink ? 'a' : 'button';

  return (
    <Container
      className={cx('clean-button', `size-${size}`)}
      href={href}
      {...restProps}
      type='button'
    />
  );
};

export const Clean = {
  Group: CleanGroup,
  Button: CleanButton,
};

export default Clean;
