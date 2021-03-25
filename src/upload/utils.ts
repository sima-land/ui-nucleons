import React, { useState } from 'react';
import withPrevent from '../helpers/with-prevent';

type DnDProps<T> = {
  onDrop: React.DragEventHandler<T>
};

type DnDResult<T> = {
  active: boolean
  bind: {
    onDragEnter: React.DragEventHandler<T>
    onDragOver: React.DragEventHandler<T>
    onDragLeave: React.DragEventHandler<T>
    onDrop: React.DragEventHandler<T>
  }
};

/**
 * Хук обработки drag-n-drop событий.
 * @param options Опции.
 * @return Данные.
 */
export const useDragAndDrop = <T extends HTMLElement = HTMLElement>({ onDrop }: DnDProps<T>): DnDResult<T> => {
  const [active, setActive] = useState(false);

  return {
    active,

    bind: {
      onDragEnter: withPrevent<React.DragEvent<T>>(() => setActive(true)),

      onDragOver: withPrevent<React.DragEvent<T>>(() => setActive(true)),

      onDragLeave: withPrevent<React.DragEvent<T>>(e => {
        // игнорируем переход по дочерним элементам
        !e.currentTarget.contains(e.relatedTarget as any) && setActive(false);
      }),

      onDrop: withPrevent<React.DragEvent<T>>(e => {
        setActive(false);
        onDrop(e);
      }),
    },
  };
};

/**
 * Возвращает функцию обработки FileList по заданным ограничениям.
 * @param props Свойства.
 * @return Функция.
 */
export const getFilesPreparer = ({
  multiple,
  countLimit,
}: {
  multiple?: boolean
  countLimit?: number
}) => (list: File[] | FileList) => {
  const files = [...list];

  multiple
    ? countLimit && Number.isFinite(countLimit) && files.splice(countLimit)
    : files.splice(1);

  return files;
};
