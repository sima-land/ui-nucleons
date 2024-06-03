import { Alert, AlertBody } from '@sima-land/ui-nucleons/alert';
import { CSSProperties, useState } from 'react';
import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

const styles = {
  body: {
    padding: '64px 20px',
    textAlign: 'center',
  } satisfies CSSProperties,
};

export default function () {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать Alert
      </Button>

      {open && (
        <Alert onClose={() => setOpen(false)}>
          <TopBar size='s' title='Ошибка' />

          <AlertBody style={styles.body}>
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
