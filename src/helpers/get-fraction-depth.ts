/**
 * Вычисляет разрядность дробной части.
 * @param fraction Дробь.
 * @return Разрядность / Количество символов после точки.
 */
export function getFractionDepth(fraction: number | null = null) {
  const fractionString = Number(fraction).toString();

  return fractionString.includes('.') ? fractionString.length - fractionString.indexOf('.') - 1 : 0;
}
