import { Modal, ModalBody, ModalOverlap } from '@sima-land/ui-nucleons/modal';
import { Button } from '@sima-land/ui-nucleons/button';
import { ArrowButton } from '@sima-land/ui-nucleons/arrow-button';
import { CSSProperties, useState } from 'react';

export const meta = {
  category: 'Компоненты/Modal',
  title: 'Контент рядом с окном',
};

const styles = {
  content: {
    height: 360,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '64px',
  } satisfies CSSProperties,
  decrease: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 'calc(100% + 24px)',
  } satisfies CSSProperties,
  increase: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    left: 'calc(100% + 24px)',
  } satisfies CSSProperties,
};

export default function WithOverlapContent() {
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
            <div style={styles.content}>{count}</div>
          </ModalBody>
          <ModalOverlap>
            <ArrowButton
              style={styles.decrease}
              direction='left'
              onClick={() => setCount(count - 1)}
            />
            <ArrowButton
              style={styles.increase}
              direction='right'
              onClick={() => setCount(count + 1)}
            />
          </ModalOverlap>
        </Modal>
      )}
    </>
  );
}
