import { Modal } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function WithoutBars() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='s' height={320}>
          <Modal.Body>
            <div style={{ padding: 24 }}>Содержимое модального окна</div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

WithoutBars.storyName = 'Без шапки и подвала';
