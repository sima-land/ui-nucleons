"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6950],{"./src/portal/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_portal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/portal/index.tsx"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/button/index.tsx"),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const styles={overlay:{position:"fixed",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(0, 0, 0, .2)"},modal:{width:320,background:"#fff",padding:"24px 16px",borderRadius:10},title:{margin:0}},__WEBPACK_DEFAULT_EXPORT__={title:"service/Portal",component:_sima_land_ui_nucleons_portal__WEBPACK_IMPORTED_MODULE_0__.h,parameters:{storySource:{source:"import { Portal } from '@sima-land/ui-nucleons/portal';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { useState } from 'react';\nconst styles: Record<string, React.CSSProperties> = {\n  overlay: {\n    position: 'fixed',\n    top: 0,\n    left: 0,\n    width: '100%',\n    height: '100%',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center',\n    background: 'rgba(0, 0, 0, .2)'\n  },\n  modal: {\n    width: 320,\n    background: '#fff',\n    padding: '24px 16px',\n    borderRadius: 10\n  },\n  title: {\n    margin: 0\n  }\n};\nexport default {\n  title: 'service/Portal',\n  component: Portal,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const [isModalOpen, toggleModal] = useState<boolean>(false);\n  return <>\n      <p>\n        Окно будет монтировано в отдельный элемент в конце <code>{'<body />'}</code>\n      </p>\n      <Button size='s' onClick={() => toggleModal(true)}>\n        Открыть окно\n      </Button>\n\n      {isModalOpen && <Portal>\n          <div style={styles.overlay}>\n            <div style={styles.modal}>\n              <h2 style={styles.title}>Тестовое окно </h2>\n              <p>Монтировано в конце body в специальном div</p>\n              <Button size='s' onClick={() => toggleModal(false)}>\n                Закрыть\n              </Button>\n            </div>\n          </div>\n        </Portal>}\n    </>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const [isModalOpen, toggleModal] = useState<boolean>(false);\\n  return <>\\n      <p>\\n        \\u041E\\u043A\\u043D\\u043E \\u0431\\u0443\\u0434\\u0435\\u0442 \\u043C\\u043E\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043E \\u0432 \\u043E\\u0442\\u0434\\u0435\\u043B\\u044C\\u043D\\u044B\\u0439 \\u044D\\u043B\\u0435\\u043C\\u0435\\u043D\\u0442 \\u0432 \\u043A\\u043E\\u043D\\u0446\\u0435 <code>{'<body />'}</code>\\n      </p>\\n      <Button size='s' onClick={() => toggleModal(true)}>\\n        \\u041E\\u0442\\u043A\\u0440\\u044B\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E\\n      </Button>\\n\\n      {isModalOpen && <Portal>\\n          <div style={styles.overlay}>\\n            <div style={styles.modal}>\\n              <h2 style={styles.title}>\\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u043E\\u0435 \\u043E\\u043A\\u043D\\u043E </h2>\\n              <p>\\u041C\\u043E\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u043D\\u043E \\u0432 \\u043A\\u043E\\u043D\\u0446\\u0435 body \\u0432 \\u0441\\u043F\\u0435\\u0446\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E\\u043C div</p>\\n              <Button size='s' onClick={() => toggleModal(false)}>\\n                \\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\\n              </Button>\\n            </div>\\n          </div>\\n        </Portal>}\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:33},endLoc:{col:1,line:55},startBody:{col:7,line:33},endBody:{col:1,line:55}}}},layout:"padded"}},Primary=function Primary(){const[isModalOpen,toggleModal]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p",{children:["Окно будет монтировано в отдельный элемент в конце ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("code",{children:"<body />"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__.z,{size:"s",onClick:()=>toggleModal(!0),children:"Открыть окно"}),isModalOpen&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_portal__WEBPACK_IMPORTED_MODULE_0__.h,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:styles.overlay,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:styles.modal,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2",{style:styles.title,children:"Тестовое окно "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p",{children:"Монтировано в конце body в специальном div"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_1__.z,{size:"s",onClick:()=>toggleModal(!1),children:"Закрыть"})]})})})]})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [isModalOpen, toggleModal] = useState<boolean>(false);\n  return <>\n      <p>\n        Окно будет монтировано в отдельный элемент в конце <code>{'<body />'}</code>\n      </p>\n      <Button size='s' onClick={() => toggleModal(true)}>\n        Открыть окно\n      </Button>\n\n      {isModalOpen && <Portal>\n          <div style={styles.overlay}>\n            <div style={styles.modal}>\n              <h2 style={styles.title}>Тестовое окно </h2>\n              <p>Монтировано в конце body в специальном div</p>\n              <Button size='s' onClick={() => toggleModal(false)}>\n                Закрыть\n              </Button>\n            </div>\n          </div>\n        </Portal>}\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/identity.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIdentityRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./src/portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");const Portal=({children,defineRoot=()=>document.body})=>{const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]),mounted&&ref.current?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,ref.current):null};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"Компонент слоя. Выводит содержимое в портале.",displayName:"Portal",props:{defineRoot:{defaultValue:{value:"() => document.body"},description:"Вернет элемент, в который нужно вывести содержимое через портал.",name:"defineRoot",required:!1,type:{name:"(() => HTMLElement) | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}}}]);