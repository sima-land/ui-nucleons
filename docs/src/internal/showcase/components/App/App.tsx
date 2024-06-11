import { validStories, menuItems } from '#valid-stories';
import { useContext, useMemo, useState } from 'react';
import { MenuItem } from '../Menu';
import { Plate, PlateBody, PlateHeader } from '../Plate';
import { Link } from '../Link';
import { CodeBlock } from '#components/CodeBlock';
import { useMatchMedia } from '@krutoo/utils/react';
import { RouterContext, useRouter } from '../../utils/router';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import classNames from 'classnames';
import styles from './App.m.css';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathname, setPathname] = useRouter();
  const [needCode, setNeedCode] = useState(false);
  const mobile = useMatchMedia('(max-width: 960px)');
  const story = useMemo(() => validStories.find(item => item.pathname === pathname), [pathname]);
  const sourcesEnabled = useMemo(() => story?.meta?.parameters?.sources !== false, [story]);

  return (
    <RouterContext.Provider value={{ pathname, redirect: setPathname }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title} onClick={() => setPathname('')}>
            <img className={styles.logo} src='/public/logo.svg' alt='logo' />
            UI-nucleons
          </div>

          <div className={styles.links}>
            {!mobile && (
              <Link color='white' href='https://github.com/sima-land/ui-nucleons' target='_blank'>
                GitHub
              </Link>
            )}

            {mobile && <IoMenu className={styles['menu-icon']} onClick={() => setMenuOpen(true)} />}
          </div>
        </div>

        <div className={styles.main}>
          {!mobile && (
            <div className={styles.aside}>
              <div className={styles.menu}>
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
            </div>
          )}

          <div className={styles.content}>
            {!story && <>Выберите пример для просмотра...</>}

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

          {mobile && <OverlayMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
        </div>
      </div>
    </RouterContext.Provider>
  );
}

function OverlayMenu({ open, onClose }: { open?: boolean; onClose?: VoidFunction }) {
  const { pathname, redirect } = useContext(RouterContext);

  if (!open) {
    return null;
  }

  return (
    <div className={styles['side-page-menu']}>
      <div className={styles['side-page-menu-header']}>
        <IoMdClose className={styles['side-page-menu-close']} onClick={() => onClose?.()} />
      </div>
      <div className={styles['side-page-menu-body']}>
        <div className={styles['side-page-menu-links']}>
          <Link href='https://github.com/sima-land/ui-nucleons' target='_blank'>
            GitHub
          </Link>
        </div>

        <hr />

        {menuItems.map((item, index) => (
          <MenuItem
            canToggle={false}
            defaultOpen
            key={index}
            data={item}
            isCurrent={data => data.type === 'story' && data.story.pathname === pathname}
            onStoryClick={data => {
              redirect(data.story.pathname);
              onClose?.();
            }}
          />
        ))}
      </div>
    </div>
  );
}
