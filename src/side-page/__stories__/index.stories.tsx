import React, { useState, useReducer } from 'react';
import { SidePage, SidePageProps } from '..';
import { Button } from '../../button';
import { Panel } from '../../panel';
import { TextField } from '../../text-field';
import { UploadArea } from '../../upload/area';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';
import imageUrl from './image.png';

export default {
  title: 'desktop/SidePage',
  component: SidePage,
  parameters: {
    layout: 'padded',
  },
};

export const SizeS = () => {
  const [shown, toggle] = useState<boolean>(false);

  const styles: Record<'root' | 'image' | 'title' | 'message', React.CSSProperties> = {
    root: {
      padding: '0 40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
    },
    image: {
      marginTop: '96px',
    },
    title: {
      marginTop: '24px',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
    },
    message: {
      marginTop: '16px',
      fontSize: '16px',
      lineHeight: '24px',
      color: '#9e9e9e',
    },
  };

  return (
    <>
      <Button onClick={() => toggle(true)}>Показать</Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Условия акции' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <img src={imageUrl} alt='' style={styles.image} />
            <div style={styles.title}>Не удалось открыть условия акции</div>
            <div style={styles.message}>
              Проверьте ваше подключение к сети и попробуйте обновить страницу
            </div>
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <Button style={{ width: '100%' }} onClick={() => toggle(false)}>
            Обновить
          </Button>
        </SidePage.Footer>
      </SidePage>
    </>
  );
};

export const SizeM = () => {
  const [shown, toggle] = useState<boolean>(false);

  const styles: Record<'root' | 'footer' | 'button', React.CSSProperties> = {
    root: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
    },
    button: {
      width: 'calc(50% - 6px)',
    },
  };

  return (
    <>
      <Button onClick={() => toggle(true)}>Показать</Button>

      <SidePage size='m' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Оставить отзыв' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <Panel color='gray4' icon={InfoSVG}>
              Обнаружили брак или не нашли часть товара в заказе? Отзыв не решит проблему. Оставьте
              претензию, и мы поможем.
            </Panel>

            <TextField multiline label='Комментарий' style={{ width: '100%', marginTop: '40px' }} />

            <UploadArea
              fileRole='фото'
              style={{ marginTop: '40px' }}
              countLimit={20}
              formats='JPG, PNG, GIF'
            />
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <div style={styles.footer} onClick={() => toggle(false)}>
            <Button style={styles.button} viewType='primary'>
              Отправить
            </Button>
            <Button style={styles.button} viewType='secondary'>
              Отмена
            </Button>
          </div>
        </SidePage.Footer>
      </SidePage>
    </>
  );
};

export const NoTransitions = () => {
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => toggle(true)}>Показать</Button>

      <SidePage size='s' shown={shown} onClose={() => toggle(false)}>
        <SidePage.Header
          divided
          title='Проверка'
          subtitle='Без анимаций'
          onClose={() => toggle(false)}
        />
      </SidePage>
    </>
  );
};

const Step1 = (props: SidePageProps & { onNext: () => void }) => (
  <SidePage size='s' {...props}>
    <SidePage.Header divided title='Шаг 1' onClose={props.onClose} />
    <SidePage.Footer divided>
      <Button onClick={props.onNext}>Дальше</Button>
    </SidePage.Footer>
  </SidePage>
);

const Step2 = (props: SidePageProps & { onBack: () => void; onNext: () => void }) => (
  <SidePage size='s' {...props}>
    <SidePage.Header divided title='Шаг 2' onClose={props.onClose} onBack={props.onBack} />
    <SidePage.Footer divided>
      <Button onClick={props.onNext}>Дальше</Button>
    </SidePage.Footer>
  </SidePage>
);

const Step3 = (props: SidePageProps & { onBack: () => void }) => (
  <SidePage size='s' {...props}>
    <SidePage.Header divided title='Шаг 3' onClose={props.onClose} onBack={props.onBack} />
  </SidePage>
);

export const Transitions = () => {
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
      <Button onClick={() => setStep(1)}>Показать</Button>

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
};