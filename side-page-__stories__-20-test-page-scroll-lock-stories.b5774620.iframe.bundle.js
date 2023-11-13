"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[5642],{"./src/side-page/__stories__/20-test-page-scroll-lock.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestPageScrollLock:()=>TestPageScrollLock,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/side-page/index.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/button/index.tsx"),_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/clean-buttons/index.tsx"),_storybook_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./.storybook/utils.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/SidePage",component:_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f,parameters:{storySource:{source:"import { SidePage } from '@sima-land/ui-nucleons/side-page';\nimport { useState, CSSProperties } from 'react';\nimport { Button } from '@sima-land/ui-nucleons/button';\nimport { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';\nimport { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';\nexport default {\n  title: 'common/SidePage',\n  component: SidePage,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function TestPageScrollLock() {\n  const styles: Record<'root', CSSProperties> = {\n    root: {\n      padding: '24px'\n    }\n  };\n  const [shown, toggle] = useState<boolean>(false);\n  const [contentSize, setContentSize] = useState<number>(5);\n  const increaseContent = () => {\n    setContentSize(n => n + 1);\n  };\n  const decreaseContent = () => {\n    setContentSize(n => Math.max(1, n - 1));\n  };\n  const show = () => {\n    toggle(true);\n  };\n  const hide = () => {\n    toggle(false);\n  };\n  return <PageScrollLockDemo>\n      <Button size='s' onClick={show}>\n        Показать SidePage\n      </Button>\n\n      <SidePage size='s' shown={shown} onClose={hide} withTransitions withScrollDisable>\n        <SidePage.Header divided title='Тест: Блокировка прокрутки страницы' onClose={hide} />\n\n        <SidePage.Body>\n          <div style={styles.root}>\n            <LoremIpsum paragraphCount={contentSize} />\n          </div>\n        </SidePage.Body>\n\n        <SidePage.Footer divided>\n          <CleanGroup>\n            <CleanButton onClick={decreaseContent}>Убрать</CleanButton>\n            <CleanButton onClick={increaseContent}>Добавить</CleanButton>\n          </CleanGroup>\n        </SidePage.Footer>\n      </SidePage>\n    </PageScrollLockDemo>;\n}\nTestPageScrollLock.storyName = 'Тест: Блокировка прокрутки страницы';\nTestPageScrollLock.parameters = {\n  ...TestPageScrollLock.parameters,\n  docs: {\n    ...TestPageScrollLock.parameters?.docs,\n    source: {\n      originalSource: \"function TestPageScrollLock() {\\n  const styles: Record<'root', CSSProperties> = {\\n    root: {\\n      padding: '24px'\\n    }\\n  };\\n  const [shown, toggle] = useState<boolean>(false);\\n  const [contentSize, setContentSize] = useState<number>(5);\\n  const increaseContent = () => {\\n    setContentSize(n => n + 1);\\n  };\\n  const decreaseContent = () => {\\n    setContentSize(n => Math.max(1, n - 1));\\n  };\\n  const show = () => {\\n    toggle(true);\\n  };\\n  const hide = () => {\\n    toggle(false);\\n  };\\n  return <PageScrollLockDemo>\\n      <Button size='s' onClick={show}>\\n        \\u041F\\u043E\\u043A\\u0430\\u0437\\u0430\\u0442\\u044C SidePage\\n      </Button>\\n\\n      <SidePage size='s' shown={shown} onClose={hide} withTransitions withScrollDisable>\\n        <SidePage.Header divided title='\\u0422\\u0435\\u0441\\u0442: \\u0411\\u043B\\u043E\\u043A\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430 \\u043F\\u0440\\u043E\\u043A\\u0440\\u0443\\u0442\\u043A\\u0438 \\u0441\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u044B' onClose={hide} />\\n\\n        <SidePage.Body>\\n          <div style={styles.root}>\\n            <LoremIpsum paragraphCount={contentSize} />\\n          </div>\\n        </SidePage.Body>\\n\\n        <SidePage.Footer divided>\\n          <CleanGroup>\\n            <CleanButton onClick={decreaseContent}>\\u0423\\u0431\\u0440\\u0430\\u0442\\u044C</CleanButton>\\n            <CleanButton onClick={increaseContent}>\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C</CleanButton>\\n          </CleanGroup>\\n        </SidePage.Footer>\\n      </SidePage>\\n    </PageScrollLockDemo>;\\n}\",\n      ...TestPageScrollLock.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"test-page-scroll-lock":{startLoc:{col:7,line:13},endLoc:{col:1,line:55},startBody:{col:7,line:13},endBody:{col:1,line:55}}}},layout:"padded"}},TestPageScrollLock=function TestPageScrollLock(){const[shown,toggle]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),[contentSize,setContentSize]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(5),hide=()=>{toggle(!1)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_storybook_utils__WEBPACK_IMPORTED_MODULE_4__.aH,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_button__WEBPACK_IMPORTED_MODULE_2__.z,{size:"s",onClick:()=>{toggle(!0)},children:"Показать SidePage"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f,{size:"s",shown,onClose:hide,withTransitions:!0,withScrollDisable:!0,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f.Header,{divided:!0,title:"Тест: Блокировка прокрутки страницы",onClose:hide}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f.Body,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div",{style:{padding:"24px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_utils__WEBPACK_IMPORTED_MODULE_4__.Ap,{paragraphCount:contentSize})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_side_page__WEBPACK_IMPORTED_MODULE_0__.f.Footer,{divided:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_3__.WB,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_3__.ux,{onClick:()=>{setContentSize((n=>Math.max(1,n-1)))},children:"Убрать"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_sima_land_ui_nucleons_clean_buttons__WEBPACK_IMPORTED_MODULE_3__.ux,{onClick:()=>{setContentSize((n=>n+1))},children:"Добавить"})]})})]})]})};TestPageScrollLock.displayName="TestPageScrollLock",TestPageScrollLock.storyName="Тест: Блокировка прокрутки страницы",TestPageScrollLock.parameters={...TestPageScrollLock.parameters,docs:{...TestPageScrollLock.parameters?.docs,source:{originalSource:"function TestPageScrollLock() {\n  const styles: Record<'root', CSSProperties> = {\n    root: {\n      padding: '24px'\n    }\n  };\n  const [shown, toggle] = useState<boolean>(false);\n  const [contentSize, setContentSize] = useState<number>(5);\n  const increaseContent = () => {\n    setContentSize(n => n + 1);\n  };\n  const decreaseContent = () => {\n    setContentSize(n => Math.max(1, n - 1));\n  };\n  const show = () => {\n    toggle(true);\n  };\n  const hide = () => {\n    toggle(false);\n  };\n  return <PageScrollLockDemo>\n      <Button size='s' onClick={show}>\n        Показать SidePage\n      </Button>\n\n      <SidePage size='s' shown={shown} onClose={hide} withTransitions withScrollDisable>\n        <SidePage.Header divided title='Тест: Блокировка прокрутки страницы' onClose={hide} />\n\n        <SidePage.Body>\n          <div style={styles.root}>\n            <LoremIpsum paragraphCount={contentSize} />\n          </div>\n        </SidePage.Body>\n\n        <SidePage.Footer divided>\n          <CleanGroup>\n            <CleanButton onClick={decreaseContent}>Убрать</CleanButton>\n            <CleanButton onClick={increaseContent}>Добавить</CleanButton>\n          </CleanGroup>\n        </SidePage.Footer>\n      </SidePage>\n    </PageScrollLockDemo>;\n}",...TestPageScrollLock.parameters?.docs?.source}}};const __namedExportsOrder=["TestPageScrollLock"]},"./src/clean-buttons/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ux:()=>CleanButton,WB:()=>CleanGroup});var react=__webpack_require__("./node_modules/react/index.js"),src_link=__webpack_require__("./src/link/index.tsx"),utils=__webpack_require__("./src/clean-buttons/utils.ts"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),clean_buttons_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/clean-buttons/clean-buttons.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(clean_buttons_module.Z,options);const clean_buttons_clean_buttons_module=clean_buttons_module.Z&&clean_buttons_module.Z.locals?clean_buttons_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(clean_buttons_clean_buttons_module);function CleanGroup({size:sizeFromProps,children}){const sizeFromContext=(0,react.useContext)(utils.O),size=sizeFromProps||sizeFromContext;return(0,jsx_runtime.jsx)("div",{className:cx("group"),children:react.Children.toArray(children).map((item=>(0,react.isValidElement)(item)&&item.type===CleanButton?(0,react.cloneElement)(item,{size}):null))})}function CleanButton({size="s",href,asLink=Boolean(href),"data-testid":testId="clean-button",children,className,...rest}){return(0,jsx_runtime.jsx)(src_link.r,{...rest,className:cx("button",`size-${size}`,className),pseudo:!asLink,href,"data-testid":testId,children})}CleanGroup.displayName="CleanGroup",CleanButton.displayName="CleanButton";try{CleanGroup.displayName="CleanGroup",CleanGroup.__docgenInfo={description:"Группа прозрачных кнопок.",displayName:"CleanGroup",props:{size:{defaultValue:null,description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanGroup"]={docgenInfo:CleanGroup.__docgenInfo,name:"CleanGroup",path:"src/clean-buttons/index.tsx#CleanGroup"})}catch(__react_docgen_typescript_loader_error){}try{CleanButton.displayName="CleanButton",CleanButton.__docgenInfo={description:"Прозрачная кнопка.",displayName:"CleanButton",props:{asLink:{defaultValue:{value:"Boolean(href)"},description:"",name:"asLink",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:{value:"s"},description:"Размер (высота).",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"s"'},{value:'"l"'},{value:'"m"'},{value:'"unset"'}]}},color:{defaultValue:null,description:"Цвет (название токена).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray38"'},{value:'"basic-white"'},{value:'"additional-red"'},{value:'"additional-teal"'}]}},noIndex:{defaultValue:null,description:"Нужно ли оборачивать содержимое комментариями no-index.\n@deprecated",name:"noIndex",required:!1,type:{name:"boolean | undefined"}},pseudo:{defaultValue:null,description:"Выводить как псевдо-ссылку.",name:"pseudo",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключает ссылку подобно кнопке.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},underline:{defaultValue:null,description:"Нужно ли подчеркивание.",name:"underline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanButton"]={docgenInfo:CleanButton.__docgenInfo,name:"CleanButton",path:"src/clean-buttons/index.tsx#CleanButton"})}catch(__react_docgen_typescript_loader_error){}try{CleanButtonSize.displayName="CleanButtonSize",CleanButtonSize.__docgenInfo={description:"Размер прозрачных кнопок (высота) по дизайн-гайдам.",displayName:"CleanButtonSize",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/clean-buttons/index.tsx#CleanButtonSize"]={docgenInfo:CleanButtonSize.__docgenInfo,name:"CleanButtonSize",path:"src/clean-buttons/index.tsx#CleanButtonSize"})}catch(__react_docgen_typescript_loader_error){}},"./src/link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>Link});var react=__webpack_require__("./node_modules/react/index.js");var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),link_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(link_module.Z,options);const link_link_module=link_module.Z&&link_module.Z.locals?link_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(link_link_module),getContentProps=(children,noIndex)=>{return noIndex?{dangerouslySetInnerHTML:(content=children,content?{__html:`\x3c!--noindex--\x3e${String(content)}\x3c!--/noindex--\x3e`}:void 0)}:{children};var content},Link=(0,react.forwardRef)((function Link({children,className,color="basic-blue",disabled,noIndex=!1,pseudo,role,tabIndex,underline,"data-testid":testId="anchor",...restProps},ref){const baseProps=pseudo?{role:role||"button",tabIndex:disabled?void 0:tabIndex||0}:{role,tabIndex};return(0,jsx_runtime.jsx)("a",{...baseProps,...restProps,"data-testid":testId,ref,className:cx("link",className,color,{disabled,underline}),...getContentProps(children,noIndex)})}));try{Link.displayName="Link",Link.__docgenInfo={description:"Ссылка.",displayName:"Link",props:{color:{defaultValue:{value:"basic-blue"},description:"Цвет (название токена).",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray38"'},{value:'"basic-white"'},{value:'"additional-red"'},{value:'"additional-teal"'}]}},noIndex:{defaultValue:{value:"false"},description:"Нужно ли оборачивать содержимое комментариями no-index.\n@deprecated",name:"noIndex",required:!1,type:{name:"boolean | undefined"}},pseudo:{defaultValue:null,description:"Выводить как псевдо-ссылку.",name:"pseudo",required:!1,type:{name:"boolean | undefined"}},disabled:{defaultValue:null,description:"Отключает ссылку подобно кнопке.",name:"disabled",required:!1,type:{name:"boolean | undefined"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}},underline:{defaultValue:null,description:"Нужно ли подчеркивание.",name:"underline",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/clean-buttons/clean-buttons.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".clean-buttons-module__group__dab{display:flex;flex-wrap:nowrap;overflow:hidden;width:100%}.clean-buttons-module__group__dab .clean-buttons-module__button__c25{flex-grow:1;flex-shrink:1;flex-basis:0}.clean-buttons-module__group__dab .clean-buttons-module__button__c25+.clean-buttons-module__button__c25{border-left:1px solid #e0e0e0}.clean-buttons-module__button__c25{display:flex;align-items:center;justify-content:center;font-family:inherit;font-weight:600 !important;font-size:16px;line-height:24px;overflow:hidden;height:var(--clean-group-height)}.clean-buttons-module__size-s__c24{--clean-group-height: 64px}.clean-buttons-module__size-m__eb9{--clean-group-height: 72px}.clean-buttons-module__size-l__a30{--clean-group-height: 80px}","",{version:3,sources:["webpack://./src/clean-buttons/clean-buttons.module.scss","webpack://./src/clean-buttons/clean-buttons-util.scss"],names:[],mappings:"AAGA,kCACE,YAAA,CACA,gBAAA,CACA,eAAA,CACA,UAAA,CACA,qEACE,WAAA,CACA,aAAA,CACA,YAAA,CACA,wGACE,6BAAA,CAKN,mCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,mBAAA,CAGA,0BAAA,CAEA,cAAA,CACA,gBAAA,CACA,eAAA,CACA,gCAAA,CAGF,mCC5BE,0BAAA,CDgCF,mCC5BE,0BAAA,CDgCF,mCC5BE,0BAAA",sourcesContent:["@use '../colors';\n@use './clean-buttons-util';\n\n.group {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow: hidden;\n  width: 100%;\n  .button {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    + .button {\n      border-left: 1px solid colors.$basic-gray12;\n    }\n  }\n}\n\n.button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: inherit;\n\n  // перебиваем стили Link (font-weight: inherit) чтобы не менять их так как компонент много где используется\n  font-weight: 600 !important;\n\n  font-size: 16px;\n  line-height: 24px;\n  overflow: hidden;\n  height: var(--clean-group-height);\n}\n\n.size-s {\n  @include clean-buttons-util.size-s;\n}\n\n.size-m {\n  @include clean-buttons-util.size-m;\n}\n\n.size-l {\n  @include clean-buttons-util.size-l;\n}\n","$size-s-height: 64px;\n$size-m-height: 72px;\n$size-l-height: 80px;\n\n@mixin size-s {\n  --clean-group-height: #{$size-s-height};\n}\n\n@mixin size-m {\n  --clean-group-height: #{$size-m-height};\n}\n\n@mixin size-l {\n  --clean-group-height: #{$size-l-height};\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={group:"clean-buttons-module__group__dab",button:"clean-buttons-module__button__c25","size-s":"clean-buttons-module__size-s__c24","size-m":"clean-buttons-module__size-m__eb9","size-l":"clean-buttons-module__size-l__a30"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/link/link.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".link-module__link__f6d,.link-module__link__f6d:link,.link-module__link__f6d:visited,.link-module__link__f6d:hover,.link-module__link__f6d:active{text-decoration:none;font-weight:inherit;cursor:default;border-bottom-color:rgba(0,0,0,0)}.link-module__link__f6d.link-module__underline__f9d,.link-module__link__f6d:link.link-module__underline__f9d,.link-module__link__f6d:visited.link-module__underline__f9d,.link-module__link__f6d:hover.link-module__underline__f9d,.link-module__link__f6d:active.link-module__underline__f9d{text-decoration:underline}.link-module__link__f6d:hover{cursor:pointer}.link-module__link__f6d.link-module__disabled__ad5{color:#c2c2c2;pointer-events:none}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-blue__b61{color:#1f84db}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-blue__b61:hover{color:#00599d}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray87__a85{color:#212121}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray87__a85:hover{color:#757575}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray38__c45{color:#9e9e9e}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-gray38__c45:hover{color:#757575}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-white__da4{color:#fff}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__basic-white__da4:hover{color:#f5f5f5}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-red__a3d{color:#fb3a2f}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-red__a3d:hover{color:#d50000}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-teal__bb3{color:#09ab8b}.link-module__link__f6d:not(.link-module__disabled__ad5).link-module__additional-teal__bb3:hover{color:#00c853}","",{version:3,sources:["webpack://./src/link/link.module.scss","webpack://./src/colors.scss","webpack://./src/link/link-util.scss"],names:[],mappings:"AAGA,kJAKE,oBAAA,CACA,mBAAA,CACA,cAAA,CACA,iCAAA,CACA,8RACE,yBAAA,CAIJ,8BACE,cAAA,CAIF,mDACE,aCda,CDeb,mBAAA,CAGF,sFEvBI,aDDS,CCET,4FACE,aDkCiB,CDTvB,wFEtBI,aDLW,CCMX,8FACE,aDJS,CD4Bf,wFErBI,aDNW,CCOX,8FACE,aDTS,CDgCf,uFEpBI,UDLU,CCMV,6FACE,aDTQ,CD+Bd,0FEnBI,aDNa,CCOb,gGACE,aDTgB,CD8BtB,2FElBI,aDRc,CCSd,iGACE,aDTa",sourcesContent:["@use '../colors';\n@use './link-util';\n\n.link,\n.link:link,\n.link:visited,\n.link:hover,\n.link:active {\n  text-decoration: none;\n  font-weight: inherit; // @todo выяснить можно ли это убрать\n  cursor: default;\n  border-bottom-color: transparent;\n  &.underline {\n    text-decoration: underline;\n  }\n}\n\n.link:hover {\n  cursor: pointer;\n}\n\n// ниже двойные классы для высокой специфичности в монолите\n.link.disabled {\n  color: colors.$basic-gray24;\n  pointer-events: none;\n}\n\n.link:not(.disabled).basic-blue {\n  @include link-util.color('basic-blue');\n}\n\n.link:not(.disabled).basic-gray87 {\n  @include link-util.color('basic-gray87');\n}\n\n.link:not(.disabled).basic-gray38 {\n  @include link-util.color('basic-gray38');\n}\n\n.link:not(.disabled).basic-white {\n  @include link-util.color('basic-white');\n}\n\n.link:not(.disabled).additional-red {\n  @include link-util.color('additional-red');\n}\n\n.link:not(.disabled).additional-teal {\n  @include link-util.color('additional-teal');\n}\n","// GENERATED FILE - DO NOT CHANGE IT MANUALLY\n\n// basic\n$basic-blue: #1f84db;\n$basic-gray87: #212121;\n$basic-gray76: #3a3a3b;\n$basic-gray66: #545455;\n$basic-gray54: #757575;\n$basic-gray38: #9e9e9e;\n$basic-gray24: #c2c2c2;\n$basic-gray12: #e0e0e0;\n$basic-gray8: #ebebeb;\n$basic-gray4: #f5f5f5;\n$basic-gray2: #fafafa;\n$basic-white: #fff;\n\n// additional\n$additional-deep-red: #d50000;\n$additional-red: #fb3a2f;\n$additional-light-red: #feebea;\n$additional-dark-teal: #089176;\n$additional-teal: #09ab8b;\n$additional-green: #00c853;\n$additional-light-green: #64dd17;\n$additional-lime: #aeea00;\n$additional-faded-green: #eff9ea;\n$additional-pink: #e82e5c;\n$additional-purple: #b52ea8;\n$additional-violet: #902bd0;\n$additional-deep-purple: #634bdf;\n$additional-electric-blue: #2962ff;\n$additional-light-blue: #0091ea;\n$additional-cyan: #00b8d4;\n$additional-sky: #e4f1f9;\n$additional-deep-orange: #ff7200;\n$additional-amber: #ffab00;\n$additional-yellow: #ffd600;\n$additional-gold: #d5a43b;\n$additional-brown: #795548;\n$additional-blue-gray: #607d8b;\n$additional-deep-blue: #00599d;\n$additional-dark-blue: #002b41;\n$additional-unlit-blue: #1b75c2;\n","@use '../colors';\n\n@mixin color($key) {\n  @if $key == 'basic-blue' {\n    color: colors.$basic-blue;\n    &:hover {\n      color: colors.$additional-deep-blue;\n    }\n  } @else if $key == 'basic-gray87' {\n    color: colors.$basic-gray87;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-gray38' {\n    color: colors.$basic-gray38;\n    &:hover {\n      color: colors.$basic-gray54;\n    }\n  } @else if $key == 'basic-white' {\n    color: colors.$basic-white;\n    &:hover {\n      color: colors.$basic-gray4;\n    }\n  } @else if $key == 'additional-red' {\n    color: colors.$additional-red;\n    &:hover {\n      color: colors.$additional-deep-red;\n    }\n  } @else if $key == 'additional-teal' {\n    color: colors.$additional-teal;\n    &:hover {\n      color: colors.$additional-green;\n    }\n  } @else {\n    @warn '[link-color] No such color `#{$key}`.';\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={link:"link-module__link__f6d",underline:"link-module__underline__f9d",disabled:"link-module__disabled__ad5","basic-blue":"link-module__basic-blue__b61","basic-gray87":"link-module__basic-gray87__a85","basic-gray38":"link-module__basic-gray38__c45","basic-white":"link-module__basic-white__da4","additional-red":"link-module__additional-red__a3d","additional-teal":"link-module__additional-teal__bb3"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);