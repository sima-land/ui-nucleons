import React, { useState, useReducer, useEffect, useRef } from 'react';
import { SidePage, SidePageProps } from '..';
import { Button } from '../../button';
import { Panel } from '../../panel';
import { TextField } from '../../text-field';
import { UploadArea } from '../../upload/area';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';
import imageUrl from './image.png';
import { times } from 'lodash';
import { WithHint } from '../../with-hint';
import { Clean } from '../../clean-buttons';

export default {
  title: 'desktop/SidePage',
  component: SidePage,
  parameters: {
    layout: 'padded',
  },
};

export function SizeS() {
  const [shown, toggle] = useState<boolean>(false);

  const styles: Record<'root' | 'image' | 'title' | 'message', React.CSSProperties> = {
    root: {
      padding: '0 40px 40px 40px',
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
}

SizeS.storyName = 'Размер S';

export function SizeM() {
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
            <Panel type='info' adornmentStart={<InfoSVG />}>
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
}

SizeM.storyName = 'Размер M';

export function BodyScrollLock() {
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      {times(5).map(i => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nobis? Porro assumenda optio
          quisquam quos sequi, soluta a repudiandae eius?
        </p>
      ))}

      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      {times(100).map(i => (
        <p key={i}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. At, nobis? Porro assumenda optio
          quisquam quos sequi, soluta a repudiandae eius?
        </p>
      ))}

      <SidePage
        size='s'
        shown={shown}
        withTransitions
        withScrollDisable
        onClose={() => toggle(false)}
      >
        <SidePage.Header divided title='Пусто' onClose={() => toggle(false)} />
        <SidePage.Body>
          <div style={{ padding: '20px 40px' }}>
            <h2>Тут прям пусто</h2>
            <p>А прокрутка страницы должна заблокироваться...</p>
          </div>
        </SidePage.Body>
      </SidePage>
    </>
  );
}

BodyScrollLock.storyName = 'Тест: Блокировка прокрутки страницы';

function Step1(props: SidePageProps & { onNext: () => void }) {
  return (
    <SidePage size='s' {...props}>
      <SidePage.Header divided title='Шаг 1' onClose={props.onClose} />
      <SidePage.Footer divided>
        <Button onClick={props.onNext}>Дальше</Button>
      </SidePage.Footer>
    </SidePage>
  );
}

function Step2(props: SidePageProps & { onBack: () => void; onNext: () => void }) {
  return (
    <SidePage size='s' {...props}>
      <SidePage.Header divided title='Шаг 2' onClose={props.onClose} onBack={props.onBack} />
      <SidePage.Footer divided>
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

export function Transitions() {
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
}

Transitions.storyName = 'С анимациями';

export function NoTransitions() {
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
}

NoTransitions.storyName = 'Без анимаций';

export function LazyLoading() {
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      <Button onClick={() => toggle(true)}>Показать</Button>

      <SidePage size='s' withTransitions shown={shown} onClose={() => toggle(false)}>
        <SidePage.Header divided title='Ленивая загрузка' onClose={() => toggle(false)} />
        <SidePage.Body>
          <LazyLoadingList />
        </SidePage.Body>
      </SidePage>
    </>
  );
}

LazyLoading.storyName = 'Пример "бесконечной" прокрутки';

const LazyLoadingList = () => {
  const [size, setSize] = useState<number>(25);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setSize(s => Math.min(300, s + 25)),
      );

      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, []);

  return (
    <div style={{ padding: '32px' }}>
      <div>
        {times(size).map(index => (
          <p key={index}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, itaque quas illum
            iusto quam veniam saepe ut id repudiandae excepturi? Consectetur distinctio illo
            consequuntur totam aliquid doloremque iure quidem laborum.
          </p>
        ))}
      </div>
      <div ref={ref} />
    </div>
  );
};

export function WithHints() {
  const [shown, toggleSidePage] = useState<boolean>(false);

  const styles: Record<'root', React.CSSProperties> = {
    root: {
      padding: '40px',
      display: 'flex',
    },
  };

  return (
    <>
      <Button onClick={() => toggleSidePage(true)}>Показать</Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggleSidePage(false)}>
        <SidePage.Header divided title='Проверка хинтов' onClose={() => toggleSidePage(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <WithHint hint='Тестовый хинт!' direction='right'>
              {(ref, toggleHint) => (
                <Button
                  size='s'
                  viewType='secondary'
                  ref={ref as any}
                  onMouseEnter={() => toggleHint(true)}
                  onMouseLeave={() => toggleHint(false)}
                >
                  Наведи на меня
                </Button>
              )}
            </WithHint>
          </div>
        </SidePage.Body>
      </SidePage>
    </>
  );
}

WithHints.storyName = 'Пример с хинтами внутри';

export function WithCleanButtons() {
  const [shown, toggleSidePage] = useState<boolean>(false);

  const styles: Record<'root', React.CSSProperties> = {
    root: {
      padding: '40px',
      display: 'flex',
    },
  };

  return (
    <>
      <Button onClick={() => toggleSidePage(true)}>Показать</Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggleSidePage(false)}>
        <SidePage.Header divided title='Особый футер' onClose={() => toggleSidePage(false)} />

        <SidePage.Body>
          <div style={styles.root}>Пример использования прозрачных кнопок в футере...</div>
        </SidePage.Body>

        <SidePage.Footer divided padded={false}>
          <Clean.Group>
            <Clean.Button>Эники</Clean.Button>
            <Clean.Button>Бэники</Clean.Button>
          </Clean.Group>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}

WithCleanButtons.storyName = 'Прозрачные кнопки в футере';
