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
