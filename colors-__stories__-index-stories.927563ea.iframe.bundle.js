"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[367],{"./src/colors/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Usage:()=>Usage,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var colors=__webpack_require__("./src/colors/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),dist_clipboard=__webpack_require__("./node_modules/clipboard/dist/clipboard.js"),clipboard_default=__webpack_require__.n(dist_clipboard),src_button=__webpack_require__("./src/button/index.tsx"),layout=__webpack_require__("./src/layout/index.ts"),input=__webpack_require__("./src/input/index.tsx"),text_button=__webpack_require__("./src/text-button/index.tsx"),Copy=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/16x16/Stroked/Copy.js"),Stroked_Copy=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Copy.js"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),colors_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/colors/__stories__/colors.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(colors_module.Z,options);const _stories_colors_module=colors_module.Z&&colors_module.Z.locals?colors_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const index_stories={title:"tokens/Colors",component:colors.D,parameters:{storySource:{source:"import { COLORS } from '@sima-land/ui-nucleons/colors';\nimport { useEffect, useRef, useState } from 'react';\nimport ClipboardJS from 'clipboard';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { Layout } from '@sima-land/ui-nucleons/layout';\nimport { Input } from '@sima-land/ui-nucleons/input';\nimport { TextButton } from '@sima-land/ui-nucleons/text-button';\nimport CopySVG from '@sima-land/ui-quarks/icons/16x16/Stroked/Copy';\nimport CopyBigSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Copy';\nimport styles from './colors.module.scss';\nexport default {\n  title: 'tokens/Colors',\n  component: COLORS,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Usage() {\n  return <Layout>\n      <h2>Токены цветов</h2>\n\n      <p>Библиотека предоставляет утилиты для использования цветов дизайн-системы.</p>\n\n      <div className={styles.section}>\n        <div className={styles.imports}>\n          <ImportField label='Импорт SCSS' value=\"@use '@sima-land/ui-nucleons/colors';\" />\n          <ImportField label='Импорт JS' value=\"import { COLORS } from '@sima-land/ui-nucleons/colors';\" />\n        </div>\n      </div>\n\n      <div className={styles.section}>\n        <div className={styles.colors}>\n          {[...COLORS.entries()].map(([name, value], index) => <ColorView key={index} {...{\n          name,\n          value\n        }} />)}\n        </div>\n      </div>\n    </Layout>;\n}\nfunction ImportField({\n  value,\n  label\n}: {\n  value: string;\n  label: string;\n}) {\n  const inputRef = useRef<HTMLInputElement>(null);\n  const buttonRef = useRef<HTMLButtonElement>(null);\n  const [copied, setCopied] = useState(false);\n  useEffect(() => {\n    if (buttonRef.current) {\n      const clipboard = new ClipboardJS(buttonRef.current, {\n        text: () => value\n      });\n      clipboard.on('success', () => {\n        setCopied(true);\n        setTimeout(() => setCopied(false), 2000);\n      });\n      return () => clipboard.destroy();\n    }\n  }, []);\n  return <Input label={label} value={copied ? 'Скопировано' : value} disabled={copied} inputRef={inputRef} readOnly adornmentEnd={<TextButton disabled={copied} color='basic-gray87' buttonRef={buttonRef} onMouseDown={e => e.preventDefault()}>\n          <CopyBigSVG fill='currentColor' />\n        </TextButton>} />;\n}\nfunction ColorView({\n  name,\n  value\n}: {\n  name: string;\n  value: string;\n}) {\n  return <div className={styles.color}>\n      <span className={styles.circle} style={{\n      background: value\n    }} />\n      <span className={styles.title}>{name}</span>\n      <span>{value}</span>\n\n      <CopyButton title='SCSS' value={`colors.$${name}`} />\n      <CopyButton title='JS' value={`COLORS.get('${name}')`} />\n    </div>;\n}\nfunction CopyButton({\n  title,\n  value\n}: {\n  title: string;\n  value: string;\n}) {\n  const buttonRef = useRef<HTMLButtonElement>(null);\n  const [copied, setCopied] = useState(false);\n  useEffect(() => {\n    if (buttonRef.current) {\n      const clipboard = new ClipboardJS(buttonRef.current, {\n        text: () => value\n      });\n      clipboard.on('success', () => {\n        setCopied(true);\n        setTimeout(() => setCopied(false), 2000);\n      });\n      return () => clipboard.destroy();\n    }\n  }, []);\n  return <div>\n      <Button ref={buttonRef} size='xs' viewType='secondary' icon={!copied ? CopySVG : undefined} disabled={copied}>\n        {copied ? 'Скопировано' : title}\n      </Button>\n    </div>;\n}\nUsage.storyName = 'Использование';\nUsage.parameters = {\n  ...Usage.parameters,\n  docs: {\n    ...Usage.parameters?.docs,\n    source: {\n      originalSource: \"function Usage() {\\n  return <Layout>\\n      <h2>\\u0422\\u043E\\u043A\\u0435\\u043D\\u044B \\u0446\\u0432\\u0435\\u0442\\u043E\\u0432</h2>\\n\\n      <p>\\u0411\\u0438\\u0431\\u043B\\u0438\\u043E\\u0442\\u0435\\u043A\\u0430 \\u043F\\u0440\\u0435\\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u043B\\u044F\\u0435\\u0442 \\u0443\\u0442\\u0438\\u043B\\u0438\\u0442\\u044B \\u0434\\u043B\\u044F \\u0438\\u0441\\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0432\\u0430\\u043D\\u0438\\u044F \\u0446\\u0432\\u0435\\u0442\\u043E\\u0432 \\u0434\\u0438\\u0437\\u0430\\u0439\\u043D-\\u0441\\u0438\\u0441\\u0442\\u0435\\u043C\\u044B.</p>\\n\\n      <div className={styles.section}>\\n        <div className={styles.imports}>\\n          <ImportField label='\\u0418\\u043C\\u043F\\u043E\\u0440\\u0442 SCSS' value=\\\"@use '@sima-land/ui-nucleons/colors';\\\" />\\n          <ImportField label='\\u0418\\u043C\\u043F\\u043E\\u0440\\u0442 JS' value=\\\"import { COLORS } from '@sima-land/ui-nucleons/colors';\\\" />\\n        </div>\\n      </div>\\n\\n      <div className={styles.section}>\\n        <div className={styles.colors}>\\n          {[...COLORS.entries()].map(([name, value], index) => <ColorView key={index} {...{\\n          name,\\n          value\\n        }} />)}\\n        </div>\\n      </div>\\n    </Layout>;\\n}\",\n      ...Usage.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{usage:{startLoc:{col:7,line:18},endLoc:{col:1,line:40},startBody:{col:7,line:18},endBody:{col:1,line:40}}}},layout:"padded"}},Usage=function Usage(){return(0,jsx_runtime.jsxs)(layout.Ar,{children:[(0,jsx_runtime.jsx)("h2",{children:"Токены цветов"}),(0,jsx_runtime.jsx)("p",{children:"Библиотека предоставляет утилиты для использования цветов дизайн-системы."}),(0,jsx_runtime.jsx)("div",{className:_stories_colors_module.section,children:(0,jsx_runtime.jsxs)("div",{className:_stories_colors_module.imports,children:[(0,jsx_runtime.jsx)(ImportField,{label:"Импорт SCSS",value:"@use '@sima-land/ui-nucleons/colors';"}),(0,jsx_runtime.jsx)(ImportField,{label:"Импорт JS",value:"import { COLORS } from '@sima-land/ui-nucleons/colors';"})]})}),(0,jsx_runtime.jsx)("div",{className:_stories_colors_module.section,children:(0,jsx_runtime.jsx)("div",{className:_stories_colors_module.colors,children:[...colors.D.entries()].map((([name,value],index)=>(0,jsx_runtime.jsx)(ColorView,{name,value},index)))})})]})};function ImportField({value,label}){const inputRef=(0,react.useRef)(null),buttonRef=(0,react.useRef)(null),[copied,setCopied]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(buttonRef.current){const clipboard=new(clipboard_default())(buttonRef.current,{text:()=>value});return clipboard.on("success",(()=>{setCopied(!0),setTimeout((()=>setCopied(!1)),2e3)})),()=>clipboard.destroy()}}),[]),(0,jsx_runtime.jsx)(input.I,{label,value:copied?"Скопировано":value,disabled:copied,inputRef,readOnly:!0,adornmentEnd:(0,jsx_runtime.jsx)(text_button.A,{disabled:copied,color:"basic-gray87",buttonRef,onMouseDown:e=>e.preventDefault(),children:(0,jsx_runtime.jsx)(Stroked_Copy.Z,{fill:"currentColor"})})})}function ColorView({name,value}){return(0,jsx_runtime.jsxs)("div",{className:_stories_colors_module.color,children:[(0,jsx_runtime.jsx)("span",{className:_stories_colors_module.circle,style:{background:value}}),(0,jsx_runtime.jsx)("span",{className:_stories_colors_module.title,children:name}),(0,jsx_runtime.jsx)("span",{children:value}),(0,jsx_runtime.jsx)(CopyButton,{title:"SCSS",value:`colors.$${name}`}),(0,jsx_runtime.jsx)(CopyButton,{title:"JS",value:`COLORS.get('${name}')`})]})}function CopyButton({title,value}){const buttonRef=(0,react.useRef)(null),[copied,setCopied]=(0,react.useState)(!1);return(0,react.useEffect)((()=>{if(buttonRef.current){const clipboard=new(clipboard_default())(buttonRef.current,{text:()=>value});return clipboard.on("success",(()=>{setCopied(!0),setTimeout((()=>setCopied(!1)),2e3)})),()=>clipboard.destroy()}}),[]),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(src_button.z,{ref:buttonRef,size:"xs",viewType:"secondary",icon:copied?void 0:Copy.Z,disabled:copied,children:copied?"Скопировано":title})})}Usage.displayName="Usage",ImportField.displayName="ImportField",ColorView.displayName="ColorView",CopyButton.displayName="CopyButton",Usage.storyName="Использование",Usage.parameters={...Usage.parameters,docs:{...Usage.parameters?.docs,source:{originalSource:"function Usage() {\n  return <Layout>\n      <h2>Токены цветов</h2>\n\n      <p>Библиотека предоставляет утилиты для использования цветов дизайн-системы.</p>\n\n      <div className={styles.section}>\n        <div className={styles.imports}>\n          <ImportField label='Импорт SCSS' value=\"@use '@sima-land/ui-nucleons/colors';\" />\n          <ImportField label='Импорт JS' value=\"import { COLORS } from '@sima-land/ui-nucleons/colors';\" />\n        </div>\n      </div>\n\n      <div className={styles.section}>\n        <div className={styles.colors}>\n          {[...COLORS.entries()].map(([name, value], index) => <ColorView key={index} {...{\n          name,\n          value\n        }} />)}\n        </div>\n      </div>\n    </Layout>;\n}",...Usage.parameters?.docs?.source}}};const __namedExportsOrder=["Usage"]},"./src/button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button});var react=__webpack_require__("./node_modules/react/index.js"),spinner=__webpack_require__("./src/spinner/index.tsx"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),button_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(button_module.Z,options);const button_button_module=button_module.Z&&button_module.Z.locals?button_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(button_button_module),Button=(0,react.forwardRef)((function Button({viewType="primary",icon:Icon,iconPosition="start",size="m",loading,disabled,className,children,"data-testid":testId="button",...restProps},ref){const hasIcon=Boolean(Icon),hasText=Boolean(children),rootClassName=cx("root",`size-${size}`,"unset"!==viewType&&`view-${viewType}`,loading&&"loading",disabled&&"disabled",hasIcon&&!hasText&&"icon-only",hasText&&hasIcon&&"start"===iconPosition&&"icon-start",hasText&&hasIcon&&"end"===iconPosition&&"icon-end",className),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[Icon&&"start"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),children,Icon&&"end"===iconPosition&&(0,jsx_runtime.jsx)(Icon,{className:cx("icon")}),loading&&(0,jsx_runtime.jsx)(spinner.WV,{size:"s",color:disabled||"secondary"===viewType?"basic-gray38":"basic-white",className:cx("spinner")})]});let result=null;return result="container"===restProps.appearance?(0,jsx_runtime.jsx)("div",{...restProps,ref,className:rootClassName,role:"button","data-testid":testId,children:content}):"link"===restProps.appearance?(0,jsx_runtime.jsx)("a",{...restProps,ref,className:rootClassName,"data-testid":testId,children:content}):(0,jsx_runtime.jsx)("button",{...restProps,ref,className:rootClassName,disabled,"data-testid":testId,children:content}),result}));try{Button.displayName="Button",Button.__docgenInfo={description:"Компонент кнопки, стилизованной по дизайн-гайдам.",displayName:"Button",props:{viewType:{defaultValue:{value:"primary"},description:"Определяет внешний вид кнопки.",name:"viewType",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"unset"'}]}},appearance:{defaultValue:null,description:"Определяет тип корневого элемента.",name:"appearance",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"button"'},{value:'"link"'},{value:'"container"'}]}},icon:{defaultValue:null,description:"Иконка.",name:"icon",required:!1,type:{name:"ComponentType<SVGAttributes<SVGSVGElement>> | undefined"}},iconPosition:{defaultValue:{value:"start"},description:"Позиция иконки относительно текста.",name:"iconPosition",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"start"'},{value:'"end"'}]}},size:{defaultValue:{value:"m"},description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"xs"'},{value:'"s"'},{value:'"m"'}]}},loading:{defaultValue:null,description:"Нужно ли отображать состояние загрузки.",name:"loading",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключенное состояние.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"ButtonStyle | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/button/index.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./src/helpers/on.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function on(target,eventNames,callback,options){const eventNamesList=eventNames.split(" "),wrapped=e=>callback(e);return eventNamesList.forEach((eventName=>{target.addEventListener(eventName,wrapped,options)})),()=>{eventNamesList.forEach((eventName=>{target.removeEventListener(eventName,wrapped,options)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,on:()=>on});const __WEBPACK_DEFAULT_EXPORT__=on},"./src/hooks/identity.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>useIdentityRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const useIdentityRef=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);return ref.current=value,ref}},"./src/hooks/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{LI:()=>useIsomorphicLayoutEffect,MQ:()=>useInfiniteScroll,O3:()=>useOutsideClick});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_helpers_on__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/helpers/on.ts"),_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/identity.ts");function useInfiniteScroll(ref,{onFullScroll,threshold=0},moreDeps){const callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(onFullScroll);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const element=ref.current;if(element)return(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(element,"scroll",(event=>{const{scrollTop,clientHeight,scrollHeight}=event.target;threshold+scrollTop+clientHeight>=scrollHeight&&callbackRef.current?.(event)}))}),[ref,threshold,...moreDeps||[]])}function useOutsideClick(elementRef,callback){const innerRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(elementRef),callbackRef=(0,_identity__WEBPACK_IMPORTED_MODULE_1__.y)(callback);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(0,_helpers_on__WEBPACK_IMPORTED_MODULE_2__.on)(document.documentElement,"click",(event=>{const arg=innerRef.current,refs=Array.isArray(arg)?arg:[arg];let isOutsideClick=!0;for(const{current:element}of refs)if(element&&event.target instanceof Node&&(element===event.target||element.contains(event.target))){isOutsideClick=!1;break}isOutsideClick&&callbackRef.current?.(event)}),{capture:!0})),[])}const useIsomorphicLayoutEffect="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/button/button.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".button-module__root__ae8{position:relative;white-space:nowrap;display:inline-flex;align-items:center;justify-content:center;flex-wrap:nowrap;border-radius:4px;font-family:inherit;font-weight:600;box-sizing:border-box;padding:0;padding-left:var(--button-left-gutter, var(--button-gutter));padding-right:var(--button-right-gutter, var(--button-gutter));border:0;outline:0;text-decoration:none;overflow:hidden;font-size:var(--button-font-size);background:var(--button-background);color:var(--button-color);min-width:var(--button-min-size);height:var(--button-min-size);--button-icon-gutter: 12px}.button-module__root__ae8::-moz-focus-inner{border:0}.button-module__root__ae8:disabled,.button-module__root__ae8.button-module__disabled__cc7{pointer-events:none;color:var(--button-disabled-color, var(--button-color));background:var(--button-disabled-background, var(--button-background))}.button-module__root__ae8.button-module__loading__b23{color:rgba(0,0,0,0)}.button-module__root__ae8.button-module__loading__b23>:not(.button-module__spinner__c81){opacity:0;pointer-events:0}.button-module__root__ae8:not(:disabled):hover{cursor:pointer;color:var(--button-hover-color, var(--button-color));background:var(--button-hover-background, var(--button-background))}.button-module__size-xs__ed5{--button-min-size: 32px;--button-font-size: 14px;--button-line-height: 20px;--button-gutter: 12px}.button-module__size-s__fb7{--button-min-size: 40px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 20px}.button-module__size-m__e9f{--button-min-size: 48px;--button-font-size: 16px;--button-line-height: 24px;--button-gutter: 24px}.button-module__icon-only__a54{--button-left-gutter: 0;--button-right-gutter: 0;--button-icon-gutter: 0}.button-module__icon-start__dfb{--button-left-gutter: 0}.button-module__icon-end__eb5{--button-right-gutter: 0}.button-module__view-primary__c2f{--button-color: #fff;--button-background: #1f84db;--button-hover-background: #1b75c2;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-secondary__bb7{--button-color: #212121;--button-background: #ebebeb;--button-hover-background: #e0e0e0;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__view-success__d3b{--button-color: #fff;--button-background: #09ab8b;--button-hover-background: #089176;--button-disabled-color: #c2c2c2;--button-disabled-background: #ebebeb}.button-module__icon__aba{margin:0 var(--button-icon-gutter);flex-shrink:0;fill:currentColor}.button-module__spinner__c81{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}","",{version:3,sources:["webpack://./src/button/button.module.scss","webpack://./src/button/button-util.scss"],names:[],mappings:"AAGA,0BACE,iBAAA,CACA,kBAAA,CACA,mBAAA,CACA,kBAAA,CACA,sBAAA,CACA,gBAAA,CACA,iBAAA,CACA,mBAAA,CACA,eAAA,CACA,qBAAA,CACA,SAAA,CACA,4DAAA,CACA,8DAAA,CACA,QAAA,CACA,SAAA,CACA,oBAAA,CACA,eAAA,CACA,iCAAA,CACA,mCAAA,CACA,yBAAA,CACA,gCAAA,CACA,6BAAA,CACA,0BAAA,CACA,4CACE,QAAA,CAGF,0FAEE,mBAAA,CACA,uDAAA,CACA,sEAAA,CAEF,sDACE,mBAAA,CACA,yFACE,SAAA,CACA,gBAAA,CAGJ,+CACE,cAAA,CACA,oDAAA,CACA,mEAAA,CAKJ,6BCjDE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CDkDF,4BC9CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD+CF,4BC3CE,uBAAA,CACA,wBAAA,CACA,0BAAA,CACA,qBAAA,CD6CF,+BACE,uBAAA,CACA,wBAAA,CACA,uBAAA,CAGF,gCACE,uBAAA,CAGF,8BACE,wBAAA,CAIF,kCCxDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDwDF,oCCpDE,uBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDoDF,kCChDE,oBAAA,CACA,4BAAA,CACA,kCAAA,CACA,gCAAA,CACA,qCAAA,CDiDF,0BACE,kCAAA,CACA,aAAA,CACA,iBAAA,CAIF,6BACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,+BAAA",sourcesContent:["@use '../colors';\n@use './button-util';\n\n.root {\n  position: relative;\n  white-space: nowrap;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  border-radius: 4px;\n  font-family: inherit;\n  font-weight: 600;\n  box-sizing: border-box;\n  padding: 0;\n  padding-left: var(--button-left-gutter, var(--button-gutter));\n  padding-right: var(--button-right-gutter, var(--button-gutter));\n  border: 0;\n  outline: 0;\n  text-decoration: none;\n  overflow: hidden;\n  font-size: var(--button-font-size);\n  background: var(--button-background);\n  color: var(--button-color);\n  min-width: var(--button-min-size);\n  height: var(--button-min-size);\n  --button-icon-gutter: 12px;\n  &::-moz-focus-inner {\n    border: 0;\n  }\n  // @todo disabled для ссылок?\n  &:disabled,\n  &.disabled {\n    pointer-events: none;\n    color: var(--button-disabled-color, var(--button-color));\n    background: var(--button-disabled-background, var(--button-background));\n  }\n  &.loading {\n    color: transparent;\n    > :not(.spinner) {\n      opacity: 0;\n      pointer-events: 0;\n    }\n  }\n  &:not(:disabled):hover {\n    cursor: pointer;\n    color: var(--button-hover-color, var(--button-color));\n    background: var(--button-hover-background, var(--button-background));\n  }\n}\n\n// sizes\n.size-xs {\n  @include button-util.size-xs;\n}\n\n.size-s {\n  @include button-util.size-s;\n}\n\n.size-m {\n  @include button-util.size-m;\n}\n\n// content\n.icon-only {\n  --button-left-gutter: 0;\n  --button-right-gutter: 0;\n  --button-icon-gutter: 0;\n}\n\n.icon-start {\n  --button-left-gutter: 0;\n}\n\n.icon-end {\n  --button-right-gutter: 0;\n}\n\n// view variants\n.view-primary {\n  @include button-util.color-primary;\n}\n\n.view-secondary {\n  @include button-util.color-secondary;\n}\n\n.view-success {\n  @include button-util.color-success;\n}\n\n// icons\n.icon {\n  margin: 0 var(--button-icon-gutter);\n  flex-shrink: 0;\n  fill: currentColor;\n}\n\n// spinner\n.spinner {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n","@use '../colors';\n\n@mixin size-xs {\n  --button-min-size: 32px;\n  --button-font-size: 14px;\n  --button-line-height: 20px;\n  --button-gutter: 12px;\n}\n\n@mixin size-s {\n  --button-min-size: 40px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 20px;\n}\n\n@mixin size-m {\n  --button-min-size: 48px;\n  --button-font-size: 16px;\n  --button-line-height: 24px;\n  --button-gutter: 24px;\n}\n\n@mixin color-primary {\n  --button-color: #fff;\n  --button-background: #{colors.$basic-blue};\n  --button-hover-background: #{colors.$additional-unlit-blue};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-secondary {\n  --button-color: #{colors.$basic-gray87};\n  --button-background: #{colors.$basic-gray8};\n  --button-hover-background: #{colors.$basic-gray12};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n\n@mixin color-success {\n  --button-color: #fff;\n  --button-background: #{colors.$additional-teal};\n  --button-hover-background: #{colors.$additional-dark-teal};\n  --button-disabled-color: #{colors.$basic-gray24};\n  --button-disabled-background: #{colors.$basic-gray8};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"button-module__root__ae8",disabled:"button-module__disabled__cc7",loading:"button-module__loading__b23",spinner:"button-module__spinner__c81","size-xs":"button-module__size-xs__ed5","size-s":"button-module__size-s__fb7","size-m":"button-module__size-m__e9f","icon-only":"button-module__icon-only__a54","icon-start":"button-module__icon-start__dfb","icon-end":"button-module__icon-end__eb5","view-primary":"button-module__view-primary__c2f","view-secondary":"button-module__view-secondary__bb7","view-success":"button-module__view-success__d3b",icon:"button-module__icon__aba"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/colors/__stories__/colors.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".colors-module__section__c66+.colors-module__section__c66{margin-top:32px}.colors-module__imports__a09{display:flex;flex-direction:column;gap:16px}.colors-module__imports__a09>*{width:100%}.colors-module__colors__d74{display:flex;gap:4px;flex-direction:column}.colors-module__color__d04{padding:8px;display:flex;align-items:center;gap:16px;border-radius:4px}.colors-module__color__d04:hover{background:#f5f5f5}.colors-module__color__d04 .colors-module__circle__a50{flex-shrink:0;width:32px;height:32px;border-radius:50%}.colors-module__color__d04 .colors-module__title__a8c{margin-right:auto}","",{version:3,sources:["webpack://./src/colors/__stories__/colors.module.scss","webpack://./src/colors.scss"],names:[],mappings:"AAEA,0DACE,eAAA,CAGF,6BACE,YAAA,CACA,qBAAA,CACA,QAAA,CACA,+BACE,UAAA,CAIJ,4BACE,YAAA,CACA,OAAA,CACA,qBAAA,CAGF,2BACE,WAAA,CACA,YAAA,CACA,kBAAA,CACA,QAAA,CACA,iBAAA,CACA,iCACE,kBChBU,CDkBZ,uDACE,aAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CAEF,sDACE,iBAAA",sourcesContent:["@use '../../colors';\n\n.section + .section {\n  margin-top: 32px;\n}\n\n.imports {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  > * {\n    width: 100%;\n  }\n}\n\n.colors {\n  display: flex;\n  gap: 4px;\n  flex-direction: column;\n}\n\n.color {\n  padding: 8px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  border-radius: 4px;\n  &:hover {\n    background: colors.$basic-gray4;\n  }\n  .circle {\n    flex-shrink: 0;\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n  }\n  .title {\n    margin-right: auto;\n  }\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={section:"colors-module__section__c66",imports:"colors-module__imports__a09",colors:"colors-module__colors__d74",color:"colors-module__color__d04",circle:"colors-module__circle__a50",title:"colors-module__title__a8c"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);