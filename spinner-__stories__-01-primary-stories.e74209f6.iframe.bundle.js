/*! For license information please see spinner-__stories__-01-primary-stories.e74209f6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[1659],{"./src/spinner/__stories__/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/spinner/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Spinner",component:_sima_land_ui_nucleons_spinner__WEBPACK_IMPORTED_MODULE_0__.$j,parameters:{storySource:{source:"import { Spinner } from '@sima-land/ui-nucleons/spinner';\n\nexport default {\n  title: 'common/Spinner',\n  component: Spinner,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  return (\n    <>\n      <Spinner size='m' />\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:17},startBody:{col:7,line:11},endBody:{col:1,line:17}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_spinner__WEBPACK_IMPORTED_MODULE_0__.$j,{size:"m"})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Spinner size='m' />\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2","additional-crimson":"#f4446b"}))},"./src/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,WV:()=>SpinnerSVG});var colors=__webpack_require__("./src/colors/index.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),spinner_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spinner_m.Z,options);const spinner_spinner_m=spinner_m.Z&&spinner_m.Z.locals?spinner_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(spinner_spinner_m),SPINNER_DIAMETER={s:20,m:48,l:80},DEFAULT_COLOR="basic-blue";function Spinner({size="m",color=DEFAULT_COLOR,className,style,"data-testid":testId="spinner"}){const readySize=Object.keys(SPINNER_DIAMETER).includes(size)?size:"m",readyColor=colors.D.has(color)?color:DEFAULT_COLOR;return(0,jsx_runtime.jsx)("div",{className,style,"data-testid":testId,children:(0,jsx_runtime.jsx)(SpinnerSVG,{size:readySize,color:readyColor,"data-testid":null})})}function SpinnerSVG({size="m",color=DEFAULT_COLOR,className,style,"data-testid":testId="spinner"}){const diameter=SPINNER_DIAMETER[size],radius=diameter/2;return(0,jsx_runtime.jsx)("svg",{style,className:cx("spinner",`size-${size}`,className),viewBox:`0 0 ${diameter} ${diameter}`,width:diameter,height:diameter,stroke:colors.D.get(color),"data-testid":testId,children:(0,jsx_runtime.jsx)("circle",{className:cx("circle"),cx:radius,cy:radius,r:radius-1})})}try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Спиннер - визуальный индикатор загрузки.",displayName:"Spinner",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'},{value:'"additional-crimson"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/spinner/spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{SpinnerSVG.displayName="SpinnerSVG",SpinnerSVG.__docgenInfo={description:"Спиннер.\nВыделен в отдельный компонент для возможности использования без обертки в виде div.",displayName:"SpinnerSVG",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'},{value:'"additional-crimson"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/spinner.tsx#SpinnerSVG"]={docgenInfo:SpinnerSVG.__docgenInfo,name:"SpinnerSVG",path:"src/spinner/spinner.tsx#SpinnerSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spinner-m__spinner__e19{display:block}.spinner-m__spinner__e19 .spinner-m__circle__add{fill:none;stroke-width:2;stroke-linecap:round}.spinner-m__spinner__e19.spinner-m__size-s__f20{width:18px;height:18px}.spinner-m__spinner__e19.spinner-m__size-s__f20 .spinner-m__circle__add{animation:spinner-m__dash-s__d9f 600ms linear infinite}@keyframes spinner-m__dash-s__d9f{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-m__spinner__e19.spinner-m__size-m__d54{width:46px;height:46px}.spinner-m__spinner__e19.spinner-m__size-m__d54 .spinner-m__circle__add{animation:spinner-m__dash-m__dd6 750ms linear infinite}@keyframes spinner-m__dash-m__dd6{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-m__spinner__e19.spinner-m__size-l__fc8{width:78px;height:78px}.spinner-m__spinner__e19.spinner-m__size-l__fc8 .spinner-m__circle__add{animation:spinner-m__dash-l__bcc 950ms linear infinite}@keyframes spinner-m__dash-l__bcc{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}.spinner-m__spinner__e19.spinner-m__size-small__bdd{width:18px;height:18px}.spinner-m__spinner__e19.spinner-m__size-small__bdd .spinner-m__circle__add{animation:spinner-m__dash-small__f8c 600ms linear infinite}@keyframes spinner-m__dash-small__f8c{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-m__spinner__e19.spinner-m__size-medium__bae{width:46px;height:46px}.spinner-m__spinner__e19.spinner-m__size-medium__bae .spinner-m__circle__add{animation:spinner-m__dash-medium__b31 750ms linear infinite}@keyframes spinner-m__dash-medium__b31{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-m__spinner__e19.spinner-m__size-large__fdf{width:78px;height:78px}.spinner-m__spinner__e19.spinner-m__size-large__fdf .spinner-m__circle__add{animation:spinner-m__dash-large__def 950ms linear infinite}@keyframes spinner-m__dash-large__def{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}@media all and (-ms-high-contrast: none){*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-s__f20 .spinner-m__circle__add{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-m__d54 .spinner-m__circle__add{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-l__fc8 .spinner-m__circle__add{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-small__bdd .spinner-m__circle__add{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-medium__bae .spinner-m__circle__add{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-m__spinner__e19{animation:spinner-m__rotate__b9d 2s linear infinite}*::-ms-backdrop,.spinner-m__spinner__e19.spinner-m__size-large__fdf .spinner-m__circle__add{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}}@keyframes spinner-m__rotate__b9d{to{transform:rotate(360deg)}}","",{version:3,sources:["webpack://./src/spinner/spinner.m.scss"],names:[],mappings:"AAsBA,yBACE,aAAA,CACA,iDACE,SAAA,CACA,cAAA,CACA,oBAAA,CAKA,gDACE,UAAA,CACA,WAAA,CACA,wEACE,sDAAA,CAEF,kCACE,GACE,0CACE,CAEF,+BAAA,CAEF,IACE,4CACE,CAGJ,KACE,0CACE,CAEF,gCAAA,CAAA,CAtBN,gDACE,UAAA,CACA,WAAA,CACA,wEACE,sDAAA,CAEF,kCACE,GACE,4CACE,CAEF,+BAAA,CAEF,IACE,4CACE,CAGJ,KACE,4CACE,CAEF,iCAAA,CAAA,CAtBN,gDACE,UAAA,CACA,WAAA,CACA,wEACE,sDAAA,CAEF,kCACE,GACE,6CACE,CAEF,8BAAA,CAEF,IACE,0CACE,CAGJ,KACE,6CACE,CAEF,gCAAA,CAAA,CAtBN,oDACE,UAAA,CACA,WAAA,CACA,4EACE,0DAAA,CAEF,sCACE,GACE,0CACE,CAEF,+BAAA,CAEF,IACE,4CACE,CAGJ,KACE,0CACE,CAEF,gCAAA,CAAA,CAtBN,qDACE,UAAA,CACA,WAAA,CACA,6EACE,2DAAA,CAEF,uCACE,GACE,4CACE,CAEF,+BAAA,CAEF,IACE,4CACE,CAGJ,KACE,4CACE,CAEF,iCAAA,CAAA,CAtBN,oDACE,UAAA,CACA,WAAA,CACA,4EACE,0DAAA,CAEF,sCACE,GACE,6CACE,CAEF,8BAAA,CAEF,IACE,0CACE,CAGJ,KACE,6CACE,CAEF,gCAAA,CAAA,CAQV,yCAMI,yCAEE,mDAAA,CAEF,wFAEE,4CACE,CAEF,+BAAA,CATF,yCAEE,mDAAA,CAEF,wFAEE,6CACE,CAEF,+BAAA,CATF,yCAEE,mDAAA,CAEF,wFAEE,2CACE,CAEF,8BAAA,CATF,yCAEE,mDAAA,CAEF,4FAEE,4CACE,CAEF,+BAAA,CATF,yCAEE,mDAAA,CAEF,6FAEE,6CACE,CAEF,+BAAA,CATF,yCAEE,mDAAA,CAEF,4FAEE,2CACE,CAEF,8BAAA,CAAA,CAKN,kCACE,GACE,wBAAA,CAAA",sourcesContent:["@use 'sass:map';\n\n$pi: 3.141592653589793;\n$sizes: (\n  s: 20,\n  m: 48,\n  l: 80,\n  // legacy, @todo удалить со временем:\n  small: 20,\n  medium: 48,\n  large: 80,\n);\n$durations: (\n  s: 600ms,\n  m: 750ms,\n  l: 950ms,\n  // legacy, @todo удалить со временем:\n  small: 600ms,\n  medium: 750ms,\n  large: 950ms,\n);\n\n.spinner {\n  display: block;\n  .circle {\n    fill: none;\n    stroke-width: 2;\n    stroke-linecap: round;\n  }\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n    &.size-#{$sizeKey} {\n      width: #{$diameter}px;\n      height: #{$diameter}px;\n      .circle {\n        animation: dash-#{$sizeKey} map.get($durations, $sizeKey) linear infinite;\n      }\n      @keyframes dash-#{$sizeKey} {\n        0% {\n          stroke-dasharray:\n            $perimeter * 0.125,\n            $perimeter * 0.875;\n          stroke-dashoffset: $perimeter * 0.25;\n        }\n        50% {\n          stroke-dasharray:\n            $perimeter * 0.5,\n            $perimeter * 0.5;\n        }\n        100% {\n          stroke-dasharray:\n            $perimeter * 0.125,\n            $perimeter * 0.875;\n          stroke-dashoffset: -$perimeter + ($perimeter * 0.25);\n        }\n      }\n    }\n  }\n}\n\n// fallback (в IE не поддерживается CSS-анимация SVG)\n@media all and (-ms-high-contrast: none) {\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n\n    // IE11 only\n    *::-ms-backdrop,\n    .spinner {\n      animation: rotate 2s linear infinite;\n    }\n    *::-ms-backdrop,\n    .spinner.size-#{$sizeKey} .circle {\n      stroke-dasharray:\n        $perimeter * 0.75,\n        $perimeter * 0.25;\n      stroke-dashoffset: $perimeter * 0.25;\n    }\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"spinner-m__spinner__e19",circle:"spinner-m__circle__add","size-s":"spinner-m__size-s__f20","dash-s":"spinner-m__dash-s__d9f","size-m":"spinner-m__size-m__d54","dash-m":"spinner-m__dash-m__dd6","size-l":"spinner-m__size-l__fc8","dash-l":"spinner-m__dash-l__bcc","size-small":"spinner-m__size-small__bdd","dash-small":"spinner-m__dash-small__f8c","size-medium":"spinner-m__size-medium__bae","dash-medium":"spinner-m__dash-medium__b31","size-large":"spinner-m__size-large__fdf","dash-large":"spinner-m__dash-large__def",rotate:"spinner-m__rotate__b9d"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);