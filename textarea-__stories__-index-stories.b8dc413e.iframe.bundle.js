"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[9985],{"./.storybook/utils.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{KI:()=>LargePage,Ap:()=>LoremIpsum,aH:()=>PageScrollLockDemo,pv:()=>Sandbox});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/lorem-ipsum/dist/index.js"),page_scroll_lock=__webpack_require__("./src/_internal/page-scroll-lock/index.ts"),src_select=__webpack_require__("./src/select/index.ts"),dropdown_item=__webpack_require__("./src/dropdown-item/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),utils_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_module.Z,options);const _storybook_utils_module=utils_module.Z&&utils_module.Z.locals?utils_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Sandbox({controls=[],children,areaStyle}){return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.sandbox,children:[(0,jsx_runtime.jsx)("div",{className:_storybook_utils_module.controls,children:controls.filter((c=>!c.hidden)).map(((control,index)=>{switch(control.type){case"select":return(0,jsx_runtime.jsx)(SandboxSelect,{...control},index);case"toggle":return(0,jsx_runtime.jsx)(SandboxToggle,{...control},index);default:return null}}))}),(0,jsx_runtime.jsx)("div",{className:_storybook_utils_module.area,style:areaStyle,children})]})}function SandboxSelect({label,options,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.select,children:[(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("select",{className:_storybook_utils_module.field,id,value,onChange:e=>onChange?.(e.target.value),children:options.map(((option,i)=>(0,jsx_runtime.jsx)("option",{value:"string"==typeof option?option:option.value,children:"string"==typeof option?option:option.displayName??option.value},i)))})})]})}function SandboxToggle({label,bind:[value,onChange]}){const[id]=(0,react.useState)(`control-${Math.random().toString(16).slice(2)}`);return(0,jsx_runtime.jsxs)("div",{className:_storybook_utils_module.toggle,children:[(0,jsx_runtime.jsx)("input",{className:_storybook_utils_module.field,id,type:"checkbox",checked:value,onChange:e=>onChange?.(e.target.checked)}),(0,jsx_runtime.jsx)(SandboxControlLabel,{htmlFor:id,children:label})]})}function SandboxControlLabel({htmlFor,children}){return(0,jsx_runtime.jsx)("label",{htmlFor,className:_storybook_utils_module.label,children})}Sandbox.displayName="Sandbox",SandboxSelect.displayName="SandboxSelect",SandboxToggle.displayName="SandboxToggle",SandboxControlLabel.displayName="SandboxControlLabel";const createRandomGenerator=seed=>{let currentSeed=seed;return()=>{const newSeed=(9301*currentSeed+49297)%233280;return currentSeed=newSeed,newSeed/233280}};function LoremIpsum({paragraphCount=1,sentenceCount=20}){const random=createRandomGenerator(1337),content=(0,react.useMemo)((()=>Array(paragraphCount).fill(0).map((()=>(0,dist.fH)({format:"plain",sentenceLowerBound:sentenceCount,sentenceUpperBound:sentenceCount,random})))),[paragraphCount,sentenceCount]);return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:content.map(((item,index)=>(0,jsx_runtime.jsx)("p",{children:item},index)))})}function PageScrollLockDemo({children}){const adapterNames=["body-scroll-lock","ui-nucleons"],[adapterName,setAdapterName]=(0,react.useState)("body-scroll-lock");let adapter;if("ui-nucleons"===adapterName)adapter=(_,options)=>new page_scroll_lock.hC(options);else adapter=(element,options)=>new page_scroll_lock.Pp(element,options);return(0,jsx_runtime.jsxs)(page_scroll_lock.k6.Provider,{value:{adapter},children:[(0,jsx_runtime.jsx)("h1",{children:"Пример страницы"}),(0,jsx_runtime.jsx)("p",{children:"Это тестовая страница для проверки блокировки прокрутки с разными реализациями."}),(0,jsx_runtime.jsx)(src_select.P,{opener:(0,jsx_runtime.jsx)(src_select.P.FieldBlock,{size:"l",label:"Реализация"}),value:adapterName,onValueChange:value=>{adapterNames.includes(value)&&setAdapterName(value)},children:adapterNames.map(((name,index)=>(0,jsx_runtime.jsx)(dropdown_item.h,{value:name,children:name},index)))}),(0,jsx_runtime.jsx)("div",{style:{marginTop:"20px"},children}),(0,jsx_runtime.jsx)(LoremIpsum,{paragraphCount:50,sentenceCount:50})]})}function usePageCentered(){(0,react.useEffect)((()=>{const body=document.body,html=document.documentElement,pageHeight=Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight);window.scroll({top:(pageHeight-window.innerHeight)/2})}),[])}function LargePage({children}){return usePageCentered(),(0,jsx_runtime.jsx)("div",{style:{height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children})}PageScrollLockDemo.displayName="PageScrollLockDemo",LargePage.displayName="LargePage";try{Sandbox.displayName="Sandbox",Sandbox.__docgenInfo={description:"Визуальная песочница с возможностью размещения полей ввода для управления состоянием.",displayName:"Sandbox",props:{controls:{defaultValue:{value:"[]"},description:"",name:"controls",required:!1,type:{name:"(ControlToggle | ControlSelect)[] | undefined"}},areaStyle:{defaultValue:null,description:"",name:"areaStyle",required:!1,type:{name:"CSSProperties | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#Sandbox"]={docgenInfo:Sandbox.__docgenInfo,name:"Sandbox",path:".storybook/utils.tsx#Sandbox"})}catch(__react_docgen_typescript_loader_error){}try{LoremIpsum.displayName="LoremIpsum",LoremIpsum.__docgenInfo={description:"Выводит текст-рыбу.",displayName:"LoremIpsum",props:{paragraphCount:{defaultValue:{value:"1"},description:"",name:"paragraphCount",required:!1,type:{name:"number | undefined"}},sentenceCount:{defaultValue:{value:"20"},description:"",name:"sentenceCount",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LoremIpsum"]={docgenInfo:LoremIpsum.__docgenInfo,name:"LoremIpsum",path:".storybook/utils.tsx#LoremIpsum"})}catch(__react_docgen_typescript_loader_error){}try{PageScrollLockDemo.displayName="PageScrollLockDemo",PageScrollLockDemo.__docgenInfo={description:"Тестовая страница большой высоты для проверки блокировки прокрутки.",displayName:"PageScrollLockDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#PageScrollLockDemo"]={docgenInfo:PageScrollLockDemo.__docgenInfo,name:"PageScrollLockDemo",path:".storybook/utils.tsx#PageScrollLockDemo"})}catch(__react_docgen_typescript_loader_error){}try{usePageCentered.displayName="usePageCentered",usePageCentered.__docgenInfo={description:"Прокручивает страницу по вертикали до центра.",displayName:"usePageCentered",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#usePageCentered"]={docgenInfo:usePageCentered.__docgenInfo,name:"usePageCentered",path:".storybook/utils.tsx#usePageCentered"})}catch(__react_docgen_typescript_loader_error){}try{LargePage.displayName="LargePage",LargePage.__docgenInfo={description:"Тестовая страница с центрирование контента.",displayName:"LargePage",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/utils.tsx#LargePage"]={docgenInfo:LargePage.__docgenInfo,name:"LargePage",path:".storybook/utils.tsx#LargePage"})}catch(__react_docgen_typescript_loader_error){}},"./src/textarea/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentStates:()=>DifferentStates,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/textarea/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Textarea",component:_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,parameters:{storySource:{source:"import { Textarea, TextareaProps } from '@sima-land/ui-nucleons/textarea';\nimport { useState } from 'react';\nimport { Sandbox } from '../../../.storybook/utils';\nexport default {\n  title: 'common/Textarea',\n  component: Textarea,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const [value, setValue] = useState('');\n  const limit = 250;\n  return <Textarea label='Текст отзыва' placeholder='Напишите, что вы думаете о товаре' value={value} onChange={e => setValue(e.target.value)} rootProps={{\n    style: {\n      '--field-width': '320px'\n    }\n  }} failed={value.length > limit} caption={`Максимальная длина - ${limit} символов`} />;\n}\nPrimary.storyName = 'Простой пример';\nexport function DifferentStates() {\n  const [value, setValue] = useState('');\n  const [disabled, setDisabled] = useState(false);\n  const [failed, setFailed] = useState(false);\n  const props: TextareaProps = {\n    disabled,\n    failed,\n    rootProps: {\n      style: {\n        '--field-width': '240px'\n      }\n    },\n    value,\n    onChange: e => setValue(e.target.value)\n  };\n  return <Sandbox controls={[{\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: '12px',\n      justifyContent: 'center'\n    }}>\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='Без label и без placeholder' />\n\n        <Textarea {...props} label={undefined} placeholder='Напишите, что-нибудь' caption='Только placeholder' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder={undefined} caption='Только label' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder='Напишите, что-нибудь' caption='Label и placeholder' />\n      </div>\n    </Sandbox>;\n}\nDifferentStates.storyName = 'Различные состояния';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const [value, setValue] = useState('');\\n  const limit = 250;\\n  return <Textarea label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430' placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E \\u0432\\u044B \\u0434\\u0443\\u043C\\u0430\\u0435\\u0442\\u0435 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' value={value} onChange={e => setValue(e.target.value)} rootProps={{\\n    style: {\\n      '--field-width': '320px'\\n    }\\n  }} failed={value.length > limit} caption={`\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 - ${limit} \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432`} />;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nDifferentStates.parameters = {\n  ...DifferentStates.parameters,\n  docs: {\n    ...DifferentStates.parameters?.docs,\n    source: {\n      originalSource: \"function DifferentStates() {\\n  const [value, setValue] = useState('');\\n  const [disabled, setDisabled] = useState(false);\\n  const [failed, setFailed] = useState(false);\\n  const props: TextareaProps = {\\n    disabled,\\n    failed,\\n    rootProps: {\\n      style: {\\n        '--field-width': '240px'\\n      }\\n    },\\n    value,\\n    onChange: e => setValue(e.target.value)\\n  };\\n  return <Sandbox controls={[{\\n    type: 'toggle',\\n    label: 'Disabled',\\n    bind: [disabled, setDisabled]\\n  }, {\\n    type: 'toggle',\\n    label: 'Failed',\\n    bind: [failed, setFailed]\\n  }]}>\\n      <div style={{\\n      display: 'flex',\\n      gap: '12px',\\n      justifyContent: 'center'\\n    }}>\\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='\\u0411\\u0435\\u0437 label \\u0438 \\u0431\\u0435\\u0437 placeholder' />\\n\\n        <Textarea {...props} label={undefined} placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E-\\u043D\\u0438\\u0431\\u0443\\u0434\\u044C' caption='\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E placeholder' />\\n\\n        <Textarea {...props} label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' placeholder={undefined} caption='\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E label' />\\n\\n        <Textarea {...props} label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E-\\u043D\\u0438\\u0431\\u0443\\u0434\\u044C' caption='Label \\u0438 placeholder' />\\n      </div>\\n    </Sandbox>;\\n}\",\n      ...DifferentStates.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:19},startBody:{col:7,line:11},endBody:{col:1,line:19}},"different-states":{startLoc:{col:7,line:21},endLoc:{col:1,line:59},startBody:{col:7,line:21},endBody:{col:1,line:59}}}},layout:"padded"}},Primary=function Primary(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{label:"Текст отзыва",placeholder:"Напишите, что вы думаете о товаре",value,onChange:e=>setValue(e.target.value),rootProps:{style:{"--field-width":"320px"}},failed:value.length>250,caption:"Максимальная длина - 250 символов"})};Primary.displayName="Primary",Primary.storyName="Простой пример";const DifferentStates=function DifferentStates(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[disabled,setDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[failed,setFailed]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),props={disabled,failed,rootProps:{style:{"--field-width":"240px"}},value,onChange:e=>setValue(e.target.value)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_2__.pv,{controls:[{type:"toggle",label:"Disabled",bind:[disabled,setDisabled]},{type:"toggle",label:"Failed",bind:[failed,setFailed]}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:void 0,placeholder:void 0,caption:"Без label и без placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:void 0,placeholder:"Напишите, что-нибудь",caption:"Только placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:"Текст отзыва о товаре",placeholder:void 0,caption:"Только label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:"Текст отзыва о товаре",placeholder:"Напишите, что-нибудь",caption:"Label и placeholder"})]})})};DifferentStates.displayName="DifferentStates",DifferentStates.storyName="Различные состояния",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [value, setValue] = useState('');\n  const limit = 250;\n  return <Textarea label='Текст отзыва' placeholder='Напишите, что вы думаете о товаре' value={value} onChange={e => setValue(e.target.value)} rootProps={{\n    style: {\n      '--field-width': '320px'\n    }\n  }} failed={value.length > limit} caption={`Максимальная длина - ${limit} символов`} />;\n}",...Primary.parameters?.docs?.source}}},DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const [value, setValue] = useState('');\n  const [disabled, setDisabled] = useState(false);\n  const [failed, setFailed] = useState(false);\n  const props: TextareaProps = {\n    disabled,\n    failed,\n    rootProps: {\n      style: {\n        '--field-width': '240px'\n      }\n    },\n    value,\n    onChange: e => setValue(e.target.value)\n  };\n  return <Sandbox controls={[{\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: '12px',\n      justifyContent: 'center'\n    }}>\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='Без label и без placeholder' />\n\n        <Textarea {...props} label={undefined} placeholder='Напишите, что-нибудь' caption='Только placeholder' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder={undefined} caption='Только label' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder='Напишите, что-нибудь' caption='Label и placeholder' />\n      </div>\n    </Sandbox>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DifferentStates"]},"./src/_internal/page-scroll-lock/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{kI:()=>BSL_IGNORE_ATTR,Pp:()=>PageScrollLockAdapterBSL,hC:()=>PageScrollLockAdapterNucleons,k6:()=>PageScrollLockContext,PP:()=>usePageScrollLock});var react=__webpack_require__("./node_modules/react/index.js"),hooks=__webpack_require__("./src/hooks/index.ts"),bodyScrollLock_esm=__webpack_require__("./node_modules/body-scroll-lock/lib/bodyScrollLock.esm.js");const BSL_IGNORE_ATTR="data-bsl-ignore";class PageScrollLockAdapterBSL{constructor(element,options){this.element=element,this.options=options,this.lib={disableBodyScroll:bodyScrollLock_esm.Qp,enableBodyScroll:bodyScrollLock_esm.tG}}replaceLib(lib){this.lib=lib}lock(){this.lib.disableBodyScroll(this.element,{...this.options,allowTouchMove})}unlock(){this.lib.enableBodyScroll(this.element)}}const allowTouchMove=startEl=>{let el=startEl;for(;el&&el!==document.body;){if(null!==el.getAttribute(BSL_IGNORE_ATTR))return!0;el=el.parentElement}return!1},PageScrollLockContext=(0,react.createContext)({adapter:(element,options)=>new PageScrollLockAdapterBSL(element,options)}),DEFAULTS={lockEnabled:!0,reserveScrollBarGap:!0};function usePageScrollLock(ref,options){const{adapter}=(0,react.useContext)(PageScrollLockContext),{lockEnabled=DEFAULTS.lockEnabled,reserveScrollBarGap=DEFAULTS.reserveScrollBarGap}=options??DEFAULTS;(0,hooks.LI)((()=>{const element=ref.current;if(element&&lockEnabled){const pageScroll=adapter(element,{reserveScrollBarGap});return pageScroll.lock(),()=>pageScroll.unlock()}}),[ref,lockEnabled,reserveScrollBarGap])}const MARK_ATTR="data-scroll-locked";class PageScrollLockAdapterNucleons{constructor(options){this.options=options}lock(){if(!this.isLocked()){const scrollTop=document.documentElement.scrollTop;if(this.bodyStyle=new StyleAffect(document.body),this.bodyStyle.set("width","100vw").set("position","fixed").set("top",-scrollTop+"px"),this.options?.reserveScrollBarGap){const gap=this.getScrollbarWidth();gap>0&&this.bodyStyle.set("padding-right",`${gap}px`)}document.body.setAttribute(MARK_ATTR,"true")}}unlock(){if(this.isLocked()){const{body}=document,parsed=parseFloat(body.style.getPropertyValue("top").replace(/[A-z]*/g,""))||0;this.bodyStyle?.restore(),window.scrollTo(0,-parsed),document.body.removeAttribute(MARK_ATTR)}}isLocked(){return document.body.hasAttribute(MARK_ATTR)}getScrollbarWidth(){const div=document.createElement("div");div.style.overflowY="scroll",div.style.width="50px",div.style.height="50px",document.body.append(div);const scrollBarWidth=div.offsetWidth-div.clientWidth;return div.remove(),scrollBarWidth}}class StyleAffect{constructor(element){this.element=element,this.changes=new Map}set(prop,value,priority){return this.changes.has(prop)||this.changes.set(prop,{oldValue:this.element.style.getPropertyValue(prop),oldPriority:this.element.style.getPropertyPriority(prop)}),this.element.style.setProperty(prop,value,priority),this}restore(){for(const[prop,{oldValue,oldPriority}]of this.changes)this.element.style.setProperty(prop,oldValue,oldPriority);return this.changes.clear(),this}}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./.storybook/utils.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-module__sandbox__ee9 .utils-module__controls__fc0{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__label__fc0{font-size:14px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__toggle__c08{display:flex;gap:8px}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__toggle__c08 .utils-module__field__d8e{margin:0}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__select__a76{display:flex;flex-direction:column;gap:8px;align-items:flex-start}.utils-module__sandbox__ee9 .utils-module__controls__fc0 .utils-module__select__a76 .utils-module__field__d8e{width:200px;background:#fff;border:1px solid #ccc;border-radius:4px;padding:0 8px;min-width:160px;-webkit-appearance:menulist-button;height:32px;font-size:16px}.utils-module__sandbox__ee9 .utils-module__area__a41{border:3px dashed #aaa;border-radius:8px;padding:24px}","",{version:3,sources:["webpack://./.storybook/utils.module.scss"],names:[],mappings:"AACE,yDACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,kBAAA,CACA,mFACE,cAAA,CAEF,oFACE,YAAA,CACA,OAAA,CACA,8GACE,QAAA,CAGJ,oFACE,YAAA,CACA,qBAAA,CACA,OAAA,CACA,sBAAA,CACA,8GACE,WAAA,CACA,eAAA,CACA,qBAAA,CACA,iBAAA,CACA,aAAA,CACA,eAAA,CACA,kCAAA,CACA,WAAA,CACA,cAAA,CAIN,qDACE,sBAAA,CACA,iBAAA,CACA,YAAA",sourcesContent:['.sandbox {\n  .controls {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    margin-bottom: 20px;\n    .label {\n      font-size: 14px;\n    }\n    .toggle {\n      display: flex;\n      gap: 8px;\n      .field {\n        margin: 0;\n      }\n    }\n    .select {\n      display: flex;\n      flex-direction: column;\n      gap: 8px;\n      align-items: flex-start;\n      .field {\n        width: 200px;\n        background: #fff;\n        border: 1px solid #ccc;\n        border-radius: 4px;\n        padding: 0 8px;\n        min-width: 160px;\n        -webkit-appearance: menulist-button; // ВАЖНО: чтобы в Safari работало свойство "height"\n        height: 32px;\n        font-size: 16px;\n      }\n    }\n  }\n  .area {\n    border: 3px dashed #aaa;\n    border-radius: 8px;\n    padding: 24px;\n  }\n}\n'],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={sandbox:"utils-module__sandbox__ee9",controls:"utils-module__controls__fc0",label:"utils-module__label__fc0",toggle:"utils-module__toggle__c08",field:"utils-module__field__d8e",select:"utils-module__select__a76",area:"utils-module__area__a41"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);