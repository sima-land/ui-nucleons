import type { CSSProperties, HTMLAttributes, LabelHTMLAttributes, ReactNode, Ref } from 'react';

export type FieldBlockSize = 's' | 'm' | 'l';

type NoChildren<T extends { children?: any }> = Omit<T, 'children'>;

export interface FieldBlockStyle extends CSSProperties {
  '--field-width'?: string;
  '--field-main-text-color'?: string;
}

type WithStyle<T extends { style?: CSSProperties }> = Omit<T, 'style'> & {
  style?: FieldBlockStyle;
};

export interface FieldBlockProps {
  /** Отключенное состояние. */
  disabled?: boolean;

  /** Состояние с ошибкой. */
  failed?: boolean;

  /** Состояние фокуса. */
  focused?: boolean;

  /** Подпись под полем. */
  caption?: string;

  /** Ярлык в поле. */
  label?: string;

  /** Выводить ярлык вместо placeholder или введенного значения. */
  labelAsPlaceholder?: boolean;

  /** Опции элемента ярлыка. */
  labelProps?: NoChildren<LabelHTMLAttributes<HTMLLabelElement>>;

  /** Размер. */
  size?: FieldBlockSize;

  /** Фиксировать высоту. */
  fixedHeight?: boolean;

  /** Опции корневого элемента. */
  rootProps?: NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>>;

  /** Ref корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Опции элемента блока поля. */
  blockProps?: NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>>;

  /** Ref элемента блока поля. */
  blockRef?: Ref<HTMLDivElement>;

  /** Украшение перед основным содержимым. */
  adornmentStart?: ReactNode;

  /** Украшение после основного содержимого. */
  adornmentEnd?: ReactNode;

  /** Основное содержимое. */
  main?: ReactNode;

  /** Опции основного содержимого. */
  mainProps?: NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}
