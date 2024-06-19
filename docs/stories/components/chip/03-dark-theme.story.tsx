import { Chip } from '@sima-land/ui-nucleons/chip';

export const meta = {
  category: 'Компоненты/Chip',
  title: 'Темная тема',
};

export default function DarkTheme() {
  return (
    <div style={{ display: 'flex', gap: '8px', padding: '24px', background: '#212121' }}>
      <Chip colors='dark' disabled={false} checked={false}>
        Чипс обычный
      </Chip>
      <Chip colors='dark' disabled>
        Чипс отключенный
      </Chip>
      <Chip colors='dark' checked>
        Чипс выбранный
      </Chip>
      <Chip colors='dark' checked disabled>
        Чипс выбранный отключенный
      </Chip>
    </div>
  );
}
