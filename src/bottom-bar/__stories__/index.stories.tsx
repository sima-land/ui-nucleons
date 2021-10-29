import React from 'react';
import { Button } from '../../button';
import { BottomBar } from '..';
import { Link } from '../../link';
import { Clean } from '../../clean-buttons';

export default {
  title: 'common/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

const DemoBlock: React.FC = ({ children }) => (
  <div style={{ maxWidth: '800px', margin: '0 auto 32px' }}>{children}</div>
);

export const Primary = () => (
  <>
    <DemoBlock>
      <BottomBar size='s'>
        <Clean.Group>
          <Clean.Button>Кнопка</Clean.Button>
          <Clean.Button>Ещё кнопка</Clean.Button>
        </Clean.Group>
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

export const Divided = () => (
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

export const ComplexContent = () => (
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
