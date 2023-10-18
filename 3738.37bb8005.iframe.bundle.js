/*! For license information please see 3738.37bb8005.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3738],{"./node_modules/@krutoo/input-mask/dist/core/changes.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.defineChanges=void 0;const range_1=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/range.js");exports.defineChanges=(prev,next)=>{const hasChanges=prev.value!==next.value;let payload,type="UNKNOWN";if(hasChanges)if(next.value.length>prev.value.length)type=range_1.Range.size(prev.range)>0?"REPLACE":"INSERT";else{const carved=prev.value.slice(prev.range.start,prev.range.end);type=next.value.slice(0,prev.range.start)+carved+next.value.slice(prev.range.start)===prev.value||0===range_1.Range.size(prev.range)&&0===range_1.Range.size(next.range)?"DELETE":"REPLACE"}else range_1.Range.equals(prev.range,next.range)||(type="REPLACE");switch(type){case"INSERT":payload=Object.assign(Object.assign({},next),{insertPosition:prev.range.start,insertIndices:range_1.Range.spreadOf(prev.range.start,next.range.end)});break;case"DELETE":{let deleteIndices=[];if(0===range_1.Range.size(prev.range))if(next.range.start===prev.range.start){const delta=prev.value.length-next.value.length;deleteIndices=range_1.Range.spreadOf(prev.range.start,prev.range.start+delta)}else deleteIndices=range_1.Range.spreadOf(next.range.start,prev.range.start);else deleteIndices=range_1.Range.spreadOf(prev.range.start,prev.range.end);payload=Object.assign(Object.assign({},next),{deleteIndices,deleteDirection:next.range.start<prev.range.start?"backward":"forward"});break}case"REPLACE":payload=hasChanges?Object.assign(Object.assign({},next),{replacePosition:prev.range.start,deleteIndices:range_1.Range.spread(prev.range),insertIndices:range_1.Range.spreadOf(prev.range.start,next.range.end)}):Object.assign(Object.assign({},next),{replacePosition:prev.range.start,deleteIndices:range_1.Range.spread(prev.range),insertIndices:range_1.Range.spread(prev.range)});break;default:payload=Object.assign({},next)}return{type,payload}}},"./node_modules/@krutoo/input-mask/dist/core/index.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var __createBinding=this&&this.__createBinding||(Object.create?function(o,m,k,k2){void 0===k2&&(k2=k);var desc=Object.getOwnPropertyDescriptor(m,k);desc&&!("get"in desc?!m.__esModule:desc.writable||desc.configurable)||(desc={enumerable:!0,get:function(){return m[k]}}),Object.defineProperty(o,k2,desc)}:function(o,m,k,k2){void 0===k2&&(k2=k),o[k2]=m[k]}),__exportStar=this&&this.__exportStar||function(m,exports){for(var p in m)"default"===p||Object.prototype.hasOwnProperty.call(exports,p)||__createBinding(exports,m,p)};Object.defineProperty(exports,"__esModule",{value:!0}),__exportStar(__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/range.js"),exports),__exportStar(__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/changes.js"),exports),__exportStar(__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/reducer.js"),exports)},"./node_modules/@krutoo/input-mask/dist/core/range.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Range=void 0,exports.Range={of:(start,end=start)=>({start,end,head:start,last:end}),clone:r=>Object.assign({},r),map:(r,cb)=>exports.Range.of(cb(r.start),cb(r.end)),equals:(a,b)=>a.start===b.start&&a.end===b.end,size:r=>Math.max(r.start,r.end)-Math.min(r.start,r.end),spread:r=>{const result=[];if(r.start!==r.end)for(let i=r.start;i<r.end;i++)result.push(i);return result},spreadOf:(start,end)=>exports.Range.spread(exports.Range.of(start,end))}},"./node_modules/@krutoo/input-mask/dist/core/reducer.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createReducer=void 0;const range_1=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/range.js");exports.createReducer=({mask,pattern,placeholder})=>{const placeIndices=mask.split("").reduce(((acc,char,i)=>(char===placeholder&&acc.push(i),acc)),[]),Char_isValid=c=>pattern.test(c),Index_isPlace=i=>placeIndices.includes(i),Index_toMasked=i=>placeIndices[i],Index_getNearestPlace=(i,forward=!0)=>{let result=i;for(;result>=0&&result<=mask.length&&!placeIndices.includes(result);)result+=forward?1:-1;return placeIndices.indexOf(result)},getCleanChars=masked=>masked.split("").filter(((c,i)=>Char_isValid(c)&&Index_isPlace(i))),toMasked=cleanChars=>{let result="";for(let i=0,j=0;i<mask.length;i++){const maskChar=mask[i],valueChar=cleanChars[j];if(maskChar!==placeholder)result+=maskChar;else{if(!valueChar)break;result+=valueChar,j++}}return result.length<placeIndices[0]&&(result=mask.slice(0,placeIndices[0])),result},initialState={value:"",range:range_1.Range.of(0,0)};return(state=initialState,action)=>{let nextState=state;switch(action.type){case"INSERT":nextState=((state,payload)=>{const cleanChars=getCleanChars(state.value),insertIndex=Index_getNearestPlace(payload.insertPosition),insertChars=payload.insertIndices.map((i=>payload.value[i])).filter(Char_isValid);let{range}=payload;if(-1!==insertIndex){const nextCaretPosition=Index_toMasked(insertIndex+insertChars.length);cleanChars.splice(insertIndex,0,...insertChars),nextCaretPosition&&(range=range_1.Range.of(nextCaretPosition))}return Object.assign(Object.assign({},state),{range,value:toMasked(cleanChars)})})(state,action.payload);break;case"DELETE":nextState=((state,payload)=>{const cleanChars=getCleanChars(state.value),isForward="forward"===payload.deleteDirection,deleteIndex=Index_getNearestPlace(payload.range.start,isForward),range=range_1.Range.of(Math.max(placeIndices[0],Index_toMasked(deleteIndex)||0));let deleteCount=payload.deleteIndices.filter(Index_isPlace).length;return isForward||0!==deleteCount||(deleteCount=1),-1!==deleteIndex?cleanChars.splice(deleteIndex,deleteCount):state.range.start>placeIndices[0]&&!isForward&&cleanChars.splice(0,deleteCount),Object.assign(Object.assign({},state),{range,value:toMasked(cleanChars)})})(state,action.payload);break;case"REPLACE":nextState=((state,payload)=>{if(state.value===payload.value)return Object.assign(Object.assign({},state),{range:range_1.Range.of(Index_toMasked(Index_getNearestPlace(payload.range.end))||state.value.length)});const cleanChars=getCleanChars(state.value),replaceIndex=Index_getNearestPlace(payload.replacePosition),carvedIndices=payload.deleteIndices.filter(Index_isPlace),addedValidChars=payload.insertIndices.map((i=>payload.value[i])).filter(Char_isValid);-1!==replaceIndex&&cleanChars.splice(replaceIndex,carvedIndices.length,...addedValidChars);const value=toMasked(cleanChars),range=range_1.Range.of(Index_toMasked(replaceIndex+addedValidChars.length)||value.length);return Object.assign(Object.assign({},state),{range,value})})(state,action.payload)}return nextState===state?state:(state=>Object.assign(Object.assign({},state),{range:range_1.Range.map(state.range,(n=>Math.min(n,state.value.length)))}))(nextState)}}},"./node_modules/@krutoo/input-mask/dist/dom/utils.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Value=exports.State=exports.Range=exports.on=void 0;const range_1=__webpack_require__("./node_modules/@krutoo/input-mask/dist/core/range.js");exports.on=function on(target,eventName,callback,options){return target.addEventListener(eventName,callback,options),()=>{target.removeEventListener(eventName,callback,options)}},exports.Range=Object.assign(Object.assign({},range_1.Range),{fromTarget:target=>exports.Range.of(target.selectionStart||0,target.selectionEnd||0)}),exports.State={of:(value,range=exports.Range.of(value.length))=>({value,range}),init({mask,placeholder}){const firstPlace=mask.indexOf(placeholder);return exports.State.of(mask.slice(0,firstPlace))},fromTarget:target=>exports.State.of(target.value,exports.Range.fromTarget(target)),apply(state,target){target.value=state.value,exports.State.applySelection(state,target)},applyDiff(state,target){target.value!==state.value?(target.value=state.value,exports.State.applySelection(state,target)):target.selectionStart===state.range.start&&target.selectionEnd===state.range.end||exports.State.applySelection(state,target)},applySelection(state,target){target===document.activeElement&&target.setSelectionRange(state.range.start,state.range.end)}},exports.Value={toMasked({mask,placeholder},cleanValue){let result="";for(let i=0,j=0;i<mask.length;i++)mask[i]===placeholder&&cleanValue[j]?(result+=cleanValue[j],j++):mask[i]!==placeholder&&j<cleanValue.length&&(result+=mask[i]);return result},toClean({mask,placeholder},maskedValue){let result="";for(let i=0;i<maskedValue.length;i++)mask[i]===placeholder&&(result+=maskedValue[i]);return result}}},"./node_modules/@sima-land/ui-quarks/icons/16x16/Filled/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm2.828-9.828a1 1 0 0 1 0 1.414L9.414 8l1.414 1.414a1 1 0 0 1-1.414 1.414L8 9.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L6.586 8 5.172 6.586a1 1 0 0 1 1.414-1.414L8 6.586l1.414-1.414a1 1 0 0 1 1.414 0Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Down.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M3.247 6.342a1 1 0 0 1 1.412-.095L8 9.171l3.341-2.924a1 1 0 0 1 1.318 1.506l-4 3.5a1 1 0 0 1-1.317 0l-4-3.5a1 1 0 0 1-.095-1.411Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Arrows/Up.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:16,height:16,viewBox:"0 0 16 16",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12.753 9.659a1 1 0 0 1-1.412.094L8 6.829 4.659 9.753a1 1 0 0 1-1.317-1.506l4-3.5a1 1 0 0 1 1.317 0l4 3.5a1 1 0 0 1 .094 1.412Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/@sima-land/ui-quarks/icons/24x24/Filled/Cross.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsx)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm4.95-6.464a1 1 0 1 1-1.414 1.414L12 13.414 8.464 16.95a1 1 0 1 1-1.414-1.414L10.586 12 7.05 8.464A1 1 0 0 1 8.464 7.05L12 10.586l3.536-3.536a1 1 0 1 1 1.414 1.414L13.414 12l3.536 3.536Z",clipRule:"evenodd"})})));exports.Z=ForwardRef},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/redux/es/redux.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function formatProdErrorMessage(code){return"Minified Redux error #"+code+"; visit https://redux.js.org/Errors?code="+code+" for the full message or use the non-minified dev environment for full errors. "}__webpack_require__.d(__webpack_exports__,{jB:()=>legacy_createStore});var $$observable="function"==typeof Symbol&&Symbol.observable||"@@observable",randomString=function randomString(){return Math.random().toString(36).substring(7).split("").join(".")},ActionTypes={INIT:"@@redux/INIT"+randomString(),REPLACE:"@@redux/REPLACE"+randomString(),PROBE_UNKNOWN_ACTION:function PROBE_UNKNOWN_ACTION(){return"@@redux/PROBE_UNKNOWN_ACTION"+randomString()}};function isPlainObject(obj){if("object"!=typeof obj||null===obj)return!1;for(var proto=obj;null!==Object.getPrototypeOf(proto);)proto=Object.getPrototypeOf(proto);return Object.getPrototypeOf(obj)===proto}var legacy_createStore=function createStore(reducer,preloadedState,enhancer){var _ref2;if("function"==typeof preloadedState&&"function"==typeof enhancer||"function"==typeof enhancer&&"function"==typeof arguments[3])throw new Error(formatProdErrorMessage(0));if("function"==typeof preloadedState&&void 0===enhancer&&(enhancer=preloadedState,preloadedState=void 0),void 0!==enhancer){if("function"!=typeof enhancer)throw new Error(formatProdErrorMessage(1));return enhancer(createStore)(reducer,preloadedState)}if("function"!=typeof reducer)throw new Error(formatProdErrorMessage(2));var currentReducer=reducer,currentState=preloadedState,currentListeners=[],nextListeners=currentListeners,isDispatching=!1;function ensureCanMutateNextListeners(){nextListeners===currentListeners&&(nextListeners=currentListeners.slice())}function getState(){if(isDispatching)throw new Error(formatProdErrorMessage(3));return currentState}function subscribe(listener){if("function"!=typeof listener)throw new Error(formatProdErrorMessage(4));if(isDispatching)throw new Error(formatProdErrorMessage(5));var isSubscribed=!0;return ensureCanMutateNextListeners(),nextListeners.push(listener),function unsubscribe(){if(isSubscribed){if(isDispatching)throw new Error(formatProdErrorMessage(6));isSubscribed=!1,ensureCanMutateNextListeners();var index=nextListeners.indexOf(listener);nextListeners.splice(index,1),currentListeners=null}}}function dispatch(action){if(!isPlainObject(action))throw new Error(formatProdErrorMessage(7));if(void 0===action.type)throw new Error(formatProdErrorMessage(8));if(isDispatching)throw new Error(formatProdErrorMessage(9));try{isDispatching=!0,currentState=currentReducer(currentState,action)}finally{isDispatching=!1}for(var listeners=currentListeners=nextListeners,i=0;i<listeners.length;i++){(0,listeners[i])()}return action}return dispatch({type:ActionTypes.INIT}),(_ref2={dispatch,subscribe,getState,replaceReducer:function replaceReducer(nextReducer){if("function"!=typeof nextReducer)throw new Error(formatProdErrorMessage(10));currentReducer=nextReducer,dispatch({type:ActionTypes.REPLACE})}})[$$observable]=function observable(){var _ref,outerSubscribe=subscribe;return(_ref={subscribe:function subscribe(observer){if("object"!=typeof observer||null===observer)throw new Error(formatProdErrorMessage(11));function observeState(){observer.next&&observer.next(getState())}return observeState(),{unsubscribe:outerSubscribe(observeState)}}})[$$observable]=function(){return this},_ref},_ref2}}}]);