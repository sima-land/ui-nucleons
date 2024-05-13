/*! For license information please see masked-input-__stories__-22-test-mask-change-stories.ee37c6e9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[9659],{"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowExpandDown.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-4 3.5a1 1 0 0 1-1.317 0l-4-3.5a1 1 0 0 1-.095-1.411Z",clipRule:"evenodd"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/ArrowExpandUp.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fillRule:"evenodd",d:"M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412Z",clipRule:"evenodd"}))))},"./src/masked-input/__stories__/22-test-mask-change.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestMaskChange:()=>TestMaskChange,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/masked-input/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown-item/index.ts"),_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/select/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MaskedInput",component:_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,parameters:{storySource:{source:"import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';\nimport { useState } from 'react';\nimport { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';\nimport { Select } from '@sima-land/ui-nucleons/select';\n\nexport default {\n  title: 'common/MaskedInput',\n  component: MaskedInput,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function TestMaskChange() {\n  const masks: ReadonlyArray<{ name: string; mask: string }> = [\n    {\n      name: 'Паспорт',\n      mask: '____ ______',\n    },\n    {\n      name: 'Дата',\n      mask: '__ / __ / ____',\n    },\n    {\n      name: 'Телефон',\n      mask: '+7 (___) ___-__-__',\n    },\n    {\n      name: 'Карта',\n      mask: '____ ____ ____ ____',\n    },\n  ];\n\n  const [value, setValue] = useState('');\n  const [mask, setMask] = useState(masks[0]);\n\n  return (\n    <>\n      <Select\n        opener={<Select.TextButton size='s' />}\n        value={mask.name}\n        onValueChange={maskName => {\n          const newMask = masks.find(i => i.name === maskName);\n\n          if (newMask) {\n            setMask(newMask);\n            setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));\n          }\n        }}\n      >\n        {masks.map((item, index) => (\n          <DropdownItem key={index} value={item.name}>\n            {item.name}\n          </DropdownItem>\n        ))}\n      </Select>\n\n      <MaskedInput\n        style={{ marginTop: '12px' }}\n        label={mask.name}\n        mask={mask.mask}\n        value={value}\n        onChange={(event, data) => {\n          setValue(data.cleanValue);\n        }}\n      />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>\n  );\n}\n\nTestMaskChange.storyName = 'Тест: Смена маски';\n",locationsMap:{"test-mask-change":{startLoc:{col:7,line:14},endLoc:{col:1,line:71},startBody:{col:7,line:14},endBody:{col:1,line:71}}}},layout:"padded"}},TestMaskChange=function TestMaskChange(){const masks=[{name:"Паспорт",mask:"____ ______"},{name:"Дата",mask:"__ / __ / ____"},{name:"Телефон",mask:"+7 (___) ___-__-__"},{name:"Карта",mask:"____ ____ ____ ____"}],[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[mask,setMask]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(masks[0]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__.P,{opener:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__.P.TextButton,{size:"s"}),value:mask.name,onValueChange:maskName=>{const newMask=masks.find((i=>i.name===maskName));newMask&&(setMask(newMask),setValue(newMask.mask.replace(/[^_]/g,"").replace(/_/g,"0")))},children:masks.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_2__.h,{value:item.name,children:item.name},index)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{style:{marginTop:"12px"},label:mask.name,mask:mask.mask,value,onChange:(event,data)=>{setValue(data.cleanValue)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p",{children:["Значение: ",value||"[пусто]"]})]})};TestMaskChange.storyName="Тест: Смена маски",TestMaskChange.parameters={...TestMaskChange.parameters,docs:{...TestMaskChange.parameters?.docs,source:{originalSource:"function TestMaskChange() {\n  const masks: ReadonlyArray<{\n    name: string;\n    mask: string;\n  }> = [{\n    name: 'Паспорт',\n    mask: '____ ______'\n  }, {\n    name: 'Дата',\n    mask: '__ / __ / ____'\n  }, {\n    name: 'Телефон',\n    mask: '+7 (___) ___-__-__'\n  }, {\n    name: 'Карта',\n    mask: '____ ____ ____ ____'\n  }];\n  const [value, setValue] = useState('');\n  const [mask, setMask] = useState(masks[0]);\n  return <>\n      <Select opener={<Select.TextButton size='s' />} value={mask.name} onValueChange={maskName => {\n      const newMask = masks.find(i => i.name === maskName);\n      if (newMask) {\n        setMask(newMask);\n        setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));\n      }\n    }}>\n        {masks.map((item, index) => <DropdownItem key={index} value={item.name}>\n            {item.name}\n          </DropdownItem>)}\n      </Select>\n\n      <MaskedInput style={{\n      marginTop: '12px'\n    }} label={mask.name} mask={mask.mask} value={value} onChange={(event, data) => {\n      setValue(data.cleanValue);\n    }} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>;\n}",...TestMaskChange.parameters?.docs?.source}}};const __namedExportsOrder=["TestMaskChange"]},"./src/masked-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>MaskedInput});var react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./src/input/index.ts"),utils=__webpack_require__("./node_modules/@krutoo/input-mask/dist/dom/utils.js"),hooks=__webpack_require__("./src/hooks/index.ts"),on=__webpack_require__("./src/helpers/on.ts"),core=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/index.js"),redux=__webpack_require__("./node_modules/redux/es/redux.js");const actions={manualChange:createAction("manual/change"),inputChange:createAction("input/change"),inputSelectionChange:createAction("input/selection-change")};function createInputMaskStore(options,initialState){const reducer=function createDomReducer(options){const innerReducer=(0,core.createReducer)(options),processState=(a,b)=>innerReducer(a,(0,core.defineChanges)(a,b)),initialState=utils.ZM.init(options);return(state=initialState,action)=>{let result=state;if(actions.inputChange.is(action))result=processState(state,utils.ZM.fromTarget(action.payload.input));else if(actions.inputSelectionChange.is(action))result=utils.ZM.fromTarget(action.payload.input);else if(actions.manualChange.is(action)){const validCleanValue=action.payload.value.split("").filter((c=>c.match(options.pattern))).join(""),newMaskedValue=utils.B4.toMasked(options,validCleanValue),firstPlace=options.mask.indexOf(options.placeholder);result=processState(utils.ZM.of(state.value,utils.e6.of(firstPlace,state.value.length)),utils.ZM.of(newMaskedValue,utils.e6.of(newMaskedValue.length)))}return result}}(options);return(0,redux.jB)(reducer,initialState)}function createAction(type){const creator=payload=>({type,payload});return creator.is=action=>action.type===type,creator}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MaskedInput({value,defaultValue,...props}){const stateless=(0,react.useMemo)((()=>void 0!==value),[]),[currentValue,setCurrentValue]=(0,react.useState)((()=>value??defaultValue??""));return stateless?(0,jsx_runtime.jsx)(StatelessMaskedInput,{...props,value}):(0,jsx_runtime.jsx)(StatelessMaskedInput,{...props,value:currentValue,onChange:(event,data)=>{setCurrentValue(data.cleanValue),props.onChange?.(event,data)}})}function StatelessMaskedInput({mask,placeholder="_",pattern="\\d",value="",baseInputProps,onFocus,onChange,onInput,onBlur,inputRef,...props}){const currentValue=(0,react.useMemo)((()=>value),[value]),{store,bind}=function useInputMask({value,maskOptions:maskOptionsProp}){const inputRef=(0,react.useRef)(null),maskOptions=(0,react.useMemo)((()=>({mask:maskOptionsProp.mask,pattern:new RegExp(maskOptionsProp.pattern),placeholder:maskOptionsProp.placeholder})),[maskOptionsProp.mask,maskOptionsProp.pattern,maskOptionsProp.placeholder]),createStore=(0,react.useCallback)((()=>{const newStore=createInputMaskStore(maskOptions);return newStore.dispatch(actions.manualChange({value})),newStore}),[value,maskOptions]),store=(0,react.useMemo)(createStore,[maskOptions]);(0,hooks.LI)((()=>{const offList=[store.subscribe((()=>{inputRef.current&&utils.ZM.applyDiff(store.getState(),inputRef.current)})),(0,on.on)(document,"selectionchange",(()=>{inputRef.current&&inputRef.current===document.activeElement&&store.dispatch(actions.inputSelectionChange({input:inputRef.current}))}))];return()=>offList.forEach((fn=>fn()))}),[store,inputRef]),value!==utils.B4.toClean(maskOptions,store.getState().value)&&store.dispatch(actions.manualChange({value}));const onInput=(0,react.useCallback)((event=>{store.dispatch(actions.inputChange({input:event.currentTarget}))}),[store]);return{store,bind:{ref:inputRef,value:store.getState().value,onInput}}}({value:currentValue,maskOptions:{mask,pattern,placeholder}});(0,react.useImperativeHandle)(inputRef,(()=>bind.ref.current));const getMaskData=(0,react.useCallback)((()=>({value:store.getState().value,cleanValue:utils.B4.toClean({mask,placeholder},store.getState().value),completed:store.getState().value.length===mask.length})),[store,mask,placeholder]);return(0,jsx_runtime.jsx)(input.I,{...props,baseInputProps:{...baseInputProps,restPlaceholder:baseInputProps?.restPlaceholder??{value:mask.slice(store.getState().value.length),shiftValue:store.getState().value}},inputRef:bind.ref,value:bind.value,onFocus:event=>{onFocus?.(event,getMaskData())},onInput:event=>{bind.onInput(event),onInput?.(event,getMaskData())},onChange:event=>{onChange?.(event,getMaskData())},onBlur:event=>{onBlur?.(event,getMaskData())}})}try{MaskedInput.displayName="MaskedInput",MaskedInput.__docgenInfo={description:"Поле ввода текста по маске.",displayName:"MaskedInput",props:{onFocus:{defaultValue:null,description:"Сработает при фокусе. Вторым аргументом получит данные поля с маской.",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},onChange:{defaultValue:null,description:"Сработает при вводе. Вторым аргументом получит данные поля с маской.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, data: MaskData) => void) | undefined"}},onInput:{defaultValue:null,description:"Сработает при вводе. Вторым аргументом получит данные поля с маской.",name:"onInput",required:!1,type:{name:"((event: FormEvent<HTMLInputElement>, data: MaskData) => void) | undefined"}},onBlur:{defaultValue:null,description:'Сработает при "blur". Вторым аргументом получит данные поля с маской.',name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"Тип поля.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"email"'},{value:'"password"'},{value:'"tel"'}]}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'}]}},value:{defaultValue:null,description:"Значение.",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию.",name:"defaultValue",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"FieldBlockStyle | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},failed:{defaultValue:null,description:"Состояние с ошибкой.",name:"failed",required:!1,type:{name:"boolean | undefined"}},caption:{defaultValue:null,description:"Подпись под полем.",name:"caption",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ярлык в поле.",name:"label",required:!1,type:{name:"string | undefined"}},main:{defaultValue:null,description:"Основное содержимое.",name:"main",required:!1,type:{name:"ReactNode"}},rootRef:{defaultValue:null,description:"Ref корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},inputRef:{defaultValue:null,description:"Ref элемента input.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement> | undefined"}},rootProps:{defaultValue:null,description:"Опции корневого элемента.",name:"rootProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},focused:{defaultValue:null,description:"Состояние фокуса.",name:"focused",required:!1,type:{name:"boolean | undefined"}},labelAsPlaceholder:{defaultValue:null,description:"Выводить ярлык вместо placeholder или введенного значения.",name:"labelAsPlaceholder",required:!1,type:{name:"boolean | undefined"}},labelProps:{defaultValue:null,description:"Опции элемента ярлыка.",name:"labelProps",required:!1,type:{name:"NoChildren<LabelHTMLAttributes<HTMLLabelElement>> | undefined"}},fixedHeight:{defaultValue:null,description:"Фиксировать высоту.",name:"fixedHeight",required:!1,type:{name:"boolean | undefined"}},blockProps:{defaultValue:null,description:"Опции элемента блока поля.",name:"blockProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},blockRef:{defaultValue:null,description:"Ref элемента блока поля.",name:"blockRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},adornmentStart:{defaultValue:null,description:"Украшение перед основным содержимым.",name:"adornmentStart",required:!1,type:{name:"ReactNode"}},adornmentEnd:{defaultValue:null,description:"Украшение после основного содержимого.",name:"adornmentEnd",required:!1,type:{name:"ReactNode"}},mainProps:{defaultValue:null,description:"Опции основного содержимого.",name:"mainProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},baseInputProps:{defaultValue:null,description:"Свойства BaseInputProps.",name:"baseInputProps",required:!1,type:{name:"BaseInputAsInputProps | undefined"}},clearable:{defaultValue:null,description:"Нужно ли выводить кнопку очистки поля.",name:"clearable",required:!1,type:{name:"boolean | undefined"}},onClear:{defaultValue:null,description:"Сработает при очистке поля.",name:"onClear",required:!1,type:{name:"MouseEventHandler<SVGSVGElement> | undefined"}},mask:{defaultValue:null,description:"Строковое представление маски.",name:"mask",required:!0,type:{name:"string"}},pattern:{defaultValue:null,description:"Строковое представление регулярного выражения только доступных для ввода символов.",name:"pattern",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/masked-input/masked-input.tsx#MaskedInput"]={docgenInfo:MaskedInput.__docgenInfo,name:"MaskedInput",path:"src/masked-input/masked-input.tsx#MaskedInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);