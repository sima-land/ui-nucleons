import { readFileSync } from 'node:fs';
import fs from 'node:fs/promises';
import path from 'node:path';
import glob from 'fast-glob';

interface Entry {
  filename: string;
  source: string;
  pathname: string;
  identifier: string;
  importPath: string;
}

const FILENAME = './.tmp/entries.ts';

await glob('./docs/**/*.tsx')
  // .then(filenames => (console.log(filenames), filenames))
  .then(filenames => (filenames.length > 0 ? filenames : Promise.reject('No stories found')))
  .then(filenames => filenames.map(getEntry))
  .then(entries => getModuleContent(entries))
  .then(content => fs.mkdir(path.dirname(FILENAME), { recursive: true }).then(() => content))
  .then(content => fs.writeFile(FILENAME, content));

function getEntry(filename: string, index: number): Entry {
  return {
    identifier: `Entry${index}`,
    importPath: path.relative(path.dirname(FILENAME), filename),

    filename,
    source: readFileSync(filename, 'utf-8'),
    pathname: `/${path
      .relative('./docs/', filename)
      .replace(/\.tsx$/i, '')
      .replace(/\/index$/i, '')}`,
  };
}

function getModuleContent(entries: Entry[]) {
  return `
${entries.map(item => `import * as ${item.identifier} from '${item.importPath}';`).join('\n')}

export default [
${entries
  .map(
    item =>
      `  { ...${item.identifier}, ...(${JSON.stringify({
        pathname: item.pathname,
        source: item.source,
      })}) }`,
  )
  .join(',\n')}
];
`;
}
