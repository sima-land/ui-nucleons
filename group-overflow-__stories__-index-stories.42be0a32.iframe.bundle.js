/*! For license information please see group-overflow-__stories__-index-stories.42be0a32.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3427],{"./src/group-overflow/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Limitation:()=>Limitation,Primary:()=>Primary,TestCountChange:()=>TestCountChange,WithoutTail:()=>WithoutTail,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts");function useItemsHide(ref,getParent){const[state,setState]=(0,react.useState)("initial"),[start,setStart]=(0,react.useState)(-1),calculateHideStart=(0,react.useCallback)((nextState=>{ref.current&&(setStart(function defineHideStart(element){const limit=Math.floor(element.getBoundingClientRect().right);for(const[index,item]of[...element.children].entries())if(index>0&&Math.floor(item.getBoundingClientRect().right)>limit)return index;return element.children.length}(ref.current)),setState(nextState))}),[ref]);(0,hooks.LI)((()=>{if(!ref.current)return;const parent=getParent(ref.current);if(!parent)return;const observer=new ResizeObserver((()=>setState("initial")));return observer.observe(parent),()=>observer.disconnect()}),[ref]);const lastStateRef=(0,react.useRef)(null);return(0,hooks.LI)((()=>{state===lastStateRef.current?(setStart(-1),setState("initial")):lastStateRef.current=state})),(0,hooks.LI)((()=>{switch(state){case"initial":calculateHideStart("hidden");break;case"hidden":calculateHideStart("hidden+more")}}),[state]),{state,start}}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),group_overflow_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/group-overflow/group-overflow.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(group_overflow_module.Z,options);const group_overflow_group_overflow_module=group_overflow_module.Z&&group_overflow_module.Z.locals?group_overflow_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function GroupOverflow({children,className,style,gap,tail,...restProps}){const ref=(0,react.useRef)(null),{state,start}=useItemsHide(ref,(el=>el.parentElement?.parentElement)),total=react.Children.count(children);return(0,jsx_runtime.jsxs)("div",{className:classnames_default()(group_overflow_group_overflow_module.root,className),style:"number"==typeof gap?{...style,"--group-overflow-gap":`${gap}px`}:style,...restProps,children:[(0,jsx_runtime.jsx)("div",{ref,className:group_overflow_group_overflow_module.items,children:"initial"===state?react.Children.toArray(children):react.Children.toArray(children).slice(0,start)}),"initial"!==state&&start<total&&tail&&(0,jsx_runtime.jsx)("div",{className:group_overflow_group_overflow_module.more,children:tail({hiddenCount:total-start})})]})}GroupOverflow.displayName="GroupOverflow";try{GroupOverflow.displayName="GroupOverflow",GroupOverflow.__docgenInfo={description:"Группа со скрытием не влезающих элементов.",displayName:"GroupOverflow",props:{gap:{defaultValue:null,description:"Расстояние между элементами в пикселях.",name:"gap",required:!1,type:{name:"number | undefined"}},tail:{defaultValue:null,description:'Вернёт "замыкающий" элемент, который будет выведен по аналогии с многоточием для текста.',name:"tail",required:!1,type:{name:"RenderTail | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/group-overflow/index.tsx#GroupOverflow"]={docgenInfo:GroupOverflow.__docgenInfo,name:"GroupOverflow",path:"src/group-overflow/index.tsx#GroupOverflow"})}catch(__react_docgen_typescript_loader_error){}var layout=__webpack_require__("./src/layout/index.ts"),chips=__webpack_require__("./src/chips/index.ts"),on=__webpack_require__("./src/helpers/on.ts");const index_stories={title:"service/GroupOverflow",component:GroupOverflow,parameters:{storySource:{source:"import { GroupOverflow, RenderTail } from '@sima-land/ui-nucleons/group-overflow';\nimport { useEffect, useState } from 'react';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Chips } from '@sima-land/ui-nucleons/chips';\nimport { on } from '@sima-land/ui-nucleons/helpers/on';\nexport default {\n  title: 'service/GroupOverflow',\n  component: GroupOverflow,\n  parameters: {\n    layout: 'fullscreen'\n  }\n};\nexport function Primary() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n    </Layout>;\n}\nPrimary.storyName = 'Простой пример';\nexport function Limitation() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  const max = 5;\n  const tail: RenderTail = data =>\n  // вычитаем еще 1 так как вывели второй замыкающий элемент\n  <Chips.Item checked>+{data.hiddenCount + (items.length - max - 1)}</Chips.Item>;\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n\n      <GroupOverflow tail={tail}>\n        {items.slice(0, max).map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n\n        <Chips.Item checked>+{items.length - max}</Chips.Item>\n      </GroupOverflow>\n    </Layout>;\n}\nLimitation.storyName = 'Ограниченное кол-во';\nexport function WithoutTail() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n    </Layout>;\n}\nWithoutTail.storyName = 'Без замыкающего элемента';\nexport function TestCountChange() {\n  const [count, setCount] = useState(24);\n  const items: string[] = [...Array(count).keys()].map(index => `Элемент №${index + 1}`);\n  useEffect(() => {\n    const off = on<KeyboardEvent>(window, 'keydown', event => {\n      switch (event.code) {\n        case 'ArrowUp':\n          setCount(n => n + 1);\n          break;\n        case 'ArrowDown':\n          setCount(n => Math.max(0, n - 1));\n          break;\n      }\n    });\n    return off;\n  }, []);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n      <p>Используйте стрелки на клавиатуре чтобы изменить кол-во элементов</p>\n    </Layout>;\n}\nTestCountChange.storyName = 'Тест: изменение кол-ва элементов';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const items: string[] = [...Array(24).keys()].map(index => `\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u2116${index + 1}`);\\n  return <Layout>\\n      <h3>\\u0412\\u0441\\u0435\\u0433\\u043E \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432: {items.length}</h3>\\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\\n      </GroupOverflow>\\n    </Layout>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nLimitation.parameters = {\n  ...Limitation.parameters,\n  docs: {\n    ...Limitation.parameters?.docs,\n    source: {\n      originalSource: \"function Limitation() {\\n  const items: string[] = [...Array(24).keys()].map(index => `\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u2116${index + 1}`);\\n  const max = 5;\\n  const tail: RenderTail = data =>\\n  // \\u0432\\u044B\\u0447\\u0438\\u0442\\u0430\\u0435\\u043C \\u0435\\u0449\\u0435 1 \\u0442\\u0430\\u043A \\u043A\\u0430\\u043A \\u0432\\u044B\\u0432\\u0435\\u043B\\u0438 \\u0432\\u0442\\u043E\\u0440\\u043E\\u0439 \\u0437\\u0430\\u043C\\u044B\\u043A\\u0430\\u044E\\u0449\\u0438\\u0439 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\n  <Chips.Item checked>+{data.hiddenCount + (items.length - max - 1)}</Chips.Item>;\\n  return <Layout>\\n      <h3>\\u0412\\u0441\\u0435\\u0433\\u043E \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432: {items.length}</h3>\\n\\n      <GroupOverflow tail={tail}>\\n        {items.slice(0, max).map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\\n\\n        <Chips.Item checked>+{items.length - max}</Chips.Item>\\n      </GroupOverflow>\\n    </Layout>;\\n}\",\n      ...Limitation.parameters?.docs?.source\n    }\n  }\n};\nWithoutTail.parameters = {\n  ...WithoutTail.parameters,\n  docs: {\n    ...WithoutTail.parameters?.docs,\n    source: {\n      originalSource: \"function WithoutTail() {\\n  const items: string[] = [...Array(24).keys()].map(index => `\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u2116${index + 1}`);\\n  return <Layout>\\n      <h3>\\u0412\\u0441\\u0435\\u0433\\u043E \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432: {items.length}</h3>\\n      <GroupOverflow>\\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\\n      </GroupOverflow>\\n    </Layout>;\\n}\",\n      ...WithoutTail.parameters?.docs?.source\n    }\n  }\n};\nTestCountChange.parameters = {\n  ...TestCountChange.parameters,\n  docs: {\n    ...TestCountChange.parameters?.docs,\n    source: {\n      originalSource: \"function TestCountChange() {\\n  const [count, setCount] = useState(24);\\n  const items: string[] = [...Array(count).keys()].map(index => `\\u042D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u2116${index + 1}`);\\n  useEffect(() => {\\n    const off = on<KeyboardEvent>(window, 'keydown', event => {\\n      switch (event.code) {\\n        case 'ArrowUp':\\n          setCount(n => n + 1);\\n          break;\\n        case 'ArrowDown':\\n          setCount(n => Math.max(0, n - 1));\\n          break;\\n      }\\n    });\\n    return off;\\n  }, []);\\n  return <Layout>\\n      <h3>\\u0412\\u0441\\u0435\\u0433\\u043E \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432: {items.length}</h3>\\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\\n      </GroupOverflow>\\n      <p>\\u0418\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u0443\\u0439\\u0442\\u0435 \\u0441\\u0442\\u0440\\u0435\\u043B\\u043A\\u0438 \\u043D\\u0430 \\u043A\\u043B\\u0430\\u0432\\u0438\\u0430\\u0442\\u0443\\u0440\\u0435 \\u0447\\u0442\\u043E\\u0431\\u044B \\u0438\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u043A\\u043E\\u043B-\\u0432\\u043E \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442\\u043E\\u0432</p>\\n    </Layout>;\\n}\",\n      ...TestCountChange.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:13},endLoc:{col:1,line:21},startBody:{col:7,line:13},endBody:{col:1,line:21}},limitation:{startLoc:{col:7,line:23},endLoc:{col:1,line:38},startBody:{col:7,line:23},endBody:{col:1,line:38}},"without-tail":{startLoc:{col:7,line:40},endLoc:{col:1,line:48},startBody:{col:7,line:40},endBody:{col:1,line:48}},"test-count-change":{startLoc:{col:7,line:50},endLoc:{col:1,line:73},startBody:{col:7,line:50},endBody:{col:1,line:73}}}},layout:"fullscreen"}},Primary=function Primary(){const items=[...Array(24).keys()].map((index=>`Элемент №${index+1}`));return(0,jsx_runtime.jsxs)(layout.Ar,{children:[(0,jsx_runtime.jsxs)("h3",{children:["Всего элементов: ",items.length]}),(0,jsx_runtime.jsx)(GroupOverflow,{tail:data=>(0,jsx_runtime.jsxs)(chips.cL.Item,{checked:!0,children:["+",data.hiddenCount]}),children:items.map(((item,index)=>(0,jsx_runtime.jsx)(chips.cL.Item,{children:item},index)))})]})};Primary.displayName="Primary",Primary.storyName="Простой пример";const Limitation=function Limitation(){const items=[...Array(24).keys()].map((index=>`Элемент №${index+1}`));return(0,jsx_runtime.jsxs)(layout.Ar,{children:[(0,jsx_runtime.jsxs)("h3",{children:["Всего элементов: ",items.length]}),(0,jsx_runtime.jsxs)(GroupOverflow,{tail:data=>(0,jsx_runtime.jsxs)(chips.cL.Item,{checked:!0,children:["+",data.hiddenCount+(items.length-5-1)]}),children:[items.slice(0,5).map(((item,index)=>(0,jsx_runtime.jsx)(chips.cL.Item,{children:item},index))),(0,jsx_runtime.jsxs)(chips.cL.Item,{checked:!0,children:["+",items.length-5]})]})]})};Limitation.displayName="Limitation",Limitation.storyName="Ограниченное кол-во";const WithoutTail=function WithoutTail(){const items=[...Array(24).keys()].map((index=>`Элемент №${index+1}`));return(0,jsx_runtime.jsxs)(layout.Ar,{children:[(0,jsx_runtime.jsxs)("h3",{children:["Всего элементов: ",items.length]}),(0,jsx_runtime.jsx)(GroupOverflow,{children:items.map(((item,index)=>(0,jsx_runtime.jsx)(chips.cL.Item,{children:item},index)))})]})};WithoutTail.displayName="WithoutTail",WithoutTail.storyName="Без замыкающего элемента";const TestCountChange=function TestCountChange(){const[count,setCount]=(0,react.useState)(24),items=[...Array(count).keys()].map((index=>`Элемент №${index+1}`));return(0,react.useEffect)((()=>(0,on.on)(window,"keydown",(event=>{switch(event.code){case"ArrowUp":setCount((n=>n+1));break;case"ArrowDown":setCount((n=>Math.max(0,n-1)))}}))),[]),(0,jsx_runtime.jsxs)(layout.Ar,{children:[(0,jsx_runtime.jsxs)("h3",{children:["Всего элементов: ",items.length]}),(0,jsx_runtime.jsx)(GroupOverflow,{tail:data=>(0,jsx_runtime.jsxs)(chips.cL.Item,{checked:!0,children:["+",data.hiddenCount]}),children:items.map(((item,index)=>(0,jsx_runtime.jsx)(chips.cL.Item,{children:item},index)))}),(0,jsx_runtime.jsx)("p",{children:"Используйте стрелки на клавиатуре чтобы изменить кол-во элементов"})]})};TestCountChange.displayName="TestCountChange",TestCountChange.storyName="Тест: изменение кол-ва элементов",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n    </Layout>;\n}",...Primary.parameters?.docs?.source}}},Limitation.parameters={...Limitation.parameters,docs:{...Limitation.parameters?.docs,source:{originalSource:"function Limitation() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  const max = 5;\n  const tail: RenderTail = data =>\n  // вычитаем еще 1 так как вывели второй замыкающий элемент\n  <Chips.Item checked>+{data.hiddenCount + (items.length - max - 1)}</Chips.Item>;\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n\n      <GroupOverflow tail={tail}>\n        {items.slice(0, max).map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n\n        <Chips.Item checked>+{items.length - max}</Chips.Item>\n      </GroupOverflow>\n    </Layout>;\n}",...Limitation.parameters?.docs?.source}}},WithoutTail.parameters={...WithoutTail.parameters,docs:{...WithoutTail.parameters?.docs,source:{originalSource:"function WithoutTail() {\n  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n    </Layout>;\n}",...WithoutTail.parameters?.docs?.source}}},TestCountChange.parameters={...TestCountChange.parameters,docs:{...TestCountChange.parameters?.docs,source:{originalSource:"function TestCountChange() {\n  const [count, setCount] = useState(24);\n  const items: string[] = [...Array(count).keys()].map(index => `Элемент №${index + 1}`);\n  useEffect(() => {\n    const off = on<KeyboardEvent>(window, 'keydown', event => {\n      switch (event.code) {\n        case 'ArrowUp':\n          setCount(n => n + 1);\n          break;\n        case 'ArrowDown':\n          setCount(n => Math.max(0, n - 1));\n          break;\n      }\n    });\n    return off;\n  }, []);\n  return <Layout>\n      <h3>Всего элементов: {items.length}</h3>\n      <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>\n        {items.map((item, index) => <Chips.Item key={index}>{item}</Chips.Item>)}\n      </GroupOverflow>\n      <p>Используйте стрелки на клавиатуре чтобы изменить кол-во элементов</p>\n    </Layout>;\n}",...TestCountChange.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Limitation","WithoutTail","TestCountChange"]},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/identity.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIdentityRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/group-overflow/group-overflow.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".group-overflow-module__root__a12{display:inline-flex;max-width:100%}.group-overflow-module__items__b64{flex-shrink:1;overflow:hidden;display:flex;align-items:flex-start}.group-overflow-module__items__b64>*{flex-shrink:0;max-width:100%}.group-overflow-module__items__b64>*:not(:first-child){margin-left:var(--group-overflow-gap, 8px)}.group-overflow-module__more__a50{margin-left:var(--group-overflow-gap, 8px);flex-grow:0;flex-shrink:0}","",{version:3,sources:["webpack://./src/group-overflow/group-overflow.module.scss"],names:[],mappings:"AAAA,kCACE,mBAAA,CACA,cAAA,CAGF,mCACE,aAAA,CACA,eAAA,CACA,YAAA,CACA,sBAAA,CACA,qCACE,aAAA,CACA,cAAA,CAEF,uDACE,0CAAA,CAIJ,kCACE,0CAAA,CACA,WAAA,CACA,aAAA",sourcesContent:[".root {\n  display: inline-flex;\n  max-width: 100%;\n}\n\n.items {\n  flex-shrink: 1;\n  overflow: hidden;\n  display: flex;\n  align-items: flex-start;\n  > * {\n    flex-shrink: 0;\n    max-width: 100%;\n  }\n  > *:not(:first-child) {\n    margin-left: var(--group-overflow-gap, 8px);\n  }\n}\n\n.more {\n  margin-left: var(--group-overflow-gap, 8px);\n  flex-grow: 0;\n  flex-shrink: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"group-overflow-module__root__a12",items:"group-overflow-module__items__b64",more:"group-overflow-module__more__a50"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);