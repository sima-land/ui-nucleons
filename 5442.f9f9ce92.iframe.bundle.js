"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5442],{"./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{YF:()=>useFloating,x7:()=>arrow});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.x7)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.oo)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./node_modules/@floating-ui/react/dist/floating-ui.react.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{xp:()=>safePolygon,eS:()=>useClick,bQ:()=>useDismiss,YF:()=>useFloating,XI:()=>useHover,NI:()=>useInteractions});var react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2);function floating_ui_utils_dom_getNodeName(node){return isNode(node)?(node.nodeName||"").toLowerCase():"#document"}function floating_ui_utils_dom_getWindow(node){var _node$ownerDocument;return(null==node||null==(_node$ownerDocument=node.ownerDocument)?void 0:_node$ownerDocument.defaultView)||window}function isNode(value){return value instanceof Node||value instanceof floating_ui_utils_dom_getWindow(value).Node}function floating_ui_utils_dom_isElement(value){return value instanceof Element||value instanceof floating_ui_utils_dom_getWindow(value).Element}function floating_ui_utils_dom_isHTMLElement(value){return value instanceof HTMLElement||value instanceof floating_ui_utils_dom_getWindow(value).HTMLElement}function isShadowRoot(value){return"undefined"!=typeof ShadowRoot&&(value instanceof ShadowRoot||value instanceof floating_ui_utils_dom_getWindow(value).ShadowRoot)}function isLastTraversableNode(node){return["html","body","#document"].includes(floating_ui_utils_dom_getNodeName(node))}function getComputedStyle(element){return floating_ui_utils_dom_getWindow(element).getComputedStyle(element)}function getParentNode(node){if("html"===floating_ui_utils_dom_getNodeName(node))return node;const result=node.assignedSlot||node.parentNode||isShadowRoot(node)&&node.host||function getDocumentElement(node){var _ref;return null==(_ref=(isNode(node)?node.ownerDocument:node.document)||window.document)?void 0:_ref.documentElement}(node);return isShadowRoot(result)?result.host:result}function floating_ui_react_utils_contains(parent,child){if(!parent||!child)return!1;const rootNode=null==child.getRootNode?void 0:child.getRootNode();if(parent.contains(child))return!0;if(rootNode&&isShadowRoot(rootNode)){let next=child;for(;next;){if(parent===next)return!0;next=next.parentNode||next.host}}return!1}function floating_ui_react_utils_isMouseLikePointerType(pointerType,strict){const values=["mouse","pen"];return strict||values.push("",void 0),values.includes(pointerType)}function floating_ui_react_utils_getDocument(node){return(null==node?void 0:node.ownerDocument)||document}function isEventTargetWithin(event,node){if(null==node)return!1;if("composedPath"in event)return event.composedPath().includes(node);const e=event;return null!=e.target&&node.contains(e.target)}function floating_ui_react_utils_getTarget(event){return"composedPath"in event?event.composedPath()[0]:event.target}const TYPEABLE_SELECTOR="input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";function floating_ui_react_utils_isTypeableElement(element){return floating_ui_utils_dom_isHTMLElement(element)&&element.matches(TYPEABLE_SELECTOR)}var floating_ui_utils_dom=__webpack_require__("./node_modules/@floating-ui/utils/dom/dist/floating-ui.utils.dom.mjs"),floating_ui_react_dom=__webpack_require__("./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs");__webpack_require__("./node_modules/react-dom/index.js");const SafeReact={...react_namespaceObject},useSafeInsertionEffect=SafeReact.useInsertionEffect||(fn=>fn());function useEffectEvent(callback){const ref=react.useRef((()=>{0}));return useSafeInsertionEffect((()=>{ref.current=callback})),react.useCallback((function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==ref.current?void 0:ref.current(...args)}),[])}const ARROW_UP="ArrowUp",ARROW_DOWN="ArrowDown",ARROW_LEFT="ArrowLeft",ARROW_RIGHT="ArrowRight";var index="undefined"!=typeof document?react.useLayoutEffect:react.useEffect;const horizontalKeys=[ARROW_LEFT,ARROW_RIGHT],verticalKeys=[ARROW_UP,ARROW_DOWN];let serverHandoffComplete=!1,count=0;const genId=()=>"floating-ui-"+Math.random().toString(36).slice(2,6)+count++;const useId=SafeReact.useId||function useFloatingId(){const[id,setId]=react.useState((()=>serverHandoffComplete?genId():void 0));return index((()=>{null==id&&setId(genId())}),[]),react.useEffect((()=>{serverHandoffComplete=!0}),[]),id};function createPubSub(){const map=new Map;return{emit(event,data){var _map$get;null==(_map$get=map.get(event))||_map$get.forEach((handler=>handler(data)))},on(event,listener){map.set(event,[...map.get(event)||[],listener])},off(event,listener){var _map$get2;map.set(event,(null==(_map$get2=map.get(event))?void 0:_map$get2.filter((l=>l!==listener)))||[])}}}const FloatingNodeContext=react.createContext(null),FloatingTreeContext=react.createContext(null),useFloatingParentNodeId=()=>{var _React$useContext;return(null==(_React$useContext=react.useContext(FloatingNodeContext))?void 0:_React$useContext.id)||null},useFloatingTree=()=>react.useContext(FloatingTreeContext);function createAttribute(name){return"data-floating-ui-"+name}function useLatestRef(value){const ref=(0,react.useRef)(value);return index((()=>{ref.current=value})),ref}const safePolygonIdentifier=createAttribute("safe-polygon");function getDelay(value,prop,pointerType){return pointerType&&!floating_ui_react_utils_isMouseLikePointerType(pointerType)?0:"number"==typeof value?value:null==value?void 0:value[prop]}function useHover(context,props){void 0===props&&(props={});const{open,onOpenChange,dataRef,events,elements:{domReference,floating},refs}=context,{enabled=!0,delay=0,handleClose=null,mouseOnly=!1,restMs=0,move=!0}=props,tree=useFloatingTree(),parentId=useFloatingParentNodeId(),handleCloseRef=useLatestRef(handleClose),delayRef=useLatestRef(delay),pointerTypeRef=react.useRef(),timeoutRef=react.useRef(-1),handlerRef=react.useRef(),restTimeoutRef=react.useRef(-1),blockMouseMoveRef=react.useRef(!0),performedPointerEventsMutationRef=react.useRef(!1),unbindMouseMoveRef=react.useRef((()=>{})),isHoverOpen=react.useCallback((()=>{var _dataRef$current$open;const type=null==(_dataRef$current$open=dataRef.current.openEvent)?void 0:_dataRef$current$open.type;return(null==type?void 0:type.includes("mouse"))&&"mousedown"!==type}),[dataRef]);react.useEffect((()=>{if(enabled)return events.on("openchange",onOpenChange),()=>{events.off("openchange",onOpenChange)};function onOpenChange(_ref){let{open}=_ref;open||(clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),blockMouseMoveRef.current=!0)}}),[enabled,events]),react.useEffect((()=>{if(!enabled||!handleCloseRef.current||!open)return;function onLeave(event){isHoverOpen()&&onOpenChange(!1,event,"hover")}const html=floating_ui_react_utils_getDocument(floating).documentElement;return html.addEventListener("mouseleave",onLeave),()=>{html.removeEventListener("mouseleave",onLeave)}}),[floating,open,onOpenChange,enabled,handleCloseRef,isHoverOpen]);const closeWithDelay=react.useCallback((function(event,runElseBranch,reason){void 0===runElseBranch&&(runElseBranch=!0),void 0===reason&&(reason="hover");const closeDelay=getDelay(delayRef.current,"close",pointerTypeRef.current);closeDelay&&!handlerRef.current?(clearTimeout(timeoutRef.current),timeoutRef.current=window.setTimeout((()=>onOpenChange(!1,event,reason)),closeDelay)):runElseBranch&&(clearTimeout(timeoutRef.current),onOpenChange(!1,event,reason))}),[delayRef,onOpenChange]),cleanupMouseMoveHandler=react.useCallback((()=>{unbindMouseMoveRef.current(),handlerRef.current=void 0}),[]),clearPointerEvents=react.useCallback((()=>{if(performedPointerEventsMutationRef.current){const body=floating_ui_react_utils_getDocument(refs.floating.current).body;body.style.pointerEvents="",body.removeAttribute(safePolygonIdentifier),performedPointerEventsMutationRef.current=!1}}),[refs]);return react.useEffect((()=>{if(enabled&&floating_ui_utils_dom_isElement(domReference)){const ref=domReference;return open&&ref.addEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.addEventListener("mouseleave",onScrollMouseLeave),move&&ref.addEventListener("mousemove",onMouseEnter,{once:!0}),ref.addEventListener("mouseenter",onMouseEnter),ref.addEventListener("mouseleave",onMouseLeave),()=>{open&&ref.removeEventListener("mouseleave",onScrollMouseLeave),null==floating||floating.removeEventListener("mouseleave",onScrollMouseLeave),move&&ref.removeEventListener("mousemove",onMouseEnter),ref.removeEventListener("mouseenter",onMouseEnter),ref.removeEventListener("mouseleave",onMouseLeave)}}function isClickLikeOpenEvent(){return!!dataRef.current.openEvent&&["click","mousedown"].includes(dataRef.current.openEvent.type)}function onMouseEnter(event){if(clearTimeout(timeoutRef.current),blockMouseMoveRef.current=!1,mouseOnly&&!floating_ui_react_utils_isMouseLikePointerType(pointerTypeRef.current)||restMs>0&&!getDelay(delayRef.current,"open"))return;const openDelay=getDelay(delayRef.current,"open",pointerTypeRef.current);openDelay?timeoutRef.current=window.setTimeout((()=>{onOpenChange(!0,event,"hover")}),openDelay):onOpenChange(!0,event,"hover")}function onMouseLeave(event){if(isClickLikeOpenEvent())return;unbindMouseMoveRef.current();const doc=floating_ui_react_utils_getDocument(floating);if(clearTimeout(restTimeoutRef.current),handleCloseRef.current){open||clearTimeout(timeoutRef.current),handlerRef.current=handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,onClose(){clearPointerEvents(),cleanupMouseMoveHandler(),closeWithDelay(event,!0,"safe-polygon")}});const handler=handlerRef.current;return doc.addEventListener("mousemove",handler),void(unbindMouseMoveRef.current=()=>{doc.removeEventListener("mousemove",handler)})}("touch"!==pointerTypeRef.current||!floating_ui_react_utils_contains(floating,event.relatedTarget))&&closeWithDelay(event)}function onScrollMouseLeave(event){isClickLikeOpenEvent()||null==handleCloseRef.current||handleCloseRef.current({...context,tree,x:event.clientX,y:event.clientY,onClose(){clearPointerEvents(),cleanupMouseMoveHandler(),closeWithDelay(event)}})(event)}}),[domReference,floating,enabled,context,mouseOnly,restMs,move,closeWithDelay,cleanupMouseMoveHandler,clearPointerEvents,onOpenChange,open,tree,delayRef,handleCloseRef,dataRef]),index((()=>{var _handleCloseRef$curre;if(enabled&&open&&null!=(_handleCloseRef$curre=handleCloseRef.current)&&_handleCloseRef$curre.__options.blockPointerEvents&&isHoverOpen()){const body=floating_ui_react_utils_getDocument(floating).body;if(body.setAttribute(safePolygonIdentifier,""),body.style.pointerEvents="none",performedPointerEventsMutationRef.current=!0,floating_ui_utils_dom_isElement(domReference)&&floating){var _tree$nodesRef$curren;const ref=domReference,parentFloating=null==tree||null==(_tree$nodesRef$curren=tree.nodesRef.current.find((node=>node.id===parentId)))||null==(_tree$nodesRef$curren=_tree$nodesRef$curren.context)?void 0:_tree$nodesRef$curren.elements.floating;return parentFloating&&(parentFloating.style.pointerEvents=""),ref.style.pointerEvents="auto",floating.style.pointerEvents="auto",()=>{ref.style.pointerEvents="",floating.style.pointerEvents=""}}}}),[enabled,open,parentId,floating,domReference,tree,handleCloseRef,isHoverOpen]),index((()=>{open||(pointerTypeRef.current=void 0,cleanupMouseMoveHandler(),clearPointerEvents())}),[open,cleanupMouseMoveHandler,clearPointerEvents]),react.useEffect((()=>()=>{cleanupMouseMoveHandler(),clearTimeout(timeoutRef.current),clearTimeout(restTimeoutRef.current),clearPointerEvents()}),[enabled,domReference,cleanupMouseMoveHandler,clearPointerEvents]),react.useMemo((()=>{if(!enabled)return{};function setPointerRef(event){pointerTypeRef.current=event.pointerType}return{reference:{onPointerDown:setPointerRef,onPointerEnter:setPointerRef,onMouseMove(event){function handleMouseMove(){blockMouseMoveRef.current||onOpenChange(!0,event.nativeEvent,"hover")}mouseOnly&&!floating_ui_react_utils_isMouseLikePointerType(pointerTypeRef.current)||open||0===restMs||(clearTimeout(restTimeoutRef.current),"touch"===pointerTypeRef.current?handleMouseMove():restTimeoutRef.current=window.setTimeout(handleMouseMove,restMs))}},floating:{onMouseEnter(){clearTimeout(timeoutRef.current)},onMouseLeave(event){closeWithDelay(event.nativeEvent,!1)}}}}),[enabled,mouseOnly,open,restMs,onOpenChange,closeWithDelay])}function getChildren(nodes,id){let allChildren=nodes.filter((node=>{var _node$context;return node.parentId===id&&(null==(_node$context=node.context)?void 0:_node$context.open)})),currentChildren=allChildren;for(;currentChildren.length;)currentChildren=nodes.filter((node=>{var _currentChildren;return null==(_currentChildren=currentChildren)?void 0:_currentChildren.some((n=>{var _node$context2;return node.parentId===n.id&&(null==(_node$context2=node.context)?void 0:_node$context2.open)}))})),allChildren=allChildren.concat(currentChildren);return allChildren}function isButtonTarget(event){return floating_ui_utils_dom_isHTMLElement(event.target)&&"BUTTON"===event.target.tagName}function isSpaceIgnored(element){return floating_ui_react_utils_isTypeableElement(element)}function useClick(context,props){void 0===props&&(props={});const{open,onOpenChange,dataRef,elements:{domReference}}=context,{enabled=!0,event:eventOption="click",toggle=!0,ignoreMouse=!1,keyboardHandlers=!0}=props,pointerTypeRef=react.useRef(),didKeyDownRef=react.useRef(!1);return react.useMemo((()=>enabled?{reference:{onPointerDown(event){pointerTypeRef.current=event.pointerType},onMouseDown(event){0===event.button&&(floating_ui_react_utils_isMouseLikePointerType(pointerTypeRef.current,!0)&&ignoreMouse||"click"!==eventOption&&(!open||!toggle||dataRef.current.openEvent&&"mousedown"!==dataRef.current.openEvent.type?(event.preventDefault(),onOpenChange(!0,event.nativeEvent,"click")):onOpenChange(!1,event.nativeEvent,"click")))},onClick(event){"mousedown"===eventOption&&pointerTypeRef.current?pointerTypeRef.current=void 0:floating_ui_react_utils_isMouseLikePointerType(pointerTypeRef.current,!0)&&ignoreMouse||(!open||!toggle||dataRef.current.openEvent&&"click"!==dataRef.current.openEvent.type?onOpenChange(!0,event.nativeEvent,"click"):onOpenChange(!1,event.nativeEvent,"click"))},onKeyDown(event){pointerTypeRef.current=void 0,event.defaultPrevented||!keyboardHandlers||isButtonTarget(event)||(" "!==event.key||isSpaceIgnored(domReference)||(event.preventDefault(),didKeyDownRef.current=!0),"Enter"===event.key&&onOpenChange(!open||!toggle,event.nativeEvent,"click"))},onKeyUp(event){event.defaultPrevented||!keyboardHandlers||isButtonTarget(event)||isSpaceIgnored(domReference)||" "===event.key&&didKeyDownRef.current&&(didKeyDownRef.current=!1,onOpenChange(!open||!toggle,event.nativeEvent,"click"))}}}:{}),[enabled,dataRef,eventOption,ignoreMouse,keyboardHandlers,domReference,toggle,open,onOpenChange])}const bubbleHandlerKeys={pointerdown:"onPointerDown",mousedown:"onMouseDown",click:"onClick"},captureHandlerKeys={pointerdown:"onPointerDownCapture",mousedown:"onMouseDownCapture",click:"onClickCapture"},normalizeProp=normalizable=>{var _normalizable$escapeK,_normalizable$outside;return{escapeKey:"boolean"==typeof normalizable?normalizable:null!=(_normalizable$escapeK=null==normalizable?void 0:normalizable.escapeKey)&&_normalizable$escapeK,outsidePress:"boolean"==typeof normalizable?normalizable:null==(_normalizable$outside=null==normalizable?void 0:normalizable.outsidePress)||_normalizable$outside}};function useDismiss(context,props){void 0===props&&(props={});const{open,onOpenChange,nodeId,elements:{reference,domReference,floating},dataRef}=context,{enabled=!0,escapeKey=!0,outsidePress:unstable_outsidePress=!0,outsidePressEvent="pointerdown",referencePress=!1,referencePressEvent="pointerdown",ancestorScroll=!1,bubbles,capture}=props,tree=useFloatingTree(),outsidePressFn=useEffectEvent("function"==typeof unstable_outsidePress?unstable_outsidePress:()=>!1),outsidePress="function"==typeof unstable_outsidePress?outsidePressFn:unstable_outsidePress,insideReactTreeRef=react.useRef(!1),endedOrStartedInsideRef=react.useRef(!1),{escapeKey:escapeKeyBubbles,outsidePress:outsidePressBubbles}=normalizeProp(bubbles),{escapeKey:escapeKeyCapture,outsidePress:outsidePressCapture}=normalizeProp(capture),closeOnEscapeKeyDown=useEffectEvent((event=>{if(!open||!enabled||!escapeKey||"Escape"!==event.key)return;const children=tree?getChildren(tree.nodesRef.current,nodeId):[];if(!escapeKeyBubbles&&(event.stopPropagation(),children.length>0)){let shouldDismiss=!0;if(children.forEach((child=>{var _child$context;null==(_child$context=child.context)||!_child$context.open||child.context.dataRef.current.__escapeKeyBubbles||(shouldDismiss=!1)})),!shouldDismiss)return}onOpenChange(!1,function isReactEvent(event){return"nativeEvent"in event}(event)?event.nativeEvent:event,"escape-key")})),closeOnEscapeKeyDownCapture=useEffectEvent((event=>{var _getTarget2;const callback=()=>{var _getTarget;closeOnEscapeKeyDown(event),null==(_getTarget=floating_ui_react_utils_getTarget(event))||_getTarget.removeEventListener("keydown",callback)};null==(_getTarget2=floating_ui_react_utils_getTarget(event))||_getTarget2.addEventListener("keydown",callback)})),closeOnPressOutside=useEffectEvent((event=>{const insideReactTree=insideReactTreeRef.current;insideReactTreeRef.current=!1;const endedOrStartedInside=endedOrStartedInsideRef.current;if(endedOrStartedInsideRef.current=!1,"click"===outsidePressEvent&&endedOrStartedInside)return;if(insideReactTree)return;if("function"==typeof outsidePress&&!outsidePress(event))return;const target=floating_ui_react_utils_getTarget(event),inertSelector="["+createAttribute("inert")+"]",markers=floating_ui_react_utils_getDocument(floating).querySelectorAll(inertSelector);let targetRootAncestor=floating_ui_utils_dom_isElement(target)?target:null;for(;targetRootAncestor&&!isLastTraversableNode(targetRootAncestor);){const nextParent=getParentNode(targetRootAncestor);if(isLastTraversableNode(nextParent)||!floating_ui_utils_dom_isElement(nextParent))break;targetRootAncestor=nextParent}if(markers.length&&floating_ui_utils_dom_isElement(target)&&!function isRootElement(element){return element.matches("html,body")}(target)&&!floating_ui_react_utils_contains(target,floating)&&Array.from(markers).every((marker=>!floating_ui_react_utils_contains(targetRootAncestor,marker))))return;if(floating_ui_utils_dom_isHTMLElement(target)&&floating){const canScrollX=target.clientWidth>0&&target.scrollWidth>target.clientWidth,canScrollY=target.clientHeight>0&&target.scrollHeight>target.clientHeight;let xCond=canScrollY&&event.offsetX>target.clientWidth;if(canScrollY){"rtl"===getComputedStyle(target).direction&&(xCond=event.offsetX<=target.offsetWidth-target.clientWidth)}if(xCond||canScrollX&&event.offsetY>target.clientHeight)return}const targetIsInsideChildren=tree&&getChildren(tree.nodesRef.current,nodeId).some((node=>{var _node$context;return isEventTargetWithin(event,null==(_node$context=node.context)?void 0:_node$context.elements.floating)}));if(isEventTargetWithin(event,floating)||isEventTargetWithin(event,domReference)||targetIsInsideChildren)return;const children=tree?getChildren(tree.nodesRef.current,nodeId):[];if(children.length>0){let shouldDismiss=!0;if(children.forEach((child=>{var _child$context2;null==(_child$context2=child.context)||!_child$context2.open||child.context.dataRef.current.__outsidePressBubbles||(shouldDismiss=!1)})),!shouldDismiss)return}onOpenChange(!1,event,"outside-press")})),closeOnPressOutsideCapture=useEffectEvent((event=>{var _getTarget4;const callback=()=>{var _getTarget3;closeOnPressOutside(event),null==(_getTarget3=floating_ui_react_utils_getTarget(event))||_getTarget3.removeEventListener(outsidePressEvent,callback)};null==(_getTarget4=floating_ui_react_utils_getTarget(event))||_getTarget4.addEventListener(outsidePressEvent,callback)}));return react.useEffect((()=>{if(!open||!enabled)return;function onScroll(event){onOpenChange(!1,event,"ancestor-scroll")}dataRef.current.__escapeKeyBubbles=escapeKeyBubbles,dataRef.current.__outsidePressBubbles=outsidePressBubbles;const doc=floating_ui_react_utils_getDocument(floating);escapeKey&&doc.addEventListener("keydown",escapeKeyCapture?closeOnEscapeKeyDownCapture:closeOnEscapeKeyDown,escapeKeyCapture),outsidePress&&doc.addEventListener(outsidePressEvent,outsidePressCapture?closeOnPressOutsideCapture:closeOnPressOutside,outsidePressCapture);let ancestors=[];return ancestorScroll&&(floating_ui_utils_dom_isElement(domReference)&&(ancestors=(0,floating_ui_utils_dom.Kx)(domReference)),floating_ui_utils_dom_isElement(floating)&&(ancestors=ancestors.concat((0,floating_ui_utils_dom.Kx)(floating))),!floating_ui_utils_dom_isElement(reference)&&reference&&reference.contextElement&&(ancestors=ancestors.concat((0,floating_ui_utils_dom.Kx)(reference.contextElement)))),ancestors=ancestors.filter((ancestor=>{var _doc$defaultView;return ancestor!==(null==(_doc$defaultView=doc.defaultView)?void 0:_doc$defaultView.visualViewport)})),ancestors.forEach((ancestor=>{ancestor.addEventListener("scroll",onScroll,{passive:!0})})),()=>{escapeKey&&doc.removeEventListener("keydown",escapeKeyCapture?closeOnEscapeKeyDownCapture:closeOnEscapeKeyDown,escapeKeyCapture),outsidePress&&doc.removeEventListener(outsidePressEvent,outsidePressCapture?closeOnPressOutsideCapture:closeOnPressOutside,outsidePressCapture),ancestors.forEach((ancestor=>{ancestor.removeEventListener("scroll",onScroll)}))}}),[dataRef,floating,domReference,reference,escapeKey,outsidePress,outsidePressEvent,open,onOpenChange,ancestorScroll,enabled,escapeKeyBubbles,outsidePressBubbles,closeOnEscapeKeyDown,escapeKeyCapture,closeOnEscapeKeyDownCapture,closeOnPressOutside,outsidePressCapture,closeOnPressOutsideCapture]),react.useEffect((()=>{insideReactTreeRef.current=!1}),[outsidePress,outsidePressEvent]),react.useMemo((()=>enabled?{reference:{onKeyDown:closeOnEscapeKeyDown,[bubbleHandlerKeys[referencePressEvent]]:event=>{referencePress&&onOpenChange(!1,event.nativeEvent,"reference-press")}},floating:{onKeyDown:closeOnEscapeKeyDown,onMouseDown(){endedOrStartedInsideRef.current=!0},onMouseUp(){endedOrStartedInsideRef.current=!0},[captureHandlerKeys[outsidePressEvent]]:()=>{insideReactTreeRef.current=!0}}}:{}),[enabled,referencePress,outsidePressEvent,referencePressEvent,onOpenChange,closeOnEscapeKeyDown])}function useFloating(options){var _options$elements;void 0===options&&(options={});const{open=!1,onOpenChange:unstable_onOpenChange,nodeId}=options,[_domReference,setDomReference]=react.useState(null),[positionReference,_setPositionReference]=react.useState(null),domReference=(null==(_options$elements=options.elements)?void 0:_options$elements.reference)||_domReference;index((()=>{domReference&&(domReferenceRef.current=domReference)}),[domReference]);const position=(0,floating_ui_react_dom.YF)({...options,elements:{...options.elements,...positionReference&&{reference:positionReference}}}),tree=useFloatingTree(),nested=null!=useFloatingParentNodeId(),onOpenChange=useEffectEvent(((open,event,reason)=>{dataRef.current.openEvent=open?event:void 0,events.emit("openchange",{open,event,reason,nested}),null==unstable_onOpenChange||unstable_onOpenChange(open,event,reason)})),domReferenceRef=react.useRef(null),dataRef=react.useRef({}),events=react.useState((()=>createPubSub()))[0],floatingId=useId(),setPositionReference=react.useCallback((node=>{const computedPositionReference=floating_ui_utils_dom_isElement(node)?{getBoundingClientRect:()=>node.getBoundingClientRect(),contextElement:node}:node;_setPositionReference(computedPositionReference),position.refs.setReference(computedPositionReference)}),[position.refs]),setReference=react.useCallback((node=>{(floating_ui_utils_dom_isElement(node)||null===node)&&(domReferenceRef.current=node,setDomReference(node)),(floating_ui_utils_dom_isElement(position.refs.reference.current)||null===position.refs.reference.current||null!==node&&!floating_ui_utils_dom_isElement(node))&&position.refs.setReference(node)}),[position.refs]),refs=react.useMemo((()=>({...position.refs,setReference,setPositionReference,domReference:domReferenceRef})),[position.refs,setReference,setPositionReference]),elements=react.useMemo((()=>({...position.elements,domReference})),[position.elements,domReference]),context=react.useMemo((()=>({...position,refs,elements,dataRef,nodeId,floatingId,events,open,onOpenChange})),[position,nodeId,floatingId,events,open,onOpenChange,refs,elements]);return index((()=>{const node=null==tree?void 0:tree.nodesRef.current.find((node=>node.id===nodeId));node&&(node.context=context)})),react.useMemo((()=>({...position,context,refs,elements})),[position,refs,elements,context])}const ACTIVE_KEY="active",SELECTED_KEY="selected";function mergeProps(userProps,propsList,elementKey){const map=new Map,isItem="item"===elementKey;let domUserProps=userProps;if(isItem&&userProps){const{[ACTIVE_KEY]:_,[SELECTED_KEY]:__,...validProps}=userProps;domUserProps=validProps}return{..."floating"===elementKey&&{tabIndex:-1},...domUserProps,...propsList.map((value=>{const propsOrGetProps=value?value[elementKey]:null;return"function"==typeof propsOrGetProps?userProps?propsOrGetProps(userProps):null:propsOrGetProps})).concat(userProps).reduce(((acc,props)=>props?(Object.entries(props).forEach((_ref=>{let[key,value]=_ref;var _map$get;isItem&&[ACTIVE_KEY,SELECTED_KEY].includes(key)||(0===key.indexOf("on")?(map.has(key)||map.set(key,[]),"function"==typeof value&&(null==(_map$get=map.get(key))||_map$get.push(value),acc[key]=function(){for(var _map$get2,_len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return null==(_map$get2=map.get(key))?void 0:_map$get2.map((fn=>fn(...args))).find((val=>void 0!==val))})):acc[key]=value)})),acc):acc),{})}}function useInteractions(propsList){void 0===propsList&&(propsList=[]);const deps=propsList,getReferenceProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"reference")),deps),getFloatingProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"floating")),deps),getItemProps=react.useCallback((userProps=>mergeProps(userProps,propsList,"item")),propsList.map((key=>null==key?void 0:key.item)));return react.useMemo((()=>({getReferenceProps,getFloatingProps,getItemProps})),[getReferenceProps,getFloatingProps,getItemProps])}function isPointInPolygon(point,polygon){const[x,y]=point;let isInside=!1;const length=polygon.length;for(let i=0,j=length-1;i<length;j=i++){const[xi,yi]=polygon[i]||[0,0],[xj,yj]=polygon[j]||[0,0];yi>=y!=yj>=y&&x<=(xj-xi)*(y-yi)/(yj-yi)+xi&&(isInside=!isInside)}return isInside}function safePolygon(options){void 0===options&&(options={});const{buffer=.5,blockPointerEvents=!1,requireIntent=!0}=options;let timeoutId,hasLanded=!1,lastX=null,lastY=null,lastCursorTime=performance.now();const fn=_ref=>{let{x,y,placement,elements,onClose,nodeId,tree}=_ref;return function onMouseMove(event){function close(){clearTimeout(timeoutId),onClose()}if(clearTimeout(timeoutId),!elements.domReference||!elements.floating||null==placement||null==x||null==y)return;const{clientX,clientY}=event,clientPoint=[clientX,clientY],target=floating_ui_react_utils_getTarget(event),isLeave="mouseleave"===event.type,isOverFloatingEl=floating_ui_react_utils_contains(elements.floating,target),isOverReferenceEl=floating_ui_react_utils_contains(elements.domReference,target),refRect=elements.domReference.getBoundingClientRect(),rect=elements.floating.getBoundingClientRect(),side=placement.split("-")[0],cursorLeaveFromRight=x>rect.right-rect.width/2,cursorLeaveFromBottom=y>rect.bottom-rect.height/2,isOverReferenceRect=function isInside(point,rect){return point[0]>=rect.x&&point[0]<=rect.x+rect.width&&point[1]>=rect.y&&point[1]<=rect.y+rect.height}(clientPoint,refRect),isFloatingWider=rect.width>refRect.width,isFloatingTaller=rect.height>refRect.height,left=(isFloatingWider?refRect:rect).left,right=(isFloatingWider?refRect:rect).right,top=(isFloatingTaller?refRect:rect).top,bottom=(isFloatingTaller?refRect:rect).bottom;if(isOverFloatingEl&&(hasLanded=!0,!isLeave))return;if(isOverReferenceEl&&(hasLanded=!1),isOverReferenceEl&&!isLeave)return void(hasLanded=!0);if(isLeave&&floating_ui_utils_dom_isElement(event.relatedTarget)&&floating_ui_react_utils_contains(elements.floating,event.relatedTarget))return;if(tree&&getChildren(tree.nodesRef.current,nodeId).some((_ref2=>{let{context}=_ref2;return null==context?void 0:context.open})))return;if("top"===side&&y>=refRect.bottom-1||"bottom"===side&&y<=refRect.top+1||"left"===side&&x>=refRect.right-1||"right"===side&&x<=refRect.left+1)return close();let rectPoly=[];switch(side){case"top":rectPoly=[[left,refRect.top+1],[left,rect.bottom-1],[right,rect.bottom-1],[right,refRect.top+1]];break;case"bottom":rectPoly=[[left,rect.top+1],[left,refRect.bottom-1],[right,refRect.bottom-1],[right,rect.top+1]];break;case"left":rectPoly=[[rect.right-1,bottom],[rect.right-1,top],[refRect.left+1,top],[refRect.left+1,bottom]];break;case"right":rectPoly=[[refRect.right-1,bottom],[refRect.right-1,top],[rect.left+1,top],[rect.left+1,bottom]]}if(!isPointInPolygon([clientX,clientY],rectPoly)){if(hasLanded&&!isOverReferenceRect)return close();if(!isLeave&&requireIntent){const cursorSpeed=function getCursorSpeed(x,y){const currentTime=performance.now(),elapsedTime=currentTime-lastCursorTime;if(null===lastX||null===lastY||0===elapsedTime)return lastX=x,lastY=y,lastCursorTime=currentTime,null;const deltaX=x-lastX,deltaY=y-lastY,distance=Math.sqrt(deltaX*deltaX+deltaY*deltaY);return lastX=x,lastY=y,lastCursorTime=currentTime,distance/elapsedTime}(event.clientX,event.clientY);if(null!==cursorSpeed&&cursorSpeed<.1)return close()}isPointInPolygon([clientX,clientY],function getPolygon(_ref3){let[x,y]=_ref3;switch(side){case"top":return[[isFloatingWider?x+buffer/2:cursorLeaveFromRight?x+4*buffer:x-4*buffer,y+buffer+1],[isFloatingWider?x-buffer/2:cursorLeaveFromRight?x+4*buffer:x-4*buffer,y+buffer+1],...[[rect.left,cursorLeaveFromRight||isFloatingWider?rect.bottom-buffer:rect.top],[rect.right,cursorLeaveFromRight?isFloatingWider?rect.bottom-buffer:rect.top:rect.bottom-buffer]]];case"bottom":return[[isFloatingWider?x+buffer/2:cursorLeaveFromRight?x+4*buffer:x-4*buffer,y-buffer],[isFloatingWider?x-buffer/2:cursorLeaveFromRight?x+4*buffer:x-4*buffer,y-buffer],...[[rect.left,cursorLeaveFromRight||isFloatingWider?rect.top+buffer:rect.bottom],[rect.right,cursorLeaveFromRight?isFloatingWider?rect.top+buffer:rect.bottom:rect.top+buffer]]];case"left":{const cursorPointOne=[x+buffer+1,isFloatingTaller?y+buffer/2:cursorLeaveFromBottom?y+4*buffer:y-4*buffer],cursorPointTwo=[x+buffer+1,isFloatingTaller?y-buffer/2:cursorLeaveFromBottom?y+4*buffer:y-4*buffer];return[...[[cursorLeaveFromBottom||isFloatingTaller?rect.right-buffer:rect.left,rect.top],[cursorLeaveFromBottom?isFloatingTaller?rect.right-buffer:rect.left:rect.right-buffer,rect.bottom]],cursorPointOne,cursorPointTwo]}case"right":return[[x-buffer,isFloatingTaller?y+buffer/2:cursorLeaveFromBottom?y+4*buffer:y-4*buffer],[x-buffer,isFloatingTaller?y-buffer/2:cursorLeaveFromBottom?y+4*buffer:y-4*buffer],...[[cursorLeaveFromBottom||isFloatingTaller?rect.left+buffer:rect.right,rect.top],[cursorLeaveFromBottom?isFloatingTaller?rect.left+buffer:rect.right:rect.left+buffer,rect.bottom]]]}}([x,y]))?!hasLanded&&requireIntent&&(timeoutId=window.setTimeout(close,40)):close()}}};return fn.__options={blockPointerEvents},fn}}}]);