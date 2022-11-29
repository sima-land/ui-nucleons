import { DragEventHandler, useCallback, useState } from 'react';
import { useIdentityRef } from '../hooks/identity';

type UseFilesDropResult<T> = {
  active: boolean;
  bind: {
    onDragEnter: DragEventHandler<T>;
    onDragOver: DragEventHandler<T>;
    onDragLeave: DragEventHandler<T>;
    onDrop: DragEventHandler<T>;
  };
};

/**
 * Хук обработки перетаскивания файлов на элемент.
 * @param callback Опции.
 * @return Данные.
 */
export function useFilesDrop<T extends HTMLElement = HTMLElement>(
  callback: DragEventHandler<T>,
): UseFilesDropResult<T> {
  const [active, setActive] = useState(false);
  const callbackRef = useIdentityRef(callback);

  const onDragEnter = useCallback<DragEventHandler<T>>(event => {
    event.preventDefault();
    setActive(true);
  }, []);

  const onDragOver = useCallback<DragEventHandler<T>>(event => {
    event.preventDefault();
    setActive(true);
  }, []);

  const onDragLeave = useCallback<DragEventHandler<T>>(event => {
    event.preventDefault();
    const { currentTarget, relatedTarget } = event;

    // игнорируем переход по дочерним элементам
    if (
      !relatedTarget ||
      (currentTarget instanceof Node &&
        relatedTarget instanceof Node &&
        !currentTarget.contains(relatedTarget))
    ) {
      setActive(false);
    }
  }, []);

  const onDrop = useCallback<DragEventHandler<T>>(event => {
    event.preventDefault();
    setActive(false);
    callbackRef.current(event);
  }, []);

  return {
    active,

    bind: {
      onDragEnter,
      onDragOver,
      onDragLeave,
      onDrop,
    },
  };
}
