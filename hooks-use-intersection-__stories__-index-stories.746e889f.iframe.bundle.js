"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[146],{"./src/hooks/use-intersection/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hooks/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_colors__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/colors/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"hooks/useIntersection",component:_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__.sx,parameters:{storySource:{source:"import { useIntersection } from '@sima-land/ui-nucleons/hooks';\nimport { CSSProperties, useMemo, useRef, useState } from 'react';\nimport { COLORS } from '../../../colors';\n\nexport default {\n  title: 'hooks/useIntersection',\n  component: useIntersection,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst gridStyle: CSSProperties = {\n  maxWidth: '1024px',\n  margin: '0 auto',\n  display: 'grid',\n  gridTemplateColumns: 'repeat(4, 1fr)',\n  gap: '8px',\n  padding: '8px',\n};\n\nconst titleStyle: CSSProperties = {\n  gridRow: '1',\n  gridColumn: '1 / 5',\n};\n\nfunction Square() {\n  const ref = useRef<HTMLDivElement>(null);\n  const [viewing, toggleViewing] = useState<boolean>(false);\n\n  // Важно: используем useMemo чтобы не пересоздавать observer при каждом рендере\n  const options = useMemo<IntersectionObserverInit>(() => ({ threshold: 1 }), []);\n\n  useIntersection(\n    ref,\n    ({ isIntersecting }) => {\n      toggleViewing(isIntersecting);\n    },\n    options,\n  );\n\n  const style: CSSProperties = {\n    aspectRatio: '1 / 1',\n    background: COLORS.get('basic-gray12'),\n    borderRadius: '8px',\n    transition: 'background 0.2s ease-in-out',\n    ...(viewing && { background: COLORS.get('basic-blue') }),\n  };\n\n  return <div ref={ref} style={style} />;\n}\n\nexport function Primary() {\n  return (\n    <>\n      <div style={gridStyle}>\n        <h3 style={titleStyle}>Квадраты, которые полностью видны будут синими</h3>\n        {[...Array(500).keys()].map(index => (\n          <Square key={index} />\n        ))}\n      </div>\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:53},endLoc:{col:1,line:64},startBody:{col:7,line:53},endBody:{col:1,line:64}}}},layout:"padded"}},gridStyle={maxWidth:"1024px",margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"8px",padding:"8px"},titleStyle={gridRow:"1",gridColumn:"1 / 5"};function Square(){const ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),[viewing,toggleViewing]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),options=(0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)((()=>({threshold:1})),[]);(0,_sima_land_ui_nucleons_hooks__WEBPACK_IMPORTED_MODULE_0__.sx)(ref,(({isIntersecting})=>{toggleViewing(isIntersecting)}),options);const style={aspectRatio:"1 / 1",background:_colors__WEBPACK_IMPORTED_MODULE_2__.D.get("basic-gray12"),borderRadius:"8px",transition:"background 0.2s ease-in-out",...viewing&&{background:_colors__WEBPACK_IMPORTED_MODULE_2__.D.get("basic-blue")}};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{ref,style})}Square.displayName="Square";const Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:gridStyle,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3",{style:titleStyle,children:"Квадраты, которые полностью видны будут синими"}),[...Array(500).keys()].map((index=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Square,{},index)))]})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <div style={gridStyle}>\n        <h3 style={titleStyle}>Квадраты, которые полностью видны будут синими</h3>\n        {[...Array(500).keys()].map(index => <Square key={index} />)}\n      </div>\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/helpers/is-browser.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isBrowser(){return"undefined"!=typeof window}__webpack_require__.d(__webpack_exports__,{j:()=>isBrowser})},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js"),is_browser=__webpack_require__("./src/helpers/is-browser.ts");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};function createRegistry(){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:window.matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){return mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn),{unsubscribe:()=>{mql.removeEventListener?mql.removeEventListener("change",fn):mql.removeListener&&mql.removeListener(fn)}}}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=(0,react.useState)(null);return useIsomorphicLayoutEffect((()=>{(0,is_browser.j)()&&setRegistry(createRegistry())}),[]),(0,jsx_runtime.jsx)(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1);return useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||createRegistry(),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}BreakpointProvider.displayName="BreakpointProvider";try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=new IntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,callbackRef,options])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}}}]);