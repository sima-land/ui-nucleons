/*! For license information please see checkbox-field-__stories__-index-stories.3a5eec25.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2300],{"./src/checkbox-field/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,SmallText:()=>SmallText,Toggle:()=>Toggle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),src_checkbox=__webpack_require__("./src/checkbox/index.tsx"),toggle=__webpack_require__("./src/toggle/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),checkbox_field_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/checkbox-field/checkbox-field.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(checkbox_field_module.Z,options);const checkbox_field_checkbox_field_module=checkbox_field_module.Z&&checkbox_field_module.Z.locals?checkbox_field_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(checkbox_field_checkbox_field_module),CheckboxField=(0,react.forwardRef)((function CheckboxField({smallText,fieldView="checkbox",label,info,failed,"data-testid":testId="checkbox-field",style,className,id,disabled,...restProps},ref){const inputProps={id,disabled,...restProps};return(0,jsx_runtime.jsxs)("div",{className:cx("root",`field-${fieldView}`,{failed,disabled,"small-text":smallText},className),style,"data-testid":testId,children:[(0,jsx_runtime.jsxs)("div",{className:cx("field-row"),children:["checkbox"===fieldView&&(0,jsx_runtime.jsx)(src_checkbox.X,{...inputProps,ref}),"toggle"===fieldView&&(0,jsx_runtime.jsx)(toggle.Z,{...inputProps,ref})]}),(0,jsx_runtime.jsxs)("label",{htmlFor:id,children:[(0,jsx_runtime.jsx)("span",{className:cx("label"),"data-testid":"checkbox-field:label",children:label}),info&&(0,jsx_runtime.jsx)("span",{className:cx("info"),children:info})]})]})}));try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{label:{defaultValue:null,description:"Содержимое ярлыка.",name:"label",required:!0,type:{name:"string"}},info:{defaultValue:null,description:"Содержимое описания.",name:"info",required:!1,type:{name:"string | undefined"}},failed:{defaultValue:null,description:"Нужно ли показывать наличие ошибки.",name:"failed",required:!1,type:{name:"boolean | undefined"}},smallText:{defaultValue:null,description:'Нужно ли выводить текст для "checkbox" мелким.',name:"smallText",required:!1,type:{name:"boolean | undefined"}},fieldView:{defaultValue:{value:"checkbox"},description:"Отображаемое поле.",name:"fieldView",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"toggle"'},{value:'"checkbox"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox-field/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/checkbox-field/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"deprecated/CheckboxField",component:CheckboxField,parameters:{storySource:{source:"import { CheckboxField, CheckboxFieldProps } from '@sima-land/ui-nucleons/checkbox-field';\nexport default {\n  title: 'deprecated/CheckboxField',\n  component: CheckboxField,\n  parameters: {\n    layout: 'padded'\n  }\n};\nfunction Demo(props: Partial<CheckboxFieldProps>) {\n  return <>\n      <h3>Ярлык</h3>\n      <div>\n        <CheckboxField {...props} id='label-only' label='Оставить отзыв анонимно' />\n      </div>\n\n      <h3>Ярлык + комментарий</h3>\n      <div>\n        <CheckboxField {...props} id='label-and-info' label='Оставить отзыв анонимно' info='По умолчанию отзыв будет оставлен от вашего имени' />\n      </div>\n\n      <h3>Disabled</h3>\n      <div>\n        <CheckboxField {...props} id='disabled' label='Оставить отзыв анонимно' info='По умолчанию отзыв будет оставлен от вашего имени' disabled />\n      </div>\n\n      <h3>Checked + Disabled</h3>\n      <div>\n        <CheckboxField {...props} id='disabled' label='Оставить отзыв анонимно' info='По умолчанию отзыв будет оставлен от вашего имени' disabled checked />\n      </div>\n\n      <h3>Failed</h3>\n      <div>\n        <CheckboxField {...props} id='failed' label='Оставить отзыв анонимно' info='По умолчанию отзыв будет оставлен от вашего имени' failed />\n      </div>\n\n      <h3>Много текста</h3>\n      <div style={{\n      maxWidth: 240\n    }}>\n        <CheckboxField {...props} id='lot-of-text' label={`\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n            Expedita ipsum nisi nobis ratione.\n          `.trim()} info={`\n            Dolor sit amet consectetur adipisicing elit.\n            Expedita ipsum nisi nobis ratione.\n          `.trim()} />\n      </div>\n    </>;\n}\nexport function Primary() {\n  return <Demo />;\n}\nPrimary.storyName = 'Простой пример';\nexport function SmallText() {\n  return <Demo smallText />;\n}\nSmallText.storyName = 'Маленький текст';\nexport function Toggle() {\n  return <Demo fieldView='toggle' />;\n}\nToggle.storyName = 'Toggle вместо Checkbox';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <Demo />;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nSmallText.parameters = {\n  ...SmallText.parameters,\n  docs: {\n    ...SmallText.parameters?.docs,\n    source: {\n      originalSource: \"function SmallText() {\\n  return <Demo smallText />;\\n}\",\n      ...SmallText.parameters?.docs?.source\n    }\n  }\n};\nToggle.parameters = {\n  ...Toggle.parameters,\n  docs: {\n    ...Toggle.parameters?.docs,\n    source: {\n      originalSource: \"function Toggle() {\\n  return <Demo fieldView='toggle' />;\\n}\",\n      ...Toggle.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:50},endLoc:{col:1,line:52},startBody:{col:7,line:50},endBody:{col:1,line:52}},"small-text":{startLoc:{col:7,line:54},endLoc:{col:1,line:56},startBody:{col:7,line:54},endBody:{col:1,line:56}},toggle:{startLoc:{col:7,line:58},endLoc:{col:1,line:60},startBody:{col:7,line:58},endBody:{col:1,line:60}}}},layout:"padded"}};function Demo(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{children:"Ярлык"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"label-only",label:"Оставить отзыв анонимно"})}),(0,jsx_runtime.jsx)("h3",{children:"Ярлык + комментарий"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"label-and-info",label:"Оставить отзыв анонимно",info:"По умолчанию отзыв будет оставлен от вашего имени"})}),(0,jsx_runtime.jsx)("h3",{children:"Disabled"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"disabled",label:"Оставить отзыв анонимно",info:"По умолчанию отзыв будет оставлен от вашего имени",disabled:!0})}),(0,jsx_runtime.jsx)("h3",{children:"Checked + Disabled"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"disabled",label:"Оставить отзыв анонимно",info:"По умолчанию отзыв будет оставлен от вашего имени",disabled:!0,checked:!0})}),(0,jsx_runtime.jsx)("h3",{children:"Failed"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"failed",label:"Оставить отзыв анонимно",info:"По умолчанию отзыв будет оставлен от вашего имени",failed:!0})}),(0,jsx_runtime.jsx)("h3",{children:"Много текста"}),(0,jsx_runtime.jsx)("div",{style:{maxWidth:240},children:(0,jsx_runtime.jsx)(CheckboxField,{...props,id:"lot-of-text",label:"\n            Lorem ipsum dolor sit amet consectetur adipisicing elit.\n            Expedita ipsum nisi nobis ratione.\n          ".trim(),info:"\n            Dolor sit amet consectetur adipisicing elit.\n            Expedita ipsum nisi nobis ratione.\n          ".trim()})})]})}const Primary=function Primary(){return(0,jsx_runtime.jsx)(Demo,{})};Primary.displayName="Primary",Primary.storyName="Простой пример";const SmallText=function SmallText(){return(0,jsx_runtime.jsx)(Demo,{smallText:!0})};SmallText.displayName="SmallText",SmallText.storyName="Маленький текст";const Toggle=function Toggle(){return(0,jsx_runtime.jsx)(Demo,{fieldView:"toggle"})};Toggle.displayName="Toggle",Toggle.storyName="Toggle вместо Checkbox",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <Demo />;\n}",...Primary.parameters?.docs?.source}}},SmallText.parameters={...SmallText.parameters,docs:{...SmallText.parameters?.docs,source:{originalSource:"function SmallText() {\n  return <Demo smallText />;\n}",...SmallText.parameters?.docs?.source}}},Toggle.parameters={...Toggle.parameters,docs:{...Toggle.parameters?.docs,source:{originalSource:"function Toggle() {\n  return <Demo fieldView='toggle' />;\n}",...Toggle.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","SmallText","Toggle"]},"./src/checkbox/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>Checkbox});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),checkbox_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/checkbox/checkbox.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(checkbox_module.Z,options);const checkbox_checkbox_module=checkbox_module.Z&&checkbox_module.Z.locals?checkbox_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(checkbox_checkbox_module),Checkbox=(0,react.forwardRef)((({className,style,"data-testid":testId="checkbox",...restProps},ref)=>(0,jsx_runtime.jsxs)("span",{className:cx("root",className),style,children:[(0,jsx_runtime.jsx)("input",{...restProps,"data-testid":testId,ref,type:"checkbox",className:cx("input")}),(0,jsx_runtime.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[(0,jsx_runtime.jsx)("rect",{x:"0.5",y:"0.5",width:"15",height:"15",rx:"1.5",className:cx("square")}),(0,jsx_runtime.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10.8 5.21967L6.4 9.18934L5.36569 8.21967C5.05327 7.92678 4.54673 7.92678 4.23431 8.21967C3.9219 8.51256 3.9219 8.98744 4.23431 9.28033L5.83431 10.7803C6.14673 11.0732 6.65327 11.0732 6.96569 10.7803L11.7657 6.28033C12.0781 5.98744 12.0781 5.51256 11.7657 5.21967C11.4533 4.92678 11.1124 4.92678 10.8 5.21967Z",fill:"white",className:cx("mark")})]})]})));Checkbox.displayName="Checkbox";try{Checkbox.displayName="Checkbox",Checkbox.__docgenInfo={description:"Компонент стилизованного переключателя (input[type=checkbox]).",displayName:"Checkbox",props:{failed:{defaultValue:null,description:"Состояние с ошибками валидации.",name:"failed",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/checkbox/index.tsx#Checkbox"]={docgenInfo:Checkbox.__docgenInfo,name:"Checkbox",path:"src/checkbox/index.tsx#Checkbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/toggle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Toggle});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),toggle_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/toggle/toggle.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(toggle_module.Z,options);const toggle_toggle_module=toggle_module.Z&&toggle_module.Z.locals?toggle_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(toggle_toggle_module),Toggle=(0,react.forwardRef)((({className,style,"data-testid":testId="toggle",...restProps},ref)=>(0,jsx_runtime.jsxs)("label",{className:cx("root",className),style,children:[(0,jsx_runtime.jsx)("input",{...restProps,className:cx("input"),ref,type:"checkbox","data-testid":testId}),(0,jsx_runtime.jsx)("span",{className:cx("switch")})]})));Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:"Компонент стилизованного переключателя (input[type=checkbox]).",displayName:"Toggle",props:{failed:{defaultValue:null,description:"Состояние с ошибками валидации.",name:"failed",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/toggle/index.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/toggle/index.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/checkbox-field/checkbox-field.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".checkbox-field-module__root__e24{position:relative;display:inline-flex}.checkbox-field-module__root__e24 .checkbox-field-module__field-row__e41{display:flex;align-items:flex-start}.checkbox-field-module__root__e24 .checkbox-field-module__label__ed8{display:block;cursor:pointer;color:#212121;font-size:16px;line-height:24px}.checkbox-field-module__root__e24 .checkbox-field-module__info__be3{display:block;cursor:pointer;color:#9e9e9e;font-size:14px;line-height:20px}.checkbox-field-module__root__e24.checkbox-field-module__field-checkbox__f42 .checkbox-field-module__field-row__e41{padding-top:4px;margin-right:8px}.checkbox-field-module__root__e24.checkbox-field-module__field-toggle__db1 .checkbox-field-module__field-row__e41{margin-right:12px}.checkbox-field-module__root__e24.checkbox-field-module__field-toggle__db1 .checkbox-field-module__label__ed8{font-weight:600}.checkbox-field-module__root__e24.checkbox-field-module__field-checkbox__f42.checkbox-field-module__small-text__b9a .checkbox-field-module__label__ed8{padding-top:2px;font-size:14px;line-height:20px}.checkbox-field-module__root__e24.checkbox-field-module__failed__b57:not(.checkbox-field-module__disabled__b3c) .checkbox-field-module__label__ed8{color:#d50000}.checkbox-field-module__root__e24.checkbox-field-module__disabled__b3c .checkbox-field-module__label__ed8,.checkbox-field-module__root__e24.checkbox-field-module__disabled__b3c .checkbox-field-module__info__be3{color:#c2c2c2}","",{version:3,sources:["webpack://./src/checkbox-field/checkbox-field.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,kCACE,iBAAA,CACA,mBAAA,CACA,yEACE,YAAA,CACA,sBAAA,CAEF,qEACE,aAAA,CACA,cAAA,CACA,aCRW,CDSX,cAAA,CACA,gBAAA,CAEF,oEACE,aAAA,CACA,cAAA,CACA,aCXW,CDYX,cAAA,CACA,gBAAA,CAGA,oHACE,eAAA,CACA,gBAAA,CAIF,kHACE,iBAAA,CAEF,8GACE,eAAA,CAIF,uJACE,eAAA,CACA,cAAA,CACA,gBAAA,CAIF,mJACE,aC7BgB,CDiClB,mNAEE,aC3CS",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-flex;\n  .field-row {\n    display: flex;\n    align-items: flex-start;\n  }\n  .label {\n    display: block;\n    cursor: pointer;\n    color: colors.$basic-gray87;\n    font-size: 16px;\n    line-height: 24px;\n  }\n  .info {\n    display: block;\n    cursor: pointer;\n    color: colors.$basic-gray38;\n    font-size: 14px;\n    line-height: 20px;\n  }\n  &.field-checkbox {\n    .field-row {\n      padding-top: 4px;\n      margin-right: 8px;\n    }\n  }\n  &.field-toggle {\n    .field-row {\n      margin-right: 12px;\n    }\n    .label {\n      font-weight: 600;\n    }\n  }\n  &.field-checkbox.small-text {\n    .label {\n      padding-top: 2px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n  }\n  &.failed:not(.disabled) {\n    .label {\n      color: colors.$additional-deep-red;\n    }\n  }\n  &.disabled {\n    .label,\n    .info {\n      color: colors.$basic-gray24;\n    }\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"checkbox-field-module__root__e24","field-row":"checkbox-field-module__field-row__e41",label:"checkbox-field-module__label__ed8",info:"checkbox-field-module__info__be3","field-checkbox":"checkbox-field-module__field-checkbox__f42","field-toggle":"checkbox-field-module__field-toggle__db1","small-text":"checkbox-field-module__small-text__b9a",failed:"checkbox-field-module__failed__b57",disabled:"checkbox-field-module__disabled__b3c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/checkbox/checkbox.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".checkbox-module__root__da2{position:relative;display:inline-block;vertical-align:-0.125em;width:16px;height:16px}.checkbox-module__root__da2 svg{display:block}.checkbox-module__input__c5a{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;margin:0;padding:0;cursor:pointer}.checkbox-module__input__c5a:not(:checked)+svg .checkbox-module__mark__fe4{display:none}.checkbox-module__input__c5a:not(:checked)+svg .checkbox-module__square__d6b{fill:#fff;stroke:#c2c2c2}.checkbox-module__input__c5a:checked+svg .checkbox-module__square__d6b{fill:#1f84db;stroke:#1f84db}.checkbox-module__input__c5a:disabled:not(:checked)+svg .checkbox-module__square__d6b{fill:#f5f5f5;stroke:#c2c2c2}.checkbox-module__input__c5a:disabled:checked+svg .checkbox-module__square__d6b{fill:#e0e0e0;stroke:#e0e0e0}","",{version:3,sources:["webpack://./src/checkbox/checkbox.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,4BACE,iBAAA,CACA,oBAAA,CACA,uBAAA,CACA,UAAA,CACA,WAAA,CACA,gCACE,aAAA,CAIJ,6BACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,QAAA,CACA,SAAA,CACA,cAAA,CACA,2EACE,YAAA,CAEF,6EACE,SAAA,CACA,cCnBW,CDqBb,uEACE,YC5BS,CD6BT,cC7BS,CD+BX,sFACE,YCvBU,CDwBV,cC3BW,CD6Bb,gFACE,YC7BW,CD8BX,cC9BW",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  vertical-align: -0.125em; // не понятно почему, но это значение ставит блок ровно по середине строки\n  width: 16px;\n  height: 16px;\n  svg {\n    display: block;\n  }\n}\n\n.input {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n  &:not(:checked) + svg .mark {\n    display: none;\n  }\n  &:not(:checked) + svg .square {\n    fill: #fff;\n    stroke: colors.$basic-gray24;\n  }\n  &:checked + svg .square {\n    fill: colors.$basic-blue;\n    stroke: colors.$basic-blue;\n  }\n  &:disabled:not(:checked) + svg .square {\n    fill: colors.$basic-gray4;\n    stroke: colors.$basic-gray24;\n  }\n  &:disabled:checked + svg .square {\n    fill: colors.$basic-gray12;\n    stroke: colors.$basic-gray12;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"checkbox-module__root__da2",input:"checkbox-module__input__c5a",mark:"checkbox-module__mark__fe4",square:"checkbox-module__square__d6b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/toggle/toggle.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.toggle-module__root__dc7{position:relative;display:inline-block;cursor:pointer;user-select:none;vertical-align:-2px}.toggle-module__input__d45{position:absolute;display:block;opacity:0;padding:0;margin:0;width:0;height:0;pointer-events:none}.toggle-module__input__d45:not(:checked)+.toggle-module__switch__d1e{--toggle-slider-position: 2px}.toggle-module__input__d45:checked+.toggle-module__switch__d1e{--toggle-slider-position: calc(100% - 22px)}.toggle-module__input__d45:not(:checked):not(:disabled)+.toggle-module__switch__d1e{--toggle-primary-color: #e0e0e0}.toggle-module__input__d45:checked:not(:disabled)+.toggle-module__switch__d1e{--toggle-primary-color: #1f84db}.toggle-module__input__d45:not(:checked):disabled+.toggle-module__switch__d1e{--toggle-primary-color: #f5f5f5}.toggle-module__input__d45:checked:disabled+.toggle-module__switch__d1e{--toggle-primary-color: #c2c2c2}.toggle-module__switch__d1e{position:relative;display:block;width:44px;height:24px;border-radius:12px;background:var(--toggle-primary-color);transition:background .16s ease-in-out}.toggle-module__switch__d1e::after{content:"";position:absolute;top:2px;left:var(--toggle-slider-position);display:block;width:20px;height:20px;background:#fff;box-shadow:0 1px 1px rgba(0,0,0,.05);border-radius:50%;transition:left .32s ease-in-out}',"",{version:3,sources:["webpack://./src/toggle/toggle.module.scss"],names:[],mappings:"AAEA,0BACE,iBAAA,CACA,oBAAA,CACA,cAAA,CACA,gBAAA,CACA,mBAAA,CAGF,2BACE,iBAAA,CACA,aAAA,CACA,SAAA,CACA,SAAA,CACA,QAAA,CACA,OAAA,CACA,QAAA,CACA,mBAAA,CACA,qEACE,6BAAA,CAEF,+DACE,2CAAA,CAEF,oFACE,+BAAA,CAEF,8EACE,+BAAA,CAEF,8EACE,+BAAA,CAEF,wEACE,+BAAA,CAIJ,4BACE,iBAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,kBAAA,CACA,sCAAA,CACA,sCAAA,CACA,mCACE,UAAA,CACA,iBAAA,CACA,OAAA,CACA,kCAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,eAAA,CACA,oCAAA,CACA,iBAAA,CACA,gCAAA",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  cursor: pointer;\n  user-select: none;\n  vertical-align: -2px;\n}\n\n.input {\n  position: absolute;\n  display: block;\n  opacity: 0;\n  padding: 0;\n  margin: 0;\n  width: 0;\n  height: 0;\n  pointer-events: none;\n  &:not(:checked) + .switch {\n    --toggle-slider-position: 2px;\n  }\n  &:checked + .switch {\n    --toggle-slider-position: calc(100% - 22px);\n  }\n  &:not(:checked):not(:disabled) + .switch {\n    --toggle-primary-color: #{colors.$basic-gray12};\n  }\n  &:checked:not(:disabled) + .switch {\n    --toggle-primary-color: #{colors.$basic-blue};\n  }\n  &:not(:checked):disabled + .switch {\n    --toggle-primary-color: #{colors.$basic-gray4};\n  }\n  &:checked:disabled + .switch {\n    --toggle-primary-color: #{colors.$basic-gray24};\n  }\n}\n\n.switch {\n  position: relative;\n  display: block;\n  width: 44px;\n  height: 24px;\n  border-radius: 12px;\n  background: var(--toggle-primary-color);\n  transition: background 0.16s ease-in-out;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 2px;\n    left: var(--toggle-slider-position);\n    display: block;\n    width: 20px;\n    height: 20px;\n    background: #fff;\n    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n    border-radius: 50%;\n    transition: left 0.32s ease-in-out;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"toggle-module__root__dc7",input:"toggle-module__input__d45",switch:"toggle-module__switch__d1e"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);