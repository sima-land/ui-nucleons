/*! For license information please see file-icon-__stories__-index-stories.ca9f7fb8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2851],{"./src/file-icon/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomColors:()=>CustomColors,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),file_icon_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/file-icon/file-icon.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(file_icon_module.Z,options);const file_icon_file_icon_module=file_icon_module.Z&&file_icon_module.Z.locals?file_icon_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(file_icon_file_icon_module),KNOWN_TYPES=new Set(["doc","docx","heic","jpg","mov","mp4","pdf","png","rtf","txt","xls","xlsx","xml","zip"]);function FileIcon({type,typeDisplayed="string"==typeof type&&KNOWN_TYPES.has(type),...svgProps}){return type&&typeDisplayed?(0,jsx_runtime.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",...svgProps,children:[(0,jsx_runtime.jsx)("path",{className:cx("main",type.toLowerCase()),opacity:"0.88",d:"M6 5C6 3.89543 6.89543 3 8 3H20L26 9V27C26 28.1046 25.1046 29 24 29H8C6.89543 29 6 28.1046 6 27V5Z"}),(0,jsx_runtime.jsx)("path",{opacity:"0.32",d:"M21 9L26 9L20 3L20 8C20 8.55229 20.4477 9 21 9Z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{opacity:"0.24",d:"M25.1667 9L21 9L26 15L26 9C25.5833 9 25.6269 9 25.1667 9Z",fill:"black"}),(0,jsx_runtime.jsx)("text",{x:"16",y:"23",textAnchor:"middle",fontSize:"6.5",fontWeight:"700",fill:"#fff",children:type.toUpperCase()})]}):(0,jsx_runtime.jsxs)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",...svgProps,children:[(0,jsx_runtime.jsx)("path",{className:cx("main"),opacity:"0.88",d:"M6 5C6 3.89543 6.89543 3 8 3H20L26 9V27C26 28.1046 25.1046 29 24 29H8C6.89543 29 6 28.1046 6 27V5Z"}),(0,jsx_runtime.jsx)("path",{opacity:"0.32",d:"M21 9L26 9L20 3L20 8C20 8.55229 20.4477 9 21 9Z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{opacity:"0.24",d:"M25.1667 9L21 9L26 15L26 9C25.5833 9 25.6269 9 25.1667 9Z",fill:"black"}),(0,jsx_runtime.jsxs)("g",{opacity:"0.8",children:[(0,jsx_runtime.jsx)("path",{d:"M9 22H23V24H9V22Z",fill:"#fff"}),(0,jsx_runtime.jsx)("path",{d:"M9 18H19V20H9V18Z",fill:"#fff"})]})]})}try{FileIcon.displayName="FileIcon",FileIcon.__docgenInfo={description:"Компонент иконки файла.",displayName:"FileIcon",props:{type:{defaultValue:null,description:"Тип файла.",name:"type",required:!1,type:{name:"string | undefined"}},typeDisplayed:{defaultValue:{value:"typeof type === 'string' && KNOWN_TYPES.has(type)"},description:"Нужно ли выводить название типа.",name:"typeDisplayed",required:!1,type:{name:"boolean | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"FileIconStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/file-icon/file-icon.tsx#FileIcon"]={docgenInfo:FileIcon.__docgenInfo,name:"FileIcon",path:"src/file-icon/file-icon.tsx#FileIcon"})}catch(__react_docgen_typescript_loader_error){}const index_stories={title:"common/FileIcon",component:FileIcon,parameters:{storySource:{source:"import { FileIcon, FileIconStyle } from '@sima-land/ui-nucleons/file-icon';\nexport default {\n  title: 'common/FileIcon',\n  component: FileIcon,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <div style={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '12px'\n  }}>\n      <FileIcon width={48} height={48} type='doc' />\n      <FileIcon width={48} height={48} type='docx' />\n      <FileIcon width={48} height={48} type='heic' />\n      <FileIcon width={48} height={48} type='jpg' />\n      <FileIcon width={48} height={48} type='mov' />\n      <FileIcon width={48} height={48} type='mp4' />\n      <FileIcon width={48} height={48} type='pdf' />\n      <FileIcon width={48} height={48} type='png' />\n      <FileIcon width={48} height={48} type='rtf' />\n      <FileIcon width={48} height={48} type='txt' />\n      <FileIcon width={48} height={48} type='xls' />\n      <FileIcon width={48} height={48} type='xlsx' />\n      <FileIcon width={48} height={48} type='xml' />\n      <FileIcon width={48} height={48} type='zip' />\n      <FileIcon width={48} height={48} type='unknown' />\n    </div>;\n}\nPrimary.storyName = 'Простой пример';\nexport function CustomColors() {\n  const style: FileIconStyle = {\n    '--file-icon-primary-color': '#3264a8'\n  };\n  return <div style={{\n    display: 'flex',\n    gap: '12px'\n  }}>\n      <FileIcon style={style} width={48} height={48} type='doc' />\n      <FileIcon style={style} width={48} height={48} type='svg' typeDisplayed />\n      <FileIcon style={style} width={48} height={48} />\n    </div>;\n}\nCustomColors.storyName = 'Свои цвета';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <div style={{\\n    display: 'flex',\\n    flexWrap: 'wrap',\\n    gap: '12px'\\n  }}>\\n      <FileIcon width={48} height={48} type='doc' />\\n      <FileIcon width={48} height={48} type='docx' />\\n      <FileIcon width={48} height={48} type='heic' />\\n      <FileIcon width={48} height={48} type='jpg' />\\n      <FileIcon width={48} height={48} type='mov' />\\n      <FileIcon width={48} height={48} type='mp4' />\\n      <FileIcon width={48} height={48} type='pdf' />\\n      <FileIcon width={48} height={48} type='png' />\\n      <FileIcon width={48} height={48} type='rtf' />\\n      <FileIcon width={48} height={48} type='txt' />\\n      <FileIcon width={48} height={48} type='xls' />\\n      <FileIcon width={48} height={48} type='xlsx' />\\n      <FileIcon width={48} height={48} type='xml' />\\n      <FileIcon width={48} height={48} type='zip' />\\n      <FileIcon width={48} height={48} type='unknown' />\\n    </div>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nCustomColors.parameters = {\n  ...CustomColors.parameters,\n  docs: {\n    ...CustomColors.parameters?.docs,\n    source: {\n      originalSource: \"function CustomColors() {\\n  const style: FileIconStyle = {\\n    '--file-icon-primary-color': '#3264a8'\\n  };\\n  return <div style={{\\n    display: 'flex',\\n    gap: '12px'\\n  }}>\\n      <FileIcon style={style} width={48} height={48} type='doc' />\\n      <FileIcon style={style} width={48} height={48} type='svg' typeDisplayed />\\n      <FileIcon style={style} width={48} height={48} />\\n    </div>;\\n}\",\n      ...CustomColors.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:9},endLoc:{col:1,line:31},startBody:{col:7,line:9},endBody:{col:1,line:31}},"custom-colors":{startLoc:{col:7,line:33},endLoc:{col:1,line:45},startBody:{col:7,line:33},endBody:{col:1,line:45}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",gap:"12px"},children:[(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"doc"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"docx"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"heic"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"jpg"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"mov"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"mp4"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"pdf"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"png"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"rtf"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"txt"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"xls"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"xlsx"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"xml"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"zip"}),(0,jsx_runtime.jsx)(FileIcon,{width:48,height:48,type:"unknown"})]})};Primary.displayName="Primary",Primary.storyName="Простой пример";const CustomColors=function CustomColors(){const style={"--file-icon-primary-color":"#3264a8"};return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"12px"},children:[(0,jsx_runtime.jsx)(FileIcon,{style,width:48,height:48,type:"doc"}),(0,jsx_runtime.jsx)(FileIcon,{style,width:48,height:48,type:"svg",typeDisplayed:!0}),(0,jsx_runtime.jsx)(FileIcon,{style,width:48,height:48})]})};CustomColors.displayName="CustomColors",CustomColors.storyName="Свои цвета",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <div style={{\n    display: 'flex',\n    flexWrap: 'wrap',\n    gap: '12px'\n  }}>\n      <FileIcon width={48} height={48} type='doc' />\n      <FileIcon width={48} height={48} type='docx' />\n      <FileIcon width={48} height={48} type='heic' />\n      <FileIcon width={48} height={48} type='jpg' />\n      <FileIcon width={48} height={48} type='mov' />\n      <FileIcon width={48} height={48} type='mp4' />\n      <FileIcon width={48} height={48} type='pdf' />\n      <FileIcon width={48} height={48} type='png' />\n      <FileIcon width={48} height={48} type='rtf' />\n      <FileIcon width={48} height={48} type='txt' />\n      <FileIcon width={48} height={48} type='xls' />\n      <FileIcon width={48} height={48} type='xlsx' />\n      <FileIcon width={48} height={48} type='xml' />\n      <FileIcon width={48} height={48} type='zip' />\n      <FileIcon width={48} height={48} type='unknown' />\n    </div>;\n}",...Primary.parameters?.docs?.source}}},CustomColors.parameters={...CustomColors.parameters,docs:{...CustomColors.parameters?.docs,source:{originalSource:"function CustomColors() {\n  const style: FileIconStyle = {\n    '--file-icon-primary-color': '#3264a8'\n  };\n  return <div style={{\n    display: 'flex',\n    gap: '12px'\n  }}>\n      <FileIcon style={style} width={48} height={48} type='doc' />\n      <FileIcon style={style} width={48} height={48} type='svg' typeDisplayed />\n      <FileIcon style={style} width={48} height={48} />\n    </div>;\n}",...CustomColors.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","CustomColors"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/file-icon/file-icon.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".file-icon-module__main__b0c{fill:var(--file-icon-primary-color, #c2c2c2)}.file-icon-module__doc__bf7{fill:var(--file-icon-primary-color, #2962ff)}.file-icon-module__docx__ea3{fill:var(--file-icon-primary-color, #00599d)}.file-icon-module__heic__aa0{fill:var(--file-icon-primary-color, #902bd0)}.file-icon-module__jpg__a6c{fill:var(--file-icon-primary-color, #ff7200)}.file-icon-module__mov__fd0{fill:var(--file-icon-primary-color, #607d8b)}.file-icon-module__mp4__a94{fill:var(--file-icon-primary-color, #607d8b)}.file-icon-module__pdf__ae5{fill:var(--file-icon-primary-color, #d50000)}.file-icon-module__png__ce0{fill:var(--file-icon-primary-color, #b52ea8)}.file-icon-module__rtf__eef{fill:var(--file-icon-primary-color, #0091ea)}.file-icon-module__txt__bf4{fill:var(--file-icon-primary-color, #1b75c2)}.file-icon-module__xls__ebd{fill:var(--file-icon-primary-color, #64dd17)}.file-icon-module__xlsx__d12{fill:var(--file-icon-primary-color, #00c853)}.file-icon-module__xml__ecc{fill:var(--file-icon-primary-color, #634bdf)}.file-icon-module__zip__a3a{fill:var(--file-icon-primary-color, #09ab8b)}","",{version:3,sources:["webpack://./src/file-icon/file-icon.module.scss"],names:[],mappings:"AAEA,6BACE,4CAAA,CAIF,4BACE,4CAAA,CAGF,6BACE,4CAAA,CAGF,6BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,6BACE,4CAAA,CAGF,4BACE,4CAAA,CAGF,4BACE,4CAAA",sourcesContent:["@use '../colors';\n\n.main {\n  fill: var(--file-icon-primary-color, #{colors.$basic-gray24});\n}\n\n// ВАЖНО: далее используем цвет именно как резервное значение чтобы иметь возможность переопределения\n.doc {\n  fill: var(--file-icon-primary-color, #{colors.$additional-electric-blue});\n}\n\n.docx {\n  fill: var(--file-icon-primary-color, #{colors.$additional-deep-blue});\n}\n\n.heic {\n  fill: var(--file-icon-primary-color, #{colors.$additional-violet});\n}\n\n.jpg {\n  fill: var(--file-icon-primary-color, #{colors.$additional-deep-orange});\n}\n\n.mov {\n  fill: var(--file-icon-primary-color, #{colors.$additional-blue-gray});\n}\n\n.mp4 {\n  fill: var(--file-icon-primary-color, #{colors.$additional-blue-gray});\n}\n\n.pdf {\n  fill: var(--file-icon-primary-color, #{colors.$additional-deep-red});\n}\n\n.png {\n  fill: var(--file-icon-primary-color, #{colors.$additional-purple});\n}\n\n.rtf {\n  fill: var(--file-icon-primary-color, #{colors.$additional-light-blue});\n}\n\n.txt {\n  fill: var(--file-icon-primary-color, #{colors.$additional-unlit-blue});\n}\n\n.xls {\n  fill: var(--file-icon-primary-color, #{colors.$additional-light-green});\n}\n\n.xlsx {\n  fill: var(--file-icon-primary-color, #{colors.$additional-green});\n}\n\n.xml {\n  fill: var(--file-icon-primary-color, #{colors.$additional-deep-purple});\n}\n\n.zip {\n  fill: var(--file-icon-primary-color, #{colors.$additional-teal});\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={main:"file-icon-module__main__b0c",doc:"file-icon-module__doc__bf7",docx:"file-icon-module__docx__ea3",heic:"file-icon-module__heic__aa0",jpg:"file-icon-module__jpg__a6c",mov:"file-icon-module__mov__fd0",mp4:"file-icon-module__mp4__a94",pdf:"file-icon-module__pdf__ae5",png:"file-icon-module__png__ce0",rtf:"file-icon-module__rtf__eef",txt:"file-icon-module__txt__bf4",xls:"file-icon-module__xls__ebd",xlsx:"file-icon-module__xlsx__d12",xml:"file-icon-module__xml__ecc",zip:"file-icon-module__zip__a3a"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);