import React, { ReactNode, HTMLAttributes, LabelHTMLAttributes, Ref } from 'react';
import classNames from 'classnames/bind';
import styles from './field-block.module.scss';

export type FieldBlockSize = 'xs' | 's' | 'l';

type NoChildren<T extends { children?: any }> = Omit<T, 'children'>;

export interface FieldBlockProps {
  disabled?: boolean;
  failed?: boolean;
  focused?: boolean;
  caption?: string;
  label?: string;
  labelAsPlaceholder?: boolean;
  size?: FieldBlockSize;
  fixedHeight?: boolean;
  rootProps?: NoChildren<HTMLAttributes<HTMLDivElement>>;
  rootRef?: Ref<HTMLDivElement>;
  blockProps?: NoChildren<HTMLAttributes<HTMLDivElement>>;
  labelProps?: NoChildren<LabelHTMLAttributes<HTMLLabelElement>>;
  blockRef?: Ref<HTMLDivElement>;
  adornmentStart?: ReactNode;
  adornmentEnd?: ReactNode;
  value?: ReactNode;
  valueProps?: NoChildren<HTMLAttributes<HTMLDivElement>>;

  /** Идентификатор для систем автоматизированного тестирования. */
  'data-testid'?: string;
}

const cx = classNames.bind(styles);

/**
 * Блок поля по дизайн-гайдам.
 * @param props Свойства.
 * @return Элемент.
 */
export function FieldBlock({
  size = 'l',
  value,
  valueProps,
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
      <div {...blockProps} ref={blockRef} className={blockClassName}>
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
          <div {...valueProps} className={cx('main', valueProps?.className)}>
            {value}
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
