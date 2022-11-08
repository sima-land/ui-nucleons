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
        use: ['css-loader', 'postcss-loader'],
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
          'postcss-loader',
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
const babel = require('@babel/core');
const babelJestPreset = require('babel-preset-jest');
const svgr = require('@svgr/core').default;
const svgrOptions = require('../../svgr.config'); // опции SVGR

module.exports = {
  process: (src, filename) => {
    const code = svgr.sync(src, svgrOptions, { filePath: filename });

    return babel.transformSync(code, {
      filename,
      presets: [babelJestPreset],
    }).code;
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

- в библиотеке не должно быть HOC (компонентов высшего порядка - функций возвращающих компонент)
- компонент интерфейса не должен иметь внешних отступов по умолчанию

### Консольные команды, необходимые в процессе разработки

- `npm run build` - сборка компонентов в `./build` для публикации
- `npm run test` - запуск тестов _Jest_
- `npm run lint:scripts` - запуск линтера _ESLint_
- `npm run lint:styles` - запуск линтера _styleLint_
- `npm run type-check` - Проверка типов TS
- `npm run storybook` - запуск _storybook_

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

## Работа компонентов, использующих информацию о viewport

Компоненты вроде `Screen` и `Alert` используют следующие css-переменные:

- `--vh`: используется как сотая доля высоты экрана (аналог `1vh`), может учитывать визуальный viewport
- `--offsetTop`: используется как позиция верхней границы визуального viewport'а

При использовании таких компонентов в проектах, для корректной работы на мобильных устройствах (например при показе/скрытии виртуальных клавиатур и других изменениях viewport), необходимо предоставить эти переменные (например установив их на `<body />`)

При работе над подобными компонентами необходимо учитывать отсутствие этих переменных и не забывать устанавливать запасное значение при использовании `var()`

Установка не выполняется компонентами самостоятельно в целях производительности.
