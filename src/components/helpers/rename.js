import curry from 'lodash/fp/curry';
import prop from 'lodash/fp/prop';
import assoc from 'lodash/fp/assoc';
import omit from 'lodash/fp/omit';

/**
 * Переименовывает свойство, возвращая новый объект.
 * @param {string|number|symbol} fromKey Старый ключ.
 * @param {string|number|symbol} toKey Новый ключ.
 * @param {Object} source Объект.
 * @return {Object} Новый объект.
 */
export const rename = curry((fromKey, toKey, source) => assoc(
  toKey,
  prop(fromKey, source),
  omit([fromKey], source)
));

export default rename;
