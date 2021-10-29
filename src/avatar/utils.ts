import { isString } from 'lodash';

/**
 * Формирует монограмму из переданной строки.
 * @param value Переданная строка.
 * @return Монограмма.
 */
export const getMonogram = (value: any) =>
  isString(value)
    ? value
        .split(/\s+/g)
        .slice(0, 2)
        .map(s => s[0])
        .reverse()
        .join('')
        .toUpperCase()
    : '';
