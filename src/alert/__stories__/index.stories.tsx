import React from 'react';
import { Box } from '../../box';
import { Text } from '../../text';
import { Clean } from '../../clean-buttons';
import { Alert } from '..';

export default {
  title: 'Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => (
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
);

export const WithHeader = () => (
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
);
