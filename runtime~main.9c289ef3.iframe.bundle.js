(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({146:"hooks-use-intersection-__stories__-index-stories",310:"phone-input-__stories__-02-validation-stories",367:"colors-__stories__-index-stories",458:"field-block-__stories__-index-stories",511:"masked-input-__stories__-01-primary-stories",619:"modal-__stories__-20-test-page-scroll-lock-stories",683:"modal-__stories__-02-different-states-stories",995:"button-__stories__-button-stories",1210:"side-page-__stories__-06-with-clean-buttons-stories",1407:"modal-__stories__-11-additional-topbar-stories",1528:"carousel-__stories__-draggable-stories",1723:"hooks-use-breakpoint-__stories__-index-stories",1744:"side-page-__stories__-02-size-s-stories",1813:"input-__stories__-index-stories",1816:"unknown-content-__stories__-index-stories",1822:"side-page-__stories__-04-with-transitions-stories",2112:"layout-__stories__-desktop-stories",2247:"popup-__stories__-04-reveal-by-clik-floating-ui--stories",2301:"toggle-__stories__-index-stories",2668:"tabs-__stories__-index-stories",2672:"dot-nav-__stories__-index-stories",2792:"modal-__stories__-13-full-scroll-handle-stories",2851:"file-icon-__stories__-index-stories",3181:"bottom-bar-__stories__-index-stories",3220:"masked-input-__stories__-04-different-states-stories",3301:"timer-__stories__-index-stories",3318:"modal-__stories__-14-responsive-full-height-content-stories",3427:"group-overflow-__stories__-index-stories",3530:"upload-area-__stories__-index-stories",3605:"pagination-__stories__-index-stories",3716:"range-__stories__-index-stories",3770:"link-__stories__-link-stories",3830:"clean-buttons-__stories__-index-stories",3851:"phone-input-__stories__-04-different-states-stories",3876:"chip-__stories__-10-different-states-stories",3968:"radio-button-__stories__-index-stories",4231:"layout-__stories__-mobile-stories",4363:"masked-input-__stories__-03-no-placeholder-stories",4569:"checkbox-__stories__-index-stories",4639:"super-ellipse-clip-path-__stories__-index-stories",4688:"rating-__stories__-index-stories",4837:"side-page-__stories__-01-primary-stories",4916:"dropdown-item-__stories__-index-stories",4923:"index-stories-mdx",5018:"no-index-__stories__-index-stories",5052:"modal-__stories__-01-primary-stories",5361:"select-__stories__-index-stories",5614:"popup-__stories__-01-primary-stories",5616:"modal-__stories__-10-overlap-content-stories",5642:"side-page-__stories__-20-test-page-scroll-lock-stories",5668:"popup-__stories__-05-coustomizing-stories",6016:"price-__stories__-index-stories",6049:"modal-__stories__-12-fluid-bottom-bar-stories",6111:"expandable-__stories__-index-stories",6306:"carousel-__stories__-index-stories",6313:"hint-__stories__-hint-stories",6408:"spinner-__stories__-index-stories",6477:"plate-__stories__-index-stories",6482:"switcher-row-__stories__-index-stories",6656:"text-button-__stories__-index-stories",6852:"phone-input-__stories__-22-test-native-input-comarison-stories",6872:"panel-__stories__-index-stories",6887:"text-__stories__-index-stories",6914:"alert-__stories__-index-stories",6950:"portal-__stories__-index-stories",7333:"phone-input-__stories__-21-test-in-modal-stories",7566:"arrow-button-__stories__-index-stories",7591:"phone-input-__stories__-03-country-define-stories",7642:"side-page-__stories__-05-without-transitions-stories",7893:"chip-__stories__-01-index-stories",7932:"base-input-__stories__-index-stories",7991:"hooks-use-keydown-__stories__-index-stories",8037:"layout-__stories__-index-stories",8066:"avatar-__stories__-index-stories",8123:"masked-input-__stories__-02-date-field-stories",8149:"box-__stories__-box-stories",8170:"top-bar-__stories__-index-stories",8283:"stroked-svg-__stories__-index-stories",8289:"side-page-__stories__-03-size-m-stories",8376:"modal-__stories__-21-test-page-scroll-lock-with-toggle-stories",8524:"info-text-__stories__-index-stories",8643:"phone-input-__stories__-01-primary-stories",8701:"hint-__stories__-hint-view-stories",8878:"stepper-__stories__-index-stories",9062:"dropdown-__stories__-index-stories",9184:"touch-slider-__stories__-index-stories",9236:"popup-__stories__-02-lot-of-content-stories",9271:"masked-input-__stories__-21-test-uncontrolled-stories",9500:"popup-__stories__-03-reveal-by-click-stories",9659:"masked-input-__stories__-22-test-mask-change-stories",9690:"autocomplete-__stories__-index-stories",9985:"textarea-__stories__-index-stories"}[chunkId]||chunkId)+"."+{146:"678254a0",310:"6cc1f2e4",349:"c2c585c7",367:"e837463d",458:"9c3fffe3",511:"b82b0c8c",619:"2680e02e",683:"7482c2bf",774:"cf747820",975:"d076694c",995:"369a97f5",1016:"f779cf43",1063:"c7beec92",1210:"eb8077e8",1407:"ac10de0c",1528:"be5ba6a0",1589:"1d91ae33",1723:"2dc14c2c",1729:"0eb1d69c",1744:"392e5193",1813:"a0304a6e",1816:"4885e12a",1822:"fac826a1",1892:"3d450bd7",2112:"dce944f1",2247:"e627da03",2301:"cfbcb0d9",2551:"1125a67f",2659:"4c460404",2668:"e0f00916",2672:"314717cd",2734:"bc5fda50",2792:"c8141408",2851:"624097b2",3181:"c9e8c1d3",3205:"82755b84",3220:"67ff27d8",3301:"b9b88d00",3318:"c8474fe2",3426:"c273aac7",3427:"6e5619cf",3530:"40662c3f",3605:"1dff3ada",3716:"c94dd83c",3770:"ddd4e5a4",3830:"4be39335",3851:"07674bc4",3876:"ce5ea71c",3968:"a7ec8cea",3991:"ae292ae9",4005:"e7af76c1",4113:"64bd4164",4231:"0ea33c04",4363:"20c6c3b4",4569:"0c82edd9",4639:"63943140",4688:"d9b6fe83",4837:"d731dbff",4854:"446bbb8b",4871:"ea4fbd0b",4916:"93d3d639",4923:"2ba2d8e6",5018:"b2fc398c",5052:"bc83ea86",5361:"6f4b1e76",5442:"f9f9ce92",5614:"8709d243",5616:"58d25f44",5642:"82d44c50",5650:"827aff37",5668:"33cca2c4",6016:"913cdc82",6049:"4bfa60bc",6111:"11e5b624",6156:"66124d1d",6306:"a8d9d3af",6313:"a244c8af",6362:"4508ca0f",6408:"6d27fec0",6477:"9a40c359",6482:"75896bf3",6528:"dc94bb95",6607:"acb8cd65",6656:"c8d352c8",6852:"36ccdc17",6872:"ff3a12f0",6887:"b838eeef",6914:"ecae1825",6950:"fd1114aa",7333:"5dab81d5",7566:"9fa979df",7591:"6e8d0610",7642:"bd4f4c2b",7654:"9eb05b2e",7893:"85ea4e56",7932:"b05b4606",7991:"a7c732c5",8037:"c985c8f8",8066:"348f7908",8123:"2d578e92",8149:"a060f0d8",8170:"fb5bb913",8283:"bdf9736f",8289:"6e1dbbde",8376:"3392c020",8457:"75a3eb57",8524:"660f0669",8643:"e544d4b8",8701:"3496fa3a",8797:"6c6acd4b",8878:"39130527",9062:"27997c98",9130:"31416f40",9184:"cee60bf4",9236:"8bfe2abe",9271:"9844593b",9314:"46d7f545",9433:"6e9a10dc",9500:"ae4136e1",9659:"ee37c6e9",9690:"8d9a3dcf",9713:"1fe81e09",9717:"5d54d044",9793:"c341fdec",9985:"96ae2063"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@sima-land/ui-nucleons:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@sima-land/ui-nucleons:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();