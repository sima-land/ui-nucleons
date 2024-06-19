import fs from 'node:fs/promises';
import path from 'node:path';
import glob from 'fast-glob';
import chokidar from 'chokidar';
import { StoryMetaSchema, type StoryMeta } from './schemas.js';

export interface EmitStoriesEntrypointConfig {
  filename: string;
  storiesRootDir: string;
  storiesGlob: string;
}

interface StoryModuleData {
  lang: 'js' | 'mdx';

  /** путь до файла */
  filename: string;

  /** отображаемый путь */
  pathname: string;

  /** идентификатор для импорта файла в точке входа */
  importIdentifier: string;

  /** путь для импорта файла в точке входа */
  importPath: string;

  /** JSON-файл meta-данных, соответствующий найденному story-модулю */
  metaJson?: StoryMeta;
}

export function watchStories(config: EmitStoriesEntrypointConfig) {
  const emitEntrypoint = async () => {
    await emitStoriesEntrypoint({
      filename: config.filename,
      storiesGlob: './stories/**/*.story.{md,mdx,tsx}',
      storiesRootDir: './stories/',
    });
  };

  const onWatcherEvent = debounce(emitEntrypoint, 1000);

  const watcher = chokidar.watch(config.storiesGlob, {
    persistent: true,
  });

  watcher.on('add', onWatcherEvent);
  watcher.on('unlink', onWatcherEvent);
}

function debounce(fn: VoidFunction, timeout: number): VoidFunction {
  let timerId: any;

  return () => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, timeout);
  };
}

export async function emitStoriesEntrypoint(config: EmitStoriesEntrypointConfig) {
  const { filename, storiesGlob: pagesGlob } = config;

  await glob(pagesGlob)
    // проверяем что файлы найдены
    .then(filenames => (filenames.length > 0 ? filenames : Promise.reject('No stories found')))

    // формируем объект с данными файла
    .then(filenames => Promise.all(filenames.map(getPageDataFactory(config))))

    // формируем содержимое точки входа - импорт всех файлов
    .then(entries => EntrypointTemplate(entries, config))

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
      lang: path.extname(filename).includes('md') ? 'mdx' : 'js',

      // данные для импорта модуля
      importIdentifier: `Entry${index}`,
      importPath: path.relative(path.dirname(config.filename), filename),

      // прочее (для отображения)
      pathname: `/${path
        .relative(config.storiesRootDir, filename)
        .replace(/\.[^/.]+$/, '')
        .replace(/\.story$/, '')}`,

      // данные из JSON-файла, соответствующего найденному story-модулю
      metaJson: await fs
        .readFile(filename.replace(/\.[^/.]+$/, '.meta.json'), 'utf-8')
        .then(JSON.parse)
        .then(value => StoryMetaSchema.parse(value))
        .catch(() => undefined),
    };
  };
}

function EntrypointTemplate(entries: StoryModuleData[], config: EmitStoriesEntrypointConfig) {
  return `
${entries.map(ImportTemplate).join('\n')}
${entries.map(ImportSourceTemplate).join('\n')}

${entries
  .map(e => ImportExtraSourcesTemplate(e, config))
  .filter(Boolean)
  .join('\n')}
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

function ImportExtraSourcesTemplate(entry: StoryModuleData, config: EmitStoriesEntrypointConfig) {
  if (
    typeof entry.metaJson?.parameters?.sources === 'object' &&
    entry.metaJson?.parameters?.sources !== null &&
    entry.metaJson?.parameters?.sources.extraSources.length > 0
  ) {
    return `
${entry.metaJson?.parameters?.sources.extraSources
  .map((item, index) => {
    const importPath = path.relative(
      path.dirname(config.filename),
      path.resolve(path.dirname(entry.filename), item),
    );
    return `import ${entry.importIdentifier}ExtraSource${index} from '!${importPath}?raw';`;
  })
  .join('\n')}
`;
  }

  return '';
}

function ExtrasTemplate(entry: StoryModuleData) {
  let extraSources: Array<{ title: string; sourceIdentifier: string }> = [];

  if (
    typeof entry.metaJson?.parameters?.sources === 'object' &&
    entry.metaJson?.parameters?.sources !== null &&
    entry.metaJson?.parameters?.sources.extraSources.length > 0
  ) {
    extraSources = entry.metaJson.parameters.sources.extraSources.map((item, index) => ({
      sourceIdentifier: `${entry.importIdentifier}ExtraSource${index}`,
      title: path.basename(item),
    }));
  }

  const extras = {
    lang: entry.lang,
    pathname: entry.pathname,
    metaJson: entry.metaJson,
  };

  return `const ${entry.importIdentifier}Extras: any = ${JSON.stringify(extras, null, 2)};
${entry.importIdentifier}Extras.extraSources = [${extraSources
    .map(item => `{ title: "${item.title}", source: ${item.sourceIdentifier} }`)
    .join(', ')}]
`;
}

function ListItemTemplate(entry: StoryModuleData) {
  return `
{
  ...${entry.importIdentifier},
  ...${entry.importIdentifier}Extras,
  source: ${entry.importIdentifier}Source
},
`.trim();
}
