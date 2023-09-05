"use strict";(self.webpackChunk_sima_land_ui_nucleons=self.webpackChunk_sima_land_ui_nucleons||[]).push([[3301],{"./src/timer/__stories__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,Styling:()=>Styling,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),formatDistanceToNowStrict=__webpack_require__("./node_modules/date-fns/esm/formatDistanceToNowStrict/index.js"),isAfter=__webpack_require__("./node_modules/date-fns/esm/isAfter/index.js"),isValid=__webpack_require__("./node_modules/date-fns/esm/isValid/index.js"),parseISO=__webpack_require__("./node_modules/date-fns/esm/parseISO/index.js");const UNITS=["day","hour","minute","second"],formatDistance=({days,hours,minutes,seconds})=>[days,...[hours%24,minutes%60,seconds%60].map((s=>`${s}`.padStart(2,"0")))].join(":"),getDistanceToNow=dateString=>{const date=(0,parseISO.Z)(dateString);let result={days:0,hours:0,minutes:0,seconds:0};if((0,isValid.Z)(date)&&!(0,isAfter.Z)(new Date,date)){const[days,hours,minutes,seconds]=UNITS.map((unit=>parseInt((0,formatDistanceToNowStrict.Z)(date,{unit,roundingMethod:"floor"}).replace(/\D/g,""))));result={days,hours,minutes,seconds}}return result};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Timer=({date,format=formatDistance,timeout=1e3})=>{const[distance,setDistance]=(0,react.useState)(getDistanceToNow(date));return(0,react.useEffect)((()=>{const timerId=setInterval((()=>{setDistance(getDistanceToNow(date))}),timeout);return setDistance(getDistanceToNow(date)),()=>clearInterval(timerId)}),[timeout]),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:format(distance)})};try{Timer.displayName="Timer",Timer.__docgenInfo={description:"Компонент для вывода оставшегося времени до целевой временной отметки.",displayName:"Timer",props:{date:{defaultValue:null,description:"Дата и время события.",name:"date",required:!0,type:{name:"string"}},format:{defaultValue:{value:"({ days, hours, minutes, seconds }: Distance): string =>\n  [days, ...[hours % 24, minutes % 60, seconds % 60].map(s => `${s}`.padStart(2, '0'))].join(':')"},description:"Должна отформатировать данные об оставшемся времени для вывода.",name:"format",required:!1,type:{name:"((d: Distance) => ReactNode) | undefined"}},timeout:{defaultValue:{value:"1000"},description:"Частота обновления таймера в миллисекундах.",name:"timeout",required:!1,type:{name:"number | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/timer/index.tsx#Timer"]={docgenInfo:Timer.__docgenInfo,name:"Timer",path:"src/timer/index.tsx#Timer"})}catch(__react_docgen_typescript_loader_error){}var formatISO=__webpack_require__("./node_modules/date-fns/esm/formatISO/index.js"),addMonths=__webpack_require__("./node_modules/date-fns/esm/addMonths/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js");const index_stories={title:"common/Timer",component:Timer,parameters:{storySource:{source:"import { Timer } from '@sima-land/ui-nucleons/timer';\nimport { addDays, addMonths, formatISO } from 'date-fns';\nexport default {\n  title: 'common/Timer',\n  component: Timer,\n  parameters: {\n    layout: 'padded'\n  }\n};\nexport function Primary() {\n  return <Timer date={formatISO(addMonths(new Date(), 1))} />;\n}\nPrimary.storyName = 'Простой пример';\nexport function Styling() {\n  const TimerPart = ({\n    label,\n    value\n  }: {\n    label: string;\n    value: number;\n  }) => <div style={{\n    textAlign: 'center'\n  }}>\n      <div>{`${value}`.padStart(2, '0')}</div>\n      <div style={{\n      fontSize: 14,\n      fontWeight: 'normal'\n    }}>{label}</div>\n    </div>;\n  const Divider = () => <div style={{\n    margin: '0 12px'\n  }}>:</div>;\n  return <Timer date={formatISO(addDays(new Date(), 5))} timeout={1000 * 60} format={({\n    days,\n    hours,\n    minutes\n  }) => <div style={{\n    display: 'flex',\n    fontSize: 28,\n    fontWeight: 'bold'\n  }}>\n          <TimerPart label='дней' value={Math.min(99, days)} />\n          <Divider />\n          <TimerPart label='часов' value={hours % 24} />\n          <Divider />\n          <TimerPart label='минут' value={minutes % 60} />\n        </div>} />;\n}\nStyling.storyName = 'Стилизация';\nPrimary.parameters = {\n  ...Primary.parameters,\n  docs: {\n    ...Primary.parameters?.docs,\n    source: {\n      originalSource: \"function Primary() {\\n  return <Timer date={formatISO(addMonths(new Date(), 1))} />;\\n}\",\n      ...Primary.parameters?.docs?.source\n    }\n  }\n};\nStyling.parameters = {\n  ...Styling.parameters,\n  docs: {\n    ...Styling.parameters?.docs,\n    source: {\n      originalSource: \"function Styling() {\\n  const TimerPart = ({\\n    label,\\n    value\\n  }: {\\n    label: string;\\n    value: number;\\n  }) => <div style={{\\n    textAlign: 'center'\\n  }}>\\n      <div>{`${value}`.padStart(2, '0')}</div>\\n      <div style={{\\n      fontSize: 14,\\n      fontWeight: 'normal'\\n    }}>{label}</div>\\n    </div>;\\n  const Divider = () => <div style={{\\n    margin: '0 12px'\\n  }}>:</div>;\\n  return <Timer date={formatISO(addDays(new Date(), 5))} timeout={1000 * 60} format={({\\n    days,\\n    hours,\\n    minutes\\n  }) => <div style={{\\n    display: 'flex',\\n    fontSize: 28,\\n    fontWeight: 'bold'\\n  }}>\\n          <TimerPart label='\\u0434\\u043D\\u0435\\u0439' value={Math.min(99, days)} />\\n          <Divider />\\n          <TimerPart label='\\u0447\\u0430\\u0441\\u043E\\u0432' value={hours % 24} />\\n          <Divider />\\n          <TimerPart label='\\u043C\\u0438\\u043D\\u0443\\u0442' value={minutes % 60} />\\n        </div>} />;\\n}\",\n      ...Styling.parameters?.docs?.source\n    }\n  }\n};",locationsMap:{primary:{startLoc:{col:7,line:10},endLoc:{col:1,line:12},startBody:{col:7,line:10},endBody:{col:1,line:12}},styling:{startLoc:{col:7,line:14},endLoc:{col:1,line:48},startBody:{col:7,line:14},endBody:{col:1,line:48}}}},layout:"padded"}},Primary=function Primary(){return(0,jsx_runtime.jsx)(Timer,{date:(0,formatISO.Z)((0,addMonths.Z)(new Date,1))})};Primary.displayName="Primary",Primary.storyName="Простой пример";const Styling=function Styling(){const TimerPart=({label,value})=>(0,jsx_runtime.jsxs)("div",{style:{textAlign:"center"},children:[(0,jsx_runtime.jsx)("div",{children:`${value}`.padStart(2,"0")}),(0,jsx_runtime.jsx)("div",{style:{fontSize:14,fontWeight:"normal"},children:label})]}),Divider=()=>(0,jsx_runtime.jsx)("div",{style:{margin:"0 12px"},children:":"});return(0,jsx_runtime.jsx)(Timer,{date:(0,formatISO.Z)((0,addDays.Z)(new Date,5)),timeout:6e4,format:({days,hours,minutes})=>(0,jsx_runtime.jsxs)("div",{style:{display:"flex",fontSize:28,fontWeight:"bold"},children:[(0,jsx_runtime.jsx)(TimerPart,{label:"дней",value:Math.min(99,days)}),(0,jsx_runtime.jsx)(Divider,{}),(0,jsx_runtime.jsx)(TimerPart,{label:"часов",value:hours%24}),(0,jsx_runtime.jsx)(Divider,{}),(0,jsx_runtime.jsx)(TimerPart,{label:"минут",value:minutes%60})]})})};Styling.displayName="Styling",Styling.storyName="Стилизация",Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"function Primary() {\n  return <Timer date={formatISO(addMonths(new Date(), 1))} />;\n}",...Primary.parameters?.docs?.source}}},Styling.parameters={...Styling.parameters,docs:{...Styling.parameters?.docs,source:{originalSource:"function Styling() {\n  const TimerPart = ({\n    label,\n    value\n  }: {\n    label: string;\n    value: number;\n  }) => <div style={{\n    textAlign: 'center'\n  }}>\n      <div>{`${value}`.padStart(2, '0')}</div>\n      <div style={{\n      fontSize: 14,\n      fontWeight: 'normal'\n    }}>{label}</div>\n    </div>;\n  const Divider = () => <div style={{\n    margin: '0 12px'\n  }}>:</div>;\n  return <Timer date={formatISO(addDays(new Date(), 5))} timeout={1000 * 60} format={({\n    days,\n    hours,\n    minutes\n  }) => <div style={{\n    display: 'flex',\n    fontSize: 28,\n    fontWeight: 'bold'\n  }}>\n          <TimerPart label='дней' value={Math.min(99, days)} />\n          <Divider />\n          <TimerPart label='часов' value={hours % 24} />\n          <Divider />\n          <TimerPart label='минут' value={minutes % 60} />\n        </div>} />;\n}",...Styling.parameters?.docs?.source}}};const __namedExportsOrder=["Primary","Styling"]}}]);