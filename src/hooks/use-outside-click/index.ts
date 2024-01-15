import { RefObject, useEffect } from 'react';
import { useIdentityRef } from '../use-identity-ref';
import { on } from '../../helpers/on';

/**
 * Запускает переданный обработчик при клике вне элемента.
 * @param elementRef Ref элемента, клик вне которого нужно обработать.
 * @param callback Сработает при клике вне элемента.
 */
export function useOutsideClick(
  elementRef: RefObject<Element | undefined | null> | RefObject<Element | undefined | null>[],
  callback: undefined | ((e: MouseEvent) => void),
) {
  const innerRef = useIdentityRef(elementRef);
  const callbackRef = useIdentityRef(callback);

  useEffect(() => {
    const off = on<MouseEvent>(
      document.documentElement,
      'click',
      event => {
        const arg = innerRef.current;
        const refs = Array.isArray(arg) ? arg : [arg];
        let isOutsideClick = true;

        for (const { current: element } of refs) {
          if (
            element &&
            event.target instanceof Node &&
            (element === event.target || element.contains(event.target))
          ) {
            isOutsideClick = false;
            break;
          }
        }

        isOutsideClick && callbackRef.current?.(event);
      },

      // ВАЖНО: чтобы изменение DOM не приводило к ложному срабатыванию
      { capture: true },
    );

    return off;
  }, []);
}
