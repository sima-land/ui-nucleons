"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5187],{"./src/hint/__stories__/view-01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_hint__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/hint/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"service/HintView",component:_sima_land_ui_nucleons_hint__WEBPACK_IMPORTED_MODULE_0__.UQ,parameters:{storySource:{source:"import { HintView } from '@sima-land/ui-nucleons/hint';\n\nexport default {\n  title: 'service/HintView',\n  component: HintView,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  return (\n    <>\n      <HintView style={{ position: 'relative' }}>\n        Какой-то короткий текст получился\n        <HintView.Arrow style={{ top: 'calc(100% - 3px)', left: 'calc(50% - 3px)' }} />\n      </HintView>\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:20},startBody:{col:7,line:11},endBody:{col:1,line:20}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_sima_land_ui_nucleons_hint__WEBPACK_IMPORTED_MODULE_0__.UQ,{style:{position:"relative"},children:["Какой-то короткий текст получился",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_hint__WEBPACK_IMPORTED_MODULE_0__.UQ.Arrow,{style:{top:"calc(100% - 3px)",left:"calc(50% - 3px)"}})]})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <HintView style={{\n      position: 'relative'\n    }}>\n        Какой-то короткий текст получился\n        <HintView.Arrow style={{\n        top: 'calc(100% - 3px)',\n        left: 'calc(50% - 3px)'\n      }} />\n      </HintView>\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/context/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GS:()=>IntersectionObserverContext,HX:()=>MatchMediaContext,ho:()=>ResizeObserverContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MatchMediaContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({matchMedia:query=>window.matchMedia(query)}),ResizeObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createResizeObserver:callback=>new window.ResizeObserver(callback)}),IntersectionObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createIntersectionObserver:(...args)=>new window.IntersectionObserver(...args)})},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hint/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kW:()=>Hint,UQ:()=>HintView,fK:()=>getArrowFloatingStyle,HM:()=>hintFloatingConfig,W0:()=>useHintFloating,Hh:()=>useHintFloatingStyle,Rr:()=>useHintOnClick,Uo:()=>useHintOnHover,C_:()=>useTempHintState});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hint_view_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint/hint-view.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hint_view_m.Z,options);const hint_hint_view_m=hint_view_m.Z&&hint_view_m.Z.locals?hint_view_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(hint_hint_view_m),arrowSquareSize=Math.sqrt(32);function HintView({hintRef,className,children,"data-testid":testId="hint",...rest}){return(0,jsx_runtime.jsx)("div",{ref:hintRef,className:cx("root",className),"data-testid":testId,...rest,children})}HintView.Arrow=function HintArrow({arrowRef,className,...rest}){return(0,jsx_runtime.jsx)("div",{ref:arrowRef,className:cx("arrow",className),...rest})};try{HintView.displayName="HintView",HintView.__docgenInfo={description:'"Хинт" - всплывающая подсказка.',displayName:"HintView",props:{hintRef:{defaultValue:null,description:"Ref корневого элемента.",name:"hintRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#HintView"]={docgenInfo:HintView.__docgenInfo,name:"HintView",path:"src/hint/hint-view.tsx#HintView"})}catch(__react_docgen_typescript_loader_error){}try{Arrow.displayName="HintView.Arrow",Arrow.__docgenInfo={description:"Стрелка хинта.",displayName:"HintView.Arrow",props:{arrowRef:{defaultValue:null,description:"",name:"arrowRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#HintView.Arrow"]={docgenInfo:HintView.Arrow.__docgenInfo,name:"HintView.Arrow",path:"src/hint/hint-view.tsx#HintView.Arrow"})}catch(__react_docgen_typescript_loader_error){}try{arrowSquareSize.displayName="arrowSquareSize",arrowSquareSize.__docgenInfo={description:"Длина стороны квадрата, составленного из двух стрелок (треугольников).",displayName:"arrowSquareSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint-view.tsx#arrowSquareSize"]={docgenInfo:arrowSquareSize.__docgenInfo,name:"arrowSquareSize",path:"src/hint/hint-view.tsx#arrowSquareSize"})}catch(__react_docgen_typescript_loader_error){}var portal=__webpack_require__("./src/portal/index.ts");function Hint({open,...rest}){return open?(0,jsx_runtime.jsx)(portal.h,{children:(0,jsx_runtime.jsx)(HintInner,{...rest})}):null}function HintInner({arrowRef,children,...rest}){return(0,jsx_runtime.jsxs)(HintView,{...rest,children:[children,(0,jsx_runtime.jsx)(HintView.Arrow,{arrowRef})]})}try{Hint.displayName="Hint",Hint.__docgenInfo={description:"Всплывающий хинт.",displayName:"Hint",props:{open:{defaultValue:null,description:"Нужно ли показать хинт.",name:"open",required:!1,type:{name:"boolean | undefined"}},arrowRef:{defaultValue:null,description:'Ref элемента "стрелки".',name:"arrowRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},hintRef:{defaultValue:null,description:"Ref корневого элемента.",name:"hintRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint/hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"src/hint/hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),floating_ui_core=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),floating_ui_react=__webpack_require__("./node_modules/@floating-ui/react/dist/floating-ui.react.mjs"),helpers_layer=__webpack_require__("./src/helpers/layer.ts"),use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function hintFloatingConfig({arrowRef}={}){return{placement:"top",middleware:[(0,floating_ui_core.cv)(4+(arrowRef?4:0)),(0,floating_ui_core.RR)({padding:16,crossAxis:!1,fallbackAxisSideDirection:"start"}),(0,floating_ui_core.uY)({padding:16}),arrowRef&&(0,floating_ui_react_dom.x7)({element:arrowRef,padding:4})],whileElementsMounted:floating_ui_dom.Me}}function useHintFloating(props){const[arrowEl,setArrowEl]=(0,react.useState)(null),arrowRef=(0,use_identity_ref.y)(arrowEl),floating=(0,floating_ui_react.YF)({...hintFloatingConfig(arrowEl?{arrowRef}:void 0),...props});return{...floating,refs:{...floating.refs,setArrow:setArrowEl}}}function useHintFloatingStyle(floating){const layer=(0,helpers_layer.s)(),arrowStyle=Object.fromEntries(Object.entries(getArrowFloatingStyle(floating)).map((([key,value])=>[`--hint-arrow-${key}`,value])));return{position:floating.strategy,top:floating.y,left:floating.x,zIndex:layer+2,...arrowStyle}}function getArrowFloatingStyle({placement,middlewareData}){const{arrow:arrowData}=middlewareData;if(!arrowData)return{};const maybe=value=>value?`${value}px`:"",arrowShift=()=>-arrowSquareSize/2+"px";let arrowStyle={};switch(placement.split("-")[0]){case"top":arrowStyle={left:maybe(arrowData?.x),bottom:arrowShift()};break;case"bottom":arrowStyle={left:maybe(arrowData?.x),top:arrowShift()};break;case"left":arrowStyle={top:maybe(arrowData?.y),right:arrowShift()};break;case"right":arrowStyle={top:maybe(arrowData?.y),left:arrowShift()}}return arrowStyle}function useHintOnHover(floating,props){const style=useHintFloatingStyle(floating),hover=(0,floating_ui_react.XI)(floating.context,{handleClose:(0,floating_ui_react.xp)(),...props});return(0,floating_ui_react.NI)([hover,{floating:{style}}])}function useHintOnClick(floating){const style=useHintFloatingStyle(floating),click=(0,floating_ui_react.eS)(floating.context),dismiss=(0,floating_ui_react.bQ)(floating.context);return(0,floating_ui_react.NI)([click,dismiss,{floating:{style}}])}function useTempHintState(initialState,{timeout=3e3}={}){const[open,setOpen]=(0,react.useState)(initialState),timerRef=(0,react.useRef)(null),updateTimer=(0,react.useCallback)((value=>{null!==timerRef.current&&clearTimeout(timerRef.current),value&&(timerRef.current=setTimeout((()=>setOpen(!1)),timeout))}),[timeout]);(0,react.useEffect)((()=>{updateTimer(open)}),[]);const toggle=(0,react.useCallback)((next=>{const state="function"==typeof next?next(open):next;updateTimer(state),setOpen(state)}),[open,setOpen,updateTimer]);return[open,toggle]}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>use_isomorphic_layout_effect_useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var context=__webpack_require__("./src/context/index.ts");__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=useState(null),{matchMedia}=useContext(MatchMediaContext);return useIsomorphicLayoutEffect((()=>{isBrowser()&&setRegistry(createRegistry({matchMedia}))}),[]),_jsx(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||function utils_createRegistry({matchMedia}={matchMedia:window.matchMedia}){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn)}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}({matchMedia}),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback),{createIntersectionObserver}=(0,react.useContext)(context.GS);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=createIntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,options,createIntersectionObserver])}const use_isomorphic_layout_effect_useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./src/portal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react=__webpack_require__("./node_modules/react/index.js"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),hooks=__webpack_require__("./src/hooks/index.ts");function Portal({children,defineRoot=()=>document.body,onMount}){const[mounted,setMounted]=(0,react.useState)(!1),ref=(0,react.useRef)();(0,hooks.LI)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]);const onMountRef=(0,react.useRef)(onMount);return onMountRef.current=onMount,(0,hooks.LI)((()=>{mounted&&onMountRef.current?.()}),[mounted]),mounted&&ref.current?(0,react_dom.createPortal)(children,ref.current):null}try{Portal.displayName="Portal",Portal.__docgenInfo={description:"Портал - выводит содержимое в портале в произвольную часть DOM.",displayName:"Portal",props:{defineRoot:{defaultValue:{value:"() => document.body"},description:"Вернет элемент, в который нужно вывести содержимое через портал.",name:"defineRoot",required:!1,type:{name:"(() => HTMLElement) | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},onMount:{defaultValue:null,description:"Сработает после того как контент будет монтирован в DOM.",name:"onMount",required:!1,type:{name:"VoidFunction | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/portal.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/portal/portal.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint/hint-view.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".hint-view-m__root__f9c{border-radius:4px;background:#3a3a3b;padding:8px;max-width:280px;min-width:36px;min-height:36px;display:inline-flex;align-items:center;color:#fff;font-size:14px;line-height:20px;font-weight:400;text-align:center;overflow-wrap:break-word}.hint-view-m__arrow__bf0{position:absolute;width:5.6568542495px;height:5.6568542495px;transform:rotate(45deg);background:#3a3a3b;top:var(--hint-arrow-top);left:var(--hint-arrow-left);right:var(--hint-arrow-right);bottom:var(--hint-arrow-bottom);z-index:-1}","",{version:3,sources:["webpack://./src/hint/hint-view.m.scss","webpack://./src/colors.scss"],names:[],mappings:"AAGA,wBACE,iBAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,mBAAA,CACA,kBAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CACA,wBAAA,CAGF,yBACE,iBAAA,CACA,oBAAA,CACA,qBAAA,CACA,uBAAA,CACA,kBCpBa,CDqBb,yBAAA,CACA,2BAAA,CACA,6BAAA,CACA,+BAAA,CACA,UAAA",sourcesContent:["@use 'sass:math';\n@use '../colors';\n\n.root {\n  border-radius: 4px;\n  background: colors.$basic-gray76;\n  padding: 8px;\n  max-width: 280px;\n  min-width: 36px;\n  min-height: 36px;\n  display: inline-flex;\n  align-items: center;\n  color: #fff;\n  font-size: 14px;\n  line-height: 20px;\n  font-weight: 400;\n  text-align: center;\n  overflow-wrap: break-word;\n}\n\n.arrow {\n  position: absolute;\n  width: 1px * math.sqrt((4 * 4) + (4 * 4));\n  height: 1px * math.sqrt((4 * 4) + (4 * 4));\n  transform: rotate(45deg);\n  background: colors.$basic-gray76;\n  top: var(--hint-arrow-top);\n  left: var(--hint-arrow-left);\n  right: var(--hint-arrow-right);\n  bottom: var(--hint-arrow-bottom);\n  z-index: -1; // чтобы был скрыт при отсутствии позиционирования\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hint-view-m__root__f9c",arrow:"hint-view-m__arrow__bf0"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);