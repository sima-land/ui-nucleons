/**
 * Формирует монограмму из переданной строки.
 * @param value Переданная строка.
 * @return Монограмма.
 */
export function getMonogram(value: any): string {
  if (typeof value === 'string') {
    return value
      .split(/\s+/g)
      .slice(0, 2)
      .map(s => s[0])
      .reverse()
      .join('')
      .toUpperCase();
  }

  return '';
}
