import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Утилиты/GroupOverflow',
  title: 'Без замыкающего элемента',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function WithoutTail() {
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
