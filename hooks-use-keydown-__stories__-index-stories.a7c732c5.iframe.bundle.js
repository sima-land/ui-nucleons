"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[7991],{"./src/hooks/use-keydown/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/index.ts"),_sima_land_ui_nucleons_helpers_get_declination__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/helpers/get-declination.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"hooks/useKeydown",component:_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__.NR,parameters:{storySource:{source:"import { useKeydown } from '@sima-land/ui-nucleons/hooks';\nimport { getDeclination } from '@sima-land/ui-nucleons/helpers/get-declination';\nimport { useState } from 'react';\n\nexport default {\n  title: 'hooks/useKeydown',\n  component: useKeydown,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  const [count, setCount] = useState<number>(0);\n  const key = 'Space';\n\n  useKeydown(key, () => {\n    setCount(c => c + 1);\n  });\n\n  return (\n    <>\n      Клавиша {key} была нажата {count} {getDeclination(count, ['раз', 'раза', 'раз'])}\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:13},endLoc:{col:1,line:26},startBody:{col:7,line:13},endBody:{col:1,line:26}}}},layout:"padded"}},Primary=function Primary(){const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);return(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__.NR)("Space",(()=>{setCount((c=>c+1))})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["Клавиша ","Space"," была нажата ",count," ",(0,_sima_land_ui_nucleons_helpers_get_declination__WEBPACK_IMPORTED_MODULE_3__.p)(count,["раз","раза","раз"])]})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [count, setCount] = useState<number>(0);\n  const key = 'Space';\n  useKeydown(key, () => {\n    setCount(c => c + 1);\n  });\n  return <>\n      Клавиша {key} была нажата {count} {getDeclination(count, ['раз', 'раза', 'раз'])}\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/context/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GS:()=>IntersectionObserverContext,HX:()=>MatchMediaContext,ho:()=>ResizeObserverContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MatchMediaContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({matchMedia:query=>window.matchMedia(query)}),ResizeObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createResizeObserver:callback=>new window.ResizeObserver(callback)}),IntersectionObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createIntersectionObserver:(...args)=>new window.IntersectionObserver(...args)})},"./src/helpers/get-declination.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getDeclination(number,titles){const positiveNumber=Math.abs(number);return titles[positiveNumber%100>4&&positiveNumber%100<20?2:[2,0,1,1,1,2][positiveNumber%10<5?positiveNumber%10:5]]}__webpack_require__.d(__webpack_exports__,{p:()=>getDeclination})},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>use_isomorphic_layout_effect_useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var context=__webpack_require__("./src/context/index.ts");__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=useState(null),{matchMedia}=useContext(MatchMediaContext);return useIsomorphicLayoutEffect((()=>{isBrowser()&&setRegistry(createRegistry({matchMedia}))}),[]),_jsx(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||function utils_createRegistry({matchMedia}={matchMedia:window.matchMedia}){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn)}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}({matchMedia}),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback),{createIntersectionObserver}=(0,react.useContext)(context.GS);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=createIntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,options,createIntersectionObserver])}const use_isomorphic_layout_effect_useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}}}]);