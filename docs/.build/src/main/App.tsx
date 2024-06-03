import { useEffect, useState } from 'react';
import { codeToHtml } from 'shiki';
import stories from '#stories';
import styles from './App.m.css';

export function App() {
  const [pathname, setPathname] = useState('/');

  const story = stories.find(item => item.pathname === pathname);
  const content = story ? (
    <>
      <>
        <a href={`/sandbox.html?path=${story.pathname}`} target='_blank'>
          В новой вкладке
        </a>
        <iframe className={styles.iframe} src={`/sandbox.html?path=${story.pathname}`} />
      </>
    </>
  ) : (
    <Stub />
  );
  const source = story?.source;

  return (
    <div className={styles.container}>
      <div className={styles.header}>UI-nucleons</div>
      <div className={styles.main}>
        <div className={styles.aside}>
          {[...stories]
            .sort((a, b) => a.pathname.localeCompare(b.pathname))
            .map((item, index) => (
              <div key={index}>
                <a
                  className={styles.navitem}
                  href={pathname}
                  onClick={e => {
                    e.preventDefault();
                    setPathname(item.pathname);
                  }}
                >
                  {item.pathname.replace(/^\//i, '')}
                </a>
              </div>
            ))}
        </div>

        <div className={styles.content}>
          {content}
          {source && <CodeBlock source={source} />}
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
      theme: 'one-light',
    }).then(setState);
  });

  return (
    <div className={styles.code}>
      <div
        style={{ fontSize: '16px', overflow: 'auto', padding: '1rem' }}
        dangerouslySetInnerHTML={{ __html: state }}
      />
    </div>
  );
}

function Stub() {
  return <>Выберите пример для просмотра...</>;
}
