"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6765],{"./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ye:()=>PageScrollLock,kI:()=>BSL_IGNORE_ATTR});var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLock{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.Qp,enableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1}},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>body_scroll_lock.kI,RA:()=>PageScrollProvider,PP:()=>usePageScrollLock});var body_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageScrollContext=(0,react.createContext)(null),DEFAULTS={adapter:(element,options)=>new body_scroll_lock.Ye(element,options)};function PageScrollProvider({children,adapter}){if(null!==(0,react.useContext)(PageScrollContext))throw Error("PageScrollContext: only one provider allowed in jsx tree");return(0,jsx_runtime.jsx)(PageScrollContext.Provider,{value:{adapter},children})}function usePageScrollContext(){return(0,react.useContext)(PageScrollContext)||DEFAULTS}PageScrollProvider.displayName="PageScrollProvider";try{PageScrollProvider.displayName="PageScrollProvider",PageScrollProvider.__docgenInfo={description:"Провайдер реализации блокировки прокрутки.",displayName:"PageScrollProvider",props:{adapter:{defaultValue:null,description:"",name:"adapter",required:!0,type:{name:"PageScrollLockAdapterFactory"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"]={docgenInfo:PageScrollProvider.__docgenInfo,name:"PageScrollProvider",path:"src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"})}catch(__react_docgen_typescript_loader_error){}try{usePageScrollContext.displayName="usePageScrollContext",usePageScrollContext.__docgenInfo={description:"Хук использования реализации блокировки прокрутки.",displayName:"usePageScrollContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"]={docgenInfo:usePageScrollContext.__docgenInfo,name:"usePageScrollContext",path:"src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"})}catch(__react_docgen_typescript_loader_error){}const hook_DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options=hook_DEFAULTS){const{adapter}=usePageScrollContext();(0,hooks.LI)((()=>{const element=ref.current;if(element&&options.lockEnabled){const pageScroll=adapter(element,options);return pageScroll.lock(),()=>pageScroll.unlock()}}),[options?.lockEnabled,options?.reserveScrollBarGap])}},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S_:()=>DesktopLayout,Ar:()=>Layout,nb:()=>MobileLayout});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,options);const layout_layout_module=layout_module.Z&&layout_module.Z.locals?layout_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(layout_layout_module);function Layout({children,className,disabledOn=[],rootRef,...rest}){const rootClassName=cx("layout",disabledOn.length>0&&disabledOn.map((key=>`disabled-${key}`)),className);return(0,jsx_runtime.jsx)("div",{...rest,ref:rootRef,className:rootClassName,children})}Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"Контейнер, формирующий отступы по горизонтали в соответствии с дизайн-гайдами.",displayName:"Layout",props:{disabledOn:{defaultValue:{value:"[]"},description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/layout/layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),legacy_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.module.scss"),legacy_module_options={};legacy_module_options.styleTagTransform=styleTagTransform_default(),legacy_module_options.setAttributes=setAttributesWithoutAttributes_default(),legacy_module_options.insert=insertBySelector_default().bind(null,"head"),legacy_module_options.domAPI=styleDomAPI_default(),legacy_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(legacy_module.Z,legacy_module_options);const layout_legacy_module=legacy_module.Z&&legacy_module.Z.locals?legacy_module.Z.locals:void 0,legacy_cx=bind_default().bind(layout_legacy_module),createLayout=(specificClass,displayName)=>{const Component=(0,react.forwardRef)((({className,element:Element="div",disabledOn=[],...restProps},ref)=>(0,jsx_runtime.jsx)(Element,{...restProps,ref,className:legacy_cx("layout",specificClass,className,disabledOn.map((key=>`disabled-${key}`)))})));return Component.displayName=displayName,Component},DesktopLayout=createLayout("desktop","DesktopLayout"),MobileLayout=createLayout("mobile","MobileLayout");try{DesktopLayout.displayName="DesktopLayout",DesktopLayout.__docgenInfo={description:"",displayName:"DesktopLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#DesktopLayout"]={docgenInfo:DesktopLayout.__docgenInfo,name:"DesktopLayout",path:"src/layout/legacy.tsx#DesktopLayout"})}catch(__react_docgen_typescript_loader_error){}try{MobileLayout.displayName="MobileLayout",MobileLayout.__docgenInfo={description:"",displayName:"MobileLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#MobileLayout"]={docgenInfo:MobileLayout.__docgenInfo,name:"MobileLayout",path:"src/layout/legacy.tsx#MobileLayout"})}catch(__react_docgen_typescript_loader_error){}},"./src/touch-slider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>TouchSlider});var layout=__webpack_require__("./src/layout/index.ts"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),touch_slider_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/touch-slider/touch-slider.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(touch_slider_module.Z,options);const touch_slider_touch_slider_module=touch_slider_module.Z&&touch_slider_module.Z.locals?touch_slider_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const TouchSlider=({children})=>(0,jsx_runtime.jsx)(layout.nb,{children:(0,jsx_runtime.jsx)("div",{className:touch_slider_touch_slider_module.outer,[page_scroll_lock.kI]:!0,children:(0,jsx_runtime.jsx)("div",{className:touch_slider_touch_slider_module.inner,children})})});TouchSlider.displayName="TouchSlider";try{TouchSlider.displayName="TouchSlider",TouchSlider.__docgenInfo={description:"Компонент блока, прокручиваемого по горизонтали. Реализует отступы MobileLayout.\nПредназначен для использования на странице без дополнительных отступов по горизонтали.",displayName:"TouchSlider",props:{children:{defaultValue:null,description:"Прокручиваемое содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/touch-slider/index.tsx#TouchSlider"]={docgenInfo:TouchSlider.__docgenInfo,name:"TouchSlider",path:"src/touch-slider/index.tsx#TouchSlider"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(max-width: 479px){.layout-module__layout__c86:not(.layout-module__disabled-mxs__cf3){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 480px)and (max-width: 719px){.layout-module__layout__c86:not(.layout-module__disabled-ms__de5){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 720px)and (max-width: 839px){.layout-module__layout__c86:not(.layout-module__disabled-mm__f86){width:100%;margin-left:auto;margin-right:auto;max-width:656px}}@media(min-width: 840px)and (max-width: 1023px){.layout-module__layout__c86:not(.layout-module__disabled-ml__afc){width:100%;margin-left:auto;margin-right:auto;max-width:672px}}@media(min-width: 1024px)and (max-width: 1279px){.layout-module__layout__c86:not(.layout-module__disabled-xs__d40){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1280px)and (max-width: 1439px){.layout-module__layout__c86:not(.layout-module__disabled-s__d87){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1440px)and (max-width: 1599px){.layout-module__layout__c86:not(.layout-module__disabled-m__d96){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1600px)and (max-width: 1919px){.layout-module__layout__c86:not(.layout-module__disabled-l__e65){width:100%;margin-left:auto;margin-right:auto;max-width:1472px}}@media(min-width: 1920px){.layout-module__layout__c86:not(.layout-module__disabled-xl__b5e){width:100%;margin-left:auto;margin-right:auto;max-width:1504px}}","",{version:3,sources:["webpack://./src/breakpoints.scss","webpack://./src/layout/layout.module.scss"],names:[],mappings:"AA6BI,yBCfA,mEAVF,UAAA,CAGA,gBAAA,CACA,iBAAA,CAQI,iBAAA,CACA,kBAAA,CAAA,CDYF,+CCPE,kEAlBJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAgBM,iBAAA,CACA,kBAAA,CAAA,CDIJ,+CCEE,kEA3BJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyBM,eAAA,CAAA,CDJJ,gDCUE,kEAnCJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAiCM,eAAA,CAAA,CDZJ,iDCkBE,kEA3CJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyCM,iBAAA,CACA,kBAAA,CAAA,CDrBJ,iDC2BE,iEApDJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAkDM,iBAAA,CACA,kBAAA,CAAA,CD9BJ,iDCoCE,iEA7DJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2DM,iBAAA,CACA,kBAAA,CAAA,CDvCJ,iDC6CE,iEAtEJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAoEM,gBAAA,CAAA,CDzDJ,0BC8DA,kEA7EF,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2EI,gBAAA,CAAA",sourcesContent:['$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"@use '../breakpoints';\n\n@mixin layout {\n  // ВАЖНО: не используем 100vw так как при использовании 100vw не вычитается ширина полосы прокрутки страницы\n  width: 100%;\n\n  // центрируем\n  margin-left: auto;\n  margin-right: auto;\n}\n\n// ВАЖНО: не прокидываем никаких кастомных свойств внутрь чтобы ими не воспользовались\n.layout {\n  @include breakpoints.down('ms') {\n    &:not(.disabled-mxs) {\n      @include layout;\n      padding-left: 16px;\n      padding-right: 16px;\n    }\n  }\n  @include breakpoints.up('ms') {\n    @include breakpoints.down('mm') {\n      &:not(.disabled-ms) {\n        @include layout;\n        padding-left: 16px;\n        padding-right: 16px;\n      }\n    }\n  }\n  @include breakpoints.up('mm') {\n    @include breakpoints.down('ml') {\n      &:not(.disabled-mm) {\n        @include layout;\n        max-width: 656px;\n      }\n    }\n  }\n  @include breakpoints.up('ml') {\n    @include breakpoints.down('xs') {\n      &:not(.disabled-ml) {\n        @include layout;\n        max-width: 672px;\n      }\n    }\n  }\n  @include breakpoints.up('xs') {\n    @include breakpoints.down('s') {\n      &:not(.disabled-xs) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('s') {\n    @include breakpoints.down('m') {\n      &:not(.disabled-s) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('m') {\n    @include breakpoints.down('l') {\n      &:not(.disabled-m) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('l') {\n    @include breakpoints.down('xl') {\n      &:not(.disabled-l) {\n        @include layout;\n        max-width: 1472px;\n      }\n    }\n  }\n  @include breakpoints.up('xl') {\n    &:not(.disabled-xl) {\n      @include layout;\n      max-width: 1504px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"layout-module__layout__c86","disabled-mxs":"layout-module__disabled-mxs__cf3","disabled-ms":"layout-module__disabled-ms__de5","disabled-mm":"layout-module__disabled-mm__f86","disabled-ml":"layout-module__disabled-ml__afc","disabled-xs":"layout-module__disabled-xs__d40","disabled-s":"layout-module__disabled-s__d87","disabled-m":"layout-module__disabled-m__d96","disabled-l":"layout-module__disabled-l__e65","disabled-xl":"layout-module__disabled-xl__b5e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".legacy-module__layout__bb0{width:var(--l-width);margin:0 var(--l-gutter)}@media(min-width: 0){.legacy-module__layout__bb0.legacy-module__disabled-mxs__da1{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-mxs__da1){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 480px){.legacy-module__layout__bb0.legacy-module__disabled-ms__c6b{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-ms__c6b){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 720px){.legacy-module__layout__bb0.legacy-module__disabled-mm__a16{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-mm__a16){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 840px){.legacy-module__layout__bb0.legacy-module__disabled-ml__d02{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-ml__d02){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1024px){.legacy-module__layout__bb0.legacy-module__disabled-xs__ed8{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-xs__ed8){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1280px){.legacy-module__layout__bb0.legacy-module__disabled-s__cd8{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-s__cd8){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1440px){.legacy-module__layout__bb0.legacy-module__disabled-m__b1e{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-m__b1e){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1600px){.legacy-module__layout__bb0.legacy-module__disabled-l__ecf{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-l__ecf){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1920px){.legacy-module__layout__bb0.legacy-module__disabled-xl__e0c{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-xl__e0c){width:var(--l-width);margin:0 var(--l-gutter)}}.legacy-module__mobile__b07{--l-gutter: 16px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 720px){.legacy-module__mobile__b07{--l-width: 656px;--l-gutter: auto}}@media(min-width: 840px){.legacy-module__mobile__b07{--l-width: 672px;--l-gutter: auto}}@media(min-width: 1024px){.legacy-module__mobile__b07{--l-width: 792px;--l-gutter: auto}}.legacy-module__desktop__b69{min-width:896px;--l-gutter: 64px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 1600px){.legacy-module__desktop__b69{--l-width: 1472px;--l-gutter: auto}}@media(min-width: 1920px){.legacy-module__desktop__b69{--l-width: 1504px;--l-gutter: auto}}","",{version:3,sources:["webpack://./src/layout/legacy.module.scss","webpack://./src/breakpoints.scss"],names:[],mappings:"AAEA,4BACE,oBAAA,CACA,wBAAA,CCeE,qBDZE,6DACE,UAAA,CACA,QAAA,CAEF,mEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CAMR,4BACE,gBAAA,CACA,8CAAA,CCFE,yBAAA,4BDIA,gBAAA,CACA,gBAAA,CAAA,CCLA,yBAAA,4BDQA,gBAAA,CACA,gBAAA,CAAA,CCTA,0BAAA,4BDYA,gBAAA,CACA,gBAAA,CAAA,CAIJ,6BACE,eAAA,CACA,gBAAA,CACA,8CAAA,CCpBE,0BDiBJ,6BAKI,iBAAA,CACA,gBAAA,CAAA,CCvBA,0BDiBJ,6BASI,iBAAA,CACA,gBAAA,CAAA",sourcesContent:["@use '../breakpoints';\n\n.layout {\n  width: var(--l-width);\n  margin: 0 var(--l-gutter);\n  @each $key, $val in breakpoints.$map {\n    @include breakpoints.up($key) {\n      &.disabled-#{$key} {\n        width: auto;\n        margin: 0;\n      }\n      &:not(.disabled-#{$key}) {\n        width: var(--l-width);\n        margin: 0 var(--l-gutter);\n      }\n    }\n  }\n}\n\n.mobile {\n  --l-gutter: 16px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('mm') {\n    --l-width: 656px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('ml') {\n    --l-width: 672px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xs') {\n    --l-width: 792px;\n    --l-gutter: auto;\n  }\n}\n\n.desktop {\n  min-width: 896px;\n  --l-gutter: 64px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('l') {\n    --l-width: 1472px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xl') {\n    --l-width: 1504px;\n    --l-gutter: auto;\n  }\n}\n",'$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"legacy-module__layout__bb0","disabled-mxs":"legacy-module__disabled-mxs__da1","disabled-ms":"legacy-module__disabled-ms__c6b","disabled-mm":"legacy-module__disabled-mm__a16","disabled-ml":"legacy-module__disabled-ml__d02","disabled-xs":"legacy-module__disabled-xs__ed8","disabled-s":"legacy-module__disabled-s__cd8","disabled-m":"legacy-module__disabled-m__b1e","disabled-l":"legacy-module__disabled-l__ecf","disabled-xl":"legacy-module__disabled-xl__e0c",mobile:"legacy-module__mobile__b07",desktop:"legacy-module__desktop__b69"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/touch-slider/touch-slider.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".touch-slider-module__outer__caa{display:flex;overflow:hidden;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.touch-slider-module__outer__caa::-webkit-scrollbar{display:none}.touch-slider-module__inner__dea{display:flex}@media(max-width: 719px){.touch-slider-module__outer__caa{--slider-gutter: calc((100vw - var(--l-width)) / 2);margin:0 calc(-1*var(--slider-gutter))}.touch-slider-module__inner__dea{padding:0 var(--slider-gutter)}}","",{version:3,sources:["webpack://./src/touch-slider/touch-slider.module.scss","webpack://./src/utils.scss","webpack://./src/breakpoints.scss"],names:[],mappings:"AAGA,iCACE,YAAA,CACA,eAAA,CACA,eAAA,CACA,gCAAA,CCDA,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,oDACE,YAAA,CDCJ,iCACE,YAAA,CEiBE,yBFbF,iCACE,mDAAA,CACA,sCAAA,CAEF,iCACE,8BAAA,CAAA",sourcesContent:["@use '../breakpoints';\n@use '../utils';\n\n.outer {\n  display: flex;\n  overflow: hidden;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  @include utils.hidden-scrollbars;\n}\n\n.inner {\n  display: flex;\n}\n\n@include breakpoints.down('mm') {\n  .outer {\n    --slider-gutter: calc((100vw - var(--l-width)) / 2);\n    margin: 0 calc(-1 * var(--slider-gutter));\n  }\n  .inner {\n    padding: 0 var(--slider-gutter);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n",'$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={outer:"touch-slider-module__outer__caa",inner:"touch-slider-module__inner__dea"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);