import { FC } from 'react';
import { BasePagination, BasePaginationProps } from './base-pagination';

/** @deprecated */
export interface PaginationProps {
  /** Общее количество страниц. */
  total: number;

  /** Индекс текущей страницы. */
  current: number;

  /** Сработает при выборе страницы. */
  onChange?: (data: { value: number }) => void;

  /** Функция возвращающая компонент кнопки. */
  renderButton?: BasePaginationProps['renderButton'];
}

/**
 * Список кнопок навигации по страницам.
 * @param props Свойства.
 * @return Элемент.
 * @deprecated
 */
export const Pagination: FC<PaginationProps> = ({ total, current, onChange, renderButton }) => (
  <BasePagination
    total={total}
    current={current}
    renderButton={renderButton}
    onButtonClick={content => {
      Number.isFinite(content) && onChange && onChange({ value: content });
    }}
  />
);
