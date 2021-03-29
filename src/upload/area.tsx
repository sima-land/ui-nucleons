import React from 'react';
import classnames from 'classnames/bind';
import styles from './area.scss';
import UploadSVG from './upload.svg';
import { COLORS } from '../colors';
import Link from '../link';
import { useDragAndDrop, getFilesPreparer } from './utils';
import { upperFirst } from 'lodash';
import getDeclination from '../helpers/get-declination';

export interface Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect' | 'multiple'> {

  /** Ограничение на количество файлов. */
  countLimit?: number

  /** Есть ли ошибки валидации. */
  failed?: boolean

  /** Роль файлов. */
  fileRole?: string

  /** Форматы. */
  formats?: string

  /** Ограничение на количество файлов. */
  multiple?: boolean

  /** Сработает при выборе или перетаскивании файлов, получив список и событие. */
  onSelect?: (list: File[], e: React.DragEvent<HTMLDivElement> | React.ChangeEvent<HTMLInputElement>) => void

  /** Ограничение на размер. */
  sizeLimit?: string
}

const cx = classnames.bind(styles);

/**
 * Компонент поля выбора файла.
 * @param props Свойства.
 * @return Элемент.
 */
export const UploadArea: React.FC<Props> = ({
  onSelect,
  className,
  fileRole = 'файл',
  formats,
  sizeLimit = '2 Mb',
  multiple,
  countLimit = multiple ? undefined : 1,
  failed,
  ...restProps
}) => {
  const secondaryInfo = upperFirst(
    [
      countLimit && countLimit > 0 && `${countLimit} ${getDeclination(countLimit, ['файл', 'файла', 'файлов'])}`,
      formats && `формат ${formats}`,
      `до ${sizeLimit}`,
    ]
      .filter(Boolean)
      .join(', ')
  );

  const prepareFiles = getFilesPreparer({ multiple, countLimit });

  const { active, bind } = useDragAndDrop<HTMLDivElement>({
    onDrop: e => onSelect?.(prepareFiles(e.dataTransfer.files), e),
  });

  return (
    <div
      {...restProps}
      {...bind}
      className={cx('root', { active }, className)}
    >
      <UploadSVG fill={COLORS.get('gray24')} />

      <div className={cx('info-column')}>
        <div className={cx('info', 'primary')}>
          Перетащите или
          {' '}
          <label>
            <input
              type='file'
              multiple={multiple}
              className={cx('input')}
              onChange={e => {
                onSelect?.(prepareFiles(e.target.files as any), e);

                // очищаем поле чтобы можно было выбрать тот же файл повторно
                e.target.value = '';
              }}
            />
            <Link pseudo>загрузите {fileRole}</Link>
          </label>
        </div>

        <div className={cx('info', 'secondary', { failed })}>
          {secondaryInfo}
        </div>
      </div>
    </div>
  );
};
