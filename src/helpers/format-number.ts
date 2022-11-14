/**
 * Форматирует число.
 * @param value Число для форматирования.
 * @param separator Разделяющий символ для чисел больше 999.
 * @return Массив строк с целой и дробной отоформатированными частями числа.
 */
export function formatNumber(value: number | string, separator?: string): string[] {
  const pureSeparator = String(separator) === separator ? separator : ' ';
  const number = Number(value);
  let result: string[] = [];

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

    result[0] = separated.join(pureSeparator); // подменяем целую часть на целую разделённую
  }

  return result;
}
