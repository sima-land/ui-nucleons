import React from 'react';
import { BasePagination, Props as BaseProps } from './base-pagination';

export interface Props {
  total: number
  current: number
  onChange?: (data: { value: number }) => void
  renderButton?: BaseProps['renderButton']
}

/**
 * Возвращает компонент списка кнопок навигации по страницам.
 * @param props Свойства.
 * @param props.total Номер последней страницы.
 * @param props.current Номер текущей страницы.
 * @param props.onChange Сработает при выборе страницы.
 * @param props.renderButton Функция возвращающая компонент кнопки.
 * @return Элемент.
 */
const Pagination: React.FC<Props> = ({
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

export default Pagination;
