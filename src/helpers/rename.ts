import { curry, prop, assoc, omit } from 'lodash/fp';

type ObjectKey = string | number | symbol;

/**
 * Переименовывает свойство, возвращая новый объект.
 * @param fromKey Старый ключ.
 * @param toKey Новый ключ.
 * @param source Объект.
 * @return Новый объект.
 */
export const rename = curry((fromKey: ObjectKey, toKey: ObjectKey, source: any) => assoc(
  toKey,
  prop(fromKey, source),
  omit([fromKey], source)
));

export default rename;
