/*! For license information please see pagination-deprecated-__stories__-pagination-stories.4bd8422b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[8495],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M9.659 3.247a1 1 0 0 1 .094 1.412L6.829 8l2.924 3.341a1 1 0 0 1-1.506 1.318l-3.5-4a1 1 0 0 1 0-1.317l3.5-4a1 1 0 0 1 1.412-.095Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M6.341 12.753a1 1 0 0 1-.094-1.412L9.171 8 6.247 4.659a1 1 0 0 1 1.506-1.317l3.5 4a1 1 0 0 1 0 1.317l-3.5 4a1 1 0 0 1-1.412.094Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/pagination-deprecated/__stories__/pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pagination_stories});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),pagination_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination-deprecated/pagination.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(pagination_module.Z,options);const pagination_deprecated_pagination_module=pagination_module.Z&&pagination_module.Z.locals?pagination_module.Z.locals:void 0,cx=bind_default().bind(pagination_deprecated_pagination_module),range=(start,end)=>{const result=[];for(let i=start;i<end;i++)result.push(i);return result},PageButton=(value,content=value)=>({value,content}),getCorrectRangeNumbers=({current,range:rangeSize,total})=>{let result=[...getRangeNumbers({current,range:rangeSize,total})];return total>rangeSize&&(current<rangeSize?result=range(1,rangeSize+1):current>total-rangeSize+1&&(result=range(total-rangeSize+1,total+1))),result},getRangeNumbers=({current,range:rangeSize,total})=>{const pageNumbers=[],readyRange=Math.min(rangeSize,total)||0;let startIndex=current-Math.floor(readyRange/2)-readyRange%2;startIndex<1?startIndex=0:startIndex+readyRange>total&&(startIndex=total-readyRange);for(let i=startIndex;i<startIndex+readyRange;i++)pageNumbers.push(i+1);return pageNumbers};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const page_button_PageButton=({selected,rounded="all",className,...restProps})=>(0,jsx_runtime.jsx)("button",{...restProps,type:"button",className:cx("page-button",selected&&"selected","all"===rounded&&"rounds-all","left"===rounded&&"rounds-left","right"===rounded&&"rounds-right",className)});page_button_PageButton.displayName="PageButton";try{page_button_PageButton.displayName="PageButton",page_button_PageButton.__docgenInfo={description:"Кнопка страницы.",displayName:"PageButton",props:{rounded:{defaultValue:{value:"all"},description:"",name:"rounded",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"none"'},{value:'"all"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string | undefined"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pagination-deprecated/page-button.tsx#PageButton"]={docgenInfo:page_button_PageButton.__docgenInfo,name:"PageButton",path:"src/pagination-deprecated/page-button.tsx#PageButton"})}catch(__react_docgen_typescript_loader_error){}var sizes=__webpack_require__("./src/styling/sizes.ts"),Left=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Left.js"),Right=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Right.js");const DEFAULTS_renderButton=({type,isFirst,isLast,...restProps},index)=>(0,jsx_runtime.jsx)(page_button_PageButton,{rounded:resolveRounded({type,isFirst,isLast}),className:getClassByType(type),...restProps},index),DEFAULTS_needPrevButton=({current})=>current>1,DEFAULTS_needNextButton=({current,total})=>current<total,DEFAULTS_calculateButtons=({current,total,buttonKeys={more:"..."}})=>{const list=getCorrectRangeNumbers({current,range:5,total}).map((v=>PageButton(v)));return list.length>0&&total>5&&(list[0].value>1&&list[list.length-1].value<total&&list.shift(),list[0].value>1&&(2===list[0].value?list.unshift(PageButton(1)):list.unshift(PageButton(1),3===list[0].value?PageButton(2):PageButton(list[0].value-1,buttonKeys.more))),list[list.length-1].value<total&&(list[list.length-1].value===total-1?list.push(PageButton(total)):list.push(total-list[list.length-1].value>2?PageButton(list[list.length-1].value+1,buttonKeys.more):PageButton(total-1),PageButton(total)))),list},BUTTON_TYPES={prev:"prev",next:"next",more:"more"},BUTTON_CONTENTS={prev:(0,jsx_runtime.jsx)(Left.Z,{className:cx("icon")}),next:(0,jsx_runtime.jsx)(Right.Z,{className:cx("icon")}),more:"..."},BasePagination=({total,current,onButtonClick,isButtonSelected=a=>a===current,renderButton=DEFAULTS_renderButton,needPrevButton=DEFAULTS_needPrevButton,needNextButton=DEFAULTS_needNextButton,calculateButtons=DEFAULTS_calculateButtons})=>{const pageButtons=calculateButtons({current,total,buttonKeys:BUTTON_TYPES});return(0,jsx_runtime.jsxs)("div",{className:cx("base-pagination-wrapper"),children:[needPrevButton({current,total})&&renderButton({"aria-label":"Назад",type:BUTTON_TYPES.prev,children:BUTTON_CONTENTS.prev,onClick:()=>onButtonClick&&onButtonClick(current-1),page:current-1}),pageButtons.map((({content,value},index)=>renderButton({type:content===BUTTON_TYPES.more?BUTTON_TYPES.more:void 0,isFirst:0===index,isLast:index===pageButtons.length-1,children:Object.keys(BUTTON_CONTENTS).includes(content)?BUTTON_CONTENTS[content]:content,selected:isButtonSelected(content),"aria-label":`Перейти на страницу ${value}`,onClick:()=>onButtonClick&&onButtonClick(value),page:value},index))),needNextButton({current,total})&&renderButton({"aria-label":"Вперед",type:BUTTON_TYPES.next,children:BUTTON_CONTENTS.next,onClick:()=>onButtonClick&&onButtonClick(current+1),page:current+1})]})};function resolveRounded(data){switch(!0){case data.type===BUTTON_TYPES.prev:case data.type===BUTTON_TYPES.next:case Boolean(data.isFirst&&data.isLast):return"all";case Boolean(data.isFirst):return"left";case Boolean(data.isLast):return"right";default:return"none"}}function getClassByType(type){switch(type){case BUTTON_TYPES.prev:return(0,sizes.wz)(2);case BUTTON_TYPES.next:return(0,sizes.oI)(2)}}BasePagination.displayName="BasePagination";try{BasePagination.displayName="BasePagination",BasePagination.__docgenInfo={description:"Возвращает базовый компонент списка кнопок навигации по страницам.",displayName:"BasePagination",props:{total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},onButtonClick:{defaultValue:null,description:"",name:"onButtonClick",required:!1,type:{name:"((n: number) => void) | undefined"}},isButtonSelected:{defaultValue:{value:"a => a === current"},description:"",name:"isButtonSelected",required:!1,type:{name:"((n: string | number) => boolean) | undefined"}},renderButton:{defaultValue:{value:"DEFAULTS.renderButton"},description:"",name:"renderButton",required:!1,type:{name:"((p: RenderButtonProps, i?: number | undefined) => ReactNode) | undefined"}},needPrevButton:{defaultValue:{value:"DEFAULTS.needPrevButton"},description:"",name:"needPrevButton",required:!1,type:{name:"((data: { current: number; total: number; }) => boolean) | undefined"}},needNextButton:{defaultValue:{value:"DEFAULTS.needNextButton"},description:"",name:"needNextButton",required:!1,type:{name:"((data: { current: number; total: number; }) => boolean) | undefined"}},calculateButtons:{defaultValue:{value:"DEFAULTS.calculateButtons"},description:"",name:"calculateButtons",required:!1,type:{name:"(({ current, total, buttonKeys, }: { current: number; total: number; buttonKeys?: { more: string | number; } | undefined; }) => IPageButton[]) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pagination-deprecated/base-pagination.tsx#BasePagination"]={docgenInfo:BasePagination.__docgenInfo,name:"BasePagination",path:"src/pagination-deprecated/base-pagination.tsx#BasePagination"})}catch(__react_docgen_typescript_loader_error){}const Pagination=({total,current,onChange,renderButton})=>(0,jsx_runtime.jsx)(BasePagination,{total,current,renderButton,onButtonClick:content=>{Number.isFinite(content)&&onChange&&onChange({value:content})}});Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"Список кнопок навигации по страницам.",displayName:"Pagination",props:{total:{defaultValue:null,description:"Общее количество страниц.",name:"total",required:!0,type:{name:"number"}},current:{defaultValue:null,description:"Индекс текущей страницы.",name:"current",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"Сработает при выборе страницы.",name:"onChange",required:!1,type:{name:"((data: { value: number; }) => void) | undefined"}},renderButton:{defaultValue:null,description:"Функция возвращающая компонент кнопки.",name:"renderButton",required:!1,type:{name:"((p: RenderButtonProps, i?: number | undefined) => ReactNode) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/pagination-deprecated/index.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"src/pagination-deprecated/index.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js");const pagination_stories={title:"deprecated/Pagination",component:Pagination,parameters:{storySource:{source:"import { Pagination } from '@sima-land/ui-nucleons/pagination-deprecated';\nimport { useState } from 'react';\nexport default {\n  title: 'deprecated/Pagination',\n  component: Pagination,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  function TestSection({\n    total = 100\n  }) {\n    const [currentPage, setPage] = useState(1);\n    return <div style={{\n      marginBottom: 20\n    }}>\n        <h4 style={{\n        marginBottom: 10\n      }}>Page count: {total}</h4>\n        <Pagination total={total} current={currentPage} onChange={({\n        value\n      }) => setPage(value)} />\n      </div>;\n  }\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'start'\n  }}>\n      <TestSection total={1} />\n      <TestSection total={2} />\n      <TestSection total={3} />\n      <TestSection total={4} />\n      <TestSection total={5} />\n      <TestSection total={6} />\n      <TestSection total={7} />\n      <TestSection total={8} />\n      <TestSection total={9} />\n      <TestSection total={10} />\n      <TestSection total={15} />\n      <TestSection total={20} />\n      <TestSection total={999} />\n    </div>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  function TestSection({\\n    total = 100\\n  }) {\\n    const [currentPage, setPage] = useState(1);\\n    return <div style={{\\n      marginBottom: 20\\n    }}>\\n        <h4 style={{\\n        marginBottom: 10\\n      }}>Page count: {total}</h4>\\n        <Pagination total={total} current={currentPage} onChange={({\\n        value\\n      }) => setPage(value)} />\\n      </div>;\\n  }\\n  return <div style={{\\n    display: 'flex',\\n    flexDirection: 'column',\\n    alignItems: 'start'\\n  }}>\\n      <TestSection total={1} />\\n      <TestSection total={2} />\\n      <TestSection total={3} />\\n      <TestSection total={4} />\\n      <TestSection total={5} />\\n      <TestSection total={6} />\\n      <TestSection total={7} />\\n      <TestSection total={8} />\\n      <TestSection total={9} />\\n      <TestSection total={10} />\\n      <TestSection total={15} />\\n      <TestSection total={20} />\\n      <TestSection total={999} />\\n    </div>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:10},endLoc:{col:1,line:45},startBody:{col:7,line:10},endBody:{col:1,line:45}}}},layout:"padded"}},Primary=function Primary(){function TestSection({total=100}){const[currentPage,setPage]=(0,react.useState)(1);return(0,jsx_runtime.jsxs)("div",{style:{marginBottom:20},children:[(0,jsx_runtime.jsxs)("h4",{style:{marginBottom:10},children:["Page count: ",total]}),(0,jsx_runtime.jsx)(Pagination,{total,current:currentPage,onChange:({value})=>setPage(value)})]})}return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"start"},children:[(0,jsx_runtime.jsx)(TestSection,{total:1}),(0,jsx_runtime.jsx)(TestSection,{total:2}),(0,jsx_runtime.jsx)(TestSection,{total:3}),(0,jsx_runtime.jsx)(TestSection,{total:4}),(0,jsx_runtime.jsx)(TestSection,{total:5}),(0,jsx_runtime.jsx)(TestSection,{total:6}),(0,jsx_runtime.jsx)(TestSection,{total:7}),(0,jsx_runtime.jsx)(TestSection,{total:8}),(0,jsx_runtime.jsx)(TestSection,{total:9}),(0,jsx_runtime.jsx)(TestSection,{total:10}),(0,jsx_runtime.jsx)(TestSection,{total:15}),(0,jsx_runtime.jsx)(TestSection,{total:20}),(0,jsx_runtime.jsx)(TestSection,{total:999})]})};Primary.displayName="Primary",Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  function TestSection({\n    total = 100\n  }) {\n    const [currentPage, setPage] = useState(1);\n    return <div style={{\n      marginBottom: 20\n    }}>\n        <h4 style={{\n        marginBottom: 10\n      }}>Page count: {total}</h4>\n        <Pagination total={total} current={currentPage} onChange={({\n        value\n      }) => setPage(value)} />\n      </div>;\n  }\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    alignItems: 'start'\n  }}>\n      <TestSection total={1} />\n      <TestSection total={2} />\n      <TestSection total={3} />\n      <TestSection total={4} />\n      <TestSection total={5} />\n      <TestSection total={6} />\n      <TestSection total={7} />\n      <TestSection total={8} />\n      <TestSection total={9} />\n      <TestSection total={10} />\n      <TestSection total={15} />\n      <TestSection total={20} />\n      <TestSection total={999} />\n    </div>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/styling/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>ClassGetter});var classnames_bind__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/bind.js"),classnames_bind__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames_bind__WEBPACK_IMPORTED_MODULE_0__);const ClassGetter=(classes,isValidKey,prefix="")=>{const cx=classnames_bind__WEBPACK_IMPORTED_MODULE_0___default().bind(classes);return value=>isValidKey(value)?cx(`${prefix}${value}`):void 0}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/pagination-deprecated/pagination.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.pagination-module__page-select-form__ba6{font-size:12px}.pagination-module__page-select-form__ba6 .pagination-module__page-input-wrapper__b07{margin-left:8px;width:64px}.pagination-module__page-select-form__ba6 .pagination-module__page-input-wrapper__b07 .pagination-module__page-input__b98{text-align:center;font-size:16px}.pagination-module__page-select-form__ba6 .pagination-module__submit-button__e7a{margin-left:8px}.pagination-module__page-select-form__ba6 .pagination-module__cancel-button__bbc{margin-left:32px}.pagination-module__page-button__f3a{display:inline-block;width:38px;height:38px;background:#fff;border:1px solid #e0e0e0;font-size:14px;outline:0;box-sizing:border-box;padding:0;vertical-align:top;user-select:none}.pagination-module__page-button__f3a.pagination-module__rounds-all__bc0{border-radius:4px}.pagination-module__page-button__f3a.pagination-module__rounds-left__f31{border-radius:4px 0 0 4px}.pagination-module__page-button__f3a.pagination-module__rounds-right__e10{border-radius:0 4px 4px 0}.pagination-module__page-button__f3a.pagination-module__rounds-right__e10:not(.pagination-module__rounds-all__bc0){margin-right:0}.pagination-module__page-button__f3a:disabled{color:#c2c2c2}.pagination-module__page-button__f3a:not(.pagination-module__rounds-all__bc0){margin-right:-1px}.pagination-module__page-button__f3a:not(.pagination-module__selected__cdb):not(:disabled):hover{background:#f5f5f5;cursor:pointer}.pagination-module__page-button__f3a.pagination-module__selected__cdb{position:relative;background:#212121;border-color:#212121;color:#fff;cursor:default}.pagination-module__page-button__f3a.pagination-module__selected__cdb::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;box-shadow:inherit;border-radius:inherit}.pagination-module__icon__d64{vertical-align:middle}',"",{version:3,sources:["webpack://./src/pagination-deprecated/pagination.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,0CACE,cAAA,CACA,sFACE,eAAA,CACA,UAAA,CACA,0HACE,iBAAA,CACA,cAAA,CAGJ,iFACE,eAAA,CAEF,iFACE,gBAAA,CAIJ,qCACE,oBAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,wBAAA,CACA,cAAA,CACA,SAAA,CACA,qBAAA,CACA,SAAA,CACA,kBAAA,CACA,gBAAA,CACA,wEACE,iBAAA,CAEF,yEACE,yBAAA,CAEF,0EACE,yBAAA,CACA,mHACE,cAAA,CAGJ,8CACE,aCpCW,CDsCb,8EACE,iBAAA,CAEF,iGACE,kBAAA,CACA,cAAA,CAEF,sEACE,iBAAA,CACA,kBCpDW,CDqDX,oBCrDW,CDsDX,UAAA,CACA,cAAA,CACA,6EACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,qBAAA,CAKN,8BACE,qBAAA",sourcesContent:["@use '../colors';\n\n.page-select-form {\n  font-size: 12px;\n  .page-input-wrapper {\n    margin-left: 8px;\n    width: 64px;\n    .page-input {\n      text-align: center;\n      font-size: 16px;\n    }\n  }\n  .submit-button {\n    margin-left: 8px;\n  }\n  .cancel-button {\n    margin-left: 32px;\n  }\n}\n\n.page-button {\n  display: inline-block;\n  width: 38px;\n  height: 38px;\n  background: #fff;\n  border: 1px solid colors.$basic-gray12;\n  font-size: 14px;\n  outline: 0;\n  box-sizing: border-box;\n  padding: 0;\n  vertical-align: top;\n  user-select: none;\n  &.rounds-all {\n    border-radius: 4px;\n  }\n  &.rounds-left {\n    border-radius: 4px 0 0 4px;\n  }\n  &.rounds-right {\n    border-radius: 0 4px 4px 0;\n    &:not(.rounds-all) {\n      margin-right: 0;\n    }\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n  }\n  &:not(.rounds-all) {\n    margin-right: -1px;\n  }\n  &:not(.selected):not(:disabled):hover {\n    background: #f5f5f5;\n    cursor: pointer;\n  }\n  &.selected {\n    position: relative;\n    background: colors.$basic-gray87;\n    border-color: colors.$basic-gray87;\n    color: #fff;\n    cursor: default;\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      box-shadow: inherit;\n      border-radius: inherit;\n    }\n  }\n}\n\n.icon {\n  vertical-align: middle;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"page-select-form":"pagination-module__page-select-form__ba6","page-input-wrapper":"pagination-module__page-input-wrapper__b07","page-input":"pagination-module__page-input__b98","submit-button":"pagination-module__submit-button__e7a","cancel-button":"pagination-module__cancel-button__bbc","page-button":"pagination-module__page-button__f3a","rounds-all":"pagination-module__rounds-all__bc0","rounds-left":"pagination-module__rounds-left__f31","rounds-right":"pagination-module__rounds-right__e10",selected:"pagination-module__selected__cdb",icon:"pagination-module__icon__d64"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);