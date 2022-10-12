import React, {
  InputHTMLAttributes,
  MouseEventHandler,
  Ref,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { BaseInput, BaseInputProps } from '../base-input';
import { COLORS } from '../colors';
import { FieldBlock, FieldBlockProps } from '../field-block';
import classNames from 'classnames/bind';
import styles from './input.module.scss';
import Cross16SVG from '@sima-land/ui-quarks/icons/16x16/Filled/cross';
import Cross24SVG from '@sima-land/ui-quarks/icons/24x24/Filled/cross';

type HtmlInputProps = Pick<
  InputHTMLAttributes<HTMLInputElement>,
  | 'id'
  | 'type'
  | 'value'
  | 'defaultValue'
  | 'placeholder'
  | 'disabled'
  | 'onFocus'
  | 'onBlur'
  | 'onChange'
  | 'onInput'
>;

export interface InputProps extends HtmlInputProps, FieldBlockProps {
  inputRef?: Ref<HTMLInputElement>;
  inputProps?: BaseInputProps;
  type?: Extract<
    InputHTMLAttributes<HTMLInputElement>['type'],
    'text' | 'password' | 'search' | 'email' | 'tel' | 'number'
  >;
  clearable?: boolean;
  onClear?: MouseEventHandler<SVGSVGElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
}

const cx = classNames.bind(styles);

/**
 * Получив значения value и defaultValue для поля, определяет является ли оно заполненным.
 * @param value Значение value.
 * @param defaultValue Значение defaultValue.
 * @return Является ли поле заполненным.
 */
function defineFilled(value: unknown, defaultValue: unknown): boolean {
  return [value, defaultValue].some(v => typeof v !== 'undefined' && `${v}` !== '');
}

/**
 * Текстовое поле.
 * @param props Свойства.
 * @return Элемент.
 */
export function Input({
  // specific Input props
  inputRef,
  inputProps,
  clearable,
  onClear,

  // input element props
  id,
  type,
  value,
  defaultValue,
  placeholder,
  disabled,
  onFocus,
  onBlur,
  onChange,
  onInput,

  // block element props
  onMouseDown,
  onClick,

  // FieldBlock props
  size,
  label,
  failed,
  caption,

  // rest FieldBlock props
  ...restProps
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);
  const [filled, setFilled] = useState<boolean>(() => defineFilled(value, defaultValue));
  const [focused, setFocused] = useState(false);

  const CrossSVG = size === 's' ? Cross16SVG : Cross24SVG;

  const handleMouseDown = useCallback<MouseEventHandler<HTMLDivElement>>(
    event => {
      const input = ref.current;

      onMouseDown?.(event);

      if (!event.defaultPrevented && input && event.target !== input) {
        event.preventDefault();
        input.focus();
      }
    },
    [onMouseDown],
  );

  const updateFilled = useCallback<MouseEventHandler<HTMLInputElement>>(event => {
    setFilled(Boolean(event.currentTarget.value));
  }, []);

  let placeholderColor: string | undefined = undefined;

  switch (true) {
    case failed && !focused && !disabled:
      placeholderColor = COLORS.get('additional-deep-red');
      break;
    case disabled:
      placeholderColor = COLORS.get('basic-gray24');
      break;
    case !disabled:
      placeholderColor = COLORS.get('basic-gray38');
      break;
  }

  useImperativeHandle<HTMLInputElement | null, HTMLInputElement | null>(
    inputRef,
    () => ref.current,
  );

  return (
    <FieldBlock
      {...restProps}
      disabled={disabled}
      size={size}
      label={label}
      labelProps={{ htmlFor: id }}
      labelAsPlaceholder={!focused && !filled}
      failed={failed}
      focused={focused}
      caption={caption}
      {...(clearable &&
        focused &&
        filled && {
          adornmentEnd: (
            <CrossSVG
              data-testid='input:clear-button'
              role='button'
              aria-label='Очистить поле'
              className={cx('clear-button')}
              onClick={onClear}
            />
          ),
        })}
      blockProps={{
        onMouseDown: handleMouseDown,
        onClick,
      }}
      main={
        <BaseInput
          data-testid='input:input-element'
          {...inputProps}
          id={id}
          ref={ref}
          className={cx('input', inputProps?.className)}
          style={{
            ...inputProps?.style,
            '--placeholder-color': placeholderColor,
          }}
          type={type}
          value={value}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={!focused ? label || placeholder : placeholder}
          onFocus={(event: any) => {
            onFocus?.(event);
            updateFilled(event);
            setFocused(true);
          }}
          onBlur={(event: any) => {
            onBlur?.(event);
            updateFilled(event);
            setFocused(false);
          }}
          onInput={(event: any) => {
            onInput?.(event);
            updateFilled(event);
          }}
          onChange={(event: any) => {
            onChange?.(event);
            updateFilled(event);
          }}
        />
      }
      mainProps={{ className: cx('main') }}
    />
  );
}
