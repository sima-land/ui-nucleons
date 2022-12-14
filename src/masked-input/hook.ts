import { ChangeEventHandler, useCallback, useMemo, useRef, useState } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';
import { on } from '../helpers/on';
import { State, Value } from '@krutoo/input-mask/dist/dom/utils';
import { UseInputMaskOptions, UseInputMaskResult } from './types';
import { actions, createInputMaskStore } from './utils';
import { ReducerOptions } from '@krutoo/input-mask/dist/core';

/**
 * Хук для задания маски для поля ввода текста.
 * @todo Возможно стоит перенести в `@krutoo/input-mask`.
 * @param props Опции.
 * @return Интерфейс работы с маской.
 */
export function useInputMask({
  maskOptions: maskOptionsProp,
  value,
  defaultValue,
}: UseInputMaskOptions): UseInputMaskResult {
  // запоминаем опции тк RegExp - объект и при использовании литерала он будет каждый раз новым
  const maskOptions = useMemo<ReducerOptions>(
    () => ({
      mask: maskOptionsProp.mask,
      pattern: new RegExp(maskOptionsProp.pattern),
      placeholder: maskOptionsProp.placeholder,
    }),
    [maskOptionsProp.mask, maskOptionsProp.pattern, maskOptionsProp.placeholder],
  );

  const input = useRef<HTMLInputElement>(null);
  const [initialValue] = useState(defaultValue);

  // ВАЖНО: рефы нужны чтобы не вызывать callback useMemo при изменении значений
  const valueRef = useRef(value);
  const initialValueRef = useRef(initialValue);
  valueRef.current = value;
  initialValueRef.current = initialValue;

  // mask options change: init new store
  const store = useMemo(() => {
    const newStore = createInputMaskStore(maskOptions);

    newStore.dispatch(
      actions.manualChange({
        value: valueRef.current ?? initialValueRef.current ?? '',
      }),
    );

    return newStore;
  }, [maskOptions]);

  // ВАЖНО: состояние нужно для того, чтобы вызывать render при изменении состояния хранилища
  // ВАЖНО: используем именно store.getState(), тк reducer может вернуть состояние без изменений
  const [, setState] = useState(() => store.getState());

  useIsomorphicLayoutEffect(() => {
    const offList: VoidFunction[] = [
      store.subscribe(() => {
        setState(store.getState());

        if (input.current) {
          State.applyDiff(store.getState(), input.current);
        }
      }),
      on(document, 'selectionchange', () => {
        if (input.current && input.current === document.activeElement) {
          store.dispatch(actions.inputSelectionChange({ input: input.current }));
        }
      }),
    ];

    return () => offList.forEach(fn => fn());
  }, [store]);

  // value prop change: update state
  useIsomorphicLayoutEffect(() => {
    if (
      typeof value !== 'undefined' &&
      value !== Value.toClean(maskOptions, store.getState().value)
    ) {
      store.dispatch(actions.manualChange({ value }));
    }
  }, [value, store, maskOptions]);

  // input change: update state
  const onChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    event => {
      store.dispatch(actions.inputChange({ input: event.target }));
    },
    [store],
  );

  return {
    store,
    bind: {
      ref: input,
      value: store.getState().value,
      onChange,
    },
  };
}
