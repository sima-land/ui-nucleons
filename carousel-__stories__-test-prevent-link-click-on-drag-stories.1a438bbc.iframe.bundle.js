"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3178],{"./src/carousel/__stories__/test-prevent-link-click-on-drag.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TestPreventLinkClickOnDrag:()=>TestPreventLinkClickOnDrag,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _sima_land_ui_nucleons_carousel__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/carousel/index.ts"),_static_russia_nature_01_jpg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-01.jpg"),_static_russia_nature_02_jpg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-02.jpg"),_static_russia_nature_03_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-03.jpg"),_static_russia_nature_04_jpg__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-04.jpg"),_static_russia_nature_05_jpg__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-05.jpg"),_static_russia_nature_06_jpg__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-06.jpg"),_static_russia_nature_07_jpg__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-07.jpg"),_static_russia_nature_08_jpg__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-08.jpg"),_static_russia_nature_09_jpg__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-09.jpg"),_static_russia_nature_10_jpg__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./src/carousel/__stories__/static/russia-nature-10.jpg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"common/Carousel",component:_sima_land_ui_nucleons_carousel__WEBPACK_IMPORTED_MODULE_0__.l,parameters:{storySource:{source:"import { Carousel } from '@sima-land/ui-nucleons/carousel';\nimport { CSSProperties } from 'react';\nimport russiaNature01 from './static/russia-nature-01.jpg';\nimport russiaNature02 from './static/russia-nature-02.jpg';\nimport russiaNature03 from './static/russia-nature-03.jpg';\nimport russiaNature04 from './static/russia-nature-04.jpg';\nimport russiaNature05 from './static/russia-nature-05.jpg';\nimport russiaNature06 from './static/russia-nature-06.jpg';\nimport russiaNature07 from './static/russia-nature-07.jpg';\nimport russiaNature08 from './static/russia-nature-08.jpg';\nimport russiaNature09 from './static/russia-nature-09.jpg';\nimport russiaNature10 from './static/russia-nature-10.jpg';\n\nexport default {\n  title: 'common/Carousel',\n  component: Carousel,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst photos: string[] = [\n  russiaNature01,\n  russiaNature02,\n  russiaNature03,\n  russiaNature04,\n  russiaNature05,\n  russiaNature06,\n  russiaNature07,\n  russiaNature08,\n  russiaNature09,\n  russiaNature10,\n];\n\nconst styles = {\n  link: {\n    display: 'block',\n    flexShrink: 0,\n    width: 'calc(50% - 8px)',\n    height: '320px',\n    borderRadius: '8px',\n    overflow: 'hidden',\n    background: '#eee',\n  } satisfies CSSProperties,\n\n  image: {\n    display: 'block',\n    width: '100%',\n    height: '100%',\n    objectFit: 'cover',\n  } satisfies CSSProperties,\n};\n\nexport function TestPreventLinkClickOnDrag() {\n  return (\n    <div style={{ maxWidth: '1024px', margin: '24px auto' }}>\n      <Carousel\n        containerProps={{ style: { width: '100%' } }}\n        items={photos}\n        renderItem={(photo, index) => (\n          <a\n            key={index}\n            href='https://www.sima-land.ru'\n            target='_blank'\n            rel='noreferrer'\n            style={{\n              ...styles.link,\n              marginLeft: index ? '16px' : 0,\n            }}\n          >\n            <img src={photo} style={styles.image} />\n          </a>\n        )}\n      />\n    </div>\n  );\n}\n\nTestPreventLinkClickOnDrag.storyName = 'Тест: Предотвращение клика при перетаскивании мышью';\n",locationsMap:{"test-prevent-link-click-on-drag":{startLoc:{col:7,line:54},endLoc:{col:1,line:77},startBody:{col:7,line:54},endBody:{col:1,line:77}}}},layout:"padded"}},photos=[_static_russia_nature_01_jpg__WEBPACK_IMPORTED_MODULE_1__,_static_russia_nature_02_jpg__WEBPACK_IMPORTED_MODULE_2__,_static_russia_nature_03_jpg__WEBPACK_IMPORTED_MODULE_3__,_static_russia_nature_04_jpg__WEBPACK_IMPORTED_MODULE_4__,_static_russia_nature_05_jpg__WEBPACK_IMPORTED_MODULE_5__,_static_russia_nature_06_jpg__WEBPACK_IMPORTED_MODULE_6__,_static_russia_nature_07_jpg__WEBPACK_IMPORTED_MODULE_7__,_static_russia_nature_08_jpg__WEBPACK_IMPORTED_MODULE_8__,_static_russia_nature_09_jpg__WEBPACK_IMPORTED_MODULE_9__,_static_russia_nature_10_jpg__WEBPACK_IMPORTED_MODULE_10__],styles={link:{display:"block",flexShrink:0,width:"calc(50% - 8px)",height:"320px",borderRadius:"8px",overflow:"hidden",background:"#eee"},image:{display:"block",width:"100%",height:"100%",objectFit:"cover"}},TestPreventLinkClickOnDrag=function TestPreventLinkClickOnDrag(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div",{style:{maxWidth:"1024px",margin:"24px auto"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_sima_land_ui_nucleons_carousel__WEBPACK_IMPORTED_MODULE_0__.l,{containerProps:{style:{width:"100%"}},items:photos,renderItem:(photo,index)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("a",{href:"https://www.sima-land.ru",target:"_blank",rel:"noreferrer",style:{...styles.link,marginLeft:index?"16px":0},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img",{src:photo,style:styles.image})},index)})})};TestPreventLinkClickOnDrag.storyName="Тест: Предотвращение клика при перетаскивании мышью",TestPreventLinkClickOnDrag.parameters={...TestPreventLinkClickOnDrag.parameters,docs:{...TestPreventLinkClickOnDrag.parameters?.docs,source:{originalSource:"function TestPreventLinkClickOnDrag() {\n  return <div style={{\n    maxWidth: '1024px',\n    margin: '24px auto'\n  }}>\n      <Carousel containerProps={{\n      style: {\n        width: '100%'\n      }\n    }} items={photos} renderItem={(photo, index) => <a key={index} href='https://www.sima-land.ru' target='_blank' rel='noreferrer' style={{\n      ...styles.link,\n      marginLeft: index ? '16px' : 0\n    }}>\n            <img src={photo} style={styles.image} />\n          </a>} />\n    </div>;\n}",...TestPreventLinkClickOnDrag.parameters?.docs?.source}}};const __namedExportsOrder=["TestPreventLinkClickOnDrag"]},"./src/carousel/__stories__/static/russia-nature-01.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-01.75b6e148.jpg"},"./src/carousel/__stories__/static/russia-nature-02.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-02.7cbbf101.jpg"},"./src/carousel/__stories__/static/russia-nature-03.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-03.e5902756.jpg"},"./src/carousel/__stories__/static/russia-nature-04.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-04.24867b79.jpg"},"./src/carousel/__stories__/static/russia-nature-05.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-05.a4d41986.jpg"},"./src/carousel/__stories__/static/russia-nature-06.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-06.4f0c9ed1.jpg"},"./src/carousel/__stories__/static/russia-nature-07.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-07.6849095c.jpg"},"./src/carousel/__stories__/static/russia-nature-08.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-08.47c2abb1.jpg"},"./src/carousel/__stories__/static/russia-nature-09.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-09.da673ed6.jpg"},"./src/carousel/__stories__/static/russia-nature-10.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/russia-nature-10.84d02dcc.jpg"}}]);