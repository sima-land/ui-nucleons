import React, { useEffect, useRef, useState } from 'react';
import { Modal, ModalProps } from '..';
import { Button } from '../../button';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { Layout } from '../../layout';
import { ArrowButton } from '../../arrow-button';
import { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';
import { navigationButtons, TopBar } from '../../top-bar';
import { Tabs } from '../../tabs';
import { usePageScrollLock } from '../../_internal/page-scroll-lock';
import styles from './modal-stories.module.scss';

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
      <Button size='s' onClick={() => toggleModal(true)}>
        Показать Modal
      </Button>

      {opened && (
        <Modal {...props} withScrollDisable onClose={() => toggleModal(false)}>
          <Modal.Header divided title='Модальное окно' onClose={() => toggleModal(false)} />
          <Modal.Body>
            <div style={{ padding: '24px' }}>Содержимое модального окна</div>
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

export function TestFullScroll() {
  const [enabled, setEnabled] = useState(true);
  const [count, setCount] = useState(0);

  const onFullScroll = () => {
    setCount(c => c + 1);
  };

  return (
    <Modal footerStub={false}>
      <Modal.Body onFullScroll={enabled ? onFullScroll : undefined}>
        <div style={{ padding: '40px' }}>
          <button onClick={() => setEnabled(a => !a)}>{enabled ? 'Выкл' : 'Вкл'}</button>
          <p>({enabled ? 'Должен срабатывать' : 'Не должен срабатывать'})</p>
          <p>
            <b>Кол-во полных прокруток: {count}</b>
          </p>
          {Array(100)
            .fill(0)
            .map((zero, index) => (
              <p key={index}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt similique,
                quibusdam nostrum quis excepturi deserunt expedita. Cum eveniet ullam placeat.
              </p>
            ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

TestFullScroll.storyName = 'Тест: onFullScroll не должен кэшироваться';

export function AdditionalTopBar() {
  const [open, setOpen] = useState(false);

  useVisualViewportUnit();

  return (
    <>
      {[...Array(12).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, quae! Sapiente velit a
          consequuntur deserunt provident eaque veritatis omnis error.
        </p>
      ))}

      <Button onClick={() => setOpen(true)}>Открыть</Button>

      {[...Array(64).keys()].map(index => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aliquam rerum ut harum
          nam et ad necessitatibus eos quia blanditiis voluptate fuga facilis, molestias repellat
          dolor esse. Neque velit repellat et non?
        </p>
      ))}

      {open && <MyModal onClose={() => setOpen(false)} />}
    </>
  );
}

function MyModal(props: ModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  usePageScrollLock(ref, { lockEnabled: true });

  return (
    <Modal size='fullscreen' {...props}>
      <Modal.Body>
        <TopBar title='Пункты самовывоза' buttons={navigationButtons({ onClose: props.onClose })} />
        <Tabs view='clean-underline' stretch>
          <Tabs.Item name='На карте' />
          <Tabs.Item name='Списком' selected />
        </Tabs>
        <div ref={ref} className={[styles.body, styles.hello].join(' ')} id='body'>
          {[...Array(64).keys()].map(index => (
            <div key={index}>Item #{index + 1}</div>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
}

function useVisualViewportUnit() {
  useEffect(() => {
    const define = (value: number) => {
      document.documentElement.style.setProperty('--vh', `${value}px`);
    };

    const update = () => {
      window.visualViewport && define(window.visualViewport.height / 100);
    };

    window.visualViewport?.addEventListener('resize', update);
    window.visualViewport?.addEventListener('scroll', update);

    update();

    return () => {
      window.visualViewport?.removeEventListener('resize', update);
      window.visualViewport?.removeEventListener('scroll', update);
    };
  }, []);
}

AdditionalTopBar.storyName = 'Пример: Дополнительная шапка';
