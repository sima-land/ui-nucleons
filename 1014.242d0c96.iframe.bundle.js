"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[1014],{"./.storybook/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KI:()=>LargePage,Ap:()=>LoremIpsum,aH:()=>PageScrollLockDemo,pv:()=>Sandbox,Td:()=>someImageUrl});var react=__webpack_require__("./node_modules/react/index.js"),lodash=__webpack_require__("./node_modules/lodash/lodash.js"),dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts");const MARK_ATTR="data-scroll-locked";class PageScrollLock{constructor(options){this.options=options}lock(){if(!this.isLocked()){const scrollTop=document.documentElement.scrollTop;if(this.bodyStyle=new StyleAffect(document.body),this.bodyStyle.set("width","100vw").set("position","fixed").set("top",-scrollTop+"px"),this.options?.reserveScrollBarGap){const gap=this.getScrollbarWidth();gap>0&&this.bodyStyle.set("padding-right",`${gap}px`)}document.body.setAttribute(MARK_ATTR,"true")}}unlock(){if(this.isLocked()){const{body}=document,parsed=parseFloat(body.style.getPropertyValue("top").replace(/[A-z]*/g,""))||0;this.bodyStyle?.restore(),window.scrollTo(0,-parsed),document.body.removeAttribute(MARK_ATTR)}}isLocked(){return document.body.hasAttribute(MARK_ATTR)}getScrollbarWidth(){const div=document.createElement("div");div.style.overflowY="scroll",div.style.width="50px",div.style.height="50px",document.body.append(div);const scrollBarWidth=div.offsetWidth-div.clientWidth;return div.remove(),scrollBarWidth}}class StyleAffect{constructor(element){this.element=element,this.changes=new Map}set(prop,value,priority){return this.changes.has(prop)||this.changes.set(prop,{oldValue:this.element.style.getPropertyValue(prop),oldPriority:this.element.style.getPropertyPriority(prop)}),this.element.style.setProperty(prop,value,priority),this}restore(){for(const[prop,{oldValue,oldPriority}]of this.changes)this.element.style.setProperty(prop,oldValue,oldPriority);return this.changes.clear(),this}}var body_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts"),src_select=__webpack_require__("./src/select/index.ts"),dropdown_item=__webpack_require__("./src/dropdown-item/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),utils_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_module.Z,options);const _storybook_utils_module=utils_module.Z&&utils_module.Z.locals?utils_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function someImageUrl(params){let w,h,id;return"number"==typeof params?(w=params,h=w,id=1):Array.isArray(params)?(w=params[0],h=params[1],id=1):(w=params.w||100,h=params.h||w,id="number"==typeof params.id?params.id:1),`https://loremflickr.com/${w}/${h}/architecture?lock=${id}`}function Sandbox({controls=[],children,areaStyle}){return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.sandbox,children:[(0,jsx_runtime.jsx)("div",{className:_storybook_utils_module.controls,children:controls.filter((c=>!c.hidden)).map(((control,index)=>{switch(control.type){case"select":return(0,jsx_runtime.jsx)(SandboxSelect,{...control},index);case"toggle":return(0,jsx_runtime.jsx)(SandboxToggle,{...control},index);default:return null}}))}),(0,jsx_runtime.jsx)("div",{className:_storybook_utils_module.area,style:areaStyle,children})]})}function SandboxSelect({label,options,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.select,children:[(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("select",{className:_storybook_utils_module.field,id,value,onChange:e=>onChange?.(e.target.value),children:options.map(((option,i)=>(0,jsx_runtime.jsx)("option",{value:option,children:(0,lodash.upperFirst)(option)},i)))})})]})}function SandboxToggle({label,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.toggle,children:[(0,jsx_runtime.jsx)("input",{className:_storybook_utils_module.field,id,type:"checkbox",checked:value,onChange:e=>onChange?.(e.target.checked)}),(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label})]})}function SandboxControlLabel({htmlFor,children}){return(0,jsx_runtime.jsx)("label",{htmlFor,className:_storybook_utils_module.label,children})}function LoremIpsum({paragraphCount=1,sentenceCount=20}){function generate(){return Array(paragraphCount).fill(0).map((()=>(0,dist.fH)({format:"plain",sentenceLowerBound:sentenceCount,sentenceUpperBound:sentenceCount})))}const[content,setContent]=(0,react.useState)(generate);return(0,react.useEffect)((()=>{setContent(generate)}),[paragraphCount,sentenceCount]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content.map(((item,index)=>(0,jsx_runtime.jsx)("p",{children:item},index)))})}function PageScrollLockDemo({children}){const adapterNames=["body-scroll-lock","ui-nucleons"],[adapterName,setAdapterName]=(0,react.useState)("body-scroll-lock");let adapter;if("ui-nucleons"===adapterName)adapter=(_,options)=>new PageScrollLock(options);else adapter=(element,options)=>new body_scroll_lock.Ye(element,options);return(0,jsx_runtime.jsxs)(page_scroll_lock.RA,{adapter,children:[(0,jsx_runtime.jsx)("h1",{children:"Пример страницы"}),(0,jsx_runtime.jsx)("p",{children:"Это тестовая страница для проверки блокировки прокрутки с разными реализациями."}),(0,jsx_runtime.jsx)(src_select.P,{opener:(0,jsx_runtime.jsx)(src_select.P.FieldBlock,{size:"l",label:"Реализация"}),value:adapterName,onValueChange:value=>{adapterNames.includes(value)&&setAdapterName(value)},children:adapterNames.map(((name,index)=>(0,jsx_runtime.jsx)(dropdown_item.h,{value:name,children:name},index)))}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"20px"},children}),(0,jsx_runtime.jsx)(LoremIpsum,{paragraphCount:50,sentenceCount:50})]})}function usePageCentered(){(0,react.useEffect)((()=>{const body=document.body,html=document.documentElement,pageHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);window.scroll({top:(pageHeight-window.innerHeight)/2})}),[])}function LargePage({children}){return usePageCentered(),(0,jsx_runtime.jsx)("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children})}Sandbox.displayName="Sandbox",SandboxSelect.displayName="SandboxSelect",SandboxToggle.displayName="SandboxToggle",SandboxControlLabel.displayName="SandboxControlLabel",PageScrollLockDemo.displayName="PageScrollLockDemo",LargePage.displayName="LargePage";try{someImageUrl.displayName="someImageUrl",someImageUrl.__docgenInfo={description:"Возвращает ссылку на картинку по заданным параметрам.\nНа данный момент за основу взят https://loremflickr.com/.",displayName:"someImageUrl",props:{0:{defaultValue:null,description:"",name:"0",required:!0,type:{name:"number"}},1:{defaultValue:null,description:"",name:"1",required:!0,type:{name:"number"}},length:{defaultValue:null,description:"",name:"length",required:!0,type:{name:"2"}},w:{defaultValue:null,description:"",name:"w",required:!1,type:{name:"number | undefined"}},h:{defaultValue:null,description:"",name:"h",required:!1,type:{name:"number | undefined"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#someImageUrl"]={docgenInfo:someImageUrl.__docgenInfo,name:"someImageUrl",path:".storybook/utils.tsx#someImageUrl"})}catch(__react_docgen_typescript_loader_error){}try{Sandbox.displayName="Sandbox",Sandbox.__docgenInfo={description:"Визуальная песочница с возможностью размещения полей ввода для управления состоянием.",displayName:"Sandbox",props:{controls:{defaultValue:{value:"[]"},description:"",name:"controls",required:!1,type:{name:"(ControlToggle | ControlSelect)[] | undefined"}},areaStyle:{defaultValue:null,description:"",name:"areaStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#Sandbox"]={docgenInfo:Sandbox.__docgenInfo,name:"Sandbox",path:".storybook/utils.tsx#Sandbox"})}catch(__react_docgen_typescript_loader_error){}try{LoremIpsum.displayName="LoremIpsum",LoremIpsum.__docgenInfo={description:"Выводит текст-рыбу.",displayName:"LoremIpsum",props:{paragraphCount:{defaultValue:{value:"1"},description:"",name:"paragraphCount",required:!1,type:{name:"number | undefined"}},sentenceCount:{defaultValue:{value:"20"},description:"",name:"sentenceCount",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LoremIpsum"]={docgenInfo:LoremIpsum.__docgenInfo,name:"LoremIpsum",path:".storybook/utils.tsx#LoremIpsum"})}catch(__react_docgen_typescript_loader_error){}try{PageScrollLockDemo.displayName="PageScrollLockDemo",PageScrollLockDemo.__docgenInfo={description:"Тестовая страница большой высоты для проверки блокировки прокрутки.",displayName:"PageScrollLockDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#PageScrollLockDemo"]={docgenInfo:PageScrollLockDemo.__docgenInfo,name:"PageScrollLockDemo",path:".storybook/utils.tsx#PageScrollLockDemo"})}catch(__react_docgen_typescript_loader_error){}try{usePageCentered.displayName="usePageCentered",usePageCentered.__docgenInfo={description:"Прокручивает страницу по вертикали до центра.",displayName:"usePageCentered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#usePageCentered"]={docgenInfo:usePageCentered.__docgenInfo,name:"usePageCentered",path:".storybook/utils.tsx#usePageCentered"})}catch(__react_docgen_typescript_loader_error){}try{LargePage.displayName="LargePage",LargePage.__docgenInfo={description:"Тестовая страница с центрирование контента.",displayName:"LargePage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LargePage"]={docgenInfo:LargePage.__docgenInfo,name:"LargePage",path:".storybook/utils.tsx#LargePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ye:()=>PageScrollLock,kI:()=>BSL_IGNORE_ATTR});var body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLock{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.Qp,enableBodyScroll:body_scroll_lock__WEBPACK_IMPORTED_MODULE_0__.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1}},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>body_scroll_lock.kI,RA:()=>PageScrollProvider,PP:()=>usePageScrollLock});var body_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/adapters/body-scroll-lock.ts"),hooks=__webpack_require__("./src/hooks/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const PageScrollContext=(0,react.createContext)(null),DEFAULTS={adapter:(element,options)=>new body_scroll_lock.Ye(element,options)};function PageScrollProvider({children,adapter}){if(null!==(0,react.useContext)(PageScrollContext))throw Error("PageScrollContext: only one provider allowed in jsx tree");return(0,jsx_runtime.jsx)(PageScrollContext.Provider,{value:{adapter},children})}function usePageScrollContext(){return(0,react.useContext)(PageScrollContext)||DEFAULTS}PageScrollProvider.displayName="PageScrollProvider";try{PageScrollProvider.displayName="PageScrollProvider",PageScrollProvider.__docgenInfo={description:"Провайдер реализации блокировки прокрутки.",displayName:"PageScrollProvider",props:{adapter:{defaultValue:null,description:"",name:"adapter",required:!0,type:{name:"PageScrollLockAdapterFactory"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"]={docgenInfo:PageScrollProvider.__docgenInfo,name:"PageScrollProvider",path:"src/_internal/page-scroll-lock/context.tsx#PageScrollProvider"})}catch(__react_docgen_typescript_loader_error){}try{usePageScrollContext.displayName="usePageScrollContext",usePageScrollContext.__docgenInfo={description:"Хук использования реализации блокировки прокрутки.",displayName:"usePageScrollContext",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"]={docgenInfo:usePageScrollContext.__docgenInfo,name:"usePageScrollContext",path:"src/_internal/page-scroll-lock/context.tsx#usePageScrollContext"})}catch(__react_docgen_typescript_loader_error){}const hook_DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options=hook_DEFAULTS){const{adapter}=usePageScrollContext();(0,hooks.LI)((()=>{const element=ref.current;if(element&&options.lockEnabled){const pageScroll=adapter(element,options);return pageScroll.lock(),()=>pageScroll.unlock()}}),[options?.lockEnabled,options?.reserveScrollBarGap])}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-module__sandbox__ee9 .utils-module__controls__fc0{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__label__fc0{font-size:14px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__toggle__c08{display:flex;gap:8px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__toggle__c08 .utils-module__field__d8e{margin:0}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__select__a76{display:flex;flex-direction:column;gap:8px;align-items:flex-start}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__select__a76 .utils-module__field__d8e{min-width:160px;-webkit-appearance:menulist-button;height:32px;font-size:16px;text-transform:capitalize}.utils-module__sandbox__ee9 .utils-module__area__a41{border:3px dashed #aaa;border-radius:8px;padding:24px}","",{version:3,sources:["webpack://./.storybook/utils.module.scss"],names:[],mappings:"AACE,yDACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,mFACE,cAAA,CAEF,oFACE,YAAA,CACA,OAAA,CACA,8GACE,QAAA,CAGJ,oFACE,YAAA,CACA,qBAAA,CACA,OAAA,CACA,sBAAA,CACA,8GACE,eAAA,CACA,kCAAA,CACA,WAAA,CACA,cAAA,CACA,yBAAA,CAIN,qDACE,sBAAA,CACA,iBAAA,CACA,YAAA",sourcesContent:['.sandbox {\n  .controls {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 20px;\n    .label {\n      font-size: 14px;\n    }\n    .toggle {\n      display: flex;\n      gap: 8px;\n      .field {\n        margin: 0;\n      }\n    }\n    .select {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      align-items: flex-start;\n      .field {\n        min-width: 160px;\n        -webkit-appearance: menulist-button; // чтобы в Safari работало свойство "height"\n        height: 32px;\n        font-size: 16px;\n        text-transform: capitalize;\n      }\n    }\n  }\n  .area {\n    border: 3px dashed #aaa;\n    border-radius: 8px;\n    padding: 24px;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sandbox:"utils-module__sandbox__ee9",controls:"utils-module__controls__fc0",label:"utils-module__label__fc0",toggle:"utils-module__toggle__c08",field:"utils-module__field__d8e",select:"utils-module__select__a76",area:"utils-module__area__a41"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);