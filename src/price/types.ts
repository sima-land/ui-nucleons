import type { WithTestId } from '../types';

export interface PriceProps extends WithTestId {
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
}
