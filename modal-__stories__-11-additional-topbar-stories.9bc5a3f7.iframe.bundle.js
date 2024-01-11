/*! For license information please see modal-__stories__-11-additional-topbar-stories.9bc5a3f7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[1407],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M11.707 3.293a1 1 0 0 1 0 1.414L4.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/modal/__stories__/11-additional-topbar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AdditionalTopBar:()=>AdditionalTopBar,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/modal/index.ts"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/top-bar/index.ts"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.ts"),_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/tabs/index.ts"),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,parameters:{storySource:{source:"import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { Tabs } from '@sima-land/ui-nucleons/tabs';\nimport { CSSProperties, useState } from 'react';\nexport default {\n  title: 'common/Modal',\n  component: Modal,\n  parameters: {\n    layout: 'padded'\n  }\n};\nconst styles = {\n  header: ({\n    flexShrink: 0\n  } satisfies CSSProperties),\n  body: ({\n    padding: '40px'\n  } satisfies CSSProperties)\n};\nexport function AdditionalTopBar() {\n  const [open, setOpen] = useState(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal {...getResponsiveModalProps({\n      size: 'm'\n    })} onClose={() => setOpen(false)}>\n          <div style={styles.header}>\n            <TopBar title='Модальное окно' buttons={navigationButtons({\n          onClose: () => setOpen(false)\n        })} />\n            <Tabs view='clean-underline' stretch>\n              <Tabs.Item name='Вкладка' />\n              <Tabs.Item name='Вкладка' selected />\n            </Tabs>\n          </div>\n          <ModalBody withScrollDisable style={styles.body}>\n            Модальное окно — окно, которое блокирует работу пользователя с родительским приложением\n            до тех пор, пока пользователь это окно не закроет.\n          </ModalBody>\n        </Modal>}\n    </>;\n}\nAdditionalTopBar.storyName = 'Дополнительная шапка';\nAdditionalTopBar.parameters = {\n  ...AdditionalTopBar.parameters,\n  docs: {\n    ...AdditionalTopBar.parameters?.docs,\n    source: {\n      originalSource: \"function AdditionalTopBar() {\\n  const [open, setOpen] = useState(false);\\n  return <>\\n      <Button size='s' onClick={() => setOpen(true)}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E\\n      </Button>\\n\\n      {open && <Modal {...getResponsiveModalProps({\\n      size: 'm'\\n    })} onClose={() => setOpen(false)}>\\n          <div style={styles.header}>\\n            <TopBar title='\\u041C\\u043E\\u0434\\u0430\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043E\\u043A\\u043D\\u043E' buttons={navigationButtons({\\n          onClose: () => setOpen(false)\\n        })} />\\n            <Tabs view='clean-underline' stretch>\\n              <Tabs.Item name='\\u0412\\u043A\\u043B\\u0430\\u0434\\u043A\\u0430' />\\n              <Tabs.Item name='\\u0412\\u043A\\u043B\\u0430\\u0434\\u043A\\u0430' selected />\\n            </Tabs>\\n          </div>\\n          <ModalBody withScrollDisable style={styles.body}>\\n            \\u041C\\u043E\\u0434\\u0430\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043E\\u043A\\u043D\\u043E \\u2014 \\u043E\\u043A\\u043D\\u043E, \\u043A\\u043E\\u0442\\u043E\\u0440\\u043E\\u0435 \\u0431\\u043B\\u043E\\u043A\\u0438\\u0440\\u0443\\u0435\\u0442 \\u0440\\u0430\\u0431\\u043E\\u0442\\u0443 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044F \\u0441 \\u0440\\u043E\\u0434\\u0438\\u0442\\u0435\\u043B\\u044C\\u0441\\u043A\\u0438\\u043C \\u043F\\u0440\\u0438\\u043B\\u043E\\u0436\\u0435\\u043D\\u0438\\u0435\\u043C\\n            \\u0434\\u043E \\u0442\\u0435\\u0445 \\u043F\\u043E\\u0440, \\u043F\\u043E\\u043A\\u0430 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u0442\\u0435\\u043B\\u044C \\u044D\\u0442\\u043E \\u043E\\u043A\\u043D\\u043E \\u043D\\u0435 \\u0437\\u0430\\u043A\\u0440\\u043E\\u0435\\u0442.\\n          </ModalBody>\\n        </Modal>}\\n    </>;\\n}\",\n      ...AdditionalTopBar.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"additional-top-bar":{startLoc:{col:7,line:21},endLoc:{col:1,line:46},startBody:{col:7,line:21},endBody:{col:1,line:46}}}},layout:"padded"}},styles={header:{flexShrink:0},body:{padding:"40px"}},AdditionalTopBar=function AdditionalTopBar(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>setOpen(!0),children:"Показать окно"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.B1)({size:"m"}),onClose:()=>setOpen(!1),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:styles.header,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_1__.Du,{title:"Модальное окно",buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_1__.JN)({onClose:()=>setOpen(!1)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.m,{view:"clean-underline",stretch:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.m.Item,{name:"Вкладка"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_tabs__WEBPACK_IMPORTED_MODULE_3__.m.Item,{name:"Вкладка",selected:!0})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.fe,{withScrollDisable:!0,style:styles.body,children:"Модальное окно — окно, которое блокирует работу пользователя с родительским приложением до тех пор, пока пользователь это окно не закроет."})]})]})};AdditionalTopBar.storyName="Дополнительная шапка",AdditionalTopBar.parameters={...AdditionalTopBar.parameters,docs:{...AdditionalTopBar.parameters?.docs,source:{originalSource:"function AdditionalTopBar() {\n  const [open, setOpen] = useState(false);\n  return <>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal {...getResponsiveModalProps({\n      size: 'm'\n    })} onClose={() => setOpen(false)}>\n          <div style={styles.header}>\n            <TopBar title='Модальное окно' buttons={navigationButtons({\n          onClose: () => setOpen(false)\n        })} />\n            <Tabs view='clean-underline' stretch>\n              <Tabs.Item name='Вкладка' />\n              <Tabs.Item name='Вкладка' selected />\n            </Tabs>\n          </div>\n          <ModalBody withScrollDisable style={styles.body}>\n            Модальное окно — окно, которое блокирует работу пользователя с родительским приложением\n            до тех пор, пока пользователь это окно не закроет.\n          </ModalBody>\n        </Modal>}\n    </>;\n}",...AdditionalTopBar.parameters?.docs?.source}}};const __namedExportsOrder=["AdditionalTopBar"]},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{kI:()=>BSL_IGNORE_ATTR,Pp:()=>PageScrollLockAdapterBSL,hC:()=>PageScrollLockAdapterNucleons,k6:()=>PageScrollLockContext,PP:()=>usePageScrollLock});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLockAdapterBSL{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:bodyScrollLock_esm.Qp,enableBodyScroll:bodyScrollLock_esm.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1},PageScrollLockContext=(0,react.createContext)({adapter:(element,options)=>new PageScrollLockAdapterBSL(element,options)}),DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options){const{adapter}=(0,react.useContext)(PageScrollLockContext),{lockEnabled=DEFAULTS.lockEnabled,reserveScrollBarGap=DEFAULTS.reserveScrollBarGap}=options??DEFAULTS;(0,hooks.LI)((()=>{const element=ref.current;if(element&&lockEnabled){const pageScroll=adapter(element,{reserveScrollBarGap});return pageScroll.lock(),()=>pageScroll.unlock()}}),[ref,lockEnabled,reserveScrollBarGap])}const MARK_ATTR="data-scroll-locked";class PageScrollLockAdapterNucleons{constructor(options){this.options=options}lock(){if(!this.isLocked()){const scrollTop=document.documentElement.scrollTop;if(this.bodyStyle=new StyleAffect(document.body),this.bodyStyle.set("width","100vw").set("position","fixed").set("top",-scrollTop+"px"),this.options?.reserveScrollBarGap){const gap=this.getScrollbarWidth();gap>0&&this.bodyStyle.set("padding-right",`${gap}px`)}document.body.setAttribute(MARK_ATTR,"true")}}unlock(){if(this.isLocked()){const{body}=document,parsed=parseFloat(body.style.getPropertyValue("top").replace(/[A-z]*/g,""))||0;this.bodyStyle?.restore(),window.scrollTo(0,-parsed),document.body.removeAttribute(MARK_ATTR)}}isLocked(){return document.body.hasAttribute(MARK_ATTR)}getScrollbarWidth(){const div=document.createElement("div");div.style.overflowY="scroll",div.style.width="50px",div.style.height="50px",document.body.append(div);const scrollBarWidth=div.offsetWidth-div.clientWidth;return div.remove(),scrollBarWidth}}class StyleAffect{constructor(element){this.element=element,this.changes=new Map}set(prop,value,priority){return this.changes.has(prop)||this.changes.set(prop,{oldValue:this.element.style.getPropertyValue(prop),oldPriority:this.element.style.getPropertyPriority(prop)}),this.element.style.setProperty(prop,value,priority),this}restore(){for(const[prop,{oldValue,oldPriority}]of this.changes)this.element.style.setProperty(prop,oldValue,oldPriority);return this.changes.clear(),this}}},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./src/tabs/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>Tab,m:()=>Tabs});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),tabs_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/tabs/tabs.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(tabs_module.Z,options);const tabs_tabs_module=tabs_module.Z&&tabs_module.Z.locals?tabs_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(tabs_tabs_module);function Tab({name,selected,disabled,onClick,children,className,style,"data-testid":testId="tab"}){return(0,jsx_runtime.jsx)("li",{className:cx("item",{selected,disabled},className),style,onClick:disabled?void 0:onClick,"data-testid":testId,children:void 0!==name?String(name):children})}function Tabs({children,view="clean",stretch=!1,gapSize="m",className,style,"data-testid":testId="tabs"}){const rootClassName=cx("root",`view-${view}`,gapSize&&"unset"!==gapSize&&`gap-${gapSize}`,{stretch},className);return(0,jsx_runtime.jsx)("ul",{"data-testid":testId,className:rootClassName,style,children})}Tab.displayName="Tab",Tabs.displayName="Tabs",Tabs.Item=Tab;try{Tab.displayName="Tab",Tab.__docgenInfo={description:"Вкладка.",displayName:"Tab",props:{name:{defaultValue:null,description:"Название вкладки.",name:"name",required:!1,type:{name:"string | undefined"}},selected:{defaultValue:null,description:"Выбрана ли вкладка.",name:"selected",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключена ли вкладка.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Обработчик клика.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLLIElement> | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"src/tabs/tabs.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"Блок списка вкладок.",displayName:"Tabs",props:{view:{defaultValue:{value:"clean"},description:"Визуальный вариант вкладок.",name:"view",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"round"'},{value:'"clean"'},{value:'"clean-underline"'}]}},stretch:{defaultValue:{value:"false"},description:"Необходимо ли растягивать вкладки под размер контейнера.",name:"stretch",required:!1,type:{name:"boolean | undefined"}},gapSize:{defaultValue:{value:"m"},description:"Размер отступа между вкладками.",name:"gapSize",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},className:{defaultValue:null,description:"Класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"TabsStyle | undefined"}},children:{defaultValue:null,description:"Вкладки.",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"src/tabs/tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}try{Item.displayName="Tabs.Item",Item.__docgenInfo={description:"Вкладка.",displayName:"Tabs.Item",props:{name:{defaultValue:null,description:"Название вкладки.",name:"name",required:!1,type:{name:"string | undefined"}},selected:{defaultValue:null,description:"Выбрана ли вкладка.",name:"selected",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключена ли вкладка.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},onClick:{defaultValue:null,description:"Обработчик клика.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLLIElement> | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"CSSProperties | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/tabs/tabs.tsx#Tabs.Item"]={docgenInfo:Tabs.Item.__docgenInfo,name:"Tabs.Item",path:"src/tabs/tabs.tsx#Tabs.Item"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Qp:()=>disableBodyScroll,tG:()=>enableBodyScroll});var hasPassiveEvents=!1;if("undefined"!=typeof window){var passiveTestOptions={get passive(){hasPassiveEvents=!0}};window.addEventListener("testPassive",null,passiveTestOptions),window.removeEventListener("testPassive",null,passiveTestOptions)}var isIosDevice="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),locks=[],documentListenerAdded=!1,initialClientY=-1,previousBodyOverflowSetting=void 0,previousBodyPaddingRight=void 0,allowTouchMove=function allowTouchMove(el){return locks.some((function(lock){return!(!lock.options.allowTouchMove||!lock.options.allowTouchMove(el))}))},preventDefault=function preventDefault(rawEvent){var e=rawEvent||window.event;return!!allowTouchMove(e.target)||(e.touches.length>1||(e.preventDefault&&e.preventDefault(),!1))},restoreOverflowSetting=function restoreOverflowSetting(){void 0!==previousBodyPaddingRight&&(document.body.style.paddingRight=previousBodyPaddingRight,previousBodyPaddingRight=void 0),void 0!==previousBodyOverflowSetting&&(document.body.style.overflow=previousBodyOverflowSetting,previousBodyOverflowSetting=void 0)},disableBodyScroll=function disableBodyScroll(targetElement,options){if(targetElement){if(!locks.some((function(lock){return lock.targetElement===targetElement}))){var lock={targetElement,options:options||{}};locks=[].concat(function _toConsumableArray(arr){if(Array.isArray(arr)){for(var i=0,arr2=Array(arr.length);i<arr.length;i++)arr2[i]=arr[i];return arr2}return Array.from(arr)}(locks),[lock]),isIosDevice?(targetElement.ontouchstart=function(event){1===event.targetTouches.length&&(initialClientY=event.targetTouches[0].clientY)},targetElement.ontouchmove=function(event){1===event.targetTouches.length&&function handleScroll(event,targetElement){var clientY=event.targetTouches[0].clientY-initialClientY;!allowTouchMove(event.target)&&(targetElement&&0===targetElement.scrollTop&&clientY>0||function isTargetElementTotallyScrolled(targetElement){return!!targetElement&&targetElement.scrollHeight-targetElement.scrollTop<=targetElement.clientHeight}(targetElement)&&clientY<0?preventDefault(event):event.stopPropagation())}(event,targetElement)},documentListenerAdded||(document.addEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!0)):function setOverflowHidden(options){if(void 0===previousBodyPaddingRight){var _reserveScrollBarGap=!!options&&!0===options.reserveScrollBarGap,scrollBarGap=window.innerWidth-document.documentElement.clientWidth;_reserveScrollBarGap&&scrollBarGap>0&&(previousBodyPaddingRight=document.body.style.paddingRight,document.body.style.paddingRight=scrollBarGap+"px")}void 0===previousBodyOverflowSetting&&(previousBodyOverflowSetting=document.body.style.overflow,document.body.style.overflow="hidden")}(options)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},enableBodyScroll=function enableBodyScroll(targetElement){targetElement?(locks=locks.filter((function(lock){return lock.targetElement!==targetElement})),isIosDevice?(targetElement.ontouchstart=null,targetElement.ontouchmove=null,documentListenerAdded&&0===locks.length&&(document.removeEventListener("touchmove",preventDefault,hasPassiveEvents?{passive:!1}:void 0),documentListenerAdded=!1)):locks.length||restoreOverflowSetting()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/tabs/tabs.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.tabs-module__root__d83{list-style-type:none;user-select:none;display:flex;margin:0;padding:0;font-size:16px;font-weight:600;line-height:24px}.tabs-module__root__d83 li{display:block;margin:0}.tabs-module__root__d83 li::before{content:none}.tabs-module__root__d83.tabs-module__stretch__c44{justify-items:stretch}.tabs-module__root__d83.tabs-module__stretch__c44 .tabs-module__item__a25{width:100%}.tabs-module__root__d83.tabs-module__view-clean__d1a,.tabs-module__root__d83.tabs-module__view-clean-underline__e31{height:32px}.tabs-module__root__d83.tabs-module__view-clean__d1a .tabs-module__item__a25,.tabs-module__root__d83.tabs-module__view-clean-underline__e31 .tabs-module__item__a25{color:#9e9e9e}.tabs-module__root__d83.tabs-module__view-clean__d1a .tabs-module__item__a25.tabs-module__selected__fc5,.tabs-module__root__d83.tabs-module__view-clean-underline__e31 .tabs-module__item__a25.tabs-module__selected__fc5{position:relative;color:#212121}.tabs-module__root__d83.tabs-module__view-clean__d1a .tabs-module__item__a25.tabs-module__selected__fc5::before,.tabs-module__root__d83.tabs-module__view-clean-underline__e31 .tabs-module__item__a25.tabs-module__selected__fc5::before{content:"";position:absolute;height:2px;margin:0 -1px;left:0;right:0;bottom:0;background-color:#1f84db;border-top-left-radius:4px;border-top-right-radius:4px}.tabs-module__root__d83.tabs-module__view-clean__d1a .tabs-module__item__a25.tabs-module__disabled__f43,.tabs-module__root__d83.tabs-module__view-clean-underline__e31 .tabs-module__item__a25.tabs-module__disabled__f43{color:#e0e0e0}.tabs-module__root__d83.tabs-module__view-clean__d1a .tabs-module__item__a25:not(.tabs-module__selected__fc5):not(.tabs-module__disabled__f43):hover,.tabs-module__root__d83.tabs-module__view-clean-underline__e31 .tabs-module__item__a25:not(.tabs-module__selected__fc5):not(.tabs-module__disabled__f43):hover{cursor:pointer;color:#757575}.tabs-module__root__d83.tabs-module__view-clean-underline__e31{height:40px;position:relative}.tabs-module__root__d83.tabs-module__view-clean-underline__e31::before{position:absolute;bottom:0;content:"";height:1px;width:100%;background-color:#e0e0e0}.tabs-module__root__d83.tabs-module__view-round__e2c{height:40px}.tabs-module__root__d83.tabs-module__view-round__e2c .tabs-module__item__a25{color:#212121;padding:8px 16px;border-radius:4px;background-color:#f5f5f5}.tabs-module__root__d83.tabs-module__view-round__e2c .tabs-module__item__a25.tabs-module__selected__fc5{background-color:#1f84db;color:#fff}.tabs-module__root__d83.tabs-module__view-round__e2c .tabs-module__item__a25.tabs-module__disabled__f43{color:#c2c2c2}.tabs-module__root__d83.tabs-module__view-round__e2c .tabs-module__item__a25:not(.tabs-module__selected__fc5):not(.tabs-module__disabled__f43):hover{cursor:pointer;background-color:#ebebeb}.tabs-module__root__d83.tabs-module__gap-m__a27{--tabs-gap: 24px}.tabs-module__root__d83.tabs-module__gap-s__f2e{--tabs-gap: 16px}.tabs-module__root__d83 .tabs-module__item__a25{text-align:center}.tabs-module__root__d83 .tabs-module__item__a25:not(:last-child){margin-right:var(--tabs-gap)}',"",{version:3,sources:["webpack://./src/tabs/tabs.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAGA,wBACE,oBAAA,CACA,gBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,2BACE,aAAA,CACA,QAAA,CACA,mCACE,YAAA,CAGJ,kDACE,qBAAA,CACA,0EACE,UAAA,CAGJ,oHAEE,WAAA,CACA,oKACE,aCrBS,CDsBT,0NACE,iBAAA,CACA,aC5BO,CD6BP,0OACE,UAAA,CACA,iBAAA,CACA,UAAA,CACA,aAAA,CACA,MAAA,CACA,OAAA,CACA,QAAA,CACA,wBCtCG,CDuCH,0BAAA,CACA,2BAAA,CAGJ,0NACE,aCrCO,CDuCT,oTACE,cAAA,CACA,aC5CO,CDgDb,+DACE,WAAA,CACA,iBAAA,CACA,uEACE,iBAAA,CACA,QAAA,CACA,UAAA,CACA,UAAA,CACA,UAAA,CACA,wBCtDS,CDyDb,qDACE,WAAA,CACA,6EACE,aClES,CDmET,gBAAA,CACA,iBAAA,CACA,wBC7DQ,CD8DR,wGACE,wBCxEK,CDyEL,UC9DM,CDgER,wGACE,aCtEO,CDwET,qJACE,cAAA,CACA,wBCxEM,CD4EZ,gDACE,gBAAA,CAEF,gDACE,gBAAA,CAEF,gDACE,iBAAA,CACA,iEACE,4BAAA",sourcesContent:["@use '../colors';\n\n// @todo убрать вложенность по максимуму\n.root {\n  list-style-type: none;\n  user-select: none;\n  display: flex;\n  margin: 0;\n  padding: 0;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 24px;\n  li {\n    display: block;\n    margin: 0;\n    &::before {\n      content: none;\n    }\n  }\n  &.stretch {\n    justify-items: stretch;\n    .item {\n      width: 100%;\n    }\n  }\n  &.view-clean,\n  &.view-clean-underline {\n    height: 32px;\n    .item {\n      color: colors.$basic-gray38;\n      &.selected {\n        position: relative;\n        color: colors.$basic-gray87;\n        &::before {\n          content: '';\n          position: absolute;\n          height: 2px;\n          margin: 0 -1px;\n          left: 0;\n          right: 0;\n          bottom: 0;\n          background-color: colors.$basic-blue;\n          border-top-left-radius: 4px;\n          border-top-right-radius: 4px;\n        }\n      }\n      &.disabled {\n        color: colors.$basic-gray12;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        color: colors.$basic-gray54;\n      }\n    }\n  }\n  &.view-clean-underline {\n    height: 40px;\n    position: relative;\n    &::before {\n      position: absolute;\n      bottom: 0;\n      content: '';\n      height: 1px;\n      width: 100%;\n      background-color: colors.$basic-gray12;\n    }\n  }\n  &.view-round {\n    height: 40px;\n    .item {\n      color: colors.$basic-gray87;\n      padding: 8px 16px;\n      border-radius: 4px;\n      background-color: colors.$basic-gray4;\n      &.selected {\n        background-color: colors.$basic-blue;\n        color: colors.$basic-white;\n      }\n      &.disabled {\n        color: colors.$basic-gray24;\n      }\n      &:not(.selected):not(.disabled):hover {\n        cursor: pointer;\n        background-color: colors.$basic-gray8;\n      }\n    }\n  }\n  &.gap-m {\n    --tabs-gap: 24px;\n  }\n  &.gap-s {\n    --tabs-gap: 16px;\n  }\n  .item {\n    text-align: center;\n    &:not(:last-child) {\n      margin-right: var(--tabs-gap);\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"tabs-module__root__d83",stretch:"tabs-module__stretch__c44",item:"tabs-module__item__a25","view-clean":"tabs-module__view-clean__d1a","view-clean-underline":"tabs-module__view-clean-underline__e31",selected:"tabs-module__selected__fc5",disabled:"tabs-module__disabled__f43","view-round":"tabs-module__view-round__e2c","gap-m":"tabs-module__gap-m__a27","gap-s":"tabs-module__gap-s__f2e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);