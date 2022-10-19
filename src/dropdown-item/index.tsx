import React from 'react';
import classnames from 'classnames/bind';
import styles from './dropdown-item.module.scss';

const cx = classnames.bind(styles);

export type DropdownItemSize = 's' | 'm' | 'l' | 'xl';

export interface DropdownItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Отображать элемент как отмеченный или нет. */
  checked?: boolean;

  /** Отключен ли элемент. */
  disabled?: boolean;

  /** Нужно ли отключить эффект при наведении. */
  noHover?: boolean;

  /** Размер. */
  size?: DropdownItemSize;

  /** Строковое значение, ассоциированное с элементом списка. */
  value?: string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

/**
 * Элемент выпадающего списка.
 * @param props Свойства.
 * @return Элемент.
 */
export function DropdownItem({
  size = 'm',
  children,
  className,
  disabled,
  noHover,
  checked,
  'data-testid': testId = 'dropdown-item',
  ...restProps
}: DropdownItemProps) {
  return (
    <div
      {...restProps}
      className={cx(
        'root',
        `size-${size}`,
        checked && 'checked',
        disabled && 'disabled',
        noHover && 'no-hover',
        className,
      )}
      data-testid={testId}
    >
      {children}
    </div>
  );
}
