/**
 * Возвращает нужное склонение из переданного списка по переданному числу.
 * @param number Число, используемое для склонения.
 * @param titles Массив со склонениями слова. Например: ['отзыв', 'отзыва', 'отзывов'].
 * @return Слово в нужном склонении.
 */
export function getDeclination(number: number, titles: string[]) {
  const cases = [2, 0, 1, 1, 1, 2];
  const positiveNumber = Math.abs(number);
  const index =
    positiveNumber % 100 > 4 && positiveNumber % 100 < 20
      ? 2
      : cases[positiveNumber % 10 < 5 ? positiveNumber % 10 : 5];

  return titles[index];
}

/**
 * @deprecated Следует использовать именованный экспорт. Экспорт по умолчанию будет удалён в будущем.
 */
export default getDeclination;
