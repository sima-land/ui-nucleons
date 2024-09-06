import { MutableRefObject, Ref } from 'react';

/**
 * Объединяет рефы в один.
 * Полученный реф будет транслировать значение во все переданные.
 * @param refs Рефы.
 * @return Реф.
 */
export function mergeRefs<T>(refs: Array<Ref<T> | null | undefined>): Ref<T> {
  return value => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        (ref as MutableRefObject<T | null>).current = value;
      }
    }
  };
}
