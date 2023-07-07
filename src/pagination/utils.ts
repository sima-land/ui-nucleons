import type { PaginationButton } from './types';

/**
 * Формирует список кнопок навигации по страницам по дизайн-гайдам.
 * @param props Свойства.
 * @param config Конфиг.
 * @return Список.
 */
export function getPaginationItems(
  {
    total,
    current,
  }: {
    total: number;
    current: number;
  },
  {
    arrows = true,
  }: {
    arrows?: boolean | 'active';
  } = {},
): PaginationButton[] {
  const items: PaginationButton[] = getNumbersAround({
    total,
    current,
    range: 7,
  }).map(value => ({ type: 'page', value }));

  const size = items.length;

  if (total > 7) {
    // если первый элемент не является первой страницей
    if (items[0].value !== 1) {
      items.splice(0, 2, { type: 'page', value: 1 }, { type: 'more', value: items[2].value - 1 });
    }

    // если последний элемент не является последней страницей
    if (items[size - 1].value !== total) {
      items.splice(
        -2,
        2,
        { type: 'more', value: items[size - 2].value },
        { type: 'page', value: total },
      );
    }
  }

  switch (arrows) {
    case true: {
      items.unshift({ type: 'prev', value: Math.max(1, current - 1) });
      items.push({ type: 'next', value: Math.min(total, current + 1) });
      break;
    }
    case 'active': {
      if (current !== 1) {
        items.unshift({ type: 'prev', value: Math.max(1, current - 1) });
      }
      if (current !== total) {
        items.push({ type: 'next', value: Math.min(total, current + 1) });
      }
      break;
    }
  }

  return items;
}

/**
 * Возвращает список натуральных чисел вокруг заданного.
 * @param props Свойства.
 * @param props.current Число вокруг которого нужно сформировать список.
 * @param props.range Размер списка.
 * @param props.total Максимальное значение.
 * @return Список номеров.
 */
export function getNumbersAround({
  current,
  range: rangeSize,
  total,
}: {
  current: number;
  range: number;
  total: number;
}): number[] {
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
}
