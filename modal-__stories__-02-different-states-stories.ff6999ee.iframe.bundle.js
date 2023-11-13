"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[683],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M11.707 3.293a1 1 0 0 1 0 1.414L4.414 12l7.293 7.293a1 1 0 0 1-1.414 1.414l-8-8a1 1 0 0 1 0-1.414l8-8a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3 12a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M20.707 3.293a1 1 0 0 1 0 1.414l-16 16a1 1 0 0 1-1.414-1.414l16-16a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.293 3.293a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1-1.414 1.414l-16-16a1 1 0 0 1 0-1.414Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/modal/__stories__/02-different-states.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentStates:()=>DifferentStates,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/modal/index.ts"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.tsx"),_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/top-bar/index.ts"),_sima_land_ui_nucleons_bottom_bar__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/bottom-bar/index.ts"),_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/clean-buttons/index.tsx"),_sima_land_ui_nucleons_hooks_keydown__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/hooks/keydown.ts"),_storybook_utils__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Modal",component:_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,parameters:{storySource:{source:"import { Modal, ModalBody, ModalBottomGap, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';\nimport { useState } from 'react';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';\nimport { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';\nimport { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';\nimport { useKeydown } from '@sima-land/ui-nucleons/hooks/keydown';\nimport { LoremIpsum, Sandbox } from '../../../.storybook/utils';\nexport default {\n  title: 'common/Modal',\n  component: Modal,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function DifferentStates() {\n  const [open, setOpen] = useState<boolean>(false);\n  const [size, setSize] = useState<any>('m');\n  const [header, setHeader] = useState<string>('top-bar');\n  const [footer, setFooter] = useState<string>('buttons');\n  useKeydown('Escape', () => {\n    setOpen(false);\n  });\n  return <Sandbox controls={[{\n    label: 'Размер',\n    type: 'select',\n    bind: [size, setSize],\n    options: [{\n      value: 's',\n      displayName: 'S'\n    }, {\n      value: 'm',\n      displayName: 'M'\n    }, {\n      value: 'l',\n      displayName: 'L'\n    }, {\n      value: 'xl',\n      displayName: 'XL'\n    }, {\n      value: 'fullscreen',\n      displayName: 'Fullscreen'\n    }]\n  }, {\n    label: 'Шапка',\n    type: 'select',\n    bind: [header, setHeader],\n    options: [{\n      value: 'none',\n      displayName: 'Нет'\n    }, {\n      value: 'top-bar',\n      displayName: 'TopBar'\n    }]\n  }, {\n    label: 'Подвал',\n    type: 'select',\n    bind: [footer, setFooter],\n    options: [{\n      displayName: 'Нет',\n      value: 'none'\n    }, {\n      displayName: 'Кнопки',\n      value: 'buttons'\n    }, {\n      displayName: 'Прозрачные кнопки',\n      value: 'clean-buttons'\n    }, {\n      displayName: 'Отступ по гайдам',\n      value: 'gap'\n    }]\n  }]}>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal {...getResponsiveModalProps({\n      size\n    })} onClose={() => setOpen(false)}>\n          {header === 'top-bar' && <TopBar size='unset' title='Тестовое окно' divided buttons={navigationButtons({\n        onClose: () => setOpen(false)\n      })} />}\n\n          <ModalBody style={{\n        padding: '24px'\n      }}>\n            <LoremIpsum paragraphCount={32} />\n          </ModalBody>\n\n          {footer === 'buttons' && <BottomBar size='unset' divided>\n              <div style={{\n          width: '100%',\n          display: 'flex',\n          gap: '12px',\n          padding: '16px'\n        }}>\n                <Button style={{\n            flexGrow: 1\n          }} viewType='primary'>\n                  Кнопка\n                </Button>\n                <Button style={{\n            flexGrow: 1\n          }} viewType='secondary'>\n                  Кнопка\n                </Button>\n              </div>\n            </BottomBar>}\n\n          {footer === 'clean-buttons' && <BottomBar size='unset' divided>\n              <CleanGroup>\n                <CleanButton>Кнопка</CleanButton>\n                <CleanButton>Кнопка</CleanButton>\n              </CleanGroup>\n            </BottomBar>}\n\n          {footer === 'gap' && <ModalBottomGap />}\n        </Modal>}\n    </Sandbox>;\n}\nDifferentStates.storyName = 'Различные состояния';\nDifferentStates.parameters = {\n  ...DifferentStates.parameters,\n  docs: {\n    ...DifferentStates.parameters?.docs,\n    source: {\n      originalSource: \"function DifferentStates() {\\n  const [open, setOpen] = useState<boolean>(false);\\n  const [size, setSize] = useState<any>('m');\\n  const [header, setHeader] = useState<string>('top-bar');\\n  const [footer, setFooter] = useState<string>('buttons');\\n  useKeydown('Escape', () => {\\n    setOpen(false);\\n  });\\n  return <Sandbox controls={[{\\n    label: '\\u0420\\u0430\\u0437\\u043C\\u0435\\u0440',\\n    type: 'select',\\n    bind: [size, setSize],\\n    options: [{\\n      value: 's',\\n      displayName: 'S'\\n    }, {\\n      value: 'm',\\n      displayName: 'M'\\n    }, {\\n      value: 'l',\\n      displayName: 'L'\\n    }, {\\n      value: 'xl',\\n      displayName: 'XL'\\n    }, {\\n      value: 'fullscreen',\\n      displayName: 'Fullscreen'\\n    }]\\n  }, {\\n    label: '\\u0428\\u0430\\u043F\\u043A\\u0430',\\n    type: 'select',\\n    bind: [header, setHeader],\\n    options: [{\\n      value: 'none',\\n      displayName: '\\u041D\\u0435\\u0442'\\n    }, {\\n      value: 'top-bar',\\n      displayName: 'TopBar'\\n    }]\\n  }, {\\n    label: '\\u041F\\u043E\\u0434\\u0432\\u0430\\u043B',\\n    type: 'select',\\n    bind: [footer, setFooter],\\n    options: [{\\n      displayName: '\\u041D\\u0435\\u0442',\\n      value: 'none'\\n    }, {\\n      displayName: '\\u041A\\u043D\\u043E\\u043F\\u043A\\u0438',\\n      value: 'buttons'\\n    }, {\\n      displayName: '\\u041F\\u0440\\u043E\\u0437\\u0440\\u0430\\u0447\\u043D\\u044B\\u0435 \\u043A\\u043D\\u043E\\u043F\\u043A\\u0438',\\n      value: 'clean-buttons'\\n    }, {\\n      displayName: '\\u041E\\u0442\\u0441\\u0442\\u0443\\u043F \\u043F\\u043E \\u0433\\u0430\\u0439\\u0434\\u0430\\u043C',\\n      value: 'gap'\\n    }]\\n  }]}>\\n      <Button size='s' onClick={() => setOpen(true)}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C \\u043E\\u043A\\u043D\\u043E\\n      </Button>\\n\\n      {open && <Modal {...getResponsiveModalProps({\\n      size\\n    })} onClose={() => setOpen(false)}>\\n          {header === 'top-bar' && <TopBar size='unset' title='\\u0422\\u0435\\u0441\\u0442\\u043E\\u0432\\u043E\\u0435 \\u043E\\u043A\\u043D\\u043E' divided buttons={navigationButtons({\\n        onClose: () => setOpen(false)\\n      })} />}\\n\\n          <ModalBody style={{\\n        padding: '24px'\\n      }}>\\n            <LoremIpsum paragraphCount={32} />\\n          </ModalBody>\\n\\n          {footer === 'buttons' && <BottomBar size='unset' divided>\\n              <div style={{\\n          width: '100%',\\n          display: 'flex',\\n          gap: '12px',\\n          padding: '16px'\\n        }}>\\n                <Button style={{\\n            flexGrow: 1\\n          }} viewType='primary'>\\n                  \\u041A\\u043D\\u043E\\u043F\\u043A\\u0430\\n                </Button>\\n                <Button style={{\\n            flexGrow: 1\\n          }} viewType='secondary'>\\n                  \\u041A\\u043D\\u043E\\u043F\\u043A\\u0430\\n                </Button>\\n              </div>\\n            </BottomBar>}\\n\\n          {footer === 'clean-buttons' && <BottomBar size='unset' divided>\\n              <CleanGroup>\\n                <CleanButton>\\u041A\\u043D\\u043E\\u043F\\u043A\\u0430</CleanButton>\\n                <CleanButton>\\u041A\\u043D\\u043E\\u043F\\u043A\\u0430</CleanButton>\\n              </CleanGroup>\\n            </BottomBar>}\\n\\n          {footer === 'gap' && <ModalBottomGap />}\\n        </Modal>}\\n    </Sandbox>;\\n}\",\n      ...DifferentStates.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"different-states":{startLoc:{col:7,line:16},endLoc:{col:1,line:120},startBody:{col:7,line:16},endBody:{col:1,line:120}}}},layout:"padded"}},DifferentStates=function DifferentStates(){const[open,setOpen]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[size,setSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("m"),[header,setHeader]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("top-bar"),[footer,setFooter]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("buttons");return(0,_sima_land_ui_nucleons_hooks_keydown__WEBPACK_IMPORTED_MODULE_6__.N)("Escape",(()=>{setOpen(!1)})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_storybook_utils__WEBPACK_IMPORTED_MODULE_7__.pv,{controls:[{label:"Размер",type:"select",bind:[size,setSize],options:[{value:"s",displayName:"S"},{value:"m",displayName:"M"},{value:"l",displayName:"L"},{value:"xl",displayName:"XL"},{value:"fullscreen",displayName:"Fullscreen"}]},{label:"Шапка",type:"select",bind:[header,setHeader],options:[{value:"none",displayName:"Нет"},{value:"top-bar",displayName:"TopBar"}]},{label:"Подвал",type:"select",bind:[footer,setFooter],options:[{displayName:"Нет",value:"none"},{displayName:"Кнопки",value:"buttons"},{displayName:"Прозрачные кнопки",value:"clean-buttons"},{displayName:"Отступ по гайдам",value:"gap"}]}],children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>setOpen(!0),children:"Показать окно"}),open&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.u_,{...(0,_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.B1)({size}),onClose:()=>setOpen(!1),children:["top-bar"===header&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.Du,{size:"unset",title:"Тестовое окно",divided:!0,buttons:(0,_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_3__.JN)({onClose:()=>setOpen(!1)})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.fe,{style:{padding:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_7__.Ap,{paragraphCount:32})}),"buttons"===footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_bottom_bar__WEBPACK_IMPORTED_MODULE_4__._E,{size:"unset",divided:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{style:{width:"100%",display:"flex",gap:"12px",padding:"16px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{style:{flexGrow:1},viewType:"primary",children:"Кнопка"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{style:{flexGrow:1},viewType:"secondary",children:"Кнопка"})]})}),"clean-buttons"===footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_bottom_bar__WEBPACK_IMPORTED_MODULE_4__._E,{size:"unset",divided:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_5__.WB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_5__.ux,{children:"Кнопка"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_5__.ux,{children:"Кнопка"})]})}),"gap"===footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_sima_land_ui_nucleons_modal__WEBPACK_IMPORTED_MODULE_0__.Mz,{})]})]})};DifferentStates.displayName="DifferentStates",DifferentStates.storyName="Различные состояния",DifferentStates.parameters={...DifferentStates.parameters,docs:{...DifferentStates.parameters?.docs,source:{originalSource:"function DifferentStates() {\n  const [open, setOpen] = useState<boolean>(false);\n  const [size, setSize] = useState<any>('m');\n  const [header, setHeader] = useState<string>('top-bar');\n  const [footer, setFooter] = useState<string>('buttons');\n  useKeydown('Escape', () => {\n    setOpen(false);\n  });\n  return <Sandbox controls={[{\n    label: 'Размер',\n    type: 'select',\n    bind: [size, setSize],\n    options: [{\n      value: 's',\n      displayName: 'S'\n    }, {\n      value: 'm',\n      displayName: 'M'\n    }, {\n      value: 'l',\n      displayName: 'L'\n    }, {\n      value: 'xl',\n      displayName: 'XL'\n    }, {\n      value: 'fullscreen',\n      displayName: 'Fullscreen'\n    }]\n  }, {\n    label: 'Шапка',\n    type: 'select',\n    bind: [header, setHeader],\n    options: [{\n      value: 'none',\n      displayName: 'Нет'\n    }, {\n      value: 'top-bar',\n      displayName: 'TopBar'\n    }]\n  }, {\n    label: 'Подвал',\n    type: 'select',\n    bind: [footer, setFooter],\n    options: [{\n      displayName: 'Нет',\n      value: 'none'\n    }, {\n      displayName: 'Кнопки',\n      value: 'buttons'\n    }, {\n      displayName: 'Прозрачные кнопки',\n      value: 'clean-buttons'\n    }, {\n      displayName: 'Отступ по гайдам',\n      value: 'gap'\n    }]\n  }]}>\n      <Button size='s' onClick={() => setOpen(true)}>\n        Показать окно\n      </Button>\n\n      {open && <Modal {...getResponsiveModalProps({\n      size\n    })} onClose={() => setOpen(false)}>\n          {header === 'top-bar' && <TopBar size='unset' title='Тестовое окно' divided buttons={navigationButtons({\n        onClose: () => setOpen(false)\n      })} />}\n\n          <ModalBody style={{\n        padding: '24px'\n      }}>\n            <LoremIpsum paragraphCount={32} />\n          </ModalBody>\n\n          {footer === 'buttons' && <BottomBar size='unset' divided>\n              <div style={{\n          width: '100%',\n          display: 'flex',\n          gap: '12px',\n          padding: '16px'\n        }}>\n                <Button style={{\n            flexGrow: 1\n          }} viewType='primary'>\n                  Кнопка\n                </Button>\n                <Button style={{\n            flexGrow: 1\n          }} viewType='secondary'>\n                  Кнопка\n                </Button>\n              </div>\n            </BottomBar>}\n\n          {footer === 'clean-buttons' && <BottomBar size='unset' divided>\n              <CleanGroup>\n                <CleanButton>Кнопка</CleanButton>\n                <CleanButton>Кнопка</CleanButton>\n              </CleanGroup>\n            </BottomBar>}\n\n          {footer === 'gap' && <ModalBottomGap />}\n        </Modal>}\n    </Sandbox>;\n}",...DifferentStates.parameters?.docs?.source}}};const __namedExportsOrder=["DifferentStates"]},"./src/clean-buttons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ux:()=>CleanButton,WB:()=>CleanGroup});var react=__webpack_require__("./node_modules/react/index.js"),src_link=__webpack_require__("./src/link/index.tsx"),utils=__webpack_require__("./src/clean-buttons/utils.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),clean_buttons_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/clean-buttons/clean-buttons.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(clean_buttons_module.Z,options);const clean_buttons_clean_buttons_module=clean_buttons_module.Z&&clean_buttons_module.Z.locals?clean_buttons_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(clean_buttons_clean_buttons_module);function CleanGroup({size:sizeFromProps,children}){const sizeFromContext=(0,react.useContext)(utils.O),size=sizeFromProps||sizeFromContext;return(0,jsx_runtime.jsx)("div",{className:cx("group"),children:react.Children.toArray(children).map((item=>(0,react.isValidElement)(item)&&item.type===CleanButton?(0,react.cloneElement)(item,{size}):null))})}function CleanButton({size="s",href,asLink=Boolean(href),"data-testid":testId="clean-button",children,className,...rest}){return(0,jsx_runtime.jsx)(src_link.r,{...rest,className:cx("button",`size-${size}`,className),pseudo:!asLink,href,"data-testid":testId,children})}CleanGroup.displayName="CleanGroup",CleanButton.displayName="CleanButton";try{CleanGroup.displayName="CleanGroup",CleanGroup.__docgenInfo={description:"Группа прозрачных кнопок.",displayName:"CleanGroup",props:{size:{defaultValue:null,description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanGroup"]={docgenInfo:CleanGroup.__docgenInfo,name:"CleanGroup",path:"src/clean-buttons/index.tsx#CleanGroup"})}catch(__react_docgen_typescript_loader_error){}try{CleanButton.displayName="CleanButton",CleanButton.__docgenInfo={description:"Прозрачная кнопка.",displayName:"CleanButton",props:{asLink:{defaultValue:{value:"Boolean(href)"},description:"",name:"asLink",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"s"},description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},color:{defaultValue:null,description:"Цвет (название токена).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray38"'},{value:'"basic-white"'},{value:'"additional-red"'},{value:'"additional-teal"'}]}},noIndex:{defaultValue:null,description:"Нужно ли оборачивать содержимое комментариями no-index.\n@deprecated",name:"noIndex",required:!1,type:{name:"boolean | undefined"}},pseudo:{defaultValue:null,description:"Выводить как псевдо-ссылку.",name:"pseudo",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключает ссылку подобно кнопке.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},underline:{defaultValue:null,description:"Нужно ли подчеркивание.",name:"underline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanButton"]={docgenInfo:CleanButton.__docgenInfo,name:"CleanButton",path:"src/clean-buttons/index.tsx#CleanButton"})}catch(__react_docgen_typescript_loader_error){}try{CleanButtonSize.displayName="CleanButtonSize",CleanButtonSize.__docgenInfo={description:"Размер прозрачных кнопок (высота) по дизайн-гайдам.",displayName:"CleanButtonSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanButtonSize"]={docgenInfo:CleanButtonSize.__docgenInfo,name:"CleanButtonSize",path:"src/clean-buttons/index.tsx#CleanButtonSize"})}catch(__react_docgen_typescript_loader_error){}},"./src/hooks/keydown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useKeydown});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts");function useKeydown(targetKey,callback){const ref=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document,"keydown",(event=>{const handler=ref.current;(event.key===targetKey||event.code===targetKey)&&handler?.(event)}))),[targetKey])}},"./src/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),link_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(link_module.Z,options);const link_link_module=link_module.Z&&link_module.Z.locals?link_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(link_link_module),getContentProps=(children,noIndex)=>{return noIndex?{dangerouslySetInnerHTML:(content=children,content?{__html:`\x3c!--noindex--\x3e${String(content)}\x3c!--/noindex--\x3e`}:void 0)}:{children};var content},Link=(0,react.forwardRef)((function Link({children,className,color="basic-blue",disabled,noIndex=!1,pseudo,role,tabIndex,underline,"data-testid":testId="anchor",...restProps},ref){const baseProps=pseudo?{role:role||"button",tabIndex:disabled?void 0:tabIndex||0}:{role,tabIndex};return(0,jsx_runtime.jsx)("a",{...baseProps,...restProps,"data-testid":testId,ref,className:cx("link",className,color,{disabled,underline}),...getContentProps(children,noIndex)})}));try{Link.displayName="Link",Link.__docgenInfo={description:"Ссылка.",displayName:"Link",props:{color:{defaultValue:{value:"basic-blue"},description:"Цвет (название токена).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray38"'},{value:'"basic-white"'},{value:'"additional-red"'},{value:'"additional-teal"'}]}},noIndex:{defaultValue:{value:"false"},description:"Нужно ли оборачивать содержимое комментариями no-index.\n@deprecated",name:"noIndex",required:!1,type:{name:"boolean | undefined"}},pseudo:{defaultValue:null,description:"Выводить как псевдо-ссылку.",name:"pseudo",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключает ссылку подобно кнопке.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},underline:{defaultValue:null,description:"Нужно ли подчеркивание.",name:"underline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/clean-buttons/clean-buttons.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".clean-buttons-module__group__dab{display:flex;flex-wrap:nowrap;overflow:hidden;width:100%}.clean-buttons-module__group__dab .clean-buttons-module__button__c25{flex-grow:1;flex-shrink:1;flex-basis:0}.clean-buttons-module__group__dab .clean-buttons-module__button__c25+.clean-buttons-module__button__c25{border-left:1px solid #e0e0e0}.clean-buttons-module__button__c25{display:flex;align-items:center;justify-content:center;font-family:inherit;font-weight:600 !important;font-size:16px;line-height:24px;overflow:hidden;height:var(--clean-group-height)}.clean-buttons-module__size-s__c24{--clean-group-height: 64px}.clean-buttons-module__size-m__eb9{--clean-group-height: 72px}.clean-buttons-module__size-l__a30{--clean-group-height: 80px}","",{version:3,sources:["webpack://./src/clean-buttons/clean-buttons.module.scss","webpack://./src/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAGA,kCACE,YAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,qEACE,WAAA,CACA,aAAA,CACA,YAAA,CACA,wGACE,6BAAA,CAKN,mCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,mBAAA,CAGA,0BAAA,CAEA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,gCAAA,CAGF,mCC5BE,0BAAA,CDgCF,mCC5BE,0BAAA,CDgCF,mCC5BE,0BAAA",sourcesContent:["@use '../colors';\n@use './clean-buttons-util';\n\n.group {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  width: 100%;\n  .button {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    + .button {\n      border-left: 1px solid colors.$basic-gray12;\n    }\n  }\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: inherit;\n\n  // перебиваем стили Link (font-weight: inherit) чтобы не менять их так как компонент много где используется\n  font-weight: 600 !important;\n\n  font-size: 16px;\n  line-height: 24px;\n  overflow: hidden;\n  height: var(--clean-group-height);\n}\n\n.size-s {\n  @include clean-buttons-util.size-s;\n}\n\n.size-m {\n  @include clean-buttons-util.size-m;\n}\n\n.size-l {\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={group:"clean-buttons-module__group__dab",button:"clean-buttons-module__button__c25","size-s":"clean-buttons-module__size-s__c24","size-m":"clean-buttons-module__size-m__eb9","size-l":"clean-buttons-module__size-l__a30"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".link-module__link__f6d,.link-module__link__f6d:link,.link-module__link__f6d:visited,.link-module__link__f6d:hover,.link-module__link__f6d:active{text-decoration:none;font-weight:inherit;cursor:default;border-bottom-color:rgba(0,0,0,0)}.link-module__link__f6d.link-module__underline__f9d,.link-module__link__f6d:link.link-module__underline__f9d,.link-module__link__f6d:visited.link-module__underline__f9d,.link-module__link__f6d:hover.link-module__underline__f9d,.link-module__link__f6d:active.link-module__underline__f9d{text-decoration:underline}.link-module__link__f6d:hover{cursor:pointer}.link-module__link__f6d.link-module__disabled__ad5{color:#c2c2c2;pointer-events:none}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-blue__b61{color:#1f84db}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-blue__b61:hover{color:#00599d}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray87__a85{color:#212121}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray87__a85:hover{color:#757575}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray38__c45{color:#9e9e9e}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray38__c45:hover{color:#757575}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-white__da4{color:#fff}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-white__da4:hover{color:#f5f5f5}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-red__a3d{color:#fb3a2f}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-red__a3d:hover{color:#d50000}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-teal__bb3{color:#09ab8b}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-teal__bb3:hover{color:#00c853}","",{version:3,sources:["webpack://./src/link/link.module.scss","webpack://./src/colors.scss","webpack://./src/link/link-util.scss"],names:[],mappings:"AAGA,kJAKE,oBAAA,CACA,mBAAA,CACA,cAAA,CACA,iCAAA,CACA,8RACE,yBAAA,CAIJ,8BACE,cAAA,CAIF,mDACE,aCda,CDeb,mBAAA,CAGF,sFEvBI,aDDS,CCET,4FACE,aDkCiB,CDTvB,wFEtBI,aDLW,CCMX,8FACE,aDJS,CD4Bf,wFErBI,aDNW,CCOX,8FACE,aDTS,CDgCf,uFEpBI,UDLU,CCMV,6FACE,aDTQ,CD+Bd,0FEnBI,aDNa,CCOb,gGACE,aDTgB,CD8BtB,2FElBI,aDRc,CCSd,iGACE,aDTa",sourcesContent:["@use '../colors';\n@use './link-util';\n\n.link,\n.link:link,\n.link:visited,\n.link:hover,\n.link:active {\n  text-decoration: none;\n  font-weight: inherit; // @todo выяснить можно ли это убрать\n  cursor: default;\n  border-bottom-color: transparent;\n  &.underline {\n    text-decoration: underline;\n  }\n}\n\n.link:hover {\n  cursor: pointer;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.link.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.link:not(.disabled).basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.link:not(.disabled).basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.link:not(.disabled).basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.link:not(.disabled).basic-white {\n  @include link-util.color('basic-white');\n}\n\n.link:not(.disabled).additional-red {\n  @include link-util.color('additional-red');\n}\n\n.link:not(.disabled).additional-teal {\n  @include link-util.color('additional-teal');\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link-module__link__f6d",underline:"link-module__underline__f9d",disabled:"link-module__disabled__ad5","basic-blue":"link-module__basic-blue__b61","basic-gray87":"link-module__basic-gray87__a85","basic-gray38":"link-module__basic-gray38__c45","basic-white":"link-module__basic-white__da4","additional-red":"link-module__additional-red__a3d","additional-teal":"link-module__additional-teal__bb3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);