import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ComponentType,
  ReactElement,
  Ref,
  SVGAttributes,
} from 'react';
import { LinkColor } from '../link';
import classNames from 'classnames/bind';
import styles from './text-button.module.scss';

export type TextButtonSize = 's' | 'm';

export type TextButtonColor = LinkColor;

interface CommonProps {
  /** Размер. */
  size?: TextButtonSize;

  /** Цвет. */
  color?: TextButtonColor;

  /** Иконка перед текстом. */
  startIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Иконка после текста. */
  endIcon?: ComponentType<SVGAttributes<SVGSVGElement>>;

  /** Ref для элемента button. Будет заполнен только при appearance: 'button'. */
  buttonRef?: Ref<HTMLButtonElement>;

  /** Ref для элемента a. Будет заполнен только при appearance: 'link'. */
  anchorRef?: Ref<HTMLAnchorElement>;

  /** Нужно ли выводить подчеркивание. */
  underline?: boolean;

  /** Отключенное состояние. */
  disabled?: boolean;

  /** Отступ от иконок. */
  iconGutter?: 4 | 8;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export type TextButtonAsButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> & {
    /** Какой элемент выводить в качестве текстовой кнопки. */
    as?: 'button';
  };

export type TextButtonAsAnchorProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    /** Какой элемент выводить в качестве текстовой кнопки. */
    as: 'anchor';
  };

export type TextButtonProps = TextButtonAsButtonProps | TextButtonAsAnchorProps;

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
