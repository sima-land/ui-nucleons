import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { Tabs } from '@sima-land/ui-nucleons/tabs';
import { CSSProperties, useState } from 'react';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  header: {
    flexShrink: 0,
  } satisfies CSSProperties,

  body: {
    padding: '40px',
  } satisfies CSSProperties,
};

export function AdditionalTopBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {[...Array(12).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Sapiente velit a
          consequuntur deserunt provident eaque veritatis omnis error.
        </p>
      ))}

      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {[...Array(64).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam rerum ut harum
          nam et ad necessitatibus eos quia blanditiis voluptate fuga facilis, molestias repellat
          dolor esse. Neque velit repellat et non?
        </p>
      ))}

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

AdditionalTopBar.storyName = 'Дополнительная шапка';
