import { isString } from 'lodash';

/**
 * Формирует монограмму из переданной строки.
 * @param {string} value Переданная строка.
 * @return {string} Монограмма.
 */
export const getMonogram = value => isString(value)
  ? value.split(/\s+/g).slice(0, 2).map(s => s[0]).reverse().join('').toUpperCase()
  : '';
