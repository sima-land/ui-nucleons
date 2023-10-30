import { Modal } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { useState } from 'react';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState<boolean>(false);

  const style = {
    '--modal-height': '320px',
    padding: '20px',
  };

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal style={style} onClose={() => setOpen(false)}>
          А вот и модальное окно!
        </Modal>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
