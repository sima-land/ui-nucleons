import React, { forwardRef, useState, useEffect } from 'react';
import Checkbox from '../checkbox/';
import isFunction from 'lodash/isFunction';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';
import classes from './checkbox-field.scss';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент поля галочки.
 * @param {Object} props Свойства компонента.
 * @param {boolean} [props.id] Идентификатор элемента input, также передастся в атрибут "for" ярлыка.
 * @param {boolean} [props.checked] Отмечена ли галочка.
 * @param {boolean} [props.defaultChecked] Отмечена ли галочка по умолчанию.
 * @param {*} [props.label] Содержимое ярлыка.
 * @param {*} [props.error] Содержимое ошибки.
 * @param {*} [props.info] Содержимое описания.
 * @param {Object} ref Реф.
 * @return {ReactElement} Компонент поля галочки.
 */
export const CheckboxField = forwardRef(({
  label,
  error,
  info,
  checked = false,
  onChange,
  ...restProps
}, ref) => {
  const [isChecked, toggleCheck] = useState(checked);

  useEffect(() => toggleCheck(checked), [checked]);

  return (
    <span className={cx('checkbox-container')}>
      <span className={cx('checkbox-row')}>
        <span className={cx('content-wrapper')}>
          <Checkbox
            {...restProps}
            ref={ref}
            checked={isChecked}
            onChange={event => {
              toggleCheck(event.target.checked);
              isFunction(onChange) && onChange(event);
            }}
            type='checkbox'
          />
        </span>
      </span>
      <span className={cx('text-row')}>
        {Boolean(label) && (
          <span
            className={cx('content-wrapper', 'label')}
            children={label}
            onClick={() => toggleCheck(!isChecked)}
          />
        )}
        {Boolean(error) && (
          <span
            className={cx('content-wrapper', 'error')}
            children={error}
          />
        )}
        {Boolean(info) && (
          <span
            className={cx('content-wrapper', 'info')}
            children={info}
          />
        )}
      </span>
    </span>
  );
});

CheckboxField.propTypes = {
  /**
   * Описание поля.
   */
  label: PropTypes.any,

  /**
   * Текст ошибки.
   */
  error: PropTypes.any,

  /**
   * Вспомогательный текст.
   */
  info: PropTypes.any,

  /**
   * Отмечена ли галочка.
   */
  checked: PropTypes.bool,

  /**
   * Сработает при смене состояния.
   */
  onChange: PropTypes.func,
};

export default CheckboxField;
