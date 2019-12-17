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
