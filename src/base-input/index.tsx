import React, { useRef, useEffect, useImperativeHandle, forwardRef } from 'react';
import classnames from 'classnames/bind';
import classes from './base-input.scss';
import { fitElementHeight } from '../helpers/fit-element-height';
import { isString } from 'lodash';

const cx = classnames.bind(classes);

interface RestPlaceholder {
  value: string
  shiftValue?: string
}

interface Styles extends React.CSSProperties {
  '--placeholder-color'?: string
}

export interface CustomProps {
  multiline?: boolean
  restPlaceholder?: string | RestPlaceholder
  style?: Styles
}

export type Props = CustomProps
& React.TextareaHTMLAttributes<HTMLTextAreaElement>
& React.InputHTMLAttributes<HTMLInputElement>;

/**
 * Компонент поля ввода.
 * @param props Свойства. Поддерживаются свойства элемента input.
 * @param props.multiline Нужно ли выводить textarea вместо input.
 * @param props.restPlaceholder Остаточный placeholder (выводится после введенного значения).
 * @return Компонент поля ввода.
 */
export const BaseInput = forwardRef<HTMLTextAreaElement | HTMLInputElement | undefined, Props>(function BaseInput ({
  className,
  disabled,
  multiline,
  onInput,
  restPlaceholder: restPlaceholderProp,
  rows = 1,
  style,
  value,
  ...props
}, ref) {
  const Element = multiline ? 'textarea' : 'input' as typeof multiline extends true ? 'textarea' : 'input';
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>();

  useImperativeHandle(ref, () => inputRef.current);

  useEffect(() => {
    multiline && inputRef.current && fitElementHeight({
      target: inputRef.current,
    });
  }, []);

  const restPlaceholder: RestPlaceholder = isString(restPlaceholderProp)
    ? { shiftValue: value, value: restPlaceholderProp }
    : { shiftValue: value, ...restPlaceholderProp as any };

  return (
    <div
      style={style}
      className={cx(
        'reset',
        'root',
        disabled && 'disabled',
        className
      )}
    >
      {!multiline && Boolean(restPlaceholder.value) && (
        <span aria-hidden className={cx('fake-text')}>
          <span className={cx('invisible-value')}>{restPlaceholder.shiftValue}</span>
          <span className={cx('placeholder')}>{restPlaceholder.value}</span>
        </span>
      )}
      <Element
        {...props}
        rows={multiline ? rows : undefined}
        ref={inputRef as any}
        disabled={disabled}

        // ВАЖНО: не даем возможности задать стили/классы именно для этого элемента
        className={cx(
          'field',
          'reset',
          multiline && 'multiline'
        )}
        value={value}
        onInput={(event: any) => {
          multiline && fitElementHeight(event);
          onInput?.(event as any);
        }}
      />
    </div>
  );
});
