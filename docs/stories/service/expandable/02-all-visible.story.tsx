import { ExpandableGroup, ExpandableItem } from '@sima-land/ui-nucleons/expandable';
import { CSSProperties } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Chip } from '@sima-land/ui-nucleons/chip';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Утилиты/Expandable',
  title: 'Все элементы влазят',
  parameters: {
    layout: 'fullscreen',
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

const items = [...phrases, ...[...phrases].reverse(), ...phrases];

export default function AllVisible() {
  return (
    <Layout>
      <h3>Всего элементов: {items.length}</h3>
      <p>Все элементы влезут при разрешении {'<'} 930px</p>

      <ExpandableGroup lineLimit={4} itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
        {items.map((item, index) => (
          <ExpandableItem key={index}>
            <Chip>{item}</Chip>
          </ExpandableItem>
        ))}
      </ExpandableGroup>
    </Layout>
  );
}

function Opener({ hiddenCount }: { hiddenCount: number }) {
  const style: CSSProperties = {
    display: 'block',
    padding: '8px 12px',
    fontSize: '12px',
    fontWeight: 600,
    borderRadius: 4,
    boxShadow: 'inset 0 0 0 1px #ddd',
  };

  return (
    <Link pseudo style={style}>
      Ещё {hiddenCount}
    </Link>
  );
}
