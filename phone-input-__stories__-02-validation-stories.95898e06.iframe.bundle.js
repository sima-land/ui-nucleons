/*! For license information please see phone-input-__stories__-02-validation-stories.95898e06.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[310],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-4 3.5a1 1 0 0 1-1.317 0l-4-3.5a1 1 0 0 1-.095-1.411Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/phone-input/__stories__/02-validation.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_phone_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/phone-input/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/PhoneInput",component:_sima_land_ui_nucleons_phone_input__WEBPACK_IMPORTED_MODULE_0__.s,parameters:{storySource:{source:"import { PhoneInput } from '@sima-land/ui-nucleons/phone-input';\nimport { useState } from 'react';\n\nexport default {\n  title: 'common/PhoneInput',\n  component: PhoneInput,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Validation() {\n  const [value, setValue] = useState('');\n  const [error, setError] = useState<string | null>(null);\n\n  return (\n    <PhoneInput\n      style={{ width: 320 }}\n      value={value}\n      onFocus={() => {\n        setError(null);\n      }}\n      onChange={(event, data) => {\n        setValue(data.cleanValue);\n        setError(null);\n      }}\n      onBlur={(event, data) => {\n        !data.completed && setError('Поле не заполнено');\n      }}\n      failed={Boolean(error)}\n      caption={error || 'Мы не будем звонить по этому номеру'}\n    />\n  );\n}\n\nValidation.storyName = 'Пример: проверка заполнения';\n",locationsMap:{validation:{startLoc:{col:7,line:12},endLoc:{col:1,line:34},startBody:{col:7,line:12},endBody:{col:1,line:34}}}},layout:"padded"}},Validation=function Validation(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[error,setError]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_ui_nucleons_phone_input__WEBPACK_IMPORTED_MODULE_0__.s,{style:{width:320},value,onFocus:()=>{setError(null)},onChange:(event,data)=>{setValue(data.cleanValue),setError(null)},onBlur:(event,data)=>{!data.completed&&setError("Поле не заполнено")},failed:Boolean(error),caption:error||"Мы не будем звонить по этому номеру"})};Validation.displayName="Validation",Validation.storyName="Пример: проверка заполнения",Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:"function Validation() {\n  const [value, setValue] = useState('');\n  const [error, setError] = useState<string | null>(null);\n  return <PhoneInput style={{\n    width: 320\n  }} value={value} onFocus={() => {\n    setError(null);\n  }} onChange={(event, data) => {\n    setValue(data.cleanValue);\n    setError(null);\n  }} onBlur={(event, data) => {\n    !data.completed && setError('Поле не заполнено');\n  }} failed={Boolean(error)} caption={error || 'Мы не будем звонить по этому номеру'} />;\n}",...Validation.parameters?.docs?.source}}};const __namedExportsOrder=["Validation"]},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/context/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{GS:()=>IntersectionObserverContext,HX:()=>MatchMediaContext,ho:()=>ResizeObserverContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MatchMediaContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({matchMedia:query=>window.matchMedia(query)}),ResizeObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createResizeObserver:callback=>new window.ResizeObserver(callback)}),IntersectionObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createIntersectionObserver:(...args)=>new window.IntersectionObserver(...args)})},"./src/helpers/is-browser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function isBrowser(){return"undefined"!=typeof window}__webpack_require__.d(__webpack_exports__,{j:()=>isBrowser})},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>use_isomorphic_layout_effect_useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js"),is_browser=__webpack_require__("./src/helpers/is-browser.ts");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};function createRegistry({matchMedia}={matchMedia:window.matchMedia}){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){return mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn),{unsubscribe:()=>{mql.removeEventListener?mql.removeEventListener("change",fn):mql.removeListener&&mql.removeListener(fn)}}}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var context=__webpack_require__("./src/context/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=(0,react.useState)(null),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{(0,is_browser.j)()&&setRegistry(createRegistry({matchMedia}))}),[]),(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||createRegistry({matchMedia}),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}BreakpointProvider.displayName="BreakpointProvider";try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback),{createIntersectionObserver}=(0,react.useContext)(context.GS);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=createIntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,options,createIntersectionObserver])}const use_isomorphic_layout_effect_useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);