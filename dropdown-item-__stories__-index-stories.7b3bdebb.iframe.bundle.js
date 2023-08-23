"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4916],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm11-9a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/dropdown-item/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentStates:()=>DifferentStates,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dropdown-item/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_quarks_icons_24x24_Stroked_Placeholder__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder.js"),_storybook_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/DropdownItem",component:_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h,parameters:{storySource:{source:"import { DropdownItem, DropdownItemProps, DropdownItemSize } from '@sima-land/ui-nucleons/dropdown-item';\nimport { CSSProperties, useState } from 'react';\nimport PlaceholderSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Placeholder';\nimport { Sandbox } from '../../../.storybook/utils';\nexport default {\n  title: 'common/DropdownItem',\n  component: DropdownItem,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';\n  const style: CSSProperties = {\n    maxWidth: '400px'\n  };\n  return <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>\n      {longText}\n    </DropdownItem>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  backgrounds: {\n    default: 'custom:gray'\n  }\n};\nexport function DifferentStates() {\n  const [size, setSize] = useState<DropdownItemSize>('s');\n  const [state, setState] = useState<'default' | 'selected' | 'disabled'>('default');\n  const [noHover, setNoHover] = useState<boolean>(false);\n  const [startContent, setStartContent] = useState<boolean>(false);\n  const [endContent, setEndContent] = useState<boolean>(false);\n  const [comment, setComment] = useState<boolean>(true);\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.';\n  const props: DropdownItemProps = {\n    size,\n    disabled: state === 'disabled',\n    selected: state === 'selected',\n    noHover,\n    comment: comment ? longText : null,\n    startIcon: startContent ? PlaceholderSVG : undefined,\n    endContent: endContent ? 'Текст' : null\n  };\n  return <Sandbox controls={[{\n    type: 'select',\n    label: 'Размер',\n    bind: [size, setSize],\n    options: ['s', 'm', 'l', 'xl']\n  }, {\n    type: 'select',\n    label: 'Состояние',\n    bind: [state, setState],\n    options: ['default', 'selected', 'disabled']\n  }, {\n    type: 'toggle',\n    label: 'Отключить эффект при наведении',\n    bind: [noHover, setNoHover]\n  }, {\n    type: 'toggle',\n    label: 'С иконкой в начале',\n    bind: [startContent, setStartContent]\n  }, {\n    type: 'toggle',\n    label: 'С текстом в конце',\n    bind: [endContent, setEndContent]\n  }, {\n    type: 'toggle',\n    label: 'С комментарием',\n    bind: [comment, setComment],\n    hidden: size !== 'xl'\n  }]} areaStyle={{\n    background: '#ccc',\n    borderColor: '#ccc'\n  }}>\n      <DropdownItem {...props}>{longText}</DropdownItem>\n    </Sandbox>;\n}\nDifferentStates.storyName = 'Различные состояния';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';\\n  const style: CSSProperties = {\\n    maxWidth: '400px'\\n  };\\n  return <DropdownItem size='xl' style={style} endContent='\\u0422\\u0435\\u043A\\u0441\\u0442' comment={longText}>\\n      {longText}\\n    </DropdownItem>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nDifferentStates.parameters = {\n  ...DifferentStates.parameters,\n  docs: {\n    ...DifferentStates.parameters?.docs,\n    source: {\n      originalSource: \"function DifferentStates() {\\n  const [size, setSize] = useState<DropdownItemSize>('s');\\n  const [state, setState] = useState<'default' | 'selected' | 'disabled'>('default');\\n  const [noHover, setNoHover] = useState<boolean>(false);\\n  const [startContent, setStartContent] = useState<boolean>(false);\\n  const [endContent, setEndContent] = useState<boolean>(false);\\n  const [comment, setComment] = useState<boolean>(true);\\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.';\\n  const props: DropdownItemProps = {\\n    size,\\n    disabled: state === 'disabled',\\n    selected: state === 'selected',\\n    noHover,\\n    comment: comment ? longText : null,\\n    startIcon: startContent ? PlaceholderSVG : undefined,\\n    endContent: endContent ? '\\u0422\\u0435\\u043A\\u0441\\u0442' : null\\n  };\\n  return <Sandbox controls={[{\\n    type: 'select',\\n    label: '\\u0420\\u0430\\u0437\\u043C\\u0435\\u0440',\\n    bind: [size, setSize],\\n    options: ['s', 'm', 'l', 'xl']\\n  }, {\\n    type: 'select',\\n    label: '\\u0421\\u043E\\u0441\\u0442\\u043E\\u044F\\u043D\\u0438\\u0435',\\n    bind: [state, setState],\\n    options: ['default', 'selected', 'disabled']\\n  }, {\\n    type: 'toggle',\\n    label: '\\u041E\\u0442\\u043A\\u043B\\u044E\\u0447\\u0438\\u0442\\u044C \\u044D\\u0444\\u0444\\u0435\\u043A\\u0442 \\u043F\\u0440\\u0438 \\u043D\\u0430\\u0432\\u0435\\u0434\\u0435\\u043D\\u0438\\u0438',\\n    bind: [noHover, setNoHover]\\n  }, {\\n    type: 'toggle',\\n    label: '\\u0421 \\u0438\\u043A\\u043E\\u043D\\u043A\\u043E\\u0439 \\u0432 \\u043D\\u0430\\u0447\\u0430\\u043B\\u0435',\\n    bind: [startContent, setStartContent]\\n  }, {\\n    type: 'toggle',\\n    label: '\\u0421 \\u0442\\u0435\\u043A\\u0441\\u0442\\u043E\\u043C \\u0432 \\u043A\\u043E\\u043D\\u0446\\u0435',\\n    bind: [endContent, setEndContent]\\n  }, {\\n    type: 'toggle',\\n    label: '\\u0421 \\u043A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0435\\u043C',\\n    bind: [comment, setComment],\\n    hidden: size !== 'xl'\\n  }]} areaStyle={{\\n    background: '#ccc',\\n    borderColor: '#ccc'\\n  }}>\\n      <DropdownItem {...props}>{longText}</DropdownItem>\\n    </Sandbox>;\\n}\",\n      ...DifferentStates.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:20},startBody:{col:7,line:12},endBody:{col:1,line:20}},"different-states":{startLoc:{col:7,line:27},endLoc:{col:1,line:77},startBody:{col:7,line:27},endBody:{col:1,line:77}}}},layout:"padded"}},Primary=function Primary(){const longText="Lorem ipsum dolor sit amet consectetur adipisicing elit. ";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h,{size:"xl",style:{maxWidth:"400px"},endContent:"Текст",comment:longText,children:longText})};Primary.displayName="Primary",Primary.storyName="Простой пример",Primary.parameters={backgrounds:{default:"custom:gray"}};const DifferentStates=function DifferentStates(){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("s"),[state,setState]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("default"),[noHover,setNoHover]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[startContent,setStartContent]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[endContent,setEndContent]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[comment,setComment]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!0),longText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.",props={size,disabled:"disabled"===state,selected:"selected"===state,noHover,comment:comment?longText:null,startIcon:startContent?_sima_land_ui_quarks_icons_24x24_Stroked_Placeholder__WEBPACK_IMPORTED_MODULE_2__.Z:void 0,endContent:endContent?"Текст":null};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_3__.pv,{controls:[{type:"select",label:"Размер",bind:[size,setSize],options:["s","m","l","xl"]},{type:"select",label:"Состояние",bind:[state,setState],options:["default","selected","disabled"]},{type:"toggle",label:"Отключить эффект при наведении",bind:[noHover,setNoHover]},{type:"toggle",label:"С иконкой в начале",bind:[startContent,setStartContent]},{type:"toggle",label:"С текстом в конце",bind:[endContent,setEndContent]},{type:"toggle",label:"С комментарием",bind:[comment,setComment],hidden:"xl"!==size}],areaStyle:{background:"#ccc",borderColor:"#ccc"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h,{...props,children:longText})})};DifferentStates.displayName="DifferentStates",DifferentStates.storyName="Различные состояния",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';\n  const style: CSSProperties = {\n    maxWidth: '400px'\n  };\n  return <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>\n      {longText}\n    </DropdownItem>;\n}",...Primary.parameters?.docs?.source}}},DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const [size, setSize] = useState<DropdownItemSize>('s');\n  const [state, setState] = useState<'default' | 'selected' | 'disabled'>('default');\n  const [noHover, setNoHover] = useState<boolean>(false);\n  const [startContent, setStartContent] = useState<boolean>(false);\n  const [endContent, setEndContent] = useState<boolean>(false);\n  const [comment, setComment] = useState<boolean>(true);\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quia labore nam fugit libero tempore aliquam.';\n  const props: DropdownItemProps = {\n    size,\n    disabled: state === 'disabled',\n    selected: state === 'selected',\n    noHover,\n    comment: comment ? longText : null,\n    startIcon: startContent ? PlaceholderSVG : undefined,\n    endContent: endContent ? 'Текст' : null\n  };\n  return <Sandbox controls={[{\n    type: 'select',\n    label: 'Размер',\n    bind: [size, setSize],\n    options: ['s', 'm', 'l', 'xl']\n  }, {\n    type: 'select',\n    label: 'Состояние',\n    bind: [state, setState],\n    options: ['default', 'selected', 'disabled']\n  }, {\n    type: 'toggle',\n    label: 'Отключить эффект при наведении',\n    bind: [noHover, setNoHover]\n  }, {\n    type: 'toggle',\n    label: 'С иконкой в начале',\n    bind: [startContent, setStartContent]\n  }, {\n    type: 'toggle',\n    label: 'С текстом в конце',\n    bind: [endContent, setEndContent]\n  }, {\n    type: 'toggle',\n    label: 'С комментарием',\n    bind: [comment, setComment],\n    hidden: size !== 'xl'\n  }]} areaStyle={{\n    background: '#ccc',\n    borderColor: '#ccc'\n  }}>\n      <DropdownItem {...props}>{longText}</DropdownItem>\n    </Sandbox>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DifferentStates"]}}]);