import {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
  CSSProperties,
  TextareaHTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import { fitElementHeight } from '../helpers/fit-element-height';
import classnames from 'classnames/bind';
import styles from './base-input.module.scss';

const cx = classnames.bind(styles);

interface RestPlaceholder {
  value: string;
  shiftValue?: string;
}

interface BaseInputStyle extends CSSProperties {
  '--placeholder-color'?: string;
}

export interface CustomProps {
  multiline?: boolean;

  /** Остаточный placeholder (выводится после введенного значения). */
  restPlaceholder?: string | RestPlaceholder;

  /** Стили. */
  style?: BaseInputStyle;
}

export type BaseInputProps = CustomProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLInputElement>;

/**
 * Базовое поле ввода.
 * @deprecated Нужно использовать новую реализацию "@sima-land/ui-nucleons/base-input".
 * @param props Свойства. Поддерживаются свойства элемента input.
 * @return Элемент.
 */
export const BaseInput = forwardRef<
  HTMLTextAreaElement | HTMLInputElement | undefined,
  BaseInputProps
>(function BaseInput(
  {
    className,
    disabled,
    multiline,
    onInput,
    restPlaceholder: restPlaceholderProp,
    rows = 1,
    style,
    value,
    ...props
  },
  ref,
) {
  const Element = multiline
    ? 'textarea'
    : ('input' as typeof multiline extends true ? 'textarea' : 'input');
  const inputRef = useRef<HTMLTextAreaElement | HTMLInputElement>();

  useImperativeHandle(ref, () => inputRef.current);

  // при каждом рендере подгоняем высоту поля под содержимое
  useEffect(() => {
    multiline &&
      inputRef.current &&
      fitElementHeight({
        target: inputRef.current,
      });
  });

  const restPlaceholder: RestPlaceholder =
    typeof restPlaceholderProp === 'string'
      ? { shiftValue: value, value: restPlaceholderProp }
      : { shiftValue: value, ...(restPlaceholderProp as any) };

  return (
    <div
      data-testid='base-input:root'
      style={style}
      className={cx('reset', 'root', disabled && 'disabled', className)}
    >
      {!multiline && Boolean(restPlaceholder.value) && (
        <span aria-hidden className={cx('fake-text')}>
          <span className={cx('invisible-value')}>{restPlaceholder.shiftValue}</span>
          <span className={cx('placeholder')}>{restPlaceholder.value}</span>
        </span>
      )}
      <Element
        data-testid='base-input:field'
        {...props}
        rows={multiline ? rows : undefined}
        ref={inputRef as any}
        disabled={disabled}
        // ВАЖНО: не даем возможности задать стили/классы именно для этого элемента
        className={cx('field', 'reset', multiline && 'multiline')}
        value={value}
        onInput={(event: any) => {
          multiline && fitElementHeight(event);
          onInput?.(event as any);
        }}
      />
    </div>
  );
});
