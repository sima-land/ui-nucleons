import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import { StoryModule } from '#utils';
import { Plate, PlateHeader } from '#components/Plate';
import styles from './CodeBlock.m.css';
import classNames from 'classnames';

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
    codeToHtml(source, {
      lang: lang ?? 'text',
      theme: 'github-light',
    }).then(setState);
  });

  return <div className={styles.pre} dangerouslySetInnerHTML={{ __html: state }} />;
}
