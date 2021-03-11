
const svgrOptions = require('../svgr.config');

module.exports = async ({ config }) => {
  const baseRules = config.module.rules.map(
    rule => rule.test.test('.svg')
      ? {
        ...rule,

        // исключаем svg так как он будет обрабатываться другим загрузчиком (ниже)
        exclude: /\.svg$/
      }
      : rule
  );

  const rules = [
    ...baseRules,
    {
      test: /\.(css|scss)$/,
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
          query: {
            name: '[name].[ext]'
          }
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
      exclude: /node_modules\/(?!(@dev-dep)).*/,
    },
  ];

  return { ...config, module: { ...config.module, rules } };
};
