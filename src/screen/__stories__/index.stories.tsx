import React, { useRef, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Screen, ScreenProps } from '..';
import { Button } from '../../button';
import { Box } from '../../box';
import { TouchSlider } from '../../touch-slider';
import { MobileLayout } from '../../layout';
import { times } from 'lodash';
import { Bootstrap, useLoading } from './utils';

export default {
  title: 'deprecated/Screen',
  component: Screen,
  parameters: {
    layout: 'padded',
  },
};

const actions = {
  screenClosed: action('Screen: нажата кнопка закрытия'),
} as const;

const PageTemplate = ({ onButtonClick }: { onButtonClick: React.MouseEventHandler }) => (
  <MobileLayout>
    <h1>Фоновая страница</h1>

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
    <Bootstrap>
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
    </Bootstrap>
  );
};

export const Primary = () => (
  <Bootstrap>
    <Screen>
      <Screen.Header
        divided
        title='Довольно большой заголовок'
        subtitle='И не менее большой подзаголовок здесь'
        onBack={action('Screen: Нажата кнопка возврата')}
        onClose={actions.screenClosed}
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
            onClick={() => action('Screen: Нажата кнопка в футере')()}
          >
            Сделать что-то
          </Button>
        </MobileLayout>
      </Screen.Footer>
    </Screen>
  </Bootstrap>
);

export const NoHeaderFooter = () => (
  <Bootstrap>
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
  </Bootstrap>
);

export const LoadingAreaFull = () => <LoadingTemplate loadingArea='full' />;

export const LoadingAreaContent = () => <LoadingTemplate loadingArea='content' />;

export const FullScrollAfterLoading = () => {
  const { state, load, reset } = useLoading();

  return (
    <Bootstrap>
      <PageTemplate onButtonClick={load} />

      {state !== 'closed' && (
        <Screen
          loading={state === 'loading'}
          onFullScroll={() => action('Screen: прокручен до конца')()}
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
    </Bootstrap>
  );
};

export const BodyScrollLock = () => {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [opened, toggle] = useState<boolean>(false);

  return (
    <Bootstrap>
      <PageTemplate onButtonClick={() => toggle(true)} />

      {opened && (
        <Screen>
          <Screen.Header
            divided
            title='Пример блокировки прокрутки body'
            onClose={() => {
              actions.screenClosed(`scrollTop = ${bodyRef.current?.scrollTop}`);
              toggle(false);
            }}
          />
          <Screen.Body ref={bodyRef}>
            <MobileLayout>
              {times(24).map(index => (
                <p key={index}>
                  Можно немного прокрутить этот экран вниз чтобы проверить, что, при его открытии,
                  горизонтальная прокрутка дочернего элемента на iOS работает как надо.
                </p>
              ))}
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit sed fugit
                iure officiis! Impedit ea dolorum, magni blanditiis eaque veniam ratione eum.
                Accusantium sed repellat, eius mollitia maxime fugit exercitationem sunt.
              </p>
            </MobileLayout>
          </Screen.Body>
        </Screen>
      )}
    </Bootstrap>
  );
};
