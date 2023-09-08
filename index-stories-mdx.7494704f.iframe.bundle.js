"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4923],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{NF:()=>withMDXComponents,Zo:()=>MDXProvider,ah:()=>useMDXComponents,pC:()=>MDXContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./.storybook/index.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__page:()=>__page,default:()=>index_stories});__webpack_require__("./node_modules/react/index.js");var lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");const README_namespaceObject="# UI-nucleons\n\nВ этом проекте собраны UI-компоненты, реализующие правила дизайн-системы, а также компоненты и утилиты, которые помогают решать распространенные задачи разработки UI.\n\n## Использование\n\n### Установка\n\n```sh\n# с помощью npm\nnpm i -S @sima-land/ui-nucleons\n\n# или с помощью yarn\nyarn add @sima-land/ui-nucleons\n```\n\n### Настройка среды\n\nВ библиотеке используются:\n\n- импорты изображений (jpg, png...) как url/base64\n- импорты стилей\n- импорты стилей как css-модулей (каждый такой файл промаркирован в виде `%filename%.module.scss`)\n\n#### Для работы с Webpack\n\nНеобходимо сконфигурировать сборку подобным образом:\n\n```js\n// webpack.config.js\nmodule.exports = {\n  module: {\n    rules: [\n      // стили\n      {\n        test: /\\.(css|scss)$/,\n        use: [\n          'style-loader',\n          {\n            loader: 'css-loader',\n            options: {\n              modules: {\n                auto: /\\.module\\.(css|scss)$/,\n                localIdentName: '[name]__[local]--[hash:hex:3]',\n              },\n            },\n          },\n          'sass-loader',\n        ],\n      },\n\n      // картинки\n      {\n        test: /\\.(apng|avif|gif|jpg|jpeg|png|webp)$/,\n        type: 'asset/resource',\n      },\n    ],\n  },\n};\n```\n\n#### Для работы с Jest\n\nНеобходимо сконфигурировать среду Jest подобно тому как это сделано в данном репозитории (`jest.config.ts`).\n\n#### Декларации типов для TypeScript\n\nв `src/custom.d.ts` необходимо указать:\n\n```ts\n// css-модули\ndeclare module '*.module.css' {\n  const classes: { [key: string]: string };\n  export default classes;\n}\n\n// css-модули с синтаксисом SCSS\ndeclare module '*.module.scss' {\n  const classes: { [key: string]: string };\n  export default classes;\n}\n```\n\n## Разработка и поддержка\n\n### Принципы библиотеки\n\n- в библиотеке не должно быть HOC (компонентов высшего порядка - функций, возвращающих компонент)\n- компонент интерфейса не должен иметь внешних отступов по умолчанию\n\n### Структура библиотеки\n\n`src/` - директория со всеми компонентами библиотеки\n\n- `something/` - директория с компонентом\n  - `__stories__/`\n    - `index.stories.tsx` - описание компонента для storybook\n  - `__test__/`\n    - `index.test.tsx` - unit-тесты\n  - `index.tsx` - файл, с именованными экспортами компонента и интерфейса\n- `helpers/` - общие вспомогательные функции (для использования вне библиотеки)\n- `hooks/` - общие react-хуки (для использования вне библиотеки)\n- `_internal/` - внутренние скрипты для использования только в рамках данной библиотеки\n";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.h_,{title:"Обзор",parameters:{previewTabs:{"storybook/docs/panel":{hidden:!0}}}}),"\n",(0,jsx_runtime.jsx)(dist.UG,{children:README_namespaceObject})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Обзор",parameters:{previewTabs:{"storybook/docs/panel":{hidden:!0}}},tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}};const index_stories=componentMeta}}]);