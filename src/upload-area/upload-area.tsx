import { ChangeEventHandler, useCallback, useRef } from 'react';
import { Link } from '../link';
import { useFilesDrop } from './utils';
import { UploadAreaProps } from './types';
import UploadSVG from '@sima-land/ui-quarks/icons/64x64/Stroked/Upload';
import classnames from 'classnames/bind';
import styles from './upload-area.m.scss';

const cx = classnames.bind(styles);

/**
 * Поля выбора файлов.
 * @param props Свойства.
 * @return Элемент.
 */
export function UploadArea({
  title,
  description,
  className,
  style,
  size = 'm',
  multiple,
  disabled,
  failed,
  onSelect,
  rootProps,
  inputProps,
  'data-testid': testId = 'upload-area',
}: UploadAreaProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const filterFiles = useCallback(
    (files: FileList | File[]): File[] => {
      const result = [...files];

      multiple ? result : result.splice(1);

      return result;
    },
    [multiple],
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

      <div className={cx('info', { empty: !title && !description })}>
        <div className={cx('text', 'primary')}>
          <input
            {...inputProps}
            ref={inputRef}
            type='file'
            multiple={multiple}
            className={cx('input', inputProps?.className)}
            onChange={onInputChange}
            onClick={e => {
              // ВАЖНО: для того чтобы при клике на корневом элементе не вызывался второй клик
              e.stopPropagation();
            }}
            data-testid='upload-area:input'
            disabled={disabled}
          />
          <Link pseudo data-testid='upload-area:anchor' disabled={disabled}>
            {title}
          </Link>
        </div>

        {description && <div className={cx('text', 'secondary')}>{description}</div>}
      </div>
    </div>
  );
}
