(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){chunkIds=deferred[i][0],fn=deferred[i][1],priority=deferred[i][2];for(var fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({367:"colors-__stories__-index-stories",458:"field-block-__stories__-index-stories",619:"modal-__stories__-20-test-page-scroll-lock-stories",678:"no-index-mark-__stories__-index-stories",882:"hooks-breakpoint-__stories__-breakpoint-stories",995:"button-__stories__-button-stories",1210:"side-page-__stories__-06-with-clean-buttons-stories",1246:"modal-__stories__-02-size-m-stories",1407:"modal-__stories__-11-additional-topbar-stories",1528:"carousel-__stories__-draggable-stories",1682:"bordered-layout-__stories__-index-stories",1744:"side-page-__stories__-02-size-s-stories",1813:"input-__stories__-index-stories",1816:"unknown-content-__stories__-index-stories",1822:"side-page-__stories__-04-with-transitions-stories",2060:"with-hint-__stories__-index-stories",2112:"layout-__stories__-desktop-stories",2300:"checkbox-field-__stories__-index-stories",2301:"toggle-__stories__-index-stories",2668:"tabs-__stories__-index-stories",2672:"dot-nav-__stories__-index-stories",2851:"file-icon-__stories__-index-stories",3181:"bottom-bar-__stories__-index-stories",3301:"timer-__stories__-index-stories",3427:"group-overflow-__stories__-index-stories",3519:"tooltip-__stories__-index-stories",3530:"upload-area-__stories__-index-stories",3605:"pagination-__stories__-index-stories",3714:"modal-__stories__-22-test-full-scroll-handle-stories",3716:"range-__stories__-index-stories",3770:"link-__stories__-link-stories",3801:"phone-input-__stories__-index-stories",3830:"clean-buttons-__stories__-index-stories",3968:"radio-button-__stories__-index-stories",4090:"modal-__stories__-06-without-bars-stories",4183:"chips-__stories__-index-stories",4231:"layout-__stories__-mobile-stories",4478:"hint-deprecated-__stories__-index-stories",4569:"checkbox-__stories__-index-stories",4639:"super-ellipse-clip-path-__stories__-index-stories",4688:"rating-__stories__-index-stories",4837:"side-page-__stories__-01-primary-stories",4841:"masked-input-__stories__-index-stories",4916:"dropdown-item-__stories__-index-stories",4923:"index-stories-mdx",5018:"no-index-__stories__-index-stories",5361:"select-__stories__-index-stories",5463:"hooks-intersection-__stories__-index-stories",5482:"modal-__stories__-04-size-xl-stories",5616:"modal-__stories__-10-overlap-content-stories",5642:"side-page-__stories__-20-test-page-scroll-lock-stories",5760:"modal-__stories__-01-size-s-stories",5806:"modal-__stories__-05-size-fullscreen-stories",5896:"base-input-deprecated-__stories__-index-stories",5956:"card-__stories__-index-stories",6016:"price-__stories__-index-stories",6111:"expandable-__stories__-index-stories",6306:"carousel-__stories__-index-stories",6313:"hint-__stories__-hint-stories",6408:"spinner-__stories__-index-stories",6411:"hooks-__stories__-keydown-stories",6477:"plate-__stories__-index-stories",6482:"switcher-row-__stories__-index-stories",6656:"text-button-__stories__-index-stories",6732:"with-tooltip-__stories__-index-stories",6872:"panel-__stories__-index-stories",6887:"text-__stories__-index-stories",6914:"alert-__stories__-index-stories",6939:"autocomplete-deprecated-__stories__-index-stories",6943:"phone-input-deprecated-__stories__-index-stories",6950:"portal-__stories__-index-stories",6986:"screen-__stories__-index-stories",7079:"field-grid-__stories__-index-stories",7118:"popup-__stories__-index-stories",7279:"select-deprecated-__stories__-index-stories",7566:"arrow-button-__stories__-index-stories",7596:"masked-field-__stories__-index-stories",7642:"side-page-__stories__-05-without-transitions-stories",7932:"base-input-__stories__-index-stories",8037:"layout-__stories__-index-stories",8066:"avatar-__stories__-index-stories",8149:"box-__stories__-box-stories",8170:"top-bar-__stories__-index-stories",8283:"stroked-svg-__stories__-index-stories",8289:"side-page-__stories__-03-size-m-stories",8376:"modal-__stories__-21-test-page-scroll-lock-with-toggle-stories",8495:"pagination-deprecated-__stories__-pagination-stories",8524:"info-text-__stories__-index-stories",8701:"hint-__stories__-hint-view-stories",8878:"stepper-__stories__-index-stories",9062:"dropdown-__stories__-index-stories",9184:"touch-slider-__stories__-index-stories",9463:"modal-__stories__-03-size-l-stories",9472:"text-field-__stories__-index-stories",9479:"loading-overlay-__stories__-index-stories",9690:"autocomplete-__stories__-index-stories",9985:"textarea-__stories__-index-stories"}[chunkId]||chunkId)+"."+{127:"cb2c711d",238:"fbbba79c",367:"61d35f33",458:"49970232",619:"b48a8f63",628:"b2d2e4b6",635:"998ed535",652:"1c296c6c",678:"a5763233",882:"0f1418c2",995:"0e9aee0b",1210:"53abd2e8",1233:"cf6951e7",1246:"34832d16",1407:"6d80e441",1496:"3f96a318",1528:"4b3935de",1613:"ee8e556f",1682:"5749a81c",1729:"6f6b2332",1744:"63bdf44c",1777:"6072a97b",1813:"7fa9eb09",1816:"498dbf1e",1822:"56ed1d55",2060:"3ea044f6",2112:"a33cb20c",2300:"3a5eec25",2301:"f1824cab",2475:"21ab3a38",2668:"29b48bad",2672:"cd24ae94",2851:"bceeedb5",3181:"0b323ae4",3301:"a86e7d6a",3427:"42be0a32",3439:"4601ec29",3447:"c02de0dd",3519:"5ebf5ce9",3530:"6212c087",3605:"aa012856",3622:"b3522006",3714:"32343de6",3716:"5d73e514",3738:"bd36442f",3770:"c1509ddd",3801:"9b2be38c",3830:"c6d4ccc3",3881:"e510691c",3968:"7b719ffc",4090:"ad2a288a",4131:"cef74e28",4133:"aee44880",4183:"7aa82b70",4231:"9d16f531",4262:"074227c1",4283:"69cd26c4",4379:"7a765f3f",4478:"23020f8a",4569:"2faeff09",4639:"1281dea5",4688:"f24ebb1a",4760:"ad466e53",4837:"a0a65bcf",4841:"672a5c84",4916:"d966c18a",4923:"df187f3f",4993:"d1135c8e",5018:"8d9668da",5253:"3bb61a30",5361:"9b687df6",5434:"f93a4793",5463:"11d124a5",5482:"c316a935",5616:"a8362070",5642:"fece4a20",5697:"80aa9a3e",5699:"b2fb0d23",5760:"3c9625f7",5806:"97932652",5835:"a6f114e4",5896:"827a534f",5956:"11fec20f",6016:"f5e37973",6020:"b202d7c1",6087:"5621254b",6107:"2458f318",6111:"a3d67613",6138:"8e4c670f",6154:"35820e7c",6306:"3cd98e01",6313:"4653d1bc",6386:"4e6d1c8d",6408:"dd988729",6411:"12b1efc3",6477:"e6b98bb0",6481:"f037803f",6482:"54b06635",6615:"38fda33e",6638:"5240ce6f",6656:"7de3ef9e",6732:"66d6e5fc",6742:"8b48ed58",6872:"83e1e8f0",6887:"af0d2f08",6914:"75addca3",6939:"358ad14d",6943:"b41205be",6950:"91b92fbe",6966:"c8f140d2",6983:"7330aea0",6986:"077dc972",7079:"ba76cdcc",7118:"b6146cdf",7279:"ecc5887a",7355:"286c4884",7566:"760f9bea",7596:"640c363d",7642:"6923245c",7932:"7d387ebf",8037:"01fa04b0",8066:"abade018",8077:"1fb73a08",8149:"bb2fa870",8170:"88cc48c4",8230:"74a2cd83",8283:"49069ae9",8289:"823b747f",8376:"4238ccc6",8495:"3fb9df08",8524:"f4eb45e4",8615:"2d571adb",8693:"e7719811",8701:"25e4ffa1",8878:"f226505f",9062:"e47382a2",9149:"2f742383",9184:"0d898b24",9213:"5430b3fe",9230:"2a2fa2c1",9433:"6e9a10dc",9463:"65d8691d",9472:"5f4239a1",9479:"8ebf8ff1",9618:"50602521",9690:"96cde246",9744:"7b110f43",9829:"ce8f35ca",9985:"63b2aa8c"}[chunkId]+".iframe.bundle.js"),__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="@sima-land/ui-nucleons:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","@sima-land/ui-nucleons:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{__webpack_require__.b=document.baseURI||self.location.href;var installedChunks={1303:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(1303!=chunkId){var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}else installedChunks[chunkId]=0},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,chunkIds=data[0],moreModules=data[1],runtime=data[2],i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();