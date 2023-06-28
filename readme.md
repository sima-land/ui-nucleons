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

- импорты изображений (jpg, png...) как url/base64
- импорты стилей
- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.module.scss`)

#### Для работы с Webpack необходимо (как вариант):

- сконфигурировать обработку импортов css, scss файлов

##### Конфигурация

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
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

- сконфигурировать обработку css, scss файлов

##### Добавить поддержку стилей

В конфигурации Jest:

```js
module.exports = {
  transform: {
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
