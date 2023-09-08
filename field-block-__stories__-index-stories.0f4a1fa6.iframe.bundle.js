"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[458],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Copy.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M6 2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 1 1-2 0V3H7a1 1 0 0 1-1-1ZM2 5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v8.5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5Zm2 1v6.5h6V6H4Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./src/field-block/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/field-block/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_quarks_icons_16x16_Stroked_Copy__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Copy.js"),_sima_land_ui_quarks_icons_16x16_Stroked_Lock__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Lock.js"),_storybook_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"service/FieldBlock",component:_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,parameters:{storySource:{source:"import { FieldBlock, FieldBlockProps, FieldBlockSize } from '@sima-land/ui-nucleons/field-block';\nimport { useState } from 'react';\nimport CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Copy';\nimport LockSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Lock';\nimport { Sandbox } from '../../../.storybook/utils';\nexport default {\n  title: 'service/FieldBlock',\n  component: FieldBlock,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  const [size, setSize] = useState<FieldBlockSize>('l');\n  const [disabled, setDisabled] = useState<boolean>(false);\n  const [focused, setFocused] = useState<boolean>(false);\n  const [failed, setFailed] = useState<boolean>(false);\n  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState<boolean>(false);\n  const commonProps: FieldBlockProps = {\n    size,\n    disabled,\n    focused,\n    failed,\n    labelAsPlaceholder,\n    caption: 'Example caption',\n    main: <>\n        <i>Some</i> <b>value</b>\n      </>\n  };\n  return <Sandbox controls={[{\n    type: 'select',\n    label: 'Размер',\n    options: ['s', 'm', 'l'],\n    bind: [size, setSize]\n  }, {\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Focused',\n    bind: [focused, setFocused]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }, {\n    type: 'toggle',\n    label: 'Label as placeholder',\n    bind: [labelAsPlaceholder, setLabelAsPlaceholder]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: 12,\n      flexDirection: 'column'\n    }}>\n        <FieldBlock {...commonProps} />\n\n        <FieldBlock {...commonProps} label='Label' />\n\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} />\n\n        <FieldBlock {...commonProps} label='Label' adornmentEnd={<LockSVG />} />\n\n        <FieldBlock {...commonProps} adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\n\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\n      </div>\n    </Sandbox>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  const [size, setSize] = useState<FieldBlockSize>('l');\\n  const [disabled, setDisabled] = useState<boolean>(false);\\n  const [focused, setFocused] = useState<boolean>(false);\\n  const [failed, setFailed] = useState<boolean>(false);\\n  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState<boolean>(false);\\n  const commonProps: FieldBlockProps = {\\n    size,\\n    disabled,\\n    focused,\\n    failed,\\n    labelAsPlaceholder,\\n    caption: 'Example caption',\\n    main: <>\\n        <i>Some</i> <b>value</b>\\n      </>\\n  };\\n  return <Sandbox controls={[{\\n    type: 'select',\\n    label: '\\u0420\\u0430\\u0437\\u043C\\u0435\\u0440',\\n    options: ['s', 'm', 'l'],\\n    bind: [size, setSize]\\n  }, {\\n    type: 'toggle',\\n    label: 'Disabled',\\n    bind: [disabled, setDisabled]\\n  }, {\\n    type: 'toggle',\\n    label: 'Focused',\\n    bind: [focused, setFocused]\\n  }, {\\n    type: 'toggle',\\n    label: 'Failed',\\n    bind: [failed, setFailed]\\n  }, {\\n    type: 'toggle',\\n    label: 'Label as placeholder',\\n    bind: [labelAsPlaceholder, setLabelAsPlaceholder]\\n  }]}>\\n      <div style={{\\n      display: 'flex',\\n      gap: 12,\\n      flexDirection: 'column'\\n    }}>\\n        <FieldBlock {...commonProps} />\\n\\n        <FieldBlock {...commonProps} label='Label' />\\n\\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} />\\n\\n        <FieldBlock {...commonProps} label='Label' adornmentEnd={<LockSVG />} />\\n\\n        <FieldBlock {...commonProps} adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\\n\\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\\n      </div>\\n    </Sandbox>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:13},endLoc:{col:1,line:70},startBody:{col:7,line:13},endBody:{col:1,line:70}}}},layout:"padded"}},Primary=function Primary(){const[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("l"),[disabled,setDisabled]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[failed,setFailed]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[labelAsPlaceholder,setLabelAsPlaceholder]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),commonProps={size,disabled,focused,failed,labelAsPlaceholder,caption:"Example caption",main:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("i",{children:"Some"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("b",{children:"value"})]})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_4__.pv,{controls:[{type:"select",label:"Размер",options:["s","m","l"],bind:[size,setSize]},{type:"toggle",label:"Disabled",bind:[disabled,setDisabled]},{type:"toggle",label:"Focused",bind:[focused,setFocused]},{type:"toggle",label:"Failed",bind:[failed,setFailed]},{type:"toggle",label:"Label as placeholder",bind:[labelAsPlaceholder,setLabelAsPlaceholder]}],children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div",{style:{display:"flex",gap:12,flexDirection:"column"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps,label:"Label"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps,label:"Label",adornmentStart:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Copy__WEBPACK_IMPORTED_MODULE_2__.Z,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps,label:"Label",adornmentEnd:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Lock__WEBPACK_IMPORTED_MODULE_3__.Z,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps,adornmentStart:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Copy__WEBPACK_IMPORTED_MODULE_2__.Z,{}),adornmentEnd:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Lock__WEBPACK_IMPORTED_MODULE_3__.Z,{})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_field_block__WEBPACK_IMPORTED_MODULE_0__.m5,{...commonProps,label:"Label",adornmentStart:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Copy__WEBPACK_IMPORTED_MODULE_2__.Z,{}),adornmentEnd:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_quarks_icons_16x16_Stroked_Lock__WEBPACK_IMPORTED_MODULE_3__.Z,{})})]})})};Primary.displayName="Primary",Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const [size, setSize] = useState<FieldBlockSize>('l');\n  const [disabled, setDisabled] = useState<boolean>(false);\n  const [focused, setFocused] = useState<boolean>(false);\n  const [failed, setFailed] = useState<boolean>(false);\n  const [labelAsPlaceholder, setLabelAsPlaceholder] = useState<boolean>(false);\n  const commonProps: FieldBlockProps = {\n    size,\n    disabled,\n    focused,\n    failed,\n    labelAsPlaceholder,\n    caption: 'Example caption',\n    main: <>\n        <i>Some</i> <b>value</b>\n      </>\n  };\n  return <Sandbox controls={[{\n    type: 'select',\n    label: 'Размер',\n    options: ['s', 'm', 'l'],\n    bind: [size, setSize]\n  }, {\n    type: 'toggle',\n    label: 'Disabled',\n    bind: [disabled, setDisabled]\n  }, {\n    type: 'toggle',\n    label: 'Focused',\n    bind: [focused, setFocused]\n  }, {\n    type: 'toggle',\n    label: 'Failed',\n    bind: [failed, setFailed]\n  }, {\n    type: 'toggle',\n    label: 'Label as placeholder',\n    bind: [labelAsPlaceholder, setLabelAsPlaceholder]\n  }]}>\n      <div style={{\n      display: 'flex',\n      gap: 12,\n      flexDirection: 'column'\n    }}>\n        <FieldBlock {...commonProps} />\n\n        <FieldBlock {...commonProps} label='Label' />\n\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} />\n\n        <FieldBlock {...commonProps} label='Label' adornmentEnd={<LockSVG />} />\n\n        <FieldBlock {...commonProps} adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\n\n        <FieldBlock {...commonProps} label='Label' adornmentStart={<CopySVG />} adornmentEnd={<LockSVG />} />\n      </div>\n    </Sandbox>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]}}]);