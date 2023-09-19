"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[8277],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M12.707 4.707a1 1 0 0 0-1.414-1.414L8 6.586 4.707 3.293a1 1 0 0 0-1.414 1.414L6.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414L8 9.414l3.293 3.293a1 1 0 0 0 1.414-1.414L9.414 8l3.293-3.293Z"})})));exports.Z=ForwardRef},"./src/chip/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Af:()=>Chip,_8:()=>ChipIconButton,QY:()=>getDeletableChipProps});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),chip_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/chip/chip.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(chip_module.Z,options);const chip_chip_module=chip_module.Z&&chip_module.Z.locals?chip_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(chip_chip_module);function Chip(props){const{checked,shape="square",colors="light",className,endAdornment,children,disabled,padding="x",adornmentGutter="default","data-testid":testId="chip",...restProps}=props,rootClassName=cx("root","unset"!==shape&&`shape-${shape}`,"unset"!==colors&&`colors-${colors}`,"unset"!==padding&&`padding-${padding}`,"unset"!==adornmentGutter&&`adornment-gutter-${adornmentGutter}`,checked&&"checked",disabled&&"disabled",className),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:cx("section-main"),children}),endAdornment&&(0,jsx_runtime.jsx)("span",{className:cx("section-end-adornment"),children:endAdornment})]});return"anchor"===restProps.as?(0,jsx_runtime.jsx)("a",{className:rootClassName,...restProps,"data-testid":testId,children:content}):"button"===restProps.as?(0,jsx_runtime.jsx)("button",{disabled,className:rootClassName,...restProps,"data-testid":testId,children:content}):(0,jsx_runtime.jsx)("span",{className:rootClassName,...restProps,"data-testid":testId,children:content})}function ChipIconButton({children,className,...restProps}){return(0,jsx_runtime.jsx)("button",{className:cx("icon-button",className),...restProps,children})}Chip.displayName="Chip",ChipIconButton.displayName="ChipIconButton";try{Chip.displayName="Chip",Chip.__docgenInfo={description:"Чип.",displayName:"Chip",props:{as:{defaultValue:null,description:"Какой элемент использовать в качестве корневого элемента.",name:"as",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"span"'},{value:'"button"'},{value:'"anchor"'}]}},checked:{defaultValue:null,description:"Выбран ли чип.",name:"checked",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключен ли чип.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},endAdornment:{defaultValue:null,description:"Украшение в конце.",name:"endAdornment",required:!1,type:{name:"ReactNode"}},shape:{defaultValue:null,description:"Форма.",name:"shape",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"square"'},{value:'"pill"'}]}},colors:{defaultValue:null,description:"Цвета.",name:"colors",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"unset"'},{value:'"dark"'},{value:'"light"'}]}},padding:{defaultValue:null,description:"Внутренние отступы.",name:"padding",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"unset"'},{value:'"x"'}]}},adornmentGutter:{defaultValue:null,description:"Отступ от основного контента до украшений.",name:"adornmentGutter",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"default"'},{value:'"unset"'}]}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/chip.tsx#Chip"]={docgenInfo:Chip.__docgenInfo,name:"Chip",path:"src/chip/chip.tsx#Chip"})}catch(__react_docgen_typescript_loader_error){}try{ChipIconButton.displayName="ChipIconButton",ChipIconButton.__docgenInfo={description:"Кнопка в чипе.",displayName:"ChipIconButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/chip.tsx#ChipIconButton"]={docgenInfo:ChipIconButton.__docgenInfo,name:"ChipIconButton",path:"src/chip/chip.tsx#ChipIconButton"})}catch(__react_docgen_typescript_loader_error){}var Cross=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Cross.js");function getDeletableChipProps({onDelete}={}){return{padding:"start",adornmentGutter:"unset",endAdornment:(0,jsx_runtime.jsx)(ChipIconButton,{type:"button",onClick:onDelete,children:(0,jsx_runtime.jsx)(Cross.Z,{fill:"currentColor"})})}}try{getDeletableChipProps.displayName="getDeletableChipProps",getDeletableChipProps.__docgenInfo={description:"Возвращает свойства для чипа, добавляющие ему кнопку удаления.",displayName:"getDeletableChipProps",props:{onDelete:{defaultValue:null,description:"",name:"onDelete",required:!1,type:{name:"VoidFunction | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/chip/utils.tsx#getDeletableChipProps"]={docgenInfo:getDeletableChipProps.__docgenInfo,name:"getDeletableChipProps",path:"src/chip/utils.tsx#getDeletableChipProps"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/chip/chip.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".chip-module__root__bb1{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;flex-grow:0;flex-shrink:0;max-width:100%;display:flex;align-items:center;height:32px;box-sizing:border-box;font:inherit;font-size:12px;font-weight:600;line-height:16px;text-decoration:none;padding:0 12px;background:var(--chip-background);color:var(--chip-color)}.chip-module__root__bb1::-moz-focus-inner{border:0;padding:0}.chip-module__root__bb1:focus-visible{outline:2px solid #1f84db}.chip-module__root__bb1,.chip-module__root__bb1:link,.chip-module__root__bb1:visited{background:var(--chip-background);color:var(--chip-color)}.chip-module__root__bb1:hover{cursor:pointer;background:var(--chip-hover-background);color:var(--chip-hover-color)}.chip-module__root__bb1.chip-module__disabled__d18{pointer-events:none;user-select:none;background:var(--chip-disabled-background);color:var(--chip-disabled-color)}.chip-module__root__bb1.chip-module__checked__b47{background:var(--chip-checked-background);color:var(--chip-checked-color)}.chip-module__root__bb1.chip-module__checked__b47:hover{background:var(--chip-checked-hover-background);color:var(--chip-checked-hover-color)}.chip-module__root__bb1.chip-module__checked__b47.chip-module__disabled__d18{background:var(--chip-checked-disabled-background);color:var(--chip-checked-disabled-color)}.chip-module__padding-x__c92{padding:0 12px}.chip-module__padding-start__c98{padding:0 0 0 12px}.chip-module__adornment-gutter-default__fe0{--chip-adornment-gutter: 8px}.chip-module__colors-light__d78{--chip-background: #ebebeb;--chip-color: #212121;--chip-hover-background: #f5f5f5;--chip-hover-color: #3a3a3b;--chip-disabled-background: #ebebeb;--chip-disabled-color: #9e9e9e;--chip-disabled-hover-background: #ebebeb;--chip-disabled-hover-color: #9e9e9e;--chip-checked-background: #212121;--chip-checked-color: #fff;--chip-checked-hover-background: #3a3a3b;--chip-checked-hover-color: #ebebeb;--chip-checked-disabled-background: #212121;--chip-checked-disabled-color: #9e9e9e;--chip-checked-disabled-hover-background: #212121;--chip-checked-disabled-hover-color: #9e9e9e}.chip-module__colors-dark__bb4{--chip-background: #3a3a3b;--chip-color: #fff;--chip-hover-background: #545455;--chip-hover-color: #ebebeb;--chip-disabled-background: #3a3a3b;--chip-disabled-color: #9e9e9e;--chip-disabled-hover-background: #3a3a3b;--chip-disabled-hover-color: #9e9e9e;--chip-checked-background: #fff;--chip-checked-color: #212121;--chip-checked-hover-background: #f5f5f5;--chip-checked-hover-color: #3a3a3b;--chip-checked-disabled-background: #fff;--chip-checked-disabled-color: #9e9e9e;--chip-checked-disabled-hover-background: #fff;--chip-checked-disabled-hover-color: #9e9e9e}.chip-module__shape-square__bb1{border-radius:4px}.chip-module__shape-pill__e16{border-radius:999999px}.chip-module__section-main__ebf{text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.chip-module__section-end-adornment__bba{height:100%;display:flex;align-items:center;margin-left:var(--chip-adornment-gutter)}.chip-module__icon-button__c90{outline:none;border:none;margin:0;padding:0;width:auto;overflow:visible;background:rgba(0,0,0,0);color:inherit;font:inherit;line-height:normal;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;-webkit-appearance:none;display:flex;align-items:center;height:32px;margin-left:4px;padding-left:4px;padding-right:12px;background:rgba(0,0,0,0);border-radius:4px;cursor:pointer}.chip-module__icon-button__c90::-moz-focus-inner{border:0;padding:0}.chip-module__icon-button__c90:focus-visible{outline:2px solid #1f84db}.chip-module__icon-button__c90:not(:hover){color:var(--chip-color)}.chip-module__icon-button__c90:hover{color:var(--chip-hover-color)}.chip-module__disabled__d18 .chip-module__icon-button__c90:not(:hover){color:var(--chip-disabled-color)}.chip-module__disabled__d18 .chip-module__icon-button__c90:hover{color:var(--chip-disabled-hover-color)}.chip-module__checked__b47 .chip-module__icon-button__c90:not(:hover){color:var(--chip-checked-color)}.chip-module__checked__b47 .chip-module__icon-button__c90:hover{color:var(--chip-checked-hover-color)}.chip-module__checked__b47.chip-module__disabled__d18 .chip-module__icon-button__c90:not(:hover){color:var(--chip-checked-disabled-color)}.chip-module__checked__b47.chip-module__disabled__d18 .chip-module__icon-button__c90:hover{color:var(--chip-checked-disabled-hover-color)}","",{version:3,sources:["webpack://./src/chip/chip.module.scss","webpack://./src/utils.scss","webpack://./src/chip/chip-util.scss"],names:[],mappings:"AAIA,wBCwCE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CD3DA,WAAA,CACA,aAAA,CACA,cAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,qBAAA,CACA,YAAA,CACA,cAAA,CACA,eAAA,CACA,gBAAA,CACA,oBAAA,CACA,cAAA,CACA,iCAAA,CACA,uBAAA,CCgDA,0CACE,QAAA,CACA,SAAA,CDjDF,sCCyDA,yBAAA,CDpDA,qFAGE,iCAAA,CACA,uBAAA,CAIF,8BACE,cAAA,CACA,uCAAA,CACA,6BAAA,CAEF,mDACE,mBAAA,CACA,gBAAA,CACA,0CAAA,CACA,gCAAA,CAEF,kDACE,yCAAA,CACA,+BAAA,CAEF,wDACE,+CAAA,CACA,qCAAA,CAEF,6EACE,kDAAA,CACA,wCAAA,CAIJ,6BACE,cAAA,CAGF,iCACE,kBAAA,CAGF,4CACE,4BAAA,CAGF,gCEnEE,0BAAA,CACA,qBAAA,CACA,gCAAA,CACA,2BAAA,CAGA,mCAAA,CACA,8BAAA,CACA,yCAAA,CACA,oCAAA,CAGA,kCAAA,CACA,0BAAA,CACA,wCAAA,CACA,mCAAA,CAGA,2CAAA,CACA,sCAAA,CACA,iDAAA,CACA,4CAAA,CFkDF,+BE7CE,0BAAA,CACA,kBAAA,CACA,gCAAA,CACA,2BAAA,CAGA,mCAAA,CACA,8BAAA,CACA,yCAAA,CACA,oCAAA,CAGA,+BAAA,CACA,6BAAA,CACA,wCAAA,CACA,mCAAA,CAGA,wCAAA,CACA,sCAAA,CACA,8CAAA,CACA,4CAAA,CF4BF,gCACE,iBAAA,CAGF,8BACE,sBAAA,CAGF,gCACE,sBAAA,CACA,eAAA,CACA,kBAAA,CAGF,yCACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,wCAAA,CAGF,+BCxDE,YAAA,CACA,WAAA,CACA,QAAA,CACA,SAAA,CACA,UAAA,CACA,gBAAA,CAEA,wBAAA,CAGA,aAAA,CACA,YAAA,CAGA,kBAAA,CAGA,8BAAA,CACA,+BAAA,CAGA,uBAAA,CDqCA,YAAA,CACA,kBAAA,CACA,WAAA,CACA,eAAA,CACA,gBAAA,CACA,kBAAA,CACA,wBAAA,CACA,iBAAA,CACA,cAAA,CC1CA,iDACE,QAAA,CACA,SAAA,CDyCF,6CCjCA,yBAAA,CDoCA,2CACE,uBAAA,CAEF,qCACE,6BAAA,CAKF,uEACE,gCAAA,CAEF,iEACE,sCAAA,CAKF,sEACE,+BAAA,CAEF,gEACE,qCAAA,CAKF,iGACE,wCAAA,CAEF,2FACE,8CAAA",sourcesContent:["@use '../colors';\n@use '../utils';\n@use './chip-util';\n\n.root {\n  @include utils.reset-button;\n  flex-grow: 0;\n  flex-shrink: 0;\n  max-width: 100%;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  box-sizing: border-box;\n  font: inherit;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 16px;\n  text-decoration: none;\n  padding: 0 12px;\n  background: var(--chip-background);\n  color: var(--chip-color);\n  &:focus-visible {\n    @include utils.focus-visible-style;\n  }\n\n  // ВАЖНО: переопределяем стили монолита для ссылок\n  &,\n  &:link,\n  &:visited {\n    background: var(--chip-background);\n    color: var(--chip-color);\n  }\n\n  // ВАЖНО: эффект при наведении определяем **после** переопределения стилей монолита\n  &:hover {\n    cursor: pointer;\n    background: var(--chip-hover-background);\n    color: var(--chip-hover-color);\n  }\n  &.disabled {\n    pointer-events: none;\n    user-select: none;\n    background: var(--chip-disabled-background);\n    color: var(--chip-disabled-color);\n  }\n  &.checked {\n    background: var(--chip-checked-background);\n    color: var(--chip-checked-color);\n  }\n  &.checked:hover {\n    background: var(--chip-checked-hover-background);\n    color: var(--chip-checked-hover-color);\n  }\n  &.checked.disabled {\n    background: var(--chip-checked-disabled-background);\n    color: var(--chip-checked-disabled-color);\n  }\n}\n\n.padding-x {\n  padding: 0 12px;\n}\n\n.padding-start {\n  padding: 0 0 0 12px;\n}\n\n.adornment-gutter-default {\n  --chip-adornment-gutter: 8px;\n}\n\n.colors-light {\n  @include chip-util.colors-light;\n}\n\n.colors-dark {\n  @include chip-util.colors-dark;\n}\n\n.shape-square {\n  border-radius: 4px;\n}\n\n.shape-pill {\n  border-radius: 999999px;\n}\n\n.section-main {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.section-end-adornment {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: var(--chip-adornment-gutter);\n}\n\n.icon-button {\n  @include utils.reset-button;\n  display: flex;\n  align-items: center;\n  height: 32px;\n  margin-left: 4px;\n  padding-left: 4px;\n  padding-right: 12px;\n  background: transparent;\n  border-radius: 4px;\n  cursor: pointer;\n  &:focus-visible {\n    @include utils.focus-visible-style;\n  }\n  &:not(:hover) {\n    color: var(--chip-color);\n  }\n  &:hover {\n    color: var(--chip-hover-color);\n  }\n}\n\n.disabled .icon-button {\n  &:not(:hover) {\n    color: var(--chip-disabled-color);\n  }\n  &:hover {\n    color: var(--chip-disabled-hover-color);\n  }\n}\n\n.checked .icon-button {\n  &:not(:hover) {\n    color: var(--chip-checked-color);\n  }\n  &:hover {\n    color: var(--chip-checked-hover-color);\n  }\n}\n\n.checked.disabled .icon-button {\n  &:not(:hover) {\n    color: var(--chip-checked-disabled-color);\n  }\n  &:hover {\n    color: var(--chip-checked-disabled-hover-color);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n","@use '../colors';\n\n@mixin colors-light {\n  // default\n  --chip-background: #{colors.$basic-gray8};\n  --chip-color: #{colors.$basic-gray87};\n  --chip-hover-background: #{colors.$basic-gray4};\n  --chip-hover-color: #{colors.$basic-gray76};\n\n  // disabled\n  --chip-disabled-background: #{colors.$basic-gray8};\n  --chip-disabled-color: #{colors.$basic-gray38};\n  --chip-disabled-hover-background: #{colors.$basic-gray8};\n  --chip-disabled-hover-color: #{colors.$basic-gray38};\n\n  // checked\n  --chip-checked-background: #{colors.$basic-gray87};\n  --chip-checked-color: #{colors.$basic-white};\n  --chip-checked-hover-background: #{colors.$basic-gray76};\n  --chip-checked-hover-color: #{colors.$basic-gray8};\n\n  // checked + disabled\n  --chip-checked-disabled-background: #{colors.$basic-gray87};\n  --chip-checked-disabled-color: #{colors.$basic-gray38};\n  --chip-checked-disabled-hover-background: #{colors.$basic-gray87};\n  --chip-checked-disabled-hover-color: #{colors.$basic-gray38};\n}\n\n@mixin colors-dark {\n  // default\n  --chip-background: #{colors.$basic-gray76};\n  --chip-color: #{colors.$basic-white};\n  --chip-hover-background: #{colors.$basic-gray66};\n  --chip-hover-color: #{colors.$basic-gray8};\n\n  // disabled\n  --chip-disabled-background: #{colors.$basic-gray76};\n  --chip-disabled-color: #{colors.$basic-gray38};\n  --chip-disabled-hover-background: #{colors.$basic-gray76};\n  --chip-disabled-hover-color: #{colors.$basic-gray38};\n\n  // checked\n  --chip-checked-background: #{colors.$basic-white};\n  --chip-checked-color: #{colors.$basic-gray87};\n  --chip-checked-hover-background: #{colors.$basic-gray4};\n  --chip-checked-hover-color: #{colors.$basic-gray76};\n\n  // checked + disabled\n  --chip-checked-disabled-background: #{colors.$basic-white};\n  --chip-checked-disabled-color: #{colors.$basic-gray38};\n  --chip-checked-disabled-hover-background: #{colors.$basic-white};\n  --chip-checked-disabled-hover-color: #{colors.$basic-gray38};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"chip-module__root__bb1",disabled:"chip-module__disabled__d18",checked:"chip-module__checked__b47","padding-x":"chip-module__padding-x__c92","padding-start":"chip-module__padding-start__c98","adornment-gutter-default":"chip-module__adornment-gutter-default__fe0","colors-light":"chip-module__colors-light__d78","colors-dark":"chip-module__colors-dark__bb4","shape-square":"chip-module__shape-square__bb1","shape-pill":"chip-module__shape-pill__e16","section-main":"chip-module__section-main__ebf","section-end-adornment":"chip-module__section-end-adornment__bba","icon-button":"chip-module__icon-button__c90"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);