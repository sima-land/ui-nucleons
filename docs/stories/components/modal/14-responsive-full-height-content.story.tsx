import {
  Modal,
  ModalBody,
  ModalStyle,
  getResponsiveModalProps,
} from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { CSSProperties, useState } from 'react';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { useBreakpoint } from '@sima-land/ui-nucleons/hooks';

export const meta = {
  category: 'Компоненты/Modal',
  title: 'Контент на всю высоту отзывчивого окна',
};

export default function ResponsiveFullHeightContent() {
  const desktop = useBreakpoint('xs+');

  const styles = {
    modal: {
      '--modal-height': desktop ? '480px' : undefined,
    } satisfies ModalStyle,

    body: {
      borderBottomLeftRadius: 'inherit',
      borderBottomRightRadius: 'inherit',
    } satisfies CSSProperties,

    content: {
      height: '100%',
      boxShadow: 'inset 0 0 0 6px red',
    } satisfies CSSProperties,
  };

  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal
          style={styles.modal}
          {...getResponsiveModalProps({ size: 'm' })}
          onClose={() => setOpen(false)}
        >
          <TopBar size='unset' divided title='Пример' />
          <ModalBody style={styles.body}>
            <div style={styles.content}></div>
          </ModalBody>
        </Modal>
      )}
    </>
  );
}
