import { SidePage, SidePageProps } from '@sima-land/ui-nucleons/side-page';
import { useReducer } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'С анимациями',
};

export default function WithTransitions() {
  const [[currentStep, previousStep], setStep] = useReducer(
    ([prev]: number[], next: number) => [next, prev],
    [0, 0],
  );

  const close = () => setStep(0);
  const goNext = () => setStep(currentStep + 1);
  const goBack = () => setStep(currentStep - 1);

  const withTransitions = previousStep === 0 || currentStep === 0;

  return (
    <>
      <Button size='s' onClick={() => setStep(1)}>
        Показать
      </Button>

      <Step1
        shown={currentStep === 1}
        withTransitions={withTransitions}
        onClose={close}
        onNext={goNext}
      />

      <Step2
        shown={currentStep === 2}
        withTransitions={withTransitions}
        onClose={close}
        onNext={goNext}
        onBack={goBack}
      />

      <Step3
        shown={currentStep === 3}
        withTransitions={withTransitions}
        onClose={close}
        onBack={goBack}
      />
    </>
  );
}

function Step1(props: SidePageProps & { onNext: () => void }) {
  return (
    <SidePage size='s' {...props}>
      <SidePage.Header divided title='Шаг 1' onClose={props.onClose} />
      <SidePage.Footer divided style={{ padding: '20px' }}>
        <Button onClick={props.onNext}>Дальше</Button>
      </SidePage.Footer>
    </SidePage>
  );
}

function Step2(props: SidePageProps & { onBack: () => void; onNext: () => void }) {
  return (
    <SidePage size='s' {...props}>
      <SidePage.Header divided title='Шаг 2' onClose={props.onClose} onBack={props.onBack} />
      <SidePage.Footer divided style={{ padding: '20px' }}>
        <Button onClick={props.onNext}>Дальше</Button>
      </SidePage.Footer>
    </SidePage>
  );
}

function Step3(props: SidePageProps & { onBack: () => void }) {
  return (
    <SidePage size='s' {...props}>
      <SidePage.Header divided title='Шаг 3' onClose={props.onClose} onBack={props.onBack} />
    </SidePage>
  );
}
