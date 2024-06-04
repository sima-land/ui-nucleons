/*! For license information please see price-__stories__-03-grapheme-before-stories.fb195140.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5302],{"./src/price/__stories__/03-grapheme-before.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GraphemeBefore:()=>GraphemeBefore,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_price__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/price/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const values=["0","0.1","0.15","0.00024","0.0000095","1000","2000.5","3000.56","4000.567","1234567","1234567.8","1234567.89","7.99","7.998","-0","-0.1","-0.15","-0.00024","-0.0000095","-1000","-2000.5","-3000.56","-4000.567","-1234567","-1234567.8","-1234567.89","-7.99","-7.998"],__WEBPACK_DEFAULT_EXPORT__={title:"common/Price",component:_sima_land_ui_nucleons_price__WEBPACK_IMPORTED_MODULE_0__.t,parameters:{storySource:{source:"import { Price } from '@sima-land/ui-nucleons/price';\n\nconst values = [\n  '0',\n  '0.1',\n  '0.15',\n  '0.00024',\n  '0.0000095',\n  '1000',\n  '2000.5',\n  '3000.56',\n  '4000.567',\n  '1234567',\n  '1234567.8',\n  '1234567.89',\n  '7.99',\n  '7.998',\n\n  // negative values\n  '-0',\n  '-0.1',\n  '-0.15',\n  '-0.00024',\n  '-0.0000095',\n  '-1000',\n  '-2000.5',\n  '-3000.56',\n  '-4000.567',\n  '-1234567',\n  '-1234567.8',\n  '-1234567.89',\n  '-7.99',\n  '-7.998',\n];\n\nexport default {\n  title: 'common/Price',\n  component: Price,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function GraphemeBefore() {\n  return (\n    <>\n      {values.map((value, index) => (\n        <div key={index} style={{ fontSize: 24, marginBottom: 16 }}>\n          <Price value={value} currencyGrapheme='$' graphemeBefore />\n        </div>\n      ))}\n    </>\n  );\n}\n\nGraphemeBefore.storyName = 'Графема впереди';\n",locationsMap:{"grapheme-before":{startLoc:{col:7,line:44},endLoc:{col:1,line:54},startBody:{col:7,line:44},endBody:{col:1,line:54}}}},layout:"padded"}},GraphemeBefore=function GraphemeBefore(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:values.map(((value,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{fontSize:24,marginBottom:16},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_price__WEBPACK_IMPORTED_MODULE_0__.t,{value,currencyGrapheme:"$",graphemeBefore:!0})},index)))})};GraphemeBefore.storyName="Графема впереди",GraphemeBefore.parameters={...GraphemeBefore.parameters,docs:{...GraphemeBefore.parameters?.docs,source:{originalSource:"function GraphemeBefore() {\n  return <>\n      {values.map((value, index) => <div key={index} style={{\n      fontSize: 24,\n      marginBottom: 16\n    }}>\n          <Price value={value} currencyGrapheme='$' graphemeBefore />\n        </div>)}\n    </>;\n}",...GraphemeBefore.parameters?.docs?.source}}};const __namedExportsOrder=["GraphemeBefore"]},"./src/price/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function formatInteger(value){let result="0";if(Number.isFinite(value)){const separated=[],list=utils_toString(0===value?0:Math.max(Math.abs(value),1e-4)).replace(/\..*$/g,"").split("");for(;list.length;)separated.unshift(list.splice(-3).join(""));result=separated.join(" ")}return value<0?`-${result}`:result}function formatFractional(value){let fractional="";return Number.isFinite(value)&&!Number.isInteger(value)&&(fractional=utils_toString(value).replace(/^.*\./g,"")),fractional}function utils_toString(value){let result;const absolute=Math.abs(value);return result=absolute<=1e-4?"0.0001":absolute<.01?absolute.toFixed(4):absolute.toFixed(2),value<0?`-${result}`:result}__webpack_require__.d(__webpack_exports__,{t:()=>Price});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),price_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/price/price.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(price_m.Z,options);const price_price_m=price_m.Z&&price_m.Z.locals?price_m.Z.locals:void 0;var react=__webpack_require__("./node_modules/react/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(price_price_m);function Price({className,currencyGrapheme:grapheme,graphemeBefore,crossedOut,value,"data-testid":testId="price"}){const content=(0,react.useMemo)((()=>function formatPrice(value,grapheme,{graphemeBefore}={}){const number=Number(value);return[grapheme&&graphemeBefore&&`${grapheme} `,formatInteger(number),Number.isFinite(number)&&!Number.isInteger(number)&&`,${formatFractional(number)}`,grapheme&&!graphemeBefore&&` ${grapheme}`].filter(Boolean).map((s=>s.replace(/\s/g," "))).join("")}(value,grapheme,{graphemeBefore})),[value,grapheme,graphemeBefore]);return(0,jsx_runtime.jsx)("span",{className:cx("root",className,crossedOut&&"crossed-out"),"data-testid":testId,children:content})}try{Price.displayName="Price",Price.__docgenInfo={description:"Цена товара с указанием знака валюты.",displayName:"Price",props:{className:{defaultValue:null,description:"Класс/стили цены.",name:"className",required:!1,type:{name:"string | undefined"}},crossedOut:{defaultValue:null,description:"Отображать цену 'старой' - серой и зачеркнутой.",name:"crossedOut",required:!1,type:{name:"boolean | undefined"}},currencyGrapheme:{defaultValue:null,description:"Графема валюты пользователя.",name:"currencyGrapheme",required:!1,type:{name:"string | undefined"}},graphemeBefore:{defaultValue:null,description:"Отобразить знак валюты перед ценой.",name:"graphemeBefore",required:!1,type:{name:"boolean | undefined"}},value:{defaultValue:null,description:"Цена.",name:"value",required:!0,type:{name:"string | number"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/price/price.tsx#Price"]={docgenInfo:Price.__docgenInfo,name:"Price",path:"src/price/price.tsx#Price"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/price/price.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".price-m__root__fb3{position:relative;display:inline-block;white-space:nowrap}.price-m__root__fb3.price-m__crossed-out__a96{color:#9e9e9e;text-decoration:line-through}","",{version:3,sources:["webpack://./src/price/price.m.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,oBACE,iBAAA,CACA,oBAAA,CACA,kBAAA,CACA,8CACE,aCCW,CAAA,4BAAA",sourcesContent:["@use '../colors';\n\n.root {\n  position: relative;\n  display: inline-block;\n  white-space: nowrap;\n  &.crossed-out {\n    color: colors.$basic-gray38;\n    text-decoration: line-through;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"price-m__root__fb3","crossed-out":"price-m__crossed-out__a96"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);