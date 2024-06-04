import { TopBar } from '@sima-land/ui-nucleons/top-bar';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function WithSubtitle() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <TopBar size='m' title='Это заголовок топбара' subtitle='А это подзаголовок топбара' />
    </div>
  );
}

WithSubtitle.storyName = 'С подзаголовком';
