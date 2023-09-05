/*! For license information please see 127.cb2c711d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[127],{"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{d:"M12.707 4.707a1 1 0 0 0-1.414-1.414L8 6.586 4.707 3.293a1 1 0 0 0-1.414 1.414L6.586 8l-3.293 3.293a1 1 0 1 0 1.414 1.414L8 9.414l3.293 3.293a1 1 0 0 0 1.414-1.414L9.414 8l3.293-3.293Z"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Information.js":(__unused_webpack_module,exports,__webpack_require__)=>{const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{d:"M8 6.5a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1ZM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./node_modules/focus-trap/dist/focus-trap.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{v:()=>createFocusTrap});var tabbable__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tabbable/dist/index.esm.js");function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread2(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!=typeof input||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!=typeof res)return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"==typeof key?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var activeFocusTraps_activateTrap=function activateTrap(trapStack,trap){if(trapStack.length>0){var activeTrap=trapStack[trapStack.length-1];activeTrap!==trap&&activeTrap.pause()}var trapIndex=trapStack.indexOf(trap);-1===trapIndex||trapStack.splice(trapIndex,1),trapStack.push(trap)},activeFocusTraps_deactivateTrap=function deactivateTrap(trapStack,trap){var trapIndex=trapStack.indexOf(trap);-1!==trapIndex&&trapStack.splice(trapIndex,1),trapStack.length>0&&trapStack[trapStack.length-1].unpause()},isTabEvent=function isTabEvent(e){return"Tab"===e.key||9===e.keyCode},isKeyForward=function isKeyForward(e){return isTabEvent(e)&&!e.shiftKey},isKeyBackward=function isKeyBackward(e){return isTabEvent(e)&&e.shiftKey},delay=function delay(fn){return setTimeout(fn,0)},findIndex=function findIndex(arr,fn){var idx=-1;return arr.every((function(value,i){return!fn(value)||(idx=i,!1)})),idx},valueOrHandler=function valueOrHandler(value){for(var _len=arguments.length,params=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)params[_key-1]=arguments[_key];return"function"==typeof value?value.apply(void 0,params):value},getActualTarget=function getActualTarget(event){return event.target.shadowRoot&&"function"==typeof event.composedPath?event.composedPath()[0]:event.target},internalTrapStack=[],createFocusTrap=function createFocusTrap(elements,userOptions){var trap,doc=(null==userOptions?void 0:userOptions.document)||document,trapStack=(null==userOptions?void 0:userOptions.trapStack)||internalTrapStack,config=_objectSpread2({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0,isKeyForward,isKeyBackward},userOptions),state={containers:[],containerGroups:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},getOption=function getOption(configOverrideOptions,optionName,configOptionName){return configOverrideOptions&&void 0!==configOverrideOptions[optionName]?configOverrideOptions[optionName]:config[configOptionName||optionName]},findContainerIndex=function findContainerIndex(element){return state.containerGroups.findIndex((function(_ref){var container=_ref.container,tabbableNodes=_ref.tabbableNodes;return container.contains(element)||tabbableNodes.find((function(node){return node===element}))}))},getNodeForOption=function getNodeForOption(optionName){var optionValue=config[optionName];if("function"==typeof optionValue){for(var _len2=arguments.length,params=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++)params[_key2-1]=arguments[_key2];optionValue=optionValue.apply(void 0,params)}if(!0===optionValue&&(optionValue=void 0),!optionValue){if(void 0===optionValue||!1===optionValue)return optionValue;throw new Error("`".concat(optionName,"` was specified but was not a node, or did not return a node"))}var node=optionValue;if("string"==typeof optionValue&&!(node=doc.querySelector(optionValue)))throw new Error("`".concat(optionName,"` as selector refers to no known node"));return node},getInitialFocusNode=function getInitialFocusNode(){var node=getNodeForOption("initialFocus");if(!1===node)return!1;if(void 0===node)if(findContainerIndex(doc.activeElement)>=0)node=doc.activeElement;else{var firstTabbableGroup=state.tabbableGroups[0];node=firstTabbableGroup&&firstTabbableGroup.firstTabbableNode||getNodeForOption("fallbackFocus")}if(!node)throw new Error("Your focus-trap needs to have at least one focusable element");return node},updateTabbableNodes=function updateTabbableNodes(){if(state.containerGroups=state.containers.map((function(container){var tabbableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.ht)(container,config.tabbableOptions),focusableNodes=(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.KW)(container,config.tabbableOptions);return{container,tabbableNodes,focusableNodes,firstTabbableNode:tabbableNodes.length>0?tabbableNodes[0]:null,lastTabbableNode:tabbableNodes.length>0?tabbableNodes[tabbableNodes.length-1]:null,nextTabbableNode:function nextTabbableNode(node){var forward=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],nodeIdx=focusableNodes.findIndex((function(n){return n===node}));if(!(nodeIdx<0))return forward?focusableNodes.slice(nodeIdx+1).find((function(n){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.Wq)(n,config.tabbableOptions)})):focusableNodes.slice(0,nodeIdx).reverse().find((function(n){return(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.Wq)(n,config.tabbableOptions)}))}}})),state.tabbableGroups=state.containerGroups.filter((function(group){return group.tabbableNodes.length>0})),state.tabbableGroups.length<=0&&!getNodeForOption("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},tryFocus=function tryFocus(node){!1!==node&&node!==doc.activeElement&&(node&&node.focus?(node.focus({preventScroll:!!config.preventScroll}),state.mostRecentlyFocusedNode=node,function isSelectableInput(node){return node.tagName&&"input"===node.tagName.toLowerCase()&&"function"==typeof node.select}(node)&&node.select()):tryFocus(getInitialFocusNode()))},getReturnFocusNode=function getReturnFocusNode(previousActiveElement){var node=getNodeForOption("setReturnFocus",previousActiveElement);return node||!1!==node&&previousActiveElement},checkPointerDown=function checkPointerDown(e){var target=getActualTarget(e);findContainerIndex(target)>=0||(valueOrHandler(config.clickOutsideDeactivates,e)?trap.deactivate({returnFocus:config.returnFocusOnDeactivate&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.EB)(target,config.tabbableOptions)}):valueOrHandler(config.allowOutsideClick,e)||e.preventDefault())},checkFocusIn=function checkFocusIn(e){var target=getActualTarget(e),targetContained=findContainerIndex(target)>=0;targetContained||target instanceof Document?targetContained&&(state.mostRecentlyFocusedNode=target):(e.stopImmediatePropagation(),tryFocus(state.mostRecentlyFocusedNode||getInitialFocusNode()))},checkKey=function checkKey(event){if(function isEscapeEvent(e){return"Escape"===e.key||"Esc"===e.key||27===e.keyCode}(event)&&!1!==valueOrHandler(config.escapeDeactivates,event))return event.preventDefault(),void trap.deactivate();(config.isKeyForward(event)||config.isKeyBackward(event))&&function checkKeyNav(event){var isBackward=arguments.length>1&&void 0!==arguments[1]&&arguments[1],target=getActualTarget(event);updateTabbableNodes();var destinationNode=null;if(state.tabbableGroups.length>0){var containerIndex=findContainerIndex(target),containerGroup=containerIndex>=0?state.containerGroups[containerIndex]:void 0;if(containerIndex<0)destinationNode=isBackward?state.tabbableGroups[state.tabbableGroups.length-1].lastTabbableNode:state.tabbableGroups[0].firstTabbableNode;else if(isBackward){var startOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref2){var firstTabbableNode=_ref2.firstTabbableNode;return target===firstTabbableNode}));if(startOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.EB)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.Wq)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target,!1))&&(startOfGroupIndex=containerIndex),startOfGroupIndex>=0){var destinationGroupIndex=0===startOfGroupIndex?state.tabbableGroups.length-1:startOfGroupIndex-1;destinationNode=state.tabbableGroups[destinationGroupIndex].lastTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target,!1))}else{var lastOfGroupIndex=findIndex(state.tabbableGroups,(function(_ref3){var lastTabbableNode=_ref3.lastTabbableNode;return target===lastTabbableNode}));if(lastOfGroupIndex<0&&(containerGroup.container===target||(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.EB)(target,config.tabbableOptions)&&!(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.Wq)(target,config.tabbableOptions)&&!containerGroup.nextTabbableNode(target))&&(lastOfGroupIndex=containerIndex),lastOfGroupIndex>=0){var _destinationGroupIndex=lastOfGroupIndex===state.tabbableGroups.length-1?0:lastOfGroupIndex+1;destinationNode=state.tabbableGroups[_destinationGroupIndex].firstTabbableNode}else isTabEvent(event)||(destinationNode=containerGroup.nextTabbableNode(target))}}else destinationNode=getNodeForOption("fallbackFocus");destinationNode&&(isTabEvent(event)&&event.preventDefault(),tryFocus(destinationNode))}(event,config.isKeyBackward(event))},checkClick=function checkClick(e){var target=getActualTarget(e);findContainerIndex(target)>=0||valueOrHandler(config.clickOutsideDeactivates,e)||valueOrHandler(config.allowOutsideClick,e)||(e.preventDefault(),e.stopImmediatePropagation())},addListeners=function addListeners(){if(state.active)return activeFocusTraps_activateTrap(trapStack,trap),state.delayInitialFocusTimer=config.delayInitialFocus?delay((function(){tryFocus(getInitialFocusNode())})):tryFocus(getInitialFocusNode()),doc.addEventListener("focusin",checkFocusIn,!0),doc.addEventListener("mousedown",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("touchstart",checkPointerDown,{capture:!0,passive:!1}),doc.addEventListener("click",checkClick,{capture:!0,passive:!1}),doc.addEventListener("keydown",checkKey,{capture:!0,passive:!1}),trap},removeListeners=function removeListeners(){if(state.active)return doc.removeEventListener("focusin",checkFocusIn,!0),doc.removeEventListener("mousedown",checkPointerDown,!0),doc.removeEventListener("touchstart",checkPointerDown,!0),doc.removeEventListener("click",checkClick,!0),doc.removeEventListener("keydown",checkKey,!0),trap};return(trap={get active(){return state.active},get paused(){return state.paused},activate:function activate(activateOptions){if(state.active)return this;var onActivate=getOption(activateOptions,"onActivate"),onPostActivate=getOption(activateOptions,"onPostActivate"),checkCanFocusTrap=getOption(activateOptions,"checkCanFocusTrap");checkCanFocusTrap||updateTabbableNodes(),state.active=!0,state.paused=!1,state.nodeFocusedBeforeActivation=doc.activeElement,onActivate&&onActivate();var finishActivation=function finishActivation(){checkCanFocusTrap&&updateTabbableNodes(),addListeners(),onPostActivate&&onPostActivate()};return checkCanFocusTrap?(checkCanFocusTrap(state.containers.concat()).then(finishActivation,finishActivation),this):(finishActivation(),this)},deactivate:function deactivate(deactivateOptions){if(!state.active)return this;var options=_objectSpread2({onDeactivate:config.onDeactivate,onPostDeactivate:config.onPostDeactivate,checkCanReturnFocus:config.checkCanReturnFocus},deactivateOptions);clearTimeout(state.delayInitialFocusTimer),state.delayInitialFocusTimer=void 0,removeListeners(),state.active=!1,state.paused=!1,activeFocusTraps_deactivateTrap(trapStack,trap);var onDeactivate=getOption(options,"onDeactivate"),onPostDeactivate=getOption(options,"onPostDeactivate"),checkCanReturnFocus=getOption(options,"checkCanReturnFocus"),returnFocus=getOption(options,"returnFocus","returnFocusOnDeactivate");onDeactivate&&onDeactivate();var finishDeactivation=function finishDeactivation(){delay((function(){returnFocus&&tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)),onPostDeactivate&&onPostDeactivate()}))};return returnFocus&&checkCanReturnFocus?(checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation,finishDeactivation),this):(finishDeactivation(),this)},pause:function pause(){return state.paused||!state.active||(state.paused=!0,removeListeners()),this},unpause:function unpause(){return state.paused&&state.active?(state.paused=!1,updateTabbableNodes(),addListeners(),this):this},updateContainerElements:function updateContainerElements(containerElements){var elementsAsArray=[].concat(containerElements).filter(Boolean);return state.containers=elementsAsArray.map((function(element){return"string"==typeof element?doc.querySelector(element):element})),state.active&&updateTabbableNodes(),this}}).updateContainerElements(elements),trap}}}]);