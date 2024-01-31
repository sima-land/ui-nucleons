import { ButtonHTMLAttributes } from 'react';
import { ChipProps } from './types';
import classnames from 'classnames/bind';
import styles from './chip.m.scss';

const cx = classnames.bind(styles);

/**
 * Чип - компактный элемент для вывода атрибутов или опций.
 * @param props Свойства.
 * @return Элемент.
 */
export function Chip(props: ChipProps) {
  const {
    checked,
    shape = 'square',
    colors = 'light',
    className,
    endAdornment,
    children,
    disabled,
    padding = 'x',
    adornmentGutter = 'default',
    'data-testid': testId = 'chip',
    ...restProps
  } = props;

  const rootClassName = cx(
    'root',
    shape !== 'unset' && `shape-${shape}`,
    colors !== 'unset' && `colors-${colors}`,
    padding !== 'unset' && `padding-${padding}`,
    adornmentGutter !== 'unset' && `adornment-gutter-${adornmentGutter}`,
    checked && 'checked',
    disabled && 'disabled',
    className,
  );

  const content = (
    <>
      <span className={cx('section-main')}>{children}</span>
      {endAdornment && <span className={cx('section-end-adornment')}>{endAdornment}</span>}
    </>
  );

  if (restProps.as === 'anchor') {
    // @todo унифицировать поведение для disabled-ссылок в виде функции getDisabledAnchorProps()?
    return (
      <a className={rootClassName} {...restProps} data-testid={testId}>
        {content}
      </a>
    );
  }

  if (restProps.as === 'button') {
    return (
      <button disabled={disabled} className={rootClassName} {...restProps} data-testid={testId}>
        {content}
      </button>
    );
  }

  return (
    <span className={rootClassName} {...restProps} data-testid={testId}>
      {content}
    </span>
  );
}

/**
 * Кнопка в чипе.
 * @param props Свойства.
 * @return Элемент.
 */
export function ChipIconButton({
  children,
  className,
  ...restProps
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cx('icon-button', className)} {...restProps}>
      {children}
    </button>
  );
}
