/*! For license information please see rating-__stories__-index-stories.ed9f4090.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[4688],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Filled/Star.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M7.536 1.545a.5.5 0 0 1 .928 0l1.711 4.262 4.583.311a.5.5 0 0 1 .287.883L11.52 9.945l1.12 4.454a.5.5 0 0 1-.75.546L8 12.503l-3.89 2.442a.5.5 0 0 1-.75-.546l1.12-4.454L.955 7.001a.5.5 0 0 1 .287-.883l4.583-.31 1.711-4.263Z"})})));exports.Z=ForwardRef},"./src/rating/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DifferentSizes:()=>DifferentSizes,Primary:()=>Primary,TestApproximation:()=>TestApproximation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});const roundHalf=value=>Math.round(2*value)/2,getStars=(value,count)=>[...Array(count).keys()].reduce((acc=>(acc.total>=1?acc.stars.push("full"):acc.total>0?acc.stars.push("half"):acc.stars.push("empty"),acc.total--,acc)),{total:roundHalf(value),stars:[]}).stars;var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),Star=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Filled/Star.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),rating_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/rating/rating.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(rating_module.Z,options);const rating_rating_module=rating_module.Z&&rating_module.Z.locals?rating_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(rating_rating_module),Rating=({size="s",value,className,"data-testid":testId="rating",...restProps})=>(0,jsx_runtime.jsx)("div",{...restProps,className:cx("root",className),"data-testid":testId,"data-rating":value,children:getStars(Math.min(5,value),5).map(((type,index)=>(0,jsx_runtime.jsx)(rating_Star,{type,size},index)))});Rating.displayName="Rating";const rating_Star=({type,size})=>(0,jsx_runtime.jsxs)("div",{className:cx("star",`size-${size}`),children:["empty"===type&&(0,jsx_runtime.jsx)(Star.Z,{className:cx("svg")}),"half"===type&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Star.Z,{className:cx("svg")}),(0,jsx_runtime.jsx)(Star.Z,{className:cx("svg","half"),preserveAspectRatio:"xMinYMin slice"})]}),"full"===type&&(0,jsx_runtime.jsx)(Star.Z,{className:cx("svg","full")})]});rating_Star.displayName="Star";try{Rating.displayName="Rating",Rating.__docgenInfo={description:"Звезды рейтинга.",displayName:"Rating",props:{size:{defaultValue:{value:"s"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"m"'}]}},value:{defaultValue:null,description:"Значение рейтинга.",name:"value",required:!0,type:{name:"number"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/rating/index.tsx#Rating"]={docgenInfo:Rating.__docgenInfo,name:"Rating",path:"src/rating/index.tsx#Rating"})}catch(__react_docgen_typescript_loader_error){}const prettyValues=[0,.5,1,1.5,2,2.5,3,3.5,4,4.5,5],values=[.1,.2,.6,1.2,1.8,2.1,3,3.6,4.4,5],index_stories={title:"common/Rating",component:Rating,parameters:{storySource:{source:"import { Rating } from '@sima-land/ui-nucleons/rating';\nconst prettyValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];\nconst values = [0.1, 0.2, 0.6, 1.2, 1.8, 2.1, 3, 3.6, 4.4, 5];\nexport default {\n  title: 'common/Rating',\n  component: Rating,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <>\n      <Rating value={3.7} />\n    </>;\n}\nPrimary.storyName = 'Простой пример';\nexport function DifferentSizes() {\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '12px'\n  }}>\n      <Rating size='s' value={3.7} />\n      <Rating size='m' value={3.7} />\n    </div>;\n}\nDifferentSizes.storyName = 'Различные размеры';\nexport function TestApproximation() {\n  return <>\n      {[...prettyValues, ...values].map((value, index) => <div key={index} style={{\n      display: 'flex',\n      marginBottom: 16\n    }}>\n          <div style={{\n        width: 48\n      }}>{value}</div>\n          <Rating value={value} />\n        </div>)}\n    </>;\n}\nTestApproximation.storyName = 'Тест: Аппроксимация значений';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <>\\n      <Rating value={3.7} />\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nDifferentSizes.parameters = {\n  ...DifferentSizes.parameters,\n  docs: {\n    ...DifferentSizes.parameters?.docs,\n    source: {\n      originalSource: \"function DifferentSizes() {\\n  return <div style={{\\n    display: 'flex',\\n    flexDirection: 'column',\\n    gap: '12px'\\n  }}>\\n      <Rating size='s' value={3.7} />\\n      <Rating size='m' value={3.7} />\\n    </div>;\\n}\",\n      ...DifferentSizes.parameters?.docs?.source\n    }\n  }\n};\nTestApproximation.parameters = {\n  ...TestApproximation.parameters,\n  docs: {\n    ...TestApproximation.parameters?.docs,\n    source: {\n      originalSource: \"function TestApproximation() {\\n  return <>\\n      {[...prettyValues, ...values].map((value, index) => <div key={index} style={{\\n      display: 'flex',\\n      marginBottom: 16\\n    }}>\\n          <div style={{\\n        width: 48\\n      }}>{value}</div>\\n          <Rating value={value} />\\n        </div>)}\\n    </>;\\n}\",\n      ...TestApproximation.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:15},startBody:{col:7,line:11},endBody:{col:1,line:15}},"different-sizes":{startLoc:{col:7,line:17},endLoc:{col:1,line:26},startBody:{col:7,line:17},endBody:{col:1,line:26}},"test-approximation":{startLoc:{col:7,line:28},endLoc:{col:1,line:40},startBody:{col:7,line:28},endBody:{col:1,line:40}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Rating,{value:3.7})})};Primary.storyName="Простой пример";const DifferentSizes=function DifferentSizes(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[(0,jsx_runtime.jsx)(Rating,{size:"s",value:3.7}),(0,jsx_runtime.jsx)(Rating,{size:"m",value:3.7})]})};DifferentSizes.displayName="DifferentSizes",DifferentSizes.storyName="Различные размеры";const TestApproximation=function TestApproximation(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[...prettyValues,...values].map(((value,index)=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",marginBottom:16},children:[(0,jsx_runtime.jsx)("div",{style:{width:48},children:value}),(0,jsx_runtime.jsx)(Rating,{value})]},index)))})};TestApproximation.storyName="Тест: Аппроксимация значений",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Rating value={3.7} />\n    </>;\n}",...Primary.parameters?.docs?.source}}},DifferentSizes.parameters={...DifferentSizes.parameters,docs:{...DifferentSizes.parameters?.docs,source:{originalSource:"function DifferentSizes() {\n  return <div style={{\n    display: 'flex',\n    flexDirection: 'column',\n    gap: '12px'\n  }}>\n      <Rating size='s' value={3.7} />\n      <Rating size='m' value={3.7} />\n    </div>;\n}",...DifferentSizes.parameters?.docs?.source}}},TestApproximation.parameters={...TestApproximation.parameters,docs:{...TestApproximation.parameters?.docs,source:{originalSource:"function TestApproximation() {\n  return <>\n      {[...prettyValues, ...values].map((value, index) => <div key={index} style={{\n      display: 'flex',\n      marginBottom: 16\n    }}>\n          <div style={{\n        width: 48\n      }}>{value}</div>\n          <Rating value={value} />\n        </div>)}\n    </>;\n}",...TestApproximation.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","DifferentSizes","TestApproximation"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/rating/rating.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rating-module__root__c65{display:flex;flex-wrap:nowrap}.rating-module__star__cee{position:relative}.rating-module__star__cee.rating-module__size-s__eb5{width:16px;height:16px}.rating-module__star__cee.rating-module__size-s__eb5+.rating-module__star__cee.rating-module__size-s__eb5{margin-left:4px}.rating-module__star__cee.rating-module__size-m__c2d{width:24px;height:24px}.rating-module__star__cee.rating-module__size-m__c2d+.rating-module__star__cee.rating-module__size-m__c2d{margin-left:6px}.rating-module__svg__ba0{display:block;position:absolute;top:0;left:0;width:100%;height:100%;fill:#e0e0e0}.rating-module__svg__ba0.rating-module__half__de6{width:50%;fill:#ffab00}.rating-module__svg__ba0.rating-module__full__b3b{fill:#ffab00}","",{version:3,sources:["webpack://./src/rating/rating.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,0BACE,YAAA,CACA,gBAAA,CAGF,0BACE,iBAAA,CACA,qDACE,UAAA,CACA,WAAA,CACA,0GACE,eAAA,CAGJ,qDACE,UAAA,CACA,WAAA,CACA,0GACE,eAAA,CAKN,yBACE,aAAA,CACA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CACA,YCtBa,CDuBb,kDACE,SAAA,CACA,YAAA,CAEF,kDACE,YCHe",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  flex-wrap: nowrap;\n}\n\n.star {\n  position: relative;\n  &.size-s {\n    width: 16px;\n    height: 16px;\n    & + & {\n      margin-left: 4px;\n    }\n  }\n  &.size-m {\n    width: 24px;\n    height: 24px;\n    & + & {\n      margin-left: 6px;\n    }\n  }\n}\n\n.svg {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  fill: colors.$basic-gray12;\n  &.half {\n    width: 50%;\n    fill: colors.$additional-amber;\n  }\n  &.full {\n    fill: colors.$additional-amber;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"rating-module__root__c65",star:"rating-module__star__cee","size-s":"rating-module__size-s__eb5","size-m":"rating-module__size-m__c2d",svg:"rating-module__svg__ba0",half:"rating-module__half__de6",full:"rating-module__full__b3b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);