"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3472],{"./src/bottom-bar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_E:()=>BottomBar});var utils=__webpack_require__("./src/clean-buttons/utils.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),bottom_bar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/bottom-bar/bottom-bar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(bottom_bar_module.Z,options);const bottom_bar_bottom_bar_module=bottom_bar_module.Z&&bottom_bar_module.Z.locals?bottom_bar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(bottom_bar_bottom_bar_module),BOTTOM_BAR_DEFAULTS={size:"m"};function BottomBar({size=BOTTOM_BAR_DEFAULTS.size,divided,children,className,rounds="m","data-testid":testId="bottom-bar",...rest}){const rootClassName=cx("root","unset"!==size&&`size-${size}`,{divided},"unset"!==rounds&&`rounds-${rounds}`,className);return(0,jsx_runtime.jsx)(utils.O.Provider,{value:size,children:(0,jsx_runtime.jsx)("div",{...rest,className:rootClassName,"data-testid":testId,children})})}BottomBar.displayName="BottomBar";try{BottomBar.displayName="BottomBar",BottomBar.__docgenInfo={description:"Боттом-бар - блок для вывода содержимого в нижней части карточек, модальных окон и других сложных элементов.",displayName:"BottomBar",props:{size:{defaultValue:{value:"m"},description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},divided:{defaultValue:null,description:"Нужна ли разделительная черта сверху.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:{value:"m"},description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"BottomBarStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/bottom-bar/bottom-bar.tsx#BottomBar"]={docgenInfo:BottomBar.__docgenInfo,name:"BottomBar",path:"src/bottom-bar/bottom-bar.tsx#BottomBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),spinner=__webpack_require__("./src/spinner/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_module.Z,options);const button_button_module=button_module.Z&&button_module.Z.locals?button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(button_button_module),Button=(0,react.forwardRef)((function Button({viewType="primary",icon:Icon,iconPosition="start",size="m",loading,disabled,className,children,"data-testid":testId="button",...restProps},ref){const hasIcon=Boolean(Icon),hasText=Boolean(children),rootClassName=cx("root",`size-${size}`,"unset"!==viewType&&`view-${viewType}`,loading&&"loading",disabled&&"disabled",hasIcon&&!hasText&&"icon-only",hasText&&hasIcon&&"start"===iconPosition&&"icon-start",hasText&&hasIcon&&"end"===iconPosition&&"icon-end",className),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Icon&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),children,Icon&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),loading&&(0,jsx_runtime.jsx)(spinner.WV,{size:"s",color:disabled||"secondary"===viewType?"basic-gray38":"basic-white",className:cx("spinner")})]});let result=null;return result="container"===restProps.appearance?(0,jsx_runtime.jsx)("div",{...restProps,ref,className:rootClassName,role:"button","data-testid":testId,children:content}):"link"===restProps.appearance?(0,jsx_runtime.jsx)("a",{...restProps,ref,className:rootClassName,"data-testid":testId,children:content}):(0,jsx_runtime.jsx)("button",{...restProps,ref,className:rootClassName,disabled,"data-testid":testId,children:content}),result}));try{Button.displayName="Button",Button.__docgenInfo={description:"Кнопка - запускает действие.",displayName:"Button",props:{viewType:{defaultValue:{value:"primary"},description:"Определяет внешний вид кнопки.",name:"viewType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"unset"'}]}},appearance:{defaultValue:null,description:"Определяет тип корневого элемента.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"link"'},{value:'"container"'}]}},icon:{defaultValue:null,description:"Иконка.",name:"icon",required:!1,type:{name:"ElementType<SVGAttributes<SVGSVGElement>> | undefined"}},iconPosition:{defaultValue:{value:"start"},description:"Позиция иконки относительно текста.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"end"'}]}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},loading:{defaultValue:null,description:"Нужно ли отображать состояние загрузки.",name:"loading",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключенное состояние.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"ButtonStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/clean-buttons/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>CleanGroupSizeContext});const CleanGroupSizeContext=(0,__webpack_require__("./node_modules/react/index.js").createContext)(void 0)},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/bottom-bar/bottom-bar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.bottom-bar-module__inner-border-top__f2d,.bottom-bar-module__root__a41.bottom-bar-module__divided__eaf::after{box-shadow:inset 0 1px 0 #e0e0e0}.bottom-bar-module__inner-border-bottom__e42{box-shadow:inset 0 -1px 0 #e0e0e0}.bottom-bar-module__inner-border-y__cfa{box-shadow:inset 0 1px 0 #e0e0e0,inset 0 -1px 0 #e0e0e0}.bottom-bar-module__root__a41{display:flex;align-items:center;position:relative;background:#fff;overflow:hidden;height:var(--bottom-bar-height);flex-shrink:0}.bottom-bar-module__root__a41.bottom-bar-module__divided__eaf::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.bottom-bar-module__size-s__bc2{--bottom-bar-height: 64px;--clean-group-height: 64px}.bottom-bar-module__size-m__bae{--bottom-bar-height: 72px;--clean-group-height: 72px}.bottom-bar-module__size-l__b55{--bottom-bar-height: 80px;--clean-group-height: 80px}.bottom-bar-module__rounds-s__a44{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.bottom-bar-module__rounds-m__e02{border-bottom-left-radius:8px;border-bottom-right-radius:8px}',"",{version:3,sources:["webpack://./src/styling/borders.module.scss","webpack://./src/bottom-bar/bottom-bar.module.scss","webpack://./src/bottom-bar/bottom-bar-util.scss","webpack://./src/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAEA,+GACE,gCAAA,CAGF,6CACE,iCAAA,CAGF,wCACE,uDAAA,CCRF,8BACE,YAAA,CACA,kBAAA,CACA,iBAAA,CACA,eAAA,CACA,eAAA,CACA,+BAAA,CACA,aAAA,CAGA,qEACE,UAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CAKJ,gCClBE,yBAAA,CCFA,0BAAA,CFwBF,gCCjBE,yBAAA,CCHA,0BAAA,CFwBF,gCChBE,yBAAA,CCJA,0BAAA,CFwBF,kCACE,6BAAA,CACA,8BAAA,CAGF,kCACE,6BAAA,CACA,8BAAA",sourcesContent:["@use '../colors';\n\n.inner-border-top {\n  box-shadow: inset 0 1px 0 colors.$basic-gray12;\n}\n\n.inner-border-bottom {\n  box-shadow: inset 0 -1px 0 colors.$basic-gray12;\n}\n\n.inner-border-y {\n  box-shadow: inset 0 1px 0 colors.$basic-gray12, inset 0 -1px 0 colors.$basic-gray12;\n}\n","@use './bottom-bar-util';\n@import '../styling/borders.module';\n\n.root {\n  display: flex;\n  align-items: center;\n  position: relative;\n  background: #fff;\n  overflow: hidden;\n  height: var(--bottom-bar-height);\n  flex-shrink: 0; // ВАЖНО: для использования в Modal\n\n  // чтобы разделитель был над контентом делаем через pseudo-элемент\n  &.divided::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    pointer-events: none;\n    @extend .inner-border-top;\n  }\n}\n\n.size-s {\n  @include bottom-bar-util.size-s;\n}\n\n.size-m {\n  @include bottom-bar-util.size-m;\n}\n\n.size-l {\n  @include bottom-bar-util.size-l;\n}\n\n.rounds-s {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n\n.rounds-m {\n  border-bottom-left-radius: 8px;\n  border-bottom-right-radius: 8px;\n}\n","@use '../clean-buttons/clean-buttons-util';\n\n$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --bottom-bar-height: #{$size-s-height};\n  @include clean-buttons-util.size-s;\n}\n\n@mixin size-m {\n  --bottom-bar-height: #{$size-m-height};\n  @include clean-buttons-util.size-m;\n}\n\n@mixin size-l {\n  --bottom-bar-height: #{$size-l-height};\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"inner-border-top":"bottom-bar-module__inner-border-top__f2d",root:"bottom-bar-module__root__a41",divided:"bottom-bar-module__divided__eaf","inner-border-bottom":"bottom-bar-module__inner-border-bottom__e42","inner-border-y":"bottom-bar-module__inner-border-y__cfa","size-s":"bottom-bar-module__size-s__bc2","size-m":"bottom-bar-module__size-m__bae","size-l":"bottom-bar-module__size-l__b55","rounds-s":"bottom-bar-module__rounds-s__a44","rounds-m":"bottom-bar-module__rounds-m__e02"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-module__root__ae8{position:relative;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;flex-wrap:nowrap;border-radius:4px;font-family:inherit;font-weight:600;box-sizing:border-box;padding:0;padding-left:var(--button-left-gutter, var(--button-gutter));padding-right:var(--button-right-gutter, var(--button-gutter));border:0;outline:0;text-decoration:none;overflow:hidden;font-size:var(--button-font-size);background:var(--button-background);color:var(--button-color);min-width:var(--button-min-size);height:var(--button-min-size);--button-icon-gutter: 12px}.button-module__root__ae8::-moz-focus-inner{border:0}.button-module__root__ae8:disabled,.button-module__root__ae8.button-module__disabled__cc7{pointer-events:none;color:var(--button-disabled-color, var(--button-color));background:var(--button-disabled-background, var(--button-background))}.button-module__root__ae8.button-module__loading__b23{color:rgba(0,0,0,0)}.button-module__root__ae8.button-module__loading__b23>:not(.button-module__spinner__c81){opacity:0;pointer-events:0}.button-module__root__ae8:not(:disabled):hover{cursor:pointer;color:var(--button-hover-color, var(--button-color));background:var(--button-hover-background, var(--button-background))}.button-module__size-xs__ed5{--button-min-size: 32px;--button-font-size: 14px;--button-line-height: 20px;--button-gutter: 12px}.button-module__size-s__fb7{--button-min-size: 40px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 20px}.button-module__size-m__e9f{--button-min-size: 48px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 24px}.button-module__icon-only__a54{--button-left-gutter: 0;--button-right-gutter: 0;--button-icon-gutter: 0}.button-module__icon-start__dfb{--button-left-gutter: 0}.button-module__icon-end__eb5{--button-right-gutter: 0}.button-module__view-primary__c2f{--button-color: #fff;--button-background: #1f84db;--button-hover-background: #1b75c2;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-secondary__bb7{--button-color: #212121;--button-background: #ebebeb;--button-hover-background: #e0e0e0;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-success__d3b{--button-color: #fff;--button-background: #09ab8b;--button-hover-background: #089176;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__icon__aba{margin:0 var(--button-icon-gutter);flex-shrink:0;fill:currentColor}.button-module__spinner__c81{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}","",{version:3,sources:["webpack://./src/button/button.module.scss","webpack://./src/button/button-util.scss"],names:[],mappings:"AAGA,0BACE,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,qBAAA,CACA,SAAA,CACA,4DAAA,CACA,8DAAA,CACA,QAAA,CACA,SAAA,CACA,oBAAA,CACA,eAAA,CACA,iCAAA,CACA,mCAAA,CACA,yBAAA,CACA,gCAAA,CACA,6BAAA,CACA,0BAAA,CACA,4CACE,QAAA,CAGF,0FAEE,mBAAA,CACA,uDAAA,CACA,sEAAA,CAEF,sDACE,mBAAA,CACA,yFACE,SAAA,CACA,gBAAA,CAGJ,+CACE,cAAA,CACA,oDAAA,CACA,mEAAA,CAKJ,6BCjDE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CDkDF,4BC9CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD+CF,4BC3CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD6CF,+BACE,uBAAA,CACA,wBAAA,CACA,uBAAA,CAGF,gCACE,uBAAA,CAGF,8BACE,wBAAA,CAIF,kCCxDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDwDF,oCCpDE,uBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDoDF,kCChDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDiDF,0BACE,kCAAA,CACA,aAAA,CACA,iBAAA,CAIF,6BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA",sourcesContent:["@use '../colors';\n@use './button-util';\n\n.root {\n  position: relative;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  border-radius: 4px;\n  font-family: inherit;\n  font-weight: 600;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: var(--button-left-gutter, var(--button-gutter));\n  padding-right: var(--button-right-gutter, var(--button-gutter));\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  overflow: hidden;\n  font-size: var(--button-font-size);\n  background: var(--button-background);\n  color: var(--button-color);\n  min-width: var(--button-min-size);\n  height: var(--button-min-size);\n  --button-icon-gutter: 12px;\n  &::-moz-focus-inner {\n    border: 0;\n  }\n  // @todo disabled для ссылок?\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    color: var(--button-disabled-color, var(--button-color));\n    background: var(--button-disabled-background, var(--button-background));\n  }\n  &.loading {\n    color: transparent;\n    > :not(.spinner) {\n      opacity: 0;\n      pointer-events: 0;\n    }\n  }\n  &:not(:disabled):hover {\n    cursor: pointer;\n    color: var(--button-hover-color, var(--button-color));\n    background: var(--button-hover-background, var(--button-background));\n  }\n}\n\n// sizes\n.size-xs {\n  @include button-util.size-xs;\n}\n\n.size-s {\n  @include button-util.size-s;\n}\n\n.size-m {\n  @include button-util.size-m;\n}\n\n// content\n.icon-only {\n  --button-left-gutter: 0;\n  --button-right-gutter: 0;\n  --button-icon-gutter: 0;\n}\n\n.icon-start {\n  --button-left-gutter: 0;\n}\n\n.icon-end {\n  --button-right-gutter: 0;\n}\n\n// view variants\n.view-primary {\n  @include button-util.color-primary;\n}\n\n.view-secondary {\n  @include button-util.color-secondary;\n}\n\n.view-success {\n  @include button-util.color-success;\n}\n\n// icons\n.icon {\n  margin: 0 var(--button-icon-gutter);\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n// spinner\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n","@use '../colors';\n\n@mixin size-xs {\n  --button-min-size: 32px;\n  --button-font-size: 14px;\n  --button-line-height: 20px;\n  --button-gutter: 12px;\n}\n\n@mixin size-s {\n  --button-min-size: 40px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 20px;\n}\n\n@mixin size-m {\n  --button-min-size: 48px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 24px;\n}\n\n@mixin color-primary {\n  --button-color: #fff;\n  --button-background: #{colors.$basic-blue};\n  --button-hover-background: #{colors.$additional-unlit-blue};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-secondary {\n  --button-color: #{colors.$basic-gray87};\n  --button-background: #{colors.$basic-gray8};\n  --button-hover-background: #{colors.$basic-gray12};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-success {\n  --button-color: #fff;\n  --button-background: #{colors.$additional-teal};\n  --button-hover-background: #{colors.$additional-dark-teal};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"button-module__root__ae8",disabled:"button-module__disabled__cc7",loading:"button-module__loading__b23",spinner:"button-module__spinner__c81","size-xs":"button-module__size-xs__ed5","size-s":"button-module__size-s__fb7","size-m":"button-module__size-m__e9f","icon-only":"button-module__icon-only__a54","icon-start":"button-module__icon-start__dfb","icon-end":"button-module__icon-end__eb5","view-primary":"button-module__view-primary__c2f","view-secondary":"button-module__view-secondary__bb7","view-success":"button-module__view-success__d3b",icon:"button-module__icon__aba"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);