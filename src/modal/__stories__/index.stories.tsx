import React, { useState } from 'react';
import { Modal, ModalProps } from '..';
import { Button } from '../../button';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { Layout } from '../../layout';
import { Box } from '../../box';
import { ArrowButton } from '../../arrow-button';
import { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

function SizeTemplate(props: ModalProps) {
  const [opened, toggleModal] = useState<boolean>(true);

  return (
    <>
      <LoremIpsum paragraphCount={5} />

      <Button size='s' onClick={() => toggleModal(true)}>
        Показать Modal
      </Button>

      <LoremIpsum paragraphCount={100} />

      {opened && (
        <Modal {...props} withScrollDisable onClose={() => toggleModal(false)}>
          <Modal.Header divided title='Модальное окно' onClose={() => toggleModal(false)} />
          <Modal.Body>
            <Box padding={6}>Содержимое модального окна</Box>
          </Modal.Body>
          <Modal.Footer divided>
            <CleanGroup>
              <CleanButton>Кнопка</CleanButton>
              <CleanButton>Ещё кнопка</CleanButton>
            </CleanGroup>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export function SizeS() {
  return <SizeTemplate size='s' height={300} />;
}

SizeS.storyName = 'Размер S';

export function SizeM() {
  return <SizeTemplate size='m' height={400} />;
}

SizeM.storyName = 'Размер M';

export function SizeL() {
  return <SizeTemplate size='l' height={500} />;
}

SizeL.storyName = 'Размер L';

export function SizeXL() {
  return <SizeTemplate size='xl' height={600} />;
}

SizeXL.storyName = 'Размер XL';

export function Fullscreen() {
  return (
    <>
      <Modal size='fullscreen'>
        <Modal.Header divided title='Полноэкранное модальное окно' />
        <Modal.Body>
          <div
            style={{
              height: 'calc(100vh - var(--modal-header-height) - var(--modal-footer-height))',
              background: '#eee',
            }}
          >
            <Layout>
              <Box padding={6}>Содержимое модального окна</Box>
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
    </>
  );
}

Fullscreen.storyName = 'Размер fullscreen';

export function WithoutBars() {
  return (
    <Modal size='s' height={320}>
      <Modal.Body>
        <div style={{ padding: 24 }}>Содержимое модального окна</div>
      </Modal.Body>
    </Modal>
  );
}

WithoutBars.storyName = 'Без шапки и подвала';

export function WithOverlapContent() {
  const [count, setCount] = useState(99);

  return (
    <Modal size='m'>
      <Modal.Header divided title='Со стрелочками рядом с окном' />
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
  );
}

WithOverlapContent.storyName = 'Контент рядом с окном';

export function TestPageScrollLock() {
  const [opened, toggle] = useState(false);
  const [count, setCount] = useState<number>(5);

  function increaseContent() {
    setCount(count + 1);
  }

  function decreaseContent() {
    setCount(Math.max(1, count - 1));
  }

  function show() {
    toggle(true);
  }

  function hide() {
    toggle(false);
  }

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={show}>
        Показать Modal
      </Button>

      {opened && (
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

interface StepProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

function FirstStep({ setStep }: StepProps) {
  return (
    <Modal size='s' withScrollDisable>
      <Modal.Header divided title='Первый шаг' />
      <Modal.Body>
        <div style={{ height: '300px' }}></div>
      </Modal.Body>
      <Modal.Footer divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(s => s + 1)}>Дальше</CleanButton>
        </CleanGroup>
      </Modal.Footer>
    </Modal>
  );
}

function SecondStep({ setStep }: StepProps) {
  return (
    <Modal size='m' withScrollDisable>
      <Modal.Header divided title='Второй шаг' />
      <Modal.Body>
        <div style={{ height: '300px' }}></div>
      </Modal.Body>
      <Modal.Footer divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(s => s - 1)}>Назад</CleanButton>
          <CleanButton onClick={() => setStep(s => s + 1)}>Далее</CleanButton>
        </CleanGroup>
      </Modal.Footer>
    </Modal>
  );
}

function ThirdStep({ setStep }: StepProps) {
  return (
    <Modal size='l' withScrollDisable>
      <Modal.Header divided title='Третий шаг' />
      <Modal.Body>
        <div style={{ height: '300px' }}></div>
      </Modal.Body>

      <Modal.Footer divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(-1)}>Готово</CleanButton>
        </CleanGroup>
      </Modal.Footer>
    </Modal>
  );
}

export function TestToggle() {
  const [step, setStep] = useState<number>(-1);

  return (
    <>
      <Button size='s' onClick={() => setStep(1)}>
        Показать Modal
      </Button>

      {/* для проверки блокировки прокрутки */}
      <div style={{ height: '6000px', background: '#eee' }} />

      <>
        {step === 1 && <FirstStep setStep={setStep} />}
        {step === 2 && <SecondStep setStep={setStep} />}
        {step === 3 && <ThirdStep setStep={setStep} />}
      </>
    </>
  );
}

TestToggle.storyName = 'Тест: блокировка прокрутки при переключении окон';
