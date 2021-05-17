import React from 'react';
import { formatPrice } from './utils';
import classes from './price.scss';
import classnames from 'classnames/bind';

export interface Props {

  /** Класс/стили цены. */
  className?: string

  /** Отображать цену 'старой' - серой и зачеркнутой. */
  crossedOut?: boolean

  /** Графема валюты пользователя. */
  currencyGrapheme?: string

  /** Отобразить знак валюты перед ценой. */
  graphemeBefore?: boolean

  /** Цена. */
  value: number | string
}

const cx = classnames.bind(classes);

/**
 * Цена товара с указанием знака валюты.
 * @param props Параметры компонента.
 * @return Элемент.
 */
export const Price = ({
  className,
  currencyGrapheme: grapheme,
  graphemeBefore,
  crossedOut,
  value,
}: Props) => {
  const content = formatPrice(value, grapheme, {
    graphemeBefore,
  });

  return (
    <span className={cx('root', className, crossedOut && 'crossed-out')}>
      {content}
    </span>
  );
};
