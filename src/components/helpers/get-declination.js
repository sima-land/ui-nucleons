/**
 * Возвращает нужное склонение из переданного списка по переданному числу.
 * @param {number} number Число, используемое для склонения.
 * @param {Array} titles Массив со склонениями слова. Например: ['отзыв', 'отзыва', 'отзывов'].
 * @return {string} Слово в нужном склонении.
 */
export default function getDeclination (number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  const positiveNumber = Math.abs(number);
  const index = positiveNumber % 100 > 4 && positiveNumber % 100 < 20
    ? 2
    : cases[positiveNumber % 10 < 5 ? positiveNumber % 10 : 5];

  return titles[index];
}

/**
 * Возвращает нужное склонение из переданного объекта валюты.
 * @param {number} number Число, используемое для склонения.
 * @param {Object} unit Объект с данными об единице измерения.
 * @return {string} Слово в нужном склонении.
 */
export function getDeclinationByUnit (number, unit) {
  const {
    name: one,
    name_for_few: few,
    name_for_many: many,
  } = unit || {};
  const result = few && many
    ? getDeclination(number, [one, few, many])
    : one;

  return result || '';
}
