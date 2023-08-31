import { Modal } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

export function TestPageScrollLock() {
  const [open, setOpen] = useState(false);
  const [count, setCount] = useState<number>(5);

  const increaseContent = () => setCount(count + 1);
  const decreaseContent = () => setCount(Math.max(1, count - 1));
  const show = () => setOpen(true);
  const hide = () => setOpen(false);

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={show}>
        Показать окно
      </Button>

      {open && (
        <Modal withScrollDisable onClose={hide}>
          <Modal.Header divided title='Тест: Блокировка прокрутки страницы' onClose={hide} />

          <Modal.Body>
            <div style={{ padding: '24px' }} onClick={increaseContent}>
              <LoremIpsum paragraphCount={count} />
            </div>
          </Modal.Body>

          <Modal.Footer divided>
            <CleanGroup>
              <CleanButton onClick={decreaseContent}>Убрать</CleanButton>
              <CleanButton onClick={increaseContent}>Добавить</CleanButton>
            </CleanGroup>
          </Modal.Footer>
        </Modal>
      )}
    </PageScrollLockDemo>
  );
}

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';
