import { SidePage, SidePageBody } from '@sima-land/ui-nucleons/side-page';
import { useState, CSSProperties } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Прозрачные кнопки в футере',
};

const styles = {
  root: {
    padding: '40px',
    display: 'flex',
  } satisfies CSSProperties,
};

export default function WithCleanButtons() {
  const [shown, setSHown] = useState<boolean>(false);

  return (
    <>
      <Button size='s' onClick={() => setSHown(true)}>
        Показать
      </Button>

      {shown && (
        <SidePage size='s' onClose={() => setSHown(false)}>
          <TopBar
            divided
            title='Особый футер'
            buttons={navigationButtons({
              onClose: () => setSHown(false),
            })}
          />

          <SidePageBody style={styles.root}>
            Пример использования прозрачных кнопок в футере...
          </SidePageBody>

          <BottomBar divided>
            <CleanGroup>
              <CleanButton>Эники</CleanButton>
              <CleanButton>Бэники</CleanButton>
            </CleanGroup>
          </BottomBar>
        </SidePage>
      )}
    </>
  );
}
