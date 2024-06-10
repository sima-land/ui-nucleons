# UI-nucleons

Библиотека UI-компонентов, реализующих правила дизайн-системы Сима-ленд, а также компонентов и утилит, которые помогают решать распространенные задачи разработки UI.

## Использование

### Установка

```bash
# с помощью npm
npm i -S @sima-land/ui-nucleons

# или с помощью yarn
yarn add @sima-land/ui-nucleons
```

### Настройка среды

В библиотеке используются:

- импорты изображений (jpg, png...) как url/base64
- импорты стилей
- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.m.scss`)

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
                auto: /\.(module|m)\.(css|scss)$/,
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

Необходимо сконфигурировать среду Jest подобно тому как это сделано в данном репозитории:

```js
export default {
  // ...прочее

  transform: {
    // css-модули
    '\\.(module|m)\\.(css|scss)$': 'jest-css-modules-transform',

    // обычные стили
    '(?<!(.+\\.(module|m)))(\\.css|\\.scss)$': '<rootDir>/.jest/transforms/empty.js',

    // asset'ы
    '\\.(apng|avif|gif|jpg|jpeg|png|webp)$': '<rootDir>/.jest/transforms/asset.js',
  },
  transformIgnorePatterns: [
    // из некоторых пакетов мы берем стили так что игнорируем только скрипты
    '/node_modules/.+js$',
  ],
};
```
