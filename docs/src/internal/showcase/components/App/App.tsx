import { validStories, menuItems } from '#valid-stories';
import { useEffect, useMemo, useState } from 'react';
import { codeToHtml } from 'shiki';
import { MenuItem } from '../Menu';
import { Plate, PlateBody, PlateHeader } from '../Plate';
import { Link } from '../Link';
import { useMatchMedia } from '@krutoo/utils/react';
import classNames from 'classnames';
import styles from './App.m.css';

function createQueryRouter() {
  const listeners = new Set<VoidFunction>();

  let currentPathname = '';

  const updatePathname = (pathname: string) => {
    currentPathname = pathname;
    listeners.forEach(fn => fn());
  };

  return {
    getPathname() {
      return currentPathname;
    },

    setPathname(pathname: string) {
      const url = new URL(window.location.href);

      url.searchParams.delete('path');

      window.history.pushState(
        { pathname: currentPathname },
        '',
        `${url.pathname}${url.search}${
          pathname ? `${url.search ? '&' : '?'}path=${pathname}` : ''
        }`,
      );

      updatePathname(pathname);
    },

    observe() {
      const onPopState = () => {
        // @todo проверить event.target тк iframe на странице тоже вызывает событие на родителе
        updatePathname(new URL(window.location.href).searchParams.get('path') ?? '');
      };

      updatePathname(new URL(window.location.href).searchParams.get('path') ?? '');

      window.addEventListener('popstate', onPopState);

      return () => {
        window.removeEventListener('popstate', onPopState);
      };
    },

    subscribe(listener: VoidFunction) {
      listeners.add(listener);

      return () => {
        listeners.delete(listener);
      };
    },
  };
}

function useRouter() {
  const router = useMemo(createQueryRouter, []);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const unobserve = router.observe();
    const unsubscribe = router.subscribe(() => {
      setPathname(router.getPathname());
    });

    setPathname(router.getPathname());

    return () => {
      unobserve();
      unsubscribe();
    };
  }, [router]);

  const redirect = (path: string) => {
    router.setPathname(path);
  };

  return [pathname, redirect] as const;
}

export function App() {
  const [pathname, setPathname] = useRouter();
  const [needCode, setNeedCode] = useState(false);
  const mobile = useMatchMedia('(max-width: 960px)');

  const story = validStories.find(item => item.pathname === pathname);
  const sourcesEnabled = story?.metaJson?.parameters.sources !== false;

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

              {sourcesEnabled && needCode && (
                <Plate className={styles.source}>
                  <PlateHeader>Код</PlateHeader>
                  <CodeBlock source={story.source} />
                </Plate>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function CodeBlock({ source }: { source: string }) {
  const [state, setState] = useState('');

  useEffect(() => {
    codeToHtml(source, {
      lang: 'tsx',
      theme: 'github-light',
    }).then(setState);
  });

  return (
    <div className={styles.code}>
      <div className={styles.pre} dangerouslySetInnerHTML={{ __html: state }} />
    </div>
  );
}

function Stub() {
  return <>Выберите пример для просмотра...</>;
}
