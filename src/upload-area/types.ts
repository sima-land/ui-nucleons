import type {
  ChangeEvent,
  CSSProperties,
  DragEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';

export type UploadAreaSize = 's' | 'm';

export interface UploadAreaProps {
  /** Размер. */
  size?: UploadAreaSize | 'unset';

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** Ограничение на количество файлов. */
  countLimit?: number;

  /** Состояние с ошибками валидации. */
  failed?: boolean;

  /** Отключенное состояния. */
  disabled?: boolean;

  /** Роль файлов. */
  fileRole?: string;

  /** Форматы файлов, выводятся пользователю. */
  formats?: string;

  /** Ограничение на количество файлов. */
  multiple?: boolean;

  /** Сработает при выборе или перетаскивании файлов, получив список файлов и событие. */
  onSelect?: (list: File[], event: DragEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void;

  /** Ограничение на размер. */
  sizeLimit?: string;

  /** Свойства корневого элемента. */
  rootProps?: HTMLAttributes<HTMLElement>;

  /** Свойства элемента input. */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
