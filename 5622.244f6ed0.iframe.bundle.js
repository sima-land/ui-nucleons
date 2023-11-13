"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5622],{"./src/helpers/define-slots.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>defineSlots});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function defineSlots(children,dict){const allKeys=Object.keys(dict);return react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).reduce(((result,item)=>{if((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(item))for(const key of allKeys)if(!result[key]&&(value=item,type=dict[key],value.type===type)){result[key]=item;break}var value,type;return result}),{})}try{defineSlots.displayName="defineSlots",defineSlots.__docgenInfo={description:"Распределяет дочерние элементы по слотам.",displayName:"defineSlots",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/helpers/define-slots.tsx#defineSlots"]={docgenInfo:defineSlots.__docgenInfo,name:"defineSlots",path:"src/helpers/define-slots.tsx#defineSlots"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getTransitionStyle(duration=0,property="all",easing="ease-out"){return`${property} ${Number.isFinite(duration)?duration:0}ms ${easing}`}function getTranslateStyle(x=0,y=0,z=0){return`translate3d(${x}px, ${y}px, ${z}px)`}function setViewportHeightUnit(element){const{visualViewport}=window,height=visualViewport?visualViewport.height*visualViewport.scale:window.innerHeight;element.style.setProperty("--vh",height/100+"px")}__webpack_require__.d(__webpack_exports__,{Je:()=>setViewportHeightUnit,O1:()=>getTransitionStyle,PA:()=>getTranslateStyle})},"./src/hooks/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>useViewportHeightUnit});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_helpers_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/helpers/styles.ts");function useViewportHeightUnit(ref){(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const{visualViewport}=window,offList=[],setVariable=()=>{ref.current&&(0,_helpers_styles__WEBPACK_IMPORTED_MODULE_1__.Je)(ref.current)};return offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(window,"resize",setVariable)),offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(window,"orientationchange",setVariable)),visualViewport&&offList.push((0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(visualViewport,"resize",setVariable)),setVariable(),()=>offList.forEach((fn=>fn()))}),[])}},"./src/modal-overlay/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>ModalOverlay});var react=__webpack_require__("./node_modules/react/index.js"),styles=__webpack_require__("./src/hooks/styles.ts"),helpers_layer=__webpack_require__("./src/helpers/layer.ts"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),modal_overlay_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal-overlay/modal-overlay.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(modal_overlay_module.Z,options);const modal_overlay_modal_overlay_module=modal_overlay_module.Z&&modal_overlay_module.Z.locals?modal_overlay_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function ModalOverlay({rootRef,children,className,style,"data-testid":testId="modal-overlay",...restProps}){const layer=(0,helpers_layer.s)()+100,ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(rootRef,(()=>ref.current)),(0,styles.u)(ref),(0,jsx_runtime.jsx)(helpers_layer.l,{value:layer,children:(0,jsx_runtime.jsx)("div",{...restProps,ref,className:classnames_default()(modal_overlay_modal_overlay_module.root,className),"data-testid":testId,style:{...style,zIndex:layer},children})})}ModalOverlay.displayName="ModalOverlay";try{ModalOverlay.displayName="ModalOverlay",ModalOverlay.__docgenInfo={description:"Полноэкранное затемнение для модальных компонентов (Alert, Modal, SidePage...).",displayName:"ModalOverlay",props:{rootRef:{defaultValue:null,description:"Реф корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/modal-overlay/modal-overlay.tsx#ModalOverlay"]={docgenInfo:ModalOverlay.__docgenInfo,name:"ModalOverlay",path:"src/modal-overlay/modal-overlay.tsx#ModalOverlay"})}catch(__react_docgen_typescript_loader_error){}},"./src/modal-overlay/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useExactClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useExactClick(onExactClick,{onMouseDown,onMouseUp}={}){const callbackRef=(0,_hooks_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onExactClick),mouseDownTarget=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),handleMouseDown=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{onMouseDown?.(event),0===event.button&&(mouseDownTarget.current=event.target)}),[]);return{onMouseUp:(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const fn=callbackRef.current;onMouseUp?.(event),fn&&0===event.button&&event.target===event.currentTarget&&event.currentTarget===mouseDownTarget.current&&fn()}),[]),onMouseDown:handleMouseDown}}},"./src/side-page/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>SidePage});var react=__webpack_require__("./node_modules/react/index.js"),define_slots=__webpack_require__("./src/helpers/define-slots.tsx"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),top_bar=__webpack_require__("./src/top-bar/index.ts"),bottom_bar=__webpack_require__("./src/bottom-bar/index.ts"),utils=__webpack_require__("./src/top-bar/utils.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),side_page_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/side-page/side-page.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(side_page_module.Z,options);const side_page_side_page_module=side_page_module.Z&&side_page_module.Z.locals?side_page_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function SidePageHeader({onBack,onClose,buttons,...topBarProps}){return(0,jsx_runtime.jsx)(top_bar.Du,{...topBarProps,size:"unset",className:side_page_side_page_module.header,buttons:(0,utils.J)({buttons,onBack,onClose})})}function SidePageBody({children}){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children})}function SidePageFooter({...props}){return(0,jsx_runtime.jsx)(bottom_bar._E,{...props,size:"unset",className:classnames_default()(side_page_side_page_module.footer)})}SidePageHeader.displayName="SidePageHeader",SidePageFooter.displayName="SidePageFooter";try{SidePageHeader.displayName="SidePageHeader",SidePageHeader.__docgenInfo={description:"Шапка SidePage.",displayName:"SidePageHeader",props:{buttons:{defaultValue:null,description:"Свойства кнопок.",name:"buttons",required:!1,type:{name:"{ start?: TopBarButtonProps | undefined; startSecondary?: TopBarButtonProps | undefined; end?: TopBarButtonProps | undefined; endSecondary?: TopBarButtonProps | undefined; } | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"TopBarStyle | undefined"}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"unset"'}]}},subtitle:{defaultValue:null,description:"Подзаголовок.",name:"subtitle",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок.",name:"title",required:!1,type:{name:"ReactNode"}},divided:{defaultValue:null,description:"Нужна ли разделительная черта снизу.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:null,description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void) | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/slots.tsx#SidePageHeader"]={docgenInfo:SidePageHeader.__docgenInfo,name:"SidePageHeader",path:"src/side-page/slots.tsx#SidePageHeader"})}catch(__react_docgen_typescript_loader_error){}try{SidePageBody.displayName="SidePageBody",SidePageBody.__docgenInfo={description:"Основной контент SidePage.",displayName:"SidePageBody",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/slots.tsx#SidePageBody"]={docgenInfo:SidePageBody.__docgenInfo,name:"SidePageBody",path:"src/side-page/slots.tsx#SidePageBody"})}catch(__react_docgen_typescript_loader_error){}try{SidePageFooter.displayName="SidePageFooter",SidePageFooter.__docgenInfo={description:"Подвал SidePage.",displayName:"SidePageFooter",props:{size:{defaultValue:null,description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},divided:{defaultValue:null,description:"Нужна ли разделительная черта сверху.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:null,description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"BottomBarStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/slots.tsx#SidePageFooter"]={docgenInfo:SidePageFooter.__docgenInfo,name:"SidePageFooter",path:"src/side-page/slots.tsx#SidePageFooter"})}catch(__react_docgen_typescript_loader_error){}var CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),modal_overlay=__webpack_require__("./src/modal-overlay/index.ts"),modal_overlay_utils=__webpack_require__("./src/modal-overlay/utils.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js");const cx=__webpack_require__.n(bind)().bind(side_page_side_page_module),transitionClasses={enter:cx("enter"),enterActive:cx("enter-active"),exit:cx("exit"),exitActive:cx("exit-active")};function SidePage({shown,withTransitions,onEnter,onEntering,onEntered,onExit,onExiting,onExited,...restProps}){const transitionDuration=withTransitions?300:0;return(0,jsx_runtime.jsx)(CSSTransition.Z,{in:shown,timeout:transitionDuration,classNames:transitionClasses,unmountOnExit:!0,onEntering,onEnter,onEntered,onExit,onExiting,onExited,children:transitionStatus=>(0,jsx_runtime.jsx)(SidePageInner,{...restProps,transitionStatus,transitionDuration})})}function SidePageInner({size="m",children,onClose,withScrollDisable=!1,scrollDisableOptions,transitionStatus,transitionDuration}){const overlayClickBind=(0,modal_overlay_utils.y)(onClose),ref=(0,react.useRef)(null);(0,page_scroll_lock.PP)(ref,{lockEnabled:withScrollDisable,...scrollDisableOptions});const{header,body,footer}=(0,define_slots.W)(children,{header:SidePage.Header,body:SidePage.Body,footer:SidePage.Footer}),overlayProps={style:{"--transition-duration":`${transitionDuration}ms`},..."entering"!==transitionStatus&&overlayClickBind};return(0,jsx_runtime.jsx)(modal_overlay.Z,{...overlayProps,children:(0,jsx_runtime.jsxs)("div",{className:cx("side-page",`size-${size}`),"data-testid":"side-page",children:[header,(0,jsx_runtime.jsx)("div",{ref,className:cx("body"),children:body}),footer]})})}SidePage.displayName="SidePage",SidePageInner.displayName="SidePageInner",SidePage.Header=SidePageHeader,SidePage.Body=SidePageBody,SidePage.Footer=SidePageFooter;try{SidePage.displayName="SidePage",SidePage.__docgenInfo={description:"Модальное окно, прикрепленное к правой стороне экрана.",displayName:"SidePage",props:{shown:{defaultValue:null,description:"Нужно ли показать компонент.",name:"shown",required:!1,type:{name:"boolean | undefined"}},withTransitions:{defaultValue:null,description:"Нужно ли использовать анимации при открытии/закрытии.",name:"withTransitions",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Ширина.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},onClose:{defaultValue:null,description:"Сработает при закрытии.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}},onEntering:{defaultValue:null,description:'Обработчик "onEntering" для CSSTransition.',name:"onEntering",required:!1,type:{name:"((node: HTMLElement, isAppearing: boolean) => void) | undefined"}},onEnter:{defaultValue:null,description:'Обработчик "onEnter" для CSSTransition.',name:"onEnter",required:!1,type:{name:"((node: HTMLElement, isAppearing: boolean) => void) | undefined"}},onEntered:{defaultValue:null,description:'Обработчик "onEntered" для CSSTransition.',name:"onEntered",required:!1,type:{name:"((node: HTMLElement, isAppearing: boolean) => void) | undefined"}},onExiting:{defaultValue:null,description:'Обработчик "onExiting" для CSSTransition.',name:"onExiting",required:!1,type:{name:"((node: HTMLElement) => void) | undefined"}},onExited:{defaultValue:null,description:'Обработчик "onExited" для CSSTransition.',name:"onExited",required:!1,type:{name:"((node: HTMLElement) => void) | undefined"}},onExit:{defaultValue:null,description:'Обработчик "onExit" для CSSTransition.',name:"onExit",required:!1,type:{name:"((node: HTMLElement) => void) | undefined"}},withScrollDisable:{defaultValue:null,description:"Нужно ли выключать прокрутку body.",name:"withScrollDisable",required:!1,type:{name:"boolean | undefined"}},scrollDisableOptions:{defaultValue:null,description:"Опции отключения прокрутки.",name:"scrollDisableOptions",required:!1,type:{name:"PageScrollLockOptions | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/index.tsx#SidePage"]={docgenInfo:SidePage.__docgenInfo,name:"SidePage",path:"src/side-page/index.tsx#SidePage"})}catch(__react_docgen_typescript_loader_error){}try{Header.displayName="SidePage.Header",Header.__docgenInfo={description:"Шапка SidePage.",displayName:"SidePage.Header",props:{buttons:{defaultValue:null,description:"Свойства кнопок.",name:"buttons",required:!1,type:{name:"{ start?: TopBarButtonProps | undefined; startSecondary?: TopBarButtonProps | undefined; end?: TopBarButtonProps | undefined; endSecondary?: TopBarButtonProps | undefined; } | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"TopBarStyle | undefined"}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"unset"'}]}},subtitle:{defaultValue:null,description:"Подзаголовок.",name:"subtitle",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"Заголовок.",name:"title",required:!1,type:{name:"ReactNode"}},divided:{defaultValue:null,description:"Нужна ли разделительная черта снизу.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:null,description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},onBack:{defaultValue:null,description:"",name:"onBack",required:!1,type:{name:"(() => void) | undefined"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/index.tsx#SidePage.Header"]={docgenInfo:SidePage.Header.__docgenInfo,name:"SidePage.Header",path:"src/side-page/index.tsx#SidePage.Header"})}catch(__react_docgen_typescript_loader_error){}try{Body.displayName="SidePage.Body",Body.__docgenInfo={description:"Основной контент SidePage.",displayName:"SidePage.Body",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/index.tsx#SidePage.Body"]={docgenInfo:SidePage.Body.__docgenInfo,name:"SidePage.Body",path:"src/side-page/index.tsx#SidePage.Body"})}catch(__react_docgen_typescript_loader_error){}try{Footer.displayName="SidePage.Footer",Footer.__docgenInfo={description:"Подвал SidePage.",displayName:"SidePage.Footer",props:{size:{defaultValue:null,description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},divided:{defaultValue:null,description:"Нужна ли разделительная черта сверху.",name:"divided",required:!1,type:{name:"boolean | undefined"}},rounds:{defaultValue:null,description:"Скругления углов.",name:"rounds",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"BottomBarStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/side-page/index.tsx#SidePage.Footer"]={docgenInfo:SidePage.Footer.__docgenInfo,name:"SidePage.Footer",path:"src/side-page/index.tsx#SidePage.Footer"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/modal-overlay/modal-overlay.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal-overlay-module__root__afa{position:fixed;top:0;left:0;height:100%;width:100%;display:flex;background:rgba(0,0,0,.24);overflow:auto;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.modal-overlay-module__root__afa::-webkit-scrollbar{display:none}","",{version:3,sources:["webpack://./src/modal-overlay/modal-overlay.module.scss","webpack://./src/modal-overlay/modal-overlay-util.scss","webpack://./src/utils.scss"],names:[],mappings:"AAGA,iCACE,cAAA,CACA,KAAA,CACA,MAAA,CAGA,WAAA,CACA,UAAA,CAEA,YAAA,CACA,0BCbc,CDcd,aAAA,CERA,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,oDACE,YAAA",sourcesContent:["@use '../utils';\n@use './modal-overlay-util';\n\n.root {\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  // ВАЖНО: высота/ширина в процентах тк при использовании 100vw/100vh размер ломается если у body указан min-width\n  height: 100%;\n  width: 100%;\n\n  display: flex;\n  background: modal-overlay-util.$overlay-color;\n  overflow: auto;\n  @include utils.hidden-scrollbars;\n}\n","$overlay-color: rgba(0, 0, 0, 0.24);\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"modal-overlay-module__root__afa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/side-page/side-page.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".side-page-module__side-page__f88{position:absolute;top:0;right:0;height:100%;width:100%;display:flex;flex-direction:column;background:#fff}@media(max-width: 1023px){.side-page-module__side-page__f88{width:100%}.side-page-module__side-page__f88 .side-page-module__header__d11{--top-bar-height: 64px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 24px;--top-bar-icon-button-width: 60px}.side-page-module__side-page__f88 .side-page-module__footer__b46{--bottom-bar-height: 72px;--clean-group-height: 72px}}@media(min-width: 1024px){.side-page-module__side-page__f88.side-page-module__size-s__d2a{max-width:488px}.side-page-module__side-page__f88.side-page-module__size-m__fed{max-width:968px}.side-page-module__side-page__f88 .side-page-module__header__d11{--top-bar-height: 80px;--top-bar-title-size: 16px;--top-bar-title-height: 24px;--top-bar-gutter: 40px;--top-bar-icon-button-width: 76px;--top-bar-title-only-size: 20px;--top-bar-title-only-height: 28px}.side-page-module__side-page__f88 .side-page-module__footer__b46{--bottom-bar-height: 80px;--clean-group-height: 80px}}.side-page-module__header__d11{flex-shrink:0;width:100%}.side-page-module__body__d94{flex-grow:1;overflow-y:auto}.side-page-module__footer__b46{flex-shrink:0;width:100%}.side-page-module__enter__e7c{background-color:rgba(0,0,0,0)}.side-page-module__enter__e7c .side-page-module__side-page__f88{transform:translateX(100%)}.side-page-module__enter-active__f1c{transition:background-color var(--transition-duration) ease-in-out;background-color:rgba(0,0,0,.24);overflow:hidden}.side-page-module__enter-active__f1c .side-page-module__side-page__f88{transition:transform var(--transition-duration) ease-in-out;transform:translateX(0)}.side-page-module__exit__cf7{background-color:rgba(0,0,0,.24)}.side-page-module__exit__cf7 .side-page-module__side-page__f88{transform:translateX(0)}.side-page-module__exit-active__e99{transition:background-color var(--transition-duration) ease-in-out;background-color:rgba(0,0,0,0);overflow:hidden}.side-page-module__exit-active__e99 .side-page-module__side-page__f88{transition:transform var(--transition-duration) ease-in-out;transform:translateX(100%)}","",{version:3,sources:["webpack://./src/side-page/side-page.module.scss","webpack://./src/breakpoints.scss","webpack://./src/top-bar/top-bar-util.scss","webpack://./src/bottom-bar/bottom-bar-util.scss","webpack://./src/clean-buttons/clean-buttons-util.scss","webpack://./src/modal-overlay/modal-overlay-util.scss"],names:[],mappings:"AAMA,kCACE,iBAAA,CACA,KAAA,CACA,OAAA,CACA,WAAA,CACA,UAAA,CACA,YAAA,CACA,qBAAA,CACA,eAAA,CCmBE,0BD3BJ,kCAUI,UAAA,CACA,iEEJF,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CFGE,iEGRF,yBAAA,CCHA,0BAAA,CAAA,CHcE,0BDEA,gEACE,eAAA,CAEF,gEACE,eAAA,CAEF,iEEVF,sBAAA,CACA,0BAAA,CACA,4BAAA,CACA,sBAAA,CACA,iCAAA,CACA,+BAAA,CACA,iCAAA,CFOE,iEGjBF,yBAAA,CCJA,0BAAA,CAAA,CJ2BF,+BACE,aAAA,CACA,UAAA,CAGF,6BACE,WAAA,CACA,eAAA,CAGF,+BACE,aAAA,CACA,UAAA,CAIF,8BACE,8BAAA,CACA,gEACE,0BAAA,CAIJ,qCACE,kEAAA,CACA,gCKjEc,CLkEd,eAAA,CACA,uEACE,2DAAA,CACA,uBAAA,CAIJ,6BACE,gCK1Ec,CL2Ed,+DACE,uBAAA,CAIJ,oCACE,kEAAA,CACA,8BAAA,CACA,eAAA,CACA,sEACE,2DAAA,CACA,0BAAA",sourcesContent:["@use '../colors';\n@use '../breakpoints';\n@use '../top-bar/top-bar-util';\n@use '../bottom-bar/bottom-bar-util';\n@use '../modal-overlay/modal-overlay-util';\n\n.side-page {\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  @include breakpoints.down('xs') {\n    width: 100%;\n    .header {\n      @include top-bar-util.size-m;\n    }\n    .footer {\n      @include bottom-bar-util.size-m;\n    }\n  }\n  @include breakpoints.up('xs') {\n    &.size-s {\n      max-width: 488px;\n    }\n    &.size-m {\n      max-width: 968px;\n    }\n    .header {\n      @include top-bar-util.size-xl;\n    }\n    .footer {\n      @include bottom-bar-util.size-l;\n    }\n  }\n}\n\n.header {\n  flex-shrink: 0;\n  width: 100%;\n}\n\n.body {\n  flex-grow: 1;\n  overflow-y: auto;\n}\n\n.footer {\n  flex-shrink: 0;\n  width: 100%;\n}\n\n// transitions\n.enter {\n  background-color: transparent;\n  .side-page {\n    transform: translateX(100%);\n  }\n}\n\n.enter-active {\n  transition: background-color var(--transition-duration) ease-in-out;\n  background-color: modal-overlay-util.$overlay-color;\n  overflow: hidden;\n  .side-page {\n    transition: transform var(--transition-duration) ease-in-out;\n    transform: translateX(0);\n  }\n}\n\n.exit {\n  background-color: modal-overlay-util.$overlay-color;\n  .side-page {\n    transform: translateX(0);\n  }\n}\n\n.exit-active {\n  transition: background-color var(--transition-duration) ease-in-out;\n  background-color: transparent;\n  overflow: hidden;\n  .side-page {\n    transition: transform var(--transition-duration) ease-in-out;\n    transform: translateX(100%);\n  }\n}\n",'/* stylelint-disable length-zero-no-unit */\n$map: (\n  // ВАЖНО: тут именно 0px а не 0 - в Safari нельзя использовать @media (min-width: 0)\n  mxs: 0px,\n\n  ms: 480px,\n  mm: 720px,\n  ml: 840px,\n  xs: 1024px,\n  s: 1280px,\n  m: 1440px,\n  l: 1600px,\n  xl: 1920px\n) !default;\n/* stylelint-enable length-zero-no-unit */\n\n/**\n * ВАЖНО: здесь должны быть только утилиты позволяющие применить стили ">=" либо "<" начала диапазона (breakpoint range).\n * Не должно возникать ситуаций в которых нужно применить стили "<=" или ">" начала диапазона.\n */\n\n@mixin greaterThanOrEqual($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (min-width: map-get($map, $breakpoint)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin lessThan($breakpoint) {\n  @if map-has-key($map, $breakpoint) {\n    @media (max-width: (map-get($map, $breakpoint) - 1px)) {\n      @content;\n    }\n  } @else {\n    @warn \'No such breakpoint `#{$breakpoint}`. Available values: #{map-keys($map)}.\';\n  }\n}\n\n@mixin gte($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n@mixin lt($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin up($args...) {\n  @include greaterThanOrEqual($args...) {\n    @content;\n  }\n}\n\n/** @deprecated */\n@mixin down($args...) {\n  @include lessThan($args...) {\n    @content;\n  }\n}\n',"$size-s-height: 56px;\n$size-m-height: 64px;\n$size-xl-height: 80px;\n\n@mixin size-s {\n  --top-bar-height: #{$size-s-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 16px;\n  --top-bar-icon-button-width: 52px;\n}\n\n@mixin size-m {\n  --top-bar-height: #{$size-m-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 24px;\n  --top-bar-icon-button-width: 60px;\n}\n\n@mixin size-xl {\n  --top-bar-height: #{$size-xl-height};\n  --top-bar-title-size: 16px;\n  --top-bar-title-height: 24px;\n  --top-bar-gutter: 40px;\n  --top-bar-icon-button-width: 76px;\n  --top-bar-title-only-size: 20px;\n  --top-bar-title-only-height: 28px;\n}\n","@use '../clean-buttons/clean-buttons-util';\n\n$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --bottom-bar-height: #{$size-s-height};\n  @include clean-buttons-util.size-s;\n}\n\n@mixin size-m {\n  --bottom-bar-height: #{$size-m-height};\n  @include clean-buttons-util.size-m;\n}\n\n@mixin size-l {\n  --bottom-bar-height: #{$size-l-height};\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n","$overlay-color: rgba(0, 0, 0, 0.24);\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"side-page":"side-page-module__side-page__f88",header:"side-page-module__header__d11",footer:"side-page-module__footer__b46","size-s":"side-page-module__size-s__d2a","size-m":"side-page-module__size-m__fed",body:"side-page-module__body__d94",enter:"side-page-module__enter__e7c","enter-active":"side-page-module__enter-active__f1c",exit:"side-page-module__exit__cf7","exit-active":"side-page-module__exit-active__e99"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);