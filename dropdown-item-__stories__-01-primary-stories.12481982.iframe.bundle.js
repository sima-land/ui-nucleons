/*! For license information please see dropdown-item-__stories__-01-primary-stories.12481982.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3955],{"./src/dropdown-item/__stories__/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dropdown-item/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/DropdownItem",component:_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h,parameters:{storySource:{source:"import { DropdownItem } from '@sima-land/ui-nucleons/dropdown-item';\nimport { CSSProperties } from 'react';\n\nexport default {\n  title: 'common/DropdownItem',\n  component: DropdownItem,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';\n\n  const style: CSSProperties = {\n    maxWidth: '400px',\n  };\n\n  return (\n    <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>\n      {longText}\n    </DropdownItem>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  backgrounds: { default: 'custom:gray' },\n};\n",locationsMap:{primary:{startLoc:{col:7,line:12},endLoc:{col:1,line:24},startBody:{col:7,line:12},endBody:{col:1,line:24}}}},layout:"padded"}},Primary=function Primary(){const longText="Lorem ipsum dolor sit amet consectetur adipisicing elit. ";return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h,{size:"xl",style:{maxWidth:"400px"},endContent:"Текст",comment:longText,children:longText})};Primary.storyName="Простой пример",Primary.parameters={backgrounds:{default:"custom:gray"}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  const longText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ';\n  const style: CSSProperties = {\n    maxWidth: '400px'\n  };\n  return <DropdownItem size='xl' style={style} endContent='Текст' comment={longText}>\n      {longText}\n    </DropdownItem>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/dropdown-item/dropdown-item.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>DropdownItem});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dropdown_item_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown-item/dropdown-item.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dropdown_item_m.Z,options);const dropdown_item_dropdown_item_m=dropdown_item_m.Z&&dropdown_item_m.Z.locals?dropdown_item_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(dropdown_item_dropdown_item_m);function DropdownItem({value,size="m",children,className,selected,disabled,noHover,checked,startContent,startIcon:StartIcon,endContent,endIcon:EndIcon,comment,dangerouslySetInnerHTML,"data-testid":testId="dropdown-item",...restProps}){const start=StartIcon?(0,jsx_runtime.jsx)(StartIcon,{className:cx("icon")}):startContent,end=EndIcon?(0,jsx_runtime.jsx)(EndIcon,{className:cx("icon")}):endContent,hasChildren=[start,children,end].some((item=>void 0!==item));return(0,jsx_runtime.jsx)("div",{...void 0!==value&&{"data-value":value},...restProps,className:cx("root",`size-${size}`,selected&&"selected",checked&&"checked",disabled&&"disabled",noHover&&"no-hover",className),dangerouslySetInnerHTML,"data-testid":testId,children:hasChildren?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[start&&(0,jsx_runtime.jsx)("div",{className:cx("col","col-start"),children:start}),(0,jsx_runtime.jsxs)("div",{className:cx("col","col-center"),children:[(0,jsx_runtime.jsx)("div",{className:cx("row-main"),children}),"xl"===size&&comment&&(0,jsx_runtime.jsx)("div",{className:cx("row-comment"),children:comment})]}),end&&(0,jsx_runtime.jsx)("div",{className:cx("col","col-end"),children:end})]}):void 0})}try{DropdownItem.displayName="DropdownItem",DropdownItem.__docgenInfo={description:"Элемент выпадающего списка.",displayName:"DropdownItem",props:{checked:{defaultValue:null,description:"Отображать элемент как отмеченный (активный) или нет.",name:"checked",required:!1,type:{name:"boolean | undefined"}},selected:{defaultValue:null,description:"Отображать элемент как выбранный или нет.",name:"selected",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключен ли элемент.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:null,description:"Нужно ли отключить эффект при наведении.",name:"noHover",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'},{value:'"l"'},{value:'"xl"'}]}},value:{defaultValue:null,description:"Строковое значение, ассоциированное с элементом списка.",name:"value",required:!1,type:{name:"string | undefined"}},startContent:{defaultValue:null,description:"Контент перед основным содержимым.",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"Контент после основного содержимого.",name:"endContent",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:'Иконка перед основным содержимым. При указании будет проигнорирован "startContent".',name:"startIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},endIcon:{defaultValue:null,description:'Иконка после основного содержимого. При указании будет проигнорирован "endContent".',name:"endIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},comment:{defaultValue:null,description:"Контент под основным содержимым. Выводится только при size='xl'.",name:"comment",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown-item/dropdown-item.tsx#DropdownItem"]={docgenInfo:DropdownItem.__docgenInfo,name:"DropdownItem",path:"src/dropdown-item/dropdown-item.tsx#DropdownItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/dropdown-item/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>_dropdown_item__WEBPACK_IMPORTED_MODULE_0__.h});var _dropdown_item__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/dropdown-item/dropdown-item.tsx")},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown-item/dropdown-item.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-item-m__root__be2{display:flex;padding:var(--menu-item-gutter-y) 16px;font-size:16px;line-height:24px;min-height:var(--menu-item-min-height);max-height:var(--menu-item-max-height);background:#fff;overflow:hidden;--menu-item-primary-color: #212121;--menu-item-secondary-color: #9e9e9e;--menu-item-main-weight: 400}.dropdown-item-m__root__be2.dropdown-item-m__selected__ab2{--menu-item-primary-weight: 600}.dropdown-item-m__root__be2.dropdown-item-m__disabled__b64{--menu-item-primary-color: #c2c2c2;--menu-item-secondary-color: #c2c2c2}.dropdown-item-m__root__be2:not(.dropdown-item-m__disabled__b64):not(.dropdown-item-m__no-hover__e09).dropdown-item-m__checked__a44,.dropdown-item-m__root__be2:not(.dropdown-item-m__disabled__b64):not(.dropdown-item-m__no-hover__e09):hover{cursor:pointer;background:#f5f5f5}.dropdown-item-m__size-s__b81{--menu-item-min-height: 40px;--menu-item-max-height: 64px;--menu-item-gutter-y: 8px}.dropdown-item-m__size-m__f6a{--menu-item-min-height: 48px;--menu-item-max-height: 72px;--menu-item-gutter-y: 12px}.dropdown-item-m__size-l__f98{--menu-item-min-height: 56px;--menu-item-max-height: 80px;--menu-item-gutter-y: 16px}.dropdown-item-m__size-xl__d6b{--menu-item-min-height: 72px;--menu-item-max-height: 116px;--menu-item-gutter-y: 12px}.dropdown-item-m__col__d36+.dropdown-item-m__col__d36{margin-left:12px}.dropdown-item-m__col-start__caa{color:var(--menu-item-primary-color)}.dropdown-item-m__col-center__bd2{flex-grow:1}.dropdown-item-m__row-main__ca0{color:var(--menu-item-primary-color);font-weight:var(--menu-item-primary-weight);max-height:48px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.dropdown-item-m__row-comment__f11{margin-top:4px;font-size:14px;line-height:20px;max-height:40px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.dropdown-item-m__col-end__a94,.dropdown-item-m__row-comment__f11{color:var(--menu-item-secondary-color)}.dropdown-item-m__icon__b9c{display:block;fill:currentColor}","",{version:3,sources:["webpack://./src/dropdown-item/dropdown-item.m.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,4BACE,YAAA,CACA,sCAAA,CACA,cAAA,CACA,gBAAA,CACA,sCAAA,CACA,sCAAA,CACA,eAAA,CACA,eAAA,CACA,kCAAA,CACA,oCAAA,CACA,4BAAA,CACA,2DACE,+BAAA,CAEF,2DACE,kCAAA,CACA,oCAAA,CAEF,gPAEE,cAAA,CACA,kBCZU,CDiBd,8BACE,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGF,8BACE,4BAAA,CACA,4BAAA,CACA,0BAAA,CAGF,8BACE,4BAAA,CACA,4BAAA,CACA,0BAAA,CAGF,+BACE,4BAAA,CACA,6BAAA,CACA,0BAAA,CAIF,sDACE,gBAAA,CAGF,iCACE,oCAAA,CAGF,kCACE,WAAA,CAGF,gCACE,oCAAA,CACA,2CAAA,CACA,eAAA,CACA,mBAAA,CACA,2BAAA,CACA,oBAAA,CACA,eAAA,CAGF,mCACE,cAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,2BAAA,CACA,oBAAA,CACA,eAAA,CAGF,kEAEE,sCAAA,CAGF,4BACE,aAAA,CACA,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  padding: var(--menu-item-gutter-y) 16px;\n  font-size: 16px;\n  line-height: 24px;\n  min-height: var(--menu-item-min-height);\n  max-height: var(--menu-item-max-height);\n  background: #fff;\n  overflow: hidden;\n  --menu-item-primary-color: #{colors.$basic-gray87};\n  --menu-item-secondary-color: #{colors.$basic-gray38};\n  --menu-item-main-weight: 400;\n  &.selected {\n    --menu-item-primary-weight: 600;\n  }\n  &.disabled {\n    --menu-item-primary-color: #{colors.$basic-gray24};\n    --menu-item-secondary-color: #{colors.$basic-gray24};\n  }\n  &:not(.disabled):not(.no-hover).checked,\n  &:not(.disabled):not(.no-hover):hover {\n    cursor: pointer;\n    background: colors.$basic-gray4;\n  }\n}\n\n// sizes\n.size-s {\n  --menu-item-min-height: 40px;\n  --menu-item-max-height: 64px;\n  --menu-item-gutter-y: 8px;\n}\n\n.size-m {\n  --menu-item-min-height: 48px;\n  --menu-item-max-height: 72px;\n  --menu-item-gutter-y: 12px;\n}\n\n.size-l {\n  --menu-item-min-height: 56px;\n  --menu-item-max-height: 80px;\n  --menu-item-gutter-y: 16px;\n}\n\n.size-xl {\n  --menu-item-min-height: 72px;\n  --menu-item-max-height: 116px;\n  --menu-item-gutter-y: 12px;\n}\n\n// items\n.col + .col {\n  margin-left: 12px;\n}\n\n.col-start {\n  color: var(--menu-item-primary-color);\n}\n\n.col-center {\n  flex-grow: 1;\n}\n\n.row-main {\n  color: var(--menu-item-primary-color);\n  font-weight: var(--menu-item-primary-weight);\n  max-height: 48px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n\n.row-comment {\n  margin-top: 4px;\n  font-size: 14px;\n  line-height: 20px;\n  max-height: 40px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n\n.col-end,\n.row-comment {\n  color: var(--menu-item-secondary-color);\n}\n\n.icon {\n  display: block;\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"dropdown-item-m__root__be2",selected:"dropdown-item-m__selected__ab2",disabled:"dropdown-item-m__disabled__b64","no-hover":"dropdown-item-m__no-hover__e09",checked:"dropdown-item-m__checked__a44","size-s":"dropdown-item-m__size-s__b81","size-m":"dropdown-item-m__size-m__f6a","size-l":"dropdown-item-m__size-l__f98","size-xl":"dropdown-item-m__size-xl__d6b",col:"dropdown-item-m__col__d36","col-start":"dropdown-item-m__col-start__caa","col-center":"dropdown-item-m__col-center__bd2","row-main":"dropdown-item-m__row-main__ca0","row-comment":"dropdown-item-m__row-comment__f11","col-end":"dropdown-item-m__col-end__a94",icon:"dropdown-item-m__icon__b9c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);