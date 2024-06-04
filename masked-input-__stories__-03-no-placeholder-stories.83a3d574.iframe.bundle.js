/*! For license information please see masked-input-__stories__-03-no-placeholder-stories.83a3d574.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4363],{"./src/masked-input/__stories__/03-no-placeholder.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NoPlaceholder:()=>NoPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/masked-input/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MaskedInput",component:_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,parameters:{storySource:{source:"import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';\nimport { useState } from 'react';\n\nexport default {\n  title: 'common/MaskedInput',\n  component: MaskedInput,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function NoPlaceholder() {\n  const defaultValue = '1112223344';\n  const [value, setValue] = useState(defaultValue);\n\n  return (\n    <>\n      <MaskedInput\n        label='Телефон'\n        mask='+7 (___) ___-__-__'\n        value={value}\n        onChange={(event, data) => {\n          setValue(data.cleanValue);\n        }}\n        baseInputProps={{\n          restPlaceholder: { value: '' },\n        }}\n      />\n    </>\n  );\n}\n\nNoPlaceholder.storyName = 'Без placeholder';\n",locationsMap:{"no-placeholder":{startLoc:{col:7,line:12},endLoc:{col:1,line:31},startBody:{col:7,line:12},endBody:{col:1,line:31}}}},layout:"padded"}},NoPlaceholder=function NoPlaceholder(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1112223344");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{label:"Телефон",mask:"+7 (___) ___-__-__",value,onChange:(event,data)=>{setValue(data.cleanValue)},baseInputProps:{restPlaceholder:{value:""}}})})};NoPlaceholder.storyName="Без placeholder",NoPlaceholder.parameters={...NoPlaceholder.parameters,docs:{...NoPlaceholder.parameters?.docs,source:{originalSource:"function NoPlaceholder() {\n  const defaultValue = '1112223344';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' value={value} onChange={(event, data) => {\n      setValue(data.cleanValue);\n    }} baseInputProps={{\n      restPlaceholder: {\n        value: ''\n      }\n    }} />\n    </>;\n}",...NoPlaceholder.parameters?.docs?.source}}};const __namedExportsOrder=["NoPlaceholder"]},"./src/masked-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>MaskedInput});var react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./src/input/index.ts"),utils=__webpack_require__("./node_modules/@krutoo/input-mask/dist/dom/utils.js"),hooks=__webpack_require__("./src/hooks/index.ts"),on=__webpack_require__("./src/helpers/on.ts"),core=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/index.js"),redux=__webpack_require__("./node_modules/redux/es/redux.js");const actions={manualChange:createAction("manual/change"),inputChange:createAction("input/change"),inputSelectionChange:createAction("input/selection-change")};function createInputMaskStore(options,initialState){const reducer=function createDomReducer(options){const innerReducer=(0,core.createReducer)(options),processState=(a,b)=>innerReducer(a,(0,core.defineChanges)(a,b)),initialState=utils.ZM.init(options);return(state=initialState,action)=>{let result=state;if(actions.inputChange.is(action))result=processState(state,utils.ZM.fromTarget(action.payload.input));else if(actions.inputSelectionChange.is(action))result=utils.ZM.fromTarget(action.payload.input);else if(actions.manualChange.is(action)){const validCleanValue=action.payload.value.split("").filter((c=>c.match(options.pattern))).join(""),newMaskedValue=utils.B4.toMasked(options,validCleanValue),firstPlace=options.mask.indexOf(options.placeholder);result=processState(utils.ZM.of(state.value,utils.e6.of(firstPlace,state.value.length)),utils.ZM.of(newMaskedValue,utils.e6.of(newMaskedValue.length)))}return result}}(options);return(0,redux.jB)(reducer,initialState)}function createAction(type){const creator=payload=>({type,payload});return creator.is=action=>action.type===type,creator}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MaskedInput({value,defaultValue,...props}){const stateless=(0,react.useMemo)((()=>void 0!==value),[]),[currentValue,setCurrentValue]=(0,react.useState)((()=>value??defaultValue??""));return stateless?(0,jsx_runtime.jsx)(StatelessMaskedInput,{...props,value}):(0,jsx_runtime.jsx)(StatelessMaskedInput,{...props,value:currentValue,onChange:(event,data)=>{setCurrentValue(data.cleanValue),props.onChange?.(event,data)}})}function StatelessMaskedInput({mask,placeholder="_",pattern="\\d",value="",baseInputProps,onFocus,onChange,onInput,onBlur,inputRef,...props}){const currentValue=(0,react.useMemo)((()=>value),[value]),{store,bind}=function useInputMask({value,maskOptions:maskOptionsProp}){const inputRef=(0,react.useRef)(null),maskOptions=(0,react.useMemo)((()=>({mask:maskOptionsProp.mask,pattern:new RegExp(maskOptionsProp.pattern),placeholder:maskOptionsProp.placeholder})),[maskOptionsProp.mask,maskOptionsProp.pattern,maskOptionsProp.placeholder]),createStore=(0,react.useCallback)((()=>{const newStore=createInputMaskStore(maskOptions);return newStore.dispatch(actions.manualChange({value})),newStore}),[value,maskOptions]),store=(0,react.useMemo)(createStore,[maskOptions]);(0,hooks.LI)((()=>{const offList=[store.subscribe((()=>{inputRef.current&&utils.ZM.applyDiff(store.getState(),inputRef.current)})),(0,on.on)(document,"selectionchange",(()=>{inputRef.current&&inputRef.current===document.activeElement&&store.dispatch(actions.inputSelectionChange({input:inputRef.current}))}))];return()=>offList.forEach((fn=>fn()))}),[store,inputRef]),value!==utils.B4.toClean(maskOptions,store.getState().value)&&store.dispatch(actions.manualChange({value}));const onInput=(0,react.useCallback)((event=>{store.dispatch(actions.inputChange({input:event.currentTarget}))}),[store]);return{store,bind:{ref:inputRef,value:store.getState().value,onInput}}}({value:currentValue,maskOptions:{mask,pattern,placeholder}});(0,react.useImperativeHandle)(inputRef,(()=>bind.ref.current));const getMaskData=(0,react.useCallback)((()=>({value:store.getState().value,cleanValue:utils.B4.toClean({mask,placeholder},store.getState().value),completed:store.getState().value.length===mask.length})),[store,mask,placeholder]);return(0,jsx_runtime.jsx)(input.I,{...props,baseInputProps:{...baseInputProps,restPlaceholder:baseInputProps?.restPlaceholder??{value:mask.slice(store.getState().value.length),shiftValue:store.getState().value}},inputRef:bind.ref,value:bind.value,onFocus:event=>{onFocus?.(event,getMaskData())},onInput:event=>{bind.onInput(event),onInput?.(event,getMaskData())},onChange:event=>{onChange?.(event,getMaskData())},onBlur:event=>{onBlur?.(event,getMaskData())}})}try{MaskedInput.displayName="MaskedInput",MaskedInput.__docgenInfo={description:"Поле ввода текста по маске.",displayName:"MaskedInput",props:{onFocus:{defaultValue:null,description:"Сработает при фокусе. Вторым аргументом получит данные поля с маской.",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},onChange:{defaultValue:null,description:"Сработает при вводе. Вторым аргументом получит данные поля с маской.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, data: MaskData) => void) | undefined"}},onInput:{defaultValue:null,description:"Сработает при вводе. Вторым аргументом получит данные поля с маской.",name:"onInput",required:!1,type:{name:"((event: FormEvent<HTMLInputElement>, data: MaskData) => void) | undefined"}},onBlur:{defaultValue:null,description:'Сработает при "blur". Вторым аргументом получит данные поля с маской.',name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"Тип поля.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},value:{defaultValue:null,description:"Значение.",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию.",name:"defaultValue",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"FieldBlockStyle | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},failed:{defaultValue:null,description:"Состояние с ошибкой.",name:"failed",required:!1,type:{name:"boolean | undefined"}},caption:{defaultValue:null,description:"Подпись под полем.",name:"caption",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ярлык в поле.",name:"label",required:!1,type:{name:"string | undefined"}},main:{defaultValue:null,description:"Основное содержимое.",name:"main",required:!1,type:{name:"ReactNode"}},rootRef:{defaultValue:null,description:"Ref корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},inputRef:{defaultValue:null,description:"Ref элемента input.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement> | undefined"}},rootProps:{defaultValue:null,description:"Опции корневого элемента.",name:"rootProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},focused:{defaultValue:null,description:"Состояние фокуса.",name:"focused",required:!1,type:{name:"boolean | undefined"}},labelAsPlaceholder:{defaultValue:null,description:"Выводить ярлык вместо placeholder или введенного значения.",name:"labelAsPlaceholder",required:!1,type:{name:"boolean | undefined"}},labelProps:{defaultValue:null,description:"Опции элемента ярлыка.",name:"labelProps",required:!1,type:{name:"NoChildren<LabelHTMLAttributes<HTMLLabelElement>> | undefined"}},fixedHeight:{defaultValue:null,description:"Фиксировать высоту.",name:"fixedHeight",required:!1,type:{name:"boolean | undefined"}},blockProps:{defaultValue:null,description:"Опции элемента блока поля.",name:"blockProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},blockRef:{defaultValue:null,description:"Ref элемента блока поля.",name:"blockRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},adornmentStart:{defaultValue:null,description:"Украшение перед основным содержимым.",name:"adornmentStart",required:!1,type:{name:"ReactNode"}},adornmentEnd:{defaultValue:null,description:"Украшение после основного содержимого.",name:"adornmentEnd",required:!1,type:{name:"ReactNode"}},mainProps:{defaultValue:null,description:"Опции основного содержимого.",name:"mainProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},baseInputProps:{defaultValue:null,description:"Свойства BaseInputProps.",name:"baseInputProps",required:!1,type:{name:"BaseInputAsInputProps | undefined"}},clearable:{defaultValue:null,description:"Нужно ли выводить кнопку очистки поля.",name:"clearable",required:!1,type:{name:"boolean | undefined"}},onClear:{defaultValue:null,description:"Сработает при очистке поля.",name:"onClear",required:!1,type:{name:"MouseEventHandler<SVGSVGElement> | undefined"}},mask:{defaultValue:null,description:"Строковое представление маски.",name:"mask",required:!0,type:{name:"string"}},pattern:{defaultValue:null,description:"Строковое представление регулярного выражения только доступных для ввода символов.",name:"pattern",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/masked-input/masked-input.tsx#MaskedInput"]={docgenInfo:MaskedInput.__docgenInfo,name:"MaskedInput",path:"src/masked-input/masked-input.tsx#MaskedInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);