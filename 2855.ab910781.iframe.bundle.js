"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[2855],{"./src/base-input/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>BaseInput});var react=__webpack_require__("./node_modules/react/index.js"),fit_element_height=__webpack_require__("./src/helpers/fit-element-height.ts"),hooks=__webpack_require__("./src/hooks/index.ts");function omitMultiline(source){const next={...source};return delete next.multiline,next}var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),base_input_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/base-input/base-input.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(base_input_module.Z,options);const base_input_base_input_module=base_input_module.Z&&base_input_module.Z.locals?base_input_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(base_input_base_input_module);function BaseInput({inputRef,textareaRef,style,className,restPlaceholder:restPlaceholderProp,"data-testid":testId="base-input",...props}){const textareaInnerRef=(0,react.useRef)(null),inputInnerRef=(0,react.useRef)(null);let field;(0,react.useImperativeHandle)(textareaRef,(()=>textareaInnerRef.current)),(0,react.useImperativeHandle)(inputRef,(()=>inputInnerRef.current)),(0,hooks.LI)((()=>{textareaInnerRef.current&&(0,fit_element_height.F)({target:textareaInnerRef.current})})),field=props.multiline?(0,jsx_runtime.jsx)("textarea",{...omitMultiline(props),ref:textareaInnerRef,rows:props.rows??1,"data-testid":"base-input:field",className:cx("field","reset","multiline"),onInput:e=>{props.onInput?.(e),(0,fit_element_height.F)({target:e.currentTarget})}}):(0,jsx_runtime.jsx)("input",{...omitMultiline(props),ref:inputInnerRef,"data-testid":"base-input:field",className:cx("field","reset")});let restPlaceholder=null;return void 0!==props.value&&(restPlaceholder="string"==typeof restPlaceholderProp?{shiftValue:String(props.value),value:restPlaceholderProp}:{shiftValue:String(props.value),value:"",...restPlaceholderProp}),(0,jsx_runtime.jsxs)("div",{style,className:cx("reset","root",className),"data-testid":testId,children:[!props.multiline&&restPlaceholder&&restPlaceholder.value&&(0,jsx_runtime.jsxs)("span",{"aria-hidden":!0,className:cx("rest-placeholder"),children:[(0,jsx_runtime.jsx)("span",{"data-testid":"rest-placeholder-shift",className:cx("shift-part"),children:restPlaceholder.shiftValue}),(0,jsx_runtime.jsx)("span",{"data-testid":"rest-placeholder",className:cx("main-part"),children:restPlaceholder.value})]}),field]})}BaseInput.displayName="BaseInput";try{BaseInput.displayName="BaseInput",BaseInput.__docgenInfo={description:'Поле ввода текста.\nПозволяет выводить "остаточный placeholder".\nМожет выводиться в однострочном и многострочном режимах.\nВ многострочном режиме автоматически подстраивает высоту под введенный текст.',displayName:"BaseInput",props:{restPlaceholder:{defaultValue:null,description:"Остаточный placeholder (выводится после введенного значения).",name:"restPlaceholder",required:!1,type:{name:"string | RestPlaceholderDefinition | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"BaseInputStyle | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},inputRef:{defaultValue:null,description:"Ref элемента input. Будет заполнен только при multiline=false.",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement | null> | undefined"}},textareaRef:{defaultValue:null,description:"Ref элемента textarea. Будет заполнен только при multiline=true.",name:"textareaRef",required:!1,type:{name:"Ref<HTMLTextAreaElement | null> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},multiline:{defaultValue:null,description:"",name:"multiline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/base-input/base-input.tsx#BaseInput"]={docgenInfo:BaseInput.__docgenInfo,name:"BaseInput",path:"src/base-input/base-input.tsx#BaseInput"})}catch(__react_docgen_typescript_loader_error){}},"./src/helpers/fit-element-height.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function fitElementHeight({target}){target.style.height="auto";const{scrollHeight,offsetHeight,clientHeight}=target;target.style.height=target.scrollHeight+offsetHeight-clientHeight+"px"}__webpack_require__.d(__webpack_exports__,{F:()=>fitElementHeight})},"./src/input/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JP:()=>useFieldMouseDown,T0:()=>useFilledState,xj:()=>definePlaceholderColor});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_colors__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/colors/index.ts");function definePlaceholderColor({failed,disabled}){let placeholderColor;switch(!0){case failed:placeholderColor=_colors__WEBPACK_IMPORTED_MODULE_1__.D.get("additional-deep-red");break;case disabled:placeholderColor=_colors__WEBPACK_IMPORTED_MODULE_1__.D.get("basic-gray24");break;case!disabled:placeholderColor=_colors__WEBPACK_IMPORTED_MODULE_1__.D.get("basic-gray38")}return placeholderColor}function useFilledState(ref,{value,defaultValue}){const[filled,setFilled]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>function defineFilled(value,defaultValue){return[value,defaultValue].some((v=>void 0!==v&&""!=`${v}`))}(value,defaultValue))),updateFilled=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{setFilled(Boolean(event.currentTarget.value))}),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setFilled(Boolean(ref.current?.value))})),[filled,updateFilled]}function useFieldMouseDown(fieldRef,callback){return(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((event=>{const field=fieldRef.current;callback?.(event),!event.defaultPrevented&&field&&event.target!==field&&(event.preventDefault(),field.focus())}),[fieldRef,callback])}},"./src/textarea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>Textarea});var react=__webpack_require__("./node_modules/react/index.js"),base_input=__webpack_require__("./src/base-input/index.ts"),field_block=__webpack_require__("./src/field-block/index.tsx"),utils=__webpack_require__("./src/input/utils.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),textarea_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/textarea/textarea.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(textarea_module.Z,options);const textarea_textarea_module=textarea_module.Z&&textarea_module.Z.locals?textarea_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(textarea_textarea_module);function Textarea({textareaRef,baseInputProps,style,className,autoComplete,autoFocus,defaultValue,disabled,id,name,onBlur,onChange,onFocus,onInput,placeholder,readOnly,required,rows=2,value,label,failed,caption,blockProps,"data-testid":testId="textarea",...restProps}){const ref=(0,react.useRef)(null),[filled,updateFilled]=(0,utils.T0)(ref,{value,defaultValue}),[focused,setFocused]=(0,react.useState)(!1),handleMouseDown=(0,utils.JP)(ref,blockProps?.onMouseDown);return(0,react.useImperativeHandle)(textareaRef,(()=>ref.current)),(0,jsx_runtime.jsx)(field_block.m5,{...restProps,rootProps:{...restProps.rootProps,style,className},"data-testid":testId,caption,disabled,failed,fixedHeight:!1,focused,label,labelAsPlaceholder:!focused&&!filled,labelProps:{htmlFor:id},size:"l",blockProps:{...blockProps,onMouseDown:handleMouseDown},main:(0,jsx_runtime.jsx)(base_input.Q,{...baseInputProps,textareaRef:ref,multiline:!0,className:cx("textarea",baseInputProps?.className),style:{...baseInputProps?.style,"--placeholder-color":(0,utils.xj)({failed,disabled})},autoComplete,autoFocus,defaultValue,disabled,id,name,placeholder,readOnly,required,rows,value,onFocus:event=>{onFocus?.(event),updateFilled(event),setFocused(!0)},onBlur:event=>{onBlur?.(event),updateFilled(event),setFocused(!1)},onInput:event=>{onInput?.(event),updateFilled(event)},onChange:event=>{onChange?.(event),updateFilled(event)}}),mainProps:{className:cx("main")}})}Textarea.displayName="Textarea";try{Textarea.displayName="Textarea",Textarea.__docgenInfo={description:"Текстовая область.",displayName:"Textarea",props:{textareaRef:{defaultValue:null,description:"Ref элемента textarea.",name:"textareaRef",required:!1,type:{name:"Ref<HTMLTextAreaElement> | undefined"}},baseInputProps:{defaultValue:null,description:"Свойства BaseInputProps.",name:"baseInputProps",required:!1,type:{name:"BaseInputAsTextareaProps | undefined"}},style:{defaultValue:null,description:"Стили корневого элемента.",name:"style",required:!1,type:{name:"FieldBlockStyle | undefined"}},className:{defaultValue:null,description:"CSS-класс корневого элемента.",name:"className",required:!1,type:{name:"string | undefined"}},failed:{defaultValue:null,description:"Состояние с ошибкой.",name:"failed",required:!1,type:{name:"boolean | undefined"}},focused:{defaultValue:null,description:"Состояние фокуса.",name:"focused",required:!1,type:{name:"boolean | undefined"}},caption:{defaultValue:null,description:"Подпись под полем.",name:"caption",required:!1,type:{name:"string | undefined"}},label:{defaultValue:null,description:"Ярлык в поле.",name:"label",required:!1,type:{name:"string | undefined"}},labelAsPlaceholder:{defaultValue:null,description:"Выводить ярлык вместо placeholder или введенного значения.",name:"labelAsPlaceholder",required:!1,type:{name:"boolean | undefined"}},labelProps:{defaultValue:null,description:"Опции элемента ярлыка.",name:"labelProps",required:!1,type:{name:"NoChildren<LabelHTMLAttributes<HTMLLabelElement>> | undefined"}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'}]}},fixedHeight:{defaultValue:null,description:"Фиксировать высоту.",name:"fixedHeight",required:!1,type:{name:"boolean | undefined"}},rootProps:{defaultValue:null,description:"Опции корневого элемента.",name:"rootProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},rootRef:{defaultValue:null,description:"Ref корневого элемента.",name:"rootRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},blockProps:{defaultValue:null,description:"Опции элемента блока поля.",name:"blockProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},blockRef:{defaultValue:null,description:"Ref элемента блока поля.",name:"blockRef",required:!1,type:{name:"Ref<HTMLDivElement> | undefined"}},adornmentStart:{defaultValue:null,description:"Украшение перед основным содержимым.",name:"adornmentStart",required:!1,type:{name:"ReactNode"}},adornmentEnd:{defaultValue:null,description:"Украшение после основного содержимого.",name:"adornmentEnd",required:!1,type:{name:"ReactNode"}},main:{defaultValue:null,description:"Основное содержимое.",name:"main",required:!1,type:{name:"ReactNode"}},mainProps:{defaultValue:null,description:"Опции основного содержимого.",name:"mainProps",required:!1,type:{name:"NoChildren<WithStyle<HTMLAttributes<HTMLDivElement>>> | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/textarea/index.tsx#Textarea"]={docgenInfo:Textarea.__docgenInfo,name:"Textarea",path:"src/textarea/index.tsx#Textarea"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/base-input/base-input.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".base-input-module__reset__d13{border:0;box-sizing:border-box;font:inherit;margin:0;outline:0;padding:0}.base-input-module__root__efc{position:relative;background-color:rgba(0,0,0,0);width:0;flex-grow:1;display:flex;overflow:hidden}.base-input-module__field__bff{width:0;flex-grow:1;display:block;color:inherit;font-size:inherit;line-height:inherit;z-index:1;text-overflow:inherit;background:inherit}.base-input-module__field__bff::placeholder{opacity:1;color:var(--placeholder-color)}.base-input-module__field__bff::-ms-clear{display:none;height:0;width:0}.base-input-module__field__bff.base-input-module__multiline__b70{resize:none;scrollbar-width:none;overflow:-moz-scrollbars-none;-ms-overflow-style:none}.base-input-module__field__bff.base-input-module__multiline__b70::-webkit-scrollbar{display:none}.base-input-module__rest-placeholder__a3a{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0;padding:inherit;font-family:inherit;font-size:inherit;line-height:inherit;overflow:hidden;z-index:0}.base-input-module__rest-placeholder__a3a .base-input-module__shift-part__f9e{color:rgba(0,0,0,0)}.base-input-module__rest-placeholder__a3a .base-input-module__main-part__eb2{color:var(--placeholder-color)}","",{version:3,sources:["webpack://./src/base-input/base-input.module.scss","webpack://./src/utils.scss"],names:[],mappings:"AAEA,+BACE,QAAA,CACA,qBAAA,CACA,YAAA,CACA,QAAA,CACA,SAAA,CACA,SAAA,CAGF,8BACE,iBAAA,CACA,8BAAA,CACA,OAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CAGF,+BACE,OAAA,CACA,WAAA,CACA,aAAA,CACA,aAAA,CACA,iBAAA,CACA,mBAAA,CACA,SAAA,CACA,qBAAA,CACA,kBAAA,CACA,4CACE,SAAA,CACA,8BAAA,CAEF,0CAEE,YAAA,CACA,QAAA,CACA,OAAA,CAEF,iEACE,WAAA,CCnCF,oBAAA,CACA,6BAAA,CACA,uBAAA,CACA,oFACE,YAAA,CDoCJ,0CACE,mBAAA,CACA,iBAAA,CACA,KAAA,CACA,OAAA,CACA,QAAA,CACA,MAAA,CACA,eAAA,CACA,mBAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,SAAA,CACA,8EACE,mBAAA,CAEF,6EACE,8BAAA",sourcesContent:["@use '../utils';\n\n.reset {\n  border: 0;\n  box-sizing: border-box;\n  font: inherit;\n  margin: 0;\n  outline: 0;\n  padding: 0;\n}\n\n.root {\n  position: relative;\n  background-color: transparent;\n  width: 0;\n  flex-grow: 1;\n  display: flex;\n  overflow: hidden;\n}\n\n.field {\n  width: 0;\n  flex-grow: 1;\n  display: block;\n  color: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  z-index: 1;\n  text-overflow: inherit;\n  background: inherit;\n  &::placeholder {\n    opacity: 1;\n    color: var(--placeholder-color);\n  }\n  &::-ms-clear {\n    // отключаем системный крестик в IE\n    display: none;\n    height: 0;\n    width: 0;\n  }\n  &.multiline {\n    resize: none;\n    @include utils.hidden-scrollbars;\n  }\n}\n\n.rest-placeholder {\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n  overflow: hidden;\n  z-index: 0;\n  .shift-part {\n    color: transparent;\n  }\n  .main-part {\n    color: var(--placeholder-color);\n  }\n}\n","@use './colors';\n\n/**\n * Скрывает полосы прокрутки у элемента.\n */\n@mixin hidden-scrollbars {\n  scrollbar-width: none; // Firefox\n  overflow: -moz-scrollbars-none; // old Firefox\n  -ms-overflow-style: none; // IE, old Edge\n  &::-webkit-scrollbar {\n    display: none; // Chrome, Safari, Opera\n  }\n}\n\n/**\n * стилизует полосы прокрутки по дизайн-гайдам с ограничениями:\n * - в браузерах на основе webkit/blink (Chrome, Opera, Safari) полоса прокрутки не накладывается поверх контента\n * - в браузерах которые поддерживают только стандартизированный способ стилизации (Firefox) определяет только цвет ползунка\n */\n@mixin semi-stylized-scrollbars($bg-color: #fff) {\n  // firefox\n  scrollbar-width: thin;\n  scrollbar-color: colors.$basic-gray12 transparent;\n\n  // webkit\n  &::-webkit-scrollbar {\n    width: 12px;\n  }\n  &::-webkit-scrollbar-track {\n    background: $bg-color;\n    border-radius: 4px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border: 4px solid $bg-color;\n    border-radius: 12px;\n    background: colors.$basic-gray12;\n  }\n}\n\n/**\n * Полный сброс стилей button до состояния сравнимого с div.\n * взято отсюда: https://gist.github.com/MoOx/9137295\n */\n@mixin reset-button {\n  outline: none;\n  border: none;\n  margin: 0;\n  padding: 0;\n  width: auto;\n  overflow: visible;\n\n  background: transparent;\n\n  /* inherit font & color from ancestor */\n  color: inherit;\n  font: inherit;\n\n  /* Normalize `line-height`. Cannot be changed from `normal` in Firefox 4+. */\n  line-height: normal;\n\n  /* Corrects font smoothing for webkit */\n  -webkit-font-smoothing: inherit;\n  -moz-osx-font-smoothing: inherit;\n\n  /* Corrects inability to style clickable `input` types in iOS */\n  -webkit-appearance: none;\n\n  /* Remove excess padding and border in Firefox 4+ */\n  &::-moz-focus-inner {\n    border: 0;\n    padding: 0;\n  }\n}\n\n/**\n * Добавляет стандартную визуальную подсветку состояния focus-visible.\n */\n@mixin focus-visible-style() {\n  outline: 2px solid colors.$basic-blue;\n}\n\n/**\n * Формирует стандартную визуальную подсветку для состояния focus-visible.\n */\n@mixin focus-visible() {\n  &:focus-visible {\n    @include focus-visible-style;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={reset:"base-input-module__reset__d13",root:"base-input-module__root__efc",field:"base-input-module__field__bff",multiline:"base-input-module__multiline__b70","rest-placeholder":"base-input-module__rest-placeholder__a3a","shift-part":"base-input-module__shift-part__f9e","main-part":"base-input-module__main-part__eb2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/textarea/textarea.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".textarea-module__main__bc6{display:flex;width:100%}.textarea-module__textarea__fc2{min-width:0;width:0;flex-grow:1;background:inherit;font:inherit;line-height:inherit}","",{version:3,sources:["webpack://./src/textarea/textarea.module.scss"],names:[],mappings:"AAEA,4BACE,YAAA,CACA,UAAA,CAGF,gCACE,WAAA,CACA,OAAA,CACA,WAAA,CACA,kBAAA,CACA,YAAA,CACA,mBAAA",sourcesContent:["@use '../colors';\n\n.main {\n  display: flex;\n  width: 100%;\n}\n\n.textarea {\n  min-width: 0;\n  width: 0;\n  flex-grow: 1;\n  background: inherit;\n  font: inherit;\n  line-height: inherit;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={main:"textarea-module__main__bc6",textarea:"textarea-module__textarea__fc2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);