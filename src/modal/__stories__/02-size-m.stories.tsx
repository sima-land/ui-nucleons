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
  '--modal-height': '320px',
  padding: '20px',
};

export function SizeM() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='m' style={style} onClose={() => setOpen(false)}>
          Модальное окно — окно, которое блокирует работу пользователя с родительским приложением до
          тех пор, пока пользователь это окно не закроет.{' '}
        </Modal>
      )}
    </>
  );
}

SizeM.storyName = 'Размер M';
