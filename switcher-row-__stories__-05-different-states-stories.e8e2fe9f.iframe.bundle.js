"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2019],{"./src/switcher-row/__stories__/05-different-states.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentStates:()=>DifferentStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_switcher_row__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/switcher-row/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/checkbox/index.ts"),_sima_land_ui_nucleons_radio_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/radio-button/index.ts"),_sima_land_ui_nucleons_toggle__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/toggle/index.ts"),_storybook_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/SwitcherRow",component:_sima_land_ui_nucleons_switcher_row__WEBPACK_IMPORTED_MODULE_0__.N,parameters:{storySource:{source:"import { SwitcherRow } from '@sima-land/ui-nucleons/switcher-row';\nimport { useState } from 'react';\nimport { Checkbox } from '@sima-land/ui-nucleons/checkbox';\nimport { RadioButton } from '@sima-land/ui-nucleons/radio-button';\nimport { Toggle } from '@sima-land/ui-nucleons/toggle';\nimport { Sandbox } from '../../../.storybook/utils';\n\nexport default {\n  title: 'common/SwitcherRow',\n  component: SwitcherRow,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function DifferentStates() {\n  const [state, setState] = useState<string>('default');\n  const [fieldType, setFieldType] = useState<'Checkbox' | 'Toggle' | 'RadioButton'>('Checkbox');\n  const [fieldPosition, setFieldPosition] = useState<'start' | 'end'>('start');\n  const [textAlign, setTextAlign] = useState<'left' | 'right'>('left');\n  const [fontSize, setFontSize] = useState<'14px' | '16px'>('14px');\n\n  const fieldProps = {\n    id: 'example-field',\n    failed: state.includes('failed'),\n    disabled: state.includes('disabled'),\n  };\n\n  return (\n    <Sandbox\n      controls={[\n        {\n          label: 'Состояние',\n          type: 'select',\n          bind: [state, setState],\n          options: [\n            { value: 'default', displayName: 'По умолчанию' },\n            { value: 'failed', displayName: 'Ошибка' },\n            { value: 'disabled', displayName: 'Отключено' },\n            { value: 'failed+disabled', displayName: 'Ошибка + отключено' },\n          ],\n        },\n        {\n          label: 'Поле',\n          type: 'select',\n          bind: [fieldType, setFieldType],\n          options: ['Checkbox', 'Toggle', 'RadioButton'],\n        },\n        {\n          label: 'Позиция поля',\n          type: 'select',\n          bind: [fieldPosition, setFieldPosition],\n          options: [\n            { value: 'start', displayName: 'Начало' },\n            { value: 'end', displayName: 'Конец' },\n          ],\n        },\n        {\n          label: 'Выравнивание текста',\n          type: 'select',\n          bind: [textAlign, setTextAlign],\n          options: [\n            { value: 'left', displayName: 'По левому краю' },\n            { value: 'right', displayName: 'По правому краю' },\n          ],\n        },\n        {\n          label: 'Размер текста',\n          hidden: fieldType === 'Toggle',\n          type: 'select',\n          bind: [fontSize, setFontSize],\n          options: ['14px', '16px'],\n        },\n      ]}\n    >\n      <SwitcherRow\n        fieldPosition={fieldPosition}\n        textAlign={textAlign}\n        style={{\n          maxWidth: '400px',\n          margin: 'auto',\n          fontSize,\n          lineHeight: fontSize === '16px' ? '24px' : '20px',\n        }}\n      >\n        {fieldType === 'Checkbox' && <Checkbox {...fieldProps} />}\n        {fieldType === 'Toggle' && <Toggle {...fieldProps} />}\n        {fieldType === 'RadioButton' && <RadioButton {...fieldProps} />}\n        <SwitcherRow.Label>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?\n        </SwitcherRow.Label>\n        <SwitcherRow.Comment>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?\n        </SwitcherRow.Comment>\n      </SwitcherRow>\n    </Sandbox>\n  );\n}\n\nDifferentStates.storyName = 'Различные состояния';\n",locationsMap:{"different-states":{startLoc:{col:7,line:16},endLoc:{col:1,line:98},startBody:{col:7,line:16},endBody:{col:1,line:98}}}},layout:"padded"}},DifferentStates=function DifferentStates(){const[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("default"),[fieldType,setFieldType]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("Checkbox"),[fieldPosition,setFieldPosition]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("start"),[textAlign,setTextAlign]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("left"),[fontSize,setFontSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("14px"),fieldProps={id:"example-field",failed:state.includes("failed"),disabled:state.includes("disabled")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_5__.pv,{controls:[{label:"Состояние",type:"select",bind:[state,setState],options:[{value:"default",displayName:"По умолчанию"},{value:"failed",displayName:"Ошибка"},{value:"disabled",displayName:"Отключено"},{value:"failed+disabled",displayName:"Ошибка + отключено"}]},{label:"Поле",type:"select",bind:[fieldType,setFieldType],options:["Checkbox","Toggle","RadioButton"]},{label:"Позиция поля",type:"select",bind:[fieldPosition,setFieldPosition],options:[{value:"start",displayName:"Начало"},{value:"end",displayName:"Конец"}]},{label:"Выравнивание текста",type:"select",bind:[textAlign,setTextAlign],options:[{value:"left",displayName:"По левому краю"},{value:"right",displayName:"По правому краю"}]},{label:"Размер текста",hidden:"Toggle"===fieldType,type:"select",bind:[fontSize,setFontSize],options:["14px","16px"]}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_sima_land_ui_nucleons_switcher_row__WEBPACK_IMPORTED_MODULE_0__.N,{fieldPosition,textAlign,style:{maxWidth:"400px",margin:"auto",fontSize,lineHeight:"16px"===fontSize?"24px":"20px"},children:["Checkbox"===fieldType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_checkbox__WEBPACK_IMPORTED_MODULE_2__.X,{...fieldProps}),"Toggle"===fieldType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_toggle__WEBPACK_IMPORTED_MODULE_4__.Z,{...fieldProps}),"RadioButton"===fieldType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_radio_button__WEBPACK_IMPORTED_MODULE_3__.E,{...fieldProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_switcher_row__WEBPACK_IMPORTED_MODULE_0__.N.Label,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_sima_land_ui_nucleons_switcher_row__WEBPACK_IMPORTED_MODULE_0__.N.Comment,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?"})]})})};DifferentStates.storyName="Различные состояния",DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const [state, setState] = useState<string>('default');\n  const [fieldType, setFieldType] = useState<'Checkbox' | 'Toggle' | 'RadioButton'>('Checkbox');\n  const [fieldPosition, setFieldPosition] = useState<'start' | 'end'>('start');\n  const [textAlign, setTextAlign] = useState<'left' | 'right'>('left');\n  const [fontSize, setFontSize] = useState<'14px' | '16px'>('14px');\n  const fieldProps = {\n    id: 'example-field',\n    failed: state.includes('failed'),\n    disabled: state.includes('disabled')\n  };\n  return <Sandbox controls={[{\n    label: 'Состояние',\n    type: 'select',\n    bind: [state, setState],\n    options: [{\n      value: 'default',\n      displayName: 'По умолчанию'\n    }, {\n      value: 'failed',\n      displayName: 'Ошибка'\n    }, {\n      value: 'disabled',\n      displayName: 'Отключено'\n    }, {\n      value: 'failed+disabled',\n      displayName: 'Ошибка + отключено'\n    }]\n  }, {\n    label: 'Поле',\n    type: 'select',\n    bind: [fieldType, setFieldType],\n    options: ['Checkbox', 'Toggle', 'RadioButton']\n  }, {\n    label: 'Позиция поля',\n    type: 'select',\n    bind: [fieldPosition, setFieldPosition],\n    options: [{\n      value: 'start',\n      displayName: 'Начало'\n    }, {\n      value: 'end',\n      displayName: 'Конец'\n    }]\n  }, {\n    label: 'Выравнивание текста',\n    type: 'select',\n    bind: [textAlign, setTextAlign],\n    options: [{\n      value: 'left',\n      displayName: 'По левому краю'\n    }, {\n      value: 'right',\n      displayName: 'По правому краю'\n    }]\n  }, {\n    label: 'Размер текста',\n    hidden: fieldType === 'Toggle',\n    type: 'select',\n    bind: [fontSize, setFontSize],\n    options: ['14px', '16px']\n  }]}>\n      <SwitcherRow fieldPosition={fieldPosition} textAlign={textAlign} style={{\n      maxWidth: '400px',\n      margin: 'auto',\n      fontSize,\n      lineHeight: fontSize === '16px' ? '24px' : '20px'\n    }}>\n        {fieldType === 'Checkbox' && <Checkbox {...fieldProps} />}\n        {fieldType === 'Toggle' && <Toggle {...fieldProps} />}\n        {fieldType === 'RadioButton' && <RadioButton {...fieldProps} />}\n        <SwitcherRow.Label>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?\n        </SwitcherRow.Label>\n        <SwitcherRow.Comment>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, eveniet?\n        </SwitcherRow.Comment>\n      </SwitcherRow>\n    </Sandbox>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["DifferentStates"]},"./.storybook/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KI:()=>LargePage,Ap:()=>LoremIpsum,aH:()=>PageScrollLockDemo,pv:()=>Sandbox});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),src_select=__webpack_require__("./src/select/index.ts"),dropdown_item=__webpack_require__("./src/dropdown-item/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),utils_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_m.Z,options);const _storybook_utils_m=utils_m.Z&&utils_m.Z.locals?utils_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sandbox({controls=[],children,areaStyle}){return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.sandbox,children:[(0,jsx_runtime.jsx)("div",{className:_storybook_utils_m.controls,children:controls.filter((c=>!c.hidden)).map(((control,index)=>{switch(control.type){case"select":return(0,jsx_runtime.jsx)(SandboxSelect,{...control},index);case"toggle":return(0,jsx_runtime.jsx)(SandboxToggle,{...control},index);default:return null}}))}),(0,jsx_runtime.jsx)("div",{className:_storybook_utils_m.area,style:areaStyle,children})]})}function SandboxSelect({label,options,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.select,children:[(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("select",{className:_storybook_utils_m.field,id,value,onChange:e=>onChange?.(e.target.value),children:options.map(((option,i)=>(0,jsx_runtime.jsx)("option",{value:"string"==typeof option?option:option.value,children:"string"==typeof option?option:option.displayName??option.value},i)))})})]})}function SandboxToggle({label,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_m.toggle,children:[(0,jsx_runtime.jsx)("input",{className:_storybook_utils_m.field,id,type:"checkbox",checked:value,onChange:e=>onChange?.(e.target.checked)}),(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label})]})}function SandboxControlLabel({htmlFor,children}){return(0,jsx_runtime.jsx)("label",{htmlFor,className:_storybook_utils_m.label,children})}const createRandomGenerator=seed=>{let currentSeed=seed;return()=>{const newSeed=(9301*currentSeed+49297)%233280;return currentSeed=newSeed,newSeed/233280}};function LoremIpsum({paragraphCount=1,sentenceCount=20}){const random=createRandomGenerator(1337),content=(0,react.useMemo)((()=>Array(paragraphCount).fill(0).map((()=>(0,dist.fH)({format:"plain",sentenceLowerBound:sentenceCount,sentenceUpperBound:sentenceCount,random})))),[paragraphCount,sentenceCount]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content.map(((item,index)=>(0,jsx_runtime.jsx)("p",{children:item},index)))})}function PageScrollLockDemo({children}){const adapterNames=["body-scroll-lock","ui-nucleons"],[adapterName,setAdapterName]=(0,react.useState)("body-scroll-lock");let adapter;if("ui-nucleons"===adapterName)adapter=(_,options)=>new page_scroll_lock.hC(options);else adapter=(element,options)=>new page_scroll_lock.Pp(element,options);return(0,jsx_runtime.jsxs)(page_scroll_lock.k6.Provider,{value:{adapter},children:[(0,jsx_runtime.jsx)("h1",{children:"Пример страницы"}),(0,jsx_runtime.jsx)("p",{children:"Это тестовая страница для проверки блокировки прокрутки с разными реализациями."}),(0,jsx_runtime.jsx)(src_select.P,{opener:(0,jsx_runtime.jsx)(src_select.P.FieldBlock,{size:"l",label:"Реализация"}),value:adapterName,onValueChange:value=>{adapterNames.includes(value)&&setAdapterName(value)},children:adapterNames.map(((name,index)=>(0,jsx_runtime.jsx)(dropdown_item.h,{value:name,children:name},index)))}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"20px"},children}),(0,jsx_runtime.jsx)(LoremIpsum,{paragraphCount:50,sentenceCount:50})]})}function usePageCentered(){(0,react.useEffect)((()=>{const body=document.body,html=document.documentElement,pageHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);window.scroll({top:(pageHeight-window.innerHeight)/2})}),[])}function LargePage({children}){return usePageCentered(),(0,jsx_runtime.jsx)("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children})}try{Sandbox.displayName="Sandbox",Sandbox.__docgenInfo={description:"Визуальная песочница с возможностью размещения полей ввода для управления состоянием.",displayName:"Sandbox",props:{controls:{defaultValue:{value:"[]"},description:"",name:"controls",required:!1,type:{name:"(ControlToggle | ControlSelect)[] | undefined"}},areaStyle:{defaultValue:null,description:"",name:"areaStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#Sandbox"]={docgenInfo:Sandbox.__docgenInfo,name:"Sandbox",path:".storybook/utils.tsx#Sandbox"})}catch(__react_docgen_typescript_loader_error){}try{LoremIpsum.displayName="LoremIpsum",LoremIpsum.__docgenInfo={description:"Выводит текст-рыбу.",displayName:"LoremIpsum",props:{paragraphCount:{defaultValue:{value:"1"},description:"",name:"paragraphCount",required:!1,type:{name:"number | undefined"}},sentenceCount:{defaultValue:{value:"20"},description:"",name:"sentenceCount",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LoremIpsum"]={docgenInfo:LoremIpsum.__docgenInfo,name:"LoremIpsum",path:".storybook/utils.tsx#LoremIpsum"})}catch(__react_docgen_typescript_loader_error){}try{PageScrollLockDemo.displayName="PageScrollLockDemo",PageScrollLockDemo.__docgenInfo={description:"Тестовая страница большой высоты для проверки блокировки прокрутки.",displayName:"PageScrollLockDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#PageScrollLockDemo"]={docgenInfo:PageScrollLockDemo.__docgenInfo,name:"PageScrollLockDemo",path:".storybook/utils.tsx#PageScrollLockDemo"})}catch(__react_docgen_typescript_loader_error){}try{usePageCentered.displayName="usePageCentered",usePageCentered.__docgenInfo={description:"Прокручивает страницу по вертикали до центра.",displayName:"usePageCentered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#usePageCentered"]={docgenInfo:usePageCentered.__docgenInfo,name:"usePageCentered",path:".storybook/utils.tsx#usePageCentered"})}catch(__react_docgen_typescript_loader_error){}try{LargePage.displayName="LargePage",LargePage.__docgenInfo={description:"Тестовая страница с центрирование контента.",displayName:"LargePage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LargePage"]={docgenInfo:LargePage.__docgenInfo,name:"LargePage",path:".storybook/utils.tsx#LargePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>BSL_IGNORE_ATTR,Pp:()=>PageScrollLockAdapterBSL,hC:()=>PageScrollLockAdapterNucleons,k6:()=>PageScrollLockContext,PP:()=>usePageScrollLock});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLockAdapterBSL{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:bodyScrollLock_esm.Qp,enableBodyScroll:bodyScrollLock_esm.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1},PageScrollLockContext=(0,react.createContext)({adapter:(element,options)=>new PageScrollLockAdapterBSL(element,options)}),DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options){const{adapter}=(0,react.useContext)(PageScrollLockContext),{lockEnabled=DEFAULTS.lockEnabled,reserveScrollBarGap=DEFAULTS.reserveScrollBarGap}=options??DEFAULTS;(0,hooks.LI)((()=>{const element=ref.current;if(element&&lockEnabled){const pageScroll=adapter(element,{reserveScrollBarGap});return pageScroll.lock(),()=>pageScroll.unlock()}}),[ref,lockEnabled,reserveScrollBarGap])}const MARK_ATTR="data-scroll-locked";class PageScrollLockAdapterNucleons{constructor(options){this.options=options}lock(){if(!this.isLocked()){const scrollTop=document.documentElement.scrollTop;if(this.bodyStyle=new StyleAffect(document.body),this.bodyStyle.set("width","100vw").set("position","fixed").set("top",-scrollTop+"px"),this.options?.reserveScrollBarGap){const gap=this.getScrollbarWidth();gap>0&&this.bodyStyle.set("padding-right",`${gap}px`)}document.body.setAttribute(MARK_ATTR,"true")}}unlock(){if(this.isLocked()){const{body}=document,parsed=parseFloat(body.style.getPropertyValue("top").replace(/[A-z]*/g,""))||0;this.bodyStyle?.restore(),window.scrollTo(0,-parsed),document.body.removeAttribute(MARK_ATTR)}}isLocked(){return document.body.hasAttribute(MARK_ATTR)}getScrollbarWidth(){const div=document.createElement("div");div.style.overflowY="scroll",div.style.width="50px",div.style.height="50px",document.body.append(div);const scrollBarWidth=div.offsetWidth-div.clientWidth;return div.remove(),scrollBarWidth}}class StyleAffect{constructor(element){this.element=element,this.changes=new Map}set(prop,value,priority){return this.changes.has(prop)||this.changes.set(prop,{oldValue:this.element.style.getPropertyValue(prop),oldPriority:this.element.style.getPropertyPriority(prop)}),this.element.style.setProperty(prop,value,priority),this}restore(){for(const[prop,{oldValue,oldPriority}]of this.changes)this.element.style.setProperty(prop,oldValue,oldPriority);return this.changes.clear(),this}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-m__sandbox__a3a .utils-m__controls__dad{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__label__ed4{font-size:14px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__toggle__e29{display:flex;gap:8px}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__toggle__e29 .utils-m__field__c51{margin:0}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__select__cdd{display:flex;flex-direction:column;gap:8px;align-items:flex-start}.utils-m__sandbox__a3a .utils-m__controls__dad .utils-m__select__cdd .utils-m__field__c51{width:200px;background:#fff;border:1px solid #ccc;border-radius:4px;padding:0 8px;min-width:160px;-webkit-appearance:menulist-button;height:32px;font-size:16px}.utils-m__sandbox__a3a .utils-m__area__d8c{border:3px dashed #aaa;border-radius:8px;padding:24px}","",{version:3,sources:["webpack://./.storybook/utils.m.scss"],names:[],mappings:"AACE,+CACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,oEACE,cAAA,CAEF,qEACE,YAAA,CACA,OAAA,CACA,0FACE,QAAA,CAGJ,qEACE,YAAA,CACA,qBAAA,CACA,OAAA,CACA,sBAAA,CACA,0FACE,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CACA,kCAAA,CACA,WAAA,CACA,cAAA,CAIN,2CACE,sBAAA,CACA,iBAAA,CACA,YAAA",sourcesContent:['.sandbox {\n  .controls {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 20px;\n    .label {\n      font-size: 14px;\n    }\n    .toggle {\n      display: flex;\n      gap: 8px;\n      .field {\n        margin: 0;\n      }\n    }\n    .select {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      align-items: flex-start;\n      .field {\n        width: 200px;\n        background: #fff;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 0 8px;\n        min-width: 160px;\n        -webkit-appearance: menulist-button; // ВАЖНО: чтобы в Safari работало свойство "height"\n        height: 32px;\n        font-size: 16px;\n      }\n    }\n  }\n  .area {\n    border: 3px dashed #aaa;\n    border-radius: 8px;\n    padding: 24px;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sandbox:"utils-m__sandbox__a3a",controls:"utils-m__controls__dad",label:"utils-m__label__ed4",toggle:"utils-m__toggle__e29",field:"utils-m__field__c51",select:"utils-m__select__cdd",area:"utils-m__area__d8c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);