const path = require('path');
const reactDoc = require('react-docgen');

module.exports = {
  title: 'UINucleons',
  pagePerSection: true,
  ignore: [
    'src/components/**/__stories__/**/*',
    'src/components/**/__test__/**/*',
    'src/components/link/deprecated/**/*',
  ],
  sections: [
    {
      name: 'Base',
      components: [
        'src/components/box/*.jsx',
        'src/components/button/*.jsx',
        'src/components/icon/*.jsx',
        'src/components/link/*.jsx',
        'src/components/no-index/*.jsx',
        'src/components/no-index-mark/*.jsx',
        'src/components/text/*.jsx',
        'src/components/layer/*.js',
      ],
    },
    {
      name: 'Fields',
      components: [
        'src/components/amount/*.jsx',
        'src/components/attach/*.jsx',
        'src/components/checkbox/*.jsx',
        'src/components/fields/*.jsx',
        'src/components/input/*.jsx',
        'src/components/textarea/*.jsx',
        'src/components/text-field/index.jsx',
        'src/components/switch/index.jsx',
      ],
    },
    {
      name: 'Grid',
      components: ['src/components/grid/**/*.jsx'],
    },
    {
      name: 'Modifiers',
      sections: [
        {
          name: 'asList',
          components: ['src/components/modifiers-list/**/*.jsx'],
        },
        {
          name: 'asButtons',
          components: ['src/components/modifiers/**/*.jsx'],
        },
      ],
      sectionDepth: 1,
    },
    {
      name: 'Popups',
      components: ['src/components/popups/**/*.jsx'],
    },
    {
      name: 'Other',
      components: ['src/components/**/*.jsx'],
      ignore: [
        /* Компоненты в базовой секции */
        'src/components/box/*.jsx',
        'src/components/button/*.jsx',
        'src/components/icon/*.jsx',
        'src/components/link/*.jsx',
        'src/components/no-index/*.jsx',
        'src/components/no-index-mark/*.jsx',
        'src/components/text/*.jsx',

        /* Компоненты в секции полей */
        'src/components/amount/*.jsx',
        'src/components/attach/*.jsx',
        'src/components/checkbox/*.jsx',
        'src/components/fields/*.jsx',
        'src/components/input/*.jsx',
        'src/components/textarea/*.jsx',

        /* Другие, уже выведенные секции */
        'src/components/modifiers-list/**/*.jsx',
        'src/components/modifiers/**/*.jsx',
        'src/components/popups/**/*.jsx',
        'src/components/grid/**/*.jsx',

        /* Ненужные для отображения компоненты */
        'src/components/pagination/base-pagination.jsx',
        'src/components/pagination/page-button.jsx',
        'src/components/pagination/page-select-form.jsx',
        'src/components/carousel/draggable.jsx',
        'src/components/carousel/nav-button.jsx',
        'src/components/text-field/*',
        'src/components/switch/*',
      ],
    },
  ],
  resolver: reactDoc.resolver.findAllComponentDefinitions,
  propsParser: (filePath, source, resolver, handlers) => reactDoc.parse(source, resolver, handlers),
  handlers: componentPath =>
    reactDoc.defaultHandlers.concat(
      (documentation, pathData) => {
        // Calculate a display name for components based upon the declared class name.
        if (
          pathData.value.type === 'ClassDeclaration'
          && pathData.value.id.type === 'Identifier'
        ) {
          documentation.set('displayName', pathData.value.id.name);

          // Calculate the key required to find the component in the module exports
          if (
            pathData.parentPath.value.type === 'ExportNamedDeclaration'
          ) {
            documentation.set('path', pathData.value.id.name);
          }
        }

        // The component is the default export
        if (
          pathData.parentPath.value.type === 'ExportDefaultDeclaration'
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
  require: [
    path.join(__dirname, 'static/assets/fonts/fonts.css'),
  ],
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: '"SF Pro Text"',
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
          test: /\.(css|scss)$/,
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
        },
        {
          test: /\.(png|jpg|jpeg|gif|woff|woff2|eot|ttf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
};
