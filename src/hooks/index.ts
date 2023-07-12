import {
  useEffect,
  useState,
  useLayoutEffect,
  RefObject,
  MutableRefObject,
  DependencyList,
} from 'react';
import { isTouchDevice } from '../helpers/is-touch-device';
import { on } from '../helpers/on';
import { useIdentityRef } from './identity';

/**
 * При монтировании проверяет, поддерживает ли устройство touch события.
 * @return True - если поддерживает, false - если нет, null - если еще неизвестно (на сервере).
 */
export function useIsTouchDevice() {
  const [isTouch, setTouch] = useState<boolean | null>(null);

  useEffect(() => {
    setTouch(isTouchDevice());
  }, []);

  return isTouch;
}

/**
 * Реализует подписку на событие полной прокрутки списка.
 * @param ref Реф прокручиваемого элемента.
 * @param options Опции.
 * @param options.onFullScroll Сработает при событии полной прокрутки.
 * @param options.threshold Отступ от конца списка по которому событие должно срабатывать.
 * @param moreDeps Зависимости эффекта (нужны, когда ref заполняется не на этапе render'а).
 */
export function useInfiniteScroll(
  ref: MutableRefObject<HTMLElement | undefined | null>,
  {
    onFullScroll,
    threshold = 0,
  }: {
    onFullScroll?: (event: UIEvent) => void;
    threshold?: number;
  },
  moreDeps?: DependencyList,
) {
  const callbackRef = useIdentityRef(onFullScroll);

  useEffect(() => {
    const element = ref.current;

    if (element) {
      return on<UIEvent>(element, 'scroll', event => {
        const { scrollTop, clientHeight, scrollHeight } = event.target as HTMLElement;
        const bottom = threshold + scrollTop + clientHeight;
        const isFullyScrolled = bottom >= scrollHeight;

        isFullyScrolled && callbackRef.current?.(event);
      }) as () => void;
    }
  }, [ref, threshold, ...(moreDeps || [])]);
}

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

/**
 * Нужен для того чтобы не получать ошибку при использовании в SSR с NodeJS.
 * @see {@link https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85#gistcomment-2911761}
 */
export const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;
