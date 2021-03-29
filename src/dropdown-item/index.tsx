import React from 'react';
import classnames from 'classnames/bind';
import styles from './dropdown-item.scss';

const cx = classnames.bind(styles);

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  size?: 's' | 'm' | 'l' | 'xl'
  disabled?: boolean
  noHover?: boolean
  checked?: boolean
}

/**
 * Компонент элемента выпадающего списка.
 * @param props Свойства.
 * @param props.size Размер.
 * @param props.children Содержимое.
 * @param props.className Класс.
 * @param props.disabled Отключен ли элемент.
 * @param props.checked Отображать элемент как отмеченный или нет.
 * @param props.noHover Нужно ли отключить эффект при наведении.
 * @return Элемент.
 */
export const DropdownItem: React.FC<Props> = ({
  size = 'm',
  children,
  className,
  disabled,
  noHover,
  checked,
  ...restProps
}) => (
  <div
    {...restProps}
    className={cx(
      'root',
      `size-${size}`,
      checked && 'checked',
      disabled && 'disabled',
      noHover && 'no-hover',
      className
    )}
  >
    {children}
  </div>
);
