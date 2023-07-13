import { Screen, ScreenProps } from '@sima-land/ui-nucleons/screen';
import { useRef, useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Box } from '@sima-land/ui-nucleons/box';
import { TouchSlider } from '@sima-land/ui-nucleons/touch-slider';
import { MobileLayout } from '@sima-land/ui-nucleons/layout';
import { times } from 'lodash';
import { useLoading } from './utils';
import styles from './stories.module.scss';
import { LoremIpsum, PageScrollLockDemo } from '../../../.storybook/utils';

export default {
  title: 'deprecated/Screen',
  component: Screen,
  parameters: {
    layout: 'padded',
  },
};

const PageTemplate = ({ onButtonClick }: { onButtonClick: React.MouseEventHandler }) => (
  <MobileLayout>
    <h1>Фоновая страница</h1>

    <div style={{ marginBottom: '24px' }}>
      {times(3).map(index => (
        <p key={index}>
          Здесь много текста чтобы убедиться что после прокрутки и закрытия экрана фоновый контент
          не был прокручен
        </p>
      ))}
    </div>

    <Button size='s' onClick={onButtonClick}>
      Показать экран
    </Button>

    <div style={{ marginTop: '24px' }}>
      {times(32).map(index => (
        <p key={index}>
          Здесь много текста чтобы убедиться что после прокрутки и закрытия экрана фоновый контент
          не был прокручен
        </p>
      ))}
    </div>
  </MobileLayout>
);

const LoadingTemplate = ({ loadingArea }: Pick<ScreenProps, 'loadingArea'>) => {
  const { state, load, reset } = useLoading();

  return (
    <>
      <PageTemplate onButtonClick={load} />

      {state !== 'closed' && (
        <Screen loading={state === 'loading'} loadingArea={loadingArea}>
          <Screen.Header
            divided
            title='Пример загрузки'
            subtitle='И подзаголовок здесь'
            onClose={reset}
          />
          <Screen.Body>
            <MobileLayout>
              {times(100).map(index => (
                <div key={index} style={{ marginTop: '24px', marginBottom: index && '24px' }}>
                  А здесь много контента чтобы проверить что сам экран нормально прокучивается
                  (включая всеми любимый iOS).
                </div>
              ))}
            </MobileLayout>
          </Screen.Body>
          <Screen.Footer>
            <MobileLayout>
              <Button
                style={{ width: '100%', margin: '12px 0' }}
                disabled={state !== 'opened'}
                onClick={reset}
              >
                Принять
              </Button>
            </MobileLayout>
          </Screen.Footer>
        </Screen>
      )}
    </>
  );
};

export const Primary = () => (
  <>
    <Screen>
      <Screen.Header
        divided
        title='Довольно большой заголовок'
        subtitle='И не менее большой подзаголовок здесь'
        onBack={() => alert('Screen: Нажата кнопка возврата')}
        onClose={() => alert('Screen: нажата кнопка закрытия')}
      />
      <Screen.Body>
        <MobileLayout>
          {times(60).map(index => (
            <div key={index} style={{ margin: '32px 0' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus culpa
              magnam voluptas alias quia, dolorum ex et eligendi aperiam beatae illum fugit, ipsum
              expedita obcaecati optio! Dolores, illum odit.
            </div>
          ))}
        </MobileLayout>
      </Screen.Body>
      <Screen.Footer>
        <MobileLayout>
          <Button
            style={{ width: '100%', margin: '12px 0' }}
            onClick={() => alert('Screen: Нажата кнопка в футере')}
          >
            Сделать что-то
          </Button>
        </MobileLayout>
      </Screen.Footer>
    </Screen>
  </>
);

export const Secondary = () => (
  <>
    <Screen>
      <Screen.Header
        divided
        title='Довольно большой заголовок'
        subtitle='И не менее большой подзаголовок здесь'
        onBack={() => alert('Screen: Нажата кнопка возврата')}
        onClose={() => alert('Screen: нажата кнопка закрытия')}
      />
      <Screen.Body>
        <MobileLayout>
          <div style={{ margin: '32px 0' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus culpa
            magnam voluptas alias quia, dolorum ex et eligendi aperiam beatae illum fugit, ipsum
            expedita obcaecati optio! Dolores, illum odit.
          </div>
        </MobileLayout>
      </Screen.Body>
      <Screen.Footer>
        <MobileLayout>
          <Button
            style={{ width: '100%', margin: '12px 0' }}
            onClick={() => alert('Screen: Нажата кнопка в футере')}
          >
            Сделать что-то
          </Button>
        </MobileLayout>
      </Screen.Footer>
    </Screen>
  </>
);

export const NoHeaderFooter = () => (
  <>
    <Screen>
      <Screen.Body>
        <MobileLayout>
          {times(100).map(index => (
            <Box key={index} padding={4}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus culpa
              magnam voluptas alias quia, dolorum ex et eligendi aperiam beatae illum fugit, ipsum
              expedita obcaecati optio! Dolores, illum odit.
            </Box>
          ))}
        </MobileLayout>
      </Screen.Body>
    </Screen>
  </>
);

export const LoadingAreaFull = () => <LoadingTemplate loadingArea='full' />;

export const LoadingAreaContent = () => <LoadingTemplate loadingArea='content' />;

export const FullScrollAfterLoading = () => {
  const { state, load, reset } = useLoading();

  return (
    <>
      <PageTemplate onButtonClick={load} />

      {state !== 'closed' && (
        <Screen
          loading={state === 'loading'}
          onFullScroll={() => alert('Screen: прокручен до конца')}
        >
          <Screen.Header
            divided
            title='Пример реакции на прокрутку'
            subtitle='Должно работать после загрузки экрана'
            onClose={reset}
          />
          <Screen.Body>
            <MobileLayout>
              {times(100).map(index => (
                <div key={index} style={{ margin: '32px 0' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima necessitatibus
                  culpa magnam voluptas alias quia, dolorum ex et eligendi aperiam beatae illum
                  fugit, ipsum expedita obcaecati optio! Dolores, illum odit.
                </div>
              ))}
            </MobileLayout>
          </Screen.Body>
        </Screen>
      )}
    </>
  );
};

export function TestPageScrollLock() {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [opened, toggle] = useState<boolean>(false);

  function close() {
    alert('Screen: нажата кнопка закрытия');
    toggle(false);
  }

  return (
    <PageScrollLockDemo>
      <Button size='s' onClick={() => toggle(true)}>
        Показать Screen
      </Button>

      {opened && (
        <Screen withScrollDisable>
          <Screen.Header divided title='Тест блокировки прокрутки страницы' onClose={close} />

          <Screen.Body ref={bodyRef}>
            <MobileLayout>
              <LoremIpsum paragraphCount={24} />
            </MobileLayout>

            <TouchSlider>
              {times(16).map(index => (
                <div
                  key={index}
                  style={{
                    width: '64px',
                    height: '64px',
                    background: '#ddd',
                    borderRadius: '50%',
                    marginLeft: index === 0 ? undefined : '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '24px',
                  }}
                >
                  {index + 1}
                </div>
              ))}
            </TouchSlider>

            <MobileLayout>
              <LoremIpsum paragraphCount={3} />
            </MobileLayout>
          </Screen.Body>
        </Screen>
      )}
    </PageScrollLockDemo>
  );
}

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';

export function SecondaryTopBar() {
  return (
    <Screen>
      <Screen.Header title='Дополнительный TopBar' />
      <Screen.Body>
        <div>
          <div className={styles.header}>
            <input
              type='text'
              className={styles.search}
              onFocus={e => e.preventDefault()}
              placeholder='Search something...'
            />
          </div>
          {Array(100)
            .fill(0)
            .map((zero, index) => (
              <div className={styles.item} key={index}>
                Item #{index}
              </div>
            ))}
        </div>
      </Screen.Body>
    </Screen>
  );
}

SecondaryTopBar.storyName = 'Пример: дополнительный топбар';
