import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';

export type TopBarSize = 's' | 'm' | 'xl';

export interface TopBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка. */
  icon?: ReactNode;

  /** Текст. */
  text?: string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

export interface TopBarStyle extends CSSProperties {
  '--top-bar-height'?: string;
  '--top-bar-title-size'?: string;
  '--top-bar-title-height'?: string;
  '--top-bar-gutter'?: string;
  '--top-bar-icon-button-width'?: string;
  '--top-bar-title-only-size'?: string;
  '--top-bar-title-only-height'?: string;
  '--top-bar-text-align'?: string;
}

export interface TopBarProps {
  /** Свойства кнопок. */
  buttons?: {
    start?: TopBarButtonProps;
    startSecondary?: TopBarButtonProps;
    end?: TopBarButtonProps;
    endSecondary?: TopBarButtonProps;
  };

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили. */
  style?: TopBarStyle;

  /** Размер. */
  size?: TopBarSize | 'unset';

  /** Подзаголовок. */
  subtitle?: ReactNode;

  /** Заголовок. */
  title?: ReactNode;

  /** Нужна ли разделительная черта снизу. */
  divided?: boolean;

  /** Скругления углов. */
  rounds?: 's' | 'm' | 'unset';

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
