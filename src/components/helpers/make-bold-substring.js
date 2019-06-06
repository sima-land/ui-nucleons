/**
 * Получает подстроку.
 * @param {string} phrase Строка.
 * @param {string} substring Подстрока.
 * @return {Array} Массив с обьектами, содержащими строку и указателем жирное ли начертание.
 */
export const getSample = (phrase, substring) => {
  let result = [];
  phrase = phrase ? String(phrase) : '';
  substring = substring ? String(substring) : '';
  if (!substring) {
    result.push({
      text: phrase,
      isBold: false,
    });
  }
  const partEnd = phrase.toLowerCase().indexOf(substring.toLowerCase());
  if (phrase && substring) {
    result.push({
      text: partEnd >= 0 ? phrase.slice(0, partEnd || substring.length) : phrase,
      isBold: partEnd === 0,
    });
    if (partEnd > -1) {
      result = [...result, ...getSample(phrase.slice(partEnd || substring.length), substring)];
    }
  }
  return result;
};

/**
 * Возвращает строку с подстрокой, обёрнутой тегом <b>.
 * @param {Array} array Массив объектов со строками.
 * @return {string} Строка с подстрокой, обёрнутой тегом <b>.
 */
export const parseToString = array =>
  array.reduce((result, el) => el && el.isBold ? `${result}<b>${el.text}</b>` : result + el.text, '');

/**
 * Предаёт подстроке в переданной строке жирное начертание.
 * @param {string} phrase Строка в которой нужно найти подстроку и предать ей жирное начертание.
 * @param {string} substring Подстрока, которой нужно предать жирное начертание.
 * @return {string} Обёрнутая тегом <b> строка.
 */
export const makeBoldSubstring = (phrase, substring) => parseToString(getSample(phrase, substring));

