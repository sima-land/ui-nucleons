import { useRef, useEffect } from 'react';
import on from '../helpers/on';

/**
 * Хук, добавляющий обработчик нажатия на клавишу.
 * @param targetKey Клавиша, для которой отслеживается нажатие.
 * @param callback Обработчик нажатия.
 */
export const useKeydown = (targetKey: string, callback: undefined | (() => void)) => {
  const ref = useRef(callback);

  ref.current = callback;

  useEffect(() => on<KeyboardEvent>(document, 'keydown', ({ key }) => {
    const fn = ref.current;

    key === targetKey && fn && fn();
  }), [targetKey]);
};
