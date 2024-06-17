import { validStories, menuItems } from '#valid-stories';
import { useContext, useMemo, useState } from 'react';
import { MenuItem } from '../Menu';
import { Link } from '../Link';
import { useMatchMedia } from '@krutoo/utils/react';
import { RouterContext, useRouter } from '../../utils/router';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { StoryViewer } from '#components/StoryViewer';
import styles from './App.m.css';

// @todo убрать хардкод в конфиг
const defaultPathname = '/summary';

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pathname, setPathname] = useRouter({ defaultPathname });
  const mobile = useMatchMedia('(max-width: 960px)');
  const story = useMemo(() => validStories.find(item => item.pathname === pathname), [pathname]);

  return (
    <RouterContext.Provider value={{ pathname, redirect: setPathname }}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title} onClick={() => setPathname(defaultPathname)}>
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

        <div className={styles.main}>
          {!story && <h1>404</h1>}

          {story && <StoryViewer story={story} />}
        </div>

        {mobile && <ModalMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
      </div>
    </RouterContext.Provider>
  );
}

function ModalMenu({ open, onClose }: { open?: boolean; onClose?: VoidFunction }) {
  const { pathname, redirect } = useContext(RouterContext);

  if (!open) {
    return null;
  }

  return (
    <div className={styles['modal-menu']}>
      <div className={styles['modal-menu-header']}>
        <IoMdClose className={styles['modal-menu-close']} onClick={() => onClose?.()} />
      </div>
      <div className={styles['modal-menu-body']}>
        <div className={styles['modal-menu-links']}>
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
