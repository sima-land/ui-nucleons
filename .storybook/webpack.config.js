/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
const path = require('node:path');

module.exports = ({ config }) => ({
  ...config,
  resolve: {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      '@sima-land/ui-nucleons': path.resolve(__dirname, '..', 'src/'),
    },
  },
  module: {
    ...config.module,
    rules: [
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
    ],
  },
});
