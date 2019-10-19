const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]__[local]',
          },
        },
      },
      'sass-loader',
    ],
    include: path.resolve(__dirname, '../'),
  });

  return config;
};
