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
  // запоминаем опции тк RegExp - объект и при использовании синтаксиса он будет каждый раз новым
  const maskOptions = useMemo<ReducerOptions>(
    () => ({
      mask: maskOptionsProp.mask,
      pattern: new RegExp(maskOptionsProp.pattern),
      placeholder: maskOptionsProp.placeholder,
    }),
    [...Object.values(maskOptionsProp)],
  );

  const input = useRef<HTMLInputElement>(null);
  const [initialValue] = useState(defaultValue);
  const [store, setStore] = useState(() => createInputMaskStore(maskOptions));

  // состояние нужно для того, чтобы вызывать render при изменении состояния
  // ВАЖНО: используем именно state, тк reducer может вернуть состояние без изменений
  const [, setState] = useState(() => store.getState());

  // mask options change: init new store
  useIsomorphicLayoutEffect(() => {
    const nextStore = createInputMaskStore(maskOptions);

    nextStore.dispatch(actions.manualChange({ value: value ?? initialValue ?? '' }));

    setStore(nextStore);
    setState(nextStore.getState());

    return nextStore.subscribe(() => {
      setState(nextStore.getState());

      if (input.current) {
        State.applyDiff(nextStore.getState(), input.current);
      }
    });
  }, [maskOptions]);

  // value prop change: update state
  useIsomorphicLayoutEffect(() => {
    if (
      typeof value !== 'undefined' &&
      value !== Value.toClean(maskOptions, store.getState().value)
    ) {
      store.dispatch(actions.manualChange({ value }));
    }
  }, [value, store]);

  // document selectionchange: update state
  useIsomorphicLayoutEffect(() => {
    const off = on(document, 'selectionchange', () => {
      if (input.current && input.current === document.activeElement) {
        store.dispatch(actions.inputSelectionChange({ input: input.current }));
      }
    });

    return off;
  }, [store]);

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
