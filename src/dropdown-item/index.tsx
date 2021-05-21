import React from 'react';
import classnames from 'classnames/bind';
import styles from './dropdown-item.scss';

const cx = classnames.bind(styles);

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {

  /** Отображать элемент как отмеченный или нет. */
  checked?: boolean

  /** Отключен ли элемент. */
  disabled?: boolean

  /** Нужно ли отключить эффект при наведении. */
  noHover?: boolean

  /** Размер. */
  size?: 's' | 'm' | 'l' | 'xl'

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string
}

/**
 * Компонент элемента выпадающего списка.
 * @param props Свойства.
 * @param props.checked Отображать элемент как отмеченный или нет.
 * @param props.disabled Отключен ли элемент.
 * @param props.noHover Нужно ли отключить эффект при наведении.
 * @param props.size Размер.
 * @return Элемент.
 */
export const DropdownItem = ({
  size = 'm',
  children,
  className,
  disabled,
  noHover,
  checked,
  'data-testid': testId = 'dropdown-item',
  ...restProps
}: Props) => (
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
    data-testid={testId}
  >
    {children}
  </div>
);
