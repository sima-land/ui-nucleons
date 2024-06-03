/*! For license information please see arrow-button-__stories__-index-stories.9fa979df.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[7566],{"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.707 4.707a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 1 0 0-2H5.414l6.293-6.293Z"}))))},"./src/arrow-button/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Directions:()=>Directions,Disabled:()=>Disabled,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/arrow-button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/ArrowButton",component:_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_0__.b,parameters:{storySource:{source:"import { ArrowButton, ArrowButtonSize, ArrowDirection } from '@sima-land/ui-nucleons/arrow-button';\nimport { CSSProperties } from 'react';\n\nexport default {\n  title: 'common/ArrowButton',\n  component: ArrowButton,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n\n  return (\n    <>\n      <ArrowButton onClick={onClick} />\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function Directions() {\n  const sizes: ArrowButtonSize[] = ['s', 'l'];\n  const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];\n\n  const styles: CSSProperties = {\n    display: 'flex',\n    width: '320px',\n    gap: '32px',\n    marginBottom: '32px',\n  };\n\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n\n  return (\n    <>\n      {sizes.map(size => (\n        <div key={size} style={styles}>\n          {directions.map(direction => (\n            <ArrowButton key={direction} size={size} direction={direction} onClick={onClick} />\n          ))}\n        </div>\n      ))}\n    </>\n  );\n}\n\nDirections.storyName = 'Направления';\n\nexport function Disabled() {\n  const sizes: ArrowButtonSize[] = ['s', 'l'];\n  const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];\n\n  const styles: CSSProperties = {\n    display: 'flex',\n    width: '320px',\n    gap: '32px',\n    marginBottom: '32px',\n  };\n\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n\n  return (\n    <>\n      {sizes.map(size => (\n        <div key={size} style={styles}>\n          {directions.map(direction => (\n            <ArrowButton\n              key={direction}\n              disabled\n              size={size}\n              direction={direction}\n              onClick={onClick}\n            />\n          ))}\n        </div>\n      ))}\n    </>\n  );\n}\n\nDisabled.storyName = 'Состояние disabled';\n",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:20},startBody:{col:7,line:12},endBody:{col:1,line:20}},directions:{startLoc:{col:7,line:24},endLoc:{col:1,line:48},startBody:{col:7,line:24},endBody:{col:1,line:48}},disabled:{startLoc:{col:7,line:52},endLoc:{col:1,line:82},startBody:{col:7,line:52},endBody:{col:1,line:82}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_0__.b,{onClick:()=>alert("Фух, клик по кнопке работает...")})})};Primary.storyName="Простой пример";const Directions=function Directions(){const directions=["up","right","down","left"],styles={display:"flex",width:"320px",gap:"32px",marginBottom:"32px"},onClick=()=>alert("Фух, клик по кнопке работает...");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["s","l"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:styles,children:directions.map((direction=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_0__.b,{size,direction,onClick},direction)))},size)))})};Directions.storyName="Направления";const Disabled=function Disabled(){const directions=["up","right","down","left"],styles={display:"flex",width:"320px",gap:"32px",marginBottom:"32px"},onClick=()=>alert("Фух, клик по кнопке работает...");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:["s","l"].map((size=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:styles,children:directions.map((direction=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_0__.b,{disabled:!0,size,direction,onClick},direction)))},size)))})};Disabled.storyName="Состояние disabled",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n  return <>\n      <ArrowButton onClick={onClick} />\n    </>;\n}",...Primary.parameters?.docs?.source}}},Directions.parameters={...Directions.parameters,docs:{...Directions.parameters?.docs,source:{originalSource:"function Directions() {\n  const sizes: ArrowButtonSize[] = ['s', 'l'];\n  const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];\n  const styles: CSSProperties = {\n    display: 'flex',\n    width: '320px',\n    gap: '32px',\n    marginBottom: '32px'\n  };\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n  return <>\n      {sizes.map(size => <div key={size} style={styles}>\n          {directions.map(direction => <ArrowButton key={direction} size={size} direction={direction} onClick={onClick} />)}\n        </div>)}\n    </>;\n}",...Directions.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"function Disabled() {\n  const sizes: ArrowButtonSize[] = ['s', 'l'];\n  const directions: ArrowDirection[] = ['up', 'right', 'down', 'left'];\n  const styles: CSSProperties = {\n    display: 'flex',\n    width: '320px',\n    gap: '32px',\n    marginBottom: '32px'\n  };\n  const onClick = () => alert('Фух, клик по кнопке работает...');\n  return <>\n      {sizes.map(size => <div key={size} style={styles}>\n          {directions.map(direction => <ArrowButton key={direction} disabled size={size} direction={direction} onClick={onClick} />)}\n        </div>)}\n    </>;\n}",...Disabled.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Directions","Disabled"]},"./src/arrow-button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>ArrowButton});var react=__webpack_require__("./node_modules/react/index.js");const ArrowUp=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react.createElement("path",{fillRule:"evenodd",d:"M3.336 12.747a1 1 0 0 1-.083-1.411l8-9a1 1 0 0 1 1.494 0l8 9a1 1 0 0 1-1.494 1.328L12 4.505l-7.253 8.16a1 1 0 0 1-1.411.082Z",clipRule:"evenodd"}),react.createElement("path",{fillRule:"evenodd",d:"M12 22a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v17a1 1 0 0 1-1 1Z",clipRule:"evenodd"})))),ArrowRight=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react.createElement("path",{d:"M12.664 3.253a1 1 0 0 0-1.328 1.494L18.37 11H3a1 1 0 1 0 0 2h15.37l-7.034 6.253a1 1 0 0 0 1.328 1.494l9-8a1 1 0 0 0 0-1.494l-9-8Z"})))),ArrowDown=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react.createElement("path",{d:"M11 18.586V3a1 1 0 1 1 2 0v15.586l6.293-6.293a1 1 0 0 1 1.414 1.414l-8 8a1 1 0 0 1-1.414 0l-8-8a1 1 0 1 1 1.414-1.414L11 18.586Z"}))));var ArrowLeft=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js");const Stroked_ArrowUp=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{d:"M4.659 7.253a1 1 0 1 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 1 1-1.318 1.506L9 5.203V13a1 1 0 1 1-2 0V5.204L4.659 7.253Z"})))),Stroked_ArrowRight=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{d:"M8.747 4.659a1 1 0 1 1 1.506-1.317l3.5 4a1 1 0 0 1 0 1.317l-3.5 4a1 1 0 1 1-1.506-1.318L10.797 9H3a1 1 0 1 1 0-2h7.796L8.747 4.659Z"})))),Stroked_ArrowDown=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{d:"M11.341 8.747a1 1 0 0 1 1.318 1.506l-4 3.5a1 1 0 0 1-1.318 0l-4-3.5a1 1 0 1 1 1.317-1.506L7 10.797V3a1 1 0 1 1 2 0v7.796l2.341-2.049Z"})))),Stroked_ArrowLeft=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{d:"M7.253 4.659a1 1 0 0 0-1.506-1.317l-3.5 4a1 1 0 0 0 0 1.317l3.5 4a1 1 0 1 0 1.506-1.318L5.203 9H13a1 1 0 1 0 0-2H5.204l2.049-2.341Z"}))));var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),arrow_button_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/arrow-button/arrow-button.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(arrow_button_m.Z,options);const arrow_button_arrow_button_m=arrow_button_m.Z&&arrow_button_m.Z.locals?arrow_button_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(arrow_button_arrow_button_m),ICONS={s:{up:Stroked_ArrowUp,right:Stroked_ArrowRight,down:Stroked_ArrowDown,left:Stroked_ArrowLeft},l:{up:ArrowUp,right:ArrowRight,down:ArrowDown,left:ArrowLeft.Z}};function ArrowButton({size="l",direction="right",className,"data-testid":testId="arrow-button",...buttonProps}){const Icon=ICONS[size][direction];return(0,jsx_runtime.jsx)("button",{type:"button",...buttonProps,className:cx("arrow-button",`size-${size}`,className),"data-testid":testId,children:(0,jsx_runtime.jsx)(Icon,{"aria-hidden":!0,fill:"currentColor"})})}try{ArrowButton.displayName="ArrowButton",ArrowButton.__docgenInfo={description:"Кнопка-стрелка - круглая кнопка со стрелкой.",displayName:"ArrowButton",props:{size:{defaultValue:{value:"l"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'}]}},direction:{defaultValue:{value:"right"},description:"Направление (отвечает за иконку).",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/arrow-button/arrow-button.tsx#ArrowButton"]={docgenInfo:ArrowButton.__docgenInfo,name:"ArrowButton",path:"src/arrow-button/arrow-button.tsx#ArrowButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/arrow-button/arrow-button.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".arrow-button-m__arrow-button__f38{display:inline-flex;align-items:center;justify-content:center;background:#fff;border-radius:50%;margin:0;padding:0;border:0;outline:0;box-sizing:border-box;transition:box-shadow 200ms ease-out;color:#212121}.arrow-button-m__arrow-button__f38:focus-visible{outline:2px solid #1f84db}.arrow-button-m__arrow-button__f38:not(:disabled):hover{cursor:pointer}.arrow-button-m__arrow-button__f38:disabled{color:#c2c2c2}.arrow-button-m__arrow-button__f38.arrow-button-m__size-s__fb9{width:32px;height:32px;box-shadow:0 0 4px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.1)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-s__fb9:not(:disabled):hover{box-shadow:0 8px 16px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.04)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-l__c3f{width:56px;height:56px;box-shadow:0 8px 16px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.04)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-l__c3f:not(:disabled):hover{box-shadow:0 0 4px rgba(0,0,0,.04),0 12px 30px rgba(0,0,0,.1)}","",{version:3,sources:["webpack://./src/arrow-button/arrow-button.m.scss","webpack://./src/colors.scss","webpack://./src/utils.scss","webpack://./src/shadows.scss"],names:[],mappings:"AAIA,mCAEE,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,qBAAA,CACA,oCAAA,CACA,aCba,CCiFb,iDAPA,yBAAA,CF5DA,wDACE,cAAA,CAEF,4CACE,aCbW,CDeb,+DACE,UAAA,CACA,WAAA,CGjBA,2DACE,CHkBF,oFGbA,6DACE,CHgBJ,+DACE,UAAA,CACA,WAAA,CGnBA,6DACE,CHoBF,oFGjBA,6DACE",sourcesContent:["@use '../colors';\n@use '../utils';\n@use '../shadows';\n\n.arrow-button {\n  @include utils.focus-visible;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  transition: box-shadow 200ms ease-out;\n  color: colors.$basic-gray87;\n  &:not(:disabled):hover {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n  }\n  &.size-s {\n    width: 32px;\n    height: 32px;\n    @include shadows.box-shadow('z2');\n    &:not(:disabled):hover {\n      @include shadows.box-shadow('z3');\n    }\n  }\n  &.size-l {\n    width: 56px;\n    height: 56px;\n    @include shadows.box-shadow('z3');\n    &:not(:disabled):hover {\n      @include shadows.box-shadow('z4');\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","/**\n * Формирует тень по дизайн-гайдам.\n */\n@mixin box-shadow($key) {\n  @if $key == 'z1' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 2px 4px rgba(0, 0, 0, 0.08);\n  } @else if $key == 'z2' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 4px 8px rgba(0, 0, 0, 0.1);\n  } @else if $key == 'z2-straight' {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);\n  } @else if $key == 'z3' {\n    box-shadow:\n      0 8px 16px rgba(0, 0, 0, 0.08),\n      0 0 4px rgba(0, 0, 0, 0.04);\n  } @else if $key == 'z4' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 12px 30px rgba(0, 0, 0, 0.1);\n  } @else {\n    @warn 'No such shadow `#{$key}`.';\n  }\n}\n\n@function get-box-shadow($key) {\n  $result: none;\n\n  @if $key == 'z1' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 2px 4px rgba(0, 0, 0, 0.08);\n  } @else if $key == 'z2' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 4px 8px rgba(0, 0, 0, 0.1);\n  } @else if $key == 'z2-straight' {\n    $result: 0 0 15px rgba(0, 0, 0, 0.12);\n  } @else if $key == 'z3' {\n    $result:\n      0 8px 16px rgba(0, 0, 0, 0.08),\n      0 0 4px rgba(0, 0, 0, 0.04);\n  } @else if $key == 'z4' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 12px 30px rgba(0, 0, 0, 0.1);\n  } @else {\n    @warn 'No such shadow `#{$key}`.';\n  }\n\n  @return $result;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"arrow-button":"arrow-button-m__arrow-button__f38","size-s":"arrow-button-m__size-s__fb9","size-l":"arrow-button-m__size-l__c3f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);