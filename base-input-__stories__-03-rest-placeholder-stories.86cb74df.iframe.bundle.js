/*! For license information please see base-input-__stories__-03-rest-placeholder-stories.86cb74df.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2749],{"./src/base-input/__stories__/03-rest-placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{RestPlaceholder:()=>RestPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_base_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/base-input/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"service/BaseInput",component:_sima_land_ui_nucleons_base_input__WEBPACK_IMPORTED_MODULE_0__.Q,parameters:{storySource:{source:"import { BaseInput, BaseInputStyle } from '@sima-land/ui-nucleons/base-input';\nimport { useState } from 'react';\n\nexport default {\n  title: 'service/BaseInput',\n  component: BaseInput,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function RestPlaceholder() {\n  const style: BaseInputStyle = {\n    width: 200,\n    padding: 12,\n    border: '1px solid #323232',\n    '--base-input-placeholder-color': '#aaa',\n  };\n\n  const [value, setValue] = useState<string>('');\n\n  return (\n    <>\n      <BaseInput\n        style={style}\n        value={value}\n        restPlaceholder={'9'.repeat(10).slice(value.length)}\n        onChange={e => {\n          setValue(e.currentTarget.value.replace(/\\D/g, '').slice(0, 10));\n        }}\n      />\n    </>\n  );\n}\n\nRestPlaceholder.storyName = 'Остаточный placeholder';\n",locationsMap:{"rest-placeholder":{startLoc:{col:7,line:12},endLoc:{col:1,line:34},startBody:{col:7,line:12},endBody:{col:1,line:34}}}},layout:"padded"}},RestPlaceholder=function RestPlaceholder(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_ui_nucleons_base_input__WEBPACK_IMPORTED_MODULE_0__.Q,{style:{width:200,padding:12,border:"1px solid #323232","--base-input-placeholder-color":"#aaa"},value,restPlaceholder:"9".repeat(10).slice(value.length),onChange:e=>{setValue(e.currentTarget.value.replace(/\D/g,"").slice(0,10))}})})};RestPlaceholder.storyName="Остаточный placeholder",RestPlaceholder.parameters={...RestPlaceholder.parameters,docs:{...RestPlaceholder.parameters?.docs,source:{originalSource:"function RestPlaceholder() {\n  const style: BaseInputStyle = {\n    width: 200,\n    padding: 12,\n    border: '1px solid #323232',\n    '--base-input-placeholder-color': '#aaa'\n  };\n  const [value, setValue] = useState<string>('');\n  return <>\n      <BaseInput style={style} value={value} restPlaceholder={'9'.repeat(10).slice(value.length)} onChange={e => {\n      setValue(e.currentTarget.value.replace(/\\D/g, '').slice(0, 10));\n    }} />\n    </>;\n}",...RestPlaceholder.parameters?.docs?.source}}};const __namedExportsOrder=["RestPlaceholder"]},"./src/base-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>BaseInput});var react=__webpack_require__("./node_modules/react/index.js");function fitElementHeight({target}){target.style.height="auto";const{scrollHeight,offsetHeight,clientHeight}=target;target.style.height=target.scrollHeight+offsetHeight-clientHeight+"px"}var hooks=__webpack_require__("./src/hooks/index.ts");function omitMultiline(source){const next={...source};return delete next.multiline,next}var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),base_input_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/base-input/base-input.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(base_input_m.Z,options);const base_input_base_input_m=base_input_m.Z&&base_input_m.Z.locals?base_input_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(base_input_base_input_m);function BaseInput({inputRef,textareaRef,style,className,restPlaceholder:restPlaceholderProp,"data-testid":testId="base-input",...props}){const textareaInnerRef=(0,react.useRef)(null),inputInnerRef=(0,react.useRef)(null);let field;(0,react.useImperativeHandle)(textareaRef,(()=>textareaInnerRef.current)),(0,react.useImperativeHandle)(inputRef,(()=>inputInnerRef.current)),(0,hooks.LI)((()=>{textareaInnerRef.current&&fitElementHeight({target:textareaInnerRef.current})})),field=props.multiline?(0,jsx_runtime.jsx)("textarea",{...omitMultiline(props),ref:textareaInnerRef,rows:props.rows??1,"data-testid":"base-input:field",className:cx("field","reset","multiline"),onInput:e=>{props.onInput?.(e),fitElementHeight({target:e.currentTarget})}}):(0,jsx_runtime.jsx)("input",{...omitMultiline(props),ref:inputInnerRef,"data-testid":"base-input:field",className:cx("field","reset")});let restPlaceholder=null;return void 0!==props.value&&(restPlaceholder="string"==typeof restPlaceholderProp?{shiftValue:String(props.value),value:restPlaceholderProp}:{shiftValue:String(props.value),value:"",...restPlaceholderProp}),(0,jsx_runtime.jsxs)("div",{style,className:cx("reset","root",className),"data-testid":testId,children:[!props.multiline&&restPlaceholder&&restPlaceholder.value&&(0,jsx_runtime.jsxs)("span",{"aria-hidden":!0,className:cx("rest-placeholder"),children:[(0,jsx_runtime.jsx)("span",{"data-testid":"rest-placeholder-shift",className:cx("shift-part"),children:restPlaceholder.shiftValue}),(0,jsx_runtime.jsx)("span",{"data-testid":"rest-placeholder",className:cx("main-part"),children:restPlaceholder.value})]}),field]})}try{BaseInput.displayName="BaseInput",BaseInput.__docgenInfo={description:'Базовое поле ввода текста.\nПозволяет выводить "остаточный placeholder".\nМожет выводиться в однострочном и многострочном режимах.\nВ многострочном режиме автоматически подстраивает высоту под введенный текст.',displayName:"BaseInput",props:{restPlaceholder:{defaultValue:null,description:"Остаточный placeholder (выводится после введенного значения).",name:"restPlaceholder",required:!1,type:{name:"string | RestPlaceholderDefinition | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"BaseInputStyle | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},inputRef:{defaultValue:null,description:"Ref элемента input. Будет заполнен только при multiline=false.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement | null> | undefined"}},textareaRef:{defaultValue:null,description:"Ref элемента textarea. Будет заполнен только при multiline=true.",name:"textareaRef",required:!1,type:{name:"Ref<HTMLTextAreaElement | null> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base-input/base-input.tsx#BaseInput"]={docgenInfo:BaseInput.__docgenInfo,name:"BaseInput",path:"src/base-input/base-input.tsx#BaseInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/context/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GS:()=>IntersectionObserverContext,HX:()=>MatchMediaContext,ho:()=>ResizeObserverContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MatchMediaContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({matchMedia:query=>window.matchMedia(query)}),ResizeObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createResizeObserver:callback=>new window.ResizeObserver(callback)}),IntersectionObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createIntersectionObserver:(...args)=>new window.IntersectionObserver(...args)})},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>use_isomorphic_layout_effect_useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var context=__webpack_require__("./src/context/index.ts");__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=useState(null),{matchMedia}=useContext(MatchMediaContext);return useIsomorphicLayoutEffect((()=>{isBrowser()&&setRegistry(createRegistry({matchMedia}))}),[]),_jsx(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||function utils_createRegistry({matchMedia}={matchMedia:window.matchMedia}){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn)}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}({matchMedia}),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback),{createIntersectionObserver}=(0,react.useContext)(context.GS);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=createIntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,options,createIntersectionObserver])}const use_isomorphic_layout_effect_useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/base-input/base-input.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".base-input-m__reset__b0f{border:0;box-sizing:border-box;font:inherit;margin:0;outline:0;padding:0}.base-input-m__root__bc3{position:relative;background-color:rgba(0,0,0,0);width:0;flex-grow:1;display:flex;overflow:hidden;background:var(--base-input-background)}.base-input-m__field__bfa{width:0;flex-grow:1;display:block;background:var(--base-input-background, inherit);color:var(--base-input-color, inherit);font-size:inherit;line-height:inherit;z-index:0;text-overflow:inherit}.base-input-m__field__bfa::placeholder{color:var(--base-input-placeholder-color);-webkit-text-fill-color:var(--base-input-placeholder-color);opacity:1}.base-input-m__field__bfa:disabled{background:var(--base-input-background);color:var(--base-input-color)}.base-input-m__field__bfa:disabled::placeholder{color:var(--base-input-placeholder-color);-webkit-text-fill-color:var(--base-input-placeholder-color);opacity:1}.base-input-m__field__bfa::-ms-clear{display:none;height:0;width:0}.base-input-m__field__bfa.base-input-m__multiline__d08{resize:none;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.base-input-m__field__bfa.base-input-m__multiline__d08::-webkit-scrollbar{display:none}.base-input-m__rest-placeholder__c8d{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;padding:inherit;font-family:inherit;font-size:inherit;line-height:inherit;overflow:hidden;z-index:1}.base-input-m__rest-placeholder__c8d .base-input-m__shift-part__f16{color:rgba(0,0,0,0)}.base-input-m__rest-placeholder__c8d .base-input-m__main-part__c0d{color:var(--base-input-placeholder-color)}","",{version:3,sources:["webpack://./src/base-input/base-input.m.scss","webpack://./src/utils.scss"],names:[],mappings:"AAGA,0BACE,QAAA,CACA,qBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,SAAA,CAGF,yBACE,iBAAA,CACA,8BAAA,CACA,OAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,uCAAA,CAGF,0BACE,OAAA,CACA,WAAA,CACA,aAAA,CACA,gDAAA,CACA,sCAAA,CACA,iBAAA,CACA,mBAAA,CACA,SAAA,CACA,qBAAA,CACA,uCACE,yCAAA,CACA,2DAAA,CACA,SAAA,CAEF,mCACE,uCAAA,CACA,6BAAA,CAEF,gDACE,yCAAA,CACA,2DAAA,CACA,SAAA,CAEF,qCAEE,YAAA,CACA,QAAA,CACA,OAAA,CAEF,uDACE,WAAA,CC/CF,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,0EACE,YAAA,CDgDJ,qCACE,mBAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,SAAA,CACA,oEACE,mBAAA,CAEF,mEACE,yCAAA",sourcesContent:["@use '../utils';\n@use '../colors';\n\n.reset {\n  border: 0;\n  box-sizing: border-box;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n}\n\n.root {\n  position: relative;\n  background-color: transparent;\n  width: 0;\n  flex-grow: 1;\n  display: flex;\n  overflow: hidden;\n  background: var(--base-input-background);\n}\n\n.field {\n  width: 0;\n  flex-grow: 1;\n  display: block;\n  background: var(--base-input-background, inherit);\n  color: var(--base-input-color, inherit);\n  font-size: inherit;\n  line-height: inherit;\n  z-index: 0;\n  text-overflow: inherit;\n  &::placeholder {\n    color: var(--base-input-placeholder-color);\n    -webkit-text-fill-color: var(--base-input-placeholder-color);\n    opacity: 1;\n  }\n  &:disabled {\n    background: var(--base-input-background);\n    color: var(--base-input-color);\n  }\n  &:disabled::placeholder {\n    color: var(--base-input-placeholder-color);\n    -webkit-text-fill-color: var(--base-input-placeholder-color);\n    opacity: 1;\n  }\n  &::-ms-clear {\n    // отключаем системный крестик в IE\n    display: none;\n    height: 0;\n    width: 0;\n  }\n  &.multiline {\n    resize: none;\n    @include utils.hidden-scrollbars;\n  }\n}\n\n.rest-placeholder {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: hidden;\n  z-index: 1;\n  .shift-part {\n    color: transparent;\n  }\n  .main-part {\n    color: var(--base-input-placeholder-color);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={reset:"base-input-m__reset__b0f",root:"base-input-m__root__bc3",field:"base-input-m__field__bfa",multiline:"base-input-m__multiline__d08","rest-placeholder":"base-input-m__rest-placeholder__c8d","shift-part":"base-input-m__shift-part__f16","main-part":"base-input-m__main-part__c0d"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);