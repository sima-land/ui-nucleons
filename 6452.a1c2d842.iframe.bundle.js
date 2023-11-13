"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6452],{"./src/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),spinner=__webpack_require__("./src/spinner/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_module.Z,options);const button_button_module=button_module.Z&&button_module.Z.locals?button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(button_button_module),Button=(0,react.forwardRef)((function Button({viewType="primary",icon:Icon,iconPosition="start",size="m",loading,disabled,className,children,"data-testid":testId="button",...restProps},ref){const hasIcon=Boolean(Icon),hasText=Boolean(children),rootClassName=cx("root",`size-${size}`,"unset"!==viewType&&`view-${viewType}`,loading&&"loading",disabled&&"disabled",hasIcon&&!hasText&&"icon-only",hasText&&hasIcon&&"start"===iconPosition&&"icon-start",hasText&&hasIcon&&"end"===iconPosition&&"icon-end",className),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Icon&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),children,Icon&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),loading&&(0,jsx_runtime.jsx)(spinner.WV,{size:"s",color:disabled||"secondary"===viewType?"basic-gray38":"basic-white",className:cx("spinner")})]});let result=null;return result="container"===restProps.appearance?(0,jsx_runtime.jsx)("div",{...restProps,ref,className:rootClassName,role:"button","data-testid":testId,children:content}):"link"===restProps.appearance?(0,jsx_runtime.jsx)("a",{...restProps,ref,className:rootClassName,"data-testid":testId,children:content}):(0,jsx_runtime.jsx)("button",{...restProps,ref,className:rootClassName,disabled,"data-testid":testId,children:content}),result}));try{Button.displayName="Button",Button.__docgenInfo={description:"Кнопка - запускает действие.",displayName:"Button",props:{viewType:{defaultValue:{value:"primary"},description:"Определяет внешний вид кнопки.",name:"viewType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"unset"'}]}},appearance:{defaultValue:null,description:"Определяет тип корневого элемента.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"link"'},{value:'"container"'}]}},icon:{defaultValue:null,description:"Иконка.",name:"icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},iconPosition:{defaultValue:{value:"start"},description:"Позиция иконки относительно текста.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"end"'}]}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"xs"'},{value:'"m"'}]}},loading:{defaultValue:null,description:"Нужно ли отображать состояние загрузки.",name:"loading",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключенное состояние.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"ButtonStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/hint/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kW:()=>Hint,UQ:()=>HintView,fK:()=>getArrowFloatingStyle,HM:()=>hintFloatingConfig,W0:()=>useHintFloating,Hh:()=>useHintFloatingStyle,Rr:()=>useHintOnClick,Uo:()=>useHintOnHover,C_:()=>useTempHintState});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hint_view_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint/hint-view.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hint_view_module.Z,options);const hint_hint_view_module=hint_view_module.Z&&hint_view_module.Z.locals?hint_view_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(hint_hint_view_module),arrowSquareSize=Math.sqrt(32);function HintView({hintRef,className,children,"data-testid":testId="hint",...rest}){return(0,jsx_runtime.jsx)("div",{ref:hintRef,className:cx("root",className),"data-testid":testId,...rest,children})}function HintArrow({arrowRef,className,...rest}){return(0,jsx_runtime.jsx)("div",{ref:arrowRef,className:cx("arrow",className),...rest})}HintView.displayName="HintView",HintArrow.displayName="HintArrow",HintView.Arrow=HintArrow;try{HintView.displayName="HintView",HintView.__docgenInfo={description:'"Хинт" - всплывающая подсказка.',displayName:"HintView",props:{hintRef:{defaultValue:null,description:"Ref корневого элемента.",name:"hintRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#HintView"]={docgenInfo:HintView.__docgenInfo,name:"HintView",path:"src/hint/hint-view.tsx#HintView"})}catch(__react_docgen_typescript_loader_error){}try{Arrow.displayName="HintView.Arrow",Arrow.__docgenInfo={description:"Стрелка хинта.",displayName:"HintView.Arrow",props:{arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#HintView.Arrow"]={docgenInfo:HintView.Arrow.__docgenInfo,name:"HintView.Arrow",path:"src/hint/hint-view.tsx#HintView.Arrow"})}catch(__react_docgen_typescript_loader_error){}try{arrowSquareSize.displayName="arrowSquareSize",arrowSquareSize.__docgenInfo={description:"Длина стороны квадрата, составленного из двух стрелок (треугольников).",displayName:"arrowSquareSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#arrowSquareSize"]={docgenInfo:arrowSquareSize.__docgenInfo,name:"arrowSquareSize",path:"src/hint/hint-view.tsx#arrowSquareSize"})}catch(__react_docgen_typescript_loader_error){}var portal=__webpack_require__("./src/portal/index.tsx");function Hint({open,...rest}){return(0,jsx_runtime.jsx)(portal.h,{children:open&&(0,jsx_runtime.jsx)(HintInner,{...rest})})}function HintInner({arrowRef,children,...rest}){return(0,jsx_runtime.jsxs)(HintView,{...rest,children:[children,(0,jsx_runtime.jsx)(HintView.Arrow,{arrowRef})]})}Hint.displayName="Hint",HintInner.displayName="HintInner";try{Hint.displayName="Hint",Hint.__docgenInfo={description:"Всплывающий хинт.",displayName:"Hint",props:{open:{defaultValue:null,description:"Нужно ли показать хинт.",name:"open",required:!1,type:{name:"boolean | undefined"}},arrowRef:{defaultValue:null,description:'Ref элемента "стрелки".',name:"arrowRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},hintRef:{defaultValue:null,description:"Ref корневого элемента.",name:"hintRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"src/hint/hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),helpers_layer=__webpack_require__("./src/helpers/layer.ts"),identity=__webpack_require__("./src/hooks/identity.ts");function hintFloatingConfig({arrowRef}={}){return{placement:"top",middleware:[(0,floating_ui_core.cv)(4+(arrowRef?4:0)),(0,floating_ui_core.RR)({padding:16,crossAxis:!1,fallbackAxisSideDirection:"start"}),(0,floating_ui_core.uY)({padding:16}),arrowRef&&(0,floating_ui_react_dom.x7)({element:arrowRef,padding:4})],whileElementsMounted:floating_ui_dom.Me}}function useHintFloating(props){const[arrowEl,setArrowEl]=(0,react.useState)(null),arrowRef=(0,identity.y)(arrowEl),floating=(0,floating_ui_react.YF)({...hintFloatingConfig(arrowEl?{arrowRef}:void 0),...props});return{...floating,refs:{...floating.refs,setArrow:setArrowEl}}}function useHintFloatingStyle(floating){const layer=(0,helpers_layer.s)();return{position:floating.strategy,top:floating.y,left:floating.x,zIndex:layer+2,...(0,lodash.mapKeys)(getArrowFloatingStyle(floating),((value,key)=>`--hint-arrow-${key}`))}}function getArrowFloatingStyle({placement,middlewareData}){const{arrow:arrowData}=middlewareData;if(!arrowData)return{};const maybe=value=>value?`${value}px`:"",arrowShift=()=>-arrowSquareSize/2+"px";let arrowStyle={};switch(placement.split("-")[0]){case"top":arrowStyle={left:maybe(arrowData?.x),bottom:arrowShift()};break;case"bottom":arrowStyle={left:maybe(arrowData?.x),top:arrowShift()};break;case"left":arrowStyle={top:maybe(arrowData?.y),right:arrowShift()};break;case"right":arrowStyle={top:maybe(arrowData?.y),left:arrowShift()}}return arrowStyle}function useHintOnHover(floating,props){const style=useHintFloatingStyle(floating),hover=(0,floating_ui_react.XI)(floating.context,{handleClose:(0,floating_ui_react.xp)(),...props});return(0,floating_ui_react.NI)([hover,{floating:{style}}])}function useHintOnClick(floating){const style=useHintFloatingStyle(floating),click=(0,floating_ui_react.eS)(floating.context),dismiss=(0,floating_ui_react.bQ)(floating.context);return(0,floating_ui_react.NI)([click,dismiss,{floating:{style}}])}function useTempHintState(initialState,{timeout=3e3}={}){const[open,setOpen]=(0,react.useState)(initialState),timerRef=(0,react.useRef)(null),updateTimer=(0,react.useCallback)((value=>{null!==timerRef.current&&clearTimeout(timerRef.current),value&&(timerRef.current=setTimeout((()=>setOpen(!1)),timeout))}),[timeout]);(0,react.useEffect)((()=>{updateTimer(open)}),[]);const toggle=(0,react.useCallback)((next=>{const state="function"==typeof next?next(open):next;updateTimer(state),setOpen(state)}),[open,setOpen,updateTimer]);return[open,toggle]}},"./src/portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");const Portal=({children,defineRoot=()=>document.body})=>{const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]),mounted&&ref.current?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,ref.current):null};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"Портал - выводит содержимое в портале в произвольную часть DOM.",displayName:"Portal",props:{defineRoot:{defaultValue:{value:"() => document.body"},description:"Вернет элемент, в который нужно вывести содержимое через портал.",name:"defineRoot",required:!1,type:{name:"(() => HTMLElement) | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-module__root__ae8{position:relative;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;flex-wrap:nowrap;border-radius:4px;font-family:inherit;font-weight:600;box-sizing:border-box;padding:0;padding-left:var(--button-left-gutter, var(--button-gutter));padding-right:var(--button-right-gutter, var(--button-gutter));border:0;outline:0;text-decoration:none;overflow:hidden;font-size:var(--button-font-size);background:var(--button-background);color:var(--button-color);min-width:var(--button-min-size);height:var(--button-min-size);--button-icon-gutter: 12px}.button-module__root__ae8::-moz-focus-inner{border:0}.button-module__root__ae8:disabled,.button-module__root__ae8.button-module__disabled__cc7{pointer-events:none;color:var(--button-disabled-color, var(--button-color));background:var(--button-disabled-background, var(--button-background))}.button-module__root__ae8.button-module__loading__b23{color:rgba(0,0,0,0)}.button-module__root__ae8.button-module__loading__b23>:not(.button-module__spinner__c81){opacity:0;pointer-events:0}.button-module__root__ae8:not(:disabled):hover{cursor:pointer;color:var(--button-hover-color, var(--button-color));background:var(--button-hover-background, var(--button-background))}.button-module__size-xs__ed5{--button-min-size: 32px;--button-font-size: 14px;--button-line-height: 20px;--button-gutter: 12px}.button-module__size-s__fb7{--button-min-size: 40px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 20px}.button-module__size-m__e9f{--button-min-size: 48px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 24px}.button-module__icon-only__a54{--button-left-gutter: 0;--button-right-gutter: 0;--button-icon-gutter: 0}.button-module__icon-start__dfb{--button-left-gutter: 0}.button-module__icon-end__eb5{--button-right-gutter: 0}.button-module__view-primary__c2f{--button-color: #fff;--button-background: #1f84db;--button-hover-background: #1b75c2;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-secondary__bb7{--button-color: #212121;--button-background: #ebebeb;--button-hover-background: #e0e0e0;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-success__d3b{--button-color: #fff;--button-background: #09ab8b;--button-hover-background: #089176;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__icon__aba{margin:0 var(--button-icon-gutter);flex-shrink:0;fill:currentColor}.button-module__spinner__c81{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}","",{version:3,sources:["webpack://./src/button/button.module.scss","webpack://./src/button/button-util.scss"],names:[],mappings:"AAGA,0BACE,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,qBAAA,CACA,SAAA,CACA,4DAAA,CACA,8DAAA,CACA,QAAA,CACA,SAAA,CACA,oBAAA,CACA,eAAA,CACA,iCAAA,CACA,mCAAA,CACA,yBAAA,CACA,gCAAA,CACA,6BAAA,CACA,0BAAA,CACA,4CACE,QAAA,CAGF,0FAEE,mBAAA,CACA,uDAAA,CACA,sEAAA,CAEF,sDACE,mBAAA,CACA,yFACE,SAAA,CACA,gBAAA,CAGJ,+CACE,cAAA,CACA,oDAAA,CACA,mEAAA,CAKJ,6BCjDE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CDkDF,4BC9CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD+CF,4BC3CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD6CF,+BACE,uBAAA,CACA,wBAAA,CACA,uBAAA,CAGF,gCACE,uBAAA,CAGF,8BACE,wBAAA,CAIF,kCCxDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDwDF,oCCpDE,uBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDoDF,kCChDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDiDF,0BACE,kCAAA,CACA,aAAA,CACA,iBAAA,CAIF,6BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA",sourcesContent:["@use '../colors';\n@use './button-util';\n\n.root {\n  position: relative;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  border-radius: 4px;\n  font-family: inherit;\n  font-weight: 600;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: var(--button-left-gutter, var(--button-gutter));\n  padding-right: var(--button-right-gutter, var(--button-gutter));\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  overflow: hidden;\n  font-size: var(--button-font-size);\n  background: var(--button-background);\n  color: var(--button-color);\n  min-width: var(--button-min-size);\n  height: var(--button-min-size);\n  --button-icon-gutter: 12px;\n  &::-moz-focus-inner {\n    border: 0;\n  }\n  // @todo disabled для ссылок?\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    color: var(--button-disabled-color, var(--button-color));\n    background: var(--button-disabled-background, var(--button-background));\n  }\n  &.loading {\n    color: transparent;\n    > :not(.spinner) {\n      opacity: 0;\n      pointer-events: 0;\n    }\n  }\n  &:not(:disabled):hover {\n    cursor: pointer;\n    color: var(--button-hover-color, var(--button-color));\n    background: var(--button-hover-background, var(--button-background));\n  }\n}\n\n// sizes\n.size-xs {\n  @include button-util.size-xs;\n}\n\n.size-s {\n  @include button-util.size-s;\n}\n\n.size-m {\n  @include button-util.size-m;\n}\n\n// content\n.icon-only {\n  --button-left-gutter: 0;\n  --button-right-gutter: 0;\n  --button-icon-gutter: 0;\n}\n\n.icon-start {\n  --button-left-gutter: 0;\n}\n\n.icon-end {\n  --button-right-gutter: 0;\n}\n\n// view variants\n.view-primary {\n  @include button-util.color-primary;\n}\n\n.view-secondary {\n  @include button-util.color-secondary;\n}\n\n.view-success {\n  @include button-util.color-success;\n}\n\n// icons\n.icon {\n  margin: 0 var(--button-icon-gutter);\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n// spinner\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n","@use '../colors';\n\n@mixin size-xs {\n  --button-min-size: 32px;\n  --button-font-size: 14px;\n  --button-line-height: 20px;\n  --button-gutter: 12px;\n}\n\n@mixin size-s {\n  --button-min-size: 40px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 20px;\n}\n\n@mixin size-m {\n  --button-min-size: 48px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 24px;\n}\n\n@mixin color-primary {\n  --button-color: #fff;\n  --button-background: #{colors.$basic-blue};\n  --button-hover-background: #{colors.$additional-unlit-blue};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-secondary {\n  --button-color: #{colors.$basic-gray87};\n  --button-background: #{colors.$basic-gray8};\n  --button-hover-background: #{colors.$basic-gray12};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-success {\n  --button-color: #fff;\n  --button-background: #{colors.$additional-teal};\n  --button-hover-background: #{colors.$additional-dark-teal};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"button-module__root__ae8",disabled:"button-module__disabled__cc7",loading:"button-module__loading__b23",spinner:"button-module__spinner__c81","size-xs":"button-module__size-xs__ed5","size-s":"button-module__size-s__fb7","size-m":"button-module__size-m__e9f","icon-only":"button-module__icon-only__a54","icon-start":"button-module__icon-start__dfb","icon-end":"button-module__icon-end__eb5","view-primary":"button-module__view-primary__c2f","view-secondary":"button-module__view-secondary__bb7","view-success":"button-module__view-success__d3b",icon:"button-module__icon__aba"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint/hint-view.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hint-view-module__root__f73{border-radius:4px;background:#3a3a3b;padding:8px;max-width:280px;min-width:36px;min-height:36px;display:inline-flex;align-items:center;color:#fff;font-size:14px;line-height:20px;font-weight:400;text-align:center;overflow-wrap:break-word}.hint-view-module__arrow__dc3{position:absolute;width:5.6568542495px;height:5.6568542495px;transform:rotate(45deg);background:#3a3a3b;top:var(--hint-arrow-top);left:var(--hint-arrow-left);right:var(--hint-arrow-right);bottom:var(--hint-arrow-bottom);z-index:-1}","",{version:3,sources:["webpack://./src/hint/hint-view.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAGA,6BACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CAGF,8BACE,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,uBAAA,CACA,kBCpBa,CDqBb,yBAAA,CACA,2BAAA,CACA,6BAAA,CACA,+BAAA,CACA,UAAA",sourcesContent:["@use 'sass:math';\n@use '../colors';\n\n.root {\n  border-radius: 4px;\n  background: colors.$basic-gray76;\n  padding: 8px;\n  max-width: 280px;\n  min-width: 36px;\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.arrow {\n  position: absolute;\n  width: 1px * math.sqrt((4 * 4) + (4 * 4));\n  height: 1px * math.sqrt((4 * 4) + (4 * 4));\n  transform: rotate(45deg);\n  background: colors.$basic-gray76;\n  top: var(--hint-arrow-top);\n  left: var(--hint-arrow-left);\n  right: var(--hint-arrow-right);\n  bottom: var(--hint-arrow-bottom);\n  z-index: -1; // чтобы был скрыт при отсутствии позиционирования\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hint-view-module__root__f73",arrow:"hint-view-module__arrow__dc3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);