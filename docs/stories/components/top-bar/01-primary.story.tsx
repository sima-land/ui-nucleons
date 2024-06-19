import { TopBar } from '@sima-land/ui-nucleons/top-bar';

export const meta = {
  category: 'Компоненты/TopBar',
  title: 'Простой пример',
  parameters: {
    backgrounds: { default: '#ccc' },
  },
};

export default function Primary() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar size='m' title='Это заголовок топбара' />
    </div>
  );
}
