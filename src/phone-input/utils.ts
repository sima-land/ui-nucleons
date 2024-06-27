import { type SyntheticEvent } from 'react';
import { type PhoneInputMask } from './types';
import { kazakhstanMask, russiaMask } from './preset/defaults';

/**
 * Определяет страну по номеру телефона.
 * Если Подходит "Россия", будет выполнена доп.проверка и выбран "Казахстан".
 * Если не найдена подходящая, будет выполнен поиск маски "Россия".
 * @param params Значение.
 * @return Маска.
 */
export function defaultGetDefaultMask({
  value,
  masks,
}: {
  value: string;
  masks: PhoneInputMask[];
}): PhoneInputMask | undefined {
  // ВАЖНО: чтобы эта функция работала с preset/defaults и c preset/defaults-import-png корректно надо возвращать всегда элемент переданного массива
  let result: PhoneInputMask | undefined;

  if (value) {
    result = masks.find(item => value.indexOf(item.mask.replace(/\D/g, '')) === 0);

    if (result && result.id === russiaMask.id && ['6', '7'].includes(value[1])) {
      result = masks.find(item => item.id === kazakhstanMask.id);
    }
  }

  return result ?? masks.find(item => item.id === russiaMask.id);
}

/**
 * Утилиты для работы со строкой, представляющей номер телефона.
 */
export const PhoneValue = {
  /**
   * Получив номер без кода страны и страну вернет номер с кодом.
   * @param value Номер.
   * @param mask Страна.
   * @return Номер.
   */
  addCode(value: string, mask: PhoneInputMask): string {
    return `${mask.mask.replace(/\D/g, '')}${value.replace(/\D/g, '')}`;
  },

  /**
   * Получив номер с кодом страны и страну вернет номер без кода.
   * @param value Номер.
   * @param mask Страна.
   * @return Номер.
   */
  removeCode(value: string, mask: PhoneInputMask): string {
    return value.replace(/\D/g, '').slice(mask.mask.replace(/\D/g, '').length);
  },
} as const;

/**
 * Заглушка для вызова callback'ов которые ожидают SyntheticEvent.
 * @param element Элемент.
 * @param nativeEvent Событие.
 * @return Синтетическое событие.
 */
export function stubSyntheticEvent<T extends Element, E extends Event>(
  element: T,
  nativeEvent: E,
): SyntheticEvent<T, E> & { target: EventTarget & T } {
  return {
    nativeEvent,
    currentTarget: element,
    target: element,
    type: nativeEvent.type,
    bubbles: nativeEvent.bubbles,
    cancelable: nativeEvent.cancelable,
    eventPhase: nativeEvent.eventPhase,
    isTrusted: nativeEvent.isTrusted,
    timeStamp: nativeEvent.timeStamp,

    defaultPrevented: false,
    isDefaultPrevented: () => false,
    isPropagationStopped: () => false,

    persist: () => void 0,
    preventDefault: () => void 0,
    stopPropagation: () => void 0,
  };
}
