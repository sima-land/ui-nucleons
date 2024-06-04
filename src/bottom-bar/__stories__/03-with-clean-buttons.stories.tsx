import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';

export default {
  title: 'common/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

function DemoBlock({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: '800px', margin: '0 auto 32px' }}>{children}</div>;
}

export function WithCleanButtons() {
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

WithCleanButtons.storyName = 'С прозрачными кнопками';
