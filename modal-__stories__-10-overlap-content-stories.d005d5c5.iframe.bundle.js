"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5616],{"./src/modal/__stories__/10-overlap-content.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithOverlapContent:()=>WithOverlapContent,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/modal/index.ts"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/index.ts"),_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/arrow-button/index.ts"),react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,parameters:{storySource:{source:"import { Modal, ModalBody, ModalOverlap } from '@sima-land/ui-nucleons/modal';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';\nimport { CSSProperties, useState } from 'react';\n\nexport default {\n  title: 'common/Modal',\n  component: Modal,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst styles = {\n  content: {\n    height: 360,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    fontSize: '64px',\n  } satisfies CSSProperties,\n  decrease: {\n    position: 'absolute',\n    top: '50%',\n    transform: 'translateY(-50%)',\n    right: 'calc(100% + 24px)',\n  } satisfies CSSProperties,\n  increase: {\n    position: 'absolute',\n    top: '50%',\n    transform: 'translateY(-50%)',\n    left: 'calc(100% + 24px)',\n  } satisfies CSSProperties,\n};\n\nexport function WithOverlapContent() {\n  const [open, setOpen] = useState<boolean>(false);\n  const [count, setCount] = useState(99);\n\n  return (\n    <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && (\n        <Modal size='m' onClose={() => setOpen(false)}>\n          <ModalBody>\n            <div style={styles.content}>{count}</div>\n          </ModalBody>\n          <ModalOverlap>\n            <ArrowButton\n              style={styles.decrease}\n              direction='left'\n              onClick={() => setCount(count - 1)}\n            />\n            <ArrowButton\n              style={styles.increase}\n              direction='right'\n              onClick={() => setCount(count + 1)}\n            />\n          </ModalOverlap>\n        </Modal>\n      )}\n    </>\n  );\n}\n\nWithOverlapContent.storyName = 'Контент рядом с окном';\n",locationsMap:{"with-overlap-content":{startLoc:{col:7,line:36},endLoc:{col:1,line:67},startBody:{col:7,line:36},endBody:{col:1,line:67}}}},layout:"padded"}},styles={content:{height:360,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"64px"},decrease:{position:"absolute",top:"50%",transform:"translateY(-50%)",right:"calc(100% + 24px)"},increase:{position:"absolute",top:"50%",transform:"translateY(-50%)",left:"calc(100% + 24px)"}},WithOverlapContent=function WithOverlapContent(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(!1),[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(99);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__.z,{size:"s",onClick:()=>setOpen(!0),children:"Показать окно"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,{size:"m",onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.fe,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:styles.content,children:count})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.MM,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_2__.b,{style:styles.decrease,direction:"left",onClick:()=>setCount(count-1)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_arrow_button__WEBPACK_IMPORTED_MODULE_2__.b,{style:styles.increase,direction:"right",onClick:()=>setCount(count+1)})]})]})]})};WithOverlapContent.storyName="Контент рядом с окном",WithOverlapContent.parameters={...WithOverlapContent.parameters,docs:{...WithOverlapContent.parameters?.docs,source:{originalSource:"function WithOverlapContent() {\n  const [open, setOpen] = useState<boolean>(false);\n  const [count, setCount] = useState(99);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal size='m' onClose={() => setOpen(false)}>\n          <ModalBody>\n            <div style={styles.content}>{count}</div>\n          </ModalBody>\n          <ModalOverlap>\n            <ArrowButton style={styles.decrease} direction='left' onClick={() => setCount(count - 1)} />\n            <ArrowButton style={styles.increase} direction='right' onClick={() => setCount(count + 1)} />\n          </ModalOverlap>\n        </Modal>}\n    </>;\n}",...WithOverlapContent.parameters?.docs?.source}}};const __namedExportsOrder=["WithOverlapContent"]},"./src/arrow-button/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>ArrowButton});var ArrowUp=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowUp.js"),ArrowRight=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowRight.js"),ArrowDown=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowDown.js"),ArrowLeft=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js"),Stroked_ArrowUp=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowUp.js"),Stroked_ArrowRight=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowRight.js"),Stroked_ArrowDown=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowDown.js"),Stroked_ArrowLeft=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowLeft.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),arrow_button_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/arrow-button/arrow-button.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(arrow_button_m.Z,options);const arrow_button_arrow_button_m=arrow_button_m.Z&&arrow_button_m.Z.locals?arrow_button_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(arrow_button_arrow_button_m),ICONS={s:{up:Stroked_ArrowUp.Z,right:Stroked_ArrowRight.Z,down:Stroked_ArrowDown.Z,left:Stroked_ArrowLeft.Z},l:{up:ArrowUp.Z,right:ArrowRight.Z,down:ArrowDown.Z,left:ArrowLeft.Z}};function ArrowButton({size="l",direction="right",className,"data-testid":testId="arrow-button",...buttonProps}){const Icon=ICONS[size][direction];return(0,jsx_runtime.jsx)("button",{type:"button",...buttonProps,className:cx("arrow-button",`size-${size}`,className),"data-testid":testId,children:(0,jsx_runtime.jsx)(Icon,{"aria-hidden":!0,fill:"currentColor"})})}try{ArrowButton.displayName="ArrowButton",ArrowButton.__docgenInfo={description:"Кнопка-стрелка - круглая кнопка со стрелкой.",displayName:"ArrowButton",props:{size:{defaultValue:{value:"l"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'}]}},direction:{defaultValue:{value:"right"},description:"Направление (отвечает за иконку).",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"left"'},{value:'"right"'},{value:'"up"'},{value:'"down"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/arrow-button/arrow-button.tsx#ArrowButton"]={docgenInfo:ArrowButton.__docgenInfo,name:"ArrowButton",path:"src/arrow-button/arrow-button.tsx#ArrowButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2","additional-crimson":"#f4446b"}))},"./src/context/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{GS:()=>IntersectionObserverContext,HX:()=>MatchMediaContext,ho:()=>ResizeObserverContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MatchMediaContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({matchMedia:query=>window.matchMedia(query)}),ResizeObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createResizeObserver:callback=>new window.ResizeObserver(callback)}),IntersectionObserverContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({createIntersectionObserver:(...args)=>new window.IntersectionObserver(...args)})},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{on:()=>on})},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gc:()=>useBreakpoint,sx:()=>useIntersection,LI:()=>use_isomorphic_layout_effect_useIsomorphicLayoutEffect,NR:()=>useKeydown,O3:()=>useOutsideClick});var react=__webpack_require__("./node_modules/react/index.js");const Resolution={mxs:0,ms:480,mm:720,ml:840,xs:1024,s:1280,m:1440,l:1600,xl:1920},BREAKPOINTS=["mxs","ms","mm","ml","xs","s","m","l","xl"],BreakpointQuery={getBreakpoint:query=>query.slice(0,-1),getDirection:query=>query.slice(-1),isValid:value=>"string"==typeof value&&value.length>=2&&BREAKPOINTS.includes(BreakpointQuery.getBreakpoint(value))&&["+","-",""].includes(BreakpointQuery.getDirection(value)),parse:query=>[BreakpointQuery.getBreakpoint(query),BreakpointQuery.getDirection(query)],toMediaQuery:query=>{const[breakpoint,direction]=BreakpointQuery.parse(query);return`(${"+"===direction?"min-width":"max-width"}: ${Resolution[breakpoint]+("+"===direction?0:-1)}px)`}};const createSubscription=(item,listener)=>({matches:item.mql.matches,unsubscribe:()=>item.handlers.delete(listener)});var context=__webpack_require__("./src/context/index.ts");__webpack_require__("./node_modules/react/jsx-runtime.js");const Context=(0,react.createContext)(null);function BreakpointProvider({children}){const[contextValue,setRegistry]=useState(null),{matchMedia}=useContext(MatchMediaContext);return useIsomorphicLayoutEffect((()=>{isBrowser()&&setRegistry(createRegistry({matchMedia}))}),[]),_jsx(Context.Provider,{value:contextValue,children})}function useBreakpoint(query){if(!BreakpointQuery.isValid(query))throw Error(`useBreakpoint: Invalid query, "${query}"`);const[,setRegistry]=(0,react.useState)(null),registryFromContext=(0,react.useContext)(Context),[matches,setMatches]=(0,react.useState)(!1),{matchMedia}=(0,react.useContext)(context.HX);return use_isomorphic_layout_effect_useIsomorphicLayoutEffect((()=>{let registry;registry=registryFromContext||function utils_createRegistry({matchMedia}={matchMedia:window.matchMedia}){const registry={items:{},subscribe:(query,listener)=>{let item=registry.items[query];if(item)item.handlers.add(listener);else{const newItem={mql:matchMedia(BreakpointQuery.toMediaQuery(query)),handlers:new Set([listener])};!function media_query_list_subscribe(mql,fn){mql.addEventListener?mql.addEventListener("change",fn):mql.addListener&&mql.addListener(fn)}(newItem.mql,(e=>{newItem.handlers.forEach((fn=>fn(e)))})),item=newItem,registry.items[query]=newItem}return createSubscription(item,listener)}};return registry}({matchMedia}),setRegistry(registryFromContext);const subscription=registry.subscribe(query,(e=>{setMatches(e.matches)}));return setMatches(subscription.matches),subscription.unsubscribe}),[registryFromContext]),matches}try{BreakpointProvider.displayName="BreakpointProvider",BreakpointProvider.__docgenInfo={description:"Провайдер, предоставляющий контекст для использования хуком useBreakpoint.\nНе является обязательным, используется в целях оптимизации.",displayName:"BreakpointProvider",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#BreakpointProvider"]={docgenInfo:BreakpointProvider.__docgenInfo,name:"BreakpointProvider",path:"src/hooks/use-breakpoint/index.tsx#BreakpointProvider"})}catch(__react_docgen_typescript_loader_error){}try{useBreakpoint.displayName="useBreakpoint",useBreakpoint.__docgenInfo={description:"Хук обработки медиа-запроса на основе breakpoint'а дизайн-системы.",displayName:"useBreakpoint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/use-breakpoint/index.tsx#useBreakpoint"]={docgenInfo:useBreakpoint.__docgenInfo,name:"useBreakpoint",path:"src/hooks/use-breakpoint/index.tsx#useBreakpoint"})}catch(__react_docgen_typescript_loader_error){}var use_identity_ref=__webpack_require__("./src/hooks/use-identity-ref/index.ts");function useIntersection(ref,callback,options){const callbackRef=(0,use_identity_ref.y)(callback),{createIntersectionObserver}=(0,react.useContext)(context.GS);(0,react.useEffect)((()=>{const element=ref.current;if(element){const observer=createIntersectionObserver((([entry])=>{callbackRef.current?.(entry)}),options);return observer.observe(element),()=>observer.disconnect()}}),[ref,options,createIntersectionObserver])}const use_isomorphic_layout_effect_useIsomorphicLayoutEffect="undefined"!=typeof window?react.useLayoutEffect:react.useEffect;var helpers_on=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}function useOutsideClick(elementRef,callback){const innerRef=(0,use_identity_ref.y)(elementRef),callbackRef=(0,use_identity_ref.y)(callback);(0,react.useEffect)((()=>(0,helpers_on.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}},"./src/hooks/use-identity-ref/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useIdentityRef(value){const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/arrow-button/arrow-button.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".arrow-button-m__arrow-button__f38{display:inline-flex;align-items:center;justify-content:center;background:#fff;border-radius:50%;margin:0;padding:0;border:0;outline:0;box-sizing:border-box;transition:box-shadow 200ms ease-out;color:#212121}.arrow-button-m__arrow-button__f38:focus-visible{outline:2px solid #1f84db}.arrow-button-m__arrow-button__f38:not(:disabled):hover{cursor:pointer}.arrow-button-m__arrow-button__f38:disabled{color:#c2c2c2}.arrow-button-m__arrow-button__f38.arrow-button-m__size-s__fb9{width:32px;height:32px;box-shadow:0 0 4px rgba(0,0,0,.04),0 4px 8px rgba(0,0,0,.1)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-s__fb9:not(:disabled):hover{box-shadow:0 8px 16px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.04)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-l__c3f{width:56px;height:56px;box-shadow:0 8px 16px rgba(0,0,0,.08),0 0 4px rgba(0,0,0,.04)}.arrow-button-m__arrow-button__f38.arrow-button-m__size-l__c3f:not(:disabled):hover{box-shadow:0 0 4px rgba(0,0,0,.04),0 12px 30px rgba(0,0,0,.1)}","",{version:3,sources:["webpack://./src/arrow-button/arrow-button.m.scss","webpack://./src/colors.scss","webpack://./src/utils.scss","webpack://./src/shadows.scss"],names:[],mappings:"AAIA,mCAEE,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,QAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,qBAAA,CACA,oCAAA,CACA,aCba,CCiFb,iDAPA,yBAAA,CF5DA,wDACE,cAAA,CAEF,4CACE,aCbW,CDeb,+DACE,UAAA,CACA,WAAA,CGjBA,2DACE,CHkBF,oFGbA,6DACE,CHgBJ,+DACE,UAAA,CACA,WAAA,CGnBA,6DACE,CHoBF,oFGjBA,6DACE",sourcesContent:["@use '../colors';\n@use '../utils';\n@use '../shadows';\n\n.arrow-button {\n  @include utils.focus-visible;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  border-radius: 50%;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: 0;\n  box-sizing: border-box;\n  transition: box-shadow 200ms ease-out;\n  color: colors.$basic-gray87;\n  &:not(:disabled):hover {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n  }\n  &.size-s {\n    width: 32px;\n    height: 32px;\n    @include shadows.box-shadow('z2');\n    &:not(:disabled):hover {\n      @include shadows.box-shadow('z3');\n    }\n  }\n  &.size-l {\n    width: 56px;\n    height: 56px;\n    @include shadows.box-shadow('z3');\n    &:not(:disabled):hover {\n      @include shadows.box-shadow('z4');\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","/**\n * Формирует тень по дизайн-гайдам.\n */\n@mixin box-shadow($key) {\n  @if $key == 'z1' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 2px 4px rgba(0, 0, 0, 0.08);\n  } @else if $key == 'z2' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 4px 8px rgba(0, 0, 0, 0.1);\n  } @else if $key == 'z2-straight' {\n    box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);\n  } @else if $key == 'z3' {\n    box-shadow:\n      0 8px 16px rgba(0, 0, 0, 0.08),\n      0 0 4px rgba(0, 0, 0, 0.04);\n  } @else if $key == 'z4' {\n    box-shadow:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 12px 30px rgba(0, 0, 0, 0.1);\n  } @else {\n    @warn 'No such shadow `#{$key}`.';\n  }\n}\n\n@function get-box-shadow($key) {\n  $result: none;\n\n  @if $key == 'z1' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 2px 4px rgba(0, 0, 0, 0.08);\n  } @else if $key == 'z2' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 4px 8px rgba(0, 0, 0, 0.1);\n  } @else if $key == 'z2-straight' {\n    $result: 0 0 15px rgba(0, 0, 0, 0.12);\n  } @else if $key == 'z3' {\n    $result:\n      0 8px 16px rgba(0, 0, 0, 0.08),\n      0 0 4px rgba(0, 0, 0, 0.04);\n  } @else if $key == 'z4' {\n    $result:\n      0 0 4px rgba(0, 0, 0, 0.04),\n      0 12px 30px rgba(0, 0, 0, 0.1);\n  } @else {\n    @warn 'No such shadow `#{$key}`.';\n  }\n\n  @return $result;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"arrow-button":"arrow-button-m__arrow-button__f38","size-s":"arrow-button-m__size-s__fb9","size-l":"arrow-button-m__size-l__c3f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);