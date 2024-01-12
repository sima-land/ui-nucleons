import type { AnchorHTMLAttributes } from 'react';
import type { Token } from '../colors';
import type { WithTestId } from '../types';

export type LinkColor = Extract<
  Token,
  | 'basic-blue'
  | 'basic-gray87'
  | 'basic-gray38'
  | 'basic-white'
  | 'additional-red'
  | 'additional-teal'
>;

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, WithTestId {
  /** Цвет (название токена). */
  color?: LinkColor;

  /** Выводить как псевдо-ссылку. */
  pseudo?: boolean;

  /** Отключает ссылку подобно кнопке. */
  disabled?: boolean;

  /** Нужно ли подчеркивание. */
  underline?: boolean;
}
