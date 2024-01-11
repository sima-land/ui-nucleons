/**
 * Возвращает максимальный индекс списка.
 * @param list Список.
 * @return Максимальный индекс.
 */
export function maxIndexOf(list?: ArrayLike<any> | null) {
  let maxIndex = -1;

  if (list) {
    maxIndex = list.length > 0 ? list.length - 1 : 0;
  }

  return maxIndex;
}
