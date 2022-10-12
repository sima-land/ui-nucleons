import React, { ReactNode, HTMLAttributes, LabelHTMLAttributes, Ref, CSSProperties } from 'react';
import classNames from 'classnames/bind';
import styles from './field-block.module.scss';

export type FieldBlockSize = 's' | 'm' | 'l';

type NoChildren<T extends { children?: any }> = Omit<T, 'children'>;

interface FieldBlockStyle extends CSSProperties {
  '--field-width'?: string;
}

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
  rootProps?: Omit<HTMLAttributes<HTMLDivElement>, 'style' | 'children'> & {
    style?: FieldBlockStyle;
  };

  /** Ref корневого элемента. */
  rootRef?: Ref<HTMLDivElement>;

  /** Опции элемента блока поля. */
  blockProps?: NoChildren<HTMLAttributes<HTMLDivElement>>;

  /** Ref элемента блока поля. */
  blockRef?: Ref<HTMLDivElement>;

  /** Украшение перед основным содержимым. */
  adornmentStart?: ReactNode;

  /** Украшение после основного содержимого. */
  adornmentEnd?: ReactNode;

  /** Основное содержимое. */
  main?: ReactNode;

  /** Опции основного содержимого. */
  mainProps?: NoChildren<HTMLAttributes<HTMLDivElement>>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classNames.bind(styles);

export const FIELD_BLOCK_HEIGHT: Record<FieldBlockSize, number> = {
  s: 32,
  m: 40,
  l: 56,
} as const;

export const FIELD_BLOCK_DEFAULTS = {
  size: 'l',
} as const;

/**
 * Блок поля по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function FieldBlock({
  size = FIELD_BLOCK_DEFAULTS.size,
  main,
  mainProps,
  disabled,
  failed,
  focused,
  label,
  labelProps,
  labelAsPlaceholder,
  fixedHeight = true,
  caption,
  rootRef,
  rootProps,
  blockRef,
  blockProps,
  adornmentStart,
  adornmentEnd,
  'data-testid': testId = 'field',
}: FieldBlockProps) {
  const needLabel = Boolean(label) && size === 'l';

  const rootClassName = cx(
    'root',
    `size-${size}`,
    {
      disabled,
      focused,
      failed,
      'label-as-placeholder': needLabel && labelAsPlaceholder,
      'no-label': !needLabel,
    },
    rootProps?.className,
  );

  const blockClassName = cx('block', fixedHeight && 'fixed-height', blockProps?.className);

  return (
    <div {...rootProps} ref={rootRef} className={rootClassName} data-testid={testId}>
      <div {...blockProps} ref={blockRef} className={blockClassName} data-testid='field:block'>
        {adornmentStart && (
          <div className={cx('col', 'adornment-col', 'start')} data-testid='field:adornment-start'>
            {adornmentStart}
          </div>
        )}

        <div className={cx('col', 'main-col')}>
          {needLabel && (
            <label
              {...labelProps}
              className={cx('label', labelProps?.className)}
              data-testid='field:label'
            >
              {label}
            </label>
          )}

          {/* основной контент выводим без условий */}
          <div {...mainProps} className={cx('main', mainProps?.className)}>
            {main}
          </div>
        </div>

        {adornmentEnd && (
          <div className={cx('col', 'adornment-col', 'end')} data-testid='field:adornment-end'>
            {adornmentEnd}
          </div>
        )}
      </div>

      {caption && (
        <div className={cx('caption')} data-testid='field:caption'>
          {caption}
        </div>
      )}
    </div>
  );
}
