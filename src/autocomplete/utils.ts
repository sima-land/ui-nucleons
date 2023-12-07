import type { SyntheticEvent } from 'react';

/**
 * Наивная реализация синтетического события.
 * Не рекомендуется к использованию за пределами библиотеки.
 */
export class NaiveSyntheticEvent<T extends Element = Element> implements SyntheticEvent<T> {
  nativeEvent: Event;
  currentTarget: EventTarget & T;
  target: EventTarget & T;
  bubbles: boolean;
  cancelable: boolean;
  defaultPrevented: boolean;
  eventPhase: number;
  isTrusted: boolean;
  timeStamp: number;
  type: string;

  /** @inheritdoc */
  constructor(nativeEvent: Event, target: T) {
    this.target = target;
    this.currentTarget = target;
    this.nativeEvent = nativeEvent;
    this.type = nativeEvent.type;
    this.timeStamp = nativeEvent.timeStamp;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
  }

  /** @inheritdoc */
  persist() {
    return void 0;
  }

  /** @inheritdoc */
  stopPropagation() {
    this.nativeEvent.stopPropagation();
  }

  /** @inheritdoc */
  isPropagationStopped() {
    return false;
  }

  /** @inheritdoc */
  preventDefault() {
    this.nativeEvent.preventDefault();
    this.defaultPrevented = this.nativeEvent.defaultPrevented;
  }

  /** @inheritdoc */
  isDefaultPrevented() {
    return this.defaultPrevented;
  }
}

/**
 * Вызывает переданную функцию только если переданное значение не является null или undefined.
 * @param value Значение.
 * @param callback Функция.
 * @return Результат функции или undefined.
 */
export function when<A, B>(value: A, callback: (value: NonNullable<A>) => B): B | undefined {
  return value !== null && value !== undefined ? callback(value) : undefined;
}
