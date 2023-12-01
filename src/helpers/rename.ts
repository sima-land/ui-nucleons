type ObjectKey = string | number | symbol;

/**
 * Переименовывает свойство, возвращая новый объект.
 * @deprecated Эта функция не относится напрямую к работе с UI и будет удалена в будущем.
 * @param fromKey Старый ключ.
 * @param toKey Новый ключ.
 * @param source Объект.
 * @return Новый объект.
 */
export function rename(fromKey: ObjectKey, toKey: ObjectKey, source: any): any {
  const result: any = {};

  if (typeof source === 'object' && source !== null) {
    Object.entries(source).forEach(([key, value]) => {
      if (key === fromKey) {
        result[toKey] = value;
      } else {
        result[key] = value;
      }
    });
  }

  return result;
}

export default rename;
