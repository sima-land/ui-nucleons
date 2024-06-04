import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';

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

export function WithButtons() {
  return (
    <>
      <DemoBlock>
        <BottomBar size='s' style={{ padding: '0 16px' }}>
          <Button size='s' style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>
            Первая
          </Button>
          <Button size='s' style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>
            Вторая
          </Button>
        </BottomBar>
      </DemoBlock>

      <DemoBlock>
        <BottomBar style={{ padding: '0 16px' }}>
          <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
          <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>
            Вторая
          </Button>
        </BottomBar>
      </DemoBlock>

      <DemoBlock>
        <BottomBar size='l' style={{ padding: '0 16px' }}>
          <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
          <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>
            Вторая
          </Button>
        </BottomBar>
      </DemoBlock>
    </>
  );
}

WithButtons.storyName = 'С обычными кнопками';
