"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[9479],{"./src/loading-overlay/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_loading_overlay__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/loading-overlay/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"deprecated/LoadingOverlay",component:_sima_land_ui_nucleons_loading_overlay__WEBPACK_IMPORTED_MODULE_0__.f,parameters:{storySource:{source:"import { LoadingOverlay } from '@sima-land/ui-nucleons/loading-overlay';\nimport { useState } from 'react';\nexport default {\n  title: 'deprecated/LoadingOverlay',\n  component: LoadingOverlay,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport const Primary = () => {\n  const [shown, toggleShow] = useState(false);\n  return <>\n      <button onClick={() => toggleShow(!shown)}>Toggle loading overlay</button>\n\n      <div style={{\n      position: 'relative',\n      height: 100,\n      border: '1px solid #aaa',\n      background: '#eee',\n      marginTop: 20\n    }}>\n        {shown && <LoadingOverlay />}\n      </div>\n    </>;\n};\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"() => {\\n  const [shown, toggleShow] = useState(false);\\n  return <>\\n      <button onClick={() => toggleShow(!shown)}>Toggle loading overlay</button>\\n\\n      <div style={{\\n      position: 'relative',\\n      height: 100,\\n      border: '1px solid #aaa',\\n      background: '#eee',\\n      marginTop: 20\\n    }}>\\n        {shown && <LoadingOverlay />}\\n      </div>\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:23,line:10},endLoc:{col:1,line:25},startBody:{col:23,line:10},endBody:{col:1,line:25}}}},layout:"padded"}},Primary=()=>{const[shown,toggleShow]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{onClick:()=>toggleShow(!shown),children:"Toggle loading overlay"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{position:"relative",height:100,border:"1px solid #aaa",background:"#eee",marginTop:20},children:shown&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_ui_nucleons_loading_overlay__WEBPACK_IMPORTED_MODULE_0__.f,{})})]})};Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => {\n  const [shown, toggleShow] = useState(false);\n  return <>\n      <button onClick={() => toggleShow(!shown)}>Toggle loading overlay</button>\n\n      <div style={{\n      position: 'relative',\n      height: 100,\n      border: '1px solid #aaa',\n      background: '#eee',\n      marginTop: 20\n    }}>\n        {shown && <LoadingOverlay />}\n      </div>\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/loading-overlay/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>LoadingOverlay});var spinner=__webpack_require__("./src/spinner/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),loading_overlay_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/loading-overlay/loading-overlay.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(loading_overlay_module.Z,options);const loading_overlay_loading_overlay_module=loading_overlay_module.Z&&loading_overlay_module.Z.locals?loading_overlay_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(loading_overlay_loading_overlay_module),LoadingOverlay=({style,className,spinnerProps={},fill=!0})=>(0,jsx_runtime.jsx)("div",{className:cx("loading-overlay",fill&&"fill",className),style,children:(0,jsx_runtime.jsx)(spinner.$j,{...spinnerProps})});LoadingOverlay.displayName="LoadingOverlay";try{LoadingOverlay.displayName="LoadingOverlay",LoadingOverlay.__docgenInfo={description:"Компонент перекрытия для отображения состояния загрузки.",displayName:"LoadingOverlay",props:{className:{defaultValue:null,description:"Пользовательский CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},fill:{defaultValue:{value:"true"},description:"Нужно ли заполнять родительский элемент с помощью `position: absolute`.",name:"fill",required:!1,type:{name:"boolean | undefined"}},spinnerProps:{defaultValue:{value:"{}"},description:"Свойства компонента Spinner.",name:"spinnerProps",required:!1,type:{name:"SpinnerProps | undefined"}},style:{defaultValue:null,description:"Пользовательские стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/loading-overlay/index.tsx#LoadingOverlay"]={docgenInfo:LoadingOverlay.__docgenInfo,name:"LoadingOverlay",path:"src/loading-overlay/index.tsx#LoadingOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,WV:()=>SpinnerSVG});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),colors=__webpack_require__("./src/colors/index.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spinner_module.Z,options);const spinner_spinner_module=spinner_module.Z&&spinner_module.Z.locals?spinner_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(spinner_spinner_module),DIAMETERS={s:20,m:48,l:80,small:20,medium:48,large:80};function Spinner({size="m",color="basic-blue",className,style,"data-testid":testId="spinner"}){const readySize=(0,lodash.has)(DIAMETERS,size)?size:"m",readyColor=colors.D.has(color)?color:"basic-blue";return(0,jsx_runtime.jsx)("div",{className,style,"data-testid":testId,children:(0,jsx_runtime.jsx)(SpinnerSVG,{size:readySize,color:readyColor,"data-testid":null})})}function SpinnerSVG({size="m",color="basic-blue",className,style,"data-testid":testId="spinner"}){const diameter=DIAMETERS[size],radius=diameter/2;return(0,jsx_runtime.jsx)("svg",{style,className:cx("spinner",`size-${size}`,className),viewBox:`0 0 ${diameter} ${diameter}`,width:diameter,height:diameter,stroke:colors.D.get(color),"data-testid":testId,children:(0,jsx_runtime.jsx)("circle",{className:cx("circle"),cx:radius,cy:radius,r:radius-1})})}Spinner.displayName="Spinner",SpinnerSVG.displayName="SpinnerSVG";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Компонент спиннера.",displayName:"Spinner",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{SpinnerSVG.displayName="SpinnerSVG",SpinnerSVG.__docgenInfo={description:"Спиннер.\nВыделен в отдельный компонент для возможности использования без обертки в виде div.",displayName:"SpinnerSVG",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/index.tsx#SpinnerSVG"]={docgenInfo:SpinnerSVG.__docgenInfo,name:"SpinnerSVG",path:"src/spinner/index.tsx#SpinnerSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/loading-overlay/loading-overlay.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".loading-overlay-module__loading-overlay__db3{display:flex;align-items:center;justify-content:center;background:#fff}.loading-overlay-module__fill__c61{position:absolute;top:0;right:0;bottom:0;left:0}","",{version:3,sources:["webpack://./src/loading-overlay/loading-overlay.module.scss"],names:[],mappings:"AAAA,8CACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CAGF,mCACE,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA",sourcesContent:[".loading-overlay {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n}\n\n.fill {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"loading-overlay":"loading-overlay-module__loading-overlay__db3",fill:"loading-overlay-module__fill__c61"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spinner-module__spinner__ea4{display:block}.spinner-module__spinner__ea4 .spinner-module__circle__f15{fill:none;stroke-width:2;stroke-linecap:round}.spinner-module__spinner__ea4.spinner-module__size-s__eb9{width:18px;height:18px}.spinner-module__spinner__ea4.spinner-module__size-s__eb9 .spinner-module__circle__f15{animation:spinner-module__dash-s__c10 600ms linear infinite}@keyframes spinner-module__dash-s__c10{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-module__spinner__ea4.spinner-module__size-m__cdb{width:46px;height:46px}.spinner-module__spinner__ea4.spinner-module__size-m__cdb .spinner-module__circle__f15{animation:spinner-module__dash-m__f70 750ms linear infinite}@keyframes spinner-module__dash-m__f70{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-module__spinner__ea4.spinner-module__size-l__f3d{width:78px;height:78px}.spinner-module__spinner__ea4.spinner-module__size-l__f3d .spinner-module__circle__f15{animation:spinner-module__dash-l__a37 950ms linear infinite}@keyframes spinner-module__dash-l__a37{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}.spinner-module__spinner__ea4.spinner-module__size-small__cf8{width:18px;height:18px}.spinner-module__spinner__ea4.spinner-module__size-small__cf8 .spinner-module__circle__f15{animation:spinner-module__dash-small__be4 600ms linear infinite}@keyframes spinner-module__dash-small__be4{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-module__spinner__ea4.spinner-module__size-medium__dd1{width:46px;height:46px}.spinner-module__spinner__ea4.spinner-module__size-medium__dd1 .spinner-module__circle__f15{animation:spinner-module__dash-medium__ac2 750ms linear infinite}@keyframes spinner-module__dash-medium__ac2{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-module__spinner__ea4.spinner-module__size-large__aa6{width:78px;height:78px}.spinner-module__spinner__ea4.spinner-module__size-large__aa6 .spinner-module__circle__f15{animation:spinner-module__dash-large__e53 950ms linear infinite}@keyframes spinner-module__dash-large__e53{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}@media all and (-ms-high-contrast: none){*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-s__eb9 .spinner-module__circle__f15{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-m__cdb .spinner-module__circle__f15{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-l__f3d .spinner-module__circle__f15{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-small__cf8 .spinner-module__circle__f15{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-medium__dd1 .spinner-module__circle__f15{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-large__aa6 .spinner-module__circle__f15{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}}@keyframes spinner-module__rotate__c5e{to{transform:rotate(360deg)}}","",{version:3,sources:["webpack://./src/spinner/spinner.module.scss"],names:[],mappings:"AAsBA,8BACE,aAAA,CACA,2DACE,SAAA,CACA,cAAA,CACA,oBAAA,CAKA,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,0CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,0CAAA,CACA,gCAAA,CAAA,CAhBN,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,4CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,4CAAA,CACA,iCAAA,CAAA,CAhBN,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,6CAAA,CACA,8BAAA,CAEF,IACE,0CAAA,CAEF,KACE,6CAAA,CACA,gCAAA,CAAA,CAhBN,8DACE,UAAA,CACA,WAAA,CACA,2FACE,+DAAA,CAEF,2CACE,GACE,0CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,0CAAA,CACA,gCAAA,CAAA,CAhBN,+DACE,UAAA,CACA,WAAA,CACA,4FACE,gEAAA,CAEF,4CACE,GACE,4CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,4CAAA,CACA,iCAAA,CAAA,CAhBN,8DACE,UAAA,CACA,WAAA,CACA,2FACE,+DAAA,CAEF,2CACE,GACE,6CAAA,CACA,8BAAA,CAEF,IACE,0CAAA,CAEF,KACE,6CAAA,CACA,gCAAA,CAAA,CAQV,yCAMI,8CAEE,wDAAA,CAEF,uGAEE,4CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,uGAEE,6CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,uGAEE,2CAAA,CACA,8BAAA,CAPF,8CAEE,wDAAA,CAEF,2GAEE,4CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,4GAEE,6CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,2GAEE,2CAAA,CACA,8BAAA,CAAA,CAKN,uCACE,GACE,wBAAA,CAAA",sourcesContent:["@use 'sass:map';\n\n$pi: 3.141592653589793;\n$sizes: (\n  s: 20,\n  m: 48,\n  l: 80,\n  // legacy, @todo удалить со временем:\n  small: 20,\n  medium: 48,\n  large: 80,\n);\n$durations: (\n  s: 600ms,\n  m: 750ms,\n  l: 950ms,\n  // legacy, @todo удалить со временем:\n  small: 600ms,\n  medium: 750ms,\n  large: 950ms,\n);\n\n.spinner {\n  display: block;\n  .circle {\n    fill: none;\n    stroke-width: 2;\n    stroke-linecap: round;\n  }\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n    &.size-#{$sizeKey} {\n      width: #{$diameter}px;\n      height: #{$diameter}px;\n      .circle {\n        animation: dash-#{$sizeKey} map.get($durations, $sizeKey) linear infinite;\n      }\n      @keyframes dash-#{$sizeKey} {\n        0% {\n          stroke-dasharray: $perimeter * 0.125, $perimeter * 0.875;\n          stroke-dashoffset: $perimeter * 0.25;\n        }\n        50% {\n          stroke-dasharray: $perimeter * 0.5, $perimeter * 0.5;\n        }\n        100% {\n          stroke-dasharray: $perimeter * 0.125, $perimeter * 0.875;\n          stroke-dashoffset: -$perimeter + ($perimeter * 0.25);\n        }\n      }\n    }\n  }\n}\n\n// fallback (в IE не поддерживается CSS-анимация SVG)\n@media all and (-ms-high-contrast: none) {\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n\n    // IE11 only\n    *::-ms-backdrop,\n    .spinner {\n      animation: rotate 2s linear infinite;\n    }\n    *::-ms-backdrop,\n    .spinner.size-#{$sizeKey} .circle {\n      stroke-dasharray: $perimeter * 0.75, $perimeter * 0.25;\n      stroke-dashoffset: $perimeter * 0.25;\n    }\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"spinner-module__spinner__ea4",circle:"spinner-module__circle__f15","size-s":"spinner-module__size-s__eb9","dash-s":"spinner-module__dash-s__c10","size-m":"spinner-module__size-m__cdb","dash-m":"spinner-module__dash-m__f70","size-l":"spinner-module__size-l__f3d","dash-l":"spinner-module__dash-l__a37","size-small":"spinner-module__size-small__cf8","dash-small":"spinner-module__dash-small__be4","size-medium":"spinner-module__size-medium__dd1","dash-medium":"spinner-module__dash-medium__ac2","size-large":"spinner-module__size-large__aa6","dash-large":"spinner-module__dash-large__e53",rotate:"spinner-module__rotate__c5e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);