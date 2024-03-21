import { readFile, writeFile } from 'fs/promises';
import Handlebars from 'handlebars';

const colorsByGroups = {
  basic: {
    blue: '#1f84db',
    gray87: '#212121',
    gray76: '#3a3a3b',
    gray66: '#545455',
    gray54: '#757575',
    gray38: '#9e9e9e',
    gray24: '#c2c2c2',
    gray12: '#e0e0e0',
    gray8: '#ebebeb',
    gray4: '#f5f5f5',
    gray2: '#fafafa',
    white: '#fff',
  },
  additional: {
    'deep-red': '#d50000',
    red: '#fb3a2f',
    'light-red': '#feebea',
    'dark-teal': '#089176',
    teal: '#09ab8b',
    green: '#00c853',
    'light-green': '#64dd17',
    lime: '#aeea00',
    'faded-green': '#eff9ea',
    pink: '#e82e5c',
    purple: '#b52ea8',
    violet: '#902bd0',
    'deep-purple': '#634bdf',
    'electric-blue': '#2962ff',
    'light-blue': '#0091ea',
    cyan: '#00b8d4',
    sky: '#e4f1f9',
    'deep-orange': '#ff7200',
    amber: '#ffab00',
    yellow: '#ffd600',
    gold: '#d5a43b',
    brown: '#795548',
    'blue-gray': '#607d8b',
    'deep-blue': '#00599d',
    'dark-blue': '#002b41',
    'unlit-blue': '#1b75c2',
    crimson: '#f4446b',
  },
};

async function main() {
  const styleTemplateSource = await readFile(
    new URL('./colors.scss.handlebars', import.meta.url),
    'utf-8',
  );
  const scriptTemplateSource = await readFile(
    new URL('./colors.ts.handlebars', import.meta.url),
    'utf-8',
  );

  const styleTemplate = Handlebars.compile(styleTemplateSource);
  const scriptTemplate = Handlebars.compile(scriptTemplateSource);

  const stylePath = new URL('../src/colors.scss', import.meta.url);
  const scriptPath = new URL('../src/colors/index.ts', import.meta.url);

  await writeFile(stylePath, styleTemplate({ colorsByGroups }));
  await writeFile(scriptPath, scriptTemplate({ colorsByGroups }));
}

main();
