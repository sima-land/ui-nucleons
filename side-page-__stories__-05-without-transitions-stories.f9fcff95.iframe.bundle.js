/*! For license information please see side-page-__stories__-05-without-transitions-stories.f9fcff95.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[7642],{"./src/side-page/__stories__/05-without-transitions.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithoutTransitions:()=>WithoutTransitions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/side-page/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/SidePage",component:_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f,parameters:{storySource:{source:"import { SidePage } from '@sima-land/ui-nucleons/side-page';\nimport { useState } from 'react';\nimport { Button } from '@sima-land/ui-nucleons/button';\nexport default {\n  title: 'common/SidePage',\n  component: SidePage,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function WithoutTransitions() {\n  const [shown, toggle] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => toggle(true)}>\n        Показать\n      </Button>\n\n      <SidePage size='s' shown={shown} onClose={() => toggle(false)}>\n        <SidePage.Header divided title='Проверка' subtitle='Без анимаций' onClose={() => toggle(false)} />\n      </SidePage>\n    </>;\n}\nWithoutTransitions.storyName = 'Без анимаций';\nWithoutTransitions.parameters = {\n  ...WithoutTransitions.parameters,\n  docs: {\n    ...WithoutTransitions.parameters?.docs,\n    source: {\n      originalSource: \"function WithoutTransitions() {\\n  const [shown, toggle] = useState<boolean>(false);\\n  return <>\\n      <Button size='s' onClick={() => toggle(true)}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C\\n      </Button>\\n\\n      <SidePage size='s' shown={shown} onClose={() => toggle(false)}>\\n        <SidePage.Header divided title='\\u041F\\u0440\\u043E\\u0432\\u0435\\u0440\\u043A\\u0430' subtitle='\\u0411\\u0435\\u0437 \\u0430\\u043D\\u0438\\u043C\\u0430\\u0446\\u0438\\u0439' onClose={() => toggle(false)} />\\n      </SidePage>\\n    </>;\\n}\",\n      ...WithoutTransitions.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"without-transitions":{startLoc:{col:7,line:11},endLoc:{col:1,line:22},startBody:{col:7,line:11},endBody:{col:1,line:22}}}},layout:"padded"}},WithoutTransitions=function WithoutTransitions(){const[shown,toggle]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>toggle(!0),children:"Показать"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f,{size:"s",shown,onClose:()=>toggle(!1),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f.Header,{divided:!0,title:"Проверка",subtitle:"Без анимаций",onClose:()=>toggle(!1)})})]})};WithoutTransitions.storyName="Без анимаций",WithoutTransitions.parameters={...WithoutTransitions.parameters,docs:{...WithoutTransitions.parameters?.docs,source:{originalSource:"function WithoutTransitions() {\n  const [shown, toggle] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => toggle(true)}>\n        Показать\n      </Button>\n\n      <SidePage size='s' shown={shown} onClose={() => toggle(false)}>\n        <SidePage.Header divided title='Проверка' subtitle='Без анимаций' onClose={() => toggle(false)} />\n      </SidePage>\n    </>;\n}",...WithoutTransitions.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutTransitions"]},"./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ye:()=>PageScrollLock,kI:()=>BSL_IGNORE_ATTR});var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLock{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.Qp,enableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1}},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kI:()=>body_scroll_lock.kI,RA:()=>PageScrollProvider,PP:()=>usePageScrollLock});var body_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageScrollContext=(0,react.createContext)(null),DEFAULTS={adapter:(element,options)=>new body_scroll_lock.Ye(element,options)};function PageScrollProvider({children,adapter}){if(null!==(0,react.useContext)(PageScrollContext))throw Error("PageScrollContext: only one provider allowed in jsx tree");return(0,jsx_runtime.jsx)(PageScrollContext.Provider,{value:{adapter},children})}function usePageScrollContext(){return(0,react.useContext)(PageScrollContext)||DEFAULTS}PageScrollProvider.displayName="PageScrollProvider";try{PageScrollProvider.displayName="PageScrollProvider",PageScrollProvider.__docgenInfo={description:"Провайдер реализации блокировки прокрутки.",displayName:"PageScrollProvider",props:{adapter:{defaultValue:null,description:"",name:"adapter",required:!0,type:{name:"PageScrollLockAdapterFactory"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"]={docgenInfo:PageScrollProvider.__docgenInfo,name:"PageScrollProvider",path:"src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"})}catch(__react_docgen_typescript_loader_error){}try{usePageScrollContext.displayName="usePageScrollContext",usePageScrollContext.__docgenInfo={description:"Хук использования реализации блокировки прокрутки.",displayName:"usePageScrollContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"]={docgenInfo:usePageScrollContext.__docgenInfo,name:"usePageScrollContext",path:"src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"})}catch(__react_docgen_typescript_loader_error){}const hook_DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options=hook_DEFAULTS){const{adapter}=usePageScrollContext();(0,hooks.LI)((()=>{const element=ref.current;if(element&&options.lockEnabled){const pageScroll=adapter(element,options);return pageScroll.lock(),()=>pageScroll.unlock()}}),[options?.lockEnabled,options?.reserveScrollBarGap])}},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/identity.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIdentityRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/spinner/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$j:()=>Spinner,WV:()=>SpinnerSVG});var lodash=__webpack_require__("./node_modules/lodash/lodash.js"),colors=__webpack_require__("./src/colors/index.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),spinner_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(spinner_module.Z,options);const spinner_spinner_module=spinner_module.Z&&spinner_module.Z.locals?spinner_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(spinner_spinner_module),DIAMETERS={s:20,m:48,l:80,small:20,medium:48,large:80},DEFAULT_COLOR="basic-blue";function Spinner({size="m",color=DEFAULT_COLOR,className,style,"data-testid":testId="spinner"}){const readySize=(0,lodash.has)(DIAMETERS,size)?size:"m",readyColor=colors.D.has(color)?color:DEFAULT_COLOR;return(0,jsx_runtime.jsx)("div",{className,style,"data-testid":testId,children:(0,jsx_runtime.jsx)(SpinnerSVG,{size:readySize,color:readyColor,"data-testid":null})})}function SpinnerSVG({size="m",color=DEFAULT_COLOR,className,style,"data-testid":testId="spinner"}){const diameter=DIAMETERS[size],radius=diameter/2;return(0,jsx_runtime.jsx)("svg",{style,className:cx("spinner",`size-${size}`,className),viewBox:`0 0 ${diameter} ${diameter}`,width:diameter,height:diameter,stroke:colors.D.get(color),"data-testid":testId,children:(0,jsx_runtime.jsx)("circle",{className:cx("circle"),cx:radius,cy:radius,r:radius-1})})}Spinner.displayName="Spinner",SpinnerSVG.displayName="SpinnerSVG";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Компонент спиннера.",displayName:"Spinner",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"small"'},{value:'"l"'},{value:'"m"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/index.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/spinner/index.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}try{SpinnerSVG.displayName="SpinnerSVG",SpinnerSVG.__docgenInfo={description:"Спиннер.\nВыделен в отдельный компонент для возможности использования без обертки в виде div.",displayName:"SpinnerSVG",props:{size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"small"'},{value:'"l"'},{value:'"m"'},{value:'"medium"'},{value:'"large"'}]}},color:{defaultValue:{value:"basic-blue"},description:"Цвет.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'}]}},className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | null | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/spinner/index.tsx#SpinnerSVG"]={docgenInfo:SpinnerSVG.__docgenInfo,name:"SpinnerSVG",path:"src/spinner/index.tsx#SpinnerSVG"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qp:()=>disableBodyScroll,tG:()=>enableBodyScroll});var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/spinner/spinner.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".spinner-module__spinner__ea4{display:block}.spinner-module__spinner__ea4 .spinner-module__circle__f15{fill:none;stroke-width:2;stroke-linecap:round}.spinner-module__spinner__ea4.spinner-module__size-s__eb9{width:18px;height:18px}.spinner-module__spinner__ea4.spinner-module__size-s__eb9 .spinner-module__circle__f15{animation:spinner-module__dash-s__c10 600ms linear infinite}@keyframes spinner-module__dash-s__c10{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-module__spinner__ea4.spinner-module__size-m__cdb{width:46px;height:46px}.spinner-module__spinner__ea4.spinner-module__size-m__cdb .spinner-module__circle__f15{animation:spinner-module__dash-m__f70 750ms linear infinite}@keyframes spinner-module__dash-m__f70{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-module__spinner__ea4.spinner-module__size-l__f3d{width:78px;height:78px}.spinner-module__spinner__ea4.spinner-module__size-l__f3d .spinner-module__circle__f15{animation:spinner-module__dash-l__a37 950ms linear infinite}@keyframes spinner-module__dash-l__a37{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}.spinner-module__spinner__ea4.spinner-module__size-small__cf8{width:18px;height:18px}.spinner-module__spinner__ea4.spinner-module__size-small__cf8 .spinner-module__circle__f15{animation:spinner-module__dash-small__be4 600ms linear infinite}@keyframes spinner-module__dash-small__be4{0%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:14.1371669412}50%{stroke-dasharray:28.2743338823,28.2743338823}100%{stroke-dasharray:7.0685834706,49.480084294;stroke-dashoffset:-42.4115008235}}.spinner-module__spinner__ea4.spinner-module__size-medium__dd1{width:46px;height:46px}.spinner-module__spinner__ea4.spinner-module__size-medium__dd1 .spinner-module__circle__f15{animation:spinner-module__dash-medium__ac2 750ms linear infinite}@keyframes spinner-module__dash-medium__ac2{0%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:36.1283155163}50%{stroke-dasharray:72.2566310326,72.2566310326}100%{stroke-dasharray:18.0641577581,126.449104307;stroke-dashoffset:-108.3849465488}}.spinner-module__spinner__ea4.spinner-module__size-large__aa6{width:78px;height:78px}.spinner-module__spinner__ea4.spinner-module__size-large__aa6 .spinner-module__circle__f15{animation:spinner-module__dash-large__e53 950ms linear infinite}@keyframes spinner-module__dash-large__e53{0%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:61.261056745}50%{stroke-dasharray:122.52211349,122.52211349}100%{stroke-dasharray:30.6305283725,214.4136986075;stroke-dashoffset:-183.783170235}}@media all and (-ms-high-contrast: none){*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-s__eb9 .spinner-module__circle__f15{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-m__cdb .spinner-module__circle__f15{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-l__f3d .spinner-module__circle__f15{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-small__cf8 .spinner-module__circle__f15{stroke-dasharray:42.4115008235,14.1371669412;stroke-dashoffset:14.1371669412}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-medium__dd1 .spinner-module__circle__f15{stroke-dasharray:108.3849465488,36.1283155163;stroke-dashoffset:36.1283155163}*::-ms-backdrop,.spinner-module__spinner__ea4{animation:spinner-module__rotate__c5e 2s linear infinite}*::-ms-backdrop,.spinner-module__spinner__ea4.spinner-module__size-large__aa6 .spinner-module__circle__f15{stroke-dasharray:183.783170235,61.261056745;stroke-dashoffset:61.261056745}}@keyframes spinner-module__rotate__c5e{to{transform:rotate(360deg)}}","",{version:3,sources:["webpack://./src/spinner/spinner.module.scss"],names:[],mappings:"AAsBA,8BACE,aAAA,CACA,2DACE,SAAA,CACA,cAAA,CACA,oBAAA,CAKA,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,0CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,0CAAA,CACA,gCAAA,CAAA,CAhBN,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,4CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,4CAAA,CACA,iCAAA,CAAA,CAhBN,0DACE,UAAA,CACA,WAAA,CACA,uFACE,2DAAA,CAEF,uCACE,GACE,6CAAA,CACA,8BAAA,CAEF,IACE,0CAAA,CAEF,KACE,6CAAA,CACA,gCAAA,CAAA,CAhBN,8DACE,UAAA,CACA,WAAA,CACA,2FACE,+DAAA,CAEF,2CACE,GACE,0CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,0CAAA,CACA,gCAAA,CAAA,CAhBN,+DACE,UAAA,CACA,WAAA,CACA,4FACE,gEAAA,CAEF,4CACE,GACE,4CAAA,CACA,+BAAA,CAEF,IACE,4CAAA,CAEF,KACE,4CAAA,CACA,iCAAA,CAAA,CAhBN,8DACE,UAAA,CACA,WAAA,CACA,2FACE,+DAAA,CAEF,2CACE,GACE,6CAAA,CACA,8BAAA,CAEF,IACE,0CAAA,CAEF,KACE,6CAAA,CACA,gCAAA,CAAA,CAQV,yCAMI,8CAEE,wDAAA,CAEF,uGAEE,4CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,uGAEE,6CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,uGAEE,2CAAA,CACA,8BAAA,CAPF,8CAEE,wDAAA,CAEF,2GAEE,4CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,4GAEE,6CAAA,CACA,+BAAA,CAPF,8CAEE,wDAAA,CAEF,2GAEE,2CAAA,CACA,8BAAA,CAAA,CAKN,uCACE,GACE,wBAAA,CAAA",sourcesContent:["@use 'sass:map';\n\n$pi: 3.141592653589793;\n$sizes: (\n  s: 20,\n  m: 48,\n  l: 80,\n  // legacy, @todo удалить со временем:\n  small: 20,\n  medium: 48,\n  large: 80,\n);\n$durations: (\n  s: 600ms,\n  m: 750ms,\n  l: 950ms,\n  // legacy, @todo удалить со временем:\n  small: 600ms,\n  medium: 750ms,\n  large: 950ms,\n);\n\n.spinner {\n  display: block;\n  .circle {\n    fill: none;\n    stroke-width: 2;\n    stroke-linecap: round;\n  }\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n    &.size-#{$sizeKey} {\n      width: #{$diameter}px;\n      height: #{$diameter}px;\n      .circle {\n        animation: dash-#{$sizeKey} map.get($durations, $sizeKey) linear infinite;\n      }\n      @keyframes dash-#{$sizeKey} {\n        0% {\n          stroke-dasharray: $perimeter * 0.125, $perimeter * 0.875;\n          stroke-dashoffset: $perimeter * 0.25;\n        }\n        50% {\n          stroke-dasharray: $perimeter * 0.5, $perimeter * 0.5;\n        }\n        100% {\n          stroke-dasharray: $perimeter * 0.125, $perimeter * 0.875;\n          stroke-dashoffset: -$perimeter + ($perimeter * 0.25);\n        }\n      }\n    }\n  }\n}\n\n// fallback (в IE не поддерживается CSS-анимация SVG)\n@media all and (-ms-high-contrast: none) {\n  @each $sizeKey, $size in $sizes {\n    $diameter: $size - 2;\n    $perimeter: $diameter * $pi;\n\n    // IE11 only\n    *::-ms-backdrop,\n    .spinner {\n      animation: rotate 2s linear infinite;\n    }\n    *::-ms-backdrop,\n    .spinner.size-#{$sizeKey} .circle {\n      stroke-dasharray: $perimeter * 0.75, $perimeter * 0.25;\n      stroke-dashoffset: $perimeter * 0.25;\n    }\n  }\n}\n\n@keyframes rotate {\n  to {\n    transform: rotate(360deg);\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={spinner:"spinner-module__spinner__ea4",circle:"spinner-module__circle__f15","size-s":"spinner-module__size-s__eb9","dash-s":"spinner-module__dash-s__c10","size-m":"spinner-module__size-m__cdb","dash-m":"spinner-module__dash-m__f70","size-l":"spinner-module__size-l__f3d","dash-l":"spinner-module__dash-l__a37","size-small":"spinner-module__size-small__cf8","dash-small":"spinner-module__dash-small__be4","size-medium":"spinner-module__size-medium__dd1","dash-medium":"spinner-module__dash-medium__ac2","size-large":"spinner-module__size-large__aa6","dash-large":"spinner-module__dash-large__e53",rotate:"spinner-module__rotate__c5e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);