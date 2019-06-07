module.exports = {
  title: 'UINuclions',
  components: 'src/components/**/*.jsx',
  propsParser: filePath => require('library-utils/react-doc')(filePath),
  serverPort: 8080,
  styleguideDir: require('path').resolve(__dirname, 'styleguide'),
  styles: {
    StyleGuide: {
      '@font-face': {
        fontFamily: 'Open Sans',
        src: 'url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i&display=swap&subset=cyrillic")',
      },
      '@global body': {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 14,
      },
      sidebar: {
        backgroundColor: '#c4c2de',
        borderColor: '#8084c5',
      },
    },
    Playground: {
      preview: {
        backgroundColor: '#c4c2de',
        borderColor: '#8084c5',
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  },
};
