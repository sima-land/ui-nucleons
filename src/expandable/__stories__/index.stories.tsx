import React from 'react';
import { Expandable } from '..';
import { Chips } from '../../chips';
import { Link } from '../../link';

export default {
  title: 'common/Expandable',
  component: Expandable,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
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

  const items = [...phrases, ...[...phrases].reverse(), ...phrases];

  function Opener({ hiddenCount }: { hiddenCount: number }) {
    return (
      <Link style={{ display: 'block', padding: '8px 12px', fontSize: 12, fontWeight: 600 }}>
        Ещё {hiddenCount}
      </Link>
    );
  }

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <Expandable.Group itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
        {items.map((item, index) => (
          <Expandable.Item key={index}>
            <Chips.Item>{item}</Chips.Item>
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </div>
  );
};

Primary.storyName = 'Простой пример';
