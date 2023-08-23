"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[8459],{"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/dropdown-item/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>DropdownItem});var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dropdown_item_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown-item/dropdown-item.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dropdown_item_module.Z,options);const dropdown_item_dropdown_item_module=dropdown_item_module.Z&&dropdown_item_module.Z.locals?dropdown_item_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(dropdown_item_dropdown_item_module);function DropdownItem({size="m",children,className,selected,disabled,noHover,checked,startContent,startIcon:StartIcon,endContent,endIcon:EndIcon,comment,dangerouslySetInnerHTML,"data-testid":testId="dropdown-item",...restProps}){const start=StartIcon?(0,jsx_runtime.jsx)(StartIcon,{className:cx("icon")}):startContent,end=EndIcon?(0,jsx_runtime.jsx)(EndIcon,{className:cx("icon")}):endContent,hasChildren=[start,children,end].some((item=>void 0!==item));return(0,jsx_runtime.jsx)("div",{...restProps,className:cx("root",`size-${size}`,selected&&"selected",checked&&"checked",disabled&&"disabled",noHover&&"no-hover",className),dangerouslySetInnerHTML,"data-testid":testId,children:hasChildren?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[start&&(0,jsx_runtime.jsx)("div",{className:cx("col","col-start"),children:start}),(0,jsx_runtime.jsxs)("div",{className:cx("col","col-center"),children:[(0,jsx_runtime.jsx)("div",{className:cx("row-main"),children}),"xl"===size&&comment&&(0,jsx_runtime.jsx)("div",{className:cx("row-comment"),children:comment})]}),end&&(0,jsx_runtime.jsx)("div",{className:cx("col","col-end"),children:end})]}):void 0})}DropdownItem.displayName="DropdownItem";try{DropdownItem.displayName="DropdownItem",DropdownItem.__docgenInfo={description:"Элемент выпадающего списка.",displayName:"DropdownItem",props:{checked:{defaultValue:null,description:"Отображать элемент как отмеченный (активный) или нет.",name:"checked",required:!1,type:{name:"boolean | undefined"}},selected:{defaultValue:null,description:"Отображать элемент как выбранный или нет.",name:"selected",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключен ли элемент.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},noHover:{defaultValue:null,description:"Нужно ли отключить эффект при наведении.",name:"noHover",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"xl"'}]}},value:{defaultValue:null,description:"Строковое значение, ассоциированное с элементом списка.",name:"value",required:!1,type:{name:"string | undefined"}},startContent:{defaultValue:null,description:"Контент перед основным содержимым.",name:"startContent",required:!1,type:{name:"ReactNode"}},endContent:{defaultValue:null,description:"Контент после основного содержимого.",name:"endContent",required:!1,type:{name:"ReactNode"}},startIcon:{defaultValue:null,description:'Иконка перед основным содержимым. При указании будет проигнорирован "startContent".',name:"startIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},endIcon:{defaultValue:null,description:'Иконка после основного содержимого. При указании будет проигнорирован "endContent".',name:"endIcon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},comment:{defaultValue:null,description:"Контент под основным содержимым. Выводится только при size='xl'.",name:"comment",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown-item/index.tsx#DropdownItem"]={docgenInfo:DropdownItem.__docgenInfo,name:"DropdownItem",path:"src/dropdown-item/index.tsx#DropdownItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/dropdown/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>Dropdown});var react=__webpack_require__("./node_modules/react/index.js"),shadows=__webpack_require__("./src/styling/shadows.ts"),shapes=__webpack_require__("./src/styling/shapes.ts"),custom_scrollbar=__webpack_require__("./src/_internal/custom-scrollbar/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),dropdown_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown/dropdown.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(dropdown_module.Z,options);const dropdown_dropdown_module=dropdown_module.Z&&dropdown_module.Z.locals?dropdown_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(dropdown_dropdown_module),Dropdown=(0,react.forwardRef)((function Dropdown({className,children,"data-testid":testId="dropdown",customScrollbarProps,...restProps},ref){return(0,jsx_runtime.jsx)("div",{ref,className:cx("root",className,shadows.P.z4,shapes.r.all),...restProps,"data-testid":testId,children:(0,jsx_runtime.jsx)(custom_scrollbar.$T,{...customScrollbarProps,className:cx("inner"),overflow:{x:"h",y:"s"},children})})}));try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"Компонент выпадающего блока с контентом, например списком.",displayName:"Dropdown",props:{style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"DropdownStyle | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},customScrollbarProps:{defaultValue:null,description:"Свойства компонента CustomScrollbar.",name:"customScrollbarProps",required:!1,type:{name:'Omit<CustomScrollbarProps, "children" | "className" | "overflow"> | undefined'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/dropdown/index.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"src/dropdown/index.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown-item/dropdown-item.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-item-module__root__f1d{display:flex;padding:var(--menu-item-gutter-y) 16px;font-size:16px;line-height:24px;min-height:var(--menu-item-min-height);max-height:var(--menu-item-max-height);background:#fff;overflow:hidden;--menu-item-primary-color: #212121;--menu-item-secondary-color: #9e9e9e;--menu-item-main-weight: 400}.dropdown-item-module__root__f1d.dropdown-item-module__selected__d20{--menu-item-primary-weight: 600}.dropdown-item-module__root__f1d.dropdown-item-module__disabled__c59{--menu-item-primary-color: #c2c2c2;--menu-item-secondary-color: #c2c2c2}.dropdown-item-module__root__f1d:not(.dropdown-item-module__disabled__c59):not(.dropdown-item-module__no-hover__c01).dropdown-item-module__checked__d23,.dropdown-item-module__root__f1d:not(.dropdown-item-module__disabled__c59):not(.dropdown-item-module__no-hover__c01):hover{cursor:pointer;background:#f5f5f5}.dropdown-item-module__size-s__eae{--menu-item-min-height: 40px;--menu-item-max-height: 64px;--menu-item-gutter-y: 8px}.dropdown-item-module__size-m__c8a{--menu-item-min-height: 48px;--menu-item-max-height: 72px;--menu-item-gutter-y: 12px}.dropdown-item-module__size-l__d13{--menu-item-min-height: 56px;--menu-item-max-height: 80px;--menu-item-gutter-y: 16px}.dropdown-item-module__size-xl__b23{--menu-item-min-height: 72px;--menu-item-max-height: 116px;--menu-item-gutter-y: 12px}.dropdown-item-module__col__fa2+.dropdown-item-module__col__fa2{margin-left:12px}.dropdown-item-module__col-start__c7a{color:var(--menu-item-primary-color)}.dropdown-item-module__col-center__be2{flex-grow:1}.dropdown-item-module__row-main__db8{color:var(--menu-item-primary-color);font-weight:var(--menu-item-primary-weight);max-height:48px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.dropdown-item-module__row-comment__fcf{margin-top:4px;font-size:14px;line-height:20px;max-height:40px;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.dropdown-item-module__col-end__a8c,.dropdown-item-module__row-comment__fcf{color:var(--menu-item-secondary-color)}.dropdown-item-module__icon__ec2{display:block;fill:currentColor}","",{version:3,sources:["webpack://./src/dropdown-item/dropdown-item.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,iCACE,YAAA,CACA,sCAAA,CACA,cAAA,CACA,gBAAA,CACA,sCAAA,CACA,sCAAA,CACA,eAAA,CACA,eAAA,CACA,kCAAA,CACA,oCAAA,CACA,4BAAA,CACA,qEACE,+BAAA,CAEF,qEACE,kCAAA,CACA,oCAAA,CAEF,mRAEE,cAAA,CACA,kBCZU,CDiBd,mCACE,4BAAA,CACA,4BAAA,CACA,yBAAA,CAGF,mCACE,4BAAA,CACA,4BAAA,CACA,0BAAA,CAGF,mCACE,4BAAA,CACA,4BAAA,CACA,0BAAA,CAGF,oCACE,4BAAA,CACA,6BAAA,CACA,0BAAA,CAIF,gEACE,gBAAA,CAGF,sCACE,oCAAA,CAGF,uCACE,WAAA,CAGF,qCACE,oCAAA,CACA,2CAAA,CACA,eAAA,CACA,mBAAA,CACA,2BAAA,CACA,oBAAA,CACA,eAAA,CAGF,wCACE,cAAA,CACA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,mBAAA,CACA,2BAAA,CACA,oBAAA,CACA,eAAA,CAGF,4EAEE,sCAAA,CAGF,iCACE,aAAA,CACA,iBAAA",sourcesContent:["@use '../colors';\n\n.root {\n  display: flex;\n  padding: var(--menu-item-gutter-y) 16px;\n  font-size: 16px;\n  line-height: 24px;\n  min-height: var(--menu-item-min-height);\n  max-height: var(--menu-item-max-height);\n  background: #fff;\n  overflow: hidden;\n  --menu-item-primary-color: #{colors.$basic-gray87};\n  --menu-item-secondary-color: #{colors.$basic-gray38};\n  --menu-item-main-weight: 400;\n  &.selected {\n    --menu-item-primary-weight: 600;\n  }\n  &.disabled {\n    --menu-item-primary-color: #{colors.$basic-gray24};\n    --menu-item-secondary-color: #{colors.$basic-gray24};\n  }\n  &:not(.disabled):not(.no-hover).checked,\n  &:not(.disabled):not(.no-hover):hover {\n    cursor: pointer;\n    background: colors.$basic-gray4;\n  }\n}\n\n// sizes\n.size-s {\n  --menu-item-min-height: 40px;\n  --menu-item-max-height: 64px;\n  --menu-item-gutter-y: 8px;\n}\n\n.size-m {\n  --menu-item-min-height: 48px;\n  --menu-item-max-height: 72px;\n  --menu-item-gutter-y: 12px;\n}\n\n.size-l {\n  --menu-item-min-height: 56px;\n  --menu-item-max-height: 80px;\n  --menu-item-gutter-y: 16px;\n}\n\n.size-xl {\n  --menu-item-min-height: 72px;\n  --menu-item-max-height: 116px;\n  --menu-item-gutter-y: 12px;\n}\n\n// items\n.col + .col {\n  margin-left: 12px;\n}\n\n.col-start {\n  color: var(--menu-item-primary-color);\n}\n\n.col-center {\n  flex-grow: 1;\n}\n\n.row-main {\n  color: var(--menu-item-primary-color);\n  font-weight: var(--menu-item-primary-weight);\n  max-height: 48px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n\n.row-comment {\n  margin-top: 4px;\n  font-size: 14px;\n  line-height: 20px;\n  max-height: 40px;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n  overflow: hidden;\n}\n\n.col-end,\n.row-comment {\n  color: var(--menu-item-secondary-color);\n}\n\n.icon {\n  display: block;\n  fill: currentColor;\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"dropdown-item-module__root__f1d",selected:"dropdown-item-module__selected__d20",disabled:"dropdown-item-module__disabled__c59","no-hover":"dropdown-item-module__no-hover__c01",checked:"dropdown-item-module__checked__d23","size-s":"dropdown-item-module__size-s__eae","size-m":"dropdown-item-module__size-m__c8a","size-l":"dropdown-item-module__size-l__d13","size-xl":"dropdown-item-module__size-xl__b23",col:"dropdown-item-module__col__fa2","col-start":"dropdown-item-module__col-start__c7a","col-center":"dropdown-item-module__col-center__be2","row-main":"dropdown-item-module__row-main__db8","row-comment":"dropdown-item-module__row-comment__fcf","col-end":"dropdown-item-module__col-end__a8c",icon:"dropdown-item-module__icon__ec2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/dropdown/dropdown.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".dropdown-module__root__f41{background:#fff;outline:0;padding:8px 0;max-height:var(--dropdown-max-height, 304px) !important;height:auto !important}.dropdown-module__inner__dbe{max-height:calc(var(--dropdown-max-height, 304px) - 16px)}","",{version:3,sources:["webpack://./src/dropdown/dropdown.module.scss"],names:[],mappings:"AAAA,4BACE,eAAA,CACA,SAAA,CACA,aAAA,CAGA,uDAAA,CACA,sBAAA,CAGF,6BACE,yDAAA",sourcesContent:[".root {\n  background: #fff;\n  outline: 0;\n  padding: 8px 0;\n\n  // задавать можно только максимальную высоту через --dropdown-max-height\n  max-height: var(--dropdown-max-height, 304px) !important;\n  height: auto !important;\n}\n\n.inner {\n  max-height: calc(var(--dropdown-max-height, 304px) - 16px); // вычитаем padding корневого элемента\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"dropdown-module__root__f41",inner:"dropdown-module__inner__dbe"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);