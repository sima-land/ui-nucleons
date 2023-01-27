import React, { useState, useReducer, useEffect, useRef, CSSProperties } from 'react';
import { SidePage, SidePageProps } from '..';
import { Button } from '../../button';
import { Panel } from '../../panel';
import { Textarea } from '../../textarea';
import { UploadArea } from '../../upload-area';
import { times } from 'lodash';
import { WithHint } from '../../with-hint';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';
import InfoSVG from '@sima-land/ui-quarks/icons/16x16/Stroked/information';
import imageSrc from './image.png';

export default {
  title: 'common/SidePage',
  component: SidePage,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [shown, toggle] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage shown={shown} size='s' withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Простой пример' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={{ padding: '20px' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe exercitationem, deserunt
            recusandae aut tenetur ducimus distinctio quo perspiciatis provident quasi!
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton onClick={() => toggle(false)}>Закрыть</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function SizeS() {
  const [shown, toggle] = useState<boolean>(false);

  const styles: Record<'root' | 'image' | 'title' | 'message', CSSProperties> = {
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
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Условия акции' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <img src={imageSrc} alt='' style={styles.image} />
            <div style={styles.title}>Не удалось открыть условия акции</div>
            <div style={styles.message}>
              Проверьте ваше подключение к сети и попробуйте обновить страницу
            </div>
          </div>
        </SidePage.Body>

        <SidePage.Footer divided style={{ padding: '0 20px' }}>
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

  const styles: Record<'root' | 'footer' | 'button', CSSProperties> = {
    root: {
      padding: '32px 40px',
      display: 'flex',
      flexDirection: 'column',
    },
    footer: {
      padding: '0 40px',
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
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <SidePage size='m' shown={shown} withTransitions onClose={() => toggle(false)}>
        <SidePage.Header divided title='Оставить отзыв' onClose={() => toggle(false)} />

        <SidePage.Body>
          <div style={styles.root}>
            <Panel type='info' adornmentStart={<InfoSVG />}>
              Обнаружили брак или не нашли часть товара в заказе? Отзыв не решит проблему. Оставьте
              претензию, и мы поможем.
            </Panel>

            <Textarea label='Комментарий' style={{ width: '100%', marginTop: '40px' }} />

            <UploadArea
              fileRole='фото'
              style={{ marginTop: '40px' }}
              countLimit={20}
              formats='JPG, PNG, GIF'
            />
          </div>
        </SidePage.Body>

        <SidePage.Footer divided style={styles.footer}>
          <Button style={styles.button} viewType='secondary'>
            Отмена
          </Button>
          <Button style={styles.button} viewType='primary'>
            Отправить
          </Button>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}

SizeM.storyName = 'Размер M';

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

Transitions.storyName = 'С анимациями';

export function NoTransitions() {
  const [shown, toggle] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

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
      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

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

  const styles: Record<'root', CSSProperties> = {
    root: {
      padding: '40px',
      display: 'flex',
    },
  };

  return (
    <>
      <Button size='s' onClick={() => toggleSidePage(true)}>
        Показать
      </Button>

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

  const styles: Record<'root', CSSProperties> = {
    root: {
      padding: '40px',
      display: 'flex',
    },
  };

  return (
    <>
      <Button size='s' onClick={() => toggleSidePage(true)}>
        Показать
      </Button>

      <SidePage size='s' shown={shown} withTransitions onClose={() => toggleSidePage(false)}>
        <SidePage.Header divided title='Особый футер' onClose={() => toggleSidePage(false)} />

        <SidePage.Body>
          <div style={styles.root}>Пример использования прозрачных кнопок в футере...</div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton>Эники</CleanButton>
            <CleanButton>Бэники</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </>
  );
}

WithCleanButtons.storyName = 'Прозрачные кнопки в футере';

export function TestPageScrollLock() {
  const styles: Record<'root', CSSProperties> = {
    root: {
      padding: '24px',
    },
  };

  const [shown, toggle] = useState<boolean>(false);
  const [contentSize, setContentSize] = useState<number>(5);

  function increaseContent() {
    setContentSize(n => n + 1);
  }

  function decreaseContent() {
    setContentSize(n => Math.max(1, n - 1));
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
        Показать SidePage
      </Button>

      <SidePage size='s' shown={shown} onClose={hide} withTransitions withScrollDisable>
        <SidePage.Header divided title='Тест: Блокировка прокрутки страницы' onClose={hide} />

        <SidePage.Body>
          <div style={styles.root}>
            <LoremIpsum paragraphCount={contentSize} />
          </div>
        </SidePage.Body>

        <SidePage.Footer divided>
          <CleanGroup>
            <CleanButton onClick={decreaseContent}>Убрать</CleanButton>
            <CleanButton onClick={increaseContent}>Добавить</CleanButton>
          </CleanGroup>
        </SidePage.Footer>
      </SidePage>
    </PageScrollLockDemo>
  );
}

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';
