"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4775],{"./src/styling/borders.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>InnerBorder});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),borders_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styling/borders.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(borders_module.Z,options);const styling_borders_module=borders_module.Z&&borders_module.Z.locals?borders_module.Z.locals:void 0,cx=bind_default().bind(styling_borders_module),InnerBorder={y:cx("inner-border-y"),top:cx("inner-border-top"),bottom:cx("inner-border-bottom")}},"./src/top-bar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Du:()=>TopBar,JN:()=>utils.J});var utils=__webpack_require__("./src/top-bar/utils.tsx"),react=__webpack_require__("./node_modules/react/index.js"),borders=__webpack_require__("./src/styling/borders.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),top_bar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/top-bar/top-bar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(top_bar_module.Z,options);const top_bar_top_bar_module=top_bar_module.Z&&top_bar_module.Z.locals?top_bar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(top_bar_top_bar_module);function TopBar({divided,size="m",rounds="m",title,subtitle,buttons:{start,startSecondary,end,endSecondary}={},className,style,"data-testid":testId="top-bar"}){const hasStartButtons=start||startSecondary,hasEndButtons=end||endSecondary,hasButtons=hasStartButtons||hasEndButtons,rootClasses=cx("root",`size-${size}`,className,divided&&borders.o.bottom,"unset"!==rounds&&`rounds-${rounds}`,!subtitle&&"no-subtitle");return(0,jsx_runtime.jsxs)("div",{className:rootClasses,style,"data-testid":testId,children:[hasButtons&&(0,jsx_runtime.jsxs)("div",{className:cx("side"),children:[hasStartButtons&&(0,jsx_runtime.jsxs)(TopBarButtonGroup,{children:[start&&(0,jsx_runtime.jsx)(TopBarButton,{...start}),startSecondary&&(0,jsx_runtime.jsx)(TopBarButton,{...startSecondary})]}),hasEndButtons&&(0,jsx_runtime.jsxs)(TopBarButtonGroup,{stub:!0,end:!0,children:[endSecondary&&(0,jsx_runtime.jsx)(TopBarButton,{...endSecondary}),end&&(0,jsx_runtime.jsx)(TopBarButton,{...end})]})]}),(0,jsx_runtime.jsxs)("div",{className:cx("main"),children:[title&&(0,jsx_runtime.jsx)("div",{className:cx("title"),children:title}),subtitle&&(0,jsx_runtime.jsx)("div",{className:cx("subtitle"),children:subtitle})]}),hasButtons&&(0,jsx_runtime.jsxs)("div",{className:cx("side"),children:[hasEndButtons&&(0,jsx_runtime.jsxs)(TopBarButtonGroup,{end:!0,children:[endSecondary&&(0,jsx_runtime.jsx)(TopBarButton,{...endSecondary}),end&&(0,jsx_runtime.jsx)(TopBarButton,{...end})]}),hasStartButtons&&(0,jsx_runtime.jsxs)(TopBarButtonGroup,{stub:!0,children:[start&&(0,jsx_runtime.jsx)(TopBarButton,{...start}),startSecondary&&(0,jsx_runtime.jsx)(TopBarButton,{...startSecondary})]})]})]})}function TopBarButtonGroup({children,stub,end}){return(0,jsx_runtime.jsx)(utils.k.Provider,{value:{stub},children:(0,jsx_runtime.jsx)("div",{className:cx("button-group",{stub,end}),children})})}function TopBarButton({text,icon,className,"data-testid":testId="top-bar:button",...buttonProps}){const{stub}=(0,react.useContext)(utils.k);return(0,jsx_runtime.jsx)("button",{...!stub&&{...buttonProps,"data-testid":testId},type:"button",className:cx("button",icon&&"iconic",stub&&"stub",className),"aria-hidden":stub,children:icon&&!stub?icon:text})}TopBar.displayName="TopBar",TopBarButtonGroup.displayName="TopBarButtonGroup",TopBarButton.displayName="TopBarButton";try{TopBar.displayName="TopBar",TopBar.__docgenInfo={description:"Топ-бар - блок для вывода содержимого в верхней части карточек, модальных окон и других сложных элементов.",displayName:"TopBar",props:{buttons:{defaultValue:null,description:"Свойства кнопок.",name:"buttons",required:!1,type:{name:"{ start?: TopBarButtonProps | undefined; startSecondary?: TopBarButtonProps | undefined; end?: TopBarButtonProps | undefined; endSecondary?: TopBarButtonProps | undefined; } | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"TopBarStyle | undefined"}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"unset"'}]}},subtitle:{defaultValue:null,description:"Подзаголовок.",name:"subtitle",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок.",name:"title",required:!1,type:{name:"ReactNode"}},divided:{defaultValue:null,description:"Нужна ли разделительная черта снизу.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:{value:"m"},description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/top-bar/top-bar.tsx#TopBar"]={docgenInfo:TopBar.__docgenInfo,name:"TopBar",path:"src/top-bar/top-bar.tsx#TopBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/top-bar/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>navigationButtons,k:()=>TopBarButtonGroupContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Cross__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Cross.js"),_sima_land_ui_quarks_icons_24x24_Stroked_ArrowLeft__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const TopBarButtonGroupContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({stub:!1});function navigationButtons({buttons,onBack,onClose}){return{...buttons,...onBack&&{start:{"data-testid":"top-bar:back",onClick:onBack,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_quarks_icons_24x24_Stroked_ArrowLeft__WEBPACK_IMPORTED_MODULE_2__.Z,{})}},...onClose&&{end:{"data-testid":"top-bar:close",onClick:onClose,icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_quarks_icons_24x24_Stroked_Cross__WEBPACK_IMPORTED_MODULE_1__.Z,{})}}}}try{navigationButtons.displayName="navigationButtons",navigationButtons.__docgenInfo={description:'Позволяет быстро определить кнопки-иконки "назад" и "закрыть" в TopBar.',displayName:"navigationButtons",props:{buttons:{defaultValue:null,description:"Свойства кнопок.",name:"buttons",required:!1,type:{name:"{ start?: TopBarButtonProps | undefined; startSecondary?: TopBarButtonProps | undefined; end?: TopBarButtonProps | undefined; endSecondary?: TopBarButtonProps | undefined; } | undefined"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"VoidFunction | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"VoidFunction | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/top-bar/utils.tsx#navigationButtons"]={docgenInfo:navigationButtons.__docgenInfo,name:"navigationButtons",path:"src/top-bar/utils.tsx#navigationButtons"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styling/borders.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".borders-module__inner-border-top__ab9{box-shadow:inset 0 1px 0 #e0e0e0}.borders-module__inner-border-bottom__d31{box-shadow:inset 0 -1px 0 #e0e0e0}.borders-module__inner-border-y__c28{box-shadow:inset 0 1px 0 #e0e0e0,inset 0 -1px 0 #e0e0e0}","",{version:3,sources:["webpack://./src/styling/borders.module.scss"],names:[],mappings:"AAEA,uCACE,gCAAA,CAGF,0CACE,iCAAA,CAGF,qCACE,uDAAA",sourcesContent:["@use '../colors';\n\n.inner-border-top {\n  box-shadow: inset 0 1px 0 colors.$basic-gray12;\n}\n\n.inner-border-bottom {\n  box-shadow: inset 0 -1px 0 colors.$basic-gray12;\n}\n\n.inner-border-y {\n  box-shadow: inset 0 1px 0 colors.$basic-gray12, inset 0 -1px 0 colors.$basic-gray12;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"inner-border-top":"borders-module__inner-border-top__ab9","inner-border-bottom":"borders-module__inner-border-bottom__d31","inner-border-y":"borders-module__inner-border-y__c28"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/top-bar/top-bar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".top-bar-module__root__e86{width:100%;display:flex;justify-content:center;background:#fff;height:var(--top-bar-height);flex-shrink:0}.top-bar-module__size-s__e15{--top-bar-height: 56px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 16px;--top-bar-icon-button-width: 52px}.top-bar-module__size-m__ad8{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px}.top-bar-module__size-xl__f0b{--top-bar-height: 80px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 40px;--top-bar-icon-button-width: 76px;--top-bar-title-only-size: 20px;--top-bar-title-only-height: 28px}.top-bar-module__rounds-s__f22{border-top-left-radius:4px;border-top-right-radius:4px}.top-bar-module__rounds-m__fd1{border-top-left-radius:8px;border-top-right-radius:8px}.top-bar-module__main__fe2{display:flex;flex-direction:column;flex-grow:1;justify-content:center;overflow:hidden;text-align:var(--top-bar-text-align, center)}.top-bar-module__main__fe2:first-child:last-child{margin:0 var(--top-bar-gutter)}.top-bar-module__title__d40{color:#212121;font-size:var(--top-bar-title-size);line-height:var(--top-bar-title-height);font-weight:600}.top-bar-module__title__d40:first-child:last-child{font-size:var(--top-bar-title-only-size, var(--top-bar-title-size));line-height:var(--top-bar-title-only-height, var(--top-bar-title-height))}.top-bar-module__subtitle__be7{color:#9e9e9e;font-size:12px;line-height:16px;font-weight:400;margin-top:-2px}.top-bar-module__title__d40,.top-bar-module__subtitle__be7{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.top-bar-module__side__f5a{height:100%;display:flex;flex-direction:column}.top-bar-module__button-group__abf{display:flex;align-items:center;width:100%}.top-bar-module__button-group__abf:not(.top-bar-module__end__e4e) .top-bar-module__iconic__de4:first-child:last-child{justify-content:flex-start;padding-left:var(--top-bar-gutter)}.top-bar-module__button-group__abf:not(.top-bar-module__end__e4e) .top-bar-module__iconic__de4:not(:last-child):first-child{justify-content:flex-start;padding-left:var(--top-bar-gutter)}.top-bar-module__button-group__abf:not(.top-bar-module__end__e4e) .top-bar-module__iconic__de4:not(:first-child):last-child{justify-content:flex-end;padding-right:var(--top-bar-gutter)}.top-bar-module__button-group__abf.top-bar-module__end__e4e{justify-content:flex-end}.top-bar-module__button-group__abf.top-bar-module__end__e4e .top-bar-module__iconic__de4:first-child:last-child{justify-content:flex-end;padding-right:var(--top-bar-gutter)}.top-bar-module__button-group__abf.top-bar-module__end__e4e .top-bar-module__iconic__de4:not(:last-child):first-child{justify-content:flex-start;padding-left:var(--top-bar-gutter)}.top-bar-module__button-group__abf.top-bar-module__end__e4e .top-bar-module__iconic__de4:not(:first-child):last-child{justify-content:flex-end;padding-right:var(--top-bar-gutter)}.top-bar-module__button-group__abf.top-bar-module__end__e4e :not(.top-bar-module__iconic__de4){justify-content:flex-end}.top-bar-module__button-group__abf:not(.top-bar-module__stub__cc1){height:100%}.top-bar-module__button__e14{background:rgba(0,0,0,0);border:0;box-sizing:border-box;font-family:inherit;font-size:14px;line-height:20px;font-weight:600;margin:0;outline:0;text-align:inherit;height:100%;display:flex;align-items:center;padding:0}.top-bar-module__button__e14:hover{cursor:pointer}.top-bar-module__button__e14.top-bar-module__iconic__de4{color:#212121;width:var(--top-bar-icon-button-width)}.top-bar-module__button__e14.top-bar-module__iconic__de4:hover{color:#757575}.top-bar-module__button__e14:not(.top-bar-module__iconic__de4){color:#1f84db;width:100%;padding:0 var(--top-bar-gutter)}.top-bar-module__button__e14:not(.top-bar-module__iconic__de4):hover{color:#00599d}.top-bar-module__button__e14.top-bar-module__stub__cc1{height:0;overflow:hidden}.top-bar-module__button__e14 svg{display:block;flex-shrink:0;fill:currentColor}","",{version:3,sources:["webpack://./src/top-bar/top-bar.module.scss","webpack://./src/top-bar/top-bar-util.scss","webpack://./src/colors.scss"],names:[],mappings:"AAGA,2BACE,UAAA,CACA,YAAA,CACA,sBAAA,CACA,eAAA,CACA,4BAAA,CACA,aAAA,CAGF,6BCPE,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CDOF,6BCHE,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CDGF,8BCCE,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CACA,+BAAA,CACA,iCAAA,CDHF,+BACE,0BAAA,CACA,2BAAA,CAGF,+BACE,0BAAA,CACA,2BAAA,CAGF,2BACE,YAAA,CACA,qBAAA,CACA,WAAA,CACA,sBAAA,CACA,eAAA,CACA,4CAAA,CAGA,kDACE,8BAAA,CAIJ,4BACE,aE7Ca,CF8Cb,mCAAA,CACA,uCAAA,CACA,eAAA,CAGA,mDACE,mEAAA,CACA,yEAAA,CAIJ,+BACE,aEtDa,CFuDb,cAAA,CACA,gBAAA,CACA,eAAA,CACA,eAAA,CAGF,2DAEE,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,2BACE,WAAA,CACA,YAAA,CACA,qBAAA,CAGF,mCACE,YAAA,CACA,kBAAA,CACA,UAAA,CAGI,sHACE,0BAAA,CACA,kCAAA,CAEF,4HACE,0BAAA,CACA,kCAAA,CAEF,4HACE,wBAAA,CACA,mCAAA,CAIN,4DACE,wBAAA,CAEE,gHACE,wBAAA,CACA,mCAAA,CAEF,sHACE,0BAAA,CACA,kCAAA,CAEF,sHACE,wBAAA,CACA,mCAAA,CAGJ,+FACE,wBAAA,CAGJ,mEACE,WAAA,CAIJ,6BACE,wBAAA,CACA,QAAA,CACA,qBAAA,CACA,mBAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,QAAA,CACA,SAAA,CACA,kBAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,SAAA,CACA,mCACE,cAAA,CAEF,yDACE,aE9IW,CF+IX,sCAAA,CACA,+DACE,aE9IS,CFiJb,+DACE,aEtJS,CFuJT,UAAA,CACA,+BAAA,CACA,qEACE,aErHiB,CFwHrB,uDACE,QAAA,CACA,eAAA,CAEF,iCAEE,aAAA,CACA,aAAA,CACA,iBAAA",sourcesContent:["@use '../colors';\n@use './top-bar-util';\n\n.root {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  background: #fff;\n  height: var(--top-bar-height);\n  flex-shrink: 0; // ВАЖНО: для использования в Modal\n}\n\n.size-s {\n  @include top-bar-util.size-s;\n}\n\n.size-m {\n  @include top-bar-util.size-m;\n}\n\n.size-xl {\n  @include top-bar-util.size-xl;\n}\n\n.rounds-s {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n\n.rounds-m {\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n}\n\n.main {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  justify-content: center;\n  overflow: hidden;\n  text-align: var(--top-bar-text-align, center);\n\n  // когда нет кнопок\n  &:first-child:last-child {\n    margin: 0 var(--top-bar-gutter);\n  }\n}\n\n.title {\n  color: colors.$basic-gray87;\n  font-size: var(--top-bar-title-size);\n  line-height: var(--top-bar-title-height);\n  font-weight: 600;\n\n  // когда нет подзаголовка\n  &:first-child:last-child {\n    font-size: var(--top-bar-title-only-size, var(--top-bar-title-size));\n    line-height: var(--top-bar-title-only-height, var(--top-bar-title-height));\n  }\n}\n\n.subtitle {\n  color: colors.$basic-gray38;\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 400;\n  margin-top: -2px;\n}\n\n.title,\n.subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.side {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.button-group {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  &:not(.end) {\n    .iconic {\n      &:first-child:last-child {\n        justify-content: flex-start;\n        padding-left: var(--top-bar-gutter);\n      }\n      &:not(:last-child):first-child {\n        justify-content: flex-start;\n        padding-left: var(--top-bar-gutter);\n      }\n      &:not(:first-child):last-child {\n        justify-content: flex-end;\n        padding-right: var(--top-bar-gutter);\n      }\n    }\n  }\n  &.end {\n    justify-content: flex-end;\n    .iconic {\n      &:first-child:last-child {\n        justify-content: flex-end;\n        padding-right: var(--top-bar-gutter);\n      }\n      &:not(:last-child):first-child {\n        justify-content: flex-start;\n        padding-left: var(--top-bar-gutter);\n      }\n      &:not(:first-child):last-child {\n        justify-content: flex-end;\n        padding-right: var(--top-bar-gutter);\n      }\n    }\n    :not(.iconic) {\n      justify-content: flex-end;\n    }\n  }\n  &:not(.stub) {\n    height: 100%;\n  }\n}\n\n.button {\n  background: transparent;\n  border: 0;\n  box-sizing: border-box;\n  font-family: inherit;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 600;\n  margin: 0;\n  outline: 0;\n  text-align: inherit;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  padding: 0;\n  &:hover {\n    cursor: pointer;\n  }\n  &.iconic {\n    color: colors.$basic-gray87;\n    width: var(--top-bar-icon-button-width);\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  }\n  &:not(.iconic) {\n    color: colors.$basic-blue;\n    width: 100%;\n    padding: 0 var(--top-bar-gutter);\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  }\n  &.stub {\n    height: 0;\n    overflow: hidden;\n  }\n  svg {\n    // чтобы выравнивались по центру по вертикали\n    display: block;\n    flex-shrink: 0;\n    fill: currentColor;\n  }\n}\n","$size-s-height: 56px;\n$size-m-height: 64px;\n$size-xl-height: 80px;\n\n@mixin size-s {\n  --top-bar-height: #{$size-s-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 16px;\n  --top-bar-icon-button-width: 52px;\n}\n\n@mixin size-m {\n  --top-bar-height: #{$size-m-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 24px;\n  --top-bar-icon-button-width: 60px;\n}\n\n@mixin size-xl {\n  --top-bar-height: #{$size-xl-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 40px;\n  --top-bar-icon-button-width: 76px;\n  --top-bar-title-only-size: 20px;\n  --top-bar-title-only-height: 28px;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"top-bar-module__root__e86","size-s":"top-bar-module__size-s__e15","size-m":"top-bar-module__size-m__ad8","size-xl":"top-bar-module__size-xl__f0b","rounds-s":"top-bar-module__rounds-s__f22","rounds-m":"top-bar-module__rounds-m__fd1",main:"top-bar-module__main__fe2",title:"top-bar-module__title__d40",subtitle:"top-bar-module__subtitle__be7",side:"top-bar-module__side__f5a","button-group":"top-bar-module__button-group__abf",end:"top-bar-module__end__e4e",iconic:"top-bar-module__iconic__de4",stub:"top-bar-module__stub__cc1",button:"top-bar-module__button__e14"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);