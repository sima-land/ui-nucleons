import classnames from 'classnames/bind';
import classes from './pagination.scss';
import last from 'lodash/last';
import range from 'lodash/range';

export const cx = classnames.bind(classes);

/**
 * Фабрика объектов с данными о кнопке страницы.
 * @param {number} value Номер целевой страницы.
 * @param {*} [content=value] Содержимое кнопки.
 * @return {{ content: *, value: number  }} Список кнопок.
 */
export const PageButton = (value, content = value) => ({ value, content });

/**
 * Возвращает список кнопок навигации.
 * @param {Object} props Свойства.
 * @param {number} props.current Номер текущей страницы.
 * @param {number} props.total Номер последней страницы.
 * @param {Object} props.buttonKeys Значения, которые будут использованы для не числовых кнопок.
 * @param {*} props.buttonKeys.more Значение для отображения кнопки группы пропущенных чисел.
 * @return {Array<{ content: *, value: number  }>} Список кнопок.
 */
export const getPageButtons = ({
  current,
  total,
  buttonKeys = { more: '...' },
}) => {
  const numbers = getCorrectRangeNumbers({ current, range: 5, total });

  if (total > 5) {
    // если находимся в середине множества (многоточия с обоих сторон) - диапазон уменьшается до 4
    if (numbers[0] > 1 && last(numbers) < total) {
      numbers.shift();
    }

    if (numbers[0] > 1) { // формируем начало диапазона
      if (numbers[0] === 2) {
        numbers.unshift(1);
      } else {
        numbers.unshift(
          1,

          // не выводим многоточие когда вместо него можно поставить одно число
          numbers[0] === 3
            ? 2
            : PageButton(numbers[0] - 1, buttonKeys.more)
        );
      }
    }

    if (last(numbers) < total) { // формируем конец диапазона
      if (last(numbers) === total - 1) {
        numbers.push(total);
      } else {
        numbers.push(

          // не выводим многоточие когда вместо него можно поставить одно число
          total - last(numbers) > 2
            ? PageButton(last(numbers) + 1, buttonKeys.more)
            : total - 1,
          total
        );
      }
    }
  }

  return numbers.map(item => Number.isFinite(item) ? PageButton(item) : item);
};

/**
 * Возвращает корректный диапазон вокруг текущего значения в соответствии с дизайнерской задумкой.
 * По возможности показывает начало/конец списка при смещении.
 * При current = 4, range = 5 вместо [2,3,4,5,6] вернет [1,2,3,4,5].
 * @param {Object} props Свойства.
 * @param {number} props.current Число вокруг которого нужно сформировать список.
 * @param {number} props.range Размер списка.
 * @param {number} props.total Максимальное значение.
 * @return {Array<number>} Список номеров.
 */
export const getCorrectRangeNumbers = ({
  current,
  range: rangeSize,
  total,
}) => {
  const numbers = getRangeNumbers({
    current,
    range: rangeSize,
    total,
  });

  let result = [...numbers];

  if (total > rangeSize) {
    if (current < rangeSize) {
      result = range(1, rangeSize + 1);
    } else if (current > total - rangeSize + 1) {
      result = range(total - rangeSize + 1, total + 1);
    }
  }

  return result;
};

/**
 * Возвращает список чисел вокруг заданного.
 * @param {Object} props Свойства.
 * @param {number} props.current Число вокруг которого нужно сформировать список.
 * @param {number} props.range Размер списка.
 * @param {number} props.total Максимальное значение.
 * @return {Array<number>} Список номеров.
 */
export const getRangeNumbers = ({
  current,
  range: rangeSize,
  total,
}) => {
  const readyRange = Math.min(rangeSize, total) || 0;
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
