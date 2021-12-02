import React, { useState, useEffect, useRef } from 'react';
import { action } from '@storybook/addon-actions';
import { Screen } from '..';
import { Button } from '../../button';
import { Box } from '../../box';
import { TouchSlider } from '../../touch-slider';
import { MobileLayout } from '../../layout';
import { times } from 'lodash';
import on from '../../helpers/on';
import { useInfiniteScroll } from '../../hooks';

export default {
  title: 'mobile/Screen',
  component: Screen,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>

      <Screen>
        <Screen.Header
          divided
          title='Довольно большой заголовок'
          subtitle='И не менее большой подзаголовок здесь'
          onBack={action('Screen: back button clicked')}
          onClose={action('Screen: close button clicked')}
        />
        <Screen.Body>
          {times(100).map(index => (
            <Box key={index} padding={4}>
              Параграф текста под номером {index + 1}
            </Box>
          ))}
        </Screen.Body>
        <Screen.Footer>
          <Box padding={4}>
            <Button
              style={{ width: '100%' }}
              onClick={() => {
                setCount(count + 1);
                action('Screen: footer button clicked')();
              }}
            >
              Сделать что-то
            </Button>
          </Box>
        </Screen.Footer>
      </Screen>
    </>
  );
};

export const NoHeaderFooter = () => (
  <Screen>
    <Screen.Body>
      {times(100).map(index => (
        <Box key={index} padding={4}>
          There is no header! [{index + 1}]
        </Box>
      ))}
    </Screen.Body>
  </Screen>
);

export const LoadingAreaFull = () => <Screen loading loadingArea='full' />;

export const LoadingAreaContent = () => (
  <Screen loading loadingArea='content'>
    <Screen.Header
      divided
      title='Заголовок'
      subtitle='И подзаголовок здесь'
      onBack={action('Screen: back button clicked')}
      onClose={action('Screen: close button clicked')}
    />
    <Screen.Footer>
      <div style={{ padding: 12 }}>
        <Button style={{ width: '100%' }} disabled>
          Отправить
        </Button>
      </div>
    </Screen.Footer>
  </Screen>
);

export const FullScrollAfterLoading = () => {
  const [state, setState] = useState<'closed' | 'loading' | 'opened'>('closed');
  const bodyRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll(
    bodyRef,
    {
      threshold: 320,
      onFullScroll: () => action('Screen: fully scrolled')(),
    },
    [state],
  );

  return (
    <>
      <Button
        size='s'
        onClick={() => {
          if (state === 'closed') {
            setState('loading');
            setTimeout(() => setState('opened'), 1000);
          }
        }}
      >
        Загрузить экран
      </Button>

      {state !== 'closed' && (
        <Screen loading={state === 'loading'}>
          <Screen.Header
            divided
            title='Заголовок'
            subtitle='И подзаголовок здесь'
            onClose={() => {
              setState('closed');
            }}
          />
          <Screen.Body ref={bodyRef}>
            {times(100).map(index => (
              <Box key={index} padding={4}>
                Hello, world! [{index + 1}]
              </Box>
            ))}
          </Screen.Body>
        </Screen>
      )}
    </>
  );
};

export const BodyScrollLock = () => {
  const [opened, toggle] = useState<boolean>(false);

  useEffect(() => {
    document.documentElement.style.setProperty('--vh', `${window.visualViewport.height / 100}px`);

    return on(window, 'resize', () => {
      document.documentElement.style.setProperty('--vh', `${window.visualViewport.height / 100}px`);
    });
  }, []);

  return (
    <>
      <Button size='s' onClick={() => toggle(true)}>
        Показать экран
      </Button>

      {opened && (
        <Screen>
          <Screen.Header divided title='Блокировка прокрутки body' onClose={() => toggle(false)} />
          <Screen.Body>
            <MobileLayout>
              {times(24).map(index => (
                <p key={index}>
                  Можешь немного прокрутить этот экран вниз чтобы проверить, что, при его открытии,
                  горизонтальная прокрутка дочернего элемента на iOS работает не совсем как надо.
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
    </>
  );
};
