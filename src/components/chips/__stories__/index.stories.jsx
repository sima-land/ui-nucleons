import React, { useReducer } from 'react';
import { Chips } from '..';

export default {
  title: 'Chips',
  component: Chips,
  parameters: {
    layout: 'padded',
  },
};

const testItems = [
  'Ручка для пакета',
  'Спортивные кружки',
  'Пакеты пищевые',
  'Пакеты для заморозки',
  'Домашние животные',
  'Дикие звери',
  'Крафт пакеты',
  'Интерьер',
  'Зоотовары',
];

export const Primary = () => {
  const [checked, toggle] = useReducer((ids, id) => ({ ...ids, [id]: !ids[id] }), { 2: true });

  return (
    <>
      <Chips
        items={testItems.map((children, index) => ({ children, index }))}
        isItemChecked={i => checked[i.index]}
        onItemClick={i => toggle(i.index)}
      />
    </>
  );
};
