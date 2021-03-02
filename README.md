# Библиотека компонентов

[![pipeline status](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/badges/master/pipeline.svg)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/pipelines)
[![coverage report](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/badges/master/coverage.svg?job=test)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/commits/master)
[![release version](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/-/jobs/artifacts/master/raw/release-version.svg?job=badge_release)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/-/tags)

## Начало работы

### Консольные команды, необходимые в процессе разработки
* ```yarn build``` - сборка компонентов в `./build` для публикации
* ```yarn test``` - запуск тестов *Jest*
* ```yarn lint:scripts``` - запуск линтера *ESLint*
* ```yarn lint:styles``` - запуск линтера *styleLint*
* ```yarn type-check``` - Проверка типов TS
* ```yarn storybook``` - запуск *storybook*

### Структура библиотеки

`src/components/` - директория со всеми компонентами библиотеки

* `link/` - директория с компонентом
    * `__stories__/`
        * `index.stories.jsx` - описание компонента для storybook
    * `__test__/`
        * `index.test.jsx` - тесты на компонент
    * `index.jsx` - компонент

* `helpers/` - директория со вспомогательными функциями
    * На каждую функцию необходимо создавать отдельный файл

## Работа компонентов, использующих информацию о viewport

Компоненты вроде `Screen` и `Alert` используют следующие css-переменные:

- `--vh`: используется как сотая доля высоты экрана (аналог `1vh`), может учитывать визуальный viewport
- `--offsetTop`: используется как позиция верхней границы визуального viewport'а

При использовании таких компонентов в проектах, для корректной работы на мобильных устройствах (например при показе/скрытии виртуальных клавиатур и других изменениях viewport), необходимо предоставить эти переменные (например установив их на `<body />`)

При работе над подобными компонентами необходимо учитывать отсутствие этих переменных и не забывать устанавливать запасное значение при использовании `var()`

Установка не выполняется компонентами самостоятельно в целях производительности.
