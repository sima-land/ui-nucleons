/* eslint-disable jsdoc/require-jsdoc */
import fs from 'node:fs/promises';
import path from 'node:path';
import handlebars from 'handlebars';
import { colorGroups, gradients } from './data.mjs';

const items = [
  {
    templatePath: 'colors.ts.handlebars',
    templateData: { colorGroups },
    outputPath: '../src/colors/index.ts',
  },
  {
    templatePath: 'colors.scss.handlebars',
    templateData: { colorGroups },
    outputPath: '../src/colors.scss',
  },
  {
    templatePath: 'gradients.ts.handlebars',
    templateData: { gradients },
    outputPath: '../src/gradients/index.ts',
  },
  {
    templatePath: 'gradients.scss.handlebars',
    templateData: { gradients },
    outputPath: '../src/gradients.scss',
  },
];

function relative(pathname) {
  return path.resolve(import.meta.dirname, pathname);
}

async function outputFile(filename, content) {
  await fs.mkdir(path.dirname(relative(filename)), { recursive: true });
  await fs.writeFile(relative(filename), content);
}

async function buildSource({ templatePath, templateData, outputPath }) {
  const templateSrc = await fs.readFile(relative(templatePath), 'utf-8');
  const template = handlebars.compile(templateSrc);

  await outputFile(relative(outputPath), template(templateData));
}

await Promise.all(items.map(buildSource));
