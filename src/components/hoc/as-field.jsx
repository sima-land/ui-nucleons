import React, { forwardRef } from 'react';
import classnames from 'classnames/bind';
import getDisplayName from '../helpers/get-display-name';
import classes from './as-field.scss';
import identity from 'lodash/identity';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Компонент высшего порядка.
 * Оборачивает компонент, добавляя вывод ярлыка, ошибки и дополнительной информации.
 * @param {Function} Component Оборачиваемый компонент.
 * @param {Object} [options] Настройки оборачивания.
 * @param {boolean} [options.isImplementsLabel=false] Реализует ли компонент ярлык.
 * @param {boolean} [options.isImplementsError=false] Реализует ли компонент ошибку.
 * @param {boolean} [options.isImplementsInfo=false] Реализует ли компонент дополнительную информацию.
 * @param {boolean} [options.passProps=identity] Определяет как передать пропсы в оригинальный компонент.
 * @return {Function} Обернутый компонент.
 */
const asField = (Component, options) => {
  const {
    isImplementsLabel = false,
    isImplementsError = false,
    isImplementsInfo = false,
    passProps = identity,
  } = options || {};

  const Field = forwardRef(function Field (props, ref) {
    const {
      container: Container = 'div',
      label,
      error,
      info,
      id,
    } = props;
    const needLabel = !isImplementsLabel && label;
    const needError = !isImplementsError && error;
    const needInfo = !isImplementsInfo && info;

    return (
      <Container className={cx('field-wrapper')}>
        {Boolean(needLabel) && (
          <div className={cx('row')}>
            <label htmlFor={id} className={cx('label')}>
              {needLabel}
            </label>
          </div>
        )}
        <div className={cx('row')}>
          <Component
            ref={ref}
            {...passProps(props)}
          />
        </div>
        {Boolean(needError) && (
          <div className={cx('row', 'error')}>{error}</div>
        )}
        {Boolean(needInfo) && (
          <div className={cx('row', 'info')}>{info}</div>
        )}
      </Container>
    );
  });

  Field.propTypes = FieldPropTypes;
  Field.displayName = `asField(${getDisplayName(Component)})`;

  return Field;
};

const FieldPropTypes = {
  /**
   * Элемент-контейнер.
   */
  container: PropTypes.string,

  /**
   * Идентификатор (будет использован как значение "for" для ярлыка).
   */
  id: PropTypes.string,

  /**
   * Содержимое ярлыка.
   */
  label: PropTypes.any,

  /**
   * Содержимое ошибки.
   */
  error: PropTypes.any,

  /**
   * Содержимое примечания.
   */
  info: PropTypes.any,
};

export default asField;
