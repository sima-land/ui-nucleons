import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type TopBarSize = 's' | 'm' | 'xl';

export interface TopBarButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка. */
  icon?: ReactNode;

  /** Текст. */
  text?: string;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
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

  /** Размер. */
  size?: TopBarSize | 'unset';

  /** Подзаголовок. */
  subtitle?: ReactNode;

  /** Заголовок. */
  title?: ReactNode;

  /** Нужна ли разделительная черта снизу. */
  divided?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
