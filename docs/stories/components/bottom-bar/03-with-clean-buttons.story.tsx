import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export const meta = {
  title: 'С прозрачными кнопками',
  category: 'Компоненты/BottomBar',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

function DemoBlock({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: '800px', margin: '0 auto 32px' }}>{children}</div>;
}

export default function () {
  const content = (
    <CleanGroup>
      <CleanButton>Кнопка</CleanButton>
      <CleanButton>Ещё кнопка</CleanButton>
    </CleanGroup>
  );

  return (
    <>
      <DemoBlock>
        <BottomBar size='s'>{content}</BottomBar>
      </DemoBlock>
      <DemoBlock>
        <BottomBar size='m'>{content}</BottomBar>
      </DemoBlock>
      <DemoBlock>
        <BottomBar size='l'>{content}</BottomBar>
      </DemoBlock>
    </>
  );
}
