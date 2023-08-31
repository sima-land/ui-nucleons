import { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanButton, CleanGroup } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function SizeXL() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='xl' height={600} onClose={() => setOpen(false)}>
          <Modal.Header divided title='Модальное окно' onClose={() => setOpen(false)} />
          <Modal.Body>
            <div style={{ padding: '24px' }}>Содержимое модального окна</div>
          </Modal.Body>
          <Modal.Footer divided>
            <CleanGroup>
              <CleanButton>Кнопка</CleanButton>
              <CleanButton>Ещё кнопка</CleanButton>
            </CleanGroup>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

SizeXL.storyName = 'Размер XL';
