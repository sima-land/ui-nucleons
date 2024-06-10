import { Modal } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { useState } from 'react';

export const meta = {
  category: 'Компоненты/Modal',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  const [open, setOpen] = useState<boolean>(false);

  const style = {
    height: '320px',
    padding: '20px',
  };

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <div style={style}>
            Модальное окно — окно, которое блокирует работу пользователя с родительским приложением
            до тех пор, пока пользователь это окно не закроет.
          </div>
        </Modal>
      )}
    </>
  );
}
