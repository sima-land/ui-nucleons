import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { CSSProperties, useState } from 'react';

export const meta = {
  category: 'Компоненты/Modal',
  title: 'Дополнительная шапка',
};

const styles = {
  header: {
    flexShrink: 0,
  } satisfies CSSProperties,

  body: {
    padding: '40px',
  } satisfies CSSProperties,
};

export default function AdditionalTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={() => setOpen(false)}>
          <div style={styles.header}>
            <TopBar
              title='Модальное окно'
              buttons={navigationButtons({ onClose: () => setOpen(false) })}
            />
            <Tabs view='clean-underline' stretch>
              <Tabs.Item name='Вкладка' />
              <Tabs.Item name='Вкладка' selected />
            </Tabs>
          </div>
          <ModalBody withScrollDisable style={styles.body}>
            Модальное окно — окно, которое блокирует работу пользователя с родительским приложением
            до тех пор, пока пользователь это окно не закроет.
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
