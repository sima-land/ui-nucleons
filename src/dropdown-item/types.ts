import type { ReactElement, ComponentType, ReactNode, SVGAttributes, HTMLAttributes } from 'react';
import type { WithTestId } from '../types';

export type DropdownItemSize = 's' | 'm' | 'l' | 'xl';

export interface DropdownItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'size'>,
    WithTestId {
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
}

export type DropdownItemElement = ReactElement<DropdownItemProps>;
