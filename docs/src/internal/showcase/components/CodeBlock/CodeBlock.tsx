import { useEffect, useState } from 'react';
import { Plate, PlateHeader } from '#components/Plate';
import { type StoryModule } from '../../../../../.build/schemas';
import { getHighlighterCore } from 'shiki/core';
import loadWasm from 'shiki/wasm';
import themeGitHubLight from 'shiki/themes/github-light.mjs';
import classNames from 'classnames';
import styles from './CodeBlock.m.css';

const highlighter = await getHighlighterCore({
  langs: [
    //
    import('shiki/langs/mdx.mjs'),
    import('shiki/langs/tsx.mjs'),
    import('shiki/langs/scss.mjs'),
  ],
  themes: [
    //
    themeGitHubLight,
  ],
  loadWasm,
});

export function CodeBlock({ story, className }: { story: StoryModule } & { className?: string }) {
  const [sourceIndex, setSourceIndex] = useState(-1);
  const [source, setSource] = useState(story.source);

  useEffect(() => {
    setSource(story.source);
    setSourceIndex(-1);
  }, [story]);

  return (
    <Plate className={className}>
      <PlateHeader>
        <div className={styles.tabs}>
          <div
            className={classNames(styles.tab, sourceIndex === -1 && styles.active)}
            onClick={() => {
              setSource(story.source);
              setSourceIndex(-1);
            }}
          >
            Код
          </div>
          {story.extraSources?.map((item, index) => (
            <div
              className={classNames(styles.tab, sourceIndex === index && styles.active)}
              key={index}
              onClick={() => {
                setSource(item.source);
                setSourceIndex(index);
              }}
            >
              {item.title}
            </div>
          ))}
        </div>
      </PlateHeader>
      <Code
        lang={
          sourceIndex === -1
            ? 'tsx'
            : story.extraSources[sourceIndex]?.title.match(/\.[0-9a-z]+$/i)?.[0]?.replace(/^\./, '')
        }
        source={source}
      />
    </Plate>
  );
}

export function Code({ lang, source }: { lang?: string; source: string }) {
  const [state, setState] = useState('');

  useEffect(() => {
    try {
      const html = highlighter.codeToHtml(source, {
        lang: lang ?? 'text',
        theme: 'github-light',
      });

      setState(html);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      setState('<p>Ошибка</p>');
    }
  }, [source]);

  return <div className={styles.pre} dangerouslySetInnerHTML={{ __html: state }} />;
}
