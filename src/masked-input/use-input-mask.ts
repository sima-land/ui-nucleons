import { FormEventHandler, useCallback, useMemo, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '../hooks';
import { on } from '../helpers/on';
import { State, Value } from '@krutoo/input-mask/dist/dom/utils';
import { UseInputMaskOptions, UseInputMaskResult } from './types';
import { actions, createInputMaskStore } from './utils';
import { ReducerOptions } from '@krutoo/input-mask/dist/core';

/**
 * Хук для задания маски для поля ввода текста.
 * ВАЖНО: этот хук не имеет и не должен иметь собственного состояния, которое бы не зависело от переданных аргументов.
 * @todo Возможно стоит перенести в `@krutoo/input-mask`.
 * @param props Опции.
 * @return Интерфейс работы с маской.
 */
export function useInputMask({
  value,
  maskOptions: maskOptionsProp,
}: UseInputMaskOptions): UseInputMaskResult {
  const inputRef = useRef<HTMLInputElement>(null);

  // ВАЖНО: запоминаем опции тк RegExp - объект и при использовании литерала он будет каждый раз новым
  const maskOptions = useMemo<ReducerOptions>(
    () => ({
      mask: maskOptionsProp.mask,
      pattern: new RegExp(maskOptionsProp.pattern),
      placeholder: maskOptionsProp.placeholder,
    }),
    [maskOptionsProp.mask, maskOptionsProp.pattern, maskOptionsProp.placeholder],
  );

  const createStore = useCallback(() => {
    const newStore = createInputMaskStore(maskOptions);

    newStore.dispatch(actions.manualChange({ value }));

    return newStore;
  }, [value, maskOptions]);

  // ВАЖНО: store меняется только при изменении maskOptions поэтому createStore вынесен в useCallback
  const store = useMemo(createStore, [maskOptions]);

  useIsomorphicLayoutEffect(() => {
    const offList: VoidFunction[] = [
      store.subscribe(() => {
        if (inputRef.current) {
          State.applyDiff(store.getState(), inputRef.current);
        }
      }),
      on(document, 'selectionchange', () => {
        if (inputRef.current && inputRef.current === document.activeElement) {
          store.dispatch(actions.inputSelectionChange({ input: inputRef.current }));
        }
      }),
    ];

    return () => offList.forEach(fn => fn());
  }, [store, inputRef]);

  // each render: update state if value prop and state.value not equals
  if (value !== Value.toClean(maskOptions, store.getState().value)) {
    store.dispatch(actions.manualChange({ value }));
  }

  // input field "input" event: update state
  const onInput = useCallback<FormEventHandler<HTMLInputElement>>(
    event => {
      store.dispatch(actions.inputChange({ input: event.currentTarget }));
    },
    [store],
  );

  return {
    store,
    bind: {
      ref: inputRef,
      value: store.getState().value,

      // ВАЖНО: именно onInput а не onChange потому что onInput срабатывает раньше
      onInput,
    },
  };
}
