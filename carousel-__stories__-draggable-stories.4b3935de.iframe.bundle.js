/*! For license information please see carousel-__stories__-draggable-stories.4b3935de.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[1528],{"./src/carousel/__stories__/draggable.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_carousel_draggable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/carousel/draggable.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"service/Draggable",component:_sima_land_ui_nucleons_carousel_draggable__WEBPACK_IMPORTED_MODULE_0__._,parameters:{storySource:{source:"import { Draggable } from '@sima-land/ui-nucleons/carousel/draggable';\nexport default {\n  title: 'service/Draggable',\n  component: Draggable,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <Draggable containerProps={{\n    style: {\n      width: 300,\n      height: 200,\n      border: '1px solid #aaa'\n    }\n  }}>\n      <div style={{\n      width: '100%',\n      height: '100%',\n      background: '#eee',\n      padding: 20,\n      boxSizing: 'border-box'\n    }}>\n        This div is draggable\n      </div>\n    </Draggable>;\n}\nPrimary.storyName = 'Простой пример';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <Draggable containerProps={{\\n    style: {\\n      width: 300,\\n      height: 200,\\n      border: '1px solid #aaa'\\n    }\\n  }}>\\n      <div style={{\\n      width: '100%',\\n      height: '100%',\\n      background: '#eee',\\n      padding: 20,\\n      boxSizing: 'border-box'\\n    }}>\\n        This div is draggable\\n      </div>\\n    </Draggable>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:9},endLoc:{col:1,line:27},startBody:{col:7,line:9},endBody:{col:1,line:27}}}},layout:"padded"}},Primary=function Primary(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_sima_land_ui_nucleons_carousel_draggable__WEBPACK_IMPORTED_MODULE_0__._,{containerProps:{style:{width:300,height:200,border:"1px solid #aaa"}},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{width:"100%",height:"100%",background:"#eee",padding:20,boxSizing:"border-box"},children:"This div is draggable"})})};Primary.displayName="Primary",Primary.storyName="Простой пример",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <Draggable containerProps={{\n    style: {\n      width: 300,\n      height: 200,\n      border: '1px solid #aaa'\n    }\n  }}>\n      <div style={{\n      width: '100%',\n      height: '100%',\n      background: '#eee',\n      padding: 20,\n      boxSizing: 'border-box'\n    }}>\n        This div is draggable\n      </div>\n    </Draggable>;\n}",...Primary.parameters?.docs?.source}}};const __namedExportsOrder=["Primary"]},"./src/carousel/draggable.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>Draggable});var react=__webpack_require__("./node_modules/react/index.js"),point=__webpack_require__("./src/helpers/point.ts");const draggable_event=class DraggableEvent{constructor(props){this.prevented=!1,this.offset=props.offset,this.client=props.client}preventDefault(){this.prevented=!0}};var styles=__webpack_require__("./src/helpers/styles.ts"),events=__webpack_require__("./src/helpers/events.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),draggable_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/draggable.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(draggable_module.Z,options);const carousel_draggable_module=draggable_module.Z&&draggable_module.Z.locals?draggable_module.Z.locals:void 0;var on=__webpack_require__("./src/helpers/on.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(carousel_draggable_module),EVENT_NAMES={move:["mousemove","touchmove"],moveEnd:["mouseup","touchend","touchcancel"]};class Draggable extends react.Component{constructor(props){super(props),this.isGrabbed=!1,this.hasTransition=!1,this.needPreventClick=!1,this.currentOffset=(0,point.Z)(),this.clientPosition=(0,point.Z)(),this.draggableRef=(0,react.createRef)(),this.handleClickCapture=this.handleClickCapture.bind(this),this.startCapture=this.startCapture.bind(this),this.offList=[]}componentDidMount(){this.initGlobalListeners(),this.passControl()}initGlobalListeners(){const listen=fn=>eventName=>(0,on.Z)(window,eventName,fn),moveHandler=this.handleMove.bind(this),moveEndHandler=this.handleMoveEnd.bind(this);this.offList=[...EVENT_NAMES.move.map(listen(moveHandler)),...EVENT_NAMES.moveEnd.map(listen(moveEndHandler))]}passControl(){const{takeControl}=this.props;takeControl&&takeControl({isGrabbed:()=>this.isGrabbed,setOffset:this.setOffset.bind(this),toggleTransition:this.toggleTransition.bind(this),isTransitionEnabled:this.isTransitionEnabled.bind(this)})}componentWillUnmount(){this.offList.forEach((fn=>fn()))}startCapture(event){const{x,y}=this.currentOffset,{active=!0,onDragStart}=this.props,isTouch=(0,events.z6)(event);active&&((0,events.gn)(event)||isTouch)&&(this.toggleGrabbed(!0),this.saveClientPosition(event),isTouch||(event.preventDefault(),window.getSelection().removeAllRanges()),onDragStart&&onDragStart(new draggable_event({offset:(0,point.Z)(x,y),client:(0,events.I5)(event)})))}handleMove(event){const{axis,onDragMove}=this.props;if(this.isGrabbed){const{x,y}=this.currentOffset,{dx,dy}=this.getClientDelta(event),offsetX=x-("y"!==axis?dx:0),offsetY=y-("x"!==axis?dy:0),customEvent=new draggable_event({offset:(0,point.Z)(x,y),client:(0,events.I5)(event)});(0,events.z6)(event)||(event.preventDefault(),window.getSelection()?.removeAllRanges(),this.togglePreventClickNeed(!0)),onDragMove&&onDragMove(customEvent),customEvent.prevented||(this.saveClientPosition(event),this.setOffset(offsetX,offsetY))}}handleMoveEnd(event){const{x:clientX,y:clientY}=this.clientPosition,{x,y}=this.currentOffset,{onDragEnd}=this.props;this.isGrabbed&&onDragEnd&&(!(0,events.z6)(event)&&event.preventDefault(),onDragEnd(new draggable_event({offset:(0,point.Z)(x,y),client:(0,point.Z)(clientX,clientY)}))),this.toggleGrabbed(!1)}handleClickCapture(event){this.needPreventClick&&(event.preventDefault(),this.togglePreventClickNeed(!1))}getClientDelta(event){const eventPos=(0,events.I5)(event);return{dx:this.clientPosition.x-eventPos.x,dy:this.clientPosition.y-eventPos.y}}toggleGrabbed(active){this.isGrabbed=Boolean(active)}toggleTransition(active){const{transitionDuration:duration=320}=this.props,{current:draggableEl}=this.draggableRef;draggableEl&&this.hasTransition!==Boolean(active)&&(this.hasTransition=Boolean(active),draggableEl.style.transition=active?(0,styles.O1)(duration,"transform"):"")}isTransitionEnabled(){return this.hasTransition}saveClientPosition(event){const eventPos=(0,events.I5)(event);this.clientPosition.x=eventPos.x,this.clientPosition.y=eventPos.y}togglePreventClickNeed(needPrevent){this.needPreventClick=Boolean(needPrevent)}setOffset(x,y){const{current:draggableEl}=this.draggableRef;this.currentOffset.x=x||0,this.currentOffset.y=y||0,draggableEl&&(draggableEl.style.transform=(0,styles.PA)(x,y))}render(){const{children,containerProps={},transitionDuration:duration=320}=this.props,{x,y}=this.currentOffset;return(0,jsx_runtime.jsx)("div",{...containerProps,className:cx("draggable-container",containerProps.className),onClickCapture:this.handleClickCapture,onMouseDown:this.startCapture,onTouchStart:this.startCapture,children:(0,jsx_runtime.jsx)("div",{ref:this.draggableRef,style:{transform:(0,styles.PA)(x,y),transition:this.hasTransition?(0,styles.O1)(duration,"transform"):""},className:cx("draggable"),children})})}}Draggable.displayName="Draggable";try{Draggable.displayName="Draggable",Draggable.__docgenInfo={description:"Компонент области, которую можно прокручивать перетаскиванием.",displayName:"Draggable",props:{axis:{defaultValue:null,description:"",name:"axis",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"x"'},{value:'"y"'}]}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean | undefined"}},onDragStart:{defaultValue:null,description:"",name:"onDragStart",required:!1,type:{name:"DraggableEventHandler | undefined"}},onDragMove:{defaultValue:null,description:"",name:"onDragMove",required:!1,type:{name:"DraggableEventHandler | undefined"}},onDragEnd:{defaultValue:null,description:"",name:"onDragEnd",required:!1,type:{name:"DraggableEventHandler | undefined"}},takeControl:{defaultValue:null,description:"",name:"takeControl",required:!1,type:{name:"((c: Control) => void) | undefined"}},transitionDuration:{defaultValue:null,description:"",name:"transitionDuration",required:!1,type:{name:"number | undefined"}},containerProps:{defaultValue:null,description:"",name:"containerProps",required:!1,type:{name:"HTMLProps<HTMLDivElement> | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/carousel/draggable.tsx#Draggable"]={docgenInfo:Draggable.__docgenInfo,name:"Draggable",path:"src/carousel/draggable.tsx#Draggable"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/events.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I5:()=>getEventClientPos,_X:()=>triggerInput,gn:()=>isMainMouseButton,z6:()=>isTouchEvent});var _point__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/helpers/point.ts");function isMainMouseButton(event){return 0===event?.button}function isTouchEvent(event){return Boolean(event?.touches)}function getEventClientPos(event){const source=isTouchEvent(event)?event.touches[0]:event;return(0,_point__WEBPACK_IMPORTED_MODULE_0__.E)(source?.clientX,source?.clientY)}function triggerInput(element,value){const constructors=[HTMLInputElement,HTMLSelectElement,HTMLTextAreaElement];let constructor=null;for(const item of constructors)element instanceof item&&(constructor=item);if(constructor){const setValue=Object.getOwnPropertyDescriptor(constructor.prototype,"value")?.set;setValue&&(setValue.call(element,value),element.dispatchEvent(new Event("input",{bubbles:!0})))}}},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/helpers/point.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function Point(x=0,y=0){return{x,y}}__webpack_require__.d(__webpack_exports__,{E:()=>Point,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=Point},"./src/helpers/styles.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getTransitionStyle(duration=0,property="all",easing="ease-out"){return`${property} ${Number.isFinite(duration)?duration:0}ms ${easing}`}function getTranslateStyle(x=0,y=0,z=0){return`translate3d(${x}px, ${y}px, ${z}px)`}function setViewportHeightUnit(element){const{visualViewport}=window,height=visualViewport?visualViewport.height*visualViewport.scale:window.innerHeight;element.style.setProperty("--vh",height/100+"px")}__webpack_require__.d(__webpack_exports__,{Je:()=>setViewportHeightUnit,O1:()=>getTransitionStyle,PA:()=>getTranslateStyle})},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/draggable.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".draggable-module__draggable-container__a65{position:relative;max-width:100%;max-height:100%;overflow:hidden}.draggable-module__draggable__bac{width:100%;height:100%}","",{version:3,sources:["webpack://./src/carousel/draggable.module.scss"],names:[],mappings:"AAAA,4CACE,iBAAA,CACA,cAAA,CACA,eAAA,CACA,eAAA,CAGF,kCACE,UAAA,CACA,WAAA",sourcesContent:[".draggable-container {\n  position: relative;\n  max-width: 100%;\n  max-height: 100%;\n  overflow: hidden;\n}\n\n.draggable {\n  width: 100%;\n  height: 100%;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"draggable-container":"draggable-module__draggable-container__a65",draggable:"draggable-module__draggable__bac"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);