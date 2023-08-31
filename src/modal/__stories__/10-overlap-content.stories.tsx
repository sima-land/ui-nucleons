import { Modal } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function WithOverlapContent() {
  const [open, setOpen] = useState<boolean>(false);
  const [count, setCount] = useState(99);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать окно
      </Button>

      {open && (
        <Modal size='m' onClose={() => setOpen(false)}>
          <Modal.Header divided title='Со стрелками рядом с окном' />
          <Modal.Body>
            <div
              style={{
                height: 360,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '64px',
              }}
            >
              {count}
            </div>
          </Modal.Body>
          <Modal.Overlap>
            <ArrowButton
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                right: 'calc(100% + 24px)',
              }}
              direction='left'
              onClick={() => setCount(count - 1)}
            />
            <ArrowButton
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: 'calc(100% + 24px)',
              }}
              direction='right'
              onClick={() => setCount(count + 1)}
            />
          </Modal.Overlap>
        </Modal>
      )}
    </>
  );
}

WithOverlapContent.storyName = 'Контент рядом с окном';
