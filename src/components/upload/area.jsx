import React from 'react';
import classnames from 'classnames/bind';
import styles from './area.scss';
import UploadSVG from './upload.svg';
import { COLORS } from '../constants';
import Link from '../link';
import { useDragAndDrop } from './utils';
import { upperFirst } from 'lodash';
import PropTypes from 'prop-types';

const cx = classnames.bind(styles);

/**
 * Компонент поля выбора файла.
 * @param {Object} props Свойства.
 * @param {Function} [props.onSelect] Сработает при выборе или перетаскивании файлов, получив список и событие.
 * @param {string} [props.className] Класс.
 * @param {string} [props.fileRole] Роль файлов.
 * @param {string} [props.formats] Форматы.
 * @param {string} [props.sizeLimit] Ограничение на размер.
 * @param {boolean} [props.multiple] Ограничение на количество файлов.
 * @param {boolean} [props.failed] Есть ли ошибки валидации.
 * @return {ReactElement} Элемент.
 */
export const UploadArea = ({
  onSelect,
  className,
  fileRole = 'файл',
  formats,
  sizeLimit = '2 Mb',
  multiple,
  failed,
  ...restProps
}) => {
  const { active, bind } = useDragAndDrop({
    onDrop: e => onSelect?.(
      multiple ? [...e.dataTransfer.files] : [...e.dataTransfer.files].slice(0, 1),
      e
    ),
  });

  const secondaryInfo = upperFirst(
    [
      !multiple && '1 файл',
      formats && `формат ${formats}`,
      `до ${sizeLimit}`,
    ]
      .filter(Boolean)
      .join(', ')
  );

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
                onSelect?.([...e.target.files], e);

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

UploadArea.propTypes = {
  onSelect: PropTypes.func,
  className: PropTypes.string,
  fileRole: PropTypes.string,
  formats: PropTypes.string,
  sizeLimit: PropTypes.string,
  multiple: PropTypes.bool,
  failed: PropTypes.bool,
};
