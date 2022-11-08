import React, {
  useRef,
  useImperativeHandle,
  useState,
  useEffect,
  ReactNode,
  RefObject,
  InputHTMLAttributes,
} from 'react';
import { fitElementHeight } from '../helpers/fit-element-height';
import { useIsomorphicLayoutEffect } from '../hooks';
import { BaseInputProps, RestPlaceholderDefinition } from './types';
import { omitMultiline } from './utils';
import on from '../helpers/on';
import classnames from 'classnames/bind';
import styles from './base-input.module.scss';

const cx = classnames.bind(styles);

/**
 * Поле ввода с возможностью задать остаточный placeholder и автоматическим подстраиванием под содержимое в режиме multiline.
 * @param props Свойства.
 * @return Элемент.
 */
export function BaseInput({
  inputRef,
  textareaRef,
  style,
  className,
  restPlaceholder: restPlaceholderProp,
  'data-testid': testId = 'base-input',
  ...props
}: BaseInputProps) {
  const textareaInnerRef = useRef<HTMLTextAreaElement>(null);
  const inputInnerRef = useRef<HTMLInputElement>(null);

  useImperativeHandle<HTMLTextAreaElement | null, HTMLTextAreaElement | null>(
    textareaRef,
    () => textareaInnerRef.current,
  );
  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => inputInnerRef.current,
  );

  useIsomorphicLayoutEffect(() => {
    // ВАЖНО: после каждого render'а подгоняем высоту многострочного поля под содержимое
    if (textareaInnerRef.current) {
      fitElementHeight({ target: textareaInnerRef.current });
    }
  });

  let field: ReactNode;

  if (props.multiline) {
    field = (
      <textarea
        {...omitMultiline(props)}
        ref={textareaInnerRef}
        rows={props.rows ?? 1}
        data-testid='base-input:field' // ВАЖНО: не даем переопределить data-test-id
        className={cx('field', 'reset', 'multiline')} // ВАЖНО: не даем возможности задать стили/классы для этого элемента
        onInput={e => {
          props.onInput?.(e);
          fitElementHeight({ target: e.currentTarget });
        }}
      />
    );
  } else {
    field = (
      <input
        {...omitMultiline(props)}
        ref={inputInnerRef}
        data-testid='base-input:field' // ВАЖНО: не даем переопределить data-test-id
        className={cx('field', 'reset')} // ВАЖНО: не даем возможности задать стили/классы для этого элемента
      />
    );
  }

  return (
    <div style={style} className={cx('reset', 'root', className)} data-testid={testId}>
      {/* ВАЖНО: restPlaceholder может накладываться на placeholder - компонент позволяет это делать т.к. они могут быть связаны */}
      {!props.multiline && (
        <RestPlaceholder
          inputRef={inputInnerRef}
          value={props.value}
          defaultValue={props.defaultValue}
          definition={restPlaceholderProp}
        />
      )}
      {field}
    </div>
  );
}

/**
 * Остаточный placeholder. Выводится после введенного значения.
 * Полезен для отображения "масок".
 * @param props Свойства.
 * @return Элемент.
 */
export function RestPlaceholder({
  inputRef,
  value,
  defaultValue,
  definition,
}: {
  inputRef: RefObject<HTMLInputElement | null>;
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  defaultValue: InputHTMLAttributes<HTMLInputElement>['defaultValue'];
  definition: BaseInputProps['restPlaceholder'];
}) {
  const [actualValue, setActualValue] = useState<string>(() => String(value ?? defaultValue ?? ''));

  useEffect(() => {
    const element = inputRef.current;

    if (element) {
      // ВАЖНО: не поднимать это состояние, зависящее от события input, на уровень самого поля - ломается ввод
      // пример: https://codesandbox.io/s/react-strange-behavior-of-input-event-iq6915
      return on(element, 'input', () => {
        setActualValue(element.value);
      });
    }
  }, [inputRef]);

  useIsomorphicLayoutEffect(() => {
    if (inputRef.current) {
      setActualValue(inputRef.current.value);
    }
  });

  if (typeof definition === 'undefined') {
    return null;
  } else {
    const data: RestPlaceholderDefinition =
      typeof definition === 'string'
        ? { shiftValue: actualValue, value: definition }
        : { shiftValue: actualValue, ...definition };

    return (
      <span aria-hidden className={cx('rest-placeholder')}>
        <span className={cx('shift-part')}>{data.shiftValue}</span>
        <span className={cx('main-part')}>{data.value}</span>
      </span>
    );
  }
}
