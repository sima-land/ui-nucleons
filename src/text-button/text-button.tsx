import type { TextButtonProps } from './types';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './text-button.module.scss';

const cx = classNames.bind(styles);

/**
 * Текстовая кнопка.
 * @param props Свойства.
 * @return Элемент.
 */
export function TextButton({
  size = 'm',
  color = 'basic-blue',
  children,
  className,
  startIcon: StartIcon,
  endIcon: EndIcon,
  buttonRef,
  anchorRef,
  underline,
  disabled,
  iconGutter = 8,
  'data-testid': testId = 'text-button',
  ...restProps
}: TextButtonProps) {
  const rooClassName = cx(
    'root',
    `color-${color}`,
    `size-${size}`,
    `icon-gutter-${iconGutter}`,
    underline && 'underline',
    disabled && 'disabled',
    className,
  );

  const content = (
    <>
      {StartIcon && <StartIcon className={cx('icon-start')} />}
      {children}
      {EndIcon && <EndIcon className={cx('icon-end')} />}
    </>
  );

  let result: ReactElement;

  switch (restProps.as) {
    case 'anchor':
      result = (
        <a {...restProps} ref={anchorRef} className={rooClassName} data-testid={testId}>
          {content}
        </a>
      );
      break;

    case 'button':
    default:
      result = (
        <button
          {...restProps}
          ref={buttonRef}
          className={rooClassName}
          disabled={disabled}
          data-testid={testId}
        >
          {content}
        </button>
      );
      break;
  }

  return result;
}
