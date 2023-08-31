import { useState } from 'react';
import { Modal } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { Layout } from '@sima-land/ui-nucleons/layout';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function SizeFullscreen() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='fullscreen'>
          <Modal.Header
            title='Полноэкранное модальное окно'
            onClose={() => setOpen(false)}
            divided
          />
          <Modal.Body>
            <div
              style={{
                height: 'calc(100vh - var(--modal-header-height) - var(--modal-footer-height))',
                background: '#eee',
              }}
            >
              <Layout>
                <div style={{ padding: '24px' }}>Содержимое модального окна</div>
              </Layout>
            </div>
          </Modal.Body>
          <Modal.Footer divided>
            <Layout
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                height: '100%',
              }}
            >
              <Button viewType='secondary' style={{ marginRight: 12 }}>
                Кнопка
              </Button>
              <Button viewType='primary'>Кнопка</Button>
            </Layout>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

SizeFullscreen.storyName = 'Размер fullscreen';
