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

const style = {
  padding: '40px',
  fontSize: '20px',
};

export function SizeFullscreen() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='fullscreen' style={style} flexLayout={false}>
          Модальное окно — окно, которое блокирует работу пользователя с родительским приложением до
          тех пор, пока пользователь это окно не закроет.
          <br />
          <Button size='xs' onClick={() => setOpen(false)}>
            Закрыть
          </Button>
        </Modal>
      )}
    </>
  );
}

SizeFullscreen.storyName = 'Размер fullscreen';
