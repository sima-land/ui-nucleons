import { ExpandableGroup, ExpandableItem } from '@sima-land/ui-nucleons/expandable';
import { CSSProperties, useState } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Chip } from '@sima-land/ui-nucleons/chip';
import { Layout } from '@sima-land/ui-nucleons/layout';

export const meta = {
  category: 'Утилиты/Expandable',
  title: 'Тест: Изменение содержимого',
  parameters: {
    layout: 'fullscreen',
  },
};

const styles = {
  divider: {
    height: '40px',
    background: '#ddd',
    margin: '10px 0',
  } satisfies CSSProperties,

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

function Divider() {
  return <div style={styles.divider} />;
}

function Opener({ hiddenCount }: { hiddenCount: number }) {
  return (
    <Link pseudo style={styles.opener}>
      Ещё {hiddenCount}
    </Link>
  );
}

export default function () {
  const [size, setSize] = useState(items.length);

  const decrease = () => {
    setSize(Math.max(0, size - 1));
  };

  const increase = () => {
    setSize(Math.min(size + 1, items.length));
  };

  const limited = items.slice(0, size);

  return (
    <Layout>
      <h3>Всего элементов: {size}</h3>
      <button onClick={decrease}>Уменьшить</button>
      <button onClick={increase}>Увеличить</button>

      <Divider />

      <ExpandableGroup lineLimit={2} gap={8} itemHeight={32} opener={data => <Opener {...data} />}>
        {limited.map((item, index) => (
          <ExpandableItem key={index}>
            <Chip>{item}</Chip>
          </ExpandableItem>
        ))}
      </ExpandableGroup>

      <Divider />
    </Layout>
  );
}
