import { useRef, useCallback, useEffect, useState, Children, isValidElement } from 'react';
import { enableBodyScroll, disableBodyScroll, BodyScrollOptions } from 'body-scroll-lock';
import { ModalHeader, ModalBody, ModalFooter } from './slots';

/**
 * @param callback Сработает при закрытии.
 * @return Свойства для закрывающего элемента.
 */
export const useCloseHandler = (callback?: () => void) => {
  const mouseDownTarget = useRef<HTMLElement>();

  const onMouseDown = useCallback(({ button, target }) => {
    if (button === 0) {
      mouseDownTarget.current = target;
    }
  }, []);

  const onMouseUp = useCallback(({ target, currentTarget, button }) => {
    callback
      && button === 0
      && target === currentTarget
      && currentTarget === mouseDownTarget.current
      && callback();
  }, [callback]);

  return { onMouseUp, onMouseDown };
};

/**
 * Хук отключения прокрутки body.
 * @param needDisable Нужно ли отключать прокрутку.
 * @param options Опции.
 * @return Ref-callback.
 */
export const useScrollDisable = <T extends HTMLElement>(
  needDisable: boolean,
  options: BodyScrollOptions
): React.RefCallback<T> => {
  // используем состояние здесь чтобы корректно обрабатывать монтирование в портале
  const [element, setElement] = useState<T | null>(null);

  useEffect(() => {
    needDisable && element && disableBodyScroll(element, options);

    return () => {
      needDisable && element && enableBodyScroll(element);
    };
  }, [element, needDisable, options]);

  return setElement;
};

export interface ModalSlots {
  header?: React.ReactElement
  content?: React.ReactElement
  footer?: React.ReactElement
}

/**
 * Распределяет содержимое окна по слотам.
 * @param children Содержимое.
 * @return Слоты.
 */
export const defineSlots = (children: React.ReactNode) => Children.toArray(children).reduce<ModalSlots>(
  (result, item) => {
    if (isValidElement(item)) {
      switch (item.type) {
        case ModalHeader:
          result.header = item;
          break;
        case ModalBody:
          result.content = item;
          break;
        case ModalFooter:
          result.footer = item;
          break;
      }
    }

    return result;
  },
  {}
);
