/**
 * Возвращает список кнопок навигации.
 * @param {Object} props Свойства.
 * @param {number} props.current Номер текущей страницы.
 * @param {number} props.total Номер последней страницы.
 * @param {Object} props.buttonKeys Значения, которые будут использованы для не числовых кнопок.
 * @param {*} props.buttonKeys.more Значение для отображения кнопки группы пропущенных чисел.
 * @return {Array<number|string>} Список кнопок.
 */
export const getPageButtons = ({
  current,
  total,
  buttonKeys = { more: '...' },
}) => {
  const numbers = getRangeNumbers({ current, range: 8, total });
  const lastIndex = numbers.length - 1;

  if (numbers[0] > 1) {
    numbers[0] = 1;
    numbers[1] = buttonKeys.more;
  }

  if (numbers[lastIndex] < total) {
    numbers[lastIndex] = total;
    numbers[lastIndex - 1] = buttonKeys.more;
  }

  return numbers;
};

/**
 * Возвращает список чисел вокруг заданного.
 * @param {Object} props Свойства.
 * @param {number} props.current Число вокруг которого нужно сформировать список.
 * @param {number} props.range Размер списка.
 * @param {number} props.total Максимальное значение.
 * @return {Array<number|string>} Список номеров.
 */
export const getRangeNumbers = ({
  current,
  range,
  total,
}) => {
  const readyRange = Math.min(range, total) || 0;
  const pageNumbers = [];
  const halfRange = Math.floor(readyRange / 2);
  const correction = readyRange % 2;
  let startIndex = current - halfRange - correction;

  if (startIndex < 1) {
    startIndex = 0;
  } else if (startIndex + readyRange > total) {
    startIndex = total - readyRange;
  }

  for (let i = startIndex; i < startIndex + readyRange; i++) {
    pageNumbers.push(i + 1);
  }

  return pageNumbers;
};
