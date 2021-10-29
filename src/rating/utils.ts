import { StarType } from './types';

interface ReduceResult {
  total: number;
  stars: StarType[];
}

/**
 * Округляет число до половины.
 * @param value Число.
 * @return Число.
 */
const roundHalf = (value: number): number => Math.round(value * 2) / 2;

/**
 * Возвращает список звезд.
 * @param value Число.
 * @param count Число.
 * @return Типы звезд.
 */
export const getStars = (value: number, count: number) =>
  [...Array(count).keys()].reduce<ReduceResult>(
    acc => {
      if (acc.total >= 1) {
        acc.stars.push('full');
      } else if (acc.total > 0) {
        acc.stars.push('half');
      } else {
        acc.stars.push('empty');
      }

      acc.total--;

      return acc;
    },
    { total: roundHalf(value), stars: [] },
  ).stars;
