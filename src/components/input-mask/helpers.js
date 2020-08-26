import toArray from 'lodash/toArray';
import findLastIndex from 'lodash/findLastIndex';

/**
 * Возвращает начальное значение инпута.
 * @param {Object} params Переданные параметры.
 * @param {boolean} params.alwaysShowMask Нужно ли всегда показывать маску.
 * @param {string} params.value Значение инпута.
 * @param {string} params.mask Маска.
 * @param {RegExp} params.pattern Паттерн допустимых значений.
 * @param {string} params.maskSign Заменяемый знак маски.
 * @return {string} Начальное значение инпута.
 */
export const getStartValue = ({ alwaysShowMask, value, mask, pattern, maskSign }) => {
  let startValue;

  if (value || alwaysShowMask) {
    startValue = mask
      ? prepareValue({ value, mask, maskSign, pattern })
      : (value.match(pattern) || []).join('');
  }

  return startValue || '';
};

/**
 * Преобразование значения под маску.
 * @param {Object} params Переданные параметры.
 * @param {string} params.value Значение инпута.
 * @param {string} params.mask Маска.
 * @param {RegExp} params.pattern Паттерн допустимых значений.
 * @param {string} params.maskSign Заменяемый знак маски.
 * @return {string} Преобразованное значение.
 */
export const prepareValue = ({ value, mask, maskSign, pattern }) => {
  const patternMask = (mask.match(pattern) || []).join('');
  const patternValueArray = value.match(pattern) || [];
  const patternValue = patternValueArray.join('');

  // Убираем цифры маски из переданного значения инпута.
  const lengthPatternMask = patternMask.length;
  lengthPatternMask
    && patternValue.indexOf(patternMask) === 0
    && patternValueArray.splice(0, lengthPatternMask);

  // Последовательно заполняем заменяемые символы маски по возможности.
  const correctValue = mask
    ? toArray(mask).map(character => {
      let newCharacter;
      if (character === maskSign) {
        newCharacter = patternValueArray.shift();
      }
      return newCharacter || character;
    }).join('')
    : patternValue;

  return correctValue || mask;
};

/**
 * Возвращает корректную позицию курсора.
 * @param {Object} params Переданные параметры.
 * @param {string} params.value Значение инпута.
 * @param {string} params.mask Маска.
 * @param {string} params.maskSign Заменяемый знак маски.
 * @param {number} params.position Переданное положение курсора.
 * @return {number} Позиция курсора.
 */
export const validateCursorPosition = ({ value, mask, maskSign, position }) => {
  const firstValueCaret = value.indexOf(maskSign);
  const firstMaskCaret = mask.indexOf(maskSign);
  let correctPosition = position >= 0 ? position : 0;

  if (firstValueCaret >= 0 && correctPosition >= firstValueCaret) {
    correctPosition = firstValueCaret;
  }

  if (firstMaskCaret >= 0 && correctPosition <= firstMaskCaret) {
    correctPosition = firstMaskCaret;
  }

  return correctPosition;
};

/**
 * Обрабатывает изменения инпута.
 * @param {Object} params Переданные параметры.
 * @param {HTMLElement} params.input Инпут.
 * @param {string} params.mask Маска.
 * @param {RegExp} params.pattern Паттерн допустимых значений.
 * @param {string} params.maskSign Заменяемый знак маски.
 * @param {null|number} params.lastSelection Последнее значение положения курсора.
 * @return {Object} Обновленные данные значения инпута и положения курсора.
 */
export const processChange = ({ input, mask, maskSign, pattern, lastSelection }) => {
  const { value = '', selectionStart } = input || {};
  const maskArray = toArray(mask);
  const valueCharactersArray = toArray(value);
  let position = selectionStart;

  const isAdded = value.length > mask.length;

  // Расчет позиции курсора, чтоб он всегда находился перед заменяемым знаком маски.
  if (maskArray[selectionStart] !== maskSign) {
    const deltaSelection = lastSelection - selectionStart;
    const [needRemoveBefore, needRemoveAfter] = [deltaSelection === 1, deltaSelection === 0];

    if (needRemoveBefore) {
      position = findLastIndex(maskArray, (character, index) =>
        index < selectionStart && character === maskSign);
    } else if (needRemoveAfter || isAdded) {
      position = maskArray.findIndex((character, index) =>
        index >= selectionStart && character === maskSign);
    }

    // Удаление корректного значения, если при удалении попали на пробел/скобку и т.д.
    if (position >= 0 && (needRemoveBefore || needRemoveAfter)) {
      const removeIndex = needRemoveBefore ? position : position - 1;
      valueCharactersArray[removeIndex] = maskArray[removeIndex];
    }
  }

  const correctValue = prepareValue({
    value: valueCharactersArray.join(''),
    mask,
    maskSign,
    pattern,
  }) || '';

  return {
    correctValue,
    correctSelection: validateCursorPosition({
      value: correctValue,
      mask,
      maskSign,
      position: position > 0 ? position : correctValue.length,
    }),
  };
};
