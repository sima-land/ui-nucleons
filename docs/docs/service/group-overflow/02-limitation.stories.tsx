import { GroupOverflow, RenderTail } from '@sima-land/ui-nucleons/group-overflow';
import { Layout } from '@sima-land/ui-nucleons/layout';
import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Утилиты/GroupOverflow',
  title: 'Ограниченное кол-во',
  parameters: {
    layout: 'fullscreen',
  },
};

export default function Limitation() {
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
