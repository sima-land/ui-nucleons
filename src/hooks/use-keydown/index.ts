import { useEffect } from 'react';
import { useIdentityRef } from '../use-identity-ref';
import { on } from '../../helpers/on';

/**
 * Хук, добавляющий обработчик нажатия на клавишу.
 * @param targetKey Клавиша, для которой отслеживается нажатие.
 * @param callback Обработчик нажатия.
 */
export function useKeydown(
  targetKey: string,
  callback: undefined | ((event: KeyboardEvent) => void),
) {
  const ref = useIdentityRef(callback);

  useEffect(
    () =>
      on<KeyboardEvent>(document, 'keydown', event => {
        const handler = ref.current;

        (event.key === targetKey || event.code === targetKey) && handler?.(event);
      }),
    [targetKey],
  );
}
