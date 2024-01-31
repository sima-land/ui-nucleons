import type { TextButtonProps } from './types';
import type { ReactElement } from 'react';
import classNames from 'classnames/bind';
import styles from './text-button.m.scss';

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
    color && color !== 'unset' && `color-${color}`,
    size && size !== 'unset' && `size-${size}`,
    typeof iconGutter === 'number' && `icon-gutter-${iconGutter}`,
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
    case 'anchor': {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { as, ...anchorProps } = restProps;

      result = (
        <a {...anchorProps} ref={anchorRef} className={rooClassName} data-testid={testId}>
          {content}
        </a>
      );
      break;
    }

    case 'button':
    default: {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { as, ...buttonProps } = restProps;

      result = (
        <button
          {...buttonProps}
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
  }

  return result;
}
