import { Modal, ModalBody, ModalOverlap } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { useState } from 'react';

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
          <ModalBody>
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
          </ModalBody>
          <ModalOverlap>
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
          </ModalOverlap>
        </Modal>
      )}
    </>
  );
}

WithOverlapContent.storyName = 'Контент рядом с окном';
