// нужен тк без него тесты падают при первом прогоне из-за того что TS не может найти d.ts для scss-модуля
declare module '*.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
