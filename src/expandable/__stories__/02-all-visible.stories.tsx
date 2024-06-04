import { Expandable, ExpandableGroup } from '@sima-land/ui-nucleons/expandable';
import { CSSProperties } from 'react';
import { Link } from '@sima-land/ui-nucleons/link';
import { Chip } from '@sima-land/ui-nucleons/chip';
import { Layout } from '../../layout';

export default {
  title: 'service/Expandable',
  component: ExpandableGroup,
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

const categories = [...phrases, ...[...phrases].reverse(), ...phrases];

export function AllVisible() {
  return (
    <Layout>
      <h3>Всего элементов: {categories.length}</h3>
      <p>Все элементы влезут при разрешении {'<'} 930px</p>

      <Expandable.Group lineLimit={4} itemHeight={32} gap={8} opener={data => <Opener {...data} />}>
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chip>{item}</Chip>
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </Layout>
  );
}

AllVisible.storyName = 'Все элементы влазят';

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
