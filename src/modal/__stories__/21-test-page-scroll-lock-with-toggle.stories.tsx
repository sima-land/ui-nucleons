import { Modal } from '@sima-land/ui-nucleons/modal';
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
