"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[7371],{"./src/context/viewport.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>ViewportContext});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const ViewportContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)((0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)())},"./src/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getTransitionStyle(duration=0,property="all",easing="ease-out"){return`${property} ${Number.isFinite(duration)?duration:0}ms ${easing}`}function getTranslateStyle(x=0,y=0,z=0){return`translate3d(${x}px, ${y}px, ${z}px)`}function setViewportHeightUnit(element){const{visualViewport}=window,height=visualViewport?visualViewport.height*visualViewport.scale:window.innerHeight;element.style.setProperty("--vh",height/100+"px")}__webpack_require__.d(__webpack_exports__,{Je:()=>setViewportHeightUnit,O1:()=>getTransitionStyle,PA:()=>getTranslateStyle})},"./src/hooks/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>useViewportHeightUnit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_helpers_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/styles.ts");function useViewportHeightUnit(ref){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const{visualViewport}=window,offList=[];function setVariable(){ref.current&&(0,_helpers_styles__WEBPACK_IMPORTED_MODULE_1__.Je)(ref.current)}return offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(window,"resize",setVariable)),offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(window,"orientationchange",setVariable)),visualViewport&&offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(visualViewport,"resize",setVariable)),setVariable(),()=>offList.forEach((fn=>fn()))}),[])}},"./src/modal-overlay/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ModalOverlay});var react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./src/hooks/styles.ts"),helpers_layer=__webpack_require__("./src/helpers/layer.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),modal_overlay_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal-overlay/modal-overlay.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(modal_overlay_module.Z,options);const modal_overlay_modal_overlay_module=modal_overlay_module.Z&&modal_overlay_module.Z.locals?modal_overlay_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModalOverlay({rootRef,children,className,style,"data-testid":testId="modal-overlay",...restProps}){const layer=(0,helpers_layer.s)()+100,ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(rootRef,(()=>ref.current)),(0,styles.u)(ref),(0,jsx_runtime.jsx)(helpers_layer.l,{value:layer,children:(0,jsx_runtime.jsx)("div",{...restProps,ref,className:classnames_default()(modal_overlay_modal_overlay_module.root,className),"data-testid":testId,style:{...style,zIndex:layer},children})})}ModalOverlay.displayName="ModalOverlay";try{ModalOverlay.displayName="ModalOverlay",ModalOverlay.__docgenInfo={description:"Полноэкранное затемнение для модальных компонентов (Alert, Modal, SidePage...).",displayName:"ModalOverlay",props:{rootRef:{defaultValue:null,description:"Реф корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal-overlay/index.tsx#ModalOverlay"]={docgenInfo:ModalOverlay.__docgenInfo,name:"ModalOverlay",path:"src/modal-overlay/index.tsx#ModalOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/modal-overlay/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useExactClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useExactClick(onExactClick,{onMouseDown,onMouseUp}={}){const callbackRef=(0,_hooks_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onExactClick),mouseDownTarget=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleMouseDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{onMouseDown?.(event),0===event.button&&(mouseDownTarget.current=event.target)}),[]);return{onMouseUp:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const fn=callbackRef.current;onMouseUp?.(event),fn&&0===event.button&&event.target===event.currentTarget&&event.currentTarget===mouseDownTarget.current&&fn()}),[]),onMouseDown:handleMouseDown}}},"./src/modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u_:()=>Modal,fe:()=>ModalBody,Mz:()=>ModalBottomGap,MM:()=>ModalOverlap,B1:()=>getResponsiveModalProps});var react=__webpack_require__("./node_modules/react/index.js"),custom_scrollbar=__webpack_require__("./src/_internal/custom-scrollbar/index.ts"),viewport=__webpack_require__("./src/context/viewport.ts"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),modal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal/modal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(modal_module.Z,options);const modal_modal_module=modal_module.Z&&modal_module.Z.locals?modal_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(modal_modal_module);function ModalBody({children,className,rootRef,viewportRef,viewportProps,withScrollDisable,scrollDisableOptions,"data-testid":testId="modal-body",...restProps}){const viewportInnerRef=(0,react.useRef)(null);return(0,react.useImperativeHandle)(viewportRef,(()=>viewportInnerRef.current)),(0,page_scroll_lock.PP)(viewportInnerRef,{lockEnabled:withScrollDisable,...scrollDisableOptions}),(0,jsx_runtime.jsx)(viewport.R.Provider,{value:viewportInnerRef,children:(0,jsx_runtime.jsx)(custom_scrollbar.$,{...restProps,"data-testid":testId,rootRef,viewportRef:viewportInnerRef,viewportProps,className:cx("body",className),overflow:{x:"hidden",y:"scroll"},children})})}function ModalOverlap({children}){return(0,jsx_runtime.jsx)("div",{className:cx("overlap"),children})}function ModalBottomGap(){return(0,jsx_runtime.jsx)("div",{className:cx("bottom-gap")})}ModalBody.displayName="ModalBody",ModalOverlap.displayName="ModalOverlap",ModalBottomGap.displayName="ModalBottomGap";try{ModalBody.displayName="ModalBody",ModalBody.__docgenInfo={description:"Основной контент окна.",displayName:"ModalBody",props:{rootRef:{defaultValue:null,description:"Реф корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},viewportRef:{defaultValue:null,description:"Реф внутреннего элемента с прокруткой.",name:"viewportRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},viewportProps:{defaultValue:null,description:"Свойства внутреннего элемента с прокруткой.",name:"viewportProps",required:!1,type:{name:"HTMLAttributes<HTMLDivElement> | undefined"}},withScrollDisable:{defaultValue:null,description:"Нужно ли выключать прокрутку body.",name:"withScrollDisable",required:!1,type:{name:"boolean | undefined"}},scrollDisableOptions:{defaultValue:null,description:"Опции отключения прокрутки.",name:"scrollDisableOptions",required:!1,type:{name:"PageScrollLockOptions | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/slots.tsx#ModalBody"]={docgenInfo:ModalBody.__docgenInfo,name:"ModalBody",path:"src/modal/slots.tsx#ModalBody"})}catch(__react_docgen_typescript_loader_error){}try{ModalOverlap.displayName="ModalOverlap",ModalOverlap.__docgenInfo={description:"Контент который будет выводится поверх окна с абсолютным позиционированием.",displayName:"ModalOverlap",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/slots.tsx#ModalOverlap"]={docgenInfo:ModalOverlap.__docgenInfo,name:"ModalOverlap",path:"src/modal/slots.tsx#ModalOverlap"})}catch(__react_docgen_typescript_loader_error){}try{ModalBottomGap.displayName="ModalBottomGap",ModalBottomGap.__docgenInfo={description:"Заглушка для футера по дизайн-гайдам.",displayName:"ModalBottomGap",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/slots.tsx#ModalBottomGap"]={docgenInfo:ModalBottomGap.__docgenInfo,name:"ModalBottomGap",path:"src/modal/slots.tsx#ModalBottomGap"})}catch(__react_docgen_typescript_loader_error){}var modal_overlay=__webpack_require__("./src/modal-overlay/index.tsx"),utils=__webpack_require__("./src/modal-overlay/utils.ts");const modal_cx=bind_default().bind(modal_modal_module);function Modal({flexLayout=!0,size="m",rounds="m",className,children,onClose,overlayProps,"data-testid":testId="modal",...restProps}){const overlayClickProps=(0,utils.y)(onClose,{onMouseDown:overlayProps?.onMouseDown,onMouseUp:overlayProps?.onMouseUp}),overlayClassName=modal_cx("overlay","unset"!==size&&`size-${size}`,"unset"!==rounds&&`rounds-${rounds}`,overlayProps?.className),modalClassName=modal_cx("modal",flexLayout&&"modal-layout",className);return(0,jsx_runtime.jsx)(modal_overlay.Z,{...overlayProps,className:overlayClassName,...overlayClickProps,children:(0,jsx_runtime.jsx)("div",{className:modalClassName,"data-testid":testId,...restProps,children})})}Modal.displayName="Modal";try{Modal.displayName="Modal",Modal.__docgenInfo={description:"Компонент модального окна.",displayName:"Modal",props:{children:{defaultValue:null,description:"Содержимое компонента.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"m"},description:"Размер окна.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"fullscreen"'},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"xl"'},{value:'"unset"'}]}},rounds:{defaultValue:{value:"m"},description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"ModalStyle | undefined"}},onClose:{defaultValue:null,description:"Будет вызвана при закрытии окна.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},overlayProps:{defaultValue:null,description:"Свойства компонента ModalOverlay.",name:"overlayProps",required:!1,type:{name:"ModalOverlayProps | undefined"}},flexLayout:{defaultValue:{value:"true"},description:"Нужно ли применять стили для flex-раскладки.",name:"flexLayout",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal/modal.tsx#Modal"]={docgenInfo:Modal.__docgenInfo,name:"Modal",path:"src/modal/modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}var utils_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal/utils.module.scss"),utils_module_options={};utils_module_options.styleTagTransform=styleTagTransform_default(),utils_module_options.setAttributes=setAttributesWithoutAttributes_default(),utils_module_options.insert=insertBySelector_default().bind(null,"head"),utils_module_options.domAPI=styleDomAPI_default(),utils_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_module.Z,utils_module_options);const modal_utils_module=utils_module.Z&&utils_module.Z.locals?utils_module.Z.locals:void 0,utils_cx=bind_default().bind(modal_utils_module);function getResponsiveModalProps(config){const{size,className}=config;return{size:"unset",rounds:"unset",className:utils_cx(`size-${size}`,className)}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal-overlay/modal-overlay.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-overlay-module__root__afa{position:fixed;top:0;left:0;height:100%;width:100%;display:flex;background:rgba(0,0,0,.24);overflow:auto;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.modal-overlay-module__root__afa::-webkit-scrollbar{display:none}","",{version:3,sources:["webpack://./src/modal-overlay/modal-overlay.module.scss","webpack://./src/modal-overlay/modal-overlay-util.scss","webpack://./src/utils.scss"],names:[],mappings:"AAGA,iCACE,cAAA,CACA,KAAA,CACA,MAAA,CAGA,WAAA,CACA,UAAA,CAEA,YAAA,CACA,0BCbc,CDcd,aAAA,CERA,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,oDACE,YAAA",sourcesContent:["@use '../utils';\n@use './modal-overlay-util';\n\n.root {\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  // ВАЖНО: высота/ширина в процентах тк при использовании 100vw/100vh размер ломается если у body указан min-width\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  background: modal-overlay-util.$overlay-color;\n  overflow: auto;\n  @include utils.hidden-scrollbars;\n}\n","$overlay-color: rgba(0, 0, 0, 0.24);\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"modal-overlay-module__root__afa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal/modal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-module__overlay__a59{display:flex;align-items:center;padding:var(--modal-overlay-padding)}.modal-module__modal__fca{width:var(--modal-width);height:var(--modal-height);max-height:var(--modal-max-height);border-radius:var(--modal-border-radius);box-shadow:var(--modal-box-shadow);flex-shrink:0;margin:auto;position:relative;z-index:1;background-color:#fff}.modal-module__modal-layout__b52{display:flex;flex-direction:column}.modal-module__size-s__a31{--modal-width: 480px;--modal-max-height: 696px;--overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.modal-module__size-m__cb8{--modal-width: 640px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.modal-module__size-l__f50{--modal-width: 768px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.modal-module__size-xl__f85{--modal-width: 960px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.modal-module__size-fullscreen__b02{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none}.modal-module__rounds-s__bd7{--modal-border-radius: 4px}.modal-module__rounds-m__db4{--modal-border-radius: 8px}.modal-module__body__f7e{flex-grow:1}.modal-module__overlap__c2d{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.modal-module__overlap__c2d *{pointer-events:auto}.modal-module__bottom-gap__c9f{flex-shrink:0;border-radius:0 0 8px 8px;height:16px;background:#fff}","",{version:3,sources:["webpack://./src/modal/modal.module.scss","webpack://./src/modal/modal-util.scss"],names:[],mappings:"AAGA,4BACE,YAAA,CACA,kBAAA,CACA,oCAAA,CAIF,0BACE,wBAAA,CACA,0BAAA,CACA,kCAAA,CACA,wCAAA,CACA,kCAAA,CACA,aAAA,CACA,WAAA,CACA,iBAAA,CACA,SAAA,CACA,qBAAA,CAGF,iCACE,YAAA,CACA,qBAAA,CAGF,2BCzBE,oBAAA,CACA,yBAAA,CACA,uBAAA,CACA,+EAAA,CACA,0BAAA,CDyBF,2BCrBE,oBAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDqBF,2BCjBE,oBAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDiBF,4BCbE,oBAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDaF,oCCTE,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CDSF,6BACE,0BAAA,CAGF,6BACE,0BAAA,CAGF,yBACE,WAAA,CAGF,4BACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,8BACE,mBAAA,CAIJ,+BACE,aAAA,CACA,yBAAA,CACA,WAAA,CACA,eAAA",sourcesContent:["@use '../shadows';\n@use './modal-util';\n\n.overlay {\n  display: flex;\n  align-items: center;\n  padding: var(--modal-overlay-padding);\n  // ВАЖНО: для корректной прокрутки во flex-контейнере не надо использовать тут justify-content: center\n}\n\n.modal {\n  width: var(--modal-width);\n  height: var(--modal-height);\n  max-height: var(--modal-max-height);\n  border-radius: var(--modal-border-radius);\n  box-shadow: var(--modal-box-shadow);\n  flex-shrink: 0;\n  margin: auto; // ВАЖНО: для корректной прокрутки во flex-контейнере\n  position: relative; // ВАЖНО: для overlap\n  z-index: 1;\n  background-color: #fff;\n}\n\n.modal-layout {\n  display: flex;\n  flex-direction: column;\n}\n\n.size-s {\n  @include modal-util.size-s;\n}\n\n.size-m {\n  @include modal-util.size-m;\n}\n\n.size-l {\n  @include modal-util.size-l;\n}\n\n.size-xl {\n  @include modal-util.size-xl;\n}\n\n.size-fullscreen {\n  @include modal-util.size-fullscreen;\n}\n\n.rounds-s {\n  --modal-border-radius: 4px;\n}\n\n.rounds-m {\n  --modal-border-radius: 8px;\n}\n\n.body {\n  flex-grow: 1;\n}\n\n.overlap {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  * {\n    pointer-events: auto;\n  }\n}\n\n.bottom-gap {\n  flex-shrink: 0;\n  border-radius: 0 0 8px 8px;\n  height: 16px;\n  background: #fff;\n}\n","@use '../shadows';\n\n@mixin size-s {\n  --modal-width: 480px;\n  --modal-max-height: 696px;\n  --overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-m {\n  --modal-width: 640px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-l {\n  --modal-width: 768px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-xl {\n  --modal-width: 960px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-fullscreen {\n  --modal-width: 100%;\n  --modal-height: 100%;\n  --modal-max-height: 100%;\n  --modal-overlay-padding: 0;\n  --modal-box-shadow: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={overlay:"modal-module__overlay__a59",modal:"modal-module__modal__fca","modal-layout":"modal-module__modal-layout__b52","size-s":"modal-module__size-s__a31","size-m":"modal-module__size-m__cb8","size-l":"modal-module__size-l__f50","size-xl":"modal-module__size-xl__f85","size-fullscreen":"modal-module__size-fullscreen__b02","rounds-s":"modal-module__rounds-s__bd7","rounds-m":"modal-module__rounds-m__db4",body:"modal-module__body__f7e",overlap:"modal-module__overlap__c2d","bottom-gap":"modal-module__bottom-gap__c9f"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal/utils.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,"@media(max-width: 1023px){.utils-module__size-s__d96,.utils-module__size-m__c84,.utils-module__size-l__c23,.utils-module__size-xl__a9d,.utils-module__size-fullscreen__ab9{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none;--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px;--bottom-bar-height: 72px;--clean-group-height: 72px}}@media(min-width: 1024px){.utils-module__size-s__d96{--modal-width: 480px;--modal-max-height: 696px;--overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.utils-module__size-m__c84{--modal-width: 640px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.utils-module__size-l__c23{--modal-width: 768px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.utils-module__size-xl__a9d{--modal-width: 960px;--modal-max-height: 696px;--modal-overlay-padding: 16px;--modal-box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 12px 30px rgba(0, 0, 0, 0.1);--modal-border-radius: 8px}.utils-module__size-fullscreen__ab9{--modal-width: 100%;--modal-height: 100%;--modal-max-height: 100%;--modal-overlay-padding: 0;--modal-box-shadow: none}.utils-module__size-s__d96,.utils-module__size-m__c84,.utils-module__size-l__c23,.utils-module__size-xl__a9d{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px;--bottom-bar-height: 72px;--clean-group-height: 72px}.utils-module__size-fullscreen__ab9{--top-bar-height: 80px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 40px;--top-bar-icon-button-width: 76px;--top-bar-title-only-size: 20px;--top-bar-title-only-height: 28px;--bottom-bar-height: 80px;--clean-group-height: 80px}}","",{version:3,sources:["webpack://./src/breakpoints.scss","webpack://./src/modal/utils.module.scss","webpack://./src/modal/modal-util.scss","webpack://./src/top-bar/top-bar-util.scss","webpack://./src/bottom-bar/bottom-bar-util.scss","webpack://./src/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAiCI,0BC3BF,iJC6BA,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CC1BA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CCLA,yBAAA,CCHA,0BAAA,CAAA,CLcE,0BCLF,2BCfA,oBAAA,CACA,yBAAA,CACA,uBAAA,CACA,+EAAA,CACA,0BAAA,CDcA,2BCVA,oBAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDSA,2BCLA,oBAAA,CACA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDIA,4BAAA,oBAAA,CCCA,yBAAA,CACA,6BAAA,CACA,+EAAA,CACA,0BAAA,CDDA,oCCKA,mBAAA,CACA,oBAAA,CACA,wBAAA,CACA,0BAAA,CACA,wBAAA,CDNA,6GEpBA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CCLA,yBAAA,CCHA,0BAAA,CJ+BA,oCEnBA,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CACA,+BAAA,CACA,iCAAA,CCVA,yBAAA,CCJA,0BAAA,CAAA",sourcesContent:['/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"@use '../breakpoints';\n@use './modal-util';\n@use '../top-bar/top-bar-util';\n@use '../bottom-bar/bottom-bar-util';\n\n@include breakpoints.lt('xs') {\n  .size-s,\n  .size-m,\n  .size-l,\n  .size-xl,\n  .size-fullscreen {\n    @include modal-util.size-fullscreen;\n    @include top-bar-util.size-m;\n    @include bottom-bar-util.size-m;\n  }\n}\n\n@include breakpoints.gte('xs') {\n  .size-s {\n    @include modal-util.size-s;\n  }\n  .size-m {\n    @include modal-util.size-m;\n  }\n  .size-l {\n    @include modal-util.size-l;\n  }\n  .size-xl {\n    @include modal-util.size-xl;\n  }\n  .size-fullscreen {\n    @include modal-util.size-fullscreen;\n  }\n  .size-s,\n  .size-m,\n  .size-l,\n  .size-xl {\n    @include top-bar-util.size-m;\n    @include bottom-bar-util.size-m;\n  }\n  .size-fullscreen {\n    @include top-bar-util.size-xl;\n    @include bottom-bar-util.size-l;\n  }\n}\n","@use '../shadows';\n\n@mixin size-s {\n  --modal-width: 480px;\n  --modal-max-height: 696px;\n  --overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-m {\n  --modal-width: 640px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-l {\n  --modal-width: 768px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-xl {\n  --modal-width: 960px;\n  --modal-max-height: 696px;\n  --modal-overlay-padding: 16px;\n  --modal-box-shadow: #{shadows.get-box-shadow('z4')};\n  --modal-border-radius: 8px;\n}\n\n@mixin size-fullscreen {\n  --modal-width: 100%;\n  --modal-height: 100%;\n  --modal-max-height: 100%;\n  --modal-overlay-padding: 0;\n  --modal-box-shadow: none;\n}\n","$size-s-height: 56px;\n$size-m-height: 64px;\n$size-xl-height: 80px;\n\n@mixin size-s {\n  --top-bar-height: #{$size-s-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 16px;\n  --top-bar-icon-button-width: 52px;\n}\n\n@mixin size-m {\n  --top-bar-height: #{$size-m-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 24px;\n  --top-bar-icon-button-width: 60px;\n}\n\n@mixin size-xl {\n  --top-bar-height: #{$size-xl-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 40px;\n  --top-bar-icon-button-width: 76px;\n  --top-bar-title-only-size: 20px;\n  --top-bar-title-only-height: 28px;\n}\n","@use '../clean-buttons/clean-buttons-util';\n\n$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --bottom-bar-height: #{$size-s-height};\n  @include clean-buttons-util.size-s;\n}\n\n@mixin size-m {\n  --bottom-bar-height: #{$size-m-height};\n  @include clean-buttons-util.size-m;\n}\n\n@mixin size-l {\n  --bottom-bar-height: #{$size-l-height};\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"size-s":"utils-module__size-s__d96","size-m":"utils-module__size-m__c84","size-l":"utils-module__size-l__c23","size-xl":"utils-module__size-xl__a9d","size-fullscreen":"utils-module__size-fullscreen__ab9"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);