import React, { forwardRef } from 'react';
import Icon from '../icon';
import cross from '../icons/cross.svg';
import classnames from 'classnames/bind';
import classes from './amount.scss';
import { useIsTouchDevice } from '../hooks';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

/**
 * Возвращает компонент поля количества товара.
 * @param {Object} props Свойства компонента. Также поддерживаются все свойства input кроме className и type.
 * @param {boolean} [props.withControls=true] Нужно ли выводить кнопки управления.
 * @param {boolean} [props.withPlus=withControls] Нужно ли выводить кнопку "+".
 * @param {boolean} [props.withMinus=withControls] Нужно ли выводить кнопку "-".
 * @param {boolean} [props.withCross=withControls] Нужно ли выводить кнопку-крестик.
 * @param {Function} [props.onAdd] Сработает при нажатии кнопки "+".
 * @param {Function} [props.onSubtract] Сработает при нажатии кнопки "-".
 * @param {Function} [props.onClear] Сработает при нажатии на крестик.
 * @param {Function} ref Объект для сохранения ссылки на DOM-элемент поля.
 * @return {ReactElement} Компонент поля количества товара.
 */
const Amount = forwardRef(function Amount ({
  withControls = true,
  withPlus = withControls,
  withMinus = withControls,
  withCross = withControls,
  onAdd,
  onSubtract,
  onClear,
  inputClassName,
  ...inputProps
}, ref) {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className={cx('amount-container')}>
      <div className={cx('amount-wrapper')}>
        <div className={cx('field-wrapper')}>
          {Boolean(withMinus) && (
            <span
              className={cx('button', 'subtract-button')}
              onClick={onSubtract}
              role='button'
              aria-label='Удалить единицу товара'
              children='−'
            />
          )}
          <input
            {...inputProps}
            ref={ref}
            type='text'
            className={cx('amount-field', inputClassName)}
          />
          {Boolean(withPlus) && (
            <span
              className={cx('button', 'add-button')}
              onClick={onAdd}
              role='button'
              aria-label='Добавить единицу товара'
              children='+'
            />
          )}
        </div>
        {Boolean(withCross) && (
          <div className={cx('clear-icon-wrapper', { hidden: !isTouchDevice })}>
            <span title='Удалить товар из корзины'>
              <Icon
                className={cx('clear-icon')}
                role='button'
                aria-label='Удалить товар из корзины'
                icon={cross}
                size={16}
                onClick={onClear}
              />
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

Amount.propTypes = {
  /**
   * Нужно ли выводить кнопки управления.
   */
  withControls: PropTypes.bool,

  /**
   * Нужно ли выводить кнопку "+".
   */
  withPlus: PropTypes.bool,

  /**
   * Нужно ли выводить кнопку "-".
   */
  withMinus: PropTypes.bool,

  /**
   * Нужно ли выводить кнопку-крестик.
   */
  withCross: PropTypes.bool,

  /**
   * Сработает при нажатии кнопки "+".
   */
  onAdd: PropTypes.func,

  /**
   * Сработает при нажатии кнопки "-".
   */
  onSubtract: PropTypes.func,

  /**
   * Сработает при нажатии на крестик.
   */
  onClear: PropTypes.func,

  /**
   * Объект для сохранения ссылки на DOM-элемент поля.
   */
  inputClassName: PropTypes.object,
};

Amount.displayName = 'Amount';
export default Amount;
