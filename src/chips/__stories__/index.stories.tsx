import React, { useReducer } from 'react';
import { Chips } from '..';

const ITEMS = [
  'Ручка для пакета',
  'Спортивные кружки',
  'Пакеты пищевые',
  'Пакеты для заморозки',
  'Домашние животные',
  'Дикие звери',
  'Крафт пакеты',
  'Интерьер',
  'Зоотовары',
] as const;

export default {
  title: 'Chips',
  component: Chips,
  parameters: {
    layout: 'padded',
  },
};

export const Primary = () => {
  const reducer = (ids: Record<number, boolean>, id: number) => ({ ...ids, [id]: !ids[id] });
  const [checked, toggle] = useReducer(reducer, { 2: true });

  return (
    <>
      <Chips
        items={ITEMS.map((children, id) => ({ children, id }))}
        isItemChecked={item => checked[item.id]}
        onItemClick={item => toggle(item.id)}
      />
    </>
  );
};

export const WithCross = () => {
  const reducer = (ids: Record<number, boolean>, id: number) => ({ ...ids, [id]: !ids[id] });
  const [checked, toggle] = useReducer(reducer, { 2: true });

  return (
    <>
      <Chips
        items={ITEMS.map((children, id) => ({ children, id, withCross: true }))}
        isItemChecked={item => checked[item.id]}
        onItemClick={item => toggle(item.id)}
      />
    </>
  );
};
