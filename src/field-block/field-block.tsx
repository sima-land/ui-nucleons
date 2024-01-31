import type { FieldBlockProps, FieldBlockSize } from './types';
import classNames from 'classnames/bind';
import styles from './field-block.m.scss';

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
  'data-testid': testId = 'field-block',
}: FieldBlockProps) {
  const needLabel = Boolean(label) && (size === 'l' || labelAsPlaceholder);

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
      {/* @todo придумать как вынести блок в компонент FieldBox чтобы использовать в отрыве от root/caption  */}
      <div
        {...blockProps}
        ref={blockRef}
        className={blockClassName}
        data-testid='field-block:block'
      >
        {adornmentStart && (
          <div
            className={cx('col', 'adornment-col', 'start')}
            data-testid='field-block:adornment-start'
          >
            {adornmentStart}
          </div>
        )}

        <div className={cx('col', 'main-col')}>
          {needLabel && (
            <label
              {...labelProps}
              className={cx('label', labelProps?.className)}
              data-testid='field-block:label'
            >
              {label}
            </label>
          )}

          {/* основной контент выводим без условий */}
          <div
            {...mainProps}
            className={cx('main', mainProps?.className)}
            data-testid='field-block:main'
          >
            {main}
          </div>
        </div>

        {adornmentEnd && (
          <div
            className={cx('col', 'adornment-col', 'end')}
            data-testid='field-block:adornment-end'
          >
            {adornmentEnd}
          </div>
        )}
      </div>

      {caption && (
        <div className={cx('caption')} data-testid='field-block:caption'>
          {caption}
        </div>
      )}
    </div>
  );
}
