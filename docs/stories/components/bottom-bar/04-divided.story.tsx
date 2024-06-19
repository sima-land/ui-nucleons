import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';

export const meta = {
  title: 'Разделительная полоска',
  category: 'Компоненты/BottomBar',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

function DemoBlock({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: '800px', margin: '0 auto 32px' }}>{children}</div>;
}

export default function () {
  return (
    <DemoBlock>
      <div style={{ background: '#fff', height: 64 }} />
      <BottomBar divided style={{ padding: '0 16px' }}>
        <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
        <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>
          Вторая
        </Button>
      </BottomBar>
    </DemoBlock>
  );
}
