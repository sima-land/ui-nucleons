declare module '*.png' {
  export default string;
}

// нужно тк без него тесты падают при первом прогоне из-за того что TS не может найти d.ts для scss-модуля

// css-модули
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// css-модули с синтаксисом SCSS
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

// svg как react-компоненты
declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
