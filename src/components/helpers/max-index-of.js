/**
 * Возвращает максимальный индекс списка.
 * @param {Array} list Список.
 * @return {number} Максимальный индекс.
 */
const maxIndexOf = list => {
  let maxIndex = -1;

  if (list) {
    maxIndex = list.length > 0 ? list.length - 1 : 0;
  }

  return maxIndex;
};

export default maxIndexOf;
