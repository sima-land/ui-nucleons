import { formatNumber } from '../helpers/format-number';

/**
 * Форматирует цену и графему валюты в виде строки.
 * @param value Цена.
 * @param grapheme  Графема.
 * @param options Опции.
 * @return Отформатированная цена.
 */
export const formatPrice = (
  value: number | string,
  grapheme?: string,
  { graphemeBefore }: { graphemeBefore?: boolean } = {}
) => {
  const [integer, fractional] = formatNumber(value);

  return [
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
};
