import { GroupOverflow, RenderTail } from '@sima-land/ui-nucleons/group-overflow';
import { useEffect, useState } from 'react';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Chip } from '@sima-land/ui-nucleons/chip';
import { on } from '@sima-land/ui-nucleons/helpers/on';

export default {
  title: 'service/GroupOverflow',
  component: GroupOverflow,
  parameters: {
    layout: 'fullscreen',
  },
};

export function Primary() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);

  return (
    <Layout>
      <h3>Всего элементов: {items.length}</h3>
      <GroupOverflow tail={data => <Chip checked>+{data.hiddenCount}</Chip>}>
        {items.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </GroupOverflow>
    </Layout>
  );
}

Primary.storyName = 'Простой пример';

export function Limitation() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);
  const max = 5;

  const tail: RenderTail = data => (
    // вычитаем еще 1 так как вывели второй замыкающий элемент
    <Chip checked>+{data.hiddenCount + (items.length - max - 1)}</Chip>
  );

  return (
    <Layout>
      <h3>Всего элементов: {items.length}</h3>

      <GroupOverflow tail={tail}>
        {items.slice(0, max).map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}

        <Chip checked>+{items.length - max}</Chip>
      </GroupOverflow>
    </Layout>
  );
}

Limitation.storyName = 'Ограниченное кол-во';

export function WithoutTail() {
  const items: string[] = [...Array(24).keys()].map(index => `Элемент №${index + 1}`);

  return (
    <Layout>
      <h3>Всего элементов: {items.length}</h3>
      <GroupOverflow>
        {items.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </GroupOverflow>
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
      <h3>Всего элементов: {items.length}</h3>
      <GroupOverflow tail={data => <Chip checked>+{data.hiddenCount}</Chip>}>
        {items.map((item, index) => (
          <Chip key={index}>{item}</Chip>
        ))}
      </GroupOverflow>
      <p>Используйте стрелки на клавиатуре чтобы изменить кол-во элементов</p>
    </Layout>
  );
}

TestCountChange.storyName = 'Тест: Изменение кол-ва элементов';
