/**
 * Форматирует число.
 * @param {number} value Число для форматирования.
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

