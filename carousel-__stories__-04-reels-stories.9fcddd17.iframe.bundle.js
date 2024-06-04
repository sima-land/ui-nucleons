"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3940],{"./src/carousel/__stories__/04-reels.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Reels:()=>Reels,__namedExportsOrder:()=>__namedExportsOrder,default:()=>_04_reels_stories});var carousel=__webpack_require__("./src/carousel/index.ts"),react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),reels_m=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/__stories__/reels.m.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(reels_m.Z,options);const _stories_reels_m=reels_m.Z&&reels_m.Z.locals?reels_m.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(_stories_reels_m),_04_reels_stories={title:"common/Carousel",component:carousel.l,parameters:{storySource:{source:"import { Carousel } from '@sima-land/ui-nucleons/carousel';\nimport { ReactNode, useEffect, useState } from 'react';\nimport classnames from 'classnames/bind';\nimport styles from './reels.m.scss';\n\nconst cx = classnames.bind(styles);\n\nexport default {\n  title: 'common/Carousel',\n  component: Carousel,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nexport function Reels() {\n  const count = 8;\n  const [currentIndex, setCurrentIndex] = useState(0);\n\n  return (\n    <Carousel\n      step={1}\n      infinite={false}\n      items={Array(count).fill(0)}\n      targetIndex={currentIndex}\n      onChangeTargetIndex={setCurrentIndex}\n      renderItem={(zero, index) => (\n        <Reel play={index === currentIndex} onEnded={() => setCurrentIndex((index + 1) % count)}>\n          {index + 1}\n        </Reel>\n      )}\n    />\n  );\n}\n\nfunction Reel({\n  play,\n  onEnded,\n  children,\n}: {\n  play?: boolean;\n  onEnded?: () => void;\n  children?: ReactNode;\n}) {\n  const [duration] = useState(() => 1000 + 2000 * Math.random());\n\n  useEffect(() => {\n    if (play) {\n      const timerId = setTimeout(() => onEnded?.(), duration);\n      return () => clearTimeout(timerId);\n    }\n  }, [play, duration]);\n\n  return (\n    <div className={cx('reel', { current: play })} style={{ animationDuration: `${duration}ms` }}>\n      {children}\n    </div>\n  );\n}\n\nReels.storyName = 'Пример: Reels';\n",locationsMap:{reels:{startLoc:{col:7,line:16},endLoc:{col:1,line:34},startBody:{col:7,line:16},endBody:{col:1,line:34}}}},layout:"padded"}},Reels=function Reels(){const[currentIndex,setCurrentIndex]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(carousel.l,{step:1,infinite:!1,items:Array(8).fill(0),targetIndex:currentIndex,onChangeTargetIndex:setCurrentIndex,renderItem:(zero,index)=>(0,jsx_runtime.jsx)(Reel,{play:index===currentIndex,onEnded:()=>setCurrentIndex((index+1)%8),children:index+1})})};function Reel({play,onEnded,children}){const[duration]=(0,react.useState)((()=>1e3+2e3*Math.random()));return(0,react.useEffect)((()=>{if(play){const timerId=setTimeout((()=>onEnded?.()),duration);return()=>clearTimeout(timerId)}}),[play,duration]),(0,jsx_runtime.jsx)("div",{className:cx("reel",{current:play}),style:{animationDuration:`${duration}ms`},children})}Reels.storyName="Пример: Reels",Reels.parameters={...Reels.parameters,docs:{...Reels.parameters?.docs,source:{originalSource:"function Reels() {\n  const count = 8;\n  const [currentIndex, setCurrentIndex] = useState(0);\n  return <Carousel step={1} infinite={false} items={Array(count).fill(0)} targetIndex={currentIndex} onChangeTargetIndex={setCurrentIndex} renderItem={(zero, index) => <Reel play={index === currentIndex} onEnded={() => setCurrentIndex((index + 1) % count)}>\n          {index + 1}\n        </Reel>} />;\n}",...Reels.parameters?.docs?.source}}};const __namedExportsOrder=["Reels"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/__stories__/reels.m.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.reels-m__reel__d31{position:relative;width:240px;height:320px;flex-shrink:0;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden}.reels-m__reel__d31:not(.reels-m__current__b79){background:rgba(255,0,0,.1960784314)}.reels-m__reel__d31.reels-m__current__b79{background:rgba(0,255,0,.1960784314)}.reels-m__reel__d31:not(:last-child){margin-right:20px}.reels-m__reel__d31.reels-m__current__b79::after{content:"";position:absolute;bottom:0;left:0;height:4px;background:#000;animation-name:reels-m__grow__dc5;animation-duration:inherit;animation-timing-function:linear}@keyframes reels-m__grow__dc5{0%{width:0%}100%{width:100%}}',"",{version:3,sources:["webpack://./src/carousel/__stories__/reels.m.scss"],names:[],mappings:"AAAA,oBACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,gDACE,oCAAA,CAEF,0CACE,oCAAA,CAEF,qCACE,iBAAA,CAEF,iDACE,UAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,eAAA,CACA,iCAAA,CACA,0BAAA,CACA,gCAAA,CAIJ,8BACE,GACE,QAAA,CAEF,KACE,UAAA,CAAA",sourcesContent:[".reel {\n  position: relative;\n  width: 240px;\n  height: 320px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  &:not(.current) {\n    background: #ff000032;\n  }\n  &.current {\n    background: #00ff0032;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &.current::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 4px;\n    background: #000;\n    animation-name: grow;\n    animation-duration: inherit;\n    animation-timing-function: linear;\n  }\n}\n\n@keyframes grow {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={reel:"reels-m__reel__d31",current:"reels-m__current__b79",grow:"reels-m__grow__dc5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);