import React from 'react';
import Icon from '../icon';
import Input from '../input';
import plusIcon from '../icons/amount-plus.svg';
import minusIcon from '../icons/amount-minus.svg';
import { SmallSize as InputSmallSize } from '../input/presets/small';
import { MediumSize as InputMediumSize } from '../input/presets/medium';
import always from 'lodash/fp/always';
import cond from 'lodash/cond';
import eq from 'lodash/fp/eq';
import T from 'lodash/stubTrue';
import isFunction from 'lodash/isFunction';
import classnames from 'classnames/bind';
import classes from './amount.scss';
import PropTypes from 'prop-types';

const cx = classnames.bind(classes);

const DEFAULT_CLASSES = {
  root: cx('medium-width'),
  input: cx('centered-text'),
};

const getDefaultClassesBySize = cond([
  [eq('small'), always({ ...DEFAULT_CLASSES, root: cx('small-width') })],
  [T, always(DEFAULT_CLASSES)],
]);

/**
 * Возвращает компонент поля количества.
 * @param {Object} props Свойства. Поддерживаются свойства компонента Input.
 * @param {'small'|'medium'} [props.size='medium'] Размер поля.
 * @param {boolean} [props.disabled] Отключено ли поле.
 * @param {Function} [props.onSubtract] Сработает при уменьшении.
 * @param {Function} [props.onAdd] Сработает при увеличении.
 * @param {function({ size, disabled, onClick }): ReactElement} [props.renderPlus] Вернёт кнопку "+".
 * @param {function({ size, disabled, onClick }): ReactElement} [props.renderMinus] Вернёт кнопку "-".
 * @param {boolean} [props.canAdd] Определит, можно ли добавить.
 * @param {boolean} [props.canSubtract] Определит, можно ли уменьшить.
 * @param {Object} [props.computeClasses] Должна вернуть классы получив стандартные.
 * @return {ReactElement} Компонент поля количества.
 */
const Amount = ({
  size = 'medium',
  disabled,
  onAdd,
  onSubtract,
  canAdd = true,
  canSubtract = true,
  renderPlus = DEFAULT_PROPS.renderPlus,
  renderMinus = DEFAULT_PROPS.renderMinus,
  computeClasses,
  ...inputProps
}) => {
  const defaultClasses = getDefaultClassesBySize(size);
  const readyClasses = isFunction(computeClasses)
    ? computeClasses(defaultClasses)
    : defaultClasses;
  const inputPreset = size === 'small'
    ? InputSmallSize({ classes: readyClasses })
    : InputMediumSize({ classes: readyClasses });

  return (
    <Input
      {...inputPreset}
      {...inputProps}
      disabled={disabled}
      startAdornment={renderMinus({
        size,
        disabled: !canSubtract,
        onClick: onSubtract,
      })}
      endAdornment={renderPlus({
        size,
        disabled: !canAdd,
        onClick: onAdd,
      })}
    />
  );
};

Amount.propTypes = {
  /**
   * Размер поля.
   */
  size: PropTypes.oneOf(['small', 'medium']),

  /**
   * Отключено ли поле.
   */
  disabled: PropTypes.bool,

  /**
   * Сработает при уменьшении.
   */
  onSubtract: PropTypes.func,

  /**
   * Сработает при вводе.
   */
  onAdd: PropTypes.func,

  /**
   * Должна вернуть кнопку "+".
   */
  renderPlus: PropTypes.func,

  /**
   * Должна вернуть кнопку "-".
   */
  renderMinus: PropTypes.func,

  /**
   * Определит, можно ли добавить.
   */
  canAdd: PropTypes.bool,

  /**
   * Определит, можно ли уменьшить.
   */
  canSubtract: PropTypes.bool,

  /**
   * Должна вернуть классы получив стандартные.
   */
  computeClasses: PropTypes.func,
};

const DEFAULT_PROPS = {
  // eslint-disable-next-line react/prop-types
  renderPlus: ({ size, disabled, onClick }) => (
    <Icon
      color={disabled ? 'gray12' : 'gray38'}
      size={16}
      icon={plusIcon}
      onClick={disabled ? undefined : onClick}
      className={cx(
        'button',
        size === 'medium' && 'padding-right-16',
        !disabled && 'cursor-pointer'
      )}
      role='button'
      aria-label='Добавить единицу товара'
    />
  ),

  // eslint-disable-next-line react/prop-types
  renderMinus: ({ size, disabled, onClick }) => (
    <Icon
      color={disabled ? 'gray12' : 'gray38'}
      size={16}
      icon={minusIcon}
      onClick={disabled ? undefined : onClick}
      className={cx(
        'button',
        size === 'medium' && 'padding-left-16',
        !disabled && 'cursor-pointer'
      )}
      role='button'
      aria-label='Удалить единицу товара'
    />
  ),
};

export default Amount;
