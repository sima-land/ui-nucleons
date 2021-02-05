import { useState } from 'react';
import withPrevent from '../helpers/with-prevent';

/**
 * Хук обработки drag-n-drop событий.
 * @param {Object} options Опции.
 * @param {Function} options.onDrop Сработает при событии "drop".
 * @return {{ active, bind }} Данные.
 */
export const useDragAndDrop = ({ onDrop }) => {
  const [active, setActive] = useState(false);

  return {
    active,

    bind: {
      onDragEnter: withPrevent(() => setActive(true)),
      onDragOver: withPrevent(() => setActive(true)),
      onDragLeave: withPrevent(e => {
        // игнорируем переход по дочерним элементам
        !e.currentTarget.contains(e.relatedTarget) && setActive(false);
      }),
      onDrop: withPrevent(e => {
        setActive(false);
        onDrop?.(e);
      }),
    },
  };
};
