import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { CSSProperties, useState } from 'react';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  const [open, setOpen] = useState<boolean>(false);

  const style = {
    padding: '64px 20px',
    textAlign: 'center',
  } satisfies CSSProperties;

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать Alert
      </Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
          <TopBar size='s' title='Ошибка' />

          <AlertBody style={style}>
            <>Да нет тут никакой ошибки на самом деле</>
          </AlertBody>

          <BottomBar size='s' divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Ясно</CleanButton>
            </CleanGroup>
          </BottomBar>
        </Alert>
      )}
    </>
  );
}

Primary.storyName = 'Простой пример';
