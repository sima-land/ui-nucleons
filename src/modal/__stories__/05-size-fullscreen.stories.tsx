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

export function SizeFullscreen() {
  const [open, setOpen] = useState<boolean>(false);

  const style = {
    padding: '40px',
    fontSize: '20px',
  };

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='fullscreen' style={style}>
          <div>
            А вот и модальное окно!
            <br />
            <Button size='xs' onClick={() => setOpen(false)}>
              Закрыть
            </Button>
          </div>
        </Modal>
      )}
    </>
  );
}

SizeFullscreen.storyName = 'Размер fullscreen';
