import React, { useState } from 'react';
import { Expandable, ExpandableGroup } from '..';
import { Chips } from '../../chips';
import { Link } from '../../link';

export default {
  title: 'common/Expandable',
  component: ExpandableGroup,
  parameters: {
    layout: 'padded',
  },
};

const phrases = [
  'Ручка для пакета',
  'Спортивные кружки',
  'Пакеты пищевые',
  'Пакеты для заморозки',
  'Домашние животные',
  'Дикие звери',
  'Крафт пакеты',
  'Интерьер',
  'Зоо-товары',
];

const categories = [...phrases, ...[...phrases].reverse(), ...phrases];

export function Primary() {
  return (
    <Main>
      <Expandable.Group itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chips.Item>{item}</Chips.Item>
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </Main>
  );
}

Primary.storyName = 'Простой пример';

export function AllVisible() {
  return (
    <Main>
      <p>Все элементы влезут при разрешении {'<'} 930px</p>
      <Expandable.Group lineLimit={4} itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chips.Item>{item}</Chips.Item>
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </Main>
  );
}

AllVisible.storyName = 'Все элементы влазят';

export function WithClosing() {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <Main>
      <Expandable.Group
        lineLimit={4}
        expanded={opened}
        onExpand={open}
        opener={data => <Opener {...data} />}
      >
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chips.Item>{item}</Chips.Item>
          </Expandable.Item>
        ))}
      </Expandable.Group>

      {opened && <Closer onClick={close} />}
    </Main>
  );
}

WithClosing.storyName = 'С закрывающей кнопкой';

function Main({ children }: { children?: React.ReactNode }) {
  return <div style={{ maxWidth: '1024px', margin: '0 auto' }}>{children}</div>;
}

function Opener({ hiddenCount }: { hiddenCount: number }) {
  return (
    <Link
      pseudo
      style={{ display: 'block', padding: '8px 12px', fontSize: '12px', fontWeight: 600 }}
    >
      Ещё {hiddenCount}
    </Link>
  );
}

function Closer({ onClick }: { onClick?: React.MouseEventHandler }) {
  return (
    <Link
      pseudo
      style={{ display: 'block', marginTop: '16px', fontSize: '12px', fontWeight: 600 }}
      onClick={onClick}
    >
      Свернуть
    </Link>
  );
}
