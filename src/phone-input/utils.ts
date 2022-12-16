import { SyntheticEvent } from 'react';
import { countries, countriesList, Country, IDS } from './presets';

/**
 * Определяет страну по номеру телефона.
 * @param value Значение.
 * @return Данные маски страны.
 */
export function defineCountry(value: string): Country {
  let result;

  if (value) {
    result = countriesList.find(({ codeChars }) => value.indexOf(codeChars) === 0);

    if (result && result.id === IDS.russia && ['6', '7'].includes(value[1])) {
      result = countries.kazakhstan;
    }
  }

  return result || countries.russia;
}

/**
 * Утилиты для работы со строкой, представляющей номер телефона.
 */
export const PhoneValue = {
  /**
   * Получив номер без кода страны и страну вернет номер с кодом.
   * @param value Номер.
   * @param country Страна.
   * @return Номер.
   */
  addCode(value: string, country: Country): string {
    return `${country.codeChars}${value.replace(/\D/g, '')}`;
  },

  /**
   * Получив номер с кодом страны и страну вернет номер без кода.
   * @param value Номер.
   * @param country Страна.
   * @return Номер.
   */
  removeCode(value: string, country: Country): string {
    return value.replace(/\D/g, '').slice(country.codeChars.length);
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
