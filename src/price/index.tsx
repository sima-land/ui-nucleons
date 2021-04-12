import React from 'react';
import { formatNumber } from '../helpers/format-number';
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
export const Price: React.FC<Props> = ({
  className,
  currencyGrapheme: grapheme,
  graphemeBefore,
  crossedOut,
  value,
}) => {
  const [integer, fractional] = formatNumber(value);

  const content = [
    // графема до
    grapheme && graphemeBefore && `${grapheme} `,

    // целая часть
    integer,

    // дробная часть
    Number(fractional) > 0 && `,${fractional}`,

    // графема после
    grapheme && !graphemeBefore && ` ${grapheme}`,
  ]
    .filter(Boolean)
    .map(s => (s as string).replace(/\s/g, '\u2009')) // заменяем пробелы на полупробелы
    .join('');

  return (
    <span className={cx('root', className, crossedOut && 'crossed-out')}>
      {content}
    </span>
  );
};
