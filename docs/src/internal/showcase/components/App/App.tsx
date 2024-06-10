import { validStories, menuItems } from '#valid-stories';
import { useMemo, useState } from 'react';
import { MenuItem } from '../Menu';
import { Plate, PlateBody, PlateHeader } from '../Plate';
import { Link } from '../Link';
import { CodeBlock } from '#components/CodeBlock';
import { useMatchMedia } from '@krutoo/utils/react';
import { useRouter } from '../../utils/router';
import classNames from 'classnames';
import styles from './App.m.css';

export function App() {
  const [pathname, setPathname] = useRouter();
  const [needCode, setNeedCode] = useState(false);
  const mobile = useMatchMedia('(max-width: 960px)');
  const story = useMemo(() => validStories.find(item => item.pathname === pathname), [pathname]);
  const sourcesEnabled = useMemo(() => story?.meta?.parameters?.sources !== false, [story]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title} onClick={() => setPathname('')}>
          <img className={styles.logo} src='/public/logo.svg' alt='logo' />
          UI-nucleons
        </div>
        <div className={styles.links}>
          <Link color='white' href='https://github.com/sima-land/ui-nucleons' target='_blank'>
            GitHub
          </Link>
        </div>
      </div>

      <div className={styles.main}>
        {!mobile && (
          <div className={styles.aside}>
            {menuItems.map((item, index) => (
              <MenuItem
                canToggle={false}
                defaultOpen
                key={index}
                data={item}
                isCurrent={data => data.type === 'story' && data.story.pathname === pathname}
                onStoryClick={data => {
                  setPathname(data.story.pathname);
                }}
              />
            ))}
          </div>
        )}

        <div className={styles.content}>
          {!story && <Stub />}

          {story && (
            <>
              <Plate
                className={classNames(styles.frame, needCode && styles.detailed)}
                style={{ overflow: 'hidden' }}
              >
                <PlateHeader>
                  <div className={styles.controls}>
                    <Link href={`/sandbox.html?path=${story.pathname}`} target='_blank'>
                      В новой вкладке
                    </Link>

                    {sourcesEnabled && (
                      <Link
                        href='#'
                        onClick={event => {
                          event.preventDefault();
                          setNeedCode(a => !a);
                        }}
                      >
                        {needCode ? 'Скрыть код' : 'Показать код'}
                      </Link>
                    )}
                  </div>
                </PlateHeader>

                <PlateBody style={{ display: 'flex', flexDirection: 'column' }}>
                  <iframe
                    // ВАЖНО: key нужен чтобы iframe не вызывал popstate у родительского документа
                    key={story.pathname}
                    className={styles.iframe}
                    src={`/sandbox.html?path=${story.pathname}`}
                  />
                </PlateBody>
              </Plate>

              {story && sourcesEnabled && needCode && (
                <CodeBlock className={styles.source} story={story} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Stub() {
  return <>Выберите пример для просмотра...</>;
}
