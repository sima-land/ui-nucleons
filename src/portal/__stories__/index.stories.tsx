import { Portal } from '@sima-land/ui-nucleons/portal';
import { Button } from '@sima-land/ui-nucleons/button';
import { CSSProperties, useState } from 'react';

export default {
  title: 'service/Portal',
  component: Portal,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState<boolean>(false);

  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(0, 0, 0, .2)',
    } satisfies CSSProperties,

    modal: {
      width: 320,
      background: '#fff',
      padding: '24px 16px',
      borderRadius: 10,
    } satisfies CSSProperties,

    title: {
      margin: 0,
    } satisfies CSSProperties,
  };

  return (
    <>
      <p>
        Окно будет монтировано в отдельный элемент в конце <code>{'<body />'}</code>
      </p>

      <Button size='s' onClick={() => setOpen(true)}>
        Открыть окно
      </Button>

      {open && (
        <Portal>
          <div style={styles.overlay}>
            <div style={styles.modal}>
              <h2 style={styles.title}>Тестовое окно </h2>
              <p>Монтировано в конце body в специальном div</p>
              <Button size='s' onClick={() => setOpen(false)}>
                Закрыть
              </Button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
