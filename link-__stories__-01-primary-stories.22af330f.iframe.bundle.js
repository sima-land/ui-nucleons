/*! For license information please see link-__stories__-01-primary-stories.22af330f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3494],{"./src/link/__stories__/01-primary.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/link/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Link",component:_sima_land_ui_nucleons_link__WEBPACK_IMPORTED_MODULE_0__.r,parameters:{storySource:{source:"import { Link } from '@sima-land/ui-nucleons/link';\n\nexport default {\n  title: 'common/Link',\n  component: Link,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Primary() {\n  return (\n    <>\n      <Link href='https://www.sima-land.ru' target='_blank'>\n        Наш сайт\n      </Link>\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:19},startBody:{col:7,line:11},endBody:{col:1,line:19}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_link__WEBPACK_IMPORTED_MODULE_0__.r,{href:"https://www.sima-land.ru",target:"_blank",children:"Наш сайт"})})};Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Link href='https://www.sima-land.ru' target='_blank'>\n        Наш сайт\n      </Link>\n    </>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/link/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),link_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(link_m.Z,options);const link_link_m=link_m.Z&&link_m.Z.locals?link_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(link_link_m),Link=(0,react.forwardRef)((function Link({children,className,color="basic-blue",disabled,pseudo,role,tabIndex,underline,"data-testid":testId="anchor",...restProps},ref){const baseProps=pseudo?{role:role||"button",tabIndex:disabled?void 0:tabIndex||0}:{role,tabIndex};return(0,jsx_runtime.jsx)("a",{...baseProps,...restProps,"data-testid":testId,ref,className:cx("link",className,color,{disabled,underline}),children})}));try{Link.displayName="Link",Link.__docgenInfo={description:"Ссылка.",displayName:"Link",props:{color:{defaultValue:{value:"basic-blue"},description:"Цвет (название токена).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray38"'},{value:'"basic-white"'},{value:'"additional-red"'},{value:'"additional-teal"'}]}},pseudo:{defaultValue:null,description:"Выводить как псевдо-ссылку.",name:"pseudo",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключает ссылку подобно кнопке.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},underline:{defaultValue:null,description:"Нужно ли подчеркивание.",name:"underline",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/link.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/link/link.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.m.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".link-m__link__cc5,.link-m__link__cc5:link,.link-m__link__cc5:visited,.link-m__link__cc5:hover,.link-m__link__cc5:active{text-decoration:none;font-weight:inherit;cursor:default;border-bottom-color:rgba(0,0,0,0)}.link-m__link__cc5.link-m__underline__aa7,.link-m__link__cc5:link.link-m__underline__aa7,.link-m__link__cc5:visited.link-m__underline__aa7,.link-m__link__cc5:hover.link-m__underline__aa7,.link-m__link__cc5:active.link-m__underline__aa7{text-decoration:underline}.link-m__link__cc5:hover{cursor:pointer}.link-m__link__cc5.link-m__disabled__bd9{color:#c2c2c2;pointer-events:none}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-blue__b6a{color:#1f84db}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-blue__b6a:hover{color:#00599d}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-gray87__fd7{color:#212121}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-gray87__fd7:hover{color:#757575}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-gray38__ad2{color:#9e9e9e}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-gray38__ad2:hover{color:#757575}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-white__aa5{color:#fff}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__basic-white__aa5:hover{color:#f5f5f5}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__additional-red__ab3{color:#fb3a2f}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__additional-red__ab3:hover{color:#d50000}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__additional-teal__e09{color:#09ab8b}.link-m__link__cc5:not(.link-m__disabled__bd9).link-m__additional-teal__e09:hover{color:#00c853}","",{version:3,sources:["webpack://./src/link/link.m.scss","webpack://./src/colors.scss","webpack://./src/link/link-util.scss"],names:[],mappings:"AAGA,yHAKE,oBAAA,CACA,mBAAA,CACA,cAAA,CACA,iCAAA,CACA,4OACE,yBAAA,CAIJ,yBACE,cAAA,CAIF,yCACE,aCda,CDeb,mBAAA,CAGF,uEEvBI,aDDS,CCET,6EACE,aDkCiB,CDTvB,yEEtBI,aDLW,CCMX,+EACE,aDJS,CD4Bf,yEErBI,aDNW,CCOX,+EACE,aDTS,CDgCf,wEEpBI,UDLU,CCMV,8EACE,aDTQ,CD+Bd,2EEnBI,aDNa,CCOb,iFACE,aDTgB,CD8BtB,4EElBI,aDRc,CCSd,kFACE,aDTa",sourcesContent:["@use '../colors';\n@use './link-util';\n\n.link,\n.link:link,\n.link:visited,\n.link:hover,\n.link:active {\n  text-decoration: none;\n  font-weight: inherit; // @todo выяснить можно ли это убрать\n  cursor: default;\n  border-bottom-color: transparent;\n  &.underline {\n    text-decoration: underline;\n  }\n}\n\n.link:hover {\n  cursor: pointer;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.link.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.link:not(.disabled).basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.link:not(.disabled).basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.link:not(.disabled).basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.link:not(.disabled).basic-white {\n  @include link-util.color('basic-white');\n}\n\n.link:not(.disabled).additional-red {\n  @include link-util.color('additional-red');\n}\n\n.link:not(.disabled).additional-teal {\n  @include link-util.color('additional-teal');\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n$additional-crimson: #f4446b;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link-m__link__cc5",underline:"link-m__underline__aa7",disabled:"link-m__disabled__bd9","basic-blue":"link-m__basic-blue__b6a","basic-gray87":"link-m__basic-gray87__fd7","basic-gray38":"link-m__basic-gray38__ad2","basic-white":"link-m__basic-white__aa5","additional-red":"link-m__additional-red__ab3","additional-teal":"link-m__additional-teal__e09"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);