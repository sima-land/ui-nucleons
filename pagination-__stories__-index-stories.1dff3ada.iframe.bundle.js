/*! For license information please see pagination-__stories__-index-stories.1dff3ada.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3605],{"./src/pagination/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoArrows:()=>NoArrows,NoDisabledArrows:()=>NoDisabledArrows,Primary:()=>Primary,TestRanges:()=>TestRanges,WithLinks:()=>WithLinks,WithLinksForSemantic:()=>WithLinksForSemantic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js");function getPaginationItems({total,current},{arrows=!0}={}){const items=function getNumbersAround({current,range:rangeSize,total}){const pageNumbers=[],readyRange=Math.min(rangeSize,total)||0,halfRange=Math.floor(readyRange/2);let startIndex=current-halfRange-readyRange%2;startIndex<1?startIndex=0:startIndex+readyRange>total&&(startIndex=total-readyRange);for(let i=startIndex;i<startIndex+readyRange;i++)pageNumbers.push(i+1);return pageNumbers}({total,current,range:7}).map((value=>({type:"page",value}))),size=items.length;switch(total>7&&(1!==items[0].value&&items.splice(0,2,{type:"page",value:1},{type:"more",value:items[2].value-1}),items[size-1].value!==total&&items.splice(-2,2,{type:"more",value:items[size-2].value},{type:"page",value:total})),arrows){case!0:items.unshift({type:"prev",value:Math.max(1,current-1)}),items.push({type:"next",value:Math.min(total,current+1)});break;case"active":1!==current&&items.unshift({type:"prev",value:Math.max(1,current-1)}),current!==total&&items.push({type:"next",value:Math.min(total,current+1)})}return items}var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),pagination_item_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination/pagination-item.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(pagination_item_m.Z,options);const pagination_pagination_item_m=pagination_item_m.Z&&pagination_item_m.Z.locals?pagination_item_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(pagination_pagination_item_m);function PaginationItem({rootRef,checked,disabled,children,rounds,onClick,className,href,role=href?void 0:"button",...rest}){return(0,jsx_runtime.jsx)("a",{"aria-disabled":disabled||void 0,"aria-current":checked||void 0,...rest,ref:rootRef,href:disabled?void 0:href,role,className:cx("root",`rounds-${rounds}`,{checked,disabled},className),onClick:disabled?void 0:onClick,children})}try{PaginationItem.displayName="PaginationItem",PaginationItem.__docgenInfo={description:"Кнопка страницы.",displayName:"PaginationItem",props:{rounds:{defaultValue:null,description:"",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"all"'}]}},checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean | undefined"}},rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLAnchorElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pagination/pagination-item.tsx#PaginationItem"]={docgenInfo:PaginationItem.__docgenInfo,name:"PaginationItem",path:"src/pagination/pagination-item.tsx#PaginationItem"})}catch(__react_docgen_typescript_loader_error){}const ArrowExpandLeft=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"})))),ArrowExpandRight=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{fillRule:"evenodd",d:"M6.341 12.753a1 1 0 0 1-.094-1.412L9.171 8 6.247 4.659a1 1 0 0 1 1.506-1.317l3.5 4a1 1 0 0 1 0 1.317l-3.5 4a1 1 0 0 1-1.412.094Z",clipRule:"evenodd"}))));var pagination_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination/pagination.m.scss"),pagination_m_options={};pagination_m_options.styleTagTransform=styleTagTransform_default(),pagination_m_options.setAttributes=setAttributesWithoutAttributes_default(),pagination_m_options.insert=insertBySelector_default().bind(null,"head"),pagination_m_options.domAPI=styleDomAPI_default(),pagination_m_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(pagination_m.Z,pagination_m_options);const pagination_pagination_m=pagination_m.Z&&pagination_m.Z.locals?pagination_m.Z.locals:void 0,pagination_cx=bind_default().bind(pagination_pagination_m);function Pagination({rootRef,current:currentProp,total:totalProp,onPageChange,getItems=getPaginationItems,renderItem=renderPaginationItem,className,...restProps}){const{current,total}=(0,react.useMemo)((()=>function validatePaginationState({total,current}){return{total:Number.isFinite(total)?total:0,current:Number.isFinite(current)?current:0}}({current:currentProp,total:totalProp})),[currentProp,totalProp]),items=(0,react.useMemo)((()=>getItems({current,total})),[current,total,getItems]),onChangeRef=(0,react.useRef)(onPageChange);onChangeRef.current=onPageChange;const getItemProps=(0,react.useCallback)(((item,index,userProps={})=>{const onClick=event=>{item.value!==current&&onChangeRef.current?.(event,item),userProps.onClick?.(event)};if("page"===item.type){let rounds;return 0===index||"prev"===items[index-1].type?rounds=1===total?"all":"left":index!==items.length-1&&"next"!==items[index+1].type||(rounds="right"),{rounds,checked:item.value===current,"aria-label":`Перейти на страницу ${item.value}`,children:item.value,...userProps,onClick,className:pagination_cx("page",userProps.className,item.value>999&&"large")}}return"prev"===item.type?{rounds:"all",disabled:current<=1,"aria-label":"Предыдущая страница",children:(0,jsx_runtime.jsx)(ArrowExpandLeft,{fill:"currentColor"}),...userProps,onClick,className:pagination_cx("prev",userProps.className)}:"more"===item.type?{"aria-label":`Перейти на страницу ${item.value}`,children:"…",...userProps,onClick,className:pagination_cx("page",userProps.className)}:"next"===item.type?{rounds:"all",disabled:current>=total,"aria-label":"Следующая страница",children:(0,jsx_runtime.jsx)(ArrowExpandRight,{fill:"currentColor"}),...userProps,onClick,className:pagination_cx("next",userProps.className)}:{}}),[current,total,items]);return(0,jsx_runtime.jsx)("div",{ref:rootRef,className:pagination_cx("root",className),role:"navigation","aria-label":"Навигация по страницам",...restProps,children:items.map(((item,index)=>(0,jsx_runtime.jsx)(react.Fragment,{children:renderItem(item,(userProps=>getItemProps(item,index,userProps)))},index)))})}function renderPaginationItem(button,getProps){return(0,jsx_runtime.jsx)(PaginationItem,{...getProps()})}try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"Кнопки навигации по страницам.",displayName:"Pagination",props:{rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},current:{defaultValue:null,description:"",name:"current",required:!1,type:{name:"number | undefined"}},total:{defaultValue:null,description:"",name:"total",required:!1,type:{name:"number | undefined"}},onPageChange:{defaultValue:null,description:"",name:"onPageChange",required:!1,type:{name:"((event: MouseEvent<HTMLAnchorElement, MouseEvent>, button: PaginationButton) => void) | undefined"}},getItems:{defaultValue:null,description:"",name:"getItems",required:!1,type:{name:"((payload: { current: number; total: number; }) => PaginationButton[]) | undefined"}},renderItem:{defaultValue:null,description:"",name:"renderItem",required:!1,type:{name:"RenderPaginationItem | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pagination/pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/pagination/pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"common/Pagination",component:Pagination,parameters:{storySource:{source:"import { Pagination, PaginationItem, getPaginationItems } from '@sima-land/ui-nucleons/pagination';\nimport { useState } from 'react';\n\nexport default {\n  title: 'common/Pagination',\n  component: Pagination,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  const total = 18;\n  const [page, setPage] = useState(1);\n\n  return (\n    <>\n      <Pagination\n        total={total}\n        current={page}\n        onPageChange={(event, button) => setPage(button.value)}\n      />\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function NoArrows() {\n  const total = 27;\n  const [page, setPage] = useState(1);\n\n  return (\n    <>\n      <Pagination\n        total={total}\n        current={page}\n        onPageChange={(event, button) => setPage(button.value)}\n        getItems={payload => getPaginationItems(payload, { arrows: false })}\n      />\n    </>\n  );\n}\n\nNoArrows.storyName = 'Без стрелок';\n\nexport function NoDisabledArrows() {\n  const total = 36;\n  const [page, setPage] = useState(1);\n\n  return (\n    <>\n      <Pagination\n        total={total}\n        current={page}\n        onPageChange={(event, button) => setPage(button.value)}\n        getItems={payload => getPaginationItems(payload, { arrows: 'active' })}\n      />\n    </>\n  );\n}\n\nNoDisabledArrows.storyName = 'Без отключенных стрелок';\n\nexport function WithLinks() {\n  const total = 45;\n\n  return (\n    <>\n      <Pagination\n        total={total}\n        current={2}\n        renderItem={(item, getProps) => (\n          <PaginationItem {...getProps()} href={`http://my-site.ru?page=${item.value}`} />\n        )}\n      />\n    </>\n  );\n}\n\nWithLinks.storyName = 'Кнопки-ссылки';\n\nexport function WithLinksForSemantic() {\n  const total = 54;\n  const [page, setPage] = useState(1);\n\n  return (\n    <>\n      <Pagination\n        total={total}\n        current={page}\n        onPageChange={(event, button) => {\n          setPage(button.value);\n        }}\n        renderItem={(item, getProps) => (\n          <PaginationItem\n            {...getProps({\n              href: `http://my-site.ru?page=${item.value}`,\n              onClick: event => event.preventDefault(),\n            })}\n          />\n        )}\n      />\n    </>\n  );\n}\n\nWithLinksForSemantic.storyName = 'Кнопки-ссылки для семантики';\n\nexport function TestRanges() {\n  const MyPagination = ({ total }: { total: number }) => {\n    const [page, setPage] = useState(1);\n\n    return (\n      <Pagination\n        current={page}\n        total={total}\n        onPageChange={(event, button) => setPage(button.value)}\n      />\n    );\n  };\n\n  return (\n    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>\n      {Array(16)\n        .fill(0)\n        .map((zero, index) => index)\n        .concat(99, 999, 9999)\n        .map(count => (\n          <div key={count}>\n            <h5>Total: {count}</h5>\n            <MyPagination total={count} />\n          </div>\n        ))}\n    </div>\n  );\n}\n\nTestRanges.storyName = 'Тест: Варианты данных';\n",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:25},startBody:{col:7,line:12},endBody:{col:1,line:25}},"no-arrows":{startLoc:{col:7,line:29},endLoc:{col:1,line:43},startBody:{col:7,line:29},endBody:{col:1,line:43}},"no-disabled-arrows":{startLoc:{col:7,line:47},endLoc:{col:1,line:61},startBody:{col:7,line:47},endBody:{col:1,line:61}},"with-links":{startLoc:{col:7,line:65},endLoc:{col:1,line:79},startBody:{col:7,line:65},endBody:{col:1,line:79}},"with-links-for-semantic":{startLoc:{col:7,line:83},endLoc:{col:1,line:106},startBody:{col:7,line:83},endBody:{col:1,line:106}},"test-ranges":{startLoc:{col:7,line:110},endLoc:{col:1,line:137},startBody:{col:7,line:110},endBody:{col:1,line:137}}}},layout:"padded"}},Primary=function Primary(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pagination,{total:18,current:page,onPageChange:(event,button)=>setPage(button.value)})})};Primary.storyName="Простой пример";const NoArrows=function NoArrows(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pagination,{total:27,current:page,onPageChange:(event,button)=>setPage(button.value),getItems:payload=>getPaginationItems(payload,{arrows:!1})})})};NoArrows.storyName="Без стрелок";const NoDisabledArrows=function NoDisabledArrows(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pagination,{total:36,current:page,onPageChange:(event,button)=>setPage(button.value),getItems:payload=>getPaginationItems(payload,{arrows:"active"})})})};NoDisabledArrows.storyName="Без отключенных стрелок";const WithLinks=function WithLinks(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pagination,{total:45,current:2,renderItem:(item,getProps)=>(0,jsx_runtime.jsx)(PaginationItem,{...getProps(),href:`http://my-site.ru?page=${item.value}`})})})};WithLinks.storyName="Кнопки-ссылки";const WithLinksForSemantic=function WithLinksForSemantic(){const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Pagination,{total:54,current:page,onPageChange:(event,button)=>{setPage(button.value)},renderItem:(item,getProps)=>(0,jsx_runtime.jsx)(PaginationItem,{...getProps({href:`http://my-site.ru?page=${item.value}`,onClick:event=>event.preventDefault()})})})})};WithLinksForSemantic.storyName="Кнопки-ссылки для семантики";const TestRanges=function TestRanges(){const MyPagination=({total})=>{const[page,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(Pagination,{current:page,total,onPageChange:(event,button)=>setPage(button.value)})};return(0,jsx_runtime.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:24},children:Array(16).fill(0).map(((zero,index)=>index)).concat(99,999,9999).map((count=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("h5",{children:["Total: ",count]}),(0,jsx_runtime.jsx)(MyPagination,{total:count})]},count)))})};TestRanges.storyName="Тест: Варианты данных",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const total = 18;\n  const [page, setPage] = useState(1);\n  return <>\n      <Pagination total={total} current={page} onPageChange={(event, button) => setPage(button.value)} />\n    </>;\n}",...Primary.parameters?.docs?.source}}},NoArrows.parameters={...NoArrows.parameters,docs:{...NoArrows.parameters?.docs,source:{originalSource:"function NoArrows() {\n  const total = 27;\n  const [page, setPage] = useState(1);\n  return <>\n      <Pagination total={total} current={page} onPageChange={(event, button) => setPage(button.value)} getItems={payload => getPaginationItems(payload, {\n      arrows: false\n    })} />\n    </>;\n}",...NoArrows.parameters?.docs?.source}}},NoDisabledArrows.parameters={...NoDisabledArrows.parameters,docs:{...NoDisabledArrows.parameters?.docs,source:{originalSource:"function NoDisabledArrows() {\n  const total = 36;\n  const [page, setPage] = useState(1);\n  return <>\n      <Pagination total={total} current={page} onPageChange={(event, button) => setPage(button.value)} getItems={payload => getPaginationItems(payload, {\n      arrows: 'active'\n    })} />\n    </>;\n}",...NoDisabledArrows.parameters?.docs?.source}}},WithLinks.parameters={...WithLinks.parameters,docs:{...WithLinks.parameters?.docs,source:{originalSource:"function WithLinks() {\n  const total = 45;\n  return <>\n      <Pagination total={total} current={2} renderItem={(item, getProps) => <PaginationItem {...getProps()} href={`http://my-site.ru?page=${item.value}`} />} />\n    </>;\n}",...WithLinks.parameters?.docs?.source}}},WithLinksForSemantic.parameters={...WithLinksForSemantic.parameters,docs:{...WithLinksForSemantic.parameters?.docs,source:{originalSource:"function WithLinksForSemantic() {\n  const total = 54;\n  const [page, setPage] = useState(1);\n  return <>\n      <Pagination total={total} current={page} onPageChange={(event, button) => {\n      setPage(button.value);\n    }} renderItem={(item, getProps) => <PaginationItem {...getProps({\n      href: `http://my-site.ru?page=${item.value}`,\n      onClick: event => event.preventDefault()\n    })} />} />\n    </>;\n}",...WithLinksForSemantic.parameters?.docs?.source}}},TestRanges.parameters={...TestRanges.parameters,docs:{...TestRanges.parameters?.docs,source:{originalSource:"function TestRanges() {\n  const MyPagination = ({\n    total\n  }: {\n    total: number;\n  }) => {\n    const [page, setPage] = useState(1);\n    return <Pagination current={page} total={total} onPageChange={(event, button) => setPage(button.value)} />;\n  };\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: 24\n  }}>\n      {Array(16).fill(0).map((zero, index) => index).concat(99, 999, 9999).map(count => <div key={count}>\n            <h5>Total: {count}</h5>\n            <MyPagination total={count} />\n          </div>)}\n    </div>;\n}",...TestRanges.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","NoArrows","NoDisabledArrows","WithLinks","WithLinksForSemantic","TestRanges"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination/pagination-item.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pagination-item-m__root__de5{--pagination-item-color: #212121;--pagination-item-background: #fff;--pagination-item-border-color: #e0e0e0;--pagination-item-font-size: 14px;--pagination-item-line-height: 20px;width:40px;height:40px;flex-shrink:0;color:var(--pagination-item-color);background:var(--pagination-item-background);box-shadow:inset 0 0 0 1px var(--pagination-item-border-color);font-size:var(--pagination-item-font-size);line-height:var(--pagination-item-line-height);font-weight:600;display:flex;align-items:center;justify-content:center;text-align:center;overflow:hidden;text-decoration:none;font-style:normal}.pagination-item-m__root__de5.pagination-item-m__checked__c83{cursor:default;--pagination-item-color: #fff;--pagination-item-background: #212121;--pagination-item-border-color: #212121}.pagination-item-m__root__de5.pagination-item-m__disabled__ce4{--pagination-item-color: #c2c2c2;--pagination-item-background: #fff;--pagination-item-border-color: #e0e0e0}.pagination-item-m__root__de5:not(.pagination-item-m__checked__c83):not(.pagination-item-m__disabled__ce4):hover{cursor:pointer;--pagination-item-background: #f5f5f5}.pagination-item-m__root__de5.pagination-item-m__rounds-all__a5f{border-radius:4px}.pagination-item-m__root__de5.pagination-item-m__rounds-left__a09{border-radius:4px 0 0 4px}.pagination-item-m__root__de5.pagination-item-m__rounds-right__f13{border-radius:0 4px 4px 0}","",{version:3,sources:["webpack://./src/pagination/pagination-item.m.scss"],names:[],mappings:"AAEA,8BACE,gCAAA,CACA,kCAAA,CACA,uCAAA,CACA,iCAAA,CACA,mCAAA,CACA,UAAA,CACA,WAAA,CACA,aAAA,CACA,kCAAA,CACA,4CAAA,CACA,8DAAA,CACA,0CAAA,CACA,8CAAA,CACA,eAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,oBAAA,CACA,iBAAA,CACA,8DACE,cAAA,CACA,6BAAA,CACA,qCAAA,CACA,uCAAA,CAEF,+DACE,gCAAA,CACA,kCAAA,CACA,uCAAA,CAEF,iHACE,cAAA,CACA,qCAAA,CAEF,iEACE,iBAAA,CAEF,kEACE,yBAAA,CAEF,mEACE,yBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  --pagination-item-color: #{colors.$basic-gray87};\n  --pagination-item-background: #fff;\n  --pagination-item-border-color: #{colors.$basic-gray12};\n  --pagination-item-font-size: 14px;\n  --pagination-item-line-height: 20px;\n  width: 40px;\n  height: 40px;\n  flex-shrink: 0;\n  color: var(--pagination-item-color);\n  background: var(--pagination-item-background);\n  box-shadow: inset 0 0 0 1px var(--pagination-item-border-color);\n  font-size: var(--pagination-item-font-size);\n  line-height: var(--pagination-item-line-height);\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  overflow: hidden;\n  text-decoration: none;\n  font-style: normal;\n  &.checked {\n    cursor: default;\n    --pagination-item-color: #fff;\n    --pagination-item-background: #{colors.$basic-gray87};\n    --pagination-item-border-color: #{colors.$basic-gray87};\n  }\n  &.disabled {\n    --pagination-item-color: #{colors.$basic-gray24};\n    --pagination-item-background: #fff;\n    --pagination-item-border-color: #{colors.$basic-gray12};\n  }\n  &:not(.checked):not(.disabled):hover {\n    cursor: pointer;\n    --pagination-item-background: #{colors.$basic-gray4};\n  }\n  &.rounds-all {\n    border-radius: 4px;\n  }\n  &.rounds-left {\n    border-radius: 4px 0 0 4px;\n  }\n  &.rounds-right {\n    border-radius: 0 4px 4px 0;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"pagination-item-m__root__de5",checked:"pagination-item-m__checked__c83",disabled:"pagination-item-m__disabled__ce4","rounds-all":"pagination-item-m__rounds-all__a5f","rounds-left":"pagination-item-m__rounds-left__a09","rounds-right":"pagination-item-m__rounds-right__f13"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination/pagination.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".pagination-m__root__d23{display:flex}.pagination-m__prev__bed+.pagination-m__page__b01,.pagination-m__prev__bed+.pagination-m__next__d44{margin-left:8px}.pagination-m__page__b01+.pagination-m__next__d44{margin-left:8px}.pagination-m__page__b01+.pagination-m__page__b01{margin-left:-1px}.pagination-m__large__a0a{--pagination-item-font-size: 12px;--pagination-item-line-height: 16px}","",{version:3,sources:["webpack://./src/pagination/pagination.m.scss"],names:[],mappings:"AAAA,yBACE,YAAA,CAGF,oGAEE,eAAA,CAGF,kDACE,eAAA,CAGF,kDACE,gBAAA,CAGF,0BACE,iCAAA,CACA,mCAAA",sourcesContent:[".root {\n  display: flex;\n}\n\n.prev + .page,\n.prev + .next {\n  margin-left: 8px;\n}\n\n.page + .next {\n  margin-left: 8px;\n}\n\n.page + .page {\n  margin-left: -1px;\n}\n\n.large {\n  --pagination-item-font-size: 12px;\n  --pagination-item-line-height: 16px;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"pagination-m__root__d23",prev:"pagination-m__prev__bed",page:"pagination-m__page__b01",next:"pagination-m__next__d44",large:"pagination-m__large__a0a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);