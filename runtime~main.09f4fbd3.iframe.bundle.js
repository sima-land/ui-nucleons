(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({367:"colors-__stories__-index-stories",458:"field-block-__stories__-index-stories",619:"modal-__stories__-20-test-page-scroll-lock-stories",678:"no-index-mark-__stories__-index-stories",882:"hooks-breakpoint-__stories__-breakpoint-stories",995:"button-__stories__-button-stories",1210:"side-page-__stories__-06-with-clean-buttons-stories",1246:"modal-__stories__-02-size-m-stories",1407:"modal-__stories__-11-additional-topbar-stories",1528:"carousel-__stories__-draggable-stories",1682:"bordered-layout-__stories__-index-stories",1744:"side-page-__stories__-02-size-s-stories",1813:"input-__stories__-index-stories",1816:"unknown-content-__stories__-index-stories",1822:"side-page-__stories__-04-with-transitions-stories",2060:"with-hint-__stories__-index-stories",2112:"layout-__stories__-desktop-stories",2300:"checkbox-field-__stories__-index-stories",2301:"toggle-__stories__-index-stories",2668:"tabs-__stories__-index-stories",2672:"dot-nav-__stories__-index-stories",2851:"file-icon-__stories__-index-stories",3181:"bottom-bar-__stories__-index-stories",3301:"timer-__stories__-index-stories",3427:"group-overflow-__stories__-index-stories",3519:"tooltip-__stories__-index-stories",3530:"upload-area-__stories__-index-stories",3605:"pagination-__stories__-index-stories",3714:"modal-__stories__-22-test-full-scroll-handle-stories",3716:"range-__stories__-index-stories",3770:"link-__stories__-link-stories",3801:"phone-input-__stories__-index-stories",3830:"clean-buttons-__stories__-index-stories",3876:"chip-__stories__-10-different-states-stories",3968:"radio-button-__stories__-index-stories",4090:"modal-__stories__-06-without-bars-stories",4183:"chips-__stories__-index-stories",4231:"layout-__stories__-mobile-stories",4478:"hint-deprecated-__stories__-index-stories",4569:"checkbox-__stories__-index-stories",4639:"super-ellipse-clip-path-__stories__-index-stories",4688:"rating-__stories__-index-stories",4837:"side-page-__stories__-01-primary-stories",4841:"masked-input-__stories__-index-stories",4916:"dropdown-item-__stories__-index-stories",4923:"index-stories-mdx",5018:"no-index-__stories__-index-stories",5361:"select-__stories__-index-stories",5463:"hooks-intersection-__stories__-index-stories",5482:"modal-__stories__-04-size-xl-stories",5616:"modal-__stories__-10-overlap-content-stories",5642:"side-page-__stories__-20-test-page-scroll-lock-stories",5760:"modal-__stories__-01-size-s-stories",5806:"modal-__stories__-05-size-fullscreen-stories",5896:"base-input-deprecated-__stories__-index-stories",5956:"card-__stories__-index-stories",6016:"price-__stories__-index-stories",6111:"expandable-__stories__-index-stories",6306:"carousel-__stories__-index-stories",6313:"hint-__stories__-hint-stories",6408:"spinner-__stories__-index-stories",6411:"hooks-__stories__-keydown-stories",6477:"plate-__stories__-index-stories",6482:"switcher-row-__stories__-index-stories",6656:"text-button-__stories__-index-stories",6732:"with-tooltip-__stories__-index-stories",6872:"panel-__stories__-index-stories",6887:"text-__stories__-index-stories",6914:"alert-__stories__-index-stories",6939:"autocomplete-deprecated-__stories__-index-stories",6943:"phone-input-deprecated-__stories__-index-stories",6950:"portal-__stories__-index-stories",6986:"screen-__stories__-index-stories",7079:"field-grid-__stories__-index-stories",7118:"popup-__stories__-index-stories",7279:"select-deprecated-__stories__-index-stories",7566:"arrow-button-__stories__-index-stories",7596:"masked-field-__stories__-index-stories",7642:"side-page-__stories__-05-without-transitions-stories",7893:"chip-__stories__-01-index-stories",7932:"base-input-__stories__-index-stories",8037:"layout-__stories__-index-stories",8066:"avatar-__stories__-index-stories",8149:"box-__stories__-box-stories",8170:"top-bar-__stories__-index-stories",8283:"stroked-svg-__stories__-index-stories",8289:"side-page-__stories__-03-size-m-stories",8376:"modal-__stories__-21-test-page-scroll-lock-with-toggle-stories",8495:"pagination-deprecated-__stories__-pagination-stories",8524:"info-text-__stories__-index-stories",8701:"hint-__stories__-hint-view-stories",8878:"stepper-__stories__-index-stories",9062:"dropdown-__stories__-index-stories",9184:"touch-slider-__stories__-index-stories",9463:"modal-__stories__-03-size-l-stories",9472:"text-field-__stories__-index-stories",9479:"loading-overlay-__stories__-index-stories",9690:"autocomplete-__stories__-index-stories",9985:"textarea-__stories__-index-stories"}[chunkId]||chunkId)+"."+{127:"8a9ccbf5",367:"1eefa9a7",393:"f337c158",458:"0f4a1fa6",619:"95361420",635:"4efc684f",678:"0e5c9139",882:"0f1418c2",995:"ebc8fbc1",1210:"a80272ad",1246:"3068377e",1407:"a9a18511",1528:"b3a68cb7",1682:"22bba192",1729:"0eb1d69c",1744:"e0776146",1813:"f0386e81",1816:"a90ff808",1822:"a34e5b78",1847:"bb02fea8",2060:"06b0a55b",2112:"18c0095e",2300:"25fbe947",2301:"a23aef27",2475:"934d3a42",2668:"b518ada2",2672:"cd24ae94",2851:"5a6a4170",2855:"ab910781",3181:"30d111f3",3223:"cafe8c22",3301:"cf59ce93",3426:"c273aac7",3427:"1df53596",3439:"9d595a89",3519:"0b86cce5",3530:"d82604ad",3605:"90ac273a",3714:"5b672218",3716:"5d73e514",3738:"37bb8005",3770:"52f38e57",3790:"0fe889c4",3801:"9b2be38c",3830:"0f7be89e",3876:"8ca08ad9",3968:"d0e1abd1",4090:"2cd2b69d",4183:"bcbade7d",4202:"f659129b",4231:"82fa3b28",4364:"6795d152",4379:"80e25046",4478:"37d73f3c",4569:"964cab02",4571:"d08b4110",4639:"1281dea5",4688:"808758f4",4775:"0b52fdda",4837:"747d0276",4841:"672a5c84",4869:"1a590099",4916:"26ab95cd",4923:"7494704f",5018:"8d4da51d",5316:"4408caec",5361:"2687afb4",5376:"47f60613",5463:"11d124a5",5482:"125a5271",5616:"85864447",5642:"fece4a20",5697:"1a3e98a0",5760:"464b42a4",5806:"550e4714",5835:"05d418ed",5896:"9fd4da64",5950:"4881ea3b",5956:"e5fa9e10",5970:"1dc60ab0",6016:"0c6822b1",6020:"f8935dc3",6111:"14ba17f8",6154:"bea02227",6306:"e9eca536",6313:"c9794674",6408:"08555d11",6411:"12b1efc3",6441:"4bdbfac9",6477:"50c87a54",6482:"40a4fb94",6616:"4110e919",6656:"67211363",6732:"e9f0b7c4",6742:"fdff5553",6872:"0ecc3ada",6887:"5623bb71",6890:"7519326a",6914:"305c1332",6939:"95946d5a",6943:"24b6cf29",6950:"91b92fbe",6986:"2cfc5340",7016:"8aef3894",7076:"f7641910",7079:"4b71d2e5",7118:"7428cd2d",7279:"804a8840",7332:"ee32f38d",7566:"e74b64f8",7596:"640c363d",7642:"df94ebbc",7893:"7f117481",7932:"19a24624",7975:"12b676c3",8037:"24e10854",8066:"75ed9dfb",8149:"296429c2",8170:"58a6f961",8230:"2e175d39",8283:"6c77e3c4",8289:"bdec94fb",8376:"0ea22c28",8495:"12b7dbbb",8524:"21ead87d",8615:"0f458798",8701:"37967d9e",8878:"3303bdcc",8934:"ab09cf6d",9062:"b08af7b3",9184:"0d898b24",9433:"6e9a10dc",9463:"2880e47d",9472:"742d7b7c",9479:"a061ce2b",9690:"d226b418",9784:"d040597d",9872:"d737f6a7",9985:"d755995d"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@sima-land/ui-nucleons:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@sima-land/ui-nucleons:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();