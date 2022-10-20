import React, { ComponentType, ReactNode, SVGAttributes } from 'react';
import classnames from 'classnames/bind';
import styles from './dropdown-item.module.scss';

const cx = classnames.bind(styles);

export type DropdownItemSize = 's' | 'm' | 'l' | 'xl';

export interface DropdownItemProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'size'> {
  /** Отображать элемент как отмеченный (активный) или нет. */
  checked?: boolean;

  /** Отображать элемент как выбранный или нет. */
  selected?: boolean;

  /** Отключен ли элемент. */
  disabled?: boolean;

  /** Нужно ли отключить эффект при наведении. */
  noHover?: boolean;

  /** Размер. */
  size?: DropdownItemSize;

  /** Строковое значение, ассоциированное с элементом списка. */
  value?: string;

  /** Контент перед основным содержимым. */
  startContent?: ReactNode;

  /** Контент после основного содержимого. */
  endContent?: ReactNode;

  /** Иконка перед основным содержимым. При указании будет проигнорирован "startContent". */
  startIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Иконка после основного содержимого. При указании будет проигнорирован "endContent". */
  endIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Контент под основным содержимым. Выводится только при size='xl'. */
  comment?: ReactNode;

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
  selected,
  disabled,
  noHover,
  checked,
  startContent,
  startIcon: StartIcon,
  endContent,
  endIcon: EndIcon,
  comment,
  'data-testid': testId = 'dropdown-item',
  ...restProps
}: DropdownItemProps) {
  const start = StartIcon ? <StartIcon className={cx('icon')} /> : startContent;
  const end = EndIcon ? <EndIcon className={cx('icon')} /> : endContent;

  return (
    <div
      {...restProps}
      className={cx(
        'root',
        `size-${size}`,
        selected && 'selected',
        checked && 'checked',
        disabled && 'disabled',
        noHover && 'no-hover',
        className,
      )}
      data-testid={testId}
    >
      {start && <div className={cx('col', 'col-start')}>{start}</div>}

      <div className={cx('col', 'col-center')}>
        <div className={cx('row-main')}>{children}</div>
        {size === 'xl' && comment && <div className={cx('row-comment')}>{comment}</div>}
      </div>

      {end && <div className={cx('col', 'col-end')}>{end}</div>}
    </div>
  );
}
