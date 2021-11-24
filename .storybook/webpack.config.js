
const svgrOptions = require('../svgr.config');

const isSvgRule = rule => Array.isArray(rule.test)
  ? rule.test.some(item => item.test('.svg'))
  : rule.test.test('.svg');

module.exports = async ({ config }) => {
  const baseRules = config.module.rules.map(
    rule => isSvgRule(rule)
      ? {
        ...rule,

        // исключаем svg так как он будет обрабатываться другим загрузчиком (ниже)
        exclude: /\.svg$/
      }
      : rule
  );

  const rules = [
    ...baseRules,

    // scss
    {
      test: /\.scss$/,
      exclude: [
        /node_modules/,
        /\.module\.scss$/,
      ],
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ],
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

    {
      test: /\.(woff|woff2|eot|ttf)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          },
        }
      ],
    },
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

  return { ...config, module: { ...config.module, rules } };
};
