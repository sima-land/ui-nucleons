declare module "*.jpg" {
  const value: string;
  export default value;
}
declare module "*.png" {
  const value: string;
  export default value;
}

// css-модули
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.m.css" {
  const classes: { [key: string]: string };
  export default classes;
}

// css-модули с синтаксисом SCSS
declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
declare module "*.m.scss" {
  const classes: { [key: string]: string };
  export default classes;
}
