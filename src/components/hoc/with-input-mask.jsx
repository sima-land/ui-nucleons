import React, { useEffect, useRef } from 'react';
import getDisplayName from '../helpers/get-display-name';
import toArray from 'lodash/toArray';
import isFunction from 'lodash/isFunction';
import PropTypes from 'prop-types';

/**
 * Возвращает объект с новой маской.
 * @param {string} value Текущее значение поля.
 * @param {string} maskedValue Сохраненное (предыдущее) значение поля.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @param {Object} carret Данные о каретке.
 * @return {{maskedValue: string, newCaretPosition: number}} Объект с новой маской.
 */
export const getNewMaskedObject = (
  value,
  maskedValue,
  validator,
  carret,
) => {
  const carretPositionDiff = carret.actual - carret.prev;
  const lastInsertValue = clearValue(
    getLastInsert(value, carret.prev, carretPositionDiff),
    validator
  );
  const isInserting = Boolean(lastInsertValue);
  const cleanValue = clearValue(value, validator);

  let newCaretPosition = carret.prev;
  let newValue = '';
  if (isInserting) {
    newCaretPosition = getNextEditablePosition(carret.prev, validator);

    // override or insert
    if (isFilledField(maskedValue, validator)) {
      const newValueArray = toArray(maskedValue);
      const lastInsertArray = toArray(lastInsertValue);
      while (lastInsertArray.length && newCaretPosition < validator.mask.length) {
        newValueArray[newCaretPosition] = lastInsertArray.shift();
        newCaretPosition = getNextEditablePosition(++newCaretPosition, validator);
      }
      newValue = newValueArray.join('');
    } else {
      newValue = getMaskedValue(cleanValue, validator);
      for (let i = 0 ; i < carretPositionDiff; i++) {
        newCaretPosition = getNextEditablePosition(++newCaretPosition, validator);
      }
    }
  } else {
    newValue = getMaskedValue(cleanValue, validator);

    // backspacing or deleting
    newCaretPosition = carretPositionDiff < 0
      ? getPreviousEditablePosition(newCaretPosition + carretPositionDiff, validator)
      : getNextEditablePosition(newCaretPosition, validator);
  }
  return {
    maskedValue: newValue,
    newCaretPosition,
  };
};

/**
 * Генерирует значение по маске.
 * @param {string} value Текущее значение поля.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @param {number} startPosition Позиция с которой начать объединение значений.
 * @return {string} Замаскированное значение.
 */
export const getMaskedValue = (value, validator, startPosition = 0) => {
  const { mask } = validator;
  const valueArray = toArray(value);
  return toArray(mask).map((letter, index) =>
    isEditablePosition(index, validator) && valueArray.length && index >= startPosition
      ? valueArray.shift()
      : mask[index])
    .join('');
};

/**
 * Возвращает позицию каретки.
 * @param {MouseEvent} e Mouse Event.
 * @return {number} Позиция каретки.
 */
export const getCaretPosition = e => (e.target && e.target.selectionStart) || 0;

/**
 * Возвращает значение последнего редактирования.
 * @param {string} maskedValue Сохраненное (предыдущее) значение поля.
 * @param {number} position Позиция каретки.
 * @param {number} count Количество отредактированных символов.
 * @return {string} Значение последнего редактирования.
 */
export const getLastInsert = (maskedValue, position, count) => maskedValue.substr(position, count);

/**
 * Проверяет строку на заполненность последнего доступного символа.
 * @param {string} value Строка для проверки.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @return {boolean} Флаг заполненности строки.
 */
export const isFilledField = (value, validator) => {
  const { mask = [] } = validator;
  const lastPosition = getPreviousEditablePosition(mask.length, validator) - 1;
  return value && Boolean(value[lastPosition]) && Number(value[lastPosition]) >= 0;
};

/**
 * Фильтрует строку по паттерну - регулярному выражению.
 * @param {string} value Строка.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @param {RegExp} validator.pattern Регулярное выражение.
 * @return {string} Отвфильтрованная строка.
 */
export const clearValue = (value, { pattern }) =>
  value && (value.match(pattern) || []).join('');

/**
 * Проверяет является ли данная позиция в маске редактируемой.
 * @param {number} position Позиция символа в строке.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @param {string} validator.mask Маска.
 * @param {RegExp} validator.pattern Регулярное выражение.
 * @return {boolean} Флаг является ли позиция редактируемой.
 */
export const isEditablePosition = (position, { mask = [], pattern }) =>
  mask[position] && mask[position].match(pattern);

/**
 * Возвращает следующую редактируемую позицию в строке.
 * @param {number} position Позиция символа в строке.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @return {number} Редактируемая позиция.
 */
export const getNextEditablePosition = (position, validator) => {
  const { mask = [] } = validator;
  return !isEditablePosition(position, validator) && position < mask.length
    ? getNextEditablePosition(position + 1, validator)
    : position;
};

/**
 * Возвращает предыдущую редактируемую позицию в строке.
 * @param {number} position Позиция символа в строке.
 * @param {Object} validator Объект с маской и регулярным паттерном.
 * @return {number} Редактируемая позиция.
 */
export const getPreviousEditablePosition = (position, validator) =>
  isEditablePosition(position - 1, validator) || position <= 0
    ? position || getNextEditablePosition(0, validator)
    : getPreviousEditablePosition(position - 1, validator);

/**
 * Возвращает компонент высшего порядка.
 * @param {ReactElement} Component Оборачиваемый компонент.
 * @param {string} mask Маска.
 * @param {RegExp} allowedPattern Паттерн допустимых значений.
 * @return {ReactElement} Компонент высшего порядка, устанавливающий маску.
 */
const withInputMask = (
  Component,
  mask = '+_(___)___-__-__',
  allowedPattern = /[0-9_]/g,
) => {
  const validator = {
    pattern: allowedPattern,
    mask,
  };

  /**
   * Возвращает компонент с установленной маской.
   * @param {Object} props Свойства компонента.
   * @return {ReactElement} Компонент с установленной маской.
   */
  const MaskedInput = props => {
    const {
      value: pureValue,
      onChange: pureOnChange,
      onClick: pureOnClick,
      onKeyUp: pureOnKeyUp,
      onMouseOut: pureOnMouseOut,
    } = props;

    const inputRef = useRef();
    const { current: carret } = useRef({ prev: 0, actual: 0 });
    let { current: value } = useRef(getMaskedValue(clearValue(pureValue, validator), validator));

    useEffect(() => {
      inputRef.current.value = value;
    }, []);

    /**
     * Обработчик смены значения в поле. Устанавливает новое значение в state и проброшенный onChange.
     * @param {MouseEvent} e Mouse event.
     */
    const onChange = e => {
      carret.prev = carret.actual;
      carret.actual = getCaretPosition(e);

      const newValue = getNewMaskedObject(
        e.target.value,
        value,
        validator,
        carret
      );
      carret.actual = newValue.newCaretPosition;
      value = newValue.maskedValue;

      const input = inputRef.current;
      if (input) {
        input.value = value;
        input.setSelectionRange(carret.actual, carret.actual);
      }

      e.target.value = value;
      isFunction(pureOnChange) && pureOnChange(e);
    };

    /**
     * Обработчик нажатия на кнопки клавиатуры. Запоминает позицию каретки и вызывает проброшенный onKeyUp.
     * @param {MouseEvent} e Mouse event.
     */
    const onKeyUp = e => {
      carret.actual = getCaretPosition(e);
      isFunction(pureOnKeyUp) && pureOnKeyUp(e);
    };

    /**
     * Обработчик клика по полю. Запоминает позицию каретки и вызывает проброшенный onClick.
     * @param {MouseEvent} e Mouse event.
     */
    const onClick = e => {
      carret.actual = getCaretPosition(e);
      isFunction(pureOnClick) && pureOnClick(e);
    };

    /**
     * Обработчик выхода мыши из поля. Запоминает позицию каретки и вызывает проброшенный onMouseOut.
     * @param {MouseEvent} e Mouse event.
     */
    const onMouseOut = e => {
      carret.actual = getCaretPosition(e);
      isFunction(pureOnMouseOut) && pureOnMouseOut(e);
    };

    return (
      <Component
        {...props}
        value={undefined}
        ref={inputRef}
        onKeyUp={onKeyUp}
        onClick={onClick}
        onChange={onChange}
        onMouseOut={onMouseOut}
      />
    );
  };
  MaskedInput.propTypes = MaskedInputPropTypes;
  MaskedInput.displayName = `MaskedInput(${getDisplayName(Component)})`;

  return MaskedInput;
};

export default withInputMask;

const MaskedInputPropTypes = {
  /**
   * Значение поля.
   */
  value: PropTypes.string,

  /**
   * Обработчик смены значения в поле.
   */
  onChange: PropTypes.func,

  /**
   * Обработчик нажатия кнопки клавиатуры.
   */
  onKeyUp: PropTypes.func,

  /**
   * Обработчик клика по полю.
   */
  onClick: PropTypes.func,

  /**
   * Обработчик выхода мыши из поля.
   */
  onMouseOut: PropTypes.func,
};
