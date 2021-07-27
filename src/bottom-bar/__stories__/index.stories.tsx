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
  },
};

export const Primary = () => (
  <div style={{ padding: 80, background: '#ddd' }}>
    <BottomBar size='s'>
      <Clean.Group>
        <Clean.Button>Кнопка</Clean.Button>
        <Clean.Button>Ещё кнопка</Clean.Button>
      </Clean.Group>
    </BottomBar>

    <div style={{ height: 64 }} />

    <BottomBar size='s' style={{ padding: '0 16px' }}>
      <Button size='s' style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
      <Button size='s' style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>Вторая</Button>
    </BottomBar>

    <div style={{ height: 64 }} />

    <BottomBar style={{ padding: '0 16px' }}>
      <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
      <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>Вторая</Button>
    </BottomBar>

    <div style={{ height: 64 }} />

    <BottomBar size='l' style={{ padding: '0 16px' }}>
      <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
      <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>Вторая</Button>
    </BottomBar>
  </div>
);

export const Divided = () => (
  <div style={{ padding: 80, background: '#ddd' }}>
    <div style={{ background: '#fff', height: 64 }} />
    <BottomBar divided style={{ padding: '0 16px' }}>
      <Button style={{ width: 'calc(50% - 6px)', marginRight: '12px' }}>Первая</Button>
      <Button style={{ width: 'calc(50% - 6px)' }} viewType='secondary'>Вторая</Button>
    </BottomBar>
  </div>
);

export const ComplexContent = () => (
  <div style={{ padding: 80, background: '#ddd' }}>
    <BottomBar size='l' style={{ padding: '0 16px' }}>
      <Button size='s'>Отправить</Button>
      <Button size='s' style={{ marginLeft: '12px' }} viewType='secondary'>Отмена</Button>
      <Link style={{ marginLeft: 'auto' }}>Правила публикации</Link>
    </BottomBar>
  </div>
);
