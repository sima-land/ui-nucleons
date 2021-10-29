import React, { useState, useEffect } from 'react';
import { action } from '@storybook/addon-actions';
import { Screen } from '..';
import { Button } from '../../button';
import { Box } from '../../box';
import { TouchSlider } from '../../touch-slider';
import { MobileLayout } from '../../layout';
import { times } from 'lodash';
import on from '../../helpers/on';

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

      <Screen
        title='Заголовок'
        subtitle='And subtitle here...'
        withBackButton
        onBack={action('Screen: back button clicked')}
        onClose={action('Screen: close button clicked')}
        onFullScroll={action('Screen: fully scrolled')}
        footer={
          <Box padding={4}>
            <Button
              onClick={() => (setCount(count + 1), action('Screen: close button clicked')())}
              style={{ width: '100%' }}
              children='Footer button'
            />
          </Box>
        }
      >
        {times(100).map((zero, index) => (
          <Box key={index} padding={4}>
            Hello, world! [{index + 1}]
          </Box>
        ))}
      </Screen>
    </>
  );
};

export const NoHeaderFooter = () => (
  <Screen withHeader={false}>
    {times(100).map((zero, index) => (
      <Box key={index} padding={4}>
        There is no header! [{index + 1}]
      </Box>
    ))}
  </Screen>
);

export const LoadingAreaFull = () => <Screen loading loadingArea='full' />;

export const LoadingAreaContent = () => (
  <Screen
    loading
    loadingArea='content'
    title='Заголовок'
    subtitle='Подзаголовок'
    footer={
      <div style={{ padding: 12 }}>
        <Button style={{ width: '100%' }} disabled>
          Отправить
        </Button>
      </div>
    }
  />
);

export const FullScrollAfterLoading = () => {
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
          setTimeout(() => setIsReady(true), 1000);
        }}
        children='Open'
      />

      {isOpen && (
        <Screen
          loading={!isReady}
          title='Title'
          subtitle='And subtitle here...'
          onClose={() => {
            setIsReady(false);
            setIsOpen(false);
          }}
          onFullScroll={action('Screen: fully scrolled')}
        >
          {times(100).map(index => (
            <Box key={index} padding={4}>
              Hello, world! [{index + 1}]
            </Box>
          ))}
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
      <button onClick={() => toggle(true)}>Open</button>

      {opened && (
        <Screen title='Блокировка прокрутки body' onClose={() => toggle(false)}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit sed fugit iure
              officiis! Impedit ea dolorum, magni blanditiis eaque veniam ratione eum. Accusantium
              sed repellat, eius mollitia maxime fugit exercitationem sunt.
            </p>
          </MobileLayout>
        </Screen>
      )}
    </>
  );
};
