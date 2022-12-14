/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import {
  createReducer,
  defineChanges,
  InputState,
  ReducerOptions,
} from '@krutoo/input-mask/dist/core';
import { State, Range, Value } from '@krutoo/input-mask/dist/dom/utils';
import { legacy_createStore as createStore, Store, Action } from 'redux';
import { ActionCreator } from './types';

export const actions = {
  manualChange: createAction<{ value: string }>('manual/change'),
  inputChange: createAction<{ input: HTMLInputElement }>('input/change'),
  inputSelectionChange: createAction<{ input: HTMLInputElement }>('input/selection-change'),
} as const;

export function createInputMaskStore(
  options: ReducerOptions,
  initialState?: InputState,
): Store<InputState> {
  const reducer = createDomReducer(options);

  return createStore(reducer, initialState);
}

function createDomReducer(options: ReducerOptions) {
  const innerReducer = createReducer(options);

  function processState(a: InputState, b: InputState): InputState {
    return innerReducer(a, defineChanges(a, b));
  }

  const initialState: InputState = State.init(options);

  return function reducer(state: InputState = initialState, action: Action): InputState {
    let result: InputState = state;

    if (actions.inputChange.is(action)) {
      result = processState(state, State.fromTarget(action.payload.input));
    } else if (actions.inputSelectionChange.is(action)) {
      result = State.fromTarget(action.payload.input);
    } else if (actions.manualChange.is(action)) {
      // мы не знаем какое значение передано (clean или masked) поэтому берем из него только подходящие символы
      const validCleanValue = action.payload.value
        .split('')
        .filter(c => c.match(options.pattern))
        .join('');

      const newMaskedValue = Value.toMasked(options, validCleanValue);
      const firstPlace = options.mask.indexOf(options.placeholder);

      result = processState(
        State.of(state.value, Range.of(firstPlace, state.value.length)),
        State.of(newMaskedValue, Range.of(newMaskedValue.length)),
      );
    }

    return result;
  };
}

function createAction<P = never>(type: string): ActionCreator<P> {
  const creator: ActionCreator<P> = payload => ({ type, payload });

  creator.is = (action: Action): action is Action<string> & { payload: P } => action.type === type;

  return creator;
}
