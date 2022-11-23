import React from 'react';
import { formatPrice } from './utils';
import classnames from 'classnames/bind';
import styles from './price.module.scss';

export interface PriceProps {
  /** Класс/стили цены. */
  className?: string;

  /** Отображать цену 'старой' - серой и зачеркнутой. */
  crossedOut?: boolean;

  /** Графема валюты пользователя. */
  currencyGrapheme?: string;

  /** Отобразить знак валюты перед ценой. */
  graphemeBefore?: boolean;

  /** Цена. */
  value: number | string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classnames.bind(styles);

/**
 * Цена товара с указанием знака валюты.
 * @param props Параметры компонента.
 * @return Элемент.
 */
export function Price({
  className,
  currencyGrapheme: grapheme,
  graphemeBefore,
  crossedOut,
  value,
  'data-testid': testId = 'price',
}: PriceProps) {
  const content = formatPrice(value, grapheme, {
    graphemeBefore,
  });

  return (
    <span className={cx('root', className, crossedOut && 'crossed-out')} data-testid={testId}>
      {content}
    </span>
  );
}
