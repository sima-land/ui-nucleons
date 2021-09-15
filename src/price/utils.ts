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
  { graphemeBefore }: { graphemeBefore?: boolean } = {},
) => {
  const number = Number(value);

  return [
    // графема до
    grapheme && graphemeBefore && `${grapheme} `,

    // целая часть
    formatInteger(number),

    // дробная часть
    Number.isFinite(number) &&
      !Number.isInteger(number) &&
      `,${formatFractional(number)}`,

    // графема после
    grapheme && !graphemeBefore && ` ${grapheme}`,
  ]
    .filter(Boolean)
    .map(s => (s as string).replace(/\s/g, '\u2009')) // заменяем все пробелы на полупробелы
    .join('');
};

// eslint-disable-next-line require-jsdoc
export const formatInteger = (value: number): string => {
  let result = '0';

  if (Number.isFinite(value)) {
    // если число меньше 0.0001 - округляем до 0.0001
    const valid = value === 0 ? 0 : Math.max(value, 0.0001);
    const integer = valid.toString().replace(/\..*$/g, ''); // все числа до точки

    const separated = [];
    const list = integer.split('');

    while (list.length) {
      // вытаскиваем последние три цифры и объединяем в строку
      separated.unshift(list.splice(-3).join(''));
    }

    result = separated.join(' ');
  }

  return result;
};

// eslint-disable-next-line require-jsdoc
export const formatFractional = (value: number): string => {
  let result = '';

  if (Number.isFinite(value) && !Number.isInteger(value)) {
    if (value <= 0.0001) {
      // если число меньше 0.0001 - округляем до 0.0001
      result = '0001';
    } else if (value < 0.01) {
      result = value.toFixed(4).slice(-4);
    } else {
      result = value.toFixed(2).slice(-2);
    }
  }

  return result;
};
