/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
const svgrOptions = require('../svgr.config');

function isSvgRule(rule) {
  return Array.isArray(rule.test)
    ? rule.test.some(item => item.test('.svg'))
    : rule.test.test('.svg');
}

module.exports = async ({ config }) => {
  const baseRules = config.module.rules.map(rule =>
    isSvgRule(rule)
      ? {
          ...rule,

          // исключаем svg так как он будет обрабатываться другим загрузчиком (ниже)
          exclude: /\.svg$/,
        }
      : rule,
  );

  const rules = [
    ...baseRules,

    // scss
    {
      test: /\.scss$/,
      exclude: [/node_modules/, /\.module\.scss$/],
      use: ['style-loader', 'css-loader', 'sass-loader'],
    },

    // css-модули
    {
      test: /\.module\.(css|scss)$/,
      exclude: /node_modules/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: '[name]__[local]__[hash:hex:3]',
            },
          },
        },
        'sass-loader',
      ],
    },

    // svg как React-компоненты
    {
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: svgrOptions,
        },
      ],
      exclude: /node_modules/,
    },
  ];

  return {
    ...config,
    entry: config.entry.filter(item => !item.includes('/webpack-hot-middleware/')),
    module: { ...config.module, rules },
  };
};
