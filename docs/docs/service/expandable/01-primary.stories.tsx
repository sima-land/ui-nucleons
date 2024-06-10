import { ExpandableGroup, ExpandableItem } from '@sima-land/ui-nucleons/expandable';
import { CSSProperties } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Chip } from '@sima-land/ui-nucleons/chip';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Утилиты/Expandable',
  title: 'Простой пример',
  parameters: {
    layout: 'fullscreen',
  },
};

const styles = {
  opener: {
    display: 'block',
    padding: '8px 12px',
    fontSize: '12px',
    fontWeight: 600,
    borderRadius: 4,
    boxShadow: 'inset 0 0 0 1px #ddd',
  } satisfies CSSProperties,
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

const items = [...phrases, ...phrases, ...phrases];

export default function Primary() {
  return (
    <Layout>
      <h3>Всего элементов: {items.length}</h3>

      <ExpandableGroup gap={8} itemHeight={32} opener={data => <Opener {...data} />}>
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
  return (
    <Link pseudo style={styles.opener}>
      Ещё {hiddenCount}
    </Link>
  );
}
