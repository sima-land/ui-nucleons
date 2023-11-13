/*! For license information please see avatar-__stories__-index-stories.5a54baf8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[8066],{"./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Person.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";const jsx_runtime_1=__webpack_require__("./node_modules/react/jsx-runtime.js"),ForwardRef=(0,__webpack_require__("./node_modules/react/index.js").forwardRef)(((props,ref)=>(0,jsx_runtime_1.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",ref,...props,children:[(0,jsx_runtime_1.jsx)("path",{d:"M6.936 14.149a1 1 0 0 1-.585 1.287c-1.69.634-2.512 1.774-2.93 2.765a5.66 5.66 0 0 0-.37 1.305 4.584 4.584 0 0 0-.05.482V20.009l.005.085c.007.08.02.19.048.315.055.248.142.451.248.578A1.088 1.088 0 0 0 3.47 21H20.53a1.088 1.088 0 0 0 .168-.013c.106-.127.193-.33.248-.578a2.473 2.473 0 0 0 .053-.4V19.988a4.575 4.575 0 0 0-.05-.481 5.66 5.66 0 0 0-.37-1.306c-.418-.99-1.24-2.13-2.93-2.765a1 1 0 0 1 .702-1.872c2.31.866 3.488 2.476 4.07 3.86.289.685.432 1.313.504 1.773a6.581 6.581 0 0 1 .073.725l.002.05V20L22 20l1 .001v.03a2.904 2.904 0 0 1-.013.236 4.49 4.49 0 0 1-.088.573c-.095.431-.306 1.074-.806 1.584-.51.518-1.181.576-1.563.576H3.47c-.382 0-1.053-.058-1.562-.576-.501-.51-.712-1.153-.807-1.584a4.474 4.474 0 0 1-.1-.809v-.019L1 20.005v-.003S1 20 2 20l-1-.001V19.972a3.002 3.002 0 0 1 .01-.216 7.662 7.662 0 0 1 .568-2.331c.583-1.385 1.761-2.995 4.07-3.861a1 1 0 0 1 1.288.585Z"}),(0,jsx_runtime_1.jsx)("path",{fillRule:"evenodd",d:"M12 3C9.878 3 8 4.923 8 7.5S9.878 12 12 12s4-1.923 4-4.5S14.122 3 12 3ZM6 7.5C6 4.002 8.599 1 12 1s6 3.002 6 6.5-2.599 6.5-6 6.5-6-3.002-6-6.5Z",clipRule:"evenodd"})]})));exports.Z=ForwardRef},"./src/avatar/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{UserAvatar:()=>UserAvatar,WithCustomColors:()=>WithCustomColors,WithCustomSize:()=>WithCustomSize,WithIcon:()=>WithIcon,WithImage:()=>WithImage,WithInitials:()=>WithInitials,WithPNG:()=>WithPNG,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),avatar_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/avatar/avatar.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(avatar_module.Z,options);const avatar_avatar_module=avatar_module.Z&&avatar_module.Z.locals?avatar_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(avatar_avatar_module);function Avatar({src,className,style,children,"data-testid":testId="avatar"}){const[needImage,toggleNeedImage]=(0,react.useState)((()=>Boolean(src)));(0,react.useEffect)((()=>{toggleNeedImage(Boolean(src))}),[src]);const rootClassName=cx("root",needImage&&"image-overlay",className);return(0,jsx_runtime.jsxs)("span",{className:rootClassName,style,"data-testid":testId,children:[needImage&&(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)("img",{src,alt:"",className:cx("image"),onError:()=>toggleNeedImage(!1)})}),!needImage&&(0,jsx_runtime.jsx)("span",{className:cx("content"),children})]})}Avatar.displayName="Avatar";try{Avatar.displayName="Avatar",Avatar.__docgenInfo={description:"Аватар - блок для репрезентации пользователя с помощью картинки, инициалов или иконки-заглушки.",displayName:"Avatar",props:{className:{defaultValue:null,description:"Класс.",name:"className",required:!1,type:{name:"string | undefined"}},src:{defaultValue:null,description:"Изображение.",name:"src",required:!1,type:{name:"string | undefined"}},style:{defaultValue:null,description:"Стили.",name:"style",required:!1,type:{name:"AvatarStyle | undefined"}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},"data-testid":{defaultValue:null,description:"Идентификатор для систем автоматизированного тестирования.",name:"data-testid",required:!1,type:{name:"string | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/avatar/avatar.tsx#Avatar"]={docgenInfo:Avatar.__docgenInfo,name:"Avatar",path:"src/avatar/avatar.tsx#Avatar"})}catch(__react_docgen_typescript_loader_error){}var Person=__webpack_require__("./node_modules/@sima-land/ui-quarks/icons/24x24/Stroked/Person.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),utils_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/avatar/utils.module.scss"),utils_module_options={};utils_module_options.styleTagTransform=styleTagTransform_default(),utils_module_options.setAttributes=setAttributesWithoutAttributes_default(),utils_module_options.insert=insertBySelector_default().bind(null,"head"),utils_module_options.domAPI=styleDomAPI_default(),utils_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(utils_module.Z,utils_module_options);const avatar_utils_module=utils_module.Z&&utils_module.Z.locals?utils_module.Z.locals:void 0,USER_AVATAR_COLOR_TOKENS=["#eb8585","#fda09b","#f49bb1","#ffd785","#ffbb85","#89d7c7","#85e5ac","#b5ef90","#93c4ee","#85caf5","#85ddea","#b3c1c7","#dc9bd5","#b4a8f0","#c999e9"];function getUserAvatarProps({id,name,image},customProps){return{src:image,children:getNameInitials(name)||(0,jsx_runtime.jsx)(Person.Z,{...getAvatarIconProps()}),...customProps,className:classnames_default()(avatar_utils_module.user,customProps?.className),style:{"--avatar-color":id?getUserAvatarColor(`${id}`):void 0,...customProps?.style}}}function getUserAvatarColor(identity){let total=0;for(let i=0;i<identity.length;i++)total+=identity.charCodeAt(i);return USER_AVATAR_COLOR_TOKENS[total%USER_AVATAR_COLOR_TOKENS.length]}function getNameInitials(value){return"string"==typeof value?(value[0]??"").toUpperCase():""}function getAvatarIconProps(){return{className:avatar_utils_module.icon}}try{getUserAvatarProps.displayName="getUserAvatarProps",getUserAvatarProps.__docgenInfo={description:"Возвращает свойства для аватара пользователя.",displayName:"getUserAvatarProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/avatar/utils.tsx#getUserAvatarProps"]={docgenInfo:getUserAvatarProps.__docgenInfo,name:"getUserAvatarProps",path:"src/avatar/utils.tsx#getUserAvatarProps"})}catch(__react_docgen_typescript_loader_error){}try{getUserAvatarColor.displayName="getUserAvatarColor",getUserAvatarColor.__docgenInfo={description:"Возвращает цвет аватара текущего пользователя.",displayName:"getUserAvatarColor",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/avatar/utils.tsx#getUserAvatarColor"]={docgenInfo:getUserAvatarColor.__docgenInfo,name:"getUserAvatarColor",path:"src/avatar/utils.tsx#getUserAvatarColor"})}catch(__react_docgen_typescript_loader_error){}try{getNameInitials.displayName="getNameInitials",getNameInitials.__docgenInfo={description:"Формирует инициалы имени.",displayName:"getNameInitials",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/avatar/utils.tsx#getNameInitials"]={docgenInfo:getNameInitials.__docgenInfo,name:"getNameInitials",path:"src/avatar/utils.tsx#getNameInitials"})}catch(__react_docgen_typescript_loader_error){}try{getAvatarIconProps.displayName="getAvatarIconProps",getAvatarIconProps.__docgenInfo={description:"Возвращает свойства для иконки внутри аватара.",displayName:"getAvatarIconProps",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/avatar/utils.tsx#getAvatarIconProps"]={docgenInfo:getAvatarIconProps.__docgenInfo,name:"getAvatarIconProps",path:"src/avatar/utils.tsx#getAvatarIconProps"})}catch(__react_docgen_typescript_loader_error){}const person_namespaceObject=__webpack_require__.p+"static/media/person.31d4a04d.jpg",dog_namespaceObject=__webpack_require__.p+"static/media/dog.d3680b53.png";const index_stories={title:"common/Avatar",component:Avatar,parameters:{storySource:{source:"import { Avatar, getNameInitials, getAvatarIconProps, getUserAvatarProps } from '@sima-land/ui-nucleons/avatar';\nimport person from './person.jpg';\nimport dog from './dog.png';\nimport PersonSVG from '@sima-land/ui-quarks/icons/24x24/Stroked/Person';\nexport default {\n  title: 'common/Avatar',\n  component: Avatar,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function WithImage() {\n  return <>\n      <Avatar src={person} />\n    </>;\n}\nWithImage.storyName = 'Картинка';\nexport function WithPNG() {\n  return <>\n      <Avatar src={dog} />\n    </>;\n}\nWithPNG.storyName = 'Картинка PNG';\nexport function WithInitials() {\n  return <>\n      <Avatar>{getNameInitials('Александр Пушкин')}</Avatar>\n    </>;\n}\nWithInitials.storyName = 'Инициалы';\nexport function WithIcon() {\n  return <>\n      <Avatar>\n        <PersonSVG {...getAvatarIconProps()} />\n      </Avatar>\n    </>;\n}\nWithIcon.storyName = 'Иконка';\nexport function WithCustomColors() {\n  return <>\n      <Avatar style={{\n      '--avatar-color': '#9b59b6',\n      '--avatar-text-color': '#fff'\n    }}>А</Avatar>\n    </>;\n}\nWithCustomColors.storyName = 'Свои цвета';\nexport function WithCustomSize() {\n  return <div style={{\n    display: 'flex',\n    gap: '16px'\n  }}>\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }} src={person} />\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }} src={dog} />\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }}>А</Avatar>\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }}>\n        <PersonSVG {...getAvatarIconProps()} />\n      </Avatar>\n    </div>;\n}\nWithCustomSize.storyName = 'Свой размер';\nexport function UserAvatar() {\n  return <>\n      <h4>Имя, фамилия и фото</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 1,\n      name: 'Лев Толстой',\n      image: person\n    })} />\n\n      <h4>Имя, фамилия и битое фото</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 2,\n      name: 'Лев Толстой',\n      image: '/broken-image.png'\n    })} />\n\n      <h4>Имя и фамилия</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 3,\n      name: 'Лев Толстой'\n    })} />\n\n      <h4>Только имя</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 4,\n      name: 'Лев'\n    })} />\n\n      <h4>Без данных</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 5,\n      name: undefined\n    })} />\n    </>;\n}\nUserAvatar.storyName = 'Аватар пользователя';\nWithImage.parameters = {\n  ...WithImage.parameters,\n  docs: {\n    ...WithImage.parameters?.docs,\n    source: {\n      originalSource: \"function WithImage() {\\n  return <>\\n      <Avatar src={person} />\\n    </>;\\n}\",\n      ...WithImage.parameters?.docs?.source\n    }\n  }\n};\nWithPNG.parameters = {\n  ...WithPNG.parameters,\n  docs: {\n    ...WithPNG.parameters?.docs,\n    source: {\n      originalSource: \"function WithPNG() {\\n  return <>\\n      <Avatar src={dog} />\\n    </>;\\n}\",\n      ...WithPNG.parameters?.docs?.source\n    }\n  }\n};\nWithInitials.parameters = {\n  ...WithInitials.parameters,\n  docs: {\n    ...WithInitials.parameters?.docs,\n    source: {\n      originalSource: \"function WithInitials() {\\n  return <>\\n      <Avatar>{getNameInitials('\\u0410\\u043B\\u0435\\u043A\\u0441\\u0430\\u043D\\u0434\\u0440 \\u041F\\u0443\\u0448\\u043A\\u0438\\u043D')}</Avatar>\\n    </>;\\n}\",\n      ...WithInitials.parameters?.docs?.source\n    }\n  }\n};\nWithIcon.parameters = {\n  ...WithIcon.parameters,\n  docs: {\n    ...WithIcon.parameters?.docs,\n    source: {\n      originalSource: \"function WithIcon() {\\n  return <>\\n      <Avatar>\\n        <PersonSVG {...getAvatarIconProps()} />\\n      </Avatar>\\n    </>;\\n}\",\n      ...WithIcon.parameters?.docs?.source\n    }\n  }\n};\nWithCustomColors.parameters = {\n  ...WithCustomColors.parameters,\n  docs: {\n    ...WithCustomColors.parameters?.docs,\n    source: {\n      originalSource: \"function WithCustomColors() {\\n  return <>\\n      <Avatar style={{\\n      '--avatar-color': '#9b59b6',\\n      '--avatar-text-color': '#fff'\\n    }}>\\u0410</Avatar>\\n    </>;\\n}\",\n      ...WithCustomColors.parameters?.docs?.source\n    }\n  }\n};\nWithCustomSize.parameters = {\n  ...WithCustomSize.parameters,\n  docs: {\n    ...WithCustomSize.parameters?.docs,\n    source: {\n      originalSource: \"function WithCustomSize() {\\n  return <div style={{\\n    display: 'flex',\\n    gap: '16px'\\n  }}>\\n      <Avatar style={{\\n      '--avatar-size': '128px'\\n    }} src={person} />\\n\\n      <Avatar style={{\\n      '--avatar-size': '128px'\\n    }} src={dog} />\\n\\n      <Avatar style={{\\n      '--avatar-size': '128px'\\n    }}>\\u0410</Avatar>\\n\\n      <Avatar style={{\\n      '--avatar-size': '128px'\\n    }}>\\n        <PersonSVG {...getAvatarIconProps()} />\\n      </Avatar>\\n    </div>;\\n}\",\n      ...WithCustomSize.parameters?.docs?.source\n    }\n  }\n};\nUserAvatar.parameters = {\n  ...UserAvatar.parameters,\n  docs: {\n    ...UserAvatar.parameters?.docs,\n    source: {\n      originalSource: \"function UserAvatar() {\\n  return <>\\n      <h4>\\u0418\\u043C\\u044F, \\u0444\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F \\u0438 \\u0444\\u043E\\u0442\\u043E</h4>\\n      <Avatar {...getUserAvatarProps({\\n      id: 1,\\n      name: '\\u041B\\u0435\\u0432 \\u0422\\u043E\\u043B\\u0441\\u0442\\u043E\\u0439',\\n      image: person\\n    })} />\\n\\n      <h4>\\u0418\\u043C\\u044F, \\u0444\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F \\u0438 \\u0431\\u0438\\u0442\\u043E\\u0435 \\u0444\\u043E\\u0442\\u043E</h4>\\n      <Avatar {...getUserAvatarProps({\\n      id: 2,\\n      name: '\\u041B\\u0435\\u0432 \\u0422\\u043E\\u043B\\u0441\\u0442\\u043E\\u0439',\\n      image: '/broken-image.png'\\n    })} />\\n\\n      <h4>\\u0418\\u043C\\u044F \\u0438 \\u0444\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F</h4>\\n      <Avatar {...getUserAvatarProps({\\n      id: 3,\\n      name: '\\u041B\\u0435\\u0432 \\u0422\\u043E\\u043B\\u0441\\u0442\\u043E\\u0439'\\n    })} />\\n\\n      <h4>\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E \\u0438\\u043C\\u044F</h4>\\n      <Avatar {...getUserAvatarProps({\\n      id: 4,\\n      name: '\\u041B\\u0435\\u0432'\\n    })} />\\n\\n      <h4>\\u0411\\u0435\\u0437 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445</h4>\\n      <Avatar {...getUserAvatarProps({\\n      id: 5,\\n      name: undefined\\n    })} />\\n    </>;\\n}\",\n      ...UserAvatar.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{"with-image":{startLoc:{col:7,line:12},endLoc:{col:1,line:16},startBody:{col:7,line:12},endBody:{col:1,line:16}},"with-png":{startLoc:{col:7,line:18},endLoc:{col:1,line:22},startBody:{col:7,line:18},endBody:{col:1,line:22}},"with-initials":{startLoc:{col:7,line:24},endLoc:{col:1,line:28},startBody:{col:7,line:24},endBody:{col:1,line:28}},"with-icon":{startLoc:{col:7,line:30},endLoc:{col:1,line:36},startBody:{col:7,line:30},endBody:{col:1,line:36}},"with-custom-colors":{startLoc:{col:7,line:38},endLoc:{col:1,line:45},startBody:{col:7,line:38},endBody:{col:1,line:45}},"with-custom-size":{startLoc:{col:7,line:47},endLoc:{col:1,line:70},startBody:{col:7,line:47},endBody:{col:1,line:70}},"user-avatar":{startLoc:{col:7,line:72},endLoc:{col:1,line:106},startBody:{col:7,line:72},endBody:{col:1,line:106}}}},layout:"padded"}},WithImage=function WithImage(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{src:person_namespaceObject})})};WithImage.storyName="Картинка";const WithPNG=function WithPNG(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{src:dog_namespaceObject})})};WithPNG.storyName="Картинка PNG";const WithInitials=function WithInitials(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{children:getNameInitials("Александр Пушкин")})})};WithInitials.storyName="Инициалы";const WithIcon=function WithIcon(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{children:(0,jsx_runtime.jsx)(Person.Z,{...getAvatarIconProps()})})})};WithIcon.storyName="Иконка";const WithCustomColors=function WithCustomColors(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Avatar,{style:{"--avatar-color":"#9b59b6","--avatar-text-color":"#fff"},children:"А"})})};WithCustomColors.storyName="Свои цвета";const WithCustomSize=function WithCustomSize(){return(0,jsx_runtime.jsxs)("div",{style:{display:"flex",gap:"16px"},children:[(0,jsx_runtime.jsx)(Avatar,{style:{"--avatar-size":"128px"},src:person_namespaceObject}),(0,jsx_runtime.jsx)(Avatar,{style:{"--avatar-size":"128px"},src:dog_namespaceObject}),(0,jsx_runtime.jsx)(Avatar,{style:{"--avatar-size":"128px"},children:"А"}),(0,jsx_runtime.jsx)(Avatar,{style:{"--avatar-size":"128px"},children:(0,jsx_runtime.jsx)(Person.Z,{...getAvatarIconProps()})})]})};WithCustomSize.displayName="WithCustomSize",WithCustomSize.storyName="Свой размер";const UserAvatar=function UserAvatar(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("h4",{children:"Имя, фамилия и фото"}),(0,jsx_runtime.jsx)(Avatar,{...getUserAvatarProps({id:1,name:"Лев Толстой",image:person_namespaceObject})}),(0,jsx_runtime.jsx)("h4",{children:"Имя, фамилия и битое фото"}),(0,jsx_runtime.jsx)(Avatar,{...getUserAvatarProps({id:2,name:"Лев Толстой",image:"/broken-image.png"})}),(0,jsx_runtime.jsx)("h4",{children:"Имя и фамилия"}),(0,jsx_runtime.jsx)(Avatar,{...getUserAvatarProps({id:3,name:"Лев Толстой"})}),(0,jsx_runtime.jsx)("h4",{children:"Только имя"}),(0,jsx_runtime.jsx)(Avatar,{...getUserAvatarProps({id:4,name:"Лев"})}),(0,jsx_runtime.jsx)("h4",{children:"Без данных"}),(0,jsx_runtime.jsx)(Avatar,{...getUserAvatarProps({id:5,name:void 0})})]})};UserAvatar.storyName="Аватар пользователя",WithImage.parameters={...WithImage.parameters,docs:{...WithImage.parameters?.docs,source:{originalSource:"function WithImage() {\n  return <>\n      <Avatar src={person} />\n    </>;\n}",...WithImage.parameters?.docs?.source}}},WithPNG.parameters={...WithPNG.parameters,docs:{...WithPNG.parameters?.docs,source:{originalSource:"function WithPNG() {\n  return <>\n      <Avatar src={dog} />\n    </>;\n}",...WithPNG.parameters?.docs?.source}}},WithInitials.parameters={...WithInitials.parameters,docs:{...WithInitials.parameters?.docs,source:{originalSource:"function WithInitials() {\n  return <>\n      <Avatar>{getNameInitials('Александр Пушкин')}</Avatar>\n    </>;\n}",...WithInitials.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"function WithIcon() {\n  return <>\n      <Avatar>\n        <PersonSVG {...getAvatarIconProps()} />\n      </Avatar>\n    </>;\n}",...WithIcon.parameters?.docs?.source}}},WithCustomColors.parameters={...WithCustomColors.parameters,docs:{...WithCustomColors.parameters?.docs,source:{originalSource:"function WithCustomColors() {\n  return <>\n      <Avatar style={{\n      '--avatar-color': '#9b59b6',\n      '--avatar-text-color': '#fff'\n    }}>А</Avatar>\n    </>;\n}",...WithCustomColors.parameters?.docs?.source}}},WithCustomSize.parameters={...WithCustomSize.parameters,docs:{...WithCustomSize.parameters?.docs,source:{originalSource:"function WithCustomSize() {\n  return <div style={{\n    display: 'flex',\n    gap: '16px'\n  }}>\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }} src={person} />\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }} src={dog} />\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }}>А</Avatar>\n\n      <Avatar style={{\n      '--avatar-size': '128px'\n    }}>\n        <PersonSVG {...getAvatarIconProps()} />\n      </Avatar>\n    </div>;\n}",...WithCustomSize.parameters?.docs?.source}}},UserAvatar.parameters={...UserAvatar.parameters,docs:{...UserAvatar.parameters?.docs,source:{originalSource:"function UserAvatar() {\n  return <>\n      <h4>Имя, фамилия и фото</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 1,\n      name: 'Лев Толстой',\n      image: person\n    })} />\n\n      <h4>Имя, фамилия и битое фото</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 2,\n      name: 'Лев Толстой',\n      image: '/broken-image.png'\n    })} />\n\n      <h4>Имя и фамилия</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 3,\n      name: 'Лев Толстой'\n    })} />\n\n      <h4>Только имя</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 4,\n      name: 'Лев'\n    })} />\n\n      <h4>Без данных</h4>\n      <Avatar {...getUserAvatarProps({\n      id: 5,\n      name: undefined\n    })} />\n    </>;\n}",...UserAvatar.parameters?.docs?.source}}};const __namedExportsOrder=["WithImage","WithPNG","WithInitials","WithIcon","WithCustomColors","WithCustomSize","UserAvatar"]},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/avatar/avatar.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,'.avatar-module__root__a11{display:flex;align-items:center;justify-content:center;position:relative;flex-grow:0;flex-shrink:0;border-radius:50%;overflow:hidden;width:var(--avatar-size, 72px);height:var(--avatar-size, 72px);color:var(--avatar-text-color, #212121)}.avatar-module__root__a11::before{position:absolute;top:0;left:0;width:100%;height:100%;content:"";display:block;background:var(--avatar-color, #f5f5f5);opacity:var(--avatar-color-opacity, 1)}.avatar-module__root__a11.avatar-module__image-overlay__a74::after{position:absolute;top:0;left:0;width:100%;height:100%;content:"";pointer-events:none;background:#000;opacity:.04}.avatar-module__image__d44{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.avatar-module__content__ab2{font-size:var(--avatar-font-size, calc(var(--avatar-size, 72px) / 3));position:relative;font-weight:600;white-space:nowrap;text-decoration:none}',"",{version:3,sources:["webpack://./src/avatar/avatar.module.scss"],names:[],mappings:"AAUA,0BACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,eAAA,CACA,8BAAA,CACA,+BAAA,CACA,uCAAA,CACA,kCAnBA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAiBE,UAAA,CACA,aAAA,CACA,uCAAA,CACA,sCAAA,CAEF,mEA1BA,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAwBE,UAAA,CACA,mBAAA,CACA,eAAA,CACA,WAAA,CAIJ,2BAnCE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,UAAA,CACA,WAAA,CAiCA,gBAAA,CAGF,6BACE,qEAAA,CACA,iBAAA,CACA,eAAA,CACA,kBAAA,CAGA,oBAAA",sourcesContent:["@use '../colors';\n\n@mixin layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.root {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  flex-grow: 0;\n  flex-shrink: 0;\n  border-radius: 50%;\n  overflow: hidden;\n  width: var(--avatar-size, 72px);\n  height: var(--avatar-size, 72px);\n  color: var(--avatar-text-color, #{colors.$basic-gray87});\n  &::before {\n    @include layer;\n    content: '';\n    display: block;\n    background: var(--avatar-color, #{colors.$basic-gray4});\n    opacity: var(--avatar-color-opacity, 1);\n  }\n  &.image-overlay::after {\n    @include layer;\n    content: '';\n    pointer-events: none;\n    background: #000;\n    opacity: 0.04;\n  }\n}\n\n.image {\n  @include layer;\n  object-fit: cover;\n}\n\n.content {\n  font-size: var(--avatar-font-size, calc(var(--avatar-size, 72px) / 3));\n  position: relative;\n  font-weight: 600;\n  white-space: nowrap;\n\n  // ВАЖНО: чтобы например обертка в виде ссылки не накидывала text-decoration: underline\n  text-decoration: none;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={root:"avatar-module__root__a11","image-overlay":"avatar-module__image-overlay__a74",image:"avatar-module__image__d44",content:"avatar-module__content__ab2"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/avatar/utils.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".utils-module__icon__ec4{fill:currentColor;width:calc(var(--avatar-size, 72px)/2);height:calc(var(--avatar-size, 72px)/2)}.utils-module__user__aee{--avatar-text-color: #fff}","",{version:3,sources:["webpack://./src/avatar/utils.module.scss"],names:[],mappings:"AAAA,yBACE,iBAAA,CACA,sCAAA,CACA,uCAAA,CAGF,yBACE,yBAAA",sourcesContent:[".icon {\n  fill: currentColor;\n  width: calc(var(--avatar-size, 72px) / 2);\n  height: calc(var(--avatar-size, 72px) / 2);\n}\n\n.user {\n  --avatar-text-color: #fff;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={icon:"utils-module__icon__ec4",user:"utils-module__user__aee"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);