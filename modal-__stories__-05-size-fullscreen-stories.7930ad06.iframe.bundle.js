/*! For license information please see modal-__stories__-05-size-fullscreen-stories.7930ad06.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5806],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M11.707 3.293a1 1 0 0 1 0 1.414L4.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/modal/__stories__/05-size-fullscreen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{SizeFullscreen:()=>SizeFullscreen,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/modal/index.tsx"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.tsx"),_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/layout/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u,parameters:{storySource:{source:"import { useState } from 'react';\nimport { Modal } from '@sima-land/ui-nucleons/modal';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nexport default {\n  title: 'common/Modal',\n  component: Modal,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function SizeFullscreen() {\n  const [open, setOpen] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal size='fullscreen'>\n          <Modal.Header title='Полноэкранное модальное окно' onClose={() => setOpen(false)} divided />\n          <Modal.Body>\n            <div style={{\n          height: 'calc(100vh - var(--modal-header-height) - var(--modal-footer-height))',\n          background: '#eee'\n        }}>\n              <Layout>\n                <div style={{\n              padding: '24px'\n            }}>Содержимое модального окна</div>\n              </Layout>\n            </div>\n          </Modal.Body>\n          <Modal.Footer divided>\n            <Layout style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'flex-end',\n          height: '100%'\n        }}>\n              <Button viewType='secondary' style={{\n            marginRight: 12\n          }}>\n                Кнопка\n              </Button>\n              <Button viewType='primary'>Кнопка</Button>\n            </Layout>\n          </Modal.Footer>\n        </Modal>}\n    </>;\n}\nSizeFullscreen.storyName = 'Размер fullscreen';\nSizeFullscreen.parameters = {\n  ...SizeFullscreen.parameters,\n  docs: {\n    ...SizeFullscreen.parameters?.docs,\n    source: {\n      originalSource: \"function SizeFullscreen() {\\n  const [open, setOpen] = useState<boolean>(false);\\n  return <>\\n      <Button size='s' onClick={() => setOpen(true)}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E\\n      </Button>\\n\\n      {open && <Modal size='fullscreen'>\\n          <Modal.Header title='\\u041F\\u043E\\u043B\\u043D\\u043E\\u044D\\u043A\\u0440\\u0430\\u043D\\u043D\\u043E\\u0435 \\u043C\\u043E\\u0434\\u0430\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043E\\u043A\\u043D\\u043E' onClose={() => setOpen(false)} divided />\\n          <Modal.Body>\\n            <div style={{\\n          height: 'calc(100vh - var(--modal-header-height) - var(--modal-footer-height))',\\n          background: '#eee'\\n        }}>\\n              <Layout>\\n                <div style={{\\n              padding: '24px'\\n            }}>\\u0421\\u043E\\u0434\\u0435\\u0440\\u0436\\u0438\\u043C\\u043E\\u0435 \\u043C\\u043E\\u0434\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u043E\\u043A\\u043D\\u0430</div>\\n              </Layout>\\n            </div>\\n          </Modal.Body>\\n          <Modal.Footer divided>\\n            <Layout style={{\\n          display: 'flex',\\n          alignItems: 'center',\\n          justifyContent: 'flex-end',\\n          height: '100%'\\n        }}>\\n              <Button viewType='secondary' style={{\\n            marginRight: 12\\n          }}>\\n                \\u041A\\u043D\\u043E\\u043F\\u043A\\u0430\\n              </Button>\\n              <Button viewType='primary'>\\u041A\\u043D\\u043E\\u043F\\u043A\\u0430</Button>\\n            </Layout>\\n          </Modal.Footer>\\n        </Modal>}\\n    </>;\\n}\",\n      ...SizeFullscreen.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"size-fullscreen":{startLoc:{col:7,line:12},endLoc:{col:1,line:50},startBody:{col:7,line:12},endBody:{col:1,line:50}}}},layout:"padded"}},SizeFullscreen=function SizeFullscreen(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>setOpen(!0),children:"Показать окно"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u,{size:"fullscreen",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u.Header,{title:"Полноэкранное модальное окно",onClose:()=>setOpen(!1),divided:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{height:"calc(100vh - var(--modal-header-height) - var(--modal-footer-height))",background:"#eee"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_3__.Ar,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{style:{padding:"24px"},children:"Содержимое модального окна"})})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_1__.u.Footer,{divided:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_sima_land_ui_nucleons_layout__WEBPACK_IMPORTED_MODULE_3__.Ar,{style:{display:"flex",alignItems:"center",justifyContent:"flex-end",height:"100%"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{viewType:"secondary",style:{marginRight:12},children:"Кнопка"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{viewType:"primary",children:"Кнопка"})]})})]})]})};SizeFullscreen.storyName="Размер fullscreen",SizeFullscreen.parameters={...SizeFullscreen.parameters,docs:{...SizeFullscreen.parameters?.docs,source:{originalSource:"function SizeFullscreen() {\n  const [open, setOpen] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal size='fullscreen'>\n          <Modal.Header title='Полноэкранное модальное окно' onClose={() => setOpen(false)} divided />\n          <Modal.Body>\n            <div style={{\n          height: 'calc(100vh - var(--modal-header-height) - var(--modal-footer-height))',\n          background: '#eee'\n        }}>\n              <Layout>\n                <div style={{\n              padding: '24px'\n            }}>Содержимое модального окна</div>\n              </Layout>\n            </div>\n          </Modal.Body>\n          <Modal.Footer divided>\n            <Layout style={{\n          display: 'flex',\n          alignItems: 'center',\n          justifyContent: 'flex-end',\n          height: '100%'\n        }}>\n              <Button viewType='secondary' style={{\n            marginRight: 12\n          }}>\n                Кнопка\n              </Button>\n              <Button viewType='primary'>Кнопка</Button>\n            </Layout>\n          </Modal.Footer>\n        </Modal>}\n    </>;\n}",...SizeFullscreen.parameters?.docs?.source}}};const __namedExportsOrder=["SizeFullscreen"]},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/layout/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S_:()=>DesktopLayout,Ar:()=>Layout,nb:()=>MobileLayout});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),layout_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(layout_module.Z,options);const layout_layout_module=layout_module.Z&&layout_module.Z.locals?layout_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(layout_layout_module);function Layout({children,className,disabledOn=[],rootRef,...rest}){const rootClassName=cx("layout",disabledOn.length>0&&disabledOn.map((key=>`disabled-${key}`)),className);return(0,jsx_runtime.jsx)("div",{...rest,ref:rootRef,className:rootClassName,children})}Layout.displayName="Layout";try{Layout.displayName="Layout",Layout.__docgenInfo={description:"Контейнер, формирующий отступы по горизонтали в соответствии с дизайн-гайдами.",displayName:"Layout",props:{disabledOn:{defaultValue:{value:"[]"},description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},rootRef:{defaultValue:null,description:"",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/layout.tsx#Layout"]={docgenInfo:Layout.__docgenInfo,name:"Layout",path:"src/layout/layout.tsx#Layout"})}catch(__react_docgen_typescript_loader_error){}var react=__webpack_require__("./node_modules/react/index.js"),legacy_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.module.scss"),legacy_module_options={};legacy_module_options.styleTagTransform=styleTagTransform_default(),legacy_module_options.setAttributes=setAttributesWithoutAttributes_default(),legacy_module_options.insert=insertBySelector_default().bind(null,"head"),legacy_module_options.domAPI=styleDomAPI_default(),legacy_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(legacy_module.Z,legacy_module_options);const layout_legacy_module=legacy_module.Z&&legacy_module.Z.locals?legacy_module.Z.locals:void 0,legacy_cx=bind_default().bind(layout_legacy_module),createLayout=(specificClass,displayName)=>{const Component=(0,react.forwardRef)((({className,element:Element="div",disabledOn=[],...restProps},ref)=>(0,jsx_runtime.jsx)(Element,{...restProps,ref,className:legacy_cx("layout",specificClass,className,disabledOn.map((key=>`disabled-${key}`)))})));return Component.displayName=displayName,Component},DesktopLayout=createLayout("desktop","DesktopLayout"),MobileLayout=createLayout("mobile","MobileLayout");try{DesktopLayout.displayName="DesktopLayout",DesktopLayout.__docgenInfo={description:"",displayName:"DesktopLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#DesktopLayout"]={docgenInfo:DesktopLayout.__docgenInfo,name:"DesktopLayout",path:"src/layout/legacy.tsx#DesktopLayout"})}catch(__react_docgen_typescript_loader_error){}try{MobileLayout.displayName="MobileLayout",MobileLayout.__docgenInfo={description:"",displayName:"MobileLayout",props:{disabledOn:{defaultValue:null,description:"Список точек остановки на которых необходимо отключить ограничение ширины.",name:"disabledOn",required:!1,type:{name:"Breakpoint[] | undefined"}},element:{defaultValue:null,description:"",name:"element",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/layout/legacy.tsx#MobileLayout"]={docgenInfo:MobileLayout.__docgenInfo,name:"MobileLayout",path:"src/layout/legacy.tsx#MobileLayout"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qp:()=>disableBodyScroll,tG:()=>enableBodyScroll});var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/layout.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(max-width: 479px){.layout-module__layout__c86:not(.layout-module__disabled-mxs__cf3){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 480px)and (max-width: 719px){.layout-module__layout__c86:not(.layout-module__disabled-ms__de5){width:100%;margin-left:auto;margin-right:auto;padding-left:16px;padding-right:16px}}@media(min-width: 720px)and (max-width: 839px){.layout-module__layout__c86:not(.layout-module__disabled-mm__f86){width:100%;margin-left:auto;margin-right:auto;max-width:656px}}@media(min-width: 840px)and (max-width: 1023px){.layout-module__layout__c86:not(.layout-module__disabled-ml__afc){width:100%;margin-left:auto;margin-right:auto;max-width:672px}}@media(min-width: 1024px)and (max-width: 1279px){.layout-module__layout__c86:not(.layout-module__disabled-xs__d40){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1280px)and (max-width: 1439px){.layout-module__layout__c86:not(.layout-module__disabled-s__d87){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1440px)and (max-width: 1599px){.layout-module__layout__c86:not(.layout-module__disabled-m__d96){width:100%;margin-left:auto;margin-right:auto;padding-left:64px;padding-right:64px}}@media(min-width: 1600px)and (max-width: 1919px){.layout-module__layout__c86:not(.layout-module__disabled-l__e65){width:100%;margin-left:auto;margin-right:auto;max-width:1472px}}@media(min-width: 1920px){.layout-module__layout__c86:not(.layout-module__disabled-xl__b5e){width:100%;margin-left:auto;margin-right:auto;max-width:1504px}}","",{version:3,sources:["webpack://./src/breakpoints.scss","webpack://./src/layout/layout.module.scss"],names:[],mappings:"AA6BI,yBCfA,mEAVF,UAAA,CAGA,gBAAA,CACA,iBAAA,CAQI,iBAAA,CACA,kBAAA,CAAA,CDYF,+CCPE,kEAlBJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAgBM,iBAAA,CACA,kBAAA,CAAA,CDIJ,+CCEE,kEA3BJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyBM,eAAA,CAAA,CDJJ,gDCUE,kEAnCJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAiCM,eAAA,CAAA,CDZJ,iDCkBE,kEA3CJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAyCM,iBAAA,CACA,kBAAA,CAAA,CDrBJ,iDC2BE,iEApDJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAkDM,iBAAA,CACA,kBAAA,CAAA,CD9BJ,iDCoCE,iEA7DJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2DM,iBAAA,CACA,kBAAA,CAAA,CDvCJ,iDC6CE,iEAtEJ,UAAA,CAGA,gBAAA,CACA,iBAAA,CAoEM,gBAAA,CAAA,CDzDJ,0BC8DA,kEA7EF,UAAA,CAGA,gBAAA,CACA,iBAAA,CA2EI,gBAAA,CAAA",sourcesContent:['$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"@use '../breakpoints';\n\n@mixin layout {\n  // ВАЖНО: не используем 100vw так как при использовании 100vw не вычитается ширина полосы прокрутки страницы\n  width: 100%;\n\n  // центрируем\n  margin-left: auto;\n  margin-right: auto;\n}\n\n// ВАЖНО: не прокидываем никаких кастомных свойств внутрь чтобы ими не воспользовались\n.layout {\n  @include breakpoints.down('ms') {\n    &:not(.disabled-mxs) {\n      @include layout;\n      padding-left: 16px;\n      padding-right: 16px;\n    }\n  }\n  @include breakpoints.up('ms') {\n    @include breakpoints.down('mm') {\n      &:not(.disabled-ms) {\n        @include layout;\n        padding-left: 16px;\n        padding-right: 16px;\n      }\n    }\n  }\n  @include breakpoints.up('mm') {\n    @include breakpoints.down('ml') {\n      &:not(.disabled-mm) {\n        @include layout;\n        max-width: 656px;\n      }\n    }\n  }\n  @include breakpoints.up('ml') {\n    @include breakpoints.down('xs') {\n      &:not(.disabled-ml) {\n        @include layout;\n        max-width: 672px;\n      }\n    }\n  }\n  @include breakpoints.up('xs') {\n    @include breakpoints.down('s') {\n      &:not(.disabled-xs) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('s') {\n    @include breakpoints.down('m') {\n      &:not(.disabled-s) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('m') {\n    @include breakpoints.down('l') {\n      &:not(.disabled-m) {\n        @include layout;\n        padding-left: 64px;\n        padding-right: 64px;\n      }\n    }\n  }\n  @include breakpoints.up('l') {\n    @include breakpoints.down('xl') {\n      &:not(.disabled-l) {\n        @include layout;\n        max-width: 1472px;\n      }\n    }\n  }\n  @include breakpoints.up('xl') {\n    &:not(.disabled-xl) {\n      @include layout;\n      max-width: 1504px;\n    }\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"layout-module__layout__c86","disabled-mxs":"layout-module__disabled-mxs__cf3","disabled-ms":"layout-module__disabled-ms__de5","disabled-mm":"layout-module__disabled-mm__f86","disabled-ml":"layout-module__disabled-ml__afc","disabled-xs":"layout-module__disabled-xs__d40","disabled-s":"layout-module__disabled-s__d87","disabled-m":"layout-module__disabled-m__d96","disabled-l":"layout-module__disabled-l__e65","disabled-xl":"layout-module__disabled-xl__b5e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/layout/legacy.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".legacy-module__layout__bb0{width:var(--l-width);margin:0 var(--l-gutter)}@media(min-width: 0){.legacy-module__layout__bb0.legacy-module__disabled-mxs__da1{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-mxs__da1){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 480px){.legacy-module__layout__bb0.legacy-module__disabled-ms__c6b{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-ms__c6b){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 720px){.legacy-module__layout__bb0.legacy-module__disabled-mm__a16{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-mm__a16){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 840px){.legacy-module__layout__bb0.legacy-module__disabled-ml__d02{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-ml__d02){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1024px){.legacy-module__layout__bb0.legacy-module__disabled-xs__ed8{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-xs__ed8){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1280px){.legacy-module__layout__bb0.legacy-module__disabled-s__cd8{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-s__cd8){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1440px){.legacy-module__layout__bb0.legacy-module__disabled-m__b1e{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-m__b1e){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1600px){.legacy-module__layout__bb0.legacy-module__disabled-l__ecf{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-l__ecf){width:var(--l-width);margin:0 var(--l-gutter)}}@media(min-width: 1920px){.legacy-module__layout__bb0.legacy-module__disabled-xl__e0c{width:auto;margin:0}.legacy-module__layout__bb0:not(.legacy-module__disabled-xl__e0c){width:var(--l-width);margin:0 var(--l-gutter)}}.legacy-module__mobile__b07{--l-gutter: 16px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 720px){.legacy-module__mobile__b07{--l-width: 656px;--l-gutter: auto}}@media(min-width: 840px){.legacy-module__mobile__b07{--l-width: 672px;--l-gutter: auto}}@media(min-width: 1024px){.legacy-module__mobile__b07{--l-width: 792px;--l-gutter: auto}}.legacy-module__desktop__b69{min-width:896px;--l-gutter: 64px;--l-width: calc(100vw - (2 * var(--l-gutter)))}@media(min-width: 1600px){.legacy-module__desktop__b69{--l-width: 1472px;--l-gutter: auto}}@media(min-width: 1920px){.legacy-module__desktop__b69{--l-width: 1504px;--l-gutter: auto}}","",{version:3,sources:["webpack://./src/layout/legacy.module.scss","webpack://./src/breakpoints.scss"],names:[],mappings:"AAEA,4BACE,oBAAA,CACA,wBAAA,CCeE,qBDZE,6DACE,UAAA,CACA,QAAA,CAEF,mEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,yBDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,2DACE,UAAA,CACA,QAAA,CAEF,iEACE,oBAAA,CACA,wBAAA,CAAA,CCMJ,0BDZE,4DACE,UAAA,CACA,QAAA,CAEF,kEACE,oBAAA,CACA,wBAAA,CAAA,CAMR,4BACE,gBAAA,CACA,8CAAA,CCFE,yBAAA,4BDIA,gBAAA,CACA,gBAAA,CAAA,CCLA,yBAAA,4BDQA,gBAAA,CACA,gBAAA,CAAA,CCTA,0BAAA,4BDYA,gBAAA,CACA,gBAAA,CAAA,CAIJ,6BACE,eAAA,CACA,gBAAA,CACA,8CAAA,CCpBE,0BDiBJ,6BAKI,iBAAA,CACA,gBAAA,CAAA,CCvBA,0BDiBJ,6BASI,iBAAA,CACA,gBAAA,CAAA",sourcesContent:["@use '../breakpoints';\n\n.layout {\n  width: var(--l-width);\n  margin: 0 var(--l-gutter);\n  @each $key, $val in breakpoints.$map {\n    @include breakpoints.up($key) {\n      &.disabled-#{$key} {\n        width: auto;\n        margin: 0;\n      }\n      &:not(.disabled-#{$key}) {\n        width: var(--l-width);\n        margin: 0 var(--l-gutter);\n      }\n    }\n  }\n}\n\n.mobile {\n  --l-gutter: 16px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('mm') {\n    --l-width: 656px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('ml') {\n    --l-width: 672px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xs') {\n    --l-width: 792px;\n    --l-gutter: auto;\n  }\n}\n\n.desktop {\n  min-width: 896px;\n  --l-gutter: 64px;\n  --l-width: calc(100vw - (2 * var(--l-gutter)));\n  @include breakpoints.up('l') {\n    --l-width: 1472px;\n    --l-gutter: auto;\n  }\n  @include breakpoints.up('xl') {\n    --l-width: 1504px;\n    --l-gutter: auto;\n  }\n}\n",'$map: (\n  mxs: 0,\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px,\n) !default;\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={layout:"legacy-module__layout__bb0","disabled-mxs":"legacy-module__disabled-mxs__da1","disabled-ms":"legacy-module__disabled-ms__c6b","disabled-mm":"legacy-module__disabled-mm__a16","disabled-ml":"legacy-module__disabled-ml__d02","disabled-xs":"legacy-module__disabled-xs__ed8","disabled-s":"legacy-module__disabled-s__cd8","disabled-m":"legacy-module__disabled-m__b1e","disabled-l":"legacy-module__disabled-l__ecf","disabled-xl":"legacy-module__disabled-xl__e0c",mobile:"legacy-module__mobile__b07",desktop:"legacy-module__desktop__b69"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);