# Библиотека компонентов

В этом проекте собраны react-компоненты, реализующие правила дизайн-системы, а также компоненты и вспомогательные функции (в том числе react-хуки) которые помогают решать распространенные задачи разработки UI.

## Использование

### Установка

```sh
# npm
npm i -S @sima-land/ui-nucleons

# или yarn
yarn add @sima-land/ui-nucleons
```

### Настройка среды

Компоненты библиотеки используют:

- импорты изображений (jpg, png..) как url/src
- импорты стилей
- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.module.scss`)
- импорты svg-файлов как react-компоненты

#### Для работы с Webpack необходимо (как вариант):

- добавить необходимые пакеты `@svgr/*`
- сконфигурировать обработку svg, css, scss файлов

##### Зависимости

```sh
npm install --save-dev @svgr/core @svgr/plugin-jsx @svgr/plugin-svgo @svgr/webpack
```

##### Конфигурация

```js
// webpack.config.js
const svgrOptions = require('../../svgr.config'); // опции SVGR (скопировать из данного проекта)

module.exports = {
  module: {
    rules: [
      // svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: svgrOptions,
          },
        ],
      },

      // стилей
      {
        test: /\.(css|scss)$/,
        use: [
          // ...здесь style-loader, mini-css-extract-plugin или что-то другое
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: /\.module\.(css|scss)$/,
                localIdentName: '[name]__[local]--[hash:hex:3]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
```

#### Для работы с Jest необходимо (как вариант):

- добавить необходимые пакеты `@svgr/*`
- сконфигурировать обработку svg, css, scss файлов

##### Добавить обработку SVG

- добавить файл "трансформера" вида:

```js
const babel = require('@babel/core');
const babelConfig = require('../../babel.config');
const svgr = require('@svgr/core');
const svgrConfig = require('../../svgr.config');

module.exports = {
  process(sourceText, sourcePath) {
    const code = svgr.transform.sync(sourceText, svgrConfig, { filePath: sourcePath });

    return babel.transformSync(code, { filename: sourcePath, ...babelConfig });
  },
};
```

- задействовать его в конфигурации Jest

##### Добавить поддержку стилей

В конфигурации Jest:

```js
module.exports = {
  transform: {
    // svg как react-компоненты
    '\\.svg$': '<rootDir>/.jest/transforms/svg.js',

    // обычный css
    '(?<!(\\.module))\\.(css|scss)$': './transformer/empty.js',

    // css-модули
    '\\.module\\.(css|scss)$': 'jest-css-modules-transform',
  },
  transformIgnorePatterns: [
    // в пакете содержится css-модули, поэтому игнорируем только скрипты
    '/node_modules/.+js$',
  ],
  // ...
};
```

#### Декларации типов для TypeScript

в `src/custom.d.ts` необходимо указать:

```ts
// css-модули
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// css-модули с синтаксисом SCSS
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// svg как React-компоненты
declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
}
```

## Разработка и поддержка

### Принципы библиотеки

- в библиотеке не должно быть HOC (компонентов высшего порядка - функций, возвращающих компонент)
- компонент интерфейса не должен иметь внешних отступов по умолчанию

### Структура библиотеки

`src/` - директория со всеми компонентами библиотеки

- `something/` - директория с компонентом
  - `__stories__/`
    - `index.stories.tsx` - описание компонента для storybook
  - `__test__/`
    - `index.test.tsx` - unit-тесты
  - `index.tsx` - файл, с именованными экспортами компонента и интерфейса
- `helpers/` - общие вспомогательные функции (для использования вне библиотеки)
- `hooks/` - общие react-хуки (для использования вне библиотеки)
- `_internal/` - внутренние скрипты для использования только в рамках данной библиотеки
