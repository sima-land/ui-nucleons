import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Светлая тема',
  parameters: {
    layout: 'padded',
  },
};

export default function LightTheme() {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '24px' }}>
      <Chip checked={false} disabled={false}>
        Чипс обычный
      </Chip>

      <Chip disabled checked={false}>
        Чипс отключенный
      </Chip>

      <Chip checked disabled={false}>
        Чипс выбранный
      </Chip>

      <Chip checked disabled>
        Чипс выбранный отключенный
      </Chip>
    </div>
  );
}
