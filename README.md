# UI-nucleons

В этом проекте собраны UI-компоненты, реализующие правила дизайн-системы, а также компоненты и утилиты, которые помогают решать распространенные задачи разработки UI.

## Использование

### Установка

```sh
# с помощью npm
npm i -S @sima-land/ui-nucleons

# или с помощью yarn
yarn add @sima-land/ui-nucleons
```

### Настройка среды

В библиотеке используются:

- импорты изображений (jpg, png...) как url/base64
- импорты стилей
- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.module.scss`)

#### Для работы с Webpack

Необходимо сконфигурировать сборку подобным образом:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      // стили
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
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

      // картинки
      {
        test: /\.(apng|avif|gif|jpg|jpeg|png|webp)$/,
        type: 'asset/resource',
      },
    ],
  },
};
```

#### Для работы с Jest

Необходимо сконфигурировать среду Jest подобно тому как это сделано в данном репозитории (`jest.config.ts`).

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
