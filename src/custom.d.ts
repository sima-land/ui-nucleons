declare module '*.png' {
  export default string;
}

// нужен тк без него тесты падают при первом прогоне из-за того что TS не может найти d.ts для scss-модуля
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGSVGElement>>;
  export default content;
}
