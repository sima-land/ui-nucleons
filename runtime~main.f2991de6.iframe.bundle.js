(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({146:"hooks-use-intersection-__stories__-index-stories",367:"colors-__stories__-index-stories",458:"field-block-__stories__-index-stories",619:"modal-__stories__-20-test-page-scroll-lock-stories",683:"modal-__stories__-02-different-states-stories",995:"button-__stories__-button-stories",1210:"side-page-__stories__-06-with-clean-buttons-stories",1407:"modal-__stories__-11-additional-topbar-stories",1528:"carousel-__stories__-draggable-stories",1744:"side-page-__stories__-02-size-s-stories",1813:"input-__stories__-index-stories",1816:"unknown-content-__stories__-index-stories",1822:"side-page-__stories__-04-with-transitions-stories",2112:"layout-__stories__-desktop-stories",2301:"toggle-__stories__-index-stories",2668:"tabs-__stories__-index-stories",2672:"dot-nav-__stories__-index-stories",2792:"modal-__stories__-13-full-scroll-handle-stories",2851:"file-icon-__stories__-index-stories",3181:"bottom-bar-__stories__-index-stories",3301:"timer-__stories__-index-stories",3427:"group-overflow-__stories__-index-stories",3530:"upload-area-__stories__-index-stories",3605:"pagination-__stories__-index-stories",3716:"range-__stories__-index-stories",3770:"link-__stories__-link-stories",3801:"phone-input-__stories__-index-stories",3830:"clean-buttons-__stories__-index-stories",3876:"chip-__stories__-10-different-states-stories",3968:"radio-button-__stories__-index-stories",4231:"layout-__stories__-mobile-stories",4569:"checkbox-__stories__-index-stories",4639:"super-ellipse-clip-path-__stories__-index-stories",4688:"rating-__stories__-index-stories",4837:"side-page-__stories__-01-primary-stories",4841:"masked-input-__stories__-index-stories",4916:"dropdown-item-__stories__-index-stories",4923:"index-stories-mdx",5018:"no-index-__stories__-index-stories",5052:"modal-__stories__-01-primary-stories",5361:"select-__stories__-index-stories",5616:"modal-__stories__-10-overlap-content-stories",5642:"side-page-__stories__-20-test-page-scroll-lock-stories",6016:"price-__stories__-index-stories",6049:"modal-__stories__-12-fluid-bottom-bar-stories",6111:"expandable-__stories__-index-stories",6306:"carousel-__stories__-index-stories",6313:"hint-__stories__-hint-stories",6408:"spinner-__stories__-index-stories",6477:"plate-__stories__-index-stories",6482:"switcher-row-__stories__-index-stories",6656:"text-button-__stories__-index-stories",6696:"hooks-use-breakpoint-__stories__-breakpoint-stories",6872:"panel-__stories__-index-stories",6887:"text-__stories__-index-stories",6914:"alert-__stories__-index-stories",6950:"portal-__stories__-index-stories",7118:"popup-__stories__-index-stories",7566:"arrow-button-__stories__-index-stories",7642:"side-page-__stories__-05-without-transitions-stories",7893:"chip-__stories__-01-index-stories",7932:"base-input-__stories__-index-stories",7991:"hooks-use-keydown-__stories__-index-stories",8037:"layout-__stories__-index-stories",8066:"avatar-__stories__-index-stories",8149:"box-__stories__-box-stories",8170:"top-bar-__stories__-index-stories",8283:"stroked-svg-__stories__-index-stories",8289:"side-page-__stories__-03-size-m-stories",8376:"modal-__stories__-21-test-page-scroll-lock-with-toggle-stories",8524:"info-text-__stories__-index-stories",8701:"hint-__stories__-hint-view-stories",8878:"stepper-__stories__-index-stories",9062:"dropdown-__stories__-index-stories",9184:"touch-slider-__stories__-index-stories",9690:"autocomplete-__stories__-index-stories",9985:"textarea-__stories__-index-stories"}[chunkId]||chunkId)+"."+{127:"8a9ccbf5",146:"4ab3525b",326:"575e1541",367:"4241bc86",393:"cd34df7c",458:"e677708b",619:"d39de835",635:"4efc684f",683:"f74ac1c0",995:"94c1918d",1100:"4f7b7227",1210:"6077feb4",1407:"f417b958",1528:"dbbc4109",1729:"0eb1d69c",1744:"2641a65b",1797:"9e8e90de",1813:"7f0d15e7",1816:"c4eacb32",1822:"f4adc967",2112:"7dd55b0f",2301:"f05f3628",2468:"e75daa64",2668:"41809dda",2672:"909539e6",2792:"80b4762d",2851:"ad94ed9e",3181:"93941bb9",3301:"fd7a4708",3347:"40145954",3426:"c273aac7",3427:"04744cad",3486:"0d936603",3530:"1957a6d7",3605:"0f6304c4",3716:"2d088a58",3770:"2ce111bb",3801:"0033a899",3830:"dfaf81a2",3876:"1f72ff34",3968:"1fd3d4ad",4202:"f659129b",4231:"95c91401",4379:"80e25046",4569:"ea8f6c60",4639:"9edde5d4",4688:"46016f7c",4775:"8221f70f",4783:"7d1209b8",4837:"7840356d",4841:"6d19616b",4916:"92e90c0b",4923:"7494704f",5018:"28bc4ca7",5052:"33fc4f97",5361:"0e7bc8e3",5616:"12254780",5642:"e3d134d0",5950:"4881ea3b",5970:"1dc60ab0",6016:"7ae0b0fc",6049:"766a17ba",6111:"2e998850",6154:"bea02227",6306:"9f16ef66",6313:"8dad0d53",6376:"1dd1ec15",6408:"31092517",6477:"fa4cfff7",6482:"0cd75b41",6566:"198ec691",6656:"e6a6e934",6696:"150e4bf4",6742:"fdff5553",6872:"3dbfa2ed",6887:"4b7a415b",6914:"00b3884b",6950:"55f2c791",7076:"f7641910",7118:"59644dc4",7267:"c933da70",7332:"ee32f38d",7415:"af99c3cc",7566:"94c9c51a",7642:"15575eb1",7893:"b8987801",7932:"89375024",7975:"12b676c3",7991:"4a597437",8037:"0a231f25",8066:"c5137a06",8149:"7973ddbe",8170:"aa34313e",8277:"9ff05f53",8283:"2698f8ec",8289:"6b78dd9d",8376:"47c5937f",8524:"f3e4acfd",8701:"8eaeed56",8776:"29d2f2bd",8878:"48bacdf7",8939:"7b1a59f2",9062:"2f2d90f7",9184:"37679757",9433:"6e9a10dc",9646:"01fb1c23",9690:"a3bebd07",9784:"f5011336",9985:"d7cec03a"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@sima-land/ui-nucleons:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@sima-land/ui-nucleons:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();