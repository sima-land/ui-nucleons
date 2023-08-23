/* eslint-disable require-jsdoc, jsdoc/require-jsdoc */
import glob from 'fast-glob';
import { writeFile } from 'node:fs/promises';

interface Configured {
  stories: string;
  output: string;
}

interface StoriesDefined extends Configured {
  files: string[];
}

export async function prepare(config: Configured) {
  return await combine(await define(config));
}

async function define(config: Configured): Promise<StoriesDefined> {
  const files = await glob(config.stories, {
    absolute: true,
  });

  return { ...config, files };
}

async function combine(context: StoriesDefined) {
  await writeFile(
    context.output,
    context.files
      .map((item, index) => `import * as StoryModule${index} from "${item}";`)
      .concat(
        `export const modules = [\n${context.files
          .map((item, index) => `StoryModule${index}`)
          .join(',\n')}\n];`,
      )
      .join('\n'),
  );

  return { ...context };
}

// async function parseAll(context: StoriesDefined) {
//   const list = await Promise.all(context.files.map(parseStoryModule));

//   list.forEach(item => console.log(item.title));

//   return context;
// }

// async function parseStoryModule(filename: string): Promise<{ title: string }> {
//   const source = await readFile(filename, 'utf-8');
//   const ast = parse(source, {
//     sourceType: 'module',
//     plugins: ['jsx', 'typescript'],
//   });

//   let title = 'unknown';

//   traverse(ast, {
//     ExportDefaultDeclaration(nodePath) {
//       if (nodePath.node.declaration.type === 'ObjectExpression') {
//         for (const prop of nodePath.node.declaration.properties) {
//           if (
//             prop.type === 'ObjectProperty' &&
//             prop.key.type === 'Identifier' &&
//             prop.key.name === 'title' &&
//             prop.value.type === 'StringLiteral'
//           ) {
//             title = prop.value.value;
//             return;
//           }
//         }
//       }
//     },
//   });

//   return { title };
// }
