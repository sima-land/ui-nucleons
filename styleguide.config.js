const reactDoc = require('react-docgen');

module.exports = {
  title: 'UINucleons',
  components: 'src/components/**/*.jsx',
  ignore: [
    'src/components/carousel/draggable.jsx',
    'src/components/carousel/nav-button.jsx',
  ],
  resolver: reactDoc.resolver.findAllComponentDefinitions,
  propsParser: (filePath, source, resolver, handlers) =>
    reactDoc.parse(source, resolver, handlers),
  handlers: componentPath =>
    reactDoc.defaultHandlers.concat(
      (documentation, path) => {
        // Calculate a display name for components based upon the declared class name.
        if (
          path.value.type === 'ClassDeclaration'
          && path.value.id.type === 'Identifier'
        ) {
          documentation.set('displayName', path.value.id.name);

          // Calculate the key required to find the component in the module exports
          if (
            path.parentPath.value.type === 'ExportNamedDeclaration'
          ) {
            documentation.set('path', path.value.id.name);
          }
        }

        // The component is the default export
        if (
          path.parentPath.value.type === 'ExportDefaultDeclaration'
        ) {
          documentation.set('path', 'default');
        }
      },
      require('react-docgen-displayname-handler').createDisplayNameHandler(
        componentPath
      )
    ),
  serverPort: 8080,
  styleguideDir: require('path').resolve(__dirname, 'styleguide'),
  styles: {
    StyleGuide: {
      '@font-face': {
        fontFamily: 'Open Sans',
        src: 'url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i&display=swap&subset=cyrillic")',
      },
      '@global body': {
        fontFamily: '"Open Sans", sans-serif',
        fontSize: 14,
      },
      sidebar: {
        backgroundColor: '#fff',
      },
    },
    Playground: {
      preview: {
        backgroundColor: '#eee',
        borderColor: '#ddd',
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
          use: ['style-loader', {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]',
              },
            },
          }, 'sass-loader'],
        },
      ],
    },
  },
};
