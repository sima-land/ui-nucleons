import { GroupOverflow } from '@sima-land/ui-nucleons/group-overflow';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Chip } from '@sima-land/ui-nucleons/chip';

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
