/*! For license information please see chip-__stories__-05-with-end-button-stories.56301813.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2127],{"./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/Cross.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M12.707 4.707a1 1 0 0 0-1.414-1.414L8 6.586 4.707 3.293a1 1 0 0 0-1.414 1.414L6.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414L8 9.414l3.293 3.293a1 1 0 0 0 1.414-1.414L9.414 8l3.293-3.293Z"}))))},"./src/chip/__stories__/05-with-end-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithEndButton:()=>WithEndButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/chip/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Chip",component:_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__.Af,parameters:{storySource:{source:"import { Chip, getDeletableChipProps } from '@sima-land/ui-nucleons/chip';\n\nexport default {\n  title: 'common/Chip',\n  component: Chip,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function WithEndButton() {\n  const onDelete = () => {\n    alert('Крестик нажат!');\n  };\n\n  return (\n    <div style={{ display: 'flex', gap: '8px' }}>\n      <Chip {...getDeletableChipProps({ onDelete })} checked={false}>\n        Чипс обычный\n      </Chip>\n\n      <Chip {...getDeletableChipProps({ onDelete })} checked>\n        Чипс выбранный\n      </Chip>\n    </div>\n  );\n}\n\nWithEndButton.storyName = 'С кнопкой в конце';\n",locationsMap:{"with-end-button":{startLoc:{col:7,line:11},endLoc:{col:1,line:27},startBody:{col:7,line:11},endBody:{col:1,line:27}}}},layout:"padded"}},WithEndButton=function WithEndButton(){const onDelete=()=>{alert("Крестик нажат!")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__.Af,{...(0,_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__.QY)({onDelete}),checked:!1,children:"Чипс обычный"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__.Af,{...(0,_sima_land_ui_nucleons_chip__WEBPACK_IMPORTED_MODULE_0__.QY)({onDelete}),checked:!0,children:"Чипс выбранный"})]})};WithEndButton.storyName="С кнопкой в конце",WithEndButton.parameters={...WithEndButton.parameters,docs:{...WithEndButton.parameters?.docs,source:{originalSource:"function WithEndButton() {\n  const onDelete = () => {\n    alert('Крестик нажат!');\n  };\n  return <div style={{\n    display: 'flex',\n    gap: '8px'\n  }}>\n      <Chip {...getDeletableChipProps({\n      onDelete\n    })} checked={false}>\n        Чипс обычный\n      </Chip>\n\n      <Chip {...getDeletableChipProps({\n      onDelete\n    })} checked>\n        Чипс выбранный\n      </Chip>\n    </div>;\n}",...WithEndButton.parameters?.docs?.source}}};const __namedExportsOrder=["WithEndButton"]},"./src/chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Af:()=>Chip,_8:()=>ChipIconButton,QY:()=>getDeletableChipProps});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),chip_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/chip/chip.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(chip_m.Z,options);const chip_chip_m=chip_m.Z&&chip_m.Z.locals?chip_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(chip_chip_m);function Chip(props){const{checked,shape="square",colors="light",className,endAdornment,children,disabled,padding="x",adornmentGutter="default","data-testid":testId="chip",...restProps}=props,rootClassName=cx("root","unset"!==shape&&`shape-${shape}`,"unset"!==colors&&`colors-${colors}`,"unset"!==padding&&`padding-${padding}`,"unset"!==adornmentGutter&&`adornment-gutter-${adornmentGutter}`,checked&&"checked",disabled&&"disabled",className),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:cx("section-main"),children}),endAdornment&&(0,jsx_runtime.jsx)("span",{className:cx("section-end-adornment"),children:endAdornment})]});return"anchor"===restProps.as?(0,jsx_runtime.jsx)("a",{className:rootClassName,...restProps,"data-testid":testId,children:content}):"button"===restProps.as?(0,jsx_runtime.jsx)("button",{disabled,className:rootClassName,...restProps,"data-testid":testId,children:content}):(0,jsx_runtime.jsx)("span",{className:rootClassName,...restProps,"data-testid":testId,children:content})}function ChipIconButton({children,className,...restProps}){return(0,jsx_runtime.jsx)("button",{className:cx("icon-button",className),...restProps,children})}try{Chip.displayName="Chip",Chip.__docgenInfo={description:"Чип - компактный элемент для вывода атрибутов или опций.",displayName:"Chip",props:{as:{defaultValue:null,description:"Какой элемент использовать в качестве корневого элемента.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"span"'},{value:'"anchor"'}]}},checked:{defaultValue:null,description:"Выбран ли чип.",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключен ли чип.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},endAdornment:{defaultValue:null,description:"Украшение в конце.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"Форма.",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"square"'},{value:'"unset"'},{value:'"pill"'}]}},colors:{defaultValue:null,description:"Цвета.",name:"colors",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"light"'},{value:'"dark"'}]}},padding:{defaultValue:null,description:"Внутренние отступы.",name:"padding",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"start"'},{value:'"x"'}]}},adornmentGutter:{defaultValue:null,description:"Отступ от основного контента до украшений.",name:"adornmentGutter",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"default"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/chip/chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}try{ChipIconButton.displayName="ChipIconButton",ChipIconButton.__docgenInfo={description:"Кнопка в чипе.",displayName:"ChipIconButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/chip.tsx#ChipIconButton"]={docgenInfo:ChipIconButton.__docgenInfo,name:"ChipIconButton",path:"src/chip/chip.tsx#ChipIconButton"})}catch(__react_docgen_typescript_loader_error){}var Cross=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/16x16/Stroked/Cross.js");function getDeletableChipProps({onDelete}={}){return{padding:"start",adornmentGutter:"unset",endAdornment:(0,jsx_runtime.jsx)(ChipIconButton,{type:"button",onClick:onDelete,children:(0,jsx_runtime.jsx)(Cross.Z,{fill:"currentColor"})})}}try{getDeletableChipProps.displayName="getDeletableChipProps",getDeletableChipProps.__docgenInfo={description:"Возвращает свойства для чипа, добавляющие ему кнопку удаления.",displayName:"getDeletableChipProps",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"VoidFunction | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/utils.tsx#getDeletableChipProps"]={docgenInfo:getDeletableChipProps.__docgenInfo,name:"getDeletableChipProps",path:"src/chip/utils.tsx#getDeletableChipProps"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/chip/chip.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".chip-m__root__abe{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;flex-grow:0;flex-shrink:0;max-width:100%;display:flex;align-items:center;height:32px;box-sizing:border-box;font:inherit;font-size:12px;font-weight:600;line-height:16px;text-decoration:none;padding:0 12px;background:var(--chip-background);color:var(--chip-color)}.chip-m__root__abe::-moz-focus-inner{border:0;padding:0}.chip-m__root__abe:focus-visible{outline:2px solid #1f84db}.chip-m__root__abe,.chip-m__root__abe:link,.chip-m__root__abe:visited{background:var(--chip-background);color:var(--chip-color)}.chip-m__root__abe:hover{cursor:pointer;background:var(--chip-hover-background);color:var(--chip-hover-color)}.chip-m__root__abe.chip-m__disabled__cc3{pointer-events:none;user-select:none;background:var(--chip-disabled-background);color:var(--chip-disabled-color)}.chip-m__root__abe.chip-m__checked__d70{background:var(--chip-checked-background);color:var(--chip-checked-color)}.chip-m__root__abe.chip-m__checked__d70:hover{background:var(--chip-checked-hover-background);color:var(--chip-checked-hover-color)}.chip-m__root__abe.chip-m__checked__d70.chip-m__disabled__cc3{background:var(--chip-checked-disabled-background);color:var(--chip-checked-disabled-color)}.chip-m__padding-x__f0b{padding:0 12px}.chip-m__padding-start__c14{padding:0 0 0 12px}.chip-m__adornment-gutter-default__bb2{--chip-adornment-gutter: 8px}.chip-m__colors-light__c93{--chip-background: #ebebeb;--chip-color: #212121;--chip-hover-background: #f5f5f5;--chip-hover-color: #3a3a3b;--chip-disabled-background: #ebebeb;--chip-disabled-color: #9e9e9e;--chip-disabled-hover-background: #ebebeb;--chip-disabled-hover-color: #9e9e9e;--chip-checked-background: #212121;--chip-checked-color: #fff;--chip-checked-hover-background: #3a3a3b;--chip-checked-hover-color: #ebebeb;--chip-checked-disabled-background: #212121;--chip-checked-disabled-color: #9e9e9e;--chip-checked-disabled-hover-background: #212121;--chip-checked-disabled-hover-color: #9e9e9e}.chip-m__colors-dark__c13{--chip-background: #3a3a3b;--chip-color: #fff;--chip-hover-background: #545455;--chip-hover-color: #ebebeb;--chip-disabled-background: #3a3a3b;--chip-disabled-color: #9e9e9e;--chip-disabled-hover-background: #3a3a3b;--chip-disabled-hover-color: #9e9e9e;--chip-checked-background: #fff;--chip-checked-color: #212121;--chip-checked-hover-background: #f5f5f5;--chip-checked-hover-color: #3a3a3b;--chip-checked-disabled-background: #fff;--chip-checked-disabled-color: #9e9e9e;--chip-checked-disabled-hover-background: #fff;--chip-checked-disabled-hover-color: #9e9e9e}.chip-m__shape-square__e77{border-radius:4px}.chip-m__shape-pill__d27{border-radius:999999px}.chip-m__section-main__ffa{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.chip-m__section-end-adornment__ff0{height:100%;display:flex;align-items:center;margin-left:var(--chip-adornment-gutter)}.chip-m__icon-button__bde{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:flex;align-items:center;height:32px;margin-left:4px;padding-left:4px;padding-right:12px;background:rgba(0,0,0,0);border-radius:4px;cursor:pointer}.chip-m__icon-button__bde::-moz-focus-inner{border:0;padding:0}.chip-m__icon-button__bde:focus-visible{outline:2px solid #1f84db}.chip-m__icon-button__bde:not(:hover){color:var(--chip-color)}.chip-m__icon-button__bde:hover{color:var(--chip-hover-color)}.chip-m__disabled__cc3 .chip-m__icon-button__bde:not(:hover){color:var(--chip-disabled-color)}.chip-m__disabled__cc3 .chip-m__icon-button__bde:hover{color:var(--chip-disabled-hover-color)}.chip-m__checked__d70 .chip-m__icon-button__bde:not(:hover){color:var(--chip-checked-color)}.chip-m__checked__d70 .chip-m__icon-button__bde:hover{color:var(--chip-checked-hover-color)}.chip-m__checked__d70.chip-m__disabled__cc3 .chip-m__icon-button__bde:not(:hover){color:var(--chip-checked-disabled-color)}.chip-m__checked__d70.chip-m__disabled__cc3 .chip-m__icon-button__bde:hover{color:var(--chip-checked-disabled-hover-color)}","",{version:3,sources:["webpack://./src/chip/chip.m.scss","webpack://./src/utils.scss","webpack://./src/chip/chip-util.scss"],names:[],mappings:"AAIA,mBCwCE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CD3DA,WAAA,CACA,aAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,oBAAA,CACA,cAAA,CACA,iCAAA,CACA,uBAAA,CCgDA,qCACE,QAAA,CACA,SAAA,CDjDF,iCCyDA,yBAAA,CDpDA,sEAGE,iCAAA,CACA,uBAAA,CAIF,yBACE,cAAA,CACA,uCAAA,CACA,6BAAA,CAEF,yCACE,mBAAA,CACA,gBAAA,CACA,0CAAA,CACA,gCAAA,CAEF,wCACE,yCAAA,CACA,+BAAA,CAEF,8CACE,+CAAA,CACA,qCAAA,CAEF,8DACE,kDAAA,CACA,wCAAA,CAIJ,wBACE,cAAA,CAGF,4BACE,kBAAA,CAGF,uCACE,4BAAA,CAGF,2BEnEE,0BAAA,CACA,qBAAA,CACA,gCAAA,CACA,2BAAA,CAGA,mCAAA,CACA,8BAAA,CACA,yCAAA,CACA,oCAAA,CAGA,kCAAA,CACA,0BAAA,CACA,wCAAA,CACA,mCAAA,CAGA,2CAAA,CACA,sCAAA,CACA,iDAAA,CACA,4CAAA,CFkDF,0BE7CE,0BAAA,CACA,kBAAA,CACA,gCAAA,CACA,2BAAA,CAGA,mCAAA,CACA,8BAAA,CACA,yCAAA,CACA,oCAAA,CAGA,+BAAA,CACA,6BAAA,CACA,wCAAA,CACA,mCAAA,CAGA,wCAAA,CACA,sCAAA,CACA,8CAAA,CACA,4CAAA,CF4BF,2BACE,iBAAA,CAGF,yBACE,sBAAA,CAGF,2BACE,sBAAA,CACA,eAAA,CACA,kBAAA,CAGF,oCACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,wCAAA,CAGF,0BCxDE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CDqCA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,gBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CACA,cAAA,CC1CA,4CACE,QAAA,CACA,SAAA,CDyCF,wCCjCA,yBAAA,CDoCA,sCACE,uBAAA,CAEF,gCACE,6BAAA,CAKF,6DACE,gCAAA,CAEF,uDACE,sCAAA,CAKF,4DACE,+BAAA,CAEF,sDACE,qCAAA,CAKF,kFACE,wCAAA,CAEF,4EACE,8CAAA",sourcesContent:["@use '../colors';\n@use '../utils';\n@use './chip-util';\n\n.root {\n  @include utils.reset-button;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  box-sizing: border-box;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n  text-decoration: none;\n  padding: 0 12px;\n  background: var(--chip-background);\n  color: var(--chip-color);\n  &:focus-visible {\n    @include utils.focus-visible-style;\n  }\n\n  // ВАЖНО: переопределяем стили монолита для ссылок\n  &,\n  &:link,\n  &:visited {\n    background: var(--chip-background);\n    color: var(--chip-color);\n  }\n\n  // ВАЖНО: эффект при наведении определяем **после** переопределения стилей монолита\n  &:hover {\n    cursor: pointer;\n    background: var(--chip-hover-background);\n    color: var(--chip-hover-color);\n  }\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    background: var(--chip-disabled-background);\n    color: var(--chip-disabled-color);\n  }\n  &.checked {\n    background: var(--chip-checked-background);\n    color: var(--chip-checked-color);\n  }\n  &.checked:hover {\n    background: var(--chip-checked-hover-background);\n    color: var(--chip-checked-hover-color);\n  }\n  &.checked.disabled {\n    background: var(--chip-checked-disabled-background);\n    color: var(--chip-checked-disabled-color);\n  }\n}\n\n.padding-x {\n  padding: 0 12px;\n}\n\n.padding-start {\n  padding: 0 0 0 12px;\n}\n\n.adornment-gutter-default {\n  --chip-adornment-gutter: 8px;\n}\n\n.colors-light {\n  @include chip-util.colors-light;\n}\n\n.colors-dark {\n  @include chip-util.colors-dark;\n}\n\n.shape-square {\n  border-radius: 4px;\n}\n\n.shape-pill {\n  border-radius: 999999px;\n}\n\n.section-main {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.section-end-adornment {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: var(--chip-adornment-gutter);\n}\n\n.icon-button {\n  @include utils.reset-button;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  margin-left: 4px;\n  padding-left: 4px;\n  padding-right: 12px;\n  background: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  &:focus-visible {\n    @include utils.focus-visible-style;\n  }\n  &:not(:hover) {\n    color: var(--chip-color);\n  }\n  &:hover {\n    color: var(--chip-hover-color);\n  }\n}\n\n.disabled .icon-button {\n  &:not(:hover) {\n    color: var(--chip-disabled-color);\n  }\n  &:hover {\n    color: var(--chip-disabled-hover-color);\n  }\n}\n\n.checked .icon-button {\n  &:not(:hover) {\n    color: var(--chip-checked-color);\n  }\n  &:hover {\n    color: var(--chip-checked-hover-color);\n  }\n}\n\n.checked.disabled .icon-button {\n  &:not(:hover) {\n    color: var(--chip-checked-disabled-color);\n  }\n  &:hover {\n    color: var(--chip-checked-disabled-hover-color);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","@use '../colors';\n\n@mixin colors-light {\n  // default\n  --chip-background: #{colors.$basic-gray8};\n  --chip-color: #{colors.$basic-gray87};\n  --chip-hover-background: #{colors.$basic-gray4};\n  --chip-hover-color: #{colors.$basic-gray76};\n\n  // disabled\n  --chip-disabled-background: #{colors.$basic-gray8};\n  --chip-disabled-color: #{colors.$basic-gray38};\n  --chip-disabled-hover-background: #{colors.$basic-gray8};\n  --chip-disabled-hover-color: #{colors.$basic-gray38};\n\n  // checked\n  --chip-checked-background: #{colors.$basic-gray87};\n  --chip-checked-color: #{colors.$basic-white};\n  --chip-checked-hover-background: #{colors.$basic-gray76};\n  --chip-checked-hover-color: #{colors.$basic-gray8};\n\n  // checked + disabled\n  --chip-checked-disabled-background: #{colors.$basic-gray87};\n  --chip-checked-disabled-color: #{colors.$basic-gray38};\n  --chip-checked-disabled-hover-background: #{colors.$basic-gray87};\n  --chip-checked-disabled-hover-color: #{colors.$basic-gray38};\n}\n\n@mixin colors-dark {\n  // default\n  --chip-background: #{colors.$basic-gray76};\n  --chip-color: #{colors.$basic-white};\n  --chip-hover-background: #{colors.$basic-gray66};\n  --chip-hover-color: #{colors.$basic-gray8};\n\n  // disabled\n  --chip-disabled-background: #{colors.$basic-gray76};\n  --chip-disabled-color: #{colors.$basic-gray38};\n  --chip-disabled-hover-background: #{colors.$basic-gray76};\n  --chip-disabled-hover-color: #{colors.$basic-gray38};\n\n  // checked\n  --chip-checked-background: #{colors.$basic-white};\n  --chip-checked-color: #{colors.$basic-gray87};\n  --chip-checked-hover-background: #{colors.$basic-gray4};\n  --chip-checked-hover-color: #{colors.$basic-gray76};\n\n  // checked + disabled\n  --chip-checked-disabled-background: #{colors.$basic-white};\n  --chip-checked-disabled-color: #{colors.$basic-gray38};\n  --chip-checked-disabled-hover-background: #{colors.$basic-white};\n  --chip-checked-disabled-hover-color: #{colors.$basic-gray38};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"chip-m__root__abe",disabled:"chip-m__disabled__cc3",checked:"chip-m__checked__d70","padding-x":"chip-m__padding-x__f0b","padding-start":"chip-m__padding-start__c14","adornment-gutter-default":"chip-m__adornment-gutter-default__bb2","colors-light":"chip-m__colors-light__c93","colors-dark":"chip-m__colors-dark__c13","shape-square":"chip-m__shape-square__e77","shape-pill":"chip-m__shape-pill__d27","section-main":"chip-m__section-main__ffa","section-end-adornment":"chip-m__section-end-adornment__ff0","icon-button":"chip-m__icon-button__bde"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);