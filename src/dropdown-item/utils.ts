import { isValidElement } from 'react';
import { DropdownItem } from '.';
import { DropdownItemElement } from './types';

/** Утилиты для работы с DropdownItem. */
export class DropdownItemUtils {
  /**
   * Определяет, является ли переданное значение элементом DropdownItem.
   * @param value Значение.
   * @return Является ли переданное значение элементом DropdownItem.
   */
  static is(value: Parameters<typeof isValidElement>[0]): value is DropdownItemElement {
    return isValidElement(value) && value.type === DropdownItem;
  }

  /**
   * Возвращает значение элемента меню.
   * @param menuItem Значение.
   * @return Значение элемента меню.
   */
  static getValue(menuItem: DropdownItemElement) {
    const { value, children } = menuItem.props;

    // нативный select преобразует содержимое option к строке если не указан value, делаем также
    return typeof value === 'string' ? value : String(children);
  }

  /**
   * Получив опции меню вернет LinkedList и текущую позицию в нем.
   * @param menuItems Опции.
   * @param currentIndex Индекс текущей выбранной опции.
   * @return Текущая позиция в списке и список.
   */
  static asLoopedIterator(
    menuItems: DropdownItemElement[],
    currentIndex: number,
  ): LoopedIterator<number> {
    let currentPosition = -1;

    const availableIndices: Array<number> = menuItems.reduce<number[]>((acc, item, index) => {
      if (index === currentIndex) {
        currentPosition = acc.length;
      }

      if (!item.props.disabled) {
        acc.push(index);
      }

      return acc;
    }, []);

    return new LoopedIterator<number>(availableIndices, currentPosition);
  }
}

/** Список с возможностью перемещаться вперед назад с закольцовыванием. */
export class LoopedIterator<T = unknown> {
  private source: T[];
  private position: number;

  /**
   * Конструктор.
   * @param source Источник данных.
   * @param startPosition Начальная позиция.
   */
  constructor(source: T[], startPosition = 0) {
    this.source = source;
    this.position = startPosition;
  }

  /**
   * Возвращает следующий элемент списка.
   * @return Элемент списка или undefined.
   */
  next(): T | undefined {
    if (this.source.length === 0) {
      return undefined;
    }

    let nextIndex = this.position + 1;

    if (nextIndex >= this.source.length) {
      nextIndex = 0;
    }

    this.position = nextIndex;

    return this.source[nextIndex];
  }

  /**
   * Возвращает предыдущий элемент списка.
   * @return Элемент списка или undefined.
   */
  prev(): T | undefined {
    if (this.source.length === 0) {
      return undefined;
    }

    let nextIndex = this.position - 1;

    if (nextIndex < 0) {
      nextIndex = this.source.length - 1;
    }

    this.position = nextIndex;

    return this.source[nextIndex];
  }
}
