import type { AnchorHTMLAttributes } from 'react';
import type { Token } from '../colors';

export type LinkColor = Extract<
  Token,
  | 'basic-blue'
  | 'basic-gray87'
  | 'basic-gray38'
  | 'basic-white'
  | 'additional-red'
  | 'additional-teal'
>;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Цвет (название токена). */
  color?: LinkColor;

  /**
   * Нужно ли оборачивать содержимое комментариями no-index.
   * @deprecated
   */
  noIndex?: boolean;

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean;

  /** Отключает ссылку подобно кнопке. */
  disabled?: boolean;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;

  /** Нужно ли подчеркивание. */
  underline?: boolean;
}
