import { BottomBar } from '@sima-land/ui-nucleons/bottom-bar';
import { ReactNode } from 'react';
import { CleanGroup, CleanButton } from '@sima-land/ui-nucleons/clean-buttons';
import { Button } from '@sima-land/ui-nucleons/button';
import { Link } from '@sima-land/ui-nucleons/link';

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

export function Primary() {
  return (
    <>
      <BottomBar style={{ maxWidth: '480px' }}>
        <CleanGroup>
          <CleanButton>Отмена</CleanButton>
          <CleanButton>Применить</CleanButton>
        </CleanGroup>
      </BottomBar>
    </>
  );
}

Primary.storyName = 'Простой пример';

export function WithButtons() {
  return (
    <>
      <DemoBlock>
        <BottomBar size='s'>
          <CleanGroup>
            <CleanButton>Кнопка</CleanButton>
            <CleanButton>Ещё кнопка</CleanButton>
          </CleanGroup>
        </BottomBar>
      </DemoBlock>

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

export function Divided() {
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

Divided.storyName = 'Разделительная полоска';

export function ComplexContent() {
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

ComplexContent.storyName = 'Сложное наполнение';
