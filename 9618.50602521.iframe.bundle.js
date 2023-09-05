/*! For license information please see 9618.50602521.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[9618],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M11.707 3.293a1 1 0 0 1 0 1.414L4.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/helpers/bounds-of.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function boundsOf(element){return element instanceof Element?element.getBoundingClientRect():null}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,j:()=>boundsOf});const __WEBPACK_DEFAULT_EXPORT__=boundsOf},"./src/helpers/get-scroll-parent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>getScrollParent});const regex=/(auto|scroll)/;function getScrollParent(element){let result;return result=element&&element!==document.body?function isScrollable(element){let result=!1;if(element){const styles=getComputedStyle(element);result=regex.test(styles.overflow+styles.overflowX+styles.overflowY)}return result}(element.parentElement)?element.parentElement:getScrollParent(element.parentElement):document.body,result}},"./src/helpers/layer.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>LayerProvider,s:()=>useLayer});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const LayerContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(0),LayerProvider=LayerContext.Provider;function useLayer(){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(LayerContext)}},"./src/hint-deprecated/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>Hint});var react=__webpack_require__("./node_modules/react/index.js"),shadows=__webpack_require__("./src/styling/shadows.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),hint_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint-deprecated/hint.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(hint_module.Z,options);const hint_deprecated_hint_module=hint_module.Z&&hint_module.Z.locals?hint_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(hint_deprecated_hint_module),Hint=(0,react.forwardRef)((({children,className,direction,...restProps},ref)=>(0,jsx_runtime.jsx)("div",{...restProps,ref,className:cx("root",className,direction),"data-testid":"hint",children:(0,jsx_runtime.jsx)("div",{className:cx("body",shadows.P.z4),children})})));try{Hint.displayName="Hint",Hint.__docgenInfo={description:"",displayName:"Hint",props:{direction:{defaultValue:null,description:"С какой стороны появляется хинт.",name:"direction",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"bottom"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hint-deprecated/index.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"src/hint-deprecated/index.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}},"./src/portal/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>Portal});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts");const Portal=({children,defineRoot=()=>document.body})=>{const[mounted,setMounted]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.LI)((()=>{const root=defineRoot();return ref.current=document.createElement("div"),root.appendChild(ref.current),setMounted(!0),()=>{ref.current&&ref.current.remove()}}),[]),mounted&&ref.current?(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(children,ref.current):null};try{Portal.displayName="Portal",Portal.__docgenInfo={description:"Компонент слоя. Выводит содержимое в портале.",displayName:"Portal",props:{defineRoot:{defaultValue:{value:"() => document.body"},description:"Вернет элемент, в который нужно вывести содержимое через портал.",name:"defineRoot",required:!1,type:{name:"(() => HTMLElement) | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/portal/index.tsx#Portal"]={docgenInfo:Portal.__docgenInfo,name:"Portal",path:"src/portal/index.tsx#Portal"})}catch(__react_docgen_typescript_loader_error){}},"./src/with-hint/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>WithHint,k:()=>useTempHint});var react=__webpack_require__("./node_modules/react/index.js"),portal=__webpack_require__("./src/portal/index.tsx"),hint_deprecated=__webpack_require__("./src/hint-deprecated/index.tsx"),get_scroll_parent=__webpack_require__("./src/helpers/get-scroll-parent.ts"),on=__webpack_require__("./src/helpers/on.ts"),utils=__webpack_require__("./src/with-tooltip/utils.ts");const PlaceAt={commons:(hint,opener)=>[hint.getBoundingClientRect(),opener.getBoundingClientRect(),(0,utils.sl)(hint)],top:(hint,opener)=>{const[hintRect,openerRect,correct]=PlaceAt.commons(hint,opener);hint.style.left=correct.x+openerRect.left+openerRect.width/2-hintRect.width/2+"px",hint.style.top=correct.y-4+openerRect.top-hintRect.height+"px"},right:(hint,opener)=>{const[hintRect,openerRect,correct]=PlaceAt.commons(hint,opener);hint.style.left=`${correct.x+4+openerRect.right}px`,hint.style.top=correct.y+openerRect.top+openerRect.height/2-hintRect.height/2+"px"},bottom:(hint,opener)=>{const[hintRect,openerRect,correct]=PlaceAt.commons(hint,opener);hint.style.left=correct.x+openerRect.left+openerRect.width/2-hintRect.width/2+"px",hint.style.top=`${correct.y+4+openerRect.bottom}px`},left:(hint,opener)=>{const[hintRect,openerRect,correct]=PlaceAt.commons(hint,opener);hint.style.left=correct.x-4+openerRect.left-hintRect.width+"px",hint.style.top=correct.y+openerRect.top+openerRect.height/2-hintRect.height/2+"px"}};var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),positioning_hint_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/with-hint/positioning-hint.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(positioning_hint_module.Z,options);const with_hint_positioning_hint_module=positioning_hint_module.Z&&positioning_hint_module.Z.locals?positioning_hint_module.Z.locals:void 0;var helpers_layer=__webpack_require__("./src/helpers/layer.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(with_hint_positioning_hint_module),PositioningHint=({children,direction,openerRef})=>{const layer=(0,helpers_layer.s)(),ref=(0,react.useRef)(null);return(0,react.useEffect)((()=>{ref.current&&openerRef.current&&(ref.current.classList.remove(cx("hidden")),PlaceAt[direction](ref.current,openerRef.current))}),[direction,children]),(0,jsx_runtime.jsx)(hint_deprecated.k,{ref,direction,className:cx("hint","hidden"),style:{zIndex:layer+1},children})};PositioningHint.displayName="PositioningHint";try{PositioningHint.displayName="PositioningHint",PositioningHint.__docgenInfo={description:"Хинт, который выводится рядом с целевым элементом.",displayName:"PositioningHint",props:{openerRef:{defaultValue:null,description:"",name:"openerRef",required:!0,type:{name:"RefObject<Element | null | undefined>"}},direction:{defaultValue:null,description:"С какой стороны появляется хинт.",name:"direction",required:!0,type:{name:"enum",value:[{value:'"top"'},{value:'"left"'},{value:'"bottom"'},{value:'"right"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/with-hint/positioning-hint.tsx#PositioningHint"]={docgenInfo:PositioningHint.__docgenInfo,name:"PositioningHint",path:"src/with-hint/positioning-hint.tsx#PositioningHint"})}catch(__react_docgen_typescript_loader_error){}const WithHint=({children,direction="top",hint,onClose,shown:shownProp=!1})=>{const[shown,toggle]=(0,react.useState)(!1),openerRef=(0,react.useRef)(null);return(0,react.useEffect)((()=>toggle(shownProp)),[shownProp]),(0,react.useEffect)((()=>{if(shown&&openerRef.current)return((element,callback)=>{let scrollParent=(0,get_scroll_parent.r)(element);return scrollParent=scrollParent===document.body?document:scrollParent,(0,on.Z)(scrollParent,"scroll",callback)})(openerRef.current,(()=>{toggle(!1),onClose&&onClose()}))}),[shown]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[children(openerRef,toggle),shown&&hint&&(0,jsx_runtime.jsx)(portal.h,{children:(0,jsx_runtime.jsx)(PositioningHint,{openerRef,direction,children:hint})})]})},useTempHint=()=>{const timerRef=(0,react.useRef)(),[shown,setShown]=(0,react.useState)(!1),toggle=(0,react.useCallback)((value=>{setShown(value),window.clearTimeout(timerRef.current),value&&(timerRef.current=window.setTimeout((()=>setShown(!1)),2e3))}),[]);return[{shown,onClose:(0,react.useCallback)((()=>toggle(!1)),[])},toggle]};try{WithHint.displayName="WithHint",WithHint.__docgenInfo={description:'Компонент вывода "хинта" рядом с заданным элементом.',displayName:"WithHint",props:{hint:{defaultValue:null,description:"Содержимое хинта.",name:"hint",required:!0,type:{name:"ReactNode"}},direction:{defaultValue:{value:"top"},description:"С какой стороны появляется хинт.",name:"direction",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"top"'},{value:'"left"'},{value:'"bottom"'},{value:'"right"'}]}},shown:{defaultValue:null,description:"Нужно ли показывать хинт.",name:"shown",required:!1,type:{name:"boolean | undefined"}},children:{defaultValue:null,description:"Контент, содержащий элемент, рядом с которым будет показан хинт.",name:"children",required:!0,type:{name:"ChildrenFn"}},onClose:{defaultValue:null,description:"Срабатывает при закрытии.",name:"onClose",required:!1,type:{name:"(() => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/with-hint/index.tsx#WithHint"]={docgenInfo:WithHint.__docgenInfo,name:"WithHint",path:"src/with-hint/index.tsx#WithHint"})}catch(__react_docgen_typescript_loader_error){}try{useTempHint.displayName="useTempHint",useTempHint.__docgenInfo={description:"Хук для формирования состояния временного хинта по гайдам.",displayName:"useTempHint",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/with-hint/index.tsx#useTempHint"]={docgenInfo:useTempHint.__docgenInfo,name:"useTempHint",path:"src/with-hint/index.tsx#useTempHint"})}catch(__react_docgen_typescript_loader_error){}},"./src/with-tooltip/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{sl:()=>getOriginCorrection,pg:()=>placeTooltip});var bounds_of=__webpack_require__("./src/helpers/bounds-of.ts"),get_scroll_parent=__webpack_require__("./src/helpers/get-scroll-parent.ts");var lodash=__webpack_require__("./node_modules/lodash/lodash.js");const SPACES_correction=24,SPACES_toHolder=8,SPACES_toArea=16,rectKeys=["top","left","bottom","right","width","height"],asNumber=cssValue=>parseFloat(cssValue.replace(/[A-z]/g,""))||0,sum=(...numbers)=>numbers.reduce(((a,b)=>a+b)),CanPlace_onRight=(holderEl,tooltipEl,area)=>area.right-(0,bounds_of.Z)(holderEl).right-SPACES_correction>(0,bounds_of.Z)(tooltipEl).width,CanPlace_onLeft=(holderEl,tooltipEl,area)=>(0,bounds_of.Z)(holderEl).left-SPACES_correction-area.left>(0,bounds_of.Z)(tooltipEl).width,CanPlace_onBottom=(holderEl,tooltipEl,area)=>(0,bounds_of.Z)(tooltipEl).height<area.bottom-(0,bounds_of.Z)(holderEl).bottom-SPACES_correction,CanPlace_onTop=(holderEl,tooltipEl,area)=>(0,bounds_of.Z)(tooltipEl).height<(0,bounds_of.Z)(holderEl).top-area.top-SPACES_correction,PlaceOffset_reset=element=>{element.style.top="0",element.style.left="0",element.style.bottom="",element.style.right="",element.style.maxHeight=""},PlaceOffset_onRight=(tooltipEl,holderEl)=>{const correction=getOriginCorrection(tooltipEl);return sum(SPACES_toHolder,(0,bounds_of.Z)(holderEl).right,correction.x)},PlaceOffset_onLeft=(tooltipEl,holderEl)=>{const correction=getOriginCorrection(tooltipEl);return sum((0,bounds_of.Z)(holderEl).left,-(0,bounds_of.Z)(tooltipEl).width,-SPACES_toHolder,correction.x)},PlaceOffset_onBottom=(tooltipEl,holderEl)=>{const correction=getOriginCorrection(tooltipEl);return sum((0,bounds_of.Z)(holderEl).bottom,SPACES_toHolder,correction.y)},PlaceOffset_onTop=(tooltipEl,holderEl)=>{const correction=getOriginCorrection(tooltipEl);return sum((0,bounds_of.Z)(holderEl).top,-(0,bounds_of.Z)(tooltipEl).height,-SPACES_toHolder,correction.y)},CorrectOffset_vertically=(tooltipEl,holderEl,area)=>{const tooltipBounds=(0,bounds_of.Z)(tooltipEl),holderBounds=(0,bounds_of.Z)(holderEl),correction=getOriginCorrection(tooltipEl);let result;return result=area.bottom-holderBounds.bottom>tooltipBounds.height+SPACES_correction?correction.y+holderBounds.top:holderBounds.bottom-area.top>tooltipBounds.height+SPACES_correction?correction.y+holderBounds.bottom-tooltipBounds.height:correction.y+SPACES_toArea,result},CorrectOffset_horizontally=(tooltipEl,area)=>getOriginCorrection(tooltipEl).x+area.left+SPACES_toArea,placeTooltip=(tooltipEl,holderEl,viewportEl)=>{const area=getInnerRect(viewportEl),offset={x:0,y:0};PlaceOffset_reset(tooltipEl),CanPlace_onRight(holderEl,tooltipEl,area)?(offset.x=PlaceOffset_onRight(tooltipEl,holderEl),offset.y=CorrectOffset_vertically(tooltipEl,holderEl,area)):CanPlace_onLeft(holderEl,tooltipEl,area)?(offset.x=PlaceOffset_onLeft(tooltipEl,holderEl),offset.y=CorrectOffset_vertically(tooltipEl,holderEl,area)):CanPlace_onBottom(holderEl,tooltipEl,area)?(offset.y=PlaceOffset_onBottom(tooltipEl,holderEl),offset.x=CorrectOffset_horizontally(tooltipEl,area)):CanPlace_onTop(holderEl,tooltipEl,area)?(offset.y=PlaceOffset_onTop(tooltipEl,holderEl),offset.x=CorrectOffset_horizontally(tooltipEl,area)):(offset.x=area.left+SPACES_toArea,offset.y=area.top+SPACES_toArea,tooltipEl.style.maxHeight=area.height-2*SPACES_toArea+"px"),tooltipEl.style.transform=`translate3d(${offset.x}px, ${offset.y}px, 0)`},getInnerRect=element=>{const area=(0,lodash.pick)((0,bounds_of.Z)(element),rectKeys);return element.scrollWidth>area.width&&(area.left=area.left-element.scrollLeft,area.width=element.scrollWidth,area.right=area.left+area.width),element.scrollHeight>area.height&&(area.top=area.top-element.scrollTop,area.height=element.scrollHeight,area.bottom=area.top+area.height),area},getOriginCorrection=element=>{const offsetParent=function findOffsetParent(element){let parent=element.offsetParent||document.body;return"static"===getComputedStyle(parent).position&&(parent="static"===getComputedStyle(document.documentElement).position?null:document.documentElement),parent}(element),scrollParent=(0,get_scroll_parent.r)(element),correction={x:window.pageXOffset,y:window.pageYOffset};if(offsetParent){const parentRect=(0,bounds_of.Z)(offsetParent),parentStyle=getComputedStyle(offsetParent);correction.x=-parentRect.left,correction.y=-parentRect.top,correction.x-=asNumber(parentStyle.borderLeftWidth),correction.y-=asNumber(parentStyle.borderTopWidth)}return offsetParent===scrollParent&&(correction.x+=scrollParent.scrollLeft,correction.y+=scrollParent.scrollTop),correction}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/hint-deprecated/hint.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.hint-module__root__e81{display:inline-flex;align-items:center;justify-content:center}.hint-module__root__e81.hint-module__top__b94,.hint-module__root__e81.hint-module__bottom__e0a{flex-direction:column}.hint-module__root__e81.hint-module__top__b94::after{content:"";display:block;width:0;height:0;border-style:solid;border-width:4px 4px 0;border-color:#3a3a3b rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0)}.hint-module__root__e81.hint-module__right__ded::before{content:"";display:block;width:0;height:0;border-style:solid;border-width:4px 4px 4px 0;border-color:rgba(0,0,0,0) #3a3a3b rgba(0,0,0,0) rgba(0,0,0,0)}.hint-module__root__e81.hint-module__bottom__e0a::before{content:"";display:block;width:0;height:0;border-style:solid;border-width:0 4px 4px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) #3a3a3b rgba(0,0,0,0)}.hint-module__root__e81.hint-module__left__ce7::after{content:"";display:block;width:0;height:0;border-style:solid;border-width:4px 0 4px 4px;border-color:rgba(0,0,0,0) rgba(0,0,0,0) rgba(0,0,0,0) #3a3a3b}.hint-module__body__c40{align-items:center;background:#3a3a3b;border-radius:4px;color:#fff;display:flex;font-size:14px;line-height:20px;min-height:36px;padding:8px;white-space:nowrap;text-align:center}',"",{version:3,sources:["webpack://./src/hint-deprecated/hint.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,wBACE,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,+FAEE,qBAAA,CAEF,qDACE,UAAA,CACA,aAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,sBAAA,CACA,8DAAA,CAEF,wDACE,UAAA,CACA,aAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,8DAAA,CAEF,yDACE,UAAA,CACA,aAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,sBAAA,CACA,8DAAA,CAEF,sDACE,UAAA,CACA,aAAA,CACA,OAAA,CACA,QAAA,CACA,kBAAA,CACA,0BAAA,CACA,8DAAA,CAIJ,wBACE,kBAAA,CACA,kBC7Ca,CD8Cb,iBAAA,CACA,UAAA,CACA,YAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,WAAA,CACA,kBAAA,CACA,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  &.top,\n  &.bottom {\n    flex-direction: column;\n  }\n  &.top::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 4px 0;\n    border-color: colors.$basic-gray76 transparent transparent transparent;\n  }\n  &.right::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 4px 4px 0;\n    border-color: transparent colors.$basic-gray76 transparent transparent;\n  }\n  &.bottom::before {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 0 4px 4px;\n    border-color: transparent transparent colors.$basic-gray76 transparent;\n  }\n  &.left::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 4px 0 4px 4px;\n    border-color: transparent transparent transparent colors.$basic-gray76;\n  }\n}\n\n.body {\n  align-items: center;\n  background: colors.$basic-gray76;\n  border-radius: 4px;\n  color: #fff;\n  display: flex;\n  font-size: 14px;\n  line-height: 20px;\n  min-height: 36px;\n  padding: 8px;\n  white-space: nowrap;\n  text-align: center;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"hint-module__root__e81",top:"hint-module__top__b94",bottom:"hint-module__bottom__e0a",right:"hint-module__right__ded",left:"hint-module__left__ce7",body:"hint-module__body__c40"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/with-hint/positioning-hint.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".positioning-hint-module__hint__b28{position:absolute;top:0;left:0}.positioning-hint-module__hidden__f0a{opacity:0;pointer-events:0}","",{version:3,sources:["webpack://./src/with-hint/positioning-hint.module.scss"],names:[],mappings:"AAAA,oCACE,iBAAA,CACA,KAAA,CACA,MAAA,CAGF,sCACE,SAAA,CACA,gBAAA",sourcesContent:[".hint {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.hidden {\n  opacity: 0;\n  pointer-events: 0;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={hint:"positioning-hint-module__hint__b28",hidden:"positioning-hint-module__hidden__f0a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);