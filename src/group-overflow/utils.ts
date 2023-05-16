import { RefObject, useCallback, useState, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';

type HideStatus = 'initial' | 'hidden' | 'hidden+more';

/**
 * Хук состояния скрытия не влезающих элементов.
 * @param ref Реф с контейнером.
 * @param getParent Получив контейнер вернет элемент за изменением ширины которого надо следить.
 * @return Состояние.
 */
export function useItemsHide(
  ref: RefObject<HTMLElement>,
  getParent: (el: HTMLElement) => HTMLElement | null | undefined,
) {
  const [state, setState] = useState<HideStatus>('initial');
  const [start, setStart] = useState<number>(-1);

  const calculateHideStart = useCallback(
    (nextState: HideStatus) => {
      if (ref.current) {
        setStart(defineHideStart(ref.current));
        setState(nextState);
      }
    },
    [ref],
  );

  // следим за изменениями размера **родительского** элемента
  useIsomorphicLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const parent = getParent(ref.current);

    if (!parent) {
      return;
    }

    const observer = new ResizeObserver(() => setState('initial'));

    observer.observe(parent);

    return () => observer.disconnect();
  }, [ref]);

  const lastStateRef = useRef<HideStatus | null>(null);

  // при каждом **внешнем** ререндере сбрасываем состояние
  useIsomorphicLayoutEffect(() => {
    if (state === lastStateRef.current) {
      setStart(-1);
      setState('initial');
    } else {
      lastStateRef.current = state;
    }
  });

  // меняем состояние по итогам рендера
  useIsomorphicLayoutEffect(() => {
    switch (state) {
      case 'initial':
        calculateHideStart('hidden');
        break;
      case 'hidden':
        calculateHideStart('hidden+more');
        break;
    }
  }, [state]);

  return { state, start };
}

/**
 * Вернет индекс дочернего элемента, который не влез в контейнер по ширине.
 * Работает только если все дочерние узлы размещены в одной строке (без переноса).
 * @param element Контейнер.
 * @return Индекс.
 */
export function defineHideStart(element: HTMLElement): number {
  const limit = Math.floor(element.getBoundingClientRect().right);

  for (const [index, item] of [...element.children].entries()) {
    if (index > 0 && Math.floor(item.getBoundingClientRect().right) > limit) {
      return index;
    }
  }

  return element.children.length;
}
