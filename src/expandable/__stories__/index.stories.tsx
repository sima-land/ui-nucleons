import { Expandable, ExpandableGroup } from '@sima-land/ui-nucleons/expandable';
import { CSSProperties, MouseEventHandler, useState } from 'react';
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

export function Primary() {
  return (
    <Layout>
      <h3>Всего элементов: {categories.length}</h3>

      <Expandable.Group gap={8} itemHeight={32} opener={data => <Opener {...data} />}>
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chip>{item}</Chip>
          </Expandable.Item>
        ))}
      </Expandable.Group>
    </Layout>
  );
}

Primary.storyName = 'Простой пример';

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

export function WithClosing() {
  const [opened, setOpened] = useState(false);

  function open() {
    setOpened(true);
  }

  function close() {
    setOpened(false);
  }

  return (
    <Layout>
      <h3>Всего элементов: {categories.length}</h3>

      <Expandable.Group
        lineLimit={4}
        expanded={opened}
        onExpand={open}
        opener={data => <Opener {...data} />}
      >
        {categories.map((item, index) => (
          <Expandable.Item key={index}>
            <Chip>{item}</Chip>
          </Expandable.Item>
        ))}
        {opened && (
          <Expandable.Item>
            <Closer onClick={close} />
          </Expandable.Item>
        )}
      </Expandable.Group>
    </Layout>
  );
}

WithClosing.storyName = 'С закрывающей кнопкой';

export function TestDynamicContent() {
  const [size, setSize] = useState(categories.length);

  const border = <div style={{ height: '40px', background: '#ddd', margin: '10px 0' }}></div>;

  return (
    <Layout>
      <h3>Всего элементов: {size}</h3>
      <button onClick={() => setSize(Math.max(0, size - 1))}>Уменьшить</button>{' '}
      <button onClick={() => setSize(Math.min(size + 1, categories.length))}>Увеличить</button>
      {border}
      <Expandable.Group lineLimit={2} gap={8} itemHeight={32} opener={data => <Opener {...data} />}>
        {[...categories.slice(0, size)].map((item, index) => (
          <Expandable.Item key={index}>
            <Chip>{item}</Chip>
          </Expandable.Item>
        ))}
      </Expandable.Group>
      {border}
    </Layout>
  );
}

TestDynamicContent.storyName = 'Тест: Изменение содержимого';

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

function Closer({ onClick }: { onClick?: MouseEventHandler }) {
  const style: CSSProperties = {
    display: 'block',
    padding: '8px 12px',
    fontSize: '12px',
    fontWeight: 600,
    borderRadius: 4,
    boxShadow: 'inset 0 0 0 1px #ddd',
  };

  return (
    <Link pseudo style={style} onClick={onClick}>
      Свернуть
    </Link>
  );
}
