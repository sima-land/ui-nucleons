import { Modal, ModalBody, getResponsiveModalProps } from '@sima-land/ui-nucleons/modal';
import { useState } from 'react';
import { TopBar, navigationButtons } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { Button } from '@sima-land/ui-nucleons/button';
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
        <Modal {...getResponsiveModalProps({ size: 'm' })} onClose={hide}>
          <TopBar
            divided
            title='Тест: Блокировка прокрутки страницы'
            {...navigationButtons({ onClose: hide })}
          />

          <ModalBody withScrollDisable>
            <div style={{ padding: '24px' }} onClick={increaseContent}>
              <LoremIpsum paragraphCount={count} />
            </div>
          </ModalBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={decreaseContent}>Убрать</CleanButton>
              <CleanButton onClick={increaseContent}>Добавить</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Modal>
      )}
    </PageScrollLockDemo>
  );
}

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';
