import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

interface StepProps {
  setStep: Dispatch<SetStateAction<number>>;
}

export function TestPageScrollLockWithToggle() {
  const [step, setStep] = useState<number>(-1);

  return (
    <>
      <Button size='s' onClick={() => setStep(1)}>
        Показать окно
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

TestPageScrollLockWithToggle.storyName = 'Тест: блокировка прокрутки при переключении окон';

function FirstStep({ setStep }: StepProps) {
  return (
    <Modal size='s'>
      <TopBar divided title='Первый шаг' />
      <ModalBody>
        <div style={{ height: '300px' }}></div>
      </ModalBody>
      <BottomBar divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(s => s + 1)}>Дальше</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}

function SecondStep({ setStep }: StepProps) {
  return (
    <Modal size='m'>
      <TopBar divided title='Второй шаг' />
      <ModalBody>
        <div style={{ height: '300px' }}></div>
      </ModalBody>
      <BottomBar divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(s => s - 1)}>Назад</CleanButton>
          <CleanButton onClick={() => setStep(s => s + 1)}>Далее</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}

function ThirdStep({ setStep }: StepProps) {
  return (
    <Modal size='l'>
      <TopBar divided title='Третий шаг' />
      <ModalBody>
        <div style={{ height: '300px' }}></div>
      </ModalBody>

      <BottomBar divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(-1)}>Готово</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}
