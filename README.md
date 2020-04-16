# Библиотека компонентов

[![pipeline status](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/badges/master/pipeline.svg)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/pipelines)
[![coverage report](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/badges/master/coverage.svg?job=test)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/commits/master)
[![release version](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/-/jobs/artifacts/master/raw/release-version.svg?job=badge_release)](https://gitlab.sima-land.ru/dev-dep/dev/packages/ui-nucleons/-/tags)

## Начало работы
### Консольные команды, необходимые в процессе разработки
* ```yarn dev``` - установка пакетов и запуск storybook для разработки
* ```yarn build``` - сборка компонентов в build/components для публикации
* ```yarn test``` - запуск тестов *Jest*
* ```yarn lint``` - запуск линтера *ESLint*
* ```yarn stylelint``` - запуск линтера *StyleLint*
* ```yarn styleguide``` - запуск styleguide
* ```yarn styleguide:build``` - сборка компонентов в build/styleguide для публикации
* ```yarn storybook``` - запуск storybook

### Структура библиотеки

src/components/ - директория со всеми компонентами библиотеки

* link/ - директория с компонентом
    * `__stories__/`
        * link.stories.js - описание компонента для storybook
    * `__test__/`
        * index.test.js - тесты на компонент
    * index.jsx - компонент Link
    * readme.md - описание компонента для styleguide

* helpers/ - директория со вспомогательными функциями
    * На каждую функцию необходимо создавать отдельный файл

## Работа с макетами и гайдами

На данный момент гайды и макеты разрабатываются в Figma.

### Иконки

Для переноса иконки из Figma можно выбрать ее, затем найти в "Layers panel",
потом нажать ПКМ и в контекстном меню выбрать "Copy/Paste" -> "Copy as SVG".

**Важно: не забываем выделять иконку вместе с прямоугольником, определяющим ее безопасное расстояние.**

Перед сохранением иконки в файл в проекте, нужно изменить ее размер, сохранив пропорции.
Размер должен быть **36 x 36px**.

> Изменить размер также можно в Figma, создав собственный временный пустой файл и вставив скопированное из буфера.

Это необходимо для того, чтобы все иконки могли правильно изменять размер в компоненте `Icon`.
