import { TopBar } from '@sima-land/ui-nucleons/top-bar';
import { Plate } from '@sima-land/ui-nucleons/plate';

export default {
  title: 'common/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'custom:gray' },
  },
};

export function Customization() {
  return (
    <div style={{ maxWidth: '720px', margin: '0 auto' }}>
      <Plate rounds='m' shadow='z3' style={{ height: '240px' }}>
        <TopBar
          size='m'
          title='Настройки'
          style={{
            borderRadius: '8px 8px 0 0',
            '--top-bar-height': '76px',
            '--top-bar-title-size': '20px',
            '--top-bar-title-height': '28px',
            '--top-bar-text-align': 'left',
          }}
          divided
        />
      </Plate>
    </div>
  );
}

Customization.storyName = 'Кастомизация';
