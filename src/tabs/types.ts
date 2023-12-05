import type { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import type { WithTestId } from '../types';

export interface TabProps extends WithTestId {
  /** Название вкладки. */
  name?: string;

  /** Выбрана ли вкладка. */
  selected?: boolean;

  /** Отключена ли вкладка. */
  disabled?: boolean;

  /** Обработчик клика. */
  onClick?: MouseEventHandler<HTMLLIElement>;

  /** Содержимое. */
  children?: ReactNode;

  /** Класс корневого элемента. */
  className?: string;

  /** Стили. */
  style?: CSSProperties;
}

export interface TabsStyle extends CSSProperties {
  '--tabs-gap'?: string;
}

export interface TabsProps extends WithTestId {
  /** Визуальный вариант вкладок. */
  view?: 'clean' | 'clean-underline' | 'round';

  /** Необходимо ли растягивать вкладки под размер контейнера. */
  stretch?: boolean;

  /** Размер отступа между вкладками. */
  gapSize?: 's' | 'm' | 'unset';

  /** Класс корневого элемента. */
  className?: string;

  /** Стили. */
  style?: TabsStyle;

  /** Вкладки. */
  children?: ReactNode;
}
