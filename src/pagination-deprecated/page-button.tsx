import { cx } from './utils';

export interface PageButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  rounded?: 'all' | 'none' | 'left' | 'right';
  className?: string;
  selected?: boolean;
}

/**
 * Компонент кнопки страницы по умолчанию. Поддерживаются свойства элемента button.
 * @param props Свойства.
 * @param props.selected Выбрана ли кнопка.
 * @param props.className CSS-класс.
 * @param props.rounded С какой стороны делать скругления.
 * @return Элемент.
 * @deprecated
 */
export const PageButton: React.FC<PageButtonProps> = ({
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
