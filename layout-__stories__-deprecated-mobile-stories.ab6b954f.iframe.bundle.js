/*! For license information please see layout-__stories__-deprecated-mobile-stories.ab6b954f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[201],{"./src/layout/__stories__/deprecated-mobile.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DisableOnBreakpoint:()=>DisableOnBreakpoint,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/layout/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"deprecated/MobileLayout",component:_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,parameters:{storySource:{source:"import { MobileLayout } from '@sima-land/ui-nucleons/layout';\n\nexport default {\n  title: 'deprecated/MobileLayout',\n  component: MobileLayout,\n  parameters: {\n    layout: 'fullscreen',\n  },\n};\n\nconst SomeContent = () => (\n  <div style={{ background: 'rgb(207, 232, 252)' }}>\n    <h2>Контент ограниченный layout`ом</h2>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!</p>\n  </div>\n);\n\nexport const Primary = () => (\n  <>\n    <MobileLayout>\n      <h2>Простой пример</h2>\n    </MobileLayout>\n\n    <MobileLayout>\n      <SomeContent />\n    </MobileLayout>\n  </>\n);\n\nPrimary.storyName = 'Простой пример';\n\nexport const DisableOnBreakpoint = () => (\n  <>\n    <MobileLayout>\n      <h2>Отключение на определенных разрешениях</h2>\n      <p>Необходимо изменить ширину окна для эффекта</p>\n    </MobileLayout>\n\n    <MobileLayout disabledOn={['s', 'm', 'l', 'xl']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['xs']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['ml']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['mm']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['ms']}>\n      <SomeContent />\n    </MobileLayout>\n  </>\n);\n\nDisableOnBreakpoint.storyName = \"Отключение не определённом breakpoint'е\";\n",locationsMap:{primary:{startLoc:{col:23,line:18},endLoc:{col:1,line:28},startBody:{col:23,line:18},endBody:{col:1,line:28}},"disable-on-breakpoint":{startLoc:{col:35,line:32},endLoc:{col:1,line:55},startBody:{col:35,line:32},endBody:{col:1,line:55}}}},layout:"fullscreen"}},SomeContent=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{background:"rgb(207, 232, 252)"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Контент ограниченный layout`ом"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, nostrum!"})]}),Primary=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Простой пример"})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})})]});Primary.storyName="Простой пример";const DisableOnBreakpoint=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2",{children:"Отключение на определенных разрешениях"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{children:"Необходимо изменить ширину окна для эффекта"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{disabledOn:["s","m","l","xl"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{disabledOn:["xs"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{disabledOn:["ml"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{disabledOn:["mm"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_0__.nb,{disabledOn:["ms"],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SomeContent,{})})]});DisableOnBreakpoint.storyName="Отключение не определённом breakpoint'е",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"() => <>\n    <MobileLayout>\n      <h2>Простой пример</h2>\n    </MobileLayout>\n\n    <MobileLayout>\n      <SomeContent />\n    </MobileLayout>\n  </>",...Primary.parameters?.docs?.source}}},DisableOnBreakpoint.parameters={...DisableOnBreakpoint.parameters,docs:{...DisableOnBreakpoint.parameters?.docs,source:{originalSource:"() => <>\n    <MobileLayout>\n      <h2>Отключение на определенных разрешениях</h2>\n      <p>Необходимо изменить ширину окна для эффекта</p>\n    </MobileLayout>\n\n    <MobileLayout disabledOn={['s', 'm', 'l', 'xl']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['xs']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['ml']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['mm']}>\n      <SomeContent />\n    </MobileLayout>\n    <MobileLayout disabledOn={['ms']}>\n      <SomeContent />\n    </MobileLayout>\n  </>",...DisableOnBreakpoint.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DisableOnBreakpoint"]},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S_:()=>DesktopLayout,Ar:()=>Layout,nb:()=>MobileLayout});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_m.Z,options);const layout_layout_m=layout_m.Z&&layout_m.Z.locals?layout_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(layout_layout_m);function Layout({children,className,disabledOn=[],rootRef,...rest}){const rootClassName=cx("layout",disabledOn.length>0&&disabledOn.map((key=>`disabled-${key}`)),className);return(0,jsx_runtime.jsx)("div",{...rest,ref:rootRef,className:rootClassName,children})}try{Layout.displayName="Layout",Layout.__docgenInfo={description:"Контейнер, формирующий отступы по горизонтали в соответствии с дизайн-гайдами.",displayName:"Layout",props:{disabledOn:{defaultValue:{value:"[]"},description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},rootRef:{defaultValue:null,description:"Реф корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/layout/layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),legacy_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.m.scss"),legacy_m_options={};legacy_m_options.styleTagTransform=styleTagTransform_default(),legacy_m_options.setAttributes=setAttributesWithoutAttributes_default(),legacy_m_options.insert=insertBySelector_default().bind(null,"head"),legacy_m_options.domAPI=styleDomAPI_default(),legacy_m_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(legacy_m.Z,legacy_m_options);const layout_legacy_m=legacy_m.Z&&legacy_m.Z.locals?legacy_m.Z.locals:void 0,legacy_cx=bind_default().bind(layout_legacy_m),createLayout=(specificClass,displayName)=>{const Component=(0,react.forwardRef)((({className,element:Element="div",disabledOn=[],...restProps},ref)=>(0,jsx_runtime.jsx)(Element,{...restProps,ref,className:legacy_cx("layout",specificClass,className,disabledOn.map((key=>`disabled-${key}`)))})));return Component.displayName=displayName,Component},DesktopLayout=createLayout("desktop","DesktopLayout"),MobileLayout=createLayout("mobile","MobileLayout");try{DesktopLayout.displayName="DesktopLayout",DesktopLayout.__docgenInfo={description:"",displayName:"DesktopLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#DesktopLayout"]={docgenInfo:DesktopLayout.__docgenInfo,name:"DesktopLayout",path:"src/layout/legacy.tsx#DesktopLayout"})}catch(__react_docgen_typescript_loader_error){}try{MobileLayout.displayName="MobileLayout",MobileLayout.__docgenInfo={description:"",displayName:"MobileLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#MobileLayout"]={docgenInfo:MobileLayout.__docgenInfo,name:"MobileLayout",path:"src/layout/legacy.tsx#MobileLayout"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(max-width: 479px){.layout-m__layout__c04:not(.layout-m__disabled-mxs__c3f){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 480px)and (max-width: 719px){.layout-m__layout__c04:not(.layout-m__disabled-ms__fb8){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 720px)and (max-width: 839px){.layout-m__layout__c04:not(.layout-m__disabled-mm__b73){width:100%;margin-left:auto;margin-right:auto;max-width:656px}}@media(min-width: 840px)and (max-width: 1023px){.layout-m__layout__c04:not(.layout-m__disabled-ml__c33){width:100%;margin-left:auto;margin-right:auto;max-width:672px}}@media(min-width: 1024px)and (max-width: 1279px){.layout-m__layout__c04:not(.layout-m__disabled-xs__b97){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1280px)and (max-width: 1439px){.layout-m__layout__c04:not(.layout-m__disabled-s__bbe){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1440px)and (max-width: 1599px){.layout-m__layout__c04:not(.layout-m__disabled-m__d3e){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1600px)and (max-width: 1919px){.layout-m__layout__c04:not(.layout-m__disabled-l__d38){width:100%;margin-left:auto;margin-right:auto;max-width:1472px}}@media(min-width: 1920px){.layout-m__layout__c04:not(.layout-m__disabled-xl__d66){width:100%;margin-left:auto;margin-right:auto;max-width:1504px}}","",{version:3,sources:["webpack://./src/breakpoints.scss","webpack://./src/layout/layout.m.scss"],names:[],mappings:"AAiCI,yBCnBA,yDAVF,UAAA,CAGA,gBAAA,CACA,iBAAA,CAQI,iBAAA,CACA,kBAAA,CAAA,CDgBF,+CCXE,wDAlBJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAgBM,iBAAA,CACA,kBAAA,CAAA,CDQJ,+CCFE,wDA3BJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyBM,eAAA,CAAA,CAAA,gDAMF,wDAnCJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAiCM,eAAA,CAAA,CDRJ,iDCcE,wDA3CJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyCM,iBAAA,CACA,kBAAA,CAAA,CDjBJ,iDCuBE,uDApDJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAkDM,iBAAA,CACA,kBAAA,CAAA,CD1BJ,iDCgCE,uDA7DJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2DM,iBAAA,CACA,kBAAA,CAAA,CDnCJ,iDCyCE,uDAtEJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAoEM,gBAAA,CAAA,CDrDJ,0BC0DA,wDA7EF,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2EI,gBAAA,CAAA",sourcesContent:['/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"@use '../breakpoints';\n\n@mixin layout {\n  // ВАЖНО: не используем 100vw так как при использовании 100vw не вычитается ширина полосы прокрутки страницы\n  width: 100%;\n\n  // центрируем\n  margin-left: auto;\n  margin-right: auto;\n}\n\n// ВАЖНО: не прокидываем никаких кастомных свойств внутрь чтобы ими не воспользовались\n.layout {\n  @include breakpoints.down('ms') {\n    &:not(.disabled-mxs) {\n      @include layout;\n      padding-left: 16px;\n      padding-right: 16px;\n    }\n  }\n  @include breakpoints.up('ms') {\n    @include breakpoints.down('mm') {\n      &:not(.disabled-ms) {\n        @include layout;\n        padding-left: 16px;\n        padding-right: 16px;\n      }\n    }\n  }\n  @include breakpoints.up('mm') {\n    @include breakpoints.down('ml') {\n      &:not(.disabled-mm) {\n        @include layout;\n        max-width: 656px;\n      }\n    }\n  }\n  @include breakpoints.up('ml') {\n    @include breakpoints.down('xs') {\n      &:not(.disabled-ml) {\n        @include layout;\n        max-width: 672px;\n      }\n    }\n  }\n  @include breakpoints.up('xs') {\n    @include breakpoints.down('s') {\n      &:not(.disabled-xs) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('s') {\n    @include breakpoints.down('m') {\n      &:not(.disabled-s) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('m') {\n    @include breakpoints.down('l') {\n      &:not(.disabled-m) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('l') {\n    @include breakpoints.down('xl') {\n      &:not(.disabled-l) {\n        @include layout;\n        max-width: 1472px;\n      }\n    }\n  }\n  @include breakpoints.up('xl') {\n    &:not(.disabled-xl) {\n      @include layout;\n      max-width: 1504px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"layout-m__layout__c04","disabled-mxs":"layout-m__disabled-mxs__c3f","disabled-ms":"layout-m__disabled-ms__fb8","disabled-mm":"layout-m__disabled-mm__b73","disabled-ml":"layout-m__disabled-ml__c33","disabled-xs":"layout-m__disabled-xs__b97","disabled-s":"layout-m__disabled-s__bbe","disabled-m":"layout-m__disabled-m__d3e","disabled-l":"layout-m__disabled-l__d38","disabled-xl":"layout-m__disabled-xl__d66"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".legacy-m__layout__a34{width:var(--l-width);margin:0 var(--l-gutter)}@media(min-width: 0px){.legacy-m__layout__a34.legacy-m__disabled-mxs__a99{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-mxs__a99){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 480px){.legacy-m__layout__a34.legacy-m__disabled-ms__c30{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-ms__c30){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 720px){.legacy-m__layout__a34.legacy-m__disabled-mm__ea2{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-mm__ea2){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 840px){.legacy-m__layout__a34.legacy-m__disabled-ml__a40{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-ml__a40){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1024px){.legacy-m__layout__a34.legacy-m__disabled-xs__ec3{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-xs__ec3){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1280px){.legacy-m__layout__a34.legacy-m__disabled-s__b50{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-s__b50){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1440px){.legacy-m__layout__a34.legacy-m__disabled-m__dbe{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-m__dbe){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1600px){.legacy-m__layout__a34.legacy-m__disabled-l__ca3{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-l__ca3){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1920px){.legacy-m__layout__a34.legacy-m__disabled-xl__d87{width:auto;margin:0}.legacy-m__layout__a34:not(.legacy-m__disabled-xl__d87){width:var(--l-width);margin:0 var(--l-gutter)}}.legacy-m__mobile__ff2{--l-gutter: 16px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 720px){.legacy-m__mobile__ff2{--l-width: 656px;--l-gutter: auto}}@media(min-width: 840px){.legacy-m__mobile__ff2{--l-width: 672px;--l-gutter: auto}}@media(min-width: 1024px){.legacy-m__mobile__ff2{--l-width: 792px;--l-gutter: auto}}.legacy-m__desktop__af1{min-width:896px;--l-gutter: 64px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 1600px){.legacy-m__desktop__af1{--l-width: 1472px;--l-gutter: auto}}@media(min-width: 1920px){.legacy-m__desktop__af1{--l-width: 1504px;--l-gutter: auto}}","",{version:3,sources:["webpack://./src/layout/legacy.m.scss","webpack://./src/breakpoints.scss"],names:[],mappings:"AAEA,uBACE,oBAAA,CACA,wBAAA,CCmBE,uBDhBE,mDACE,UAAA,CACA,QAAA,CAEF,yDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,yBDhBE,kDACE,UAAA,CACA,QAAA,CAEF,wDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,yBDhBE,kDACE,UAAA,CACA,QAAA,CAEF,wDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,yBDhBE,kDACE,UAAA,CACA,QAAA,CAEF,wDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,0BDhBE,kDACE,UAAA,CACA,QAAA,CAEF,wDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,0BDhBE,iDACE,UAAA,CACA,QAAA,CAEF,uDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,0BDhBE,iDACE,UAAA,CACA,QAAA,CAEF,uDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,0BDhBE,iDACE,UAAA,CACA,QAAA,CAEF,uDACE,oBAAA,CACA,wBAAA,CAAA,CCUJ,0BDhBE,kDACE,UAAA,CACA,QAAA,CAEF,wDACE,oBAAA,CACA,wBAAA,CAAA,CAMR,uBACE,gBAAA,CACA,8CAAA,CCEE,yBDJJ,uBAII,gBAAA,CACA,gBAAA,CAAA,CCDA,yBDJJ,uBAQI,gBAAA,CACA,gBAAA,CAAA,CCLA,0BDJJ,uBAYI,gBAAA,CACA,gBAAA,CAAA,CAIJ,wBACE,eAAA,CACA,gBAAA,CACA,8CAAA,CChBE,0BDaJ,wBAKI,iBAAA,CACA,gBAAA,CAAA,CCnBA,0BDaJ,wBASI,iBAAA,CACA,gBAAA,CAAA",sourcesContent:["@use '../breakpoints';\n\n.layout {\n  width: var(--l-width);\n  margin: 0 var(--l-gutter);\n  @each $key, $val in breakpoints.$map {\n    @include breakpoints.up($key) {\n      &.disabled-#{$key} {\n        width: auto;\n        margin: 0;\n      }\n      &:not(.disabled-#{$key}) {\n        width: var(--l-width);\n        margin: 0 var(--l-gutter);\n      }\n    }\n  }\n}\n\n.mobile {\n  --l-gutter: 16px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('mm') {\n    --l-width: 656px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('ml') {\n    --l-width: 672px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xs') {\n    --l-width: 792px;\n    --l-gutter: auto;\n  }\n}\n\n.desktop {\n  min-width: 896px;\n  --l-gutter: 64px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('l') {\n    --l-width: 1472px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xl') {\n    --l-width: 1504px;\n    --l-gutter: auto;\n  }\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"legacy-m__layout__a34","disabled-mxs":"legacy-m__disabled-mxs__a99","disabled-ms":"legacy-m__disabled-ms__c30","disabled-mm":"legacy-m__disabled-mm__ea2","disabled-ml":"legacy-m__disabled-ml__a40","disabled-xs":"legacy-m__disabled-xs__ec3","disabled-s":"legacy-m__disabled-s__b50","disabled-m":"legacy-m__disabled-m__dbe","disabled-l":"legacy-m__disabled-l__ca3","disabled-xl":"legacy-m__disabled-xl__d87",mobile:"legacy-m__mobile__ff2",desktop:"legacy-m__desktop__af1"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);