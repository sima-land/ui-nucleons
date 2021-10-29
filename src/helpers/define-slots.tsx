import React, { Children, isValidElement } from 'react';

export type SlotsDict = Record<string, React.ElementType>;

export type Slots<M extends SlotsDict> = {
  [key in keyof M]: React.ReactElement<React.ComponentProps<M[key]>, M[key]> | undefined;
};

/**
 * Определяет, является ли React-элемент элементом заданного типа.
 * @param value Элемент.
 * @param type Тип.
 * @return Результат.
 */
const isComponentOfType = <T extends React.ElementType>(
  value: React.ReactElement,
  type: T,
): value is React.ReactElement<any, T> => value.type === type;

/**
 * Распределяет дочерние элементы по слотам.
 * @param children Дочерние элементы.
 * @param dict Словарь типов элементов.
 * @return Дочерние элементы разбитые по слотам.
 */
export const defineSlots = <T extends SlotsDict>(children: React.ReactNode, dict: T): Slots<T> => {
  const allKeys: Array<keyof T> = Object.keys(dict);

  const slots: Slots<T> = Children.toArray(children).reduce<Slots<T>>((result, item) => {
    if (isValidElement(item)) {
      for (const key of allKeys) {
        if (!result[key] && isComponentOfType(item, dict[key])) {
          result[key] = item;
          break;
        }
      }
    }

    return result;
  }, {} as any);

  return slots;
};
