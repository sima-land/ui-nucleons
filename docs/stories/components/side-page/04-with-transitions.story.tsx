import { SidePage, SidePageBody, useSidePageTransition } from '@sima-land/ui-nucleons/side-page';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'С анимациями',
};

interface StepProps {
  onNext?: VoidFunction;
  onBack?: VoidFunction;
  onClose?: VoidFunction;
}

export default function WithTransitions() {
  const [shown, setShown] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const close = () => setShown(false);
  const goNext = () => setCurrentStep(currentStep + 1);
  const goBack = () => setCurrentStep(currentStep - 1);

  const { state, sidePageProps } = useSidePageTransition({
    shown,
    extraProps: { size: 's', onClose: close },
  });

  return (
    <>
      <Button
        size='s'
        onClick={() => {
          setShown(true);
          setCurrentStep(1);
        }}
      >
        Показать
      </Button>

      {state.isMounted && (
        <SidePage {...sidePageProps}>
          {currentStep === 1 && <Step1 onNext={goNext} onBack={goBack} onClose={close} />}
          {currentStep === 2 && <Step2 onNext={goNext} onBack={goBack} onClose={close} />}
          {currentStep === 3 && <Step3 onNext={goNext} onBack={goBack} onClose={close} />}
        </SidePage>
      )}
    </>
  );
}

function Step1({ onNext }: StepProps) {
  return (
    <>
      <TopBar divided title='Шаг 1' />

      <SidePageBody />

      <BottomBar divided style={{ padding: '20px' }}>
        <Button onClick={onNext}>Вперёд!</Button>
      </BottomBar>
    </>
  );
}

function Step2({ onNext }: StepProps) {
  return (
    <>
      <TopBar divided title='Шаг 2' />

      <SidePageBody />

      <BottomBar divided style={{ padding: '20px' }}>
        <Button onClick={onNext}>Дальше</Button>
      </BottomBar>
    </>
  );
}

function Step3({ onClose }: StepProps) {
  return (
    <>
      <TopBar divided title='Шаг 3' />

      <SidePageBody />

      <BottomBar divided style={{ padding: '20px' }}>
        <Button onClick={onClose}>Закрыть</Button>
      </BottomBar>
    </>
  );
}
