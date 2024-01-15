import { DependencyList, MutableRefObject, useEffect } from 'react';
import { useIdentityRef } from '../use-identity-ref';
import { on } from '../../helpers/on';

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
