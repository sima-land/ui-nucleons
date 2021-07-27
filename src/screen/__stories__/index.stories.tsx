import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Screen } from '..';
import { Button } from '../../button';
import { Box } from '../../box';

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
        footer={(
          <Box padding={4}>
            <Button
              onClick={() => (
                setCount(count + 1),
                action('Screen: close button clicked')()
              )}
              style={{ width: '100%' }}
              children='Footer button'
            />
          </Box>
        )}
      >
        {Array(100).fill(0).map((zero, index) => (
          <Box key={index} padding={4}>Hello, world! [{index + 1}]</Box>
        ))}
      </Screen>
    </>
  );
};

export const NoHeaderFooter = () => (
  <Screen withHeader={false}>
    {Array(100).fill(0).map((zero, index) => (
      <Box key={index} padding={4}>There is no header! [{index + 1}]</Box>
    ))}
  </Screen>
);

export const LoadingAreaFull = () => (
  <Screen
    loading
    loadingArea='full'
  />
);

export const LoadingAreaContent = () => (
  <Screen
    loading
    loadingArea='content'
    title='Заголовок'
    subtitle='Подзаголовок'
    footer={(
      <div style={{ padding: 12 }}>
        <Button style={{ width: '100%' }} disabled>Отправить</Button>
      </div>
    )}
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
          {Array(100).fill(0).map((zero, index) => (
            <Box key={index} padding={4}>Hello, world! [{index + 1}]</Box>
          ))}
        </Screen>
      )}
    </>
  );
};
