import type {
  ChangeEvent,
  CSSProperties,
  DragEvent,
  HTMLAttributes,
  InputHTMLAttributes,
} from 'react';
import type { WithTestId } from '../types';

export type UploadAreaSize = 's' | 'm';

export interface UploadAreaProps extends WithTestId {
  /** Размер. */
  size?: UploadAreaSize | 'unset';

  /** CSS-класс корневого элемента. */
  className?: string;

  /** Стили корневого элемента. */
  style?: CSSProperties;

  /** Заголовок. */
  title?: string;

  /** Описание. */
  description?: string;

  /** Состояние с ошибками валидации. */
  failed?: boolean;

  /** Отключенное состояния. */
  disabled?: boolean;

  /** Ограничение на количество файлов. */
  multiple?: boolean;

  /** Сработает при выборе или перетаскивании файлов, получив список файлов и событие. */
  onSelect?: (list: File[], event: DragEvent<HTMLElement> | ChangeEvent<HTMLInputElement>) => void;

  /** Свойства корневого элемента. */
  rootProps?: HTMLAttributes<HTMLElement>;

  /** Свойства элемента input. */
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

export interface DescriptionPayload {
  /** Ограничение на количество файлов. */
  countLimit?: number;

  /** Ограничение на размер. */
  sizeLimit?: string;

  /** Форматы файлов, выводятся пользователю. */
  formats?: string;
}
