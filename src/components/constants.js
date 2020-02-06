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

/**
 * Цвета дизайн системы.
 */
export const COLORS = new Map(Object.entries({
  black: '#000',
  white: '#fff',

  // brand
  'brand-dark-blue': '#002b41',
  'brand-deep-blue': '#f5f9fc',
  'brand-blue': '#1f84db',
  'brand-dirty': '#80b4d2',
  'brand-sky': '#e4f1f9',
  'brand-gray': '#afb8bb',

  // gray
  gray87: '#212121',
  gray76: '#3a3a3b',
  gray66: '#545455',
  gray54: '#757575',
  gray38: '#9e9e9e',
  gray24: '#c2c2c2',
  gray12: '#e0e0e0',
  gray8: '#ebebeb',
  gray4: '#f5f5f5',
  gray2: '#fafafa',

  // service
  'service-error': '#fb3a2f',
  'service-success': '#66cb2f',
  'service-visited-link': '#902bd0',
  'service-attention': '#e9f1f4',
  'service-light-red': '#feebea',
  'service-light-green': '#eff9ea',
  'service-sand': '#f6f5ed',

  // additional
  'additional-blue-gray': '#607d8b',
  'additional-red': '#d50000',
  'additional-pink': '#e82e5c',
  'additional-purple': '#b52ea8',
  'additional-deep-purple': '#634bdf',
  'additional-blue': '#2962ff',
  'additional-light-blue': '#0091ea',
  'additional-cyan': '#00b8d4',
  'additional-brown': '#795548',
  'additional-deep-orange': '#ff7200',
  'additional-amber': '#ffab00',
  'additional-yellow': '#ffd600',
  'additional-lime': '#aeea00',
  'additional-light-green': '#64dd17',
  'additional-green': '#00c853',
  'additional-teal': '#09ab8b',
}));
