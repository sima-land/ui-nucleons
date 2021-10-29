import classnames from 'classnames/bind';
import classes from './pagination.module.scss';
import { range } from 'lodash';

interface IPageButton {
  value: number;
  content: string | number;
}

type State = { current: number; range: number; total: number };

export const cx = classnames.bind(classes);

/**
 * Фабрика объектов с данными о кнопке страницы.
 * @param value Номер целевой страницы.
 * @param content Содержимое кнопки.
 * @return Список кнопок.
 */
export const PageButton = (value: number, content: string | number = value): IPageButton => ({
  value,
  content,
});

/**
 * Возвращает список кнопок навигации.
 * @param props Свойства.
 * @param props.current Номер текущей страницы.
 * @param props.total Номер последней страницы.
 * @param props.buttonKeys Значения, которые будут использованы для не числовых кнопок.
 * @param props.buttonKeys.more Значение для отображения кнопки группы пропущенных чисел.
 * @return Список кнопок.
 */
export const getPageButtons = ({
  current,
  total,
  buttonKeys = { more: '...' },
}: {
  current: number;
  total: number;
  buttonKeys?: { more: string | number };
}): IPageButton[] => {
  const list = getCorrectRangeNumbers({ current, range: 5, total }).map(v => PageButton(v));

  if (list.length > 0 && total > 5) {
    // если находимся в середине множества (многоточия с обоих сторон) - диапазон уменьшается до 4
    if (list[0].value > 1 && list[list.length - 1].value < total) {
      list.shift();
    }

    if (list[0].value > 1) {
      // формируем начало диапазона
      if (list[0].value === 2) {
        list.unshift(PageButton(1));
      } else {
        list.unshift(
          PageButton(1),

          // не выводим многоточие когда вместо него можно поставить одно число
          list[0].value === 3 ? PageButton(2) : PageButton(list[0].value - 1, buttonKeys.more),
        );
      }
    }

    if (list[list.length - 1].value < total) {
      // формируем конец диапазона
      if (list[list.length - 1].value === total - 1) {
        list.push(PageButton(total));
      } else {
        list.push(
          // не выводим многоточие когда вместо него можно поставить одно число
          total - list[list.length - 1].value > 2
            ? PageButton(list[list.length - 1].value + 1, buttonKeys.more)
            : PageButton(total - 1),
          PageButton(total),
        );
      }
    }
  }

  return list;
};

/**
 * Возвращает корректный диапазон вокруг текущего значения в соответствии с дизайнерской задумкой.
 * По возможности показывает начало/конец списка при смещении.
 * При current = 4, range = 5 вместо [2,3,4,5,6] вернет [1,2,3,4,5].
 * @param props Свойства.
 * @param props.current Число вокруг которого нужно сформировать список.
 * @param props.range Размер списка.
 * @param props.total Максимальное значение.
 * @return Список номеров.
 */
export const getCorrectRangeNumbers = ({ current, range: rangeSize, total }: State): number[] => {
  let result = [
    ...getRangeNumbers({
      current,
      range: rangeSize,
      total,
    }),
  ];

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
 * @param props Свойства.
 * @param props.current Число вокруг которого нужно сформировать список.
 * @param props.range Размер списка.
 * @param props.total Максимальное значение.
 * @return Список номеров.
 */
export const getRangeNumbers = ({ current, range: rangeSize, total }: State): number[] => {
  const pageNumbers = [];
  const readyRange = Math.min(rangeSize, total) || 0;
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
