/*! For license information please see masked-input-__stories__-index-stories.2f9a5624.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4841],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-4 3.5a1 1 0 0 1-1.317 0l-4-3.5a1 1 0 0 1-.095-1.411Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/masked-input/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DateField:()=>DateField,NoRestPlaceholder:()=>NoRestPlaceholder,Primary:()=>Primary,TestMaskChange:()=>TestMaskChange,TestUncontrolled:()=>TestUncontrolled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/masked-input/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/dropdown-item/index.ts"),_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/select/index.ts"),_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/text-button/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/MaskedInput",component:_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,parameters:{storySource:{source:"import { MaskedInput } from '@sima-land/ui-nucleons/masked-input';\nimport { useState } from 'react';\nimport { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';\nimport { Select } from '@sima-land/ui-nucleons/select';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\nexport default {\n  title: 'common/MaskedInput',\n  component: MaskedInput,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const defaultValue = '8005553535';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' value={value} onChange={(event, data) => setValue(data.cleanValue)} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n\n      <TextButton size='s' onClick={() => setValue(defaultValue)}>\n        Сбросить\n      </TextButton>\n    </>;\n}\nPrimary.storyName = 'Простой пример';\nexport function DateField() {\n  const defaultValue = '08.05.1995';\n  const mask = '__.__.____';\n  const placeholder = 'ДД.ММ.ГГГГ';\n  const [value, setValue] = useState(defaultValue);\n  const [rawValue, setRawValue] = useState(defaultValue);\n  return <MaskedInput label='Дата рождения' mask={mask} value={value} onChange={(event, data) => {\n    setRawValue(data.value);\n    setValue(data.cleanValue);\n  }} baseInputProps={{\n    restPlaceholder: {\n      value: placeholder.slice(rawValue.length)\n    }\n  }} />;\n}\nDateField.storyName = 'Поле даты';\nexport function NoRestPlaceholder() {\n  const defaultValue = '1112223344';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' baseInputProps={{\n      restPlaceholder: {\n        value: ''\n      }\n    }} value={value} onChange={(event, data) => setValue(data.cleanValue)} />\n    </>;\n}\nNoRestPlaceholder.storyName = 'Без rest placeholder';\nexport function TestUncontrolled() {\n  const defaultValue = '4443332211';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' defaultValue={defaultValue} onChange={(event, data) => setValue(data.cleanValue)} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>;\n}\nTestUncontrolled.storyName = 'Тест: Неконтролируемое поле';\nexport function TestMaskChange() {\n  const masks: ReadonlyArray<{\n    name: string;\n    mask: string;\n  }> = [{\n    name: 'Паспорт',\n    mask: '____ ______'\n  }, {\n    name: 'Дата',\n    mask: '__ / __ / ____'\n  }, {\n    name: 'Телефон',\n    mask: '+7 (___) ___-__-__'\n  }, {\n    name: 'Карта',\n    mask: '____ ____ ____ ____'\n  }];\n  const [value, setValue] = useState('');\n  const [mask, setMask] = useState(masks[0]);\n  return <>\n      <Select opener={<Select.TextButton size='s' />} value={mask.name} onValueChange={maskName => {\n      const newMask = masks.find(i => i.name === maskName);\n      if (newMask) {\n        setMask(newMask);\n        setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));\n      }\n    }}>\n        {masks.map((item, index) => <DropdownItem key={index} value={item.name}>\n            {item.name}\n          </DropdownItem>)}\n      </Select>\n\n      <MaskedInput style={{\n      marginTop: '12px'\n    }} label={mask.name} mask={mask.mask} value={value} onChange={(event, data) => {\n      setValue(data.cleanValue);\n    }} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>;\n}\nTestMaskChange.storyName = 'Тест: Смена маски';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const defaultValue = '8005553535';\\n  const [value, setValue] = useState(defaultValue);\\n  return <>\\n      <MaskedInput label='\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D' mask='+7 (___) ___-__-__' value={value} onChange={(event, data) => setValue(data.cleanValue)} />\\n\\n      <p>\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435: {value || '[\\u043F\\u0443\\u0441\\u0442\\u043E]'}</p>\\n\\n      <TextButton size='s' onClick={() => setValue(defaultValue)}>\\n        \\u0421\\u0431\\u0440\\u043E\\u0441\\u0438\\u0442\\u044C\\n      </TextButton>\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nDateField.parameters = {\n  ...DateField.parameters,\n  docs: {\n    ...DateField.parameters?.docs,\n    source: {\n      originalSource: \"function DateField() {\\n  const defaultValue = '08.05.1995';\\n  const mask = '__.__.____';\\n  const placeholder = '\\u0414\\u0414.\\u041C\\u041C.\\u0413\\u0413\\u0413\\u0413';\\n  const [value, setValue] = useState(defaultValue);\\n  const [rawValue, setRawValue] = useState(defaultValue);\\n  return <MaskedInput label='\\u0414\\u0430\\u0442\\u0430 \\u0440\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u044F' mask={mask} value={value} onChange={(event, data) => {\\n    setRawValue(data.value);\\n    setValue(data.cleanValue);\\n  }} baseInputProps={{\\n    restPlaceholder: {\\n      value: placeholder.slice(rawValue.length)\\n    }\\n  }} />;\\n}\",\n      ...DateField.parameters?.docs?.source\n    }\n  }\n};\nNoRestPlaceholder.parameters = {\n  ...NoRestPlaceholder.parameters,\n  docs: {\n    ...NoRestPlaceholder.parameters?.docs,\n    source: {\n      originalSource: \"function NoRestPlaceholder() {\\n  const defaultValue = '1112223344';\\n  const [value, setValue] = useState(defaultValue);\\n  return <>\\n      <MaskedInput label='\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D' mask='+7 (___) ___-__-__' baseInputProps={{\\n      restPlaceholder: {\\n        value: ''\\n      }\\n    }} value={value} onChange={(event, data) => setValue(data.cleanValue)} />\\n    </>;\\n}\",\n      ...NoRestPlaceholder.parameters?.docs?.source\n    }\n  }\n};\nTestUncontrolled.parameters = {\n  ...TestUncontrolled.parameters,\n  docs: {\n    ...TestUncontrolled.parameters?.docs,\n    source: {\n      originalSource: \"function TestUncontrolled() {\\n  const defaultValue = '4443332211';\\n  const [value, setValue] = useState(defaultValue);\\n  return <>\\n      <MaskedInput label='\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D' mask='+7 (___) ___-__-__' defaultValue={defaultValue} onChange={(event, data) => setValue(data.cleanValue)} />\\n\\n      <p>\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435: {value || '[\\u043F\\u0443\\u0441\\u0442\\u043E]'}</p>\\n    </>;\\n}\",\n      ...TestUncontrolled.parameters?.docs?.source\n    }\n  }\n};\nTestMaskChange.parameters = {\n  ...TestMaskChange.parameters,\n  docs: {\n    ...TestMaskChange.parameters?.docs,\n    source: {\n      originalSource: \"function TestMaskChange() {\\n  const masks: ReadonlyArray<{\\n    name: string;\\n    mask: string;\\n  }> = [{\\n    name: '\\u041F\\u0430\\u0441\\u043F\\u043E\\u0440\\u0442',\\n    mask: '____ ______'\\n  }, {\\n    name: '\\u0414\\u0430\\u0442\\u0430',\\n    mask: '__ / __ / ____'\\n  }, {\\n    name: '\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D',\\n    mask: '+7 (___) ___-__-__'\\n  }, {\\n    name: '\\u041A\\u0430\\u0440\\u0442\\u0430',\\n    mask: '____ ____ ____ ____'\\n  }];\\n  const [value, setValue] = useState('');\\n  const [mask, setMask] = useState(masks[0]);\\n  return <>\\n      <Select opener={<Select.TextButton size='s' />} value={mask.name} onValueChange={maskName => {\\n      const newMask = masks.find(i => i.name === maskName);\\n      if (newMask) {\\n        setMask(newMask);\\n        setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));\\n      }\\n    }}>\\n        {masks.map((item, index) => <DropdownItem key={index} value={item.name}>\\n            {item.name}\\n          </DropdownItem>)}\\n      </Select>\\n\\n      <MaskedInput style={{\\n      marginTop: '12px'\\n    }} label={mask.name} mask={mask.mask} value={value} onChange={(event, data) => {\\n      setValue(data.cleanValue);\\n    }} />\\n\\n      <p>\\u0417\\u043D\\u0430\\u0447\\u0435\\u043D\\u0438\\u0435: {value || '[\\u043F\\u0443\\u0441\\u0442\\u043E]'}</p>\\n    </>;\\n}\",\n      ...TestMaskChange.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:13},endLoc:{col:1,line:25},startBody:{col:7,line:13},endBody:{col:1,line:25}},"date-field":{startLoc:{col:7,line:27},endLoc:{col:1,line:41},startBody:{col:7,line:27},endBody:{col:1,line:41}},"no-rest-placeholder":{startLoc:{col:7,line:43},endLoc:{col:1,line:53},startBody:{col:7,line:43},endBody:{col:1,line:53}},"test-uncontrolled":{startLoc:{col:7,line:55},endLoc:{col:1,line:63},startBody:{col:7,line:55},endBody:{col:1,line:63}},"test-mask-change":{startLoc:{col:7,line:65},endLoc:{col:1,line:105},startBody:{col:7,line:65},endBody:{col:1,line:105}}}},layout:"padded"}},Primary=function Primary(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("8005553535");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{label:"Телефон",mask:"+7 (___) ___-__-__",value,onChange:(event,data)=>setValue(data.cleanValue)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p",{children:["Значение: ",value||"[пусто]"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_text_button__WEBPACK_IMPORTED_MODULE_4__.A,{size:"s",onClick:()=>setValue("8005553535"),children:"Сбросить"})]})};Primary.storyName="Простой пример";const DateField=function DateField(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("08.05.1995"),[rawValue,setRawValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("08.05.1995");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{label:"Дата рождения",mask:"__.__.____",value,onChange:(event,data)=>{setRawValue(data.value),setValue(data.cleanValue)},baseInputProps:{restPlaceholder:{value:"ДД.ММ.ГГГГ".slice(rawValue.length)}}})};DateField.displayName="DateField",DateField.storyName="Поле даты";const NoRestPlaceholder=function NoRestPlaceholder(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("1112223344");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{label:"Телефон",mask:"+7 (___) ___-__-__",baseInputProps:{restPlaceholder:{value:""}},value,onChange:(event,data)=>setValue(data.cleanValue)})})};NoRestPlaceholder.storyName="Без rest placeholder";const TestUncontrolled=function TestUncontrolled(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("4443332211");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{label:"Телефон",mask:"+7 (___) ___-__-__",defaultValue:"4443332211",onChange:(event,data)=>setValue(data.cleanValue)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p",{children:["Значение: ",value||"[пусто]"]})]})};TestUncontrolled.storyName="Тест: Неконтролируемое поле";const TestMaskChange=function TestMaskChange(){const masks=[{name:"Паспорт",mask:"____ ______"},{name:"Дата",mask:"__ / __ / ____"},{name:"Телефон",mask:"+7 (___) ___-__-__"},{name:"Карта",mask:"____ ____ ____ ____"}],[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[mask,setMask]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(masks[0]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__.P,{opener:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_select__WEBPACK_IMPORTED_MODULE_3__.P.TextButton,{size:"s"}),value:mask.name,onValueChange:maskName=>{const newMask=masks.find((i=>i.name===maskName));newMask&&(setMask(newMask),setValue(newMask.mask.replace(/[^_]/g,"").replace(/_/g,"0")))},children:masks.map(((item,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_2__.h,{value:item.name,children:item.name},index)))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_masked_input__WEBPACK_IMPORTED_MODULE_0__.C,{style:{marginTop:"12px"},label:mask.name,mask:mask.mask,value,onChange:(event,data)=>{setValue(data.cleanValue)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p",{children:["Значение: ",value||"[пусто]"]})]})};TestMaskChange.storyName="Тест: Смена маски",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const defaultValue = '8005553535';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' value={value} onChange={(event, data) => setValue(data.cleanValue)} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n\n      <TextButton size='s' onClick={() => setValue(defaultValue)}>\n        Сбросить\n      </TextButton>\n    </>;\n}",...Primary.parameters?.docs?.source}}},DateField.parameters={...DateField.parameters,docs:{...DateField.parameters?.docs,source:{originalSource:"function DateField() {\n  const defaultValue = '08.05.1995';\n  const mask = '__.__.____';\n  const placeholder = 'ДД.ММ.ГГГГ';\n  const [value, setValue] = useState(defaultValue);\n  const [rawValue, setRawValue] = useState(defaultValue);\n  return <MaskedInput label='Дата рождения' mask={mask} value={value} onChange={(event, data) => {\n    setRawValue(data.value);\n    setValue(data.cleanValue);\n  }} baseInputProps={{\n    restPlaceholder: {\n      value: placeholder.slice(rawValue.length)\n    }\n  }} />;\n}",...DateField.parameters?.docs?.source}}},NoRestPlaceholder.parameters={...NoRestPlaceholder.parameters,docs:{...NoRestPlaceholder.parameters?.docs,source:{originalSource:"function NoRestPlaceholder() {\n  const defaultValue = '1112223344';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' baseInputProps={{\n      restPlaceholder: {\n        value: ''\n      }\n    }} value={value} onChange={(event, data) => setValue(data.cleanValue)} />\n    </>;\n}",...NoRestPlaceholder.parameters?.docs?.source}}},TestUncontrolled.parameters={...TestUncontrolled.parameters,docs:{...TestUncontrolled.parameters?.docs,source:{originalSource:"function TestUncontrolled() {\n  const defaultValue = '4443332211';\n  const [value, setValue] = useState(defaultValue);\n  return <>\n      <MaskedInput label='Телефон' mask='+7 (___) ___-__-__' defaultValue={defaultValue} onChange={(event, data) => setValue(data.cleanValue)} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>;\n}",...TestUncontrolled.parameters?.docs?.source}}},TestMaskChange.parameters={...TestMaskChange.parameters,docs:{...TestMaskChange.parameters?.docs,source:{originalSource:"function TestMaskChange() {\n  const masks: ReadonlyArray<{\n    name: string;\n    mask: string;\n  }> = [{\n    name: 'Паспорт',\n    mask: '____ ______'\n  }, {\n    name: 'Дата',\n    mask: '__ / __ / ____'\n  }, {\n    name: 'Телефон',\n    mask: '+7 (___) ___-__-__'\n  }, {\n    name: 'Карта',\n    mask: '____ ____ ____ ____'\n  }];\n  const [value, setValue] = useState('');\n  const [mask, setMask] = useState(masks[0]);\n  return <>\n      <Select opener={<Select.TextButton size='s' />} value={mask.name} onValueChange={maskName => {\n      const newMask = masks.find(i => i.name === maskName);\n      if (newMask) {\n        setMask(newMask);\n        setValue(newMask.mask.replace(/[^_]/g, '').replace(/_/g, '0'));\n      }\n    }}>\n        {masks.map((item, index) => <DropdownItem key={index} value={item.name}>\n            {item.name}\n          </DropdownItem>)}\n      </Select>\n\n      <MaskedInput style={{\n      marginTop: '12px'\n    }} label={mask.name} mask={mask.mask} value={value} onChange={(event, data) => {\n      setValue(data.cleanValue);\n    }} />\n\n      <p>Значение: {value || '[пусто]'}</p>\n    </>;\n}",...TestMaskChange.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DateField","NoRestPlaceholder","TestUncontrolled","TestMaskChange"]},"./src/masked-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>MaskedInput});var react=__webpack_require__("./node_modules/react/index.js"),input=__webpack_require__("./src/input/index.ts"),utils=__webpack_require__("./node_modules/@krutoo/input-mask/dist/dom/utils.js"),hooks=__webpack_require__("./src/hooks/index.ts"),on=__webpack_require__("./src/helpers/on.ts"),core=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/index.js"),redux=__webpack_require__("./node_modules/redux/es/redux.js");const actions={manualChange:createAction("manual/change"),inputChange:createAction("input/change"),inputSelectionChange:createAction("input/selection-change")};function createInputMaskStore(options,initialState){const reducer=function createDomReducer(options){const innerReducer=(0,core.createReducer)(options);function processState(a,b){return innerReducer(a,(0,core.defineChanges)(a,b))}const initialState=utils.State.init(options);return function reducer(state=initialState,action){let result=state;if(actions.inputChange.is(action))result=processState(state,utils.State.fromTarget(action.payload.input));else if(actions.inputSelectionChange.is(action))result=utils.State.fromTarget(action.payload.input);else if(actions.manualChange.is(action)){const validCleanValue=action.payload.value.split("").filter((c=>c.match(options.pattern))).join(""),newMaskedValue=utils.Value.toMasked(options,validCleanValue),firstPlace=options.mask.indexOf(options.placeholder);result=processState(utils.State.of(state.value,utils.Range.of(firstPlace,state.value.length)),utils.State.of(newMaskedValue,utils.Range.of(newMaskedValue.length)))}return result}}(options);return(0,redux.jB)(reducer,initialState)}function createAction(type){const creator=payload=>({type,payload});return creator.is=action=>action.type===type,creator}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function MaskedInput({mask,placeholder="_",pattern="\\d",value,defaultValue,baseInputProps,onFocus,onChange,onBlur,inputRef,...props}){const{store,bind}=function useInputMask({maskOptions:maskOptionsProp,value,defaultValue}){const maskOptions=(0,react.useMemo)((()=>({mask:maskOptionsProp.mask,pattern:new RegExp(maskOptionsProp.pattern),placeholder:maskOptionsProp.placeholder})),[maskOptionsProp.mask,maskOptionsProp.pattern,maskOptionsProp.placeholder]),input=(0,react.useRef)(null),[initialValue]=(0,react.useState)(defaultValue),createStore=(0,react.useCallback)((()=>{const newStore=createInputMaskStore(maskOptions);return newStore.dispatch(actions.manualChange({value:value??initialValue??""})),newStore}),[maskOptions,value,initialValue]),store=(0,react.useMemo)(createStore,[maskOptions]),[,setState]=(0,react.useState)((()=>store.getState()));(0,hooks.LI)((()=>{const offList=[store.subscribe((()=>{setState(store.getState()),input.current&&utils.State.applyDiff(store.getState(),input.current)})),(0,on.on)(document,"selectionchange",(()=>{input.current&&input.current===document.activeElement&&store.dispatch(actions.inputSelectionChange({input:input.current}))}))];return()=>offList.forEach((fn=>fn()))}),[store]);const onValuePropChange=(0,react.useCallback)((()=>{void 0!==value&&value!==utils.Value.toClean(maskOptions,store.getState().value)&&store.dispatch(actions.manualChange({value}))}),[value,store,maskOptions]);(0,hooks.LI)(onValuePropChange,[value]);const onChange=(0,react.useCallback)((event=>{store.dispatch(actions.inputChange({input:event.target}))}),[store]);return{store,bind:{ref:input,value:store.getState().value,onChange}}}({value,defaultValue,maskOptions:{mask,pattern,placeholder}});(0,react.useImperativeHandle)(inputRef,(()=>bind.ref.current));const getData=(0,react.useCallback)((()=>({value:store.getState().value,cleanValue:utils.Value.toClean({mask,placeholder},store.getState().value),completed:store.getState().value.length===mask.length})),[store,mask,placeholder]);return(0,jsx_runtime.jsx)(input.I,{...props,baseInputProps:{...baseInputProps,restPlaceholder:baseInputProps?.restPlaceholder??{value:mask.slice(store.getState().value.length),shiftValue:store.getState().value}},inputRef:bind.ref,value:bind.value,onFocus:event=>{onFocus?.(event,getData())},onChange:event=>{bind.onChange(event),onChange?.(event,getData())},onBlur:event=>{onBlur?.(event,getData())}})}MaskedInput.displayName="MaskedInput";try{MaskedInput.displayName="MaskedInput",MaskedInput.__docgenInfo={description:"Поле ввода текста по маске.",displayName:"MaskedInput",props:{onFocus:{defaultValue:null,description:"Сработает при фокусе. Вторым аргументом получит данные поля с маской.",name:"onFocus",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},onChange:{defaultValue:null,description:"Сработает при вводе. Вторым аргументом получит данные поля с маской.",name:"onChange",required:!1,type:{name:"((event: ChangeEvent<HTMLInputElement>, data: MaskData) => void) | undefined"}},onBlur:{defaultValue:null,description:'Сработает при "blur". Вторым аргументом получит данные поля с маской.',name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>, data: MaskData) => void) | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"FieldBlockStyle | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},type:{defaultValue:null,description:"Тип поля.",name:"type",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"number"'},{value:'"search"'},{value:'"text"'},{value:'"tel"'},{value:'"email"'},{value:'"password"'}]}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'}]}},value:{defaultValue:null,description:"Значение.",name:"value",required:!1,type:{name:"string | undefined"}},defaultValue:{defaultValue:null,description:"Значение по умолчанию.",name:"defaultValue",required:!1,type:{name:"string | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},failed:{defaultValue:null,description:"Состояние с ошибкой.",name:"failed",required:!1,type:{name:"boolean | undefined"}},caption:{defaultValue:null,description:"Подпись под полем.",name:"caption",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ярлык в поле.",name:"label",required:!1,type:{name:"string | undefined"}},main:{defaultValue:null,description:"Основное содержимое.",name:"main",required:!1,type:{name:"ReactNode"}},focused:{defaultValue:null,description:"Состояние фокуса.",name:"focused",required:!1,type:{name:"boolean | undefined"}},baseInputProps:{defaultValue:null,description:"Свойства BaseInputProps.",name:"baseInputProps",required:!1,type:{name:"BaseInputAsInputProps | undefined"}},blockProps:{defaultValue:null,description:"Опции элемента блока поля.",name:"blockProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},rootRef:{defaultValue:null,description:"Ref корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},inputRef:{defaultValue:null,description:"Ref элемента input.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement> | undefined"}},clearable:{defaultValue:null,description:"Нужно ли выводить кнопку очистки поля.",name:"clearable",required:!1,type:{name:"boolean | undefined"}},onClear:{defaultValue:null,description:"Сработает при очистке поля.",name:"onClear",required:!1,type:{name:"MouseEventHandler<SVGSVGElement> | undefined"}},labelAsPlaceholder:{defaultValue:null,description:"Выводить ярлык вместо placeholder или введенного значения.",name:"labelAsPlaceholder",required:!1,type:{name:"boolean | undefined"}},labelProps:{defaultValue:null,description:"Опции элемента ярлыка.",name:"labelProps",required:!1,type:{name:"NoChildren<LabelHTMLAttributes<HTMLLabelElement>> | undefined"}},fixedHeight:{defaultValue:null,description:"Фиксировать высоту.",name:"fixedHeight",required:!1,type:{name:"boolean | undefined"}},rootProps:{defaultValue:null,description:"Опции корневого элемента.",name:"rootProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},blockRef:{defaultValue:null,description:"Ref элемента блока поля.",name:"blockRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},adornmentStart:{defaultValue:null,description:"Украшение перед основным содержимым.",name:"adornmentStart",required:!1,type:{name:"ReactNode"}},adornmentEnd:{defaultValue:null,description:"Украшение после основного содержимого.",name:"adornmentEnd",required:!1,type:{name:"ReactNode"}},mainProps:{defaultValue:null,description:"Опции основного содержимого.",name:"mainProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},mask:{defaultValue:null,description:"Строковое представление маски.",name:"mask",required:!0,type:{name:"string"}},pattern:{defaultValue:{value:"\\d"},description:"Строковое представление регулярного выражения только доступных для ввода символов.",name:"pattern",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/masked-input/masked-input.tsx#MaskedInput"]={docgenInfo:MaskedInput.__docgenInfo,name:"MaskedInput",path:"src/masked-input/masked-input.tsx#MaskedInput"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);