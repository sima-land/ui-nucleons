import { forwardRef, ReactElement } from 'react';
import type { ButtonProps } from './types';
import { SpinnerSVG } from '../spinner';
import classnames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classnames.bind(styles);

/**
 * Кнопка - запускает действие.
 * @param props Свойства.
 * @return Элемент.
 */
export const Button = forwardRef<any, ButtonProps>(function Button(
  {
    viewType = 'primary',
    icon: Icon,
    iconPosition = 'start',
    size = 'm',
    loading,
    disabled,
    className,
    children,
    'data-testid': testId = 'button',
    ...restProps
  },
  ref,
) {
  const hasIcon = Boolean(Icon);
  const hasText = Boolean(children);

  const rootClassName = cx(
    'root',
    `size-${size}`,
    viewType !== 'unset' && `view-${viewType}`,
    loading && 'loading',
    disabled && 'disabled',
    hasIcon && !hasText && 'icon-only',
    hasText && hasIcon && iconPosition === 'start' && 'icon-start',
    hasText && hasIcon && iconPosition === 'end' && 'icon-end',
    className,
  );

  const content = (
    <>
      {/* ВАЖНО: выводим контент даже в состоянии loading (под спиннером) чтобы ширина не "скакала" */}
      {Icon && iconPosition === 'start' && <Icon className={cx('icon')} />}
      {children}
      {Icon && iconPosition === 'end' && <Icon className={cx('icon')} />}

      {loading && (
        <SpinnerSVG
          size='s'
          color={disabled || viewType === 'secondary' ? 'basic-gray38' : 'basic-white'}
          className={cx('spinner')}
        />
      )}
    </>
  );

  let result: ReactElement | null = null;

  if (restProps.appearance === 'container') {
    result = (
      <div {...restProps} ref={ref} className={rootClassName} role='button' data-testid={testId}>
        {content}
      </div>
    );
  } else if (restProps.appearance === 'link') {
    result = (
      <a {...restProps} ref={ref} className={rootClassName} data-testid={testId}>
        {content}
      </a>
    );
  } else {
    result = (
      <button
        {...restProps}
        ref={ref}
        className={rootClassName}
        disabled={disabled}
        data-testid={testId}
      >
        {content}
      </button>
    );
  }

  return result;
});

// @todo сделать что-то в духе ButtonContent в который можно указывать иконки, подзаголовок и тд
