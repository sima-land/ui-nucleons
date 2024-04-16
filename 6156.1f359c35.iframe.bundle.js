"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6156],{"./.storybook/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KI:()=>LargePage,Ap:()=>LoremIpsum,aH:()=>PageScrollLockDemo,pv:()=>Sandbox});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),src_select=__webpack_require__("./src/select/index.ts"),dropdown_item=__webpack_require__("./src/dropdown-item/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),utils_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_m.Z,options);const _storybook_utils_m=utils_m.Z&&utils_m.Z.locals?utils_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sandbox({controls=[],children,areaStyle}){return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.sandbox,children:[(0,jsx_runtime.jsx)("div",{className:_storybook_utils_m.controls,children:controls.filter((c=>!c.hidden)).map(((control,index)=>{switch(control.type){case"select":return(0,jsx_runtime.jsx)(SandboxSelect,{...control},index);case"toggle":return(0,jsx_runtime.jsx)(SandboxToggle,{...control},index);default:return null}}))}),(0,jsx_runtime.jsx)("div",{className:_storybook_utils_m.area,style:areaStyle,children})]})}function SandboxSelect({label,options,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.select,children:[(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("select",{className:_storybook_utils_m.field,id,value,onChange:e=>onChange?.(e.target.value),children:options.map(((option,i)=>(0,jsx_runtime.jsx)("option",{value:"string"==typeof option?option:option.value,children:"string"==typeof option?option:option.displayName??option.value},i)))})})]})}function SandboxToggle({label,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.toggle,children:[(0,jsx_runtime.jsx)("input",{className:_storybook_utils_m.field,id,type:"checkbox",checked:value,onChange:e=>onChange?.(e.target.checked)}),(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label})]})}function SandboxControlLabel({htmlFor,children}){return(0,jsx_runtime.jsx)("label",{htmlFor,className:_storybook_utils_m.label,children})}const createRandomGenerator=seed=>{let currentSeed=seed;return()=>{const newSeed=(9301*currentSeed+49297)%233280;return currentSeed=newSeed,newSeed/233280}};function LoremIpsum({paragraphCount=1,sentenceCount=20}){const random=createRandomGenerator(1337),content=(0,react.useMemo)((()=>Array(paragraphCount).fill(0).map((()=>(0,dist.fH)({format:"plain",sentenceLowerBound:sentenceCount,sentenceUpperBound:sentenceCount,random})))),[paragraphCount,sentenceCount]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content.map(((item,index)=>(0,jsx_runtime.jsx)("p",{children:item},index)))})}function PageScrollLockDemo({children}){const adapterNames=["body-scroll-lock","ui-nucleons"],[adapterName,setAdapterName]=(0,react.useState)("body-scroll-lock");let adapter;if("ui-nucleons"===adapterName)adapter=(_,options)=>new page_scroll_lock.hC(options);else adapter=(element,options)=>new page_scroll_lock.Pp(element,options);return(0,jsx_runtime.jsxs)(page_scroll_lock.k6.Provider,{value:{adapter},children:[(0,jsx_runtime.jsx)("h1",{children:"Пример страницы"}),(0,jsx_runtime.jsx)("p",{children:"Это тестовая страница для проверки блокировки прокрутки с разными реализациями."}),(0,jsx_runtime.jsx)(src_select.P,{opener:(0,jsx_runtime.jsx)(src_select.P.FieldBlock,{size:"l",label:"Реализация"}),value:adapterName,onValueChange:value=>{adapterNames.includes(value)&&setAdapterName(value)},children:adapterNames.map(((name,index)=>(0,jsx_runtime.jsx)(dropdown_item.h,{value:name,children:name},index)))}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"20px"},children}),(0,jsx_runtime.jsx)(LoremIpsum,{paragraphCount:50,sentenceCount:50})]})}function usePageCentered(){(0,react.useEffect)((()=>{const body=document.body,html=document.documentElement,pageHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);window.scroll({top:(pageHeight-window.innerHeight)/2})}),[])}function LargePage({children}){return usePageCentered(),(0,jsx_runtime.jsx)("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children})}try{Sandbox.displayName="Sandbox",Sandbox.__docgenInfo={description:"Визуальная песочница с возможностью размещения полей ввода для управления состоянием.",displayName:"Sandbox",props:{controls:{defaultValue:{value:"[]"},description:"",name:"controls",required:!1,type:{name:"(ControlToggle | ControlSelect)[] | undefined"}},areaStyle:{defaultValue:null,description:"",name:"areaStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#Sandbox"]={docgenInfo:Sandbox.__docgenInfo,name:"Sandbox",path:".storybook/utils.tsx#Sandbox"})}catch(__react_docgen_typescript_loader_error){}try{LoremIpsum.displayName="LoremIpsum",LoremIpsum.__docgenInfo={description:"Выводит текст-рыбу.",displayName:"LoremIpsum",props:{paragraphCount:{defaultValue:{value:"1"},description:"",name:"paragraphCount",required:!1,type:{name:"number | undefined"}},sentenceCount:{defaultValue:{value:"20"},description:"",name:"sentenceCount",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LoremIpsum"]={docgenInfo:LoremIpsum.__docgenInfo,name:"LoremIpsum",path:".storybook/utils.tsx#LoremIpsum"})}catch(__react_docgen_typescript_loader_error){}try{PageScrollLockDemo.displayName="PageScrollLockDemo",PageScrollLockDemo.__docgenInfo={description:"Тестовая страница большой высоты для проверки блокировки прокрутки.",displayName:"PageScrollLockDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#PageScrollLockDemo"]={docgenInfo:PageScrollLockDemo.__docgenInfo,name:"PageScrollLockDemo",path:".storybook/utils.tsx#PageScrollLockDemo"})}catch(__react_docgen_typescript_loader_error){}try{usePageCentered.displayName="usePageCentered",usePageCentered.__docgenInfo={description:"Прокручивает страницу по вертикали до центра.",displayName:"usePageCentered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#usePageCentered"]={docgenInfo:usePageCentered.__docgenInfo,name:"usePageCentered",path:".storybook/utils.tsx#usePageCentered"})}catch(__react_docgen_typescript_loader_error){}try{LargePage.displayName="LargePage",LargePage.__docgenInfo={description:"Тестовая страница с центрирование контента.",displayName:"LargePage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LargePage"]={docgenInfo:LargePage.__docgenInfo,name:"LargePage",path:".storybook/utils.tsx#LargePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/stepper/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>Stepper});var react=__webpack_require__("./node_modules/react/index.js");const Plus=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{d:"M9 3a1 1 0 0 0-2 0v4H3a1 1 0 0 0 0 2h4v4a1 1 0 1 0 2 0V9h4a1 1 0 1 0 0-2H9V3Z"})))),Minus=(0,react.forwardRef)(((props,ref)=>react.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react.createElement("path",{fillRule:"evenodd",d:"M2 8a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z",clipRule:"evenodd"}))));var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stepper_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/stepper/stepper.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stepper_m.Z,options);const stepper_stepper_m=stepper_m.Z&&stepper_m.Z.locals?stepper_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(stepper_stepper_m),Stepper=(0,react.forwardRef)((function Stepper({buttonClickBehavior,canAdd=!0,canSubtract=!0,className,disabled,plusDisabled=disabled,minusDisabled=disabled,readOnly,onAdd,onBlur,onChange,onFocus,onSubtract,size="m",style,value,failed,"data-testid":testId="stepper",...inputProps},forwardedRef){const ref=(0,react.useRef)(null),[focused,setFocused]=(0,react.useState)(!1);(0,react.useImperativeHandle)(forwardedRef,(()=>ref.current));const noBlurOnMousedown=(0,react.useCallback)((event=>{focused&&event.target!==ref.current&&"prevent-input-blur"===buttonClickBehavior&&event.preventDefault()}),[focused,buttonClickBehavior]),rootClassName=cx("root",`size-${size}`,{disabled,focused,failed},className);return(0,jsx_runtime.jsxs)("div",{"data-testid":testId,style,className:rootClassName,onMouseDown:noBlurOnMousedown,children:[(0,jsx_runtime.jsx)("button",{tabIndex:-1,hidden:!canSubtract,disabled:minusDisabled??disabled??readOnly,className:cx("button"),"data-testid":"stepper:minus","aria-label":"Уменьшить",onMouseDown:noBlurOnMousedown,onClick:!canSubtract||minusDisabled||disabled||readOnly?void 0:onSubtract,children:(0,jsx_runtime.jsx)(Minus,{className:stepper_stepper_m.svg})}),(0,jsx_runtime.jsx)("input",{...inputProps,ref,readOnly,"data-testid":"stepper:input",className:cx("input"),value,disabled,onChange,onFocus:e=>{setFocused(!0),onFocus?.(e)},onBlur:e=>{setFocused(!1),onBlur?.(e)}}),(0,jsx_runtime.jsx)("button",{tabIndex:-1,hidden:!canAdd,disabled:plusDisabled??disabled??readOnly,className:cx("button"),"data-testid":"stepper:plus","aria-label":"Увеличить",onMouseDown:noBlurOnMousedown,onClick:!canAdd||plusDisabled||disabled||readOnly?void 0:onAdd,children:(0,jsx_runtime.jsx)(Plus,{className:stepper_stepper_m.svg})})]})}));try{Stepper.displayName="Stepper",Stepper.__docgenInfo={description:"Степпер - поле ввода количества.",displayName:"Stepper",props:{canAdd:{defaultValue:{value:"true"},description:"Нужно ли выводить кнопку добавления.",name:"canAdd",required:!1,type:{name:"boolean | undefined"}},canSubtract:{defaultValue:{value:"true"},description:"Нужно ли выводить кнопку вычитания.",name:"canSubtract",required:!1,type:{name:"boolean | undefined"}},plusDisabled:{defaultValue:null,description:'Делает кнопку "+" отключенной.',name:"plusDisabled",required:!1,type:{name:"boolean | undefined"}},minusDisabled:{defaultValue:null,description:'Делает кнопку "-" отключенной.',name:"minusDisabled",required:!1,type:{name:"boolean | undefined"}},buttonClickBehavior:{defaultValue:null,description:'Нужно ли предотвращать blur на поле при нажатии "+/-".',name:"buttonClickBehavior",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"prevent-input-blur"'}]}},onAdd:{defaultValue:null,description:"Сработает при добавлении.",name:"onAdd",required:!1,type:{name:"MouseEventHandler | undefined"}},onSubtract:{defaultValue:null,description:"Сработает при вычитании.",name:"onSubtract",required:!1,type:{name:"MouseEventHandler | undefined"}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'}]}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"StepperStyle | undefined"}},failed:{defaultValue:null,description:"Нужно ли показывать состояние ошибки.",name:"failed",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stepper/stepper.tsx#Stepper"]={docgenInfo:Stepper.__docgenInfo,name:"Stepper",path:"src/stepper/stepper.tsx#Stepper"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-m__sandbox__a3a .utils-m__controls__dad{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__label__ed4{font-size:14px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__toggle__e29{display:flex;gap:8px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__toggle__e29 .utils-m__field__c51{margin:0}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__select__cdd{display:flex;flex-direction:column;gap:8px;align-items:flex-start}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__select__cdd .utils-m__field__c51{width:200px;background:#fff;border:1px solid #ccc;border-radius:4px;padding:0 8px;min-width:160px;-webkit-appearance:menulist-button;height:32px;font-size:16px}.utils-m__sandbox__a3a .utils-m__area__d8c{border:3px dashed #aaa;border-radius:8px;padding:24px}","",{version:3,sources:["webpack://./.storybook/utils.m.scss"],names:[],mappings:"AACE,+CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,oEACE,cAAA,CAEF,qEACE,YAAA,CACA,OAAA,CACA,0FACE,QAAA,CAGJ,qEACE,YAAA,CACA,qBAAA,CACA,OAAA,CACA,sBAAA,CACA,0FACE,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CACA,kCAAA,CACA,WAAA,CACA,cAAA,CAIN,2CACE,sBAAA,CACA,iBAAA,CACA,YAAA",sourcesContent:['.sandbox {\n  .controls {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 20px;\n    .label {\n      font-size: 14px;\n    }\n    .toggle {\n      display: flex;\n      gap: 8px;\n      .field {\n        margin: 0;\n      }\n    }\n    .select {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      align-items: flex-start;\n      .field {\n        width: 200px;\n        background: #fff;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 0 8px;\n        min-width: 160px;\n        -webkit-appearance: menulist-button; // ВАЖНО: чтобы в Safari работало свойство "height"\n        height: 32px;\n        font-size: 16px;\n      }\n    }\n  }\n  .area {\n    border: 3px dashed #aaa;\n    border-radius: 8px;\n    padding: 24px;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sandbox:"utils-m__sandbox__a3a",controls:"utils-m__controls__dad",label:"utils-m__label__ed4",toggle:"utils-m__toggle__e29",field:"utils-m__field__c51",select:"utils-m__select__cdd",area:"utils-m__area__d8c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/stepper/stepper.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".stepper-m__root__bc4{display:flex;align-items:center;border:1px solid rgba(0,0,0,0);border-radius:4px;color:#212121;background:#ebebeb}.stepper-m__root__bc4.stepper-m__focused__cab{border-color:#1f84db}.stepper-m__root__bc4.stepper-m__disabled__b6d{color:#c2c2c2;border-color:#f5f5f5;background:#f5f5f5}.stepper-m__root__bc4.stepper-m__failed__aee{color:#d50000}.stepper-m__root__bc4.stepper-m__size-s__a96{--stepper-button-width: 24px;width:var(--stepper-width, 122px);height:40px}.stepper-m__root__bc4.stepper-m__size-m__a52{--stepper-button-width: 32px;width:var(--stepper-width, 160px);height:48px}.stepper-m__input__f5b{border:0;padding:0;background:inherit;outline:0;width:0;flex-grow:1;text-align:center;color:inherit;font:inherit;font-weight:600;height:100%;font-size:16px;line-height:24px}.stepper-m__button__e30{display:flex;align-items:center;border:0;padding:0;background:rgba(0,0,0,0);width:var(--stepper-button-width);height:100%;color:#212121;flex-shrink:0}.stepper-m__button__e30:first-child{justify-content:flex-end}.stepper-m__button__e30:last-child{justify-content:flex-start}.stepper-m__button__e30:not(.stepper-m__hidden__edf):not(:disabled){cursor:pointer}.stepper-m__button__e30:disabled{color:#c2c2c2;pointer-events:none}.stepper-m__button__e30[hidden]{pointer-events:none;opacity:0}.stepper-m__svg__e7b{fill:currentColor}","",{version:3,sources:["webpack://./src/stepper/stepper.m.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,sBACE,YAAA,CACA,kBAAA,CACA,8BAAA,CACA,iBAAA,CACA,aCHa,CDIb,kBCGY,CDFZ,8CACE,oBCPS,CDSX,+CACE,aCJW,CDKX,oBCFU,CDGV,kBCHU,CDKZ,6CACE,aCDkB,CDGpB,6CACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAEF,6CACE,4BAAA,CACA,iCAAA,CACA,WAAA,CAIJ,uBACE,QAAA,CACA,SAAA,CAGA,kBAAA,CACA,SAAA,CACA,OAAA,CACA,WAAA,CACA,iBAAA,CACA,aAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CACA,cAAA,CACA,gBAAA,CAGF,wBACE,YAAA,CACA,kBAAA,CACA,QAAA,CACA,SAAA,CACA,wBAAA,CACA,iCAAA,CACA,WAAA,CACA,aCtDa,CDuDb,aAAA,CACA,oCACE,wBAAA,CAEF,mCACE,0BAAA,CAEF,oEACE,cAAA,CAEF,iCACE,aC7DW,CD8DX,mBAAA,CAEF,gCACE,mBAAA,CACA,SAAA,CAIJ,qBACE,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  align-items: center;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  color: colors.$basic-gray87;\n  background: colors.$basic-gray8;\n  &.focused {\n    border-color: colors.$basic-blue;\n  }\n  &.disabled {\n    color: colors.$basic-gray24;\n    border-color: colors.$basic-gray4;\n    background: colors.$basic-gray4;\n  }\n  &.failed {\n    color: colors.$additional-deep-red;\n  }\n  &.size-s {\n    --stepper-button-width: 24px;\n    width: var(--stepper-width, 122px);\n    height: 40px;\n  }\n  &.size-m {\n    --stepper-button-width: 32px;\n    width: var(--stepper-width, 160px);\n    height: 48px;\n  }\n}\n\n.input {\n  border: 0;\n  padding: 0;\n\n  // не надо делать transparent: https://stackoverflow.com/q/43483363/13166471\n  background: inherit;\n  outline: 0;\n  width: 0;\n  flex-grow: 1;\n  text-align: center;\n  color: inherit;\n  font: inherit;\n  font-weight: 600;\n  height: 100%;\n  font-size: 16px;\n  line-height: 24px;\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  border: 0;\n  padding: 0;\n  background: transparent;\n  width: var(--stepper-button-width);\n  height: 100%;\n  color: colors.$basic-gray87;\n  flex-shrink: 0;\n  &:first-child {\n    justify-content: flex-end;\n  }\n  &:last-child {\n    justify-content: flex-start;\n  }\n  &:not(.hidden):not(:disabled) {\n    cursor: pointer;\n  }\n  &:disabled {\n    color: colors.$basic-gray24;\n    pointer-events: none;\n  }\n  &[hidden] {\n    pointer-events: none;\n    opacity: 0;\n  }\n}\n\n.svg {\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"stepper-m__root__bc4",focused:"stepper-m__focused__cab",disabled:"stepper-m__disabled__b6d",failed:"stepper-m__failed__aee","size-s":"stepper-m__size-s__a96","size-m":"stepper-m__size-m__a52",input:"stepper-m__input__f5b",button:"stepper-m__button__e30",hidden:"stepper-m__hidden__edf",svg:"stepper-m__svg__e7b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);