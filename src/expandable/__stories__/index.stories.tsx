import React, { useState } from 'react';
import { Expandable } from '..';
import { Chips } from '../../chips';
import { Link } from '../../link';
import { Tabs } from '../../tabs';

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

  const tabs = ['description', 'categories'] as const;

  const [tab, setTab] = useState<typeof tabs[number]>(tabs[0]);

  return (
    <div style={{ maxWidth: '1024px', margin: '0 auto' }}>
      <div style={{ marginBottom: '20px', textTransform: 'capitalize' }}>
        <Tabs view='clean-underline'>
          {tabs.map(tabName => (
            <Tabs.Item
              key={tabName}
              selected={tab === tabName}
              onClick={() => setTab(tabName)}
              name={tabName}
            />
          ))}
        </Tabs>
      </div>

      <div style={{ display: tab === 'description' ? undefined : 'none' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cupiditate a harum. Ipsum,
        quia! Quod accusamus non in dignissimos eum!
      </div>

      <div style={{ display: tab === 'categories' ? undefined : 'none' }}>
        <Expandable.Group itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
          {items.map((item, index) => (
            <Expandable.Item key={index}>
              <Chips.Item>{item}</Chips.Item>
            </Expandable.Item>
          ))}
        </Expandable.Group>
      </div>
    </div>
  );
};

Primary.storyName = 'Простой пример';
