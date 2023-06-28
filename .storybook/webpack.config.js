/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */

module.exports = async ({ config }) => {
  const rules = [
    ...config.module.rules,

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
  ];

  return {
    ...config,
    entry: config.entry.filter(item => !item.includes('/webpack-hot-middleware/')),
    module: { ...config.module, rules },
  };
};
