import fs from 'node:fs/promises';
import path from 'node:path';
import glob from 'fast-glob';

export interface EmitStoriesEntrypointConfig {
  filename: string;
  storiesRootDir: string;
  storiesGlob: string;
}

interface StoryModuleData {
  /** путь до файла */
  filename: string;

  /** содержимое файла */
  source: string;

  /** отображаемый путь */
  pathname: string;

  /** идентификатор для импорта файла в точке входа */
  importIdentifier: string;

  /** путь для импорта файла в точке входа */
  importPath: string;
}

export async function emitStoriesEntrypoint(config: EmitStoriesEntrypointConfig) {
  const { filename, storiesGlob: pagesGlob } = config;

  await glob(pagesGlob)
    // проверяем что файлы найдены
    .then(filenames => (filenames.length > 0 ? filenames : Promise.reject('No stories found')))

    // формируем объект с данными файла
    .then(filenames => Promise.all(filenames.map(getPageDataFactory(config))))

    // формируем содержимое точки входа - импорт всех файлов
    .then(entries => EntrypointTemplate(entries))

    // создаем каталог для точки входа если его нет
    .then(content => fs.mkdir(path.dirname(filename), { recursive: true }).then(() => content))

    // создаем файл точки входа
    .then(content => fs.writeFile(filename, content));

  console.log('entrypoint emit: done');
}

function getPageDataFactory(config: EmitStoriesEntrypointConfig) {
  return async (filename: string, index: number): Promise<StoryModuleData> => {
    return {
      filename,

      // содержимое модуля
      source: await fs.readFile(filename, 'utf-8'),

      // данные для импорта модуля
      importIdentifier: `Entry${index}`,
      importPath: path.relative(path.dirname(config.filename), filename),

      // прочее (для отображения)
      pathname: `/${path.relative(config.storiesRootDir, filename).replace(/\.tsx$/i, '')}`,
    };
  };
}

function EntrypointTemplate(entries: StoryModuleData[]) {
  return `
${entries.map(ImportTemplate).join('\n')}
${entries.map(ImportSourceTemplate).join('\n')}

${entries.map(ExtrasTemplate).join('\n')}

export default [\n${entries.map(ListItemTemplate).join('\n')}\n];
`;
}

function ImportTemplate(entry: StoryModuleData) {
  return `import * as ${entry.importIdentifier} from '${entry.importPath}';`;
}

function ImportSourceTemplate(entry: StoryModuleData) {
  return `import ${entry.importIdentifier}Source from '!${entry.importPath}?raw';`;
}

function ExtrasTemplate(entry: StoryModuleData) {
  const extras = {
    pathname: entry.pathname,
  };

  return `const ${entry.importIdentifier}Extras = ${JSON.stringify(extras, null, 2)};`;
}

function ListItemTemplate(entry: StoryModuleData) {
  return `{ ...${entry.importIdentifier}, ...${entry.importIdentifier}Extras, source: ${entry.importIdentifier}Source },`;
}
