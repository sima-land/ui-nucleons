export type TopBarSize = 's' | 'm' | 'xl';

export interface TopBarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Иконка. */
  icon?: React.ReactNode;

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
  subtitle?: string;

  /** Заголовок. */
  title?: string;

  /** Нужна ли разделительная черта снизу. */
  divided?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
