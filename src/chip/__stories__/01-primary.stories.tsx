import { Chip } from '@sima-land/ui-nucleons/chip';

export default {
  title: 'common/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
  },
};

export function Primary() {
  return (
    <div style={{ display: 'flex' }}>
      <Chip>Чипс обычный</Chip>
    </div>
  );
}

Primary.storyName = 'Простой пример';
