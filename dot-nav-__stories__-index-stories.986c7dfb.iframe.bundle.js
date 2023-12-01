/*! For license information please see dot-nav-__stories__-index-stories.986c7dfb.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2672],{"./src/dot-nav/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LargeSize:()=>LargeSize,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dot_nav_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dot-nav/dot-nav.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dot_nav_module.Z,options);const dot_nav_dot_nav_module=dot_nav_module.Z&&dot_nav_module.Z.locals?dot_nav_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(dot_nav_dot_nav_module);function DotNav({size="s",current=0,total=1,onSelect}){const withShift=total>4,itemGutter={s:0,l:6}[size],maxWidth=70+4*itemGutter,totalWidth=14*total+itemGutter*(total-1),shift=function useShift(current,total){const shiftRef=(0,react.useRef)(0),prevCurrentRef=(0,react.useRef)(0);if(total>4){const currentPos=current-shiftRef.current,prevCurrent=prevCurrentRef.current,prevCurrentPos=prevCurrent-shiftRef.current;let newShift=shiftRef.current;if(currentPos>2){newShift+=current-prevCurrent-(Math.max(prevCurrentPos,2)+shiftRef.current-prevCurrent)}else if(currentPos<0){newShift-=prevCurrent-current+(Math.min(prevCurrentPos,0)+shiftRef.current-prevCurrent)}shiftRef.current=newShift}return prevCurrentRef.current=current,shiftRef.current}(current,total),correction=withShift?14+itemGutter:(maxWidth-totalWidth)/2;return(0,jsx_runtime.jsx)("div",{className:cx("root",`size-${size}`),style:{width:maxWidth,height:14},children:Array(total).fill(0).map(((zero,index)=>{const position=index-shift+1;return(0,jsx_runtime.jsx)("div",{style:{left:`${correction+(index-shift)*(14+itemGutter)}px`},onClick:()=>onSelect?.(index),className:cx("item",index===current&&"active",withShift&&(position<=0||position>=4)&&"distant")},index)}))})}DotNav.displayName="DotNav";try{DotNav.displayName="DotNav",DotNav.__docgenInfo={description:"Точки навигации. Используются в основном рядом с каруселями и слайдерами.",displayName:"DotNav",props:{current:{defaultValue:{value:"0"},description:"Индекс выбранной точки.",name:"current",required:!1,type:{name:"number | undefined"}},total:{defaultValue:{value:"1"},description:"Количество точек.",name:"total",required:!1,type:{name:"number | undefined"}},onSelect:{defaultValue:null,description:"Сработает при выборе точки.",name:"onSelect",required:!1,type:{name:"((index: number) => void) | undefined"}},size:{defaultValue:{value:"s"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dot-nav/dot-nav.tsx#DotNav"]={docgenInfo:DotNav.__docgenInfo,name:"DotNav",path:"src/dot-nav/dot-nav.tsx#DotNav"})}catch(__react_docgen_typescript_loader_error){}const styles={wrap:{height:160,maxWidth:480,position:"relative",margin:"32px auto",border:"2px dashed #ddd",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center"},btnWrap:{position:"absolute",top:0,left:0,right:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"space-between",padding:32,pointerEvents:"none"},btn:{border:0,pointerEvents:"all",padding:0,width:48,height:48,background:"#ddd",display:"flex",alignItems:"center",justifyContent:"center"}},index_stories={title:"common/DotNav",component:DotNav,parameters:{storySource:{source:"import { DotNav, DotNavSize } from '@sima-land/ui-nucleons/dot-nav';\nimport { CSSProperties, useState } from 'react';\nconst styles = {\n  wrap: ({\n    height: 160,\n    maxWidth: 480,\n    position: 'relative',\n    margin: '32px auto',\n    border: '2px dashed #ddd',\n    borderRadius: '4px',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  } satisfies CSSProperties),\n  btnWrap: ({\n    position: 'absolute',\n    top: 0,\n    left: 0,\n    right: 0,\n    bottom: 0,\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'space-between',\n    padding: 32,\n    pointerEvents: 'none'\n  } satisfies CSSProperties),\n  btn: ({\n    border: 0,\n    pointerEvents: 'all',\n    padding: 0,\n    width: 48,\n    height: 48,\n    background: '#ddd',\n    display: 'flex',\n    alignItems: 'center',\n    justifyContent: 'center'\n  } satisfies CSSProperties)\n};\nexport default {\n  title: 'common/DotNav',\n  component: DotNav,\n  parameters: {\n    layout: 'padded'\n  }\n};\nfunction DemoBlock({\n  total = 1,\n  size\n}: {\n  total: number;\n  size?: DotNavSize;\n}) {\n  const [current, setCurrent] = useState<number>(total - 1);\n  return <div style={styles.wrap}>\n      <DotNav size={size} current={current} total={total} onSelect={index => {\n      setCurrent(index);\n      alert('В такую маленькую точку попасть сложно, но вы справились!');\n    }} />\n\n      <div style={styles.btnWrap}>\n        <button style={styles.btn} onClick={() => setCurrent((total + (current - 1)) % total)}>\n          ◄\n        </button>\n        <button style={styles.btn} onClick={() => setCurrent((total + (current + 1)) % total)}>\n          ►\n        </button>\n      </div>\n    </div>;\n}\nexport function Primary() {\n  return <>\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} />)}\n    </>;\n}\nPrimary.storyName = 'Простой пример';\nexport function LargeSize() {\n  return <>\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} size='l' />)}\n    </>;\n}\nLargeSize.storyName = 'Размер L';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <>\\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} />)}\\n    </>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nLargeSize.parameters = {\n  ...LargeSize.parameters,\n  docs: {\n    ...LargeSize.parameters?.docs,\n    source: {\n      originalSource: \"function LargeSize() {\\n  return <>\\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} size='l' />)}\\n    </>;\\n}\",\n      ...LargeSize.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:70},endLoc:{col:1,line:74},startBody:{col:7,line:70},endBody:{col:1,line:74}},"large-size":{startLoc:{col:7,line:76},endLoc:{col:1,line:80},startBody:{col:7,line:76},endBody:{col:1,line:80}}}},layout:"padded"}};function DemoBlock({total=1,size}){const[current,setCurrent]=(0,react.useState)(total-1);return(0,jsx_runtime.jsxs)("div",{style:styles.wrap,children:[(0,jsx_runtime.jsx)(DotNav,{size,current,total,onSelect:index=>{setCurrent(index),alert("В такую маленькую точку попасть сложно, но вы справились!")}}),(0,jsx_runtime.jsxs)("div",{style:styles.btnWrap,children:[(0,jsx_runtime.jsx)("button",{style:styles.btn,onClick:()=>setCurrent((total+(current-1))%total),children:"◄"}),(0,jsx_runtime.jsx)("button",{style:styles.btn,onClick:()=>setCurrent((total+(current+1))%total),children:"►"})]})]})}DemoBlock.displayName="DemoBlock";const Primary=function Primary(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array(10).fill(0).map(((zero,index)=>index+1)).map((index=>(0,jsx_runtime.jsx)(DemoBlock,{total:index},index)))})};Primary.storyName="Простой пример";const LargeSize=function LargeSize(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:Array(10).fill(0).map(((zero,index)=>index+1)).map((index=>(0,jsx_runtime.jsx)(DemoBlock,{total:index,size:"l"},index)))})};LargeSize.storyName="Размер L",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} />)}\n    </>;\n}",...Primary.parameters?.docs?.source}}},LargeSize.parameters={...LargeSize.parameters,docs:{...LargeSize.parameters?.docs,source:{originalSource:"function LargeSize() {\n  return <>\n      {Array(10).fill(0).map((zero, index) => index + 1).map(index => <DemoBlock key={index} total={index} size='l' />)}\n    </>;\n}",...LargeSize.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","LargeSize"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dot-nav/dot-nav.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.dot-nav-module__root__af8{display:flex;position:relative;overflow:hidden}.dot-nav-module__root__af8.dot-nav-module__size-s__f9e{--dot-regular-size: 6;--dot-active-size: 6;--dot-distant-size: 4}.dot-nav-module__root__af8.dot-nav-module__size-l__ed4{--dot-regular-size: 8;--dot-active-size: 12;--dot-distant-size: 4}.dot-nav-module__item__fd7{position:absolute;top:0;width:14px;height:14px;transition:left .3s;--dot-size: var(--dot-regular-size);cursor:pointer}.dot-nav-module__item__fd7.dot-nav-module__active__f5c{--dot-size: var(--dot-active-size)}.dot-nav-module__item__fd7.dot-nav-module__distant__b45{--dot-size: var(--dot-distant-size)}.dot-nav-module__item__fd7::after{content:"";display:block;position:absolute;top:50%;left:50%;border-radius:50%;background:#e0e0e0;width:10px;height:10px;transform:translate3d(-50%, -50%, 0) scale(calc(var(--dot-size) / 10));transition:transform .3s,background .3s}.dot-nav-module__item__fd7.dot-nav-module__active__f5c::after{background:#9e9e9e}',"",{version:3,sources:["webpack://./src/dot-nav/dot-nav.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,2BACE,YAAA,CACA,iBAAA,CACA,eAAA,CACA,uDACE,qBAAA,CACA,oBAAA,CACA,qBAAA,CAEF,uDACE,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIJ,2BACE,iBAAA,CACA,KAAA,CACA,UAAA,CACA,WAAA,CACA,mBAAA,CACA,mCAAA,CACA,cAAA,CACA,uDACE,kCAAA,CAEF,wDACE,mCAAA,CAEF,kCACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,OAAA,CACA,QAAA,CACA,iBAAA,CACA,kBC7BW,CDiCX,UAAA,CACA,WAAA,CAGA,sEAAA,CACA,uCAAA,CAEF,8DACE,kBC3CW",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  &.size-s {\n    --dot-regular-size: 6;\n    --dot-active-size: 6;\n    --dot-distant-size: 4;\n  }\n  &.size-l {\n    --dot-regular-size: 8;\n    --dot-active-size: 12;\n    --dot-distant-size: 4;\n  }\n}\n\n.item {\n  position: absolute;\n  top: 0;\n  width: 14px;\n  height: 14px;\n  transition: left 0.3s;\n  --dot-size: var(--dot-regular-size);\n  cursor: pointer;\n  &.active {\n    --dot-size: var(--dot-active-size);\n  }\n  &.distant {\n    --dot-size: var(--dot-distant-size);\n  }\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    border-radius: 50%;\n    background: colors.$basic-gray12;\n\n    // используем 10 чтобы проще считать коэффициенты масштабирования\n    // ВАЖНО: не надо использовать здесь число больше чем размер родителя с overflow:hidden - моргает в Safari\n    width: 10px;\n    height: 10px;\n\n    // используем scale() чтобы плавное изменение размера выглядело нормально\n    transform: translate3d(-50%, -50%, 0) scale(calc(var(--dot-size) / 10));\n    transition: transform 0.3s, background 0.3s;\n  }\n  &.active::after {\n    background: colors.$basic-gray38;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"dot-nav-module__root__af8","size-s":"dot-nav-module__size-s__f9e","size-l":"dot-nav-module__size-l__ed4",item:"dot-nav-module__item__fd7",active:"dot-nav-module__active__f5c",distant:"dot-nav-module__distant__b45"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);