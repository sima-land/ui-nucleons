import React, { CSSProperties, useState } from 'react';
import { Alert, AlertBody } from '..';
import { TopBar } from '../../top-bar';
import { BottomBar } from '../../bottom-bar';
import { Button } from '../../button';
import { CleanGroup, CleanButton } from '../../clean-buttons';
import { LoremIpsum } from '../../../.storybook/utils';

export default {
  title: 'common/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <Alert>
      <TopBar title='Ошибка' />

      <AlertBody style={{ padding: '64px 20px', textAlign: 'center' }}>
        Да нет тут никакой ошибки на самом деле
      </AlertBody>

      <BottomBar divided>
        <CleanGroup>
          <CleanButton>Ясно</CleanButton>
        </CleanGroup>
      </BottomBar>
    </Alert>
  );
}

Primary.storyName = 'Простой пример';

export function TestPageScrollLock() {
  const [shown, toggle] = useState<boolean>(true);

  const style: CSSProperties = {
    height: '168px',
    padding: '16px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      <h1>Пример страницы</h1>

      <LoremIpsum paragraphCount={3} />

      <Button size='s' onClick={() => toggle(true)}>
        Показать
      </Button>

      <LoremIpsum paragraphCount={50} />

      {shown && (
        <Alert onClose={() => toggle(false)} withScrollDisable>
          <TopBar divided title='Пример' />

          <AlertBody style={style}>
            <p>Какой-то текст без особого смысла здесь</p>
          </AlertBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton onClick={() => toggle(false)}>Ну ладно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </>
  );
}

TestPageScrollLock.storyName = 'Тест: блокировка прокрутки страницы';
