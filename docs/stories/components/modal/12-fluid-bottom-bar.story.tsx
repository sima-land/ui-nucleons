import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { BottomBar, BottomBarStyle } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CSSProperties, useState } from 'react';

export const meta = {
  category: 'Компоненты/Modal',
  title: 'Подвал с подписями',
};

const styles = {
  body: {
    padding: '32px 16px',
    minHeight: '200px',
  } satisfies CSSProperties,

  footer: {
    '--bottom-bar-height': 'auto',
    padding: '12px 16px',
    display: 'flex',
    gap: '12px',
  } satisfies BottomBarStyle,

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

export default function FluidBottomBar() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
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
