import { TopBar } from '@sima-land/ui-nucleons/top-bar';

export const meta = {
  category: 'Компоненты/TopBar',
  title: 'С подзаголовком',
  parameters: {
    layout: 'padded',
    backgrounds: { default: '#ccc' },
  },
};

export default function WithSubtitle() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar size='m' title='Это заголовок топбара' subtitle='А это подзаголовок топбара' />
    </div>
  );
}
