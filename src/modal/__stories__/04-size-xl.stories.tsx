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

export function SizeXL() {
  const [open, setOpen] = useState<boolean>(false);

  const style = {
    '--modal-height': '540px',
    padding: '20px',
  };

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='xl' style={style} onClose={() => setOpen(false)}>
          А вот и модальное окно!
        </Modal>
      )}
    </>
  );
}

SizeXL.storyName = 'Размер XL';
