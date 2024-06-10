import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Простой пример',
  parameters: {
    layout: 'padded',
  },
};

export default function Primary() {
  return (
    <div style={{ display: 'flex' }}>
      <Chip>Чипс обычный</Chip>
    </div>
  );
}
