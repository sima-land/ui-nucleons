import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CSSProperties, useState } from 'react';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  body: {
    padding: '32px 16px',
    minHeight: '200px',
  } satisfies CSSProperties,

  footer: {
    padding: '12px 16px',
    display: 'flex',
    gap: '12px',
  } satisfies CSSProperties,

  item: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  } satisfies CSSProperties,

  caption: {
    width: '100%',
    textAlign: 'center',
    fontSize: '12px',
    lineHeight: '16px',
    color: '#ccc',
  } satisfies CSSProperties,
};

export function FluidBottomBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='m' onClose={() => setOpen(false)}>
          <ModalBody style={styles.body}>
            Модальное окно — окно, которое блокирует работу пользователя с родительским приложением
            до тех пор, пока пользователь это окно не закроет.
          </ModalBody>

          <BottomBar size='unset' divided style={styles.footer}>
            <div style={styles.item}>
              <Button viewType='primary'>Кнопка</Button>
              <span style={styles.caption}>Подпись под кнопкой</span>
            </div>

            <div style={styles.item}>
              <Button viewType='secondary'>Кнопка</Button>
              <span style={styles.caption}>Подпись под кнопкой</span>
            </div>
          </BottomBar>
        </Modal>
      )}
    </>
  );
}

FluidBottomBar.storyName = 'Подвал с подписями';
