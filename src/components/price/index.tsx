import React from 'react';
import { formatNumber } from '../helpers/format-number';
import classes from './price.scss';
import classnames from 'classnames/bind';
import { COLORS } from '../colors';

export interface Props {
  className?: string
  currencyGrapheme?: string
  value: number | string
  graphemeBefore?: boolean
  crossedOut?: boolean
}

const cx = classnames.bind(classes);

/**
 * Цена товара с указанием знака валюты.
 * @param props Параметры компонента.
 * @param props.className Класс/стили цены.
 * @param props.currencyGrapheme Графема валюты пользователя.
 * @param props.graphemeBefore Отобразить знак валюты перед ценой.
 * @param props.crossedOut Отображать цену 'старой' - серой и зачеркнутой.
 * @param props.value Цена.
 * @return Элемент.
 */
const Price: React.FC<Props> = ({
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

      {/* диагональная красная полоска */}
      {crossedOut && (
        <svg
          viewBox='0 0 1 1'
          className={cx('red-line-svg')}
          preserveAspectRatio='none'
        >
          <line
            x1='0'
            y1='1'
            x2='1'
            y2='0'
            stroke={COLORS.get('additional-deep-red')}
            strokeWidth='2px'
            vectorEffect='non-scaling-stroke'
          />
        </svg>
      )}
    </span>
  );
};

export default Price;
