"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6306],{"./src/carousel/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Horizontal:()=>Horizontal,PreventLinkClickOnDrag:()=>PreventLinkClickOnDrag,Primary:()=>Primary,Reels:()=>Reels,TestActiveElementBlur:()=>TestActiveElementBlur,Vertical:()=>Vertical,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var carousel=__webpack_require__("./src/carousel/index.ts"),react=__webpack_require__("./node_modules/react/index.js");const russia_nature_01_namespaceObject=__webpack_require__.p+"static/media/russia-nature-01.75b6e148.jpg",russia_nature_02_namespaceObject=__webpack_require__.p+"static/media/russia-nature-02.7cbbf101.jpg",russia_nature_03_namespaceObject=__webpack_require__.p+"static/media/russia-nature-03.e5902756.jpg",russia_nature_04_namespaceObject=__webpack_require__.p+"static/media/russia-nature-04.24867b79.jpg",russia_nature_05_namespaceObject=__webpack_require__.p+"static/media/russia-nature-05.a4d41986.jpg",russia_nature_06_namespaceObject=__webpack_require__.p+"static/media/russia-nature-06.4f0c9ed1.jpg",russia_nature_07_namespaceObject=__webpack_require__.p+"static/media/russia-nature-07.6849095c.jpg",russia_nature_08_namespaceObject=__webpack_require__.p+"static/media/russia-nature-08.47c2abb1.jpg",russia_nature_09_namespaceObject=__webpack_require__.p+"static/media/russia-nature-09.da673ed6.jpg",russia_nature_10_namespaceObject=__webpack_require__.p+"static/media/russia-nature-10.84d02dcc.jpg";var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),stories_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/__stories__/stories.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(stories_module.Z,options);const _stories_stories_module=stories_module.Z&&stories_module.Z.locals?stories_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(_stories_stories_module),index_stories={title:"common/Carousel",component:carousel.l,parameters:{storySource:{source:"import { Carousel } from '@sima-land/ui-nucleons/carousel';\nimport { CSSProperties, ReactNode, useEffect, useState } from 'react';\nimport russiaNature01 from './static/russia-nature-01.jpg';\nimport russiaNature02 from './static/russia-nature-02.jpg';\nimport russiaNature03 from './static/russia-nature-03.jpg';\nimport russiaNature04 from './static/russia-nature-04.jpg';\nimport russiaNature05 from './static/russia-nature-05.jpg';\nimport russiaNature06 from './static/russia-nature-06.jpg';\nimport russiaNature07 from './static/russia-nature-07.jpg';\nimport russiaNature08 from './static/russia-nature-08.jpg';\nimport russiaNature09 from './static/russia-nature-09.jpg';\nimport russiaNature10 from './static/russia-nature-10.jpg';\nimport classnames from 'classnames/bind';\nimport styles from './stories.module.scss';\n\nconst cx = classnames.bind(styles);\n\nexport default {\n  title: 'common/Carousel',\n  component: Carousel,\n  parameters: {\n    layout: 'padded',\n  },\n};\n\nconst photos: string[] = [\n  russiaNature01,\n  russiaNature02,\n  russiaNature03,\n  russiaNature04,\n  russiaNature05,\n  russiaNature06,\n  russiaNature07,\n  russiaNature08,\n  russiaNature09,\n  russiaNature10,\n];\n\nexport function Primary() {\n  return (\n    <>\n      <Carousel\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n    </>\n  );\n}\n\nPrimary.storyName = 'Простой пример';\n\nexport function Horizontal() {\n  return (\n    <>\n      <h3 className={cx('title')}>\n        Кнопки; перетаскивание; бесконечность; шаг = 3; по умолчанию на 4 элементе\n      </h3>\n      <Carousel\n        targetIndex={3}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>\n      <Carousel\n        step={1}\n        draggable={false}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность</h3>\n      <Carousel\n        withControls={false}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Без кнопок</h3>\n      <Carousel\n        infinite={false}\n        items={photos}\n        withControls={false}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Автопрокрутка; бесконечность</h3>\n      <Carousel\n        draggable={false}\n        autoplay\n        autoplayTimeout={1000}\n        items={photos}\n        withControls={false}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Автопрокрутка; бесконечность; перетаскивание</h3>\n      <Carousel\n        draggable\n        autoplay\n        autoplayTimeout={1000}\n        items={photos}\n        withControls={false}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n      <h3 className={cx('title')}>\n        Автопрокрутка; бесконечность; перетаскивание; пауза при наведении\n      </h3>\n      <Carousel\n        draggable\n        autoplay\n        autoplayTimeout={1000}\n        autoplayHoverPause\n        items={photos}\n        withControls={false}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Автопрокрутка; перетаскивание; пауза при наведении</h3>\n      <Carousel\n        draggable\n        autoplay\n        autoplayTimeout={1000}\n        autoplayHoverPause\n        infinite={false}\n        items={[...photos, ...photos, ...photos]}\n        withControls={false}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n    </>\n  );\n}\n\nHorizontal.storyName = 'Горизонтальные карусели';\n\nexport function Vertical() {\n  return (\n    <>\n      <h3 className={cx('title')}>Кнопки; перетаскивание; бесконечность; шаг = 3</h3>\n      <Carousel\n        vertical\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item', 'vertical')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery', 'vertical'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>\n      <Carousel\n        vertical\n        step={1}\n        draggable={false}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item', 'vertical')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery', 'vertical'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность; шаг = 2</h3>\n      <Carousel\n        vertical\n        step={2}\n        withControls={false}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item', 'vertical')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery', 'vertical'),\n        }}\n      />\n\n      <h3 className={cx('title')}>Кнопки</h3>\n      <Carousel\n        vertical\n        step={2}\n        infinite={false}\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item', 'vertical')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery', 'vertical'),\n        }}\n      />\n    </>\n  );\n}\n\nVertical.storyName = 'Вертикальные карусели';\n\nexport function Reels() {\n  const count = 8;\n  const [currentIndex, setCurrentIndex] = useState(0);\n\n  return (\n    <Carousel\n      step={1}\n      infinite={false}\n      items={Array(count).fill(0)}\n      targetIndex={currentIndex}\n      onChangeTargetIndex={setCurrentIndex}\n      renderItem={(zero, index) => (\n        <Reel play={index === currentIndex} onEnded={() => setCurrentIndex((index + 1) % count)}>\n          {index + 1}\n        </Reel>\n      )}\n    />\n  );\n}\n\nfunction Reel({\n  play,\n  onEnded,\n  children,\n}: {\n  play?: boolean;\n  onEnded?: () => void;\n  children?: ReactNode;\n}) {\n  const [duration] = useState(() => 1000 + 2000 * Math.random());\n\n  useEffect(() => {\n    if (play) {\n      const timerId = setTimeout(() => onEnded?.(), duration);\n      return () => clearTimeout(timerId);\n    }\n  }, [play, duration]);\n\n  return (\n    <div className={cx('reel', { current: play })} style={{ animationDuration: `${duration}ms` }}>\n      {children}\n    </div>\n  );\n}\n\nReels.storyName = 'Пример: Reels';\n\nexport function PreventLinkClickOnDrag() {\n  const style = {\n    link: {\n      display: 'block',\n      flexShrink: 0,\n      width: 'calc(50% - 8px)',\n      height: '320px',\n      borderRadius: '8px',\n      overflow: 'hidden',\n      background: '#eee',\n    } satisfies CSSProperties,\n\n    image: {\n      display: 'block',\n      width: '100%',\n      height: '100%',\n      objectFit: 'cover',\n    } satisfies CSSProperties,\n  };\n\n  return (\n    <div style={{ maxWidth: '1024px', margin: '24px auto' }}>\n      <Carousel\n        containerProps={{ style: { width: '100%' } }}\n        items={photos}\n        renderItem={(photo, index) => (\n          <a\n            key={index}\n            href='https://www.sima-land.ru'\n            target='_blank'\n            rel='noreferrer'\n            style={{\n              ...style.link,\n              marginLeft: index ? '16px' : 0,\n            }}\n          >\n            <img src={photo} style={style.image} />\n          </a>\n        )}\n      />\n    </div>\n  );\n}\n\nPreventLinkClickOnDrag.storyName = 'Тест: Предотвращение клика при перетаскивании мышью';\n\nexport function TestActiveElementBlur() {\n  return (\n    <>\n      <input type='text' style={{ marginBottom: '16px' }} />\n      <Carousel\n        items={photos}\n        renderItem={(item, index) => (\n          <div\n            key={index}\n            className={cx('gallery-item')}\n            style={{ backgroundImage: `url(${item})` }}\n          />\n        )}\n        containerProps={{\n          className: cx('gallery'),\n        }}\n      />\n    </>\n  );\n}\n\nTestActiveElementBlur.storyName = 'Тест: Blur активного элемента при перетаскивании';\n",locationsMap:{primary:{startLoc:{col:7,line:39},endLoc:{col:1,line:57},startBody:{col:7,line:39},endBody:{col:1,line:57}},horizontal:{startLoc:{col:7,line:61},endLoc:{col:1,line:213},startBody:{col:7,line:61},endBody:{col:1,line:213}},vertical:{startLoc:{col:7,line:217},endLoc:{col:1,line:291},startBody:{col:7,line:217},endBody:{col:1,line:291}},reels:{startLoc:{col:7,line:295},endLoc:{col:1,line:313},startBody:{col:7,line:295},endBody:{col:1,line:313}},"prevent-link-click-on-drag":{startLoc:{col:7,line:342},endLoc:{col:1,line:384},startBody:{col:7,line:342},endBody:{col:1,line:384}},"test-active-element-blur":{startLoc:{col:7,line:388},endLoc:{col:1,line:407},startBody:{col:7,line:388},endBody:{col:1,line:407}}}},layout:"padded"}},photos=[russia_nature_01_namespaceObject,russia_nature_02_namespaceObject,russia_nature_03_namespaceObject,russia_nature_04_namespaceObject,russia_nature_05_namespaceObject,russia_nature_06_namespaceObject,russia_nature_07_namespaceObject,russia_nature_08_namespaceObject,russia_nature_09_namespaceObject,russia_nature_10_namespaceObject],Primary=function Primary(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(carousel.l,{items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}})})};Primary.storyName="Простой пример";const Horizontal=function Horizontal(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Кнопки; перетаскивание; бесконечность; шаг = 3; по умолчанию на 4 элементе"}),(0,jsx_runtime.jsx)(carousel.l,{targetIndex:3,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Кнопки; без перетаскивания; бесконечность; шаг = 1"}),(0,jsx_runtime.jsx)(carousel.l,{step:1,draggable:!1,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Без кнопок; перетаскивание; бесконечность"}),(0,jsx_runtime.jsx)(carousel.l,{withControls:!1,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Без кнопок"}),(0,jsx_runtime.jsx)(carousel.l,{infinite:!1,items:photos,withControls:!1,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Автопрокрутка; бесконечность"}),(0,jsx_runtime.jsx)(carousel.l,{draggable:!1,autoplay:!0,autoplayTimeout:1e3,items:photos,withControls:!1,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Автопрокрутка; бесконечность; перетаскивание"}),(0,jsx_runtime.jsx)(carousel.l,{draggable:!0,autoplay:!0,autoplayTimeout:1e3,items:photos,withControls:!1,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Автопрокрутка; бесконечность; перетаскивание; пауза при наведении"}),(0,jsx_runtime.jsx)(carousel.l,{draggable:!0,autoplay:!0,autoplayTimeout:1e3,autoplayHoverPause:!0,items:photos,withControls:!1,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Автопрокрутка; перетаскивание; пауза при наведении"}),(0,jsx_runtime.jsx)(carousel.l,{draggable:!0,autoplay:!0,autoplayTimeout:1e3,autoplayHoverPause:!0,infinite:!1,items:[...photos,...photos,...photos],withControls:!1,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}})]})};Horizontal.storyName="Горизонтальные карусели";const Vertical=function Vertical(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Кнопки; перетаскивание; бесконечность; шаг = 3"}),(0,jsx_runtime.jsx)(carousel.l,{vertical:!0,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item","vertical"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery","vertical")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Кнопки; без перетаскивания; бесконечность; шаг = 1"}),(0,jsx_runtime.jsx)(carousel.l,{vertical:!0,step:1,draggable:!1,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item","vertical"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery","vertical")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Без кнопок; перетаскивание; бесконечность; шаг = 2"}),(0,jsx_runtime.jsx)(carousel.l,{vertical:!0,step:2,withControls:!1,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item","vertical"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery","vertical")}}),(0,jsx_runtime.jsx)("h3",{className:cx("title"),children:"Кнопки"}),(0,jsx_runtime.jsx)(carousel.l,{vertical:!0,step:2,infinite:!1,items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item","vertical"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery","vertical")}})]})};Vertical.storyName="Вертикальные карусели";const Reels=function Reels(){const[currentIndex,setCurrentIndex]=(0,react.useState)(0);return(0,jsx_runtime.jsx)(carousel.l,{step:1,infinite:!1,items:Array(8).fill(0),targetIndex:currentIndex,onChangeTargetIndex:setCurrentIndex,renderItem:(zero,index)=>(0,jsx_runtime.jsx)(Reel,{play:index===currentIndex,onEnded:()=>setCurrentIndex((index+1)%8),children:index+1})})};function Reel({play,onEnded,children}){const[duration]=(0,react.useState)((()=>1e3+2e3*Math.random()));return(0,react.useEffect)((()=>{if(play){const timerId=setTimeout((()=>onEnded?.()),duration);return()=>clearTimeout(timerId)}}),[play,duration]),(0,jsx_runtime.jsx)("div",{className:cx("reel",{current:play}),style:{animationDuration:`${duration}ms`},children})}Reels.displayName="Reels",Reel.displayName="Reel",Reels.storyName="Пример: Reels";const PreventLinkClickOnDrag=function PreventLinkClickOnDrag(){const style={link:{display:"block",flexShrink:0,width:"calc(50% - 8px)",height:"320px",borderRadius:"8px",overflow:"hidden",background:"#eee"},image:{display:"block",width:"100%",height:"100%",objectFit:"cover"}};return(0,jsx_runtime.jsx)("div",{style:{maxWidth:"1024px",margin:"24px auto"},children:(0,jsx_runtime.jsx)(carousel.l,{containerProps:{style:{width:"100%"}},items:photos,renderItem:(photo,index)=>(0,jsx_runtime.jsx)("a",{href:"https://www.sima-land.ru",target:"_blank",rel:"noreferrer",style:{...style.link,marginLeft:index?"16px":0},children:(0,jsx_runtime.jsx)("img",{src:photo,style:style.image})},index)})})};PreventLinkClickOnDrag.displayName="PreventLinkClickOnDrag",PreventLinkClickOnDrag.storyName="Тест: Предотвращение клика при перетаскивании мышью";const TestActiveElementBlur=function TestActiveElementBlur(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("input",{type:"text",style:{marginBottom:"16px"}}),(0,jsx_runtime.jsx)(carousel.l,{items:photos,renderItem:(item,index)=>(0,jsx_runtime.jsx)("div",{className:cx("gallery-item"),style:{backgroundImage:`url(${item})`}},index),containerProps:{className:cx("gallery")}})]})};TestActiveElementBlur.storyName="Тест: Blur активного элемента при перетаскивании",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <>\n      <Carousel items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n    </>;\n}",...Primary.parameters?.docs?.source}}},Horizontal.parameters={...Horizontal.parameters,docs:{...Horizontal.parameters?.docs,source:{originalSource:"function Horizontal() {\n  return <>\n      <h3 className={cx('title')}>\n        Кнопки; перетаскивание; бесконечность; шаг = 3; по умолчанию на 4 элементе\n      </h3>\n      <Carousel targetIndex={3} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>\n      <Carousel step={1} draggable={false} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность</h3>\n      <Carousel withControls={false} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Без кнопок</h3>\n      <Carousel infinite={false} items={photos} withControls={false} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Автопрокрутка; бесконечность</h3>\n      <Carousel draggable={false} autoplay autoplayTimeout={1000} items={photos} withControls={false} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Автопрокрутка; бесконечность; перетаскивание</h3>\n      <Carousel draggable autoplay autoplayTimeout={1000} items={photos} withControls={false} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n      <h3 className={cx('title')}>\n        Автопрокрутка; бесконечность; перетаскивание; пауза при наведении\n      </h3>\n      <Carousel draggable autoplay autoplayTimeout={1000} autoplayHoverPause items={photos} withControls={false} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n\n      <h3 className={cx('title')}>Автопрокрутка; перетаскивание; пауза при наведении</h3>\n      <Carousel draggable autoplay autoplayTimeout={1000} autoplayHoverPause infinite={false} items={[...photos, ...photos, ...photos]} withControls={false} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n    </>;\n}",...Horizontal.parameters?.docs?.source}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:"function Vertical() {\n  return <>\n      <h3 className={cx('title')}>Кнопки; перетаскивание; бесконечность; шаг = 3</h3>\n      <Carousel vertical items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item', 'vertical')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery', 'vertical')\n    }} />\n\n      <h3 className={cx('title')}>Кнопки; без перетаскивания; бесконечность; шаг = 1</h3>\n      <Carousel vertical step={1} draggable={false} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item', 'vertical')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery', 'vertical')\n    }} />\n\n      <h3 className={cx('title')}>Без кнопок; перетаскивание; бесконечность; шаг = 2</h3>\n      <Carousel vertical step={2} withControls={false} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item', 'vertical')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery', 'vertical')\n    }} />\n\n      <h3 className={cx('title')}>Кнопки</h3>\n      <Carousel vertical step={2} infinite={false} items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item', 'vertical')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery', 'vertical')\n    }} />\n    </>;\n}",...Vertical.parameters?.docs?.source}}},Reels.parameters={...Reels.parameters,docs:{...Reels.parameters?.docs,source:{originalSource:"function Reels() {\n  const count = 8;\n  const [currentIndex, setCurrentIndex] = useState(0);\n  return <Carousel step={1} infinite={false} items={Array(count).fill(0)} targetIndex={currentIndex} onChangeTargetIndex={setCurrentIndex} renderItem={(zero, index) => <Reel play={index === currentIndex} onEnded={() => setCurrentIndex((index + 1) % count)}>\n          {index + 1}\n        </Reel>} />;\n}",...Reels.parameters?.docs?.source}}},PreventLinkClickOnDrag.parameters={...PreventLinkClickOnDrag.parameters,docs:{...PreventLinkClickOnDrag.parameters?.docs,source:{originalSource:"function PreventLinkClickOnDrag() {\n  const style = {\n    link: ({\n      display: 'block',\n      flexShrink: 0,\n      width: 'calc(50% - 8px)',\n      height: '320px',\n      borderRadius: '8px',\n      overflow: 'hidden',\n      background: '#eee'\n    } satisfies CSSProperties),\n    image: ({\n      display: 'block',\n      width: '100%',\n      height: '100%',\n      objectFit: 'cover'\n    } satisfies CSSProperties)\n  };\n  return <div style={{\n    maxWidth: '1024px',\n    margin: '24px auto'\n  }}>\n      <Carousel containerProps={{\n      style: {\n        width: '100%'\n      }\n    }} items={photos} renderItem={(photo, index) => <a key={index} href='https://www.sima-land.ru' target='_blank' rel='noreferrer' style={{\n      ...style.link,\n      marginLeft: index ? '16px' : 0\n    }}>\n            <img src={photo} style={style.image} />\n          </a>} />\n    </div>;\n}",...PreventLinkClickOnDrag.parameters?.docs?.source}}},TestActiveElementBlur.parameters={...TestActiveElementBlur.parameters,docs:{...TestActiveElementBlur.parameters?.docs,source:{originalSource:"function TestActiveElementBlur() {\n  return <>\n      <input type='text' style={{\n      marginBottom: '16px'\n    }} />\n      <Carousel items={photos} renderItem={(item, index) => <div key={index} className={cx('gallery-item')} style={{\n      backgroundImage: `url(${item})`\n    }} />} containerProps={{\n      className: cx('gallery')\n    }} />\n    </>;\n}",...TestActiveElementBlur.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Horizontal","Vertical","Reels","PreventLinkClickOnDrag","TestActiveElementBlur"]},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/carousel/__stories__/stories.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.stories-module__title__eb8{padding:0 16px;margin-top:40px;margin-bottom:32px}.stories-module__gallery__a53:not(.stories-module__vertical__efb){max-width:800px;margin:0 16px}.stories-module__gallery__a53.stories-module__vertical__efb{width:200px;height:600px;margin:16px}.stories-module__gallery-item__e69{font-size:16px;color:#000;flex-shrink:0;width:200px;height:300px;border-radius:6px;background:#95a5a6;background-size:cover;background-repeat:no-repeat;background-position:center;overflow:hidden}.stories-module__gallery-item__e69:not(.stories-module__vertical__efb):not(:first-child){margin-left:10px}.stories-module__gallery-item__e69.stories-module__vertical__efb:not(:first-child){margin-top:10px}.stories-module__reel__c03{position:relative;width:240px;height:320px;flex-shrink:0;border-radius:8px;display:flex;align-items:center;justify-content:center;overflow:hidden}.stories-module__reel__c03:not(.stories-module__current__a0e){background:rgba(255,0,0,.1960784314)}.stories-module__reel__c03.stories-module__current__a0e{background:rgba(0,255,0,.1960784314)}.stories-module__reel__c03:not(:last-child){margin-right:20px}.stories-module__reel__c03.stories-module__current__a0e::after{content:"";position:absolute;bottom:0;left:0;height:4px;background:#000;animation-name:stories-module__grow__fa5;animation-duration:inherit;animation-timing-function:linear}@keyframes stories-module__grow__fa5{0%{width:0%}100%{width:100%}}',"",{version:3,sources:["webpack://./src/carousel/__stories__/stories.module.scss"],names:[],mappings:"AAAA,4BACE,cAAA,CACA,eAAA,CACA,kBAAA,CAIA,kEACE,eAAA,CACA,aAAA,CAEF,4DACE,WAAA,CACA,YAAA,CACA,WAAA,CAIJ,mCACE,cAAA,CACA,UAAA,CACA,aAAA,CACA,WAAA,CACA,YAAA,CACA,iBAAA,CACA,kBAAA,CACA,qBAAA,CACA,2BAAA,CACA,0BAAA,CACA,eAAA,CACA,yFACE,gBAAA,CAEF,mFACE,eAAA,CAIJ,2BACE,iBAAA,CACA,WAAA,CACA,YAAA,CACA,aAAA,CACA,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,8DACE,oCAAA,CAEF,wDACE,oCAAA,CAEF,4CACE,iBAAA,CAEF,+DACE,UAAA,CACA,iBAAA,CACA,QAAA,CACA,MAAA,CACA,UAAA,CACA,eAAA,CACA,wCAAA,CACA,0BAAA,CACA,gCAAA,CAIJ,qCACE,GACE,QAAA,CAEF,KACE,UAAA,CAAA",sourcesContent:[".title {\n  padding: 0 16px;\n  margin-top: 40px;\n  margin-bottom: 32px;\n}\n\n.gallery {\n  &:not(.vertical) {\n    max-width: 800px;\n    margin: 0 16px;\n  }\n  &.vertical {\n    width: 200px;\n    height: 600px;\n    margin: 16px;\n  }\n}\n\n.gallery-item {\n  font-size: 16px;\n  color: #000;\n  flex-shrink: 0;\n  width: 200px;\n  height: 300px;\n  border-radius: 6px;\n  background: #95a5a6;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  overflow: hidden;\n  &:not(.vertical):not(:first-child) {\n    margin-left: 10px;\n  }\n  &.vertical:not(:first-child) {\n    margin-top: 10px;\n  }\n}\n\n.reel {\n  position: relative;\n  width: 240px;\n  height: 320px;\n  flex-shrink: 0;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  &:not(.current) {\n    background: #ff000032;\n  }\n  &.current {\n    background: #00ff0032;\n  }\n  &:not(:last-child) {\n    margin-right: 20px;\n  }\n  &.current::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    height: 4px;\n    background: #000;\n    animation-name: grow;\n    animation-duration: inherit;\n    animation-timing-function: linear;\n  }\n}\n\n@keyframes grow {\n  0% {\n    width: 0%;\n  }\n  100% {\n    width: 100%;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={title:"stories-module__title__eb8",gallery:"stories-module__gallery__a53",vertical:"stories-module__vertical__efb","gallery-item":"stories-module__gallery-item__e69",reel:"stories-module__reel__c03",current:"stories-module__current__a0e",grow:"stories-module__grow__fa5"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);