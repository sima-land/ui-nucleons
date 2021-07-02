import React, { useState } from 'react';
import { Box } from '../../box';
import { Text } from '../../text';
import { Clean } from '../../clean-buttons';
import { Alert } from '..';

export default {
  title: 'mobile/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const [shown, toggle] = useState<boolean>(true);

  return (
    <>
      {Array(20).fill(0).map((zero, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione laborum earum!
        </p>
      ))}

      <button onClick={() => toggle(true)}>
        Показать алерт
      </button>

      {Array(80).fill(0).map((zero, index) => (
        <p key={index}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit ratione laborum earum!
        </p>
      ))}

      {shown && (
        <Alert
          withScrollDisable
          children={(
            <Box marginTop={24} marginBottom={16} display='flex' justifyContent='center'>
              <Text align='center'>
                Тестовое сообщение.
                <br />
                И еще немного текста здесь.
              </Text>
            </Box>
          )}
          footer={(
            <Clean.Group>
              <Clean.Button onClick={() => toggle(false)}>Закрыть</Clean.Button>
            </Clean.Group>
          )}
        />
      )}
    </>
  );
};

export const WithHeader = () => (
  <Alert
    title='Тестовый диалог'
    withDivideNavBar
    children={(
      <Box marginY={16}display='flex' justifyContent='center'>
        <Text align='center'>
          Тестовое сообщение.
          <br />
          И еще немного текста здесь.
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
