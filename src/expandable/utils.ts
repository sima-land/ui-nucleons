import { RefObject, useCallback, useEffect, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';
import on from '../helpers/on';
import styles from './expandable-group.module.scss';

export interface ViewState {
  lastVisibleIndex: number;
}

/**
 * Хук состояния группы элементов ограниченных несколькими строками с возможностью показать все.
 * @param options.expanded Развернут ли список.
 * @param options.wrapperRef Реф элемента, формирующего ограничение по высоте.
 * @param options.containerRef Реф элемента, содержащего список.
 * @param options.openerRef Реф элемента "открывашки".
 * @param options.gap Расстояние между элементами списка.
 * @return Рассчитанные данные: кол-во скрытых элементов.
 */
export function useExpandable({
  expanded,
  wrapperRef,
  containerRef,
  openerRef,
  gap,
}: {
  expanded: boolean;
  wrapperRef: RefObject<HTMLElement>;
  containerRef: RefObject<HTMLElement>;
  openerRef: RefObject<HTMLElement>;
  gap: number;
}) {
  const [hiddenCount, setHiddenCount] = useState(0);

  const calc = useCallback(() => {
    const wrapperEl = wrapperRef.current;
    const containerEl = containerRef.current;
    const openerEl = openerRef.current;

    if (expanded) {
      if (containerEl) {
        for (const item of containerEl.children) {
          item.classList.remove(styles.hidden);
        }
      }
    } else {
      if (wrapperEl && containerEl && openerEl) {
        const items = [...containerEl.children].filter(child => child !== openerEl);

        // делаем все элементы списка видимыми чтобы правильно считать размеры
        for (const item of items) {
          item.classList.remove(styles.hidden);
        }

        // определяем какие элементы не влезли в ограничение по высоте
        const state = defineViewState(wrapperEl, items, openerEl, gap);

        if (state.lastVisibleIndex !== -1) {
          // делаем невидимыми элементы списка которые не влезли
          for (const [index, item] of items.entries()) {
            if (item !== openerEl && index >= state.lastVisibleIndex) {
              item.classList.add(styles.hidden);
            }
          }
        }

        setHiddenCount(state.lastVisibleIndex !== -1 ? items.length - state.lastVisibleIndex : 0);
      }
    }
  }, [expanded, gap, wrapperRef, containerRef, openerRef]);

  // пересчитываем после каждого rerender'а
  useIsomorphicLayoutEffect(calc);

  // пересчитываем при resize
  useEffect(() => on(window, 'resize', calc), [calc]);

  return { hiddenCount };
}

/**
 * Определяет индекс последнего видимого элемента для свернутого списка.
 * @param wrapper Элемент, формирующий ограничение по высоте.
 * @param items Элементы, все кроме "закрывашки".
 * @param opener Элемент "закрывашки".
 * @param gap Расстояние между элементами списка.
 * @return Состояние.
 */
export function defineViewState(
  wrapper: HTMLElement,
  items: Element[],
  opener: HTMLElement,
  gap: number,
): ViewState {
  const state: ViewState = { lastVisibleIndex: -1 };

  const parentRect = wrapper.getBoundingClientRect();

  const firstHiddenNodeIndex = items.findIndex(child => {
    const childRect = child.getBoundingClientRect();
    return childRect.top - parentRect.top >= parentRect.height;
  });

  if (firstHiddenNodeIndex !== -1) {
    const lastVisibleIndex = firstHiddenNodeIndex - 1;
    const lastVisible = items[lastVisibleIndex];

    if (lastVisible) {
      const rightBound = lastVisible.getBoundingClientRect().right;
      const rightContainerBound = wrapper.getBoundingClientRect().right;

      // хватает ли кнопке места после последнего видимого дочернего элемента с учетом отступа между элементами
      const isOpenerFit: boolean = rightContainerBound - rightBound - gap >= opener.clientWidth;

      // если хватает места - ставим кнопку после последнего, иначе - вместо
      // @todo возможна ситуация когда нужно будет удалить N элементов чтобы влезла кнопка
      state.lastVisibleIndex = lastVisibleIndex + Number(isOpenerFit);
    }
  }

  return state;
}
