"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6519],{"./src/group-overflow/__stories__/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_group_overflow__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/group-overflow/index.ts"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/layout/index.ts"),_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/chip/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"service/GroupOverflow",component:_sima_land_ui_nucleons_group_overflow__WEBPACK_IMPORTED_MODULE_0__.x,parameters:{storySource:{source:"import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Chip } from '@sima-land/ui-nucleons/chip';\n\nexport default {\n  title: 'service/GroupOverflow',\n  component: GroupOverflow,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nexport function Primary() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n\n  return (\n    <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chip checked>+{data.hiddenCount}</Chip>}>\n        {items.map((item, index) => (\n          <Chip key={index}>{item}</Chip>\n        ))}\n      </GroupOverflow>\n    </Layout>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:13},endLoc:{col:1,line:26},startBody:{col:7,line:13},endBody:{col:1,line:26}}}},layout:"fullscreen"}},Primary=function Primary(){const items=[...Array(24).keys()].map((index=>`Элемент №${index+1}`));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_1__.Ar,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h3",{children:["Всего элементов: ",items.length]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_group_overflow__WEBPACK_IMPORTED_MODULE_0__.x,{tail:data=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_2__.Af,{checked:!0,children:["+",data.hiddenCount]}),children:items.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_2__.Af,{children:item},index)))})]})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chip checked>+{data.hiddenCount}</Chip>}>\n        {items.map((item, index) => <Chip key={index}>{item}</Chip>)}\n      </GroupOverflow>\n    </Layout>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);