export const DEFAULT_CURRENCY_NAME = 'RUB';
export const USER_DEFAULT_PARAMS = {
  currency: DEFAULT_CURRENCY_NAME,
  sort: 'createdAt',
  per_page: 20,
  'per-page': 20,
  viewtype: 'list',
};
export const graphemes = ['₽', '€', '$', '₴', 'Br'];

/**
 * Набор типов содержимого модификатора.
 * @type {Object}
 */
export const MODIFIERS_TYPES = Object.freeze({
  text: 'text',
  image: 'image',
  color: 'color',
});
