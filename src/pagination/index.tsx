import React from 'react';
import { BasePagination, Props as BaseProps } from './base-pagination';

export interface Props {

  /** Общее количество страниц. */
  total: number

  /** Индекс текущей страницы. */
  current: number

  /** Сработает при выборе страницы. */
  onChange?: (data: { value: number }) => void

  /** Функция возвращающая компонент кнопки. */
  renderButton?: BaseProps['renderButton']
}

/**
 * Компонент списка кнопок навигации по страницам.
 * @param props Свойства.
 * @return Элемент.
 */
export const Pagination: React.FC<Props> = ({
  total,
  current,
  onChange,
  renderButton,
}) => (
  <BasePagination
    total={total}
    current={current}
    renderButton={renderButton}
    onButtonClick={content => {
      Number.isFinite(content)
        && onChange
        && onChange({ value: content });
    }}
  />
);
