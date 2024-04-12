import type { PriceProps } from './types';
import { formatPrice } from './utils';
import classNames from 'classnames/bind';
import styles from './price.m.scss';
import { useMemo } from 'react';

const cx = classNames.bind(styles);

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
  const content = useMemo(
    () =>
      formatPrice(value, grapheme, {
        graphemeBefore,
      }),
    [value, grapheme, graphemeBefore],
  );

  return (
    <span className={cx('root', className, crossedOut && 'crossed-out')} data-testid={testId}>
      {content}
    </span>
  );
}
