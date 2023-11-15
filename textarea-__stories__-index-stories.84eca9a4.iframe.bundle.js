"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[9985],{"./src/textarea/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentStates:()=>DifferentStates,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/textarea/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_storybook_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Textarea",component:_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,parameters:{storySource:{source:"import { Textarea, TextareaProps } from '@sima-land/ui-nucleons/textarea';\nimport { useState } from 'react';\nimport { Sandbox } from '../../../.storybook/utils';\nexport default {\n  title: 'common/Textarea',\n  component: Textarea,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const [value, setValue] = useState('');\n  const limit = 250;\n  return <Textarea label='Текст отзыва' placeholder='Напишите, что вы думаете о товаре' value={value} onChange={e => setValue(e.target.value)} rootProps={{\n    style: {\n      '--field-width': '320px'\n    }\n  }} failed={value.length > limit} caption={`Максимальная длина - ${limit} символов`} />;\n}\nPrimary.storyName = 'Простой пример';\nexport function DifferentStates() {\n  const [value, setValue] = useState('');\n  const [disabled, setDisabled] = useState(false);\n  const [failed, setFailed] = useState(false);\n  const props: TextareaProps = {\n    disabled,\n    failed,\n    rootProps: {\n      style: {\n        '--field-width': '240px'\n      }\n    },\n    value,\n    onChange: e => setValue(e.target.value)\n  };\n  return <Sandbox controls={[{\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: '12px',\n      justifyContent: 'center'\n    }}>\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='Без label и без placeholder' />\n\n        <Textarea {...props} label={undefined} placeholder='Напишите, что-нибудь' caption='Только placeholder' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder={undefined} caption='Только label' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder='Напишите, что-нибудь' caption='Label и placeholder' />\n      </div>\n    </Sandbox>;\n}\nDifferentStates.storyName = 'Различные состояния';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const [value, setValue] = useState('');\\n  const limit = 250;\\n  return <Textarea label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430' placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E \\u0432\\u044B \\u0434\\u0443\\u043C\\u0430\\u0435\\u0442\\u0435 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' value={value} onChange={e => setValue(e.target.value)} rootProps={{\\n    style: {\\n      '--field-width': '320px'\\n    }\\n  }} failed={value.length > limit} caption={`\\u041C\\u0430\\u043A\\u0441\\u0438\\u043C\\u0430\\u043B\\u044C\\u043D\\u0430\\u044F \\u0434\\u043B\\u0438\\u043D\\u0430 - ${limit} \\u0441\\u0438\\u043C\\u0432\\u043E\\u043B\\u043E\\u0432`} />;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nDifferentStates.parameters = {\n  ...DifferentStates.parameters,\n  docs: {\n    ...DifferentStates.parameters?.docs,\n    source: {\n      originalSource: \"function DifferentStates() {\\n  const [value, setValue] = useState('');\\n  const [disabled, setDisabled] = useState(false);\\n  const [failed, setFailed] = useState(false);\\n  const props: TextareaProps = {\\n    disabled,\\n    failed,\\n    rootProps: {\\n      style: {\\n        '--field-width': '240px'\\n      }\\n    },\\n    value,\\n    onChange: e => setValue(e.target.value)\\n  };\\n  return <Sandbox controls={[{\\n    type: 'toggle',\\n    label: 'Disabled',\\n    bind: [disabled, setDisabled]\\n  }, {\\n    type: 'toggle',\\n    label: 'Failed',\\n    bind: [failed, setFailed]\\n  }]}>\\n      <div style={{\\n      display: 'flex',\\n      gap: '12px',\\n      justifyContent: 'center'\\n    }}>\\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='\\u0411\\u0435\\u0437 label \\u0438 \\u0431\\u0435\\u0437 placeholder' />\\n\\n        <Textarea {...props} label={undefined} placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E-\\u043D\\u0438\\u0431\\u0443\\u0434\\u044C' caption='\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E placeholder' />\\n\\n        <Textarea {...props} label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' placeholder={undefined} caption='\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E label' />\\n\\n        <Textarea {...props} label='\\u0422\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0430 \\u043E \\u0442\\u043E\\u0432\\u0430\\u0440\\u0435' placeholder='\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435, \\u0447\\u0442\\u043E-\\u043D\\u0438\\u0431\\u0443\\u0434\\u044C' caption='Label \\u0438 placeholder' />\\n      </div>\\n    </Sandbox>;\\n}\",\n      ...DifferentStates.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:19},startBody:{col:7,line:11},endBody:{col:1,line:19}},"different-states":{startLoc:{col:7,line:21},endLoc:{col:1,line:59},startBody:{col:7,line:21},endBody:{col:1,line:59}}}},layout:"padded"}},Primary=function Primary(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{label:"Текст отзыва",placeholder:"Напишите, что вы думаете о товаре",value,onChange:e=>setValue(e.target.value),rootProps:{style:{"--field-width":"320px"}},failed:value.length>250,caption:"Максимальная длина - 250 символов"})};Primary.displayName="Primary",Primary.storyName="Простой пример";const DifferentStates=function DifferentStates(){const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[disabled,setDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[failed,setFailed]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),props={disabled,failed,rootProps:{style:{"--field-width":"240px"}},value,onChange:e=>setValue(e.target.value)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_2__.pv,{controls:[{type:"toggle",label:"Disabled",bind:[disabled,setDisabled]},{type:"toggle",label:"Failed",bind:[failed,setFailed]}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"flex",gap:"12px",justifyContent:"center"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:void 0,placeholder:void 0,caption:"Без label и без placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:void 0,placeholder:"Напишите, что-нибудь",caption:"Только placeholder"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:"Текст отзыва о товаре",placeholder:void 0,caption:"Только label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_textarea__WEBPACK_IMPORTED_MODULE_0__.g,{...props,label:"Текст отзыва о товаре",placeholder:"Напишите, что-нибудь",caption:"Label и placeholder"})]})})};DifferentStates.displayName="DifferentStates",DifferentStates.storyName="Различные состояния",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [value, setValue] = useState('');\n  const limit = 250;\n  return <Textarea label='Текст отзыва' placeholder='Напишите, что вы думаете о товаре' value={value} onChange={e => setValue(e.target.value)} rootProps={{\n    style: {\n      '--field-width': '320px'\n    }\n  }} failed={value.length > limit} caption={`Максимальная длина - ${limit} символов`} />;\n}",...Primary.parameters?.docs?.source}}},DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const [value, setValue] = useState('');\n  const [disabled, setDisabled] = useState(false);\n  const [failed, setFailed] = useState(false);\n  const props: TextareaProps = {\n    disabled,\n    failed,\n    rootProps: {\n      style: {\n        '--field-width': '240px'\n      }\n    },\n    value,\n    onChange: e => setValue(e.target.value)\n  };\n  return <Sandbox controls={[{\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: '12px',\n      justifyContent: 'center'\n    }}>\n        <Textarea {...props} label={undefined} placeholder={undefined} caption='Без label и без placeholder' />\n\n        <Textarea {...props} label={undefined} placeholder='Напишите, что-нибудь' caption='Только placeholder' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder={undefined} caption='Только label' />\n\n        <Textarea {...props} label='Текст отзыва о товаре' placeholder='Напишите, что-нибудь' caption='Label и placeholder' />\n      </div>\n    </Sandbox>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DifferentStates"]}}]);