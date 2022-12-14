# Библиотека компонентов

В этом проекте собраны react-компоненты, реализующие правила дизайн-системы, а также компоненты и вспомогательные функции (в том числе react-хуки) которые помогают решать распространенные задачи разработки UI.

## Использование

Установка

```bash
# npm
npm i -S @sima-land/ui-nucleons

# или yarn
yarn add @sima-land/ui-nucleons
```

### Настройка сборки и запуска тестов

Компоненты библиотеки используют:

- импорты стилей
- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.module.scss`)
- импорты svg-файлов как react-компоненты

#### Для работы с Webpack необходимо (как вариант):

- добавить необходимые пакеты `@svgr/*`
- сконфигурировать обработку svg, css, scss файлов

##### Добавление пакетов `@svgr/*`:

```bash
npm install --save-dev @svgr/core @svgr/plugin-svgo @svgr/webpack
```

##### Конфигурация webpack

```js
// webpack.config.js
const svgrOptions = require('../../svgr.config'); // опции SVGR (скопировать из данного проекта)

module.exports = {
  module: {
    rules: [
      // обработка svg
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: svgrOptions,
          },
        ],
      },

      // обработка обычных стилей
      {
        test: /\.(css|scss)$/,
        exclude: /\.module\.(css|scss)$/,
        use: ['css-loader', 'sass-loader'],
      },

      // обработка css-модулей
      {
        test: /\.module\.(css|scss)$/,
        use: [
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]__[hash:hex:3]',
                localIdentHashPrefix: 'some-service',
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

##### Добавить обработку SVG

- добавить файл "трансформера" вида:

```js
const swc = require('@swc/core');
const svgr = require('@svgr/core');
const svgrConfig = require('../../svgr.config');

module.exports = {
  process(sourceText, sourcePath) {
    const code = svgr.transform.sync(sourceText, svgrConfig, { filePath: sourcePath });
    const result = swc.transformSync(code);

    return result;
  },
};
```

- задействовать его в конфигурации Jest

##### Добавить поддержку стилей

В конфигурации Jest:

```js
module.exports = {
  transform: {
    // svg заменяем на React-компоненты
    '\\.svg$': '<rootDir>/jest/transforms/svg.js',

    // генерируем css-модули
    '\\.module\\.(css|scss)$': 'jest-css-modules-transform',

    // ...
  },
  moduleNameMapper: {
    // обычные стили делаем просто пустыми модулями
    '(?<!(.+\\.module))(\\.css|\\.scss)$': '<rootDir>/jest/mocks/style.js',
  },

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

### Тестирование

Локально E2E-тесты должны запускаться через docker, пример:

```bash
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.28.0-focal /bin/bash
npm install
npx playwright test
```

В противном случае скриншотные тесты не будут совпадать из-за разницы окружения запуска.
