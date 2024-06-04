"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6340],{"./src/range/__stories__/02-with-update-props.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithUpdateProps:()=>WithUpdateProps,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_range__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/range/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Range",component:_sima_land_ui_nucleons_range__WEBPACK_IMPORTED_MODULE_0__.e,parameters:{storySource:{source:"import { Range } from '@sima-land/ui-nucleons/range';\nimport { useState } from 'react';\n\nexport default {\n  title: 'common/Range',\n  component: Range,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function WithUpdateProps() {\n  const [min, setMin] = useState(10);\n  const [max, setMax] = useState(20);\n  const [currentStart, setStart] = useState(18);\n  const [currentFinish, setFinish] = useState(12);\n\n  return (\n    <>\n      <label>min</label>{' '}\n      <input type='number' value={min} onChange={({ target }) => setMin(Number(target.value))} />{' '}\n      <label>max</label>{' '}\n      <input type='number' value={max} onChange={({ target }) => setMax(Number(target.value))} />{' '}\n      <label>start</label>{' '}\n      <input\n        type='number'\n        value={currentStart}\n        onChange={({ target }) => setStart(Number(target.value))}\n      />{' '}\n      <label>finish</label>{' '}\n      <input\n        type='number'\n        value={currentFinish}\n        onChange={({ target }) => setFinish(Number(target.value))}\n      />\n      <Range\n        min={min}\n        max={max}\n        step={1}\n        startValue={currentStart}\n        finishValue={currentFinish}\n        onChange={({ startValue, finishValue }) => {\n          setStart(startValue);\n          setFinish(finishValue);\n        }}\n      />\n      <br />\n      <input\n        type='range'\n        min={min}\n        max={max}\n        step={1}\n        value={currentStart}\n        onChange={({ target }) => setStart(Number(target.value))}\n      />\n    </>\n  );\n}\n\nWithUpdateProps.storyName = 'Тест: Обновление передаваемых свойств';\n",locationsMap:{"with-update-props":{startLoc:{col:7,line:12},endLoc:{col:1,line:58},startBody:{col:7,line:12},endBody:{col:1,line:58}}}},layout:"padded"}},WithUpdateProps=function WithUpdateProps(){const[min,setMin]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(10),[max,setMax]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(20),[currentStart,setStart]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(18),[currentFinish,setFinish]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(12);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:"min"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",value:min,onChange:({target})=>setMin(Number(target.value))})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:"max"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",value:max,onChange:({target})=>setMax(Number(target.value))})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:"start"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",value:currentStart,onChange:({target})=>setStart(Number(target.value))})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("label",{children:"finish"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"number",value:currentFinish,onChange:({target})=>setFinish(Number(target.value))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_ui_nucleons_range__WEBPACK_IMPORTED_MODULE_0__.e,{min,max,step:1,startValue:currentStart,finishValue:currentFinish,onChange:({startValue,finishValue})=>{setStart(startValue),setFinish(finishValue)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input",{type:"range",min,max,step:1,value:currentStart,onChange:({target})=>setStart(Number(target.value))})]})};WithUpdateProps.storyName="Тест: Обновление передаваемых свойств",WithUpdateProps.parameters={...WithUpdateProps.parameters,docs:{...WithUpdateProps.parameters?.docs,source:{originalSource:"function WithUpdateProps() {\n  const [min, setMin] = useState(10);\n  const [max, setMax] = useState(20);\n  const [currentStart, setStart] = useState(18);\n  const [currentFinish, setFinish] = useState(12);\n  return <>\n      <label>min</label>{' '}\n      <input type='number' value={min} onChange={({\n      target\n    }) => setMin(Number(target.value))} />{' '}\n      <label>max</label>{' '}\n      <input type='number' value={max} onChange={({\n      target\n    }) => setMax(Number(target.value))} />{' '}\n      <label>start</label>{' '}\n      <input type='number' value={currentStart} onChange={({\n      target\n    }) => setStart(Number(target.value))} />{' '}\n      <label>finish</label>{' '}\n      <input type='number' value={currentFinish} onChange={({\n      target\n    }) => setFinish(Number(target.value))} />\n      <Range min={min} max={max} step={1} startValue={currentStart} finishValue={currentFinish} onChange={({\n      startValue,\n      finishValue\n    }) => {\n      setStart(startValue);\n      setFinish(finishValue);\n    }} />\n      <br />\n      <input type='range' min={min} max={max} step={1} value={currentStart} onChange={({\n      target\n    }) => setStart(Number(target.value))} />\n    </>;\n}",...WithUpdateProps.parameters?.docs?.source}}};const __namedExportsOrder=["WithUpdateProps"]}}]);