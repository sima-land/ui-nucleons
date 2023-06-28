import React, { ChangeEventHandler, useCallback, useRef } from 'react';
import { Link } from '../link';
import { useFilesDrop } from './utils';
import { upperFirst } from 'lodash';
import { getDeclination } from '../helpers/get-declination';
import { UploadAreaProps } from './types';
import UploadSVG from '@sima-land/ui-quarks/icons/64x64/Stroked/Upload';
import classnames from 'classnames/bind';
import styles from './upload-area.module.scss';

const cx = classnames.bind(styles);

/**
 * Поля выбора файлов.
 * @param props Свойства.
 * @return Элемент.
 */
export function UploadArea({
  className,
  style,
  size = 'm',
  multiple,
  disabled,
  failed,
  formats,
  fileRole = 'файл',
  countLimit = multiple ? undefined : 1,
  onSelect,
  sizeLimit,
  rootProps,
  inputProps,
  'data-testid': testId = 'upload-area',
}: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const secondaryInfo: string = upperFirst(
    [
      typeof countLimit === 'number' && countLimit > 0
        ? `${countLimit} ${getDeclination(countLimit, ['файл', 'файла', 'файлов'])}`
        : null,

      formats ? `формат ${formats}` : null,

      sizeLimit ? `до ${sizeLimit}` : null,
    ]
      .filter(Boolean)
      .join(', '),
  );

  const filterFiles = useCallback(
    (files: FileList | File[]): File[] => {
      const result = [...files];

      multiple
        ? countLimit && Number.isFinite(countLimit) && result.splice(countLimit)
        : result.splice(1);

      return result;
    },
    [multiple, countLimit],
  );

  const onInputChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    event => {
      onSelect?.(filterFiles(event.target.files || []), event);

      // очищаем поле чтобы можно было выбрать тот же файл повторно
      event.target.value = '';
    },
    [filterFiles, onSelect],
  );

  const { active, bind } = useFilesDrop<HTMLElement>(event => {
    onSelect?.(filterFiles(event.dataTransfer.files), event);
  });

  const rootClassName = cx(
    'root',
    size !== 'unset' && `size-${size}`,
    { active, failed, disabled },
    className,
  );

  return (
    <div
      {...rootProps}
      {...bind}
      data-testid={testId}
      style={style}
      className={rootClassName}
      tabIndex={disabled ? -1 : 0}
      role='button'
      onFocus={event => {
        if (!disabled) {
          rootProps?.onFocus?.(event);
        }
      }}
      onClick={event => {
        if (!disabled) {
          inputRef.current?.click();
          rootProps?.onClick?.(event);
        }
      }}
      onKeyDown={event => {
        // имитируем поведение кнопки
        if (!disabled && ['Enter', 'Space'].includes(event.code)) {
          inputRef.current?.click();
          rootProps?.onKeyDown?.(event);
        }
      }}
      onBlur={event => {
        rootProps?.onBlur?.(event);
      }}
    >
      <UploadSVG className={cx('icon')} />

      <div className={cx('info')}>
        <div className={cx('text', 'primary')}>
          <input
            {...inputProps}
            ref={inputRef}
            type='file'
            multiple={multiple}
            className={cx('input')}
            onChange={onInputChange}
            onClick={e => {
              // для того чтобы при клике на корневом элементе не вызывался второй клик
              e.stopPropagation();
            }}
            data-testid='upload-area:input'
            disabled={disabled}
          />
          <Link pseudo data-testid='upload-area:anchor' disabled={disabled}>
            Загрузите {fileRole}
          </Link>
        </div>

        {secondaryInfo && <div className={cx('text', 'secondary')}>{secondaryInfo}</div>}
      </div>
    </div>
  );
}
