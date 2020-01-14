import React, { useState } from 'react';
import Link from '../link';
import Input from '../input';
import Button from '../button';
import once from 'lodash/once';
import replace from 'lodash/fp/replace';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import classes from './pagination.scss';

const cx = classnames.bind(classes);

const keepDigits = replace(/\D/g, '');

const getInputClasses = once(defaults => ({
  ...defaults,
  input: cx(defaults.input, 'page-input'),
  permanent: cx(defaults.permanent, 'page-input-wrapper'),
}));

/**
 * Возвращает компонент формы выбора страницы.
 * @param {Object} props Свойства.
 * @param {number} props.min Минимальное значение номера.
 * @param {number} props.max Максимальное значение номера.
 * @param {Function} props.onSubmit Сработает при подтверждении введенного значения.
 * @param {Function} props.onClose Сработает при закрытии формы кнопкой "Отмена".
 * @return {ReactElement} Компонент формы выбора страницы.
 */
export const PageSelectForm = ({
  min = 1,
  max = 1,
  onSubmit,
  onClose,
}) => {
  const [value, setValue] = useState('');
  const numberValue = parseInt(value) || null;

  return (
    <div className={cx('page-select-form')}>
      Перейти на страницу
      <Input
        autoFocus
        value={value}
        computeClasses={getInputClasses}
        onChange={({ target }) => {
          const cleanValue = keepDigits(target.value);
          setValue(cleanValue.slice(0, String(max).length));
        }}
        onKeyUp={({ target }) => {
          const cleanValue = keepDigits(target.value);

          if (cleanValue.length > 0) {
            const cleanNumberValue = parseInt(cleanValue);

            if (cleanNumberValue < min) {
              setValue(String(min));
            } else if (cleanNumberValue > max) {
              setValue(String(max));
            } else {
              setValue(cleanValue);
            }
          } else {
            setValue(cleanValue);
          }
        }}
        onKeyPress={({ key }) => {
          key === 'Enter' && onSubmit({ value: numberValue });
        }}
      />
      <Button
        color='blue'
        onClick={() => onSubmit({ value: numberValue })}
        className={cx('submit-button')}
        children='ОК'
      />
      <Link
        pseudo
        underlined
        color='black'
        onClick={onClose}
        className={cx('cancel-button')}
        children='Отмена'
      />
    </div>
  );
};

PageSelectForm.propTypes = {
  /**
   * Минимальное значение номера.
   */
  min: PropTypes.number,

  /**
   * Максимальное значение номера.
   */
  max: PropTypes.number,

  /**
   * Сработает при подтверждении введенного значения.
   */
  onSubmit: PropTypes.func,

  /**
   * Сработает при закрытии формы кнопкой "Отмена".
   */
  onClose: PropTypes.func,
};
