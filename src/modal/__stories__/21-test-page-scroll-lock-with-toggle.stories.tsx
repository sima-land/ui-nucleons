import { Modal, ModalBody } from '@sima-land/ui-nucleons/modal';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { CSSProperties, Dispatch, SetStateAction, useState } from 'react';
import { PageScrollLockDemo } from '../../../.storybook/utils';

interface StepProps {
  setStep: Dispatch<SetStateAction<number>>;
}

export default {
  title: 'common/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
};

const styles = {
  body: {
    height: '300px',
    padding: '16px',
  } satisfies CSSProperties,
};

export function TestPageScrollLockWithToggle() {
  const [step, setStep] = useState<number>(-1);

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={() => setStep(1)}>
        Показать окно
      </Button>

      {step === 1 && <FirstStep setStep={setStep} />}
      {step === 2 && <SecondStep setStep={setStep} />}
      {step === 3 && <ThirdStep setStep={setStep} />}
    </PageScrollLockDemo>
  );
}

TestPageScrollLockWithToggle.storyName = 'Тест: блокировка прокрутки при переключении окон';

function FirstStep({ setStep }: StepProps) {
  return (
    <Modal size='m'>
      <TopBar divided title='Первый шаг' />
      <ModalBody withScrollDisable style={styles.body}>
        Модальное окно — окно, которое блокирует работу пользователя с родительским приложением до
        тех пор, пока пользователь это окно не закроет.
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
      <ModalBody withScrollDisable style={styles.body}>
        Модальными преимущественно реализованы диалоговые окна, предназначенные для вывода
        информации и (или) получения ответа от пользователя.
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
    <Modal size='m'>
      <TopBar divided title='Третий шаг' />
      <ModalBody withScrollDisable style={styles.body}>
        Также модальные окна часто используются для привлечения внимания пользователя к важному
        событию или критической ситуации.
      </ModalBody>

      <BottomBar divided>
        <CleanGroup>
          <CleanButton onClick={() => setStep(-1)}>Готово</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Modal>
  );
}
