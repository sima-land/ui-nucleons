import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { Button } from '@sima-land/ui-nucleons/button';
import { Link } from '@sima-land/ui-nucleons/link';

export const meta = {
  title: 'Сложное наполнение',
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
      <BottomBar size='l' style={{ padding: '0 16px' }}>
        <Button size='s'>Отправить</Button>
        <Button size='s' style={{ marginLeft: '12px' }} viewType='secondary'>
          Отмена
        </Button>
        <Link style={{ marginLeft: 'auto' }}>Правила публикации</Link>
      </BottomBar>
    </DemoBlock>
  );
}
