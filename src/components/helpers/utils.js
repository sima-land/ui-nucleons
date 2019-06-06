/**
 * Получает подстроку.
 * @param {string} string Строка.
 * @param {string} substring Подстрока.
 * @return {Array} Массив с обьектами, содержащими строку и указателем жирное ли начертание.
 */
export const getSample = (string, substring) => {
  let result = [];
  string = String(string);
  substring = String(substring);
  if (substring.length === 0) {
    return [{
      text: string,
      isBold: false,
    }];
  }
  const partEnd = string.toLowerCase().indexOf(substring.toLowerCase());
  if (string.length && substring.length) {
    result.push({
      text: partEnd >= 0 ? string.slice(0, partEnd || substring.length) : string,
      isBold: partEnd === 0,
    });
    if (partEnd > -1) {
      result = [...result, ...getSample(string.slice(partEnd || substring.length), substring)];
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
 * @param {string} string Строка в которой нужно найти подстроку и предать ей жирное начертание.
 * @param {string} substring Подстрока, которой нужно предать жирное начертание.
 * @return {string} Обёрнутая тегом <b> строка.
 */
export const makeBoldSubstring = (string, substring) => parseToString(getSample(string, substring));

/**
 * Форматирует число.
 * @param {number} value Число для форматирование.
 * @param {string} [separator=' '] Разделяющий символ для чисел больше 999.
 * @return {Array} Массив строк с целой и дробной отоформатированными частями числа.
 */
export const formatNumber = (value, separator) => {
  separator = String(separator) === separator ? separator : ' ';
  const string = String(value).toLowerCase(),
    number = Number(string);
  let result = [];
  if (!isNaN(number) && isFinite(number)) {
    const decimals = number < 0.01 && number > 0 ? 4 : 2;
    result = [
      number.toFixed(2).replace(/\.[^.]*$/g, ''), // убираем все числа после точки и точку
      number.toFixed(decimals).replace(/^.*\./g, ''), // убираем все числа до точки и точку
    ];
    const array = result[0].split(''); // получаем массив строк с цифрами из строки целой части числа
    const separated = [];
    while (array.length) {
      separated.unshift(array.splice(-3).join('')); // вытаскиваем последние три цифры и объединяем в строку
    }
    result[0] = separated.join(separator); // подменяем целую часть на целую разделённую
  }
  return result;
};
