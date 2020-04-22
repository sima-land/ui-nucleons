import React, { Fragment, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Screen from '../index';
import Button from '../../button';
import Box from '../../box';

storiesOf('Screen', module)
  .add('Basic usage', () => {
    const [count, setCount] = useState(0);

    return (
      <Fragment>
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
      </Fragment>
    );
  })
  .add('No header/footer', () => (
    <Screen withHeader={false}>
      {Array(100).fill(0).map((zero, index) => (
        <Box key={index} padding={4}>There is no header! [{index + 1}]</Box>
      ))}
    </Screen>
  ))
  .add('Loading state', () => (
    <Screen loading />
  ))
  .add('full scroll after loading', () => {
    const [isReady, setIsReady] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Fragment>
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
      </Fragment>
    );
  });
