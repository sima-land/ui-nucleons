/*! For license information please see text-__stories__-index-stories.4b7a415b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[6887],{"./src/text/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AlignVariants:()=>AlignVariants,ColorVariants:()=>ColorVariants,Primary:()=>Primary,SizeVariants:()=>SizeVariants,Truncate:()=>Truncate,WeightVariants:()=>WeightVariants,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),colors=__webpack_require__("./src/styling/colors.ts"),utils=__webpack_require__("./src/styling/utils.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),fonts_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styling/fonts.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(fonts_module.Z,options);const styling_fonts_module=fonts_module.Z&&fonts_module.Z.locals?fonts_module.Z.locals:void 0,SIZES=new Set([12,14,16,20,24,32,48,64]),LINE_HEIGHTS=new Set([16,20,24,28,32,40,60,80]),WEIGHTS=new Set([400,600,700]),fonts_size=(0,utils.J)(styling_fonts_module,SIZES.has.bind(SIZES),"size-"),fonts_lineHeight=(0,utils.J)(styling_fonts_module,LINE_HEIGHTS.has.bind(LINE_HEIGHTS),"line-height-"),fonts_weight=(0,utils.J)(styling_fonts_module,WEIGHTS.has.bind(WEIGHTS),"weight-");var bind=__webpack_require__("./node_modules/classnames/bind.js"),bind_default=__webpack_require__.n(bind),text_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/text/text.module.scss"),text_module_options={};text_module_options.styleTagTransform=styleTagTransform_default(),text_module_options.setAttributes=setAttributesWithoutAttributes_default(),text_module_options.insert=insertBySelector_default().bind(null,"head"),text_module_options.domAPI=styleDomAPI_default(),text_module_options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(text_module.Z,text_module_options);const text_text_module=text_module.Z&&text_module.Z.locals?text_module.Z.locals:void 0;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const cx=bind_default().bind(text_text_module),defaultHeights={12:16,14:20,16:24,20:28,24:32,32:40,48:60,64:80},ALIGNS=new Set(["left","center","right","justify"]),Text=(0,react.memo)((0,react.forwardRef)((function Text({children,element:Container="span",size,lineHeight=size?defaultHeights[size]:void 0,align,color,nowrap,truncate,weight},ref){const needLineClamp="number"==typeof truncate&&truncate>0;return(0,jsx_runtime.jsx)(Container,{ref,className:cx([size&&fonts_size(size),lineHeight&&fonts_lineHeight(lineHeight),color&&(0,colors.$_)(color),weight&&fonts_weight(weight),align&&ALIGNS.has(align)&&`align-${align}`,nowrap&&"nowrap",!0===truncate&&"truncate",needLineClamp&&"line-clamp"]),style:needLineClamp?{WebkitLineClamp:truncate}:{},children})})));try{Text.displayName="Text",Text.__docgenInfo={description:"Блок с возможностью быстрой стилизации текста по дизайн-гайдам.",displayName:"Text",props:{align:{defaultValue:null,description:"Направление.",name:"align",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"center"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'}]}},children:{defaultValue:null,description:"Содержимое.",name:"children",required:!1,type:{name:"ReactNode"}},color:{defaultValue:null,description:"Ключ цвета из дизайн системы.",name:"color",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:'"basic-blue"'},{value:'"basic-gray87"'},{value:'"basic-gray76"'},{value:'"basic-gray66"'},{value:'"basic-gray54"'},{value:'"basic-gray38"'},{value:'"basic-gray24"'},{value:'"basic-gray12"'},{value:'"basic-gray8"'},{value:'"basic-gray4"'},{value:'"basic-gray2"'},{value:'"basic-white"'},{value:'"additional-deep-red"'},{value:'"additional-red"'},{value:'"additional-light-red"'},{value:'"additional-dark-teal"'},{value:'"additional-teal"'},{value:'"additional-green"'},{value:'"additional-light-green"'},{value:'"additional-lime"'},{value:'"additional-faded-green"'},{value:'"additional-pink"'},{value:'"additional-purple"'},{value:'"additional-violet"'},{value:'"additional-deep-purple"'},{value:'"additional-electric-blue"'},{value:'"additional-light-blue"'},{value:'"additional-cyan"'},{value:'"additional-sky"'},{value:'"additional-deep-orange"'},{value:'"additional-amber"'},{value:'"additional-yellow"'},{value:'"additional-gold"'},{value:'"additional-brown"'},{value:'"additional-blue-gray"'},{value:'"additional-deep-blue"'},{value:'"additional-dark-blue"'},{value:'"additional-unlit-blue"'}]}},element:{defaultValue:null,description:"Элемент, который будет использован как обертка.",name:"element",required:!1,type:{name:"string | ComponentClass<{ className: string; style: CSSProperties; children?: ReactNode; } & RefAttributes<any>, any> | FunctionComponent<...> | undefined"}},lineHeight:{defaultValue:null,description:"Межстрочный интервал.",name:"lineHeight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"28"},{value:"40"},{value:"60"},{value:"80"}]}},nowrap:{defaultValue:null,description:'Нужно ли добавить стиль "white-space: nowrap".',name:"nowrap",required:!1,type:{name:"boolean | undefined"}},size:{defaultValue:null,description:"Размер.",name:"size",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"12"},{value:"14"},{value:"16"},{value:"20"},{value:"24"},{value:"32"},{value:"48"},{value:"64"}]}},truncate:{defaultValue:null,description:"Нужно ли обрезать текст многоточием в одну строку.",name:"truncate",required:!1,type:{name:"number | boolean | undefined"}},weight:{defaultValue:null,description:"Начертание.",name:"weight",required:!1,type:{name:"enum",value:[{value:"undefined"},{value:"400"},{value:"600"},{value:"700"}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/text/text.tsx#Text"]={docgenInfo:Text.__docgenInfo,name:"Text",path:"src/text/text.tsx#Text"})}catch(__react_docgen_typescript_loader_error){}var src_colors=__webpack_require__("./src/colors/index.ts");const index_stories={title:"deprecated/Text",component:Text,parameters:{storySource:{source:"import { Text, ALIGNS } from '@sima-land/ui-nucleons/text';\nimport { COLORS } from '@sima-land/ui-nucleons/colors';\nimport { SIZES, WEIGHTS } from '@sima-land/ui-nucleons/styling/fonts';\nexport default {\n  title: 'deprecated/Text',\n  component: Text,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <div style={{\n    maxWidth: 320\n  }}>\n      <h3>Just text</h3>\n      <Text>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\n      </Text>\n\n      <h3>Truncated</h3>\n      <Text element='div' truncate>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\n      </Text>\n\n      <h3>nowrap: true</h3>\n      <div style={{\n      width: 200,\n      border: '1px solid #f00'\n    }}>\n        <Text nowrap>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed\n          veritatis.\n        </Text>\n      </div>\n    </div>;\n}\nPrimary.storyName = 'Простой пример';\nexport function SizeVariants() {\n  return <>\n      {[...SIZES].map((size, index) => <div key={index} style={{\n      marginBottom: 24\n    }}>\n          <Text size={size}>Text with size {size} px</Text>\n        </div>)}\n    </>;\n}\nSizeVariants.storyName = 'Варианты размеров';\nexport function ColorVariants() {\n  return <>\n      {[...(COLORS.keys() as any)].map((color, index) => <div key={index}>\n          <Text size={16} color={color} weight={700}>\n            {color}\n          </Text>\n        </div>)}\n    </>;\n}\nColorVariants.storyName = 'Варианты цветов';\nexport function WeightVariants() {\n  return <>\n      {[...WEIGHTS].map((weight, index) => <div key={index}>\n          <Text size={16} weight={weight}>\n            Текст с насыщеностью начертания: {weight}\n          </Text>\n        </div>)}\n    </>;\n}\nWeightVariants.storyName = 'Варианты начертания';\nexport function AlignVariants() {\n  return <>\n      {[...ALIGNS].map((align, index) => <div key={index} style={{\n      maxWidth: 320\n    }}>\n          <h3>Text with align {align}</h3>\n          <Text element='div' size={16} align={align}>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid\n            iusto nam recusandae iure saepe pariatur harum sed.\n          </Text>\n        </div>)}\n    </>;\n}\nAlignVariants.storyName = 'Варианты выравнивания';\nexport function Truncate() {\n  return <div style={{\n    maxWidth: '320px'\n  }}>\n      <h4>\n        <code>truncate=true</code>\n      </h4>\n      <Text truncate>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n\n      <h4>\n        <code>truncate=2</code>\n      </h4>\n      <Text truncate={2}>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n\n      <h4>\n        <code>truncate=3</code>\n      </h4>\n      <Text truncate={3}>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n    </div>;\n}\nTruncate.storyName = 'Обрезка текста';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <div style={{\\n    maxWidth: 320\\n  }}>\\n      <h3>Just text</h3>\\n      <Text>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\\n      </Text>\\n\\n      <h3>Truncated</h3>\\n      <Text element='div' truncate>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\\n      </Text>\\n\\n      <h3>nowrap: true</h3>\\n      <div style={{\\n      width: 200,\\n      border: '1px solid #f00'\\n    }}>\\n        <Text nowrap>\\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed\\n          veritatis.\\n        </Text>\\n      </div>\\n    </div>;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nSizeVariants.parameters = {\n  ...SizeVariants.parameters,\n  docs: {\n    ...SizeVariants.parameters?.docs,\n    source: {\n      originalSource: \"function SizeVariants() {\\n  return <>\\n      {[...SIZES].map((size, index) => <div key={index} style={{\\n      marginBottom: 24\\n    }}>\\n          <Text size={size}>Text with size {size} px</Text>\\n        </div>)}\\n    </>;\\n}\",\n      ...SizeVariants.parameters?.docs?.source\n    }\n  }\n};\nColorVariants.parameters = {\n  ...ColorVariants.parameters,\n  docs: {\n    ...ColorVariants.parameters?.docs,\n    source: {\n      originalSource: \"function ColorVariants() {\\n  return <>\\n      {[...(COLORS.keys() as any)].map((color, index) => <div key={index}>\\n          <Text size={16} color={color} weight={700}>\\n            {color}\\n          </Text>\\n        </div>)}\\n    </>;\\n}\",\n      ...ColorVariants.parameters?.docs?.source\n    }\n  }\n};\nWeightVariants.parameters = {\n  ...WeightVariants.parameters,\n  docs: {\n    ...WeightVariants.parameters?.docs,\n    source: {\n      originalSource: \"function WeightVariants() {\\n  return <>\\n      {[...WEIGHTS].map((weight, index) => <div key={index}>\\n          <Text size={16} weight={weight}>\\n            \\u0422\\u0435\\u043A\\u0441\\u0442 \\u0441 \\u043D\\u0430\\u0441\\u044B\\u0449\\u0435\\u043D\\u043E\\u0441\\u0442\\u044C\\u044E \\u043D\\u0430\\u0447\\u0435\\u0440\\u0442\\u0430\\u043D\\u0438\\u044F: {weight}\\n          </Text>\\n        </div>)}\\n    </>;\\n}\",\n      ...WeightVariants.parameters?.docs?.source\n    }\n  }\n};\nAlignVariants.parameters = {\n  ...AlignVariants.parameters,\n  docs: {\n    ...AlignVariants.parameters?.docs,\n    source: {\n      originalSource: \"function AlignVariants() {\\n  return <>\\n      {[...ALIGNS].map((align, index) => <div key={index} style={{\\n      maxWidth: 320\\n    }}>\\n          <h3>Text with align {align}</h3>\\n          <Text element='div' size={16} align={align}>\\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid\\n            iusto nam recusandae iure saepe pariatur harum sed.\\n          </Text>\\n        </div>)}\\n    </>;\\n}\",\n      ...AlignVariants.parameters?.docs?.source\n    }\n  }\n};\nTruncate.parameters = {\n  ...Truncate.parameters,\n  docs: {\n    ...Truncate.parameters?.docs,\n    source: {\n      originalSource: \"function Truncate() {\\n  return <div style={{\\n    maxWidth: '320px'\\n  }}>\\n      <h4>\\n        <code>truncate=true</code>\\n      </h4>\\n      <Text truncate>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\\n        labore eligendi officia a natus.\\n      </Text>\\n\\n      <h4>\\n        <code>truncate=2</code>\\n      </h4>\\n      <Text truncate={2}>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\\n        labore eligendi officia a natus.\\n      </Text>\\n\\n      <h4>\\n        <code>truncate=3</code>\\n      </h4>\\n      <Text truncate={3}>\\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\\n        labore eligendi officia a natus.\\n      </Text>\\n    </div>;\\n}\",\n      ...Truncate.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:11},endLoc:{col:1,line:36},startBody:{col:7,line:11},endBody:{col:1,line:36}},"size-variants":{startLoc:{col:7,line:38},endLoc:{col:1,line:46},startBody:{col:7,line:38},endBody:{col:1,line:46}},"color-variants":{startLoc:{col:7,line:48},endLoc:{col:1,line:56},startBody:{col:7,line:48},endBody:{col:1,line:56}},"weight-variants":{startLoc:{col:7,line:58},endLoc:{col:1,line:66},startBody:{col:7,line:58},endBody:{col:1,line:66}},"align-variants":{startLoc:{col:7,line:68},endLoc:{col:1,line:80},startBody:{col:7,line:68},endBody:{col:1,line:80}},truncate:{startLoc:{col:7,line:82},endLoc:{col:1,line:113},startBody:{col:7,line:82},endBody:{col:1,line:113}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsxs)("div",{style:{maxWidth:320},children:[(0,jsx_runtime.jsx)("h3",{children:"Just text"}),(0,jsx_runtime.jsx)(Text,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis."}),(0,jsx_runtime.jsx)("h3",{children:"Truncated"}),(0,jsx_runtime.jsx)(Text,{element:"div",truncate:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis."}),(0,jsx_runtime.jsx)("h3",{children:"nowrap: true"}),(0,jsx_runtime.jsx)("div",{style:{width:200,border:"1px solid #f00"},children:(0,jsx_runtime.jsx)(Text,{nowrap:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis."})})]})};Primary.displayName="Primary",Primary.storyName="Простой пример";const SizeVariants=function SizeVariants(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[...SIZES].map(((size,index)=>(0,jsx_runtime.jsx)("div",{style:{marginBottom:24},children:(0,jsx_runtime.jsxs)(Text,{size,children:["Text with size ",size," px"]})},index)))})};SizeVariants.storyName="Варианты размеров";const ColorVariants=function ColorVariants(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[...src_colors.D.keys()].map(((color,index)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Text,{size:16,color,weight:700,children:color})},index)))})};ColorVariants.storyName="Варианты цветов";const WeightVariants=function WeightVariants(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[...WEIGHTS].map(((weight,index)=>(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)(Text,{size:16,weight,children:["Текст с насыщеностью начертания: ",weight]})},index)))})};WeightVariants.storyName="Варианты начертания";const AlignVariants=function AlignVariants(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:[...ALIGNS].map(((align,index)=>(0,jsx_runtime.jsxs)("div",{style:{maxWidth:320},children:[(0,jsx_runtime.jsxs)("h3",{children:["Text with align ",align]}),(0,jsx_runtime.jsx)(Text,{element:"div",size:16,align,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid iusto nam recusandae iure saepe pariatur harum sed."})]},index)))})};AlignVariants.storyName="Варианты выравнивания";const Truncate=function Truncate(){return(0,jsx_runtime.jsxs)("div",{style:{maxWidth:"320px"},children:[(0,jsx_runtime.jsx)("h4",{children:(0,jsx_runtime.jsx)("code",{children:"truncate=true"})}),(0,jsx_runtime.jsx)(Text,{truncate:!0,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea, excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim labore eligendi officia a natus."}),(0,jsx_runtime.jsx)("h4",{children:(0,jsx_runtime.jsx)("code",{children:"truncate=2"})}),(0,jsx_runtime.jsx)(Text,{truncate:2,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea, excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim labore eligendi officia a natus."}),(0,jsx_runtime.jsx)("h4",{children:(0,jsx_runtime.jsx)("code",{children:"truncate=3"})}),(0,jsx_runtime.jsx)(Text,{truncate:3,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea, excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim labore eligendi officia a natus."})]})};Truncate.displayName="Truncate",Truncate.storyName="Обрезка текста",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <div style={{\n    maxWidth: 320\n  }}>\n      <h3>Just text</h3>\n      <Text>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\n      </Text>\n\n      <h3>Truncated</h3>\n      <Text element='div' truncate>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed veritatis.\n      </Text>\n\n      <h3>nowrap: true</h3>\n      <div style={{\n      width: 200,\n      border: '1px solid #f00'\n    }}>\n        <Text nowrap>\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laboriosam sed\n          veritatis.\n        </Text>\n      </div>\n    </div>;\n}",...Primary.parameters?.docs?.source}}},SizeVariants.parameters={...SizeVariants.parameters,docs:{...SizeVariants.parameters?.docs,source:{originalSource:"function SizeVariants() {\n  return <>\n      {[...SIZES].map((size, index) => <div key={index} style={{\n      marginBottom: 24\n    }}>\n          <Text size={size}>Text with size {size} px</Text>\n        </div>)}\n    </>;\n}",...SizeVariants.parameters?.docs?.source}}},ColorVariants.parameters={...ColorVariants.parameters,docs:{...ColorVariants.parameters?.docs,source:{originalSource:"function ColorVariants() {\n  return <>\n      {[...(COLORS.keys() as any)].map((color, index) => <div key={index}>\n          <Text size={16} color={color} weight={700}>\n            {color}\n          </Text>\n        </div>)}\n    </>;\n}",...ColorVariants.parameters?.docs?.source}}},WeightVariants.parameters={...WeightVariants.parameters,docs:{...WeightVariants.parameters?.docs,source:{originalSource:"function WeightVariants() {\n  return <>\n      {[...WEIGHTS].map((weight, index) => <div key={index}>\n          <Text size={16} weight={weight}>\n            Текст с насыщеностью начертания: {weight}\n          </Text>\n        </div>)}\n    </>;\n}",...WeightVariants.parameters?.docs?.source}}},AlignVariants.parameters={...AlignVariants.parameters,docs:{...AlignVariants.parameters?.docs,source:{originalSource:"function AlignVariants() {\n  return <>\n      {[...ALIGNS].map((align, index) => <div key={index} style={{\n      maxWidth: 320\n    }}>\n          <h3>Text with align {align}</h3>\n          <Text element='div' size={16} align={align}>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, ex eos aliquid\n            iusto nam recusandae iure saepe pariatur harum sed.\n          </Text>\n        </div>)}\n    </>;\n}",...AlignVariants.parameters?.docs?.source}}},Truncate.parameters={...Truncate.parameters,docs:{...Truncate.parameters?.docs,source:{originalSource:"function Truncate() {\n  return <div style={{\n    maxWidth: '320px'\n  }}>\n      <h4>\n        <code>truncate=true</code>\n      </h4>\n      <Text truncate>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n\n      <h4>\n        <code>truncate=2</code>\n      </h4>\n      <Text truncate={2}>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n\n      <h4>\n        <code>truncate=3</code>\n      </h4>\n      <Text truncate={3}>\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur, suscipit esse ea,\n        excepturi harum perferendis culpa aspernatur deleniti illo sunt atque reiciendis in enim\n        labore eligendi officia a natus.\n      </Text>\n    </div>;\n}",...Truncate.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","SizeVariants","ColorVariants","WeightVariants","AlignVariants","Truncate"]},"./src/colors/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>COLORS});const COLORS=new Map(Object.entries({"basic-blue":"#1f84db","basic-gray87":"#212121","basic-gray76":"#3a3a3b","basic-gray66":"#545455","basic-gray54":"#757575","basic-gray38":"#9e9e9e","basic-gray24":"#c2c2c2","basic-gray12":"#e0e0e0","basic-gray8":"#ebebeb","basic-gray4":"#f5f5f5","basic-gray2":"#fafafa","basic-white":"#fff","additional-deep-red":"#d50000","additional-red":"#fb3a2f","additional-light-red":"#feebea","additional-dark-teal":"#089176","additional-teal":"#09ab8b","additional-green":"#00c853","additional-light-green":"#64dd17","additional-lime":"#aeea00","additional-faded-green":"#eff9ea","additional-pink":"#e82e5c","additional-purple":"#b52ea8","additional-violet":"#902bd0","additional-deep-purple":"#634bdf","additional-electric-blue":"#2962ff","additional-light-blue":"#0091ea","additional-cyan":"#00b8d4","additional-sky":"#e4f1f9","additional-deep-orange":"#ff7200","additional-amber":"#ffab00","additional-yellow":"#ffd600","additional-gold":"#d5a43b","additional-brown":"#795548","additional-blue-gray":"#607d8b","additional-deep-blue":"#00599d","additional-dark-blue":"#002b41","additional-unlit-blue":"#1b75c2"}))},"./node_modules/classnames/bind.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(this&&this[arg]||arg);else if(Array.isArray(arg))classes.push(classNames.apply(this,arg));else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(this&&this[key]||key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/styling/fonts.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".fonts-module__size-12__c59{font-size:12px}.fonts-module__size-14__f5f{font-size:14px}.fonts-module__size-16__ae5{font-size:16px}.fonts-module__size-20__a89{font-size:20px}.fonts-module__size-24__b93{font-size:24px}.fonts-module__size-32__a05{font-size:32px}.fonts-module__size-48__bff{font-size:48px}.fonts-module__size-64__e74{font-size:64px}.fonts-module__line-height-16__ae4{line-height:16px}.fonts-module__line-height-20__c4c{line-height:20px}.fonts-module__line-height-24__d7d{line-height:24px}.fonts-module__line-height-28__f1f{line-height:28px}.fonts-module__line-height-32__bd4{line-height:32px}.fonts-module__line-height-40__e5c{line-height:40px}.fonts-module__line-height-60__c1a{line-height:60px}.fonts-module__line-height-80__e11{line-height:80px}.fonts-module__weight-400__f42{font-weight:400}.fonts-module__weight-600__b7f{font-weight:600}.fonts-module__weight-700__c9b{font-weight:700}","",{version:3,sources:["webpack://./src/styling/fonts.module.scss"],names:[],mappings:"AAKE,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CADF,4BACE,cAAA,CAKF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CADF,mCACE,gBAAA,CAOF,+BACE,eAJM,CAGR,+BACE,eAJM,CAGR,+BACE,eAJM",sourcesContent:["$sizes: (12, 14, 16, 20, 24, 32, 48, 64);\n\n$heights: (16, 20, 24, 28, 32, 40, 60, 80);\n\n@each $size in $sizes {\n  .size-#{$size} {\n    font-size: #{$size}px;\n  }\n}\n\n@each $height in $heights {\n  .line-height-#{$height} {\n    line-height: #{$height}px;\n  }\n}\n\n$weights: (400, 600, 700);\n\n@each $weight in $weights {\n  .weight-#{$weight} {\n    font-weight: $weight;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={"size-12":"fonts-module__size-12__c59","size-14":"fonts-module__size-14__f5f","size-16":"fonts-module__size-16__ae5","size-20":"fonts-module__size-20__a89","size-24":"fonts-module__size-24__b93","size-32":"fonts-module__size-32__a05","size-48":"fonts-module__size-48__bff","size-64":"fonts-module__size-64__e74","line-height-16":"fonts-module__line-height-16__ae4","line-height-20":"fonts-module__line-height-20__c4c","line-height-24":"fonts-module__line-height-24__d7d","line-height-28":"fonts-module__line-height-28__f1f","line-height-32":"fonts-module__line-height-32__bd4","line-height-40":"fonts-module__line-height-40__e5c","line-height-60":"fonts-module__line-height-60__c1a","line-height-80":"fonts-module__line-height-80__e11","weight-400":"fonts-module__weight-400__f42","weight-600":"fonts-module__weight-600__b7f","weight-700":"fonts-module__weight-700__c9b"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[15].use[1]!./node_modules/sass-loader/dist/cjs.js!./src/text/text.module.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".text-module__truncate__acd{display:block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.text-module__line-clamp__c5c{display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}.text-module__nowrap__dcb{white-space:nowrap}.text-module__align-left__e7f{text-align:left}.text-module__align-right__ef3{text-align:right}.text-module__align-center__a84{text-align:center}.text-module__align-justify__aaa{text-align:justify}","",{version:3,sources:["webpack://./src/text/text.module.scss"],names:[],mappings:"AAAA,4BACE,aAAA,CACA,cAAA,CACA,eAAA,CACA,sBAAA,CACA,kBAAA,CAGF,8BACE,mBAAA,CACA,2BAAA,CACA,eAAA,CAGF,0BACE,kBAAA,CAMA,8BACE,eAJK,CAGP,+BACE,gBAJK,CAGP,gCACE,iBAJK,CAGP,iCACE,kBAJK",sourcesContent:[".truncate {\n  display: block;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.line-clamp {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.nowrap {\n  white-space: nowrap;\n}\n\n$aligns: (left, right, center, justify);\n\n@each $align in $aligns {\n  .align-#{$align} {\n    text-align: $align;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={truncate:"text-module__truncate__acd","line-clamp":"text-module__line-clamp__c5c",nowrap:"text-module__nowrap__dcb","align-left":"text-module__align-left__e7f","align-right":"text-module__align-right__ef3","align-center":"text-module__align-center__a84","align-justify":"text-module__align-justify__aaa"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/sourceMaps.js":module=>{"use strict";module.exports=function(item){var content=item[1],cssMapping=item[3];if(!cssMapping)return content;if("function"==typeof btoa){var base64=btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping)))),data="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64),sourceMapping="/*# ".concat(data," */");return[content].concat([sourceMapping]).join("\n")}return[content].join("\n")}},"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":module=>{"use strict";var stylesInDOM=[];function getIndexByIdentifier(identifier){for(var result=-1,i=0;i<stylesInDOM.length;i++)if(stylesInDOM[i].identifier===identifier){result=i;break}return result}function modulesToDom(list,options){for(var idCountMap={},identifiers=[],i=0;i<list.length;i++){var item=list[i],id=options.base?item[0]+options.base:item[0],count=idCountMap[id]||0,identifier="".concat(id," ").concat(count);idCountMap[id]=count+1;var indexByIdentifier=getIndexByIdentifier(identifier),obj={css:item[1],media:item[2],sourceMap:item[3],supports:item[4],layer:item[5]};if(-1!==indexByIdentifier)stylesInDOM[indexByIdentifier].references++,stylesInDOM[indexByIdentifier].updater(obj);else{var updater=addElementStyle(obj,options);options.byIndex=i,stylesInDOM.splice(i,0,{identifier,updater,references:1})}identifiers.push(identifier)}return identifiers}function addElementStyle(obj,options){var api=options.domAPI(options);api.update(obj);return function updater(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap&&newObj.supports===obj.supports&&newObj.layer===obj.layer)return;api.update(obj=newObj)}else api.remove()}}module.exports=function(list,options){var lastIdentifiers=modulesToDom(list=list||[],options=options||{});return function update(newList){newList=newList||[];for(var i=0;i<lastIdentifiers.length;i++){var index=getIndexByIdentifier(lastIdentifiers[i]);stylesInDOM[index].references--}for(var newLastIdentifiers=modulesToDom(newList,options),_i=0;_i<lastIdentifiers.length;_i++){var _index=getIndexByIdentifier(lastIdentifiers[_i]);0===stylesInDOM[_index].references&&(stylesInDOM[_index].updater(),stylesInDOM.splice(_index,1))}lastIdentifiers=newLastIdentifiers}}},"./node_modules/style-loader/dist/runtime/insertBySelector.js":module=>{"use strict";var memo={};module.exports=function insertBySelector(insert,style){var target=function getTarget(target){if(void 0===memo[target]){var styleTarget=document.querySelector(target);if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement)try{styleTarget=styleTarget.contentDocument.head}catch(e){styleTarget=null}memo[target]=styleTarget}return memo[target]}(insert);if(!target)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");target.appendChild(style)}},"./node_modules/style-loader/dist/runtime/insertStyleElement.js":module=>{"use strict";module.exports=function insertStyleElement(options){var element=document.createElement("style");return options.setAttributes(element,options.attributes),options.insert(element,options.options),element}},"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=function setAttributesWithoutAttributes(styleElement){var nonce=__webpack_require__.nc;nonce&&styleElement.setAttribute("nonce",nonce)}},"./node_modules/style-loader/dist/runtime/styleDomAPI.js":module=>{"use strict";module.exports=function domAPI(options){if("undefined"==typeof document)return{update:function update(){},remove:function remove(){}};var styleElement=options.insertStyleElement(options);return{update:function update(obj){!function apply(styleElement,options,obj){var css="";obj.supports&&(css+="@supports (".concat(obj.supports,") {")),obj.media&&(css+="@media ".concat(obj.media," {"));var needLayer=void 0!==obj.layer;needLayer&&(css+="@layer".concat(obj.layer.length>0?" ".concat(obj.layer):""," {")),css+=obj.css,needLayer&&(css+="}"),obj.media&&(css+="}"),obj.supports&&(css+="}");var sourceMap=obj.sourceMap;sourceMap&&"undefined"!=typeof btoa&&(css+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))," */")),options.styleTagTransform(css,styleElement,options.options)}(styleElement,options,obj)},remove:function remove(){!function removeStyleElement(styleElement){if(null===styleElement.parentNode)return!1;styleElement.parentNode.removeChild(styleElement)}(styleElement)}}}},"./node_modules/style-loader/dist/runtime/styleTagTransform.js":module=>{"use strict";module.exports=function styleTagTransform(css,styleElement){if(styleElement.styleSheet)styleElement.styleSheet.cssText=css;else{for(;styleElement.firstChild;)styleElement.removeChild(styleElement.firstChild);styleElement.appendChild(document.createTextNode(css))}}}}]);