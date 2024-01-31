import { useRef, useImperativeHandle, ReactNode } from 'react';
import { fitElementHeight } from '../helpers/fit-element-height';
import { useIsomorphicLayoutEffect } from '../hooks';
import { BaseInputProps, RestPlaceholderDefinition } from './types';
import { omitMultiline } from './utils';
import classnames from 'classnames/bind';
import styles from './base-input.m.scss';

const cx = classnames.bind(styles);

/**
 * Базовое поле ввода текста.
 * Позволяет выводить "остаточный placeholder".
 * Может выводиться в однострочном и многострочном режимах.
 * В многострочном режиме автоматически подстраивает высоту под введенный текст.
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

  let restPlaceholder: RestPlaceholderDefinition | null = null;

  // скрываем rest placeholder для неконтролируемых полей
  if (typeof props.value !== 'undefined') {
    restPlaceholder =
      typeof restPlaceholderProp === 'string'
        ? { shiftValue: String(props.value), value: restPlaceholderProp }
        : { shiftValue: String(props.value), value: '', ...restPlaceholderProp };
  }

  return (
    <div style={style} className={cx('reset', 'root', className)} data-testid={testId}>
      {/* ВАЖНО: restPlaceholder может накладываться на placeholder - компонент позволяет это делать т.к. они могут быть связаны */}
      {!props.multiline && restPlaceholder && restPlaceholder.value && (
        <span aria-hidden className={cx('rest-placeholder')}>
          <span data-testid='rest-placeholder-shift' className={cx('shift-part')}>
            {restPlaceholder.shiftValue}
          </span>
          <span data-testid='rest-placeholder' className={cx('main-part')}>
            {restPlaceholder.value}
          </span>
        </span>
      )}
      {field}
    </div>
  );
}
