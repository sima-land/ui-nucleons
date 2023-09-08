/*! For license information please see modal-__stories__-06-without-bars-stories.42bf59d6.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4090],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M11.707 3.293a1 1 0 0 1 0 1.414L4.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/modal/__stories__/06-without-bars.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithoutBars:()=>WithoutBars,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/modal/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u,parameters:{storySource:{source:"import { Modal } from '@sima-land/ui-nucleons/modal';\nimport { useState } from 'react';\nimport { Button } from '@sima-land/ui-nucleons/button';\nexport default {\n  title: 'common/Modal',\n  component: Modal,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function WithoutBars() {\n  const [open, setOpen] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal size='s' height={320}>\n          <Modal.Body>\n            <div style={{\n          padding: 24\n        }}>Содержимое модального окна</div>\n          </Modal.Body>\n        </Modal>}\n    </>;\n}\nWithoutBars.storyName = 'Без шапки и подвала';\nWithoutBars.parameters = {\n  ...WithoutBars.parameters,\n  docs: {\n    ...WithoutBars.parameters?.docs,\n    source: {\n      originalSource: \"function WithoutBars() {\\n  const [open, setOpen] = useState<boolean>(false);\\n  return <>\\n      <Button size='s' onClick={() => setOpen(true)}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E\\n      </Button>\\n\\n      {open && <Modal size='s' height={320}>\\n          <Modal.Body>\\n            <div style={{\\n          padding: 24\\n        }}>\\u0421\\u043E\\u0434\\u0435\\u0440\\u0436\\u0438\\u043C\\u043E\\u0435 \\u043C\\u043E\\u0434\\u0430\\u043B\\u044C\\u043D\\u043E\\u0433\\u043E \\u043E\\u043A\\u043D\\u0430</div>\\n          </Modal.Body>\\n        </Modal>}\\n    </>;\\n}\",\n      ...WithoutBars.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"without-bars":{startLoc:{col:7,line:11},endLoc:{col:1,line:26},startBody:{col:7,line:11},endBody:{col:1,line:26}}}},layout:"padded"}},WithoutBars=function WithoutBars(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>setOpen(!0),children:"Показать окно"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u,{size:"s",height:320,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{padding:24},children:"Содержимое модального окна"})})})]})};WithoutBars.storyName="Без шапки и подвала",WithoutBars.parameters={...WithoutBars.parameters,docs:{...WithoutBars.parameters?.docs,source:{originalSource:"function WithoutBars() {\n  const [open, setOpen] = useState<boolean>(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal size='s' height={320}>\n          <Modal.Body>\n            <div style={{\n          padding: 24\n        }}>Содержимое модального окна</div>\n          </Modal.Body>\n        </Modal>}\n    </>;\n}",...WithoutBars.parameters?.docs?.source}}};const __namedExportsOrder=["WithoutBars"]},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qp:()=>disableBodyScroll,tG:()=>enableBodyScroll});var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);