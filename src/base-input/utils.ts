/**
 * Получив объект, вернет его копию но без свойства multiline.
 * @param source Объект.
 * @return Копия без свойства multiline.
 */
export function omitMultiline<T extends Record<string, unknown>>(source: T): Omit<T, 'multiline'> {
  const next = { ...source };

  delete next.multiline;

  return next;
}
