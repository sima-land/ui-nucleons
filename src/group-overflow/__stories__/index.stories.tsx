import { useEffect, useState } from 'react';
import { GroupOverflow, RenderTail } from '..';
import { Layout } from '../../layout';
import { Chips } from '../../chips';
import { on } from '../../helpers/on';

export default {
  title: 'common/GroupOverflow',
  component: GroupOverflow,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Primary() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);

  return (
    <Layout>
      <div style={{ padding: '24px 0' }}>
        <h3>Всего элементов: {items.length}</h3>
        <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>
          {items.map((item, index) => (
            <Chips.Item key={index}>{item}</Chips.Item>
          ))}
        </GroupOverflow>
      </div>
    </Layout>
  );
}

Primary.storyName = 'Простой пример';

export function Limitation() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);
  const max = 5;

  const tail: RenderTail = data => (
    // вычитаем еще 1 так как вывели второй замыкающий элемент
    <Chips.Item checked>+{data.hiddenCount + (items.length - max - 1)}</Chips.Item>
  );

  return (
    <Layout>
      <div style={{ padding: '24px 0' }}>
        <h3>Всего элементов: {items.length}</h3>

        <GroupOverflow tail={tail}>
          {items.slice(0, max).map((item, index) => (
            <Chips.Item key={index}>{item}</Chips.Item>
          ))}

          <Chips.Item checked>+{items.length - max}</Chips.Item>
        </GroupOverflow>
      </div>
    </Layout>
  );
}

Limitation.storyName = 'Ограниченное кол-во';

export function WithoutTail() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);

  return (
    <Layout>
      <div style={{ padding: '24px 0' }}>
        <h3>Всего элементов: {items.length}</h3>
        <GroupOverflow>
          {items.map((item, index) => (
            <Chips.Item key={index}>{item}</Chips.Item>
          ))}
        </GroupOverflow>
      </div>
    </Layout>
  );
}

WithoutTail.storyName = 'Без замыкающего элемента';

export function TestCountChange() {
  const [count, setCount] = useState(24);
  const items: string[] = [...Array(count).keys()].map(index => `Элемент №${index + 1}`);

  useEffect(() => {
    const off = on<KeyboardEvent>(window, 'keydown', event => {
      switch (event.code) {
        case 'ArrowUp':
          setCount(n => n + 1);
          break;
        case 'ArrowDown':
          setCount(n => Math.max(0, n - 1));
          break;
      }
    });

    return off;
  }, []);

  return (
    <Layout>
      <div style={{ padding: '24px 0' }}>
        <h3>Всего элементов: {items.length}</h3>
        <GroupOverflow tail={data => <Chips.Item checked>+{data.hiddenCount}</Chips.Item>}>
          {items.map((item, index) => (
            <Chips.Item key={index}>{item}</Chips.Item>
          ))}
        </GroupOverflow>
        <p>Используйте стрелки на клавиатуре чтобы изменить кол-во элементов</p>
      </div>
    </Layout>
  );
}

TestCountChange.storyName = 'Тест: изменение кол-ва элементов';
