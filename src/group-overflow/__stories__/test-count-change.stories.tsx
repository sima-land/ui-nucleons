import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';
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
