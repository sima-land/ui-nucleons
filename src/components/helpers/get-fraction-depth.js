/**
 * Вычисляет разрядность дробной части.
 * @param {(number|null)} fraction Дробь.
 * @return {number} Разрядность / Колличество символов после точки.
 */
export const getFractionDepth = (fraction = null) => {
  const fractionString = Number(fraction).toString();
  return fractionString.includes('.')
    ? fractionString.length - fractionString.indexOf('.') - 1
    : 0;
};
