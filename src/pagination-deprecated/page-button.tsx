import { ButtonHTMLAttributes, FC } from 'react';
import { cx } from './utils';

export interface PageButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  rounded?: 'all' | 'none' | 'left' | 'right';
  className?: string;
  selected?: boolean;
}

/**
 * Кнопка страницы.
 * @param props Свойства. Поддерживаются свойства элемента button.
 * @return Элемент.
 * @deprecated
 */
export const PageButton: FC<PageButtonProps> = ({
  selected,
  rounded = 'all',
  className,
  ...restProps
}) => (
  <button
    {...restProps}
    type='button'
    className={cx(
      'page-button',
      selected && 'selected',
      rounded === 'all' && 'rounds-all',
      rounded === 'left' && 'rounds-left',
      rounded === 'right' && 'rounds-right',
      className,
    )}
  />
);
