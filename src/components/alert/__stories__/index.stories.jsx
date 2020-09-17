import React from 'react';
import Box from '../../box';
import Text from '../../text';
import Clean from '../../clean-buttons';
import { storiesOf } from '@storybook/react';
import Alert from '..';

storiesOf('Alert', module)
  .add('Just alert', () => (
    <Alert
      children={(
        <Box marginTop={24} marginBottom={16} display='flex' justifyContent='center'>
          <Text align='center'>
            Перенести товары
            <br />
            из списка в корзину?
          </Text>
        </Box>
      )}
      footer={(
        <Clean.Group>
          <Clean.Button>Отмена</Clean.Button>
          <Clean.Button>Ок</Clean.Button>
        </Clean.Group>
      )}
    />
  ))
  .add('with header', () => (
    <Alert
      title='Тестовый диалог'
      withDivideNavBar
      children={(
        <Box marginY={16}display='flex' justifyContent='center'>
          <Text align='center'>
            Перенести товары
            <br />
            из списка в корзину?
          </Text>
        </Box>
      )}
      footer={(
        <Clean.Group>
          <Clean.Button>Отмена</Clean.Button>
          <Clean.Button>Ок</Clean.Button>
        </Clean.Group>
      )}
    />
  ));
