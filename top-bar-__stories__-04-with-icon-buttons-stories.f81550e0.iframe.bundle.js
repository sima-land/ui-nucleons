/*! For license information please see top-bar-__stories__-04-with-icon-buttons-stories.f81550e0.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[777],{"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M11.707 4.707a1 1 0 0 0-1.414-1.414l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414-1.414L5.414 13H21a1 1 0 1 0 0-2H5.414l6.293-6.293Z"}))))},"./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Cross.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,ref)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props},react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{d:"M20.707 4.707a1 1 0 0 0-1.414-1.414L12 10.586 4.707 3.293a1 1 0 0 0-1.414 1.414L10.586 12l-7.293 7.293a1 1 0 1 0 1.414 1.414L12 13.414l7.293 7.293a1 1 0 0 0 1.414-1.414L13.414 12l7.293-7.293Z"}))))},"./src/top-bar/__stories__/04-with-icon-buttons.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithIconButtons:()=>WithIconButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/top-bar/index.ts"),_sima_land_ui_quarks_icons_24x24_Stroked_Cross__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/Cross.js"),_sima_land_ui_quarks_icons_24x24_Stroked_ArrowLeft__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@sima-land/ui-quarks/dist/esm/icons/24x24/Stroked/ArrowLeft.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/TopBar",component:_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_0__.Du,parameters:{storySource:{source:"import { TopBar } from '@sima-land/ui-nucleons/top-bar';\nimport CrossSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Cross';\nimport ArrowLeftSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/ArrowLeft';\n\nexport default {\n  title: 'common/TopBar',\n  component: TopBar,\n  parameters: {\n    layout: 'padded',\n    backgrounds: { default: 'custom:gray' },\n  },\n};\n\nexport function WithIconButtons() {\n  const stub = () => {\n    alert('Ничего не произошло');\n  };\n\n  return (\n    <div style={{ maxWidth: '720px', margin: '0 auto' }}>\n      <TopBar\n        size='m'\n        title='Это заголовок топбара'\n        subtitle='А это подзаголовок топбара'\n        buttons={{\n          start: { icon: <ArrowLeftSVG />, onClick: stub },\n          end: { icon: <CrossSVG />, onClick: stub },\n        }}\n      />\n    </div>\n  );\n}\n\nWithIconButtons.storyName = 'С кнопками-иконками';\n",locationsMap:{"with-icon-buttons":{startLoc:{col:7,line:14},endLoc:{col:1,line:32},startBody:{col:7,line:14},endBody:{col:1,line:32}}}},layout:"padded",backgrounds:{default:"custom:gray"}}},WithIconButtons=function WithIconButtons(){const stub=()=>{alert("Ничего не произошло")};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{maxWidth:"720px",margin:"0 auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_nucleons_top_bar__WEBPACK_IMPORTED_MODULE_0__.Du,{size:"m",title:"Это заголовок топбара",subtitle:"А это подзаголовок топбара",buttons:{start:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_quarks_icons_24x24_Stroked_ArrowLeft__WEBPACK_IMPORTED_MODULE_2__.Z,{}),onClick:stub},end:{icon:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_sima_land_ui_quarks_icons_24x24_Stroked_Cross__WEBPACK_IMPORTED_MODULE_1__.Z,{}),onClick:stub}}})})};WithIconButtons.storyName="С кнопками-иконками",WithIconButtons.parameters={...WithIconButtons.parameters,docs:{...WithIconButtons.parameters?.docs,source:{originalSource:"function WithIconButtons() {\n  const stub = () => {\n    alert('Ничего не произошло');\n  };\n  return <div style={{\n    maxWidth: '720px',\n    margin: '0 auto'\n  }}>\n      <TopBar size='m' title='Это заголовок топбара' subtitle='А это подзаголовок топбара' buttons={{\n      start: {\n        icon: <ArrowLeftSVG />,\n        onClick: stub\n      },\n      end: {\n        icon: <CrossSVG />,\n        onClick: stub\n      }\n    }} />\n    </div>;\n}",...WithIconButtons.parameters?.docs?.source}}};const __namedExportsOrder=["WithIconButtons"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);