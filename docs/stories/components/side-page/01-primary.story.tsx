import {
  SidePage,
  SidePageBody,
  getResponsiveSidePageProps,
} from '@sima-land/ui-nucleons/side-page';
import { useState } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { navigationButtons, TopBar } from '@sima-land/ui-nucleons/top-bar';
import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';

export const meta = {
  category: 'Компоненты/SidePage',
  title: 'Простой пример',
};

export default function Primary() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button size='s' onClick={() => setOpen(true)}>
        Показать
      </Button>

      {open && (
        <SidePage {...getResponsiveSidePageProps({ size: 's' })} onClose={() => setOpen(false)}>
          <TopBar
            size='unset'
            divided
            title='Простой пример'
            buttons={navigationButtons({
              onClose: () => setOpen(false),
            })}
          />

          <SidePageBody style={{ padding: '20px' }}>
            SidePage - это аналог модального окна со своей особой стилизацией.
          </SidePageBody>

          <BottomBar size='unset' divided>
            <CleanGroup>
              <CleanButton onClick={() => setOpen(false)}>Закрыть</CleanButton>
            </CleanGroup>
          </BottomBar>
        </SidePage>
      )}
    </>
  );
}
